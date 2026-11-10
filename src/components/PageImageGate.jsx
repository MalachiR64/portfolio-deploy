import { useLayoutEffect, useRef, useState } from 'react';
import './PageImageGate.css';

export default function PageImageGate({ children, timeout = 10000 }) {
    const contentRef = useRef(null);
    const [ready, setReady] = useState(false);

    useLayoutEffect(() => {
        const content = contentRef.current;
        const images = new Map();
        const cleanups = new Set();
        let stopped = false;
        let revision = 0;
        let settleTimer;

        const reveal = () => {
            if (stopped) return;
            stopped = true;
            observer.disconnect();
            clearTimeout(deadline);
            clearTimeout(settleTimer);
            cleanups.forEach((cleanup) => cleanup());
            setReady(true);
        };

        const waitForImage = (image) => {
            // Hidden content still occupies space; eager loading also handles
            // offscreen images that would otherwise wait for scrolling.
            image.loading = 'eager';
            const source = `${image.src}|${image.srcset}`;
            if (images.get(image)?.source === source) return images.get(image).promise;

            const promise = new Promise((resolve) => {
                const cleanup = () => {
                    image.removeEventListener('load', finish);
                    image.removeEventListener('error', finish);
                    cleanups.delete(cleanup);
                };
                const finish = () => {
                    cleanup();
                    // A failed download or decode must not block navigation.
                    if (image.naturalWidth && image.decode) {
                        image.decode().catch(() => {}).then(resolve);
                    } else {
                        resolve();
                    }
                };
                cleanups.add(cleanup);
                image.addEventListener('load', finish);
                image.addEventListener('error', finish);
                if (image.complete) finish();
            });
            images.set(image, { source, promise });
            return promise;
        };

        const scan = () => {
            if (stopped) return;
            const currentRevision = ++revision;
            clearTimeout(settleTimer);
            Promise.all(Array.from(content.querySelectorAll('img'), waitForImage)).then(() => {
                if (!stopped && currentRevision === revision) {
                    // Allow asynchronously mounted timeline images to join the batch.
                    settleTimer = setTimeout(reveal, 150);
                }
            });
        };

        const observer = new MutationObserver(scan);
        observer.observe(content, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'srcset'],
        });
        const deadline = setTimeout(reveal, timeout);
        scan();

        return () => {
            stopped = true;
            observer.disconnect();
            clearTimeout(deadline);
            clearTimeout(settleTimer);
            cleanups.forEach((cleanup) => cleanup());
        };
    }, [timeout]);

    return (
        <div className="page-image-gate" aria-busy={!ready}>
            {!ready && <div className="page-image-loading" role="status">Loading page…</div>}
            <div ref={contentRef} style={{ visibility: ready ? 'visible' : 'hidden' }} aria-hidden={!ready}>
                {children}
            </div>
        </div>
    );
}

import { useState, useRef } from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
    const form = useRef(null);
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New loading state

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Show "Sending..."

        emailjs.sendForm(
            'service_zd9g3ds', // Ensure this is correct
            'template_ibeqvb7',
            form.current,
            {
                publicKey: 'I__It6v7EqEhrofnp',
            }
        ).then(
            () => {
                setStatus('Message sent successfully!');
                // Clear form fields
                if (form.current) {
                    form.current.reset();
                    // Clear all input fields programmatically
                    const inputs = form.current.querySelectorAll('input, textarea');
                    inputs.forEach(input => input.value = '');
                }
            },
            (error) => {
                setStatus('Failed to send message. Please try again.');
                console.error('FAILED...', error.text);
            }
        ).finally(() => {
            setIsLoading(false); // Reset "Send Message" text
            setTimeout(() => setStatus(''), 5000);
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p className="contact-description">Feel free to reach out for collaborations, questions, opportunities or anything else.</p>
            
            <div className="social-links">
                <a href="mailto:mrosario5664@gmail.com" className="social-link">
                    <FaEnvelope /> mrosario5664@gmail.com
                </a>
                <a href="https://linkedin.com/in/malachirosario" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com/malachi_rosario" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/malachirosario" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaXTwitter />
                </a>
            </div>

            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="user_name">Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                    />
                </div>

                {status && <div className="status-message">{status}</div>}
                <button type="submit" className="submit-btn">
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
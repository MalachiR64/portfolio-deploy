import { useState } from 'react';
import '../styles/Resume.css';
import { FaDownload } from 'react-icons/fa';

// Import resume files

export default function Resume() {
    const [resumeType, setResumeType] = useState('software');
    const [fileFormat, setFileFormat] = useState('pdf');

    const resumeFiles = {
        software: {
            docx: '/ResumeMalachiRosarioSwe.docx',
            pdf: '/ResumeMalachiRosarioSwe.pdf',
        },
        data: {
            docx: '/ResumeMalachiRosarioDs.docx',
            pdf: '/ResumeMalachiRosarioDs.pdf',
        }
    };

    return (
        <div className="resume-container">
            <h1>Resume</h1>

            <div className="resume-controls">
                <div className="select-group">
                    <div className="select-wrapper">
                        <label className="select-label" htmlFor="resume-type">Resume Type</label>
                        <select 
                            id="resume-type"
                            value={resumeType}
                            onChange={(e) => setResumeType(e.target.value)}
                            className="resume-select"
                        >
                            <option value="software">Software Engineering</option>
                            <option value="data">Data Science / Analyst</option>
                        </select>
                    </div>

                    <div className="select-wrapper">
                        <label className="select-label" htmlFor="file-format">File Format</label>
                        <select 
                            id="file-format"
                            value={fileFormat}
                            onChange={(e) => setFileFormat(e.target.value)}
                            className="format-select"
                        >
                            <option value="docx">DOCX</option>
                            <option value="pdf">PDF</option>
                        </select>
                    </div>
                </div>
                <a 
                    href={resumeFiles[resumeType][fileFormat]}
                    download={`MalachiRosario_Resume_${resumeType}_${fileFormat.toUpperCase()}.${fileFormat}`}
                    className="download-btn"
                >
                    <FaDownload /> Download
                </a>
            </div>

            {fileFormat === 'pdf' && (
                <div className="format-warning">
                    Note: DOCX format is recommended for better compatibility
                </div>
            )}

            {fileFormat === 'pdf' ? (
                <div className="resume-viewer">
                    <object
                        data={resumeFiles[resumeType][fileFormat]}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    >
                        <p>Your browser does not support PDF viewing. Please download the PDF to view it.</p>
                    </object>
                </div>
            ) : (
                <div className="resume-spacer"></div>
            )}
        </div>
    );
}
'use client';

import './resume.css';

/* Google Drive file ID, shared once so the embed and the outbound links can
   never drift apart. */
const RESUME_FILE_ID = '15z6wl-5atpmdB1YhwC_Irp-tUyUbLT1o';

/* /preview is the ONLY Drive URL that can be framed. The /view URL sends
   `X-Frame-Options: SAMEORIGIN`, so embedding it renders a blank box. */
const RESUME_EMBED = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;

/* The human-facing Drive page, for the "open in Drive" link below. */
const RESUME_DRIVE = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;

export default function Resume() {
    return (
        <div className="resume-page">
            <div className="resume-title">
                <p>📄 Resume 📄</p>
            </div>

            <div className="resume-frame">
                <div className="resume-doc">
                    <iframe
                        className="resume-embed"
                        src={RESUME_EMBED}
                        title="Mohamed Amir Mamoon — resume"
                        allow="autoplay"
                    />
                </div>
            </div>

            <div className="resume-actions">
                <a
                    className="resume-link"
                    href={RESUME_DRIVE}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open in Google Drive ↗
                </a>
            </div>
        </div>
    );
}

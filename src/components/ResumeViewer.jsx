import React, { useEffect, useState, useCallback } from "react";
import "../styles/ResumeViewer.css";

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;
const RESUME_FILE = "Aryan_Goyal_Resume.pdf";

// Other components open the viewer by dispatching this event on window.
export const RESUME_EVENT = "open-resume";
export const openResume = () => window.dispatchEvent(new Event(RESUME_EVENT));

export default function ResumeViewer() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(RESUME_EVENT, onOpen);
    return () => window.removeEventListener(RESUME_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    // lock body scroll while the modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="rv-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Resume">
      <div className="rv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rv-bar">
          <span className="rv-title">
            <span className="rv-dot" /> resume.pdf
          </span>
          <div className="rv-actions">
            <a
              className="rv-btn"
              href={RESUME_URL}
              download={RESUME_FILE}
            >
              ↓ Download
            </a>
            <a
              className="rv-btn"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ Open
            </a>
            <button className="rv-btn rv-close" onClick={close} aria-label="Close">
              ✕
            </button>
          </div>
        </div>
        <div className="rv-body">
          <iframe
            className="rv-frame"
            src={`${RESUME_URL}#toolbar=0&navpanes=0&view=FitH`}
            title="Aryan Goyal resume"
          />
        </div>
      </div>
    </div>
  );
}

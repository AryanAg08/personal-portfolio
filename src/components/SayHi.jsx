import React, { useEffect, useRef, useState, useCallback } from "react";
import "../styles/SayHi.css";

// Web3Forms access key — get yours free at https://web3forms.com (enter your
// email, they mail you a key). Set it in .env as VITE_WEB3FORMS_KEY (see
// .env.example). On Netlify/PM2, set the same env var in the build environment.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// Other components open this terminal by dispatching the event on window.
export const SAYHI_EVENT = "open-sayhi";
export const openSayHi = () => window.dispatchEvent(new Event(SAYHI_EVENT));

// Guided prompt steps
const STEPS = [
  { key: "name", label: "name", question: "Who's reaching out? (your name)" },
  { key: "email", label: "email", question: "Your email — so Aryan can reply:" },
  { key: "message", label: "message", question: "Type your message, then hit Enter:" },
];

const PROMPT = "visitor@aryan.dev:~$";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function SayHi() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ name: "", email: "", message: "" });
  const [value, setValue] = useState("");
  const [log, setLog] = useState([]); // {type:'sys'|'echo'|'err'|'ok', text}
  const [status, setStatus] = useState("input"); // input | sending | done
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const reset = useCallback(() => {
    setStep(0);
    setAnswers({ name: "", email: "", message: "" });
    setValue("");
    setStatus("input");
    setLog([
      { type: "sys", text: "aryan-mail v1.0 — leave a message, it lands in Aryan's inbox." },
      { type: "sys", text: STEPS[0].question },
    ]);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => {
      reset();
      setOpen(true);
    };
    window.addEventListener(SAYHI_EVENT, onOpen);
    return () => window.removeEventListener(SAYHI_EVENT, onOpen);
  }, [reset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  // keep focus + scroll pinned to the bottom
  useEffect(() => {
    if (open && status === "input") inputRef.current?.focus();
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [open, log, status]);

  const send = async (payload) => {
    if (!ACCESS_KEY) {
      setLog((l) => [
        ...l,
        { type: "err", text: "✗ messaging isn't configured (missing VITE_WEB3FORMS_KEY)." },
        { type: "sys", text: "email goyalaryan51@gmail.com directly for now." },
      ]);
      setStatus("done");
      return;
    }
    setStatus("sending");
    setLog((l) => [...l, { type: "sys", text: "sending…" }]);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio hello from ${payload.name}`,
          from_name: payload.name,
          name: payload.name,
          email: payload.email,
          message: payload.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setLog((l) => [
          ...l,
          { type: "ok", text: `✓ message delivered. Thanks, ${payload.name} — Aryan will get back to you.` },
          { type: "sys", text: "type `restart` to send another, or press Esc to close." },
        ]);
      } else {
        throw new Error(data.message || "send failed");
      }
    } catch (err) {
      setLog((l) => [
        ...l,
        { type: "err", text: `✗ couldn't send: ${err.message}` },
        { type: "sys", text: "type `restart` to try again, or email goyalaryan51@gmail.com directly." },
      ]);
    }
    setStatus("done");
  };

  const submitLine = (raw) => {
    const text = raw.trim();
    // echo what they typed
    setLog((l) => [...l, { type: "echo", text: step === 2 ? text || "(empty)" : text }]);

    if (status === "done") {
      if (text.toLowerCase() === "restart") reset();
      return;
    }

    const current = STEPS[step];

    if (!text) {
      setLog((l) => [...l, { type: "err", text: `${current.label} can't be empty. ${current.question}` }]);
      return;
    }
    if (current.key === "email" && !isEmail(text)) {
      setLog((l) => [...l, { type: "err", text: "that doesn't look like a valid email. try again:" }]);
      return;
    }

    const next = { ...answers, [current.key]: text };
    setAnswers(next);

    if (step < STEPS.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      setLog((l) => [...l, { type: "sys", text: STEPS[nextStep].question }]);
    } else {
      send(next);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (status === "sending") return;
      const v = value;
      setValue("");
      submitLine(v);
    }
  };

  if (!open) return null;

  const showInput = status === "input" || status === "done";

  return (
    <div className="sh-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Say hi">
      <div className="sh-window" onClick={(e) => e.stopPropagation()}>
        <div className="sh-bar">
          <span className="sh-dot red" onClick={close} title="close" />
          <span className="sh-dot yellow" />
          <span className="sh-dot green" />
          <span className="sh-title">say-hi — message Aryan</span>
        </div>
        <div className="sh-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {log.map((line, i) => {
            if (line.type === "echo") {
              return (
                <div className="sh-row" key={i}>
                  <span className="sh-prompt">{PROMPT}</span>
                  <span className="sh-echo">{line.text}</span>
                </div>
              );
            }
            return (
              <div className={`sh-out sh-${line.type}`} key={i}>
                {line.text}
              </div>
            );
          })}

          {showInput && (
            <div className="sh-row">
              <span className="sh-prompt">{PROMPT}</span>
              <input
                ref={inputRef}
                className="sh-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                spellCheck="false"
                aria-label={STEPS[step]?.question || "terminal input"}
              />
            </div>
          )}
          {status === "sending" && <div className="sh-out sh-sys">…</div>}
        </div>
      </div>
    </div>
  );
}

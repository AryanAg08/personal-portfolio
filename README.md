# Aryan Goyal — Portfolio

A personal portfolio built with **React + Vite**, featuring a dark developer theme,
an interactive shell, an in-app résumé viewer, and a terminal-style contact form.

## Features

- **Dark developer theme** with a monospace, terminal-inspired aesthetic.
- **Interactive shell** (`try me` section) — type commands like `help`, `about`,
  `experience`, `projects`, `skills`, `contact`, `resume` (plus a few hidden ones).
- **Native résumé viewer** — the *Resume!* button and the `resume` command open an
  in-app modal that renders `public/resume.pdf` directly (Download / Open / close),
  with no external Google Drive dependency.
- **Say-hi terminal** — the *Say hi!* button opens a mac-style terminal that walks a
  visitor through name → email → message and delivers it to the inbox via
  [Web3Forms](https://web3forms.com). No backend required.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your Web3Forms key (see below)
npm run dev            # http://localhost:5173
```

## Environment variables

The say-hi terminal sends messages through Web3Forms, which needs a free access key.

1. Get a key at [web3forms.com](https://web3forms.com) (enter the email you want
   messages delivered to — they mail you a key).
2. Add it to `.env`:

   ```env
   VITE_WEB3FORMS_KEY=your-web3forms-access-key
   ```

`.env` is git-ignored; commit only `.env.example`. The key is a public client-side
key by design (spam is filtered on Web3Forms' end), so it is baked into the built
bundle — that is expected.

> **Deploying:** set `VITE_WEB3FORMS_KEY` in your host's build environment
> (Netlify → Site settings → Environment variables; PM2 → build environment).
> Without it, the say-hi terminal shows a "not configured" message.

## Updating the résumé

Replace `public/resume.pdf` with your new PDF (keep the same filename) — no code
changes needed. Both the button and the `resume` command point at it.

## Scripts

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR           |
| `npm run build`        | Production build to `dist/`                  |
| `npm run preview`      | Preview the production build locally         |
| `npm run lint`         | Run ESLint                                   |
| `npm run deploy`       | Build and (re)start via PM2                  |
| `npm run pm2:logs`     | Tail the PM2 process logs                    |

## Tech stack

React 18 · Vite 5 · React Router · MUI · React-Bootstrap · Web3Forms · Netlify / PM2

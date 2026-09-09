# Atlas Assistant — Web

The web dashboard for [Atlas Assistant](https://github.com/Audrey-Okumu/atlas-assistant), an AI-powered WhatsApp assistant for Gmail and Google Calendar. This is where a new user signs up, connects their Google account, links their WhatsApp number, and can preview the assistant's answers before ever opening WhatsApp.

**Live site:** _add your Vercel URL here once deployed_
**Backend API:** `https://atlas-assistant-kq2s.onrender.com`

---

## What it does

- A polished, responsive landing page explaining the product
- Registration (email, password, name, phone number) and login
- "Continue with Google" — hands off to the backend's OAuth2 flow, then returns with a session token
- A guided flow prompting Google-only sign-ups to add a phone number before continuing
- A dashboard showing recent emails and upcoming calendar events, pulled live from the backend
- An in-browser chat box to ask Atlas Assistant questions directly
- A one-click deep link to continue the conversation on WhatsApp

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Vite, TypeScript) |
| Styling | Tailwind CSS |
| Routing | React Router |
| Animation | Motion (Framer Motion) |
| Icons | lucide-react |
| Illustrations | unDraw (open-source SVG illustrations) |
| Deployment | Vercel |

## Architecture

```
components/   → reusable UI pieces (Navbar, Hero, Features, DashboardLayout, ...)
pages/        → full routed pages (LandingPage, Login, Register, Dashboard, ...)
```

Authentication state is a JWT issued by the backend, stored in `localStorage` after a successful login, registration, or Google OAuth handoff, and attached as an `Authorization: Bearer` header on every authenticated API call.

The Google OAuth flow works as a **redirect handoff**: the frontend sends the user to the backend's `/oauth2/authorization/google` endpoint; once Google's consent flow completes, the backend redirects back to this frontend's `/oauth-success` route with the JWT (and a flag indicating whether a phone number is still needed) as query parameters.

## Getting started locally

### Prerequisites
- Node.js 18+
- The [Atlas Assistant backend](https://github.com/Audrey-Okumu/atlas-assistant) running and reachable (locally or the deployed instance)

### Install and run

```bash
git clone git@github.com:Audrey-Okumu/atlas-assistant-web.git
cd atlas-assistant-web
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Configuration

The backend API URL is currently set directly in each page (`API_URL` constant). If running against a local backend instead of the deployed one, update this value accordingly (or, as a future improvement, move it into a `.env` file read via `import.meta.env`).

> **Note:** the backend must have this frontend's origin explicitly allowed in its CORS configuration for requests to succeed locally or once deployed.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/register` | Create an account |
| `/login` | Sign in |
| `/oauth-success` | Handles the redirect back from Google OAuth |
| `/add-phone` | Prompts Google-only sign-ups for a WhatsApp number |
| `/dashboard` | Main authenticated view — emails, events, AI chat, WhatsApp link |

## Deployment

Deployed on [Vercel](https://vercel.com) as a static Vite build. Any push to the connected branch triggers an automatic redeploy.

## Known limitations

- WhatsApp connection currently requires joining Twilio's Sandbox with a join code, surfaced as part of the WhatsApp deep link — this goes away once the backend moves to a registered WhatsApp Sender.
- No password-reset flow yet.
- API base URL is hardcoded per-page rather than centralized in one config file.

## License

Personal/portfolio project.

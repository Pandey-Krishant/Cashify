# Cashify Clone

A Cashify clone with a **custom payment page** and a **reverse proxy** that serves the real cashify.in for all other routes.

## How It Works

| Route | What Happens |
|-------|-------------|
| `/payment` | ✅ Custom React payment page (4-step wizard) |
| `/sell/payment` | ✅ Custom React payment page |
| Everything else | 🔄 Proxied from `cashify.in` via Vercel rewrites |

## Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS v4
- **Routing**: React Router DOM
- **Proxy**: Vercel rewrites (production) / Express (local dev)

## Getting Started

### Local Development (Custom Payment Page Only)
```bash
npm install
npm run dev
# → http://localhost:5173/payment
```

### Local with Full Proxy (mirrors cashify.in + custom payment)
```bash
npm run proxy:server
# → http://localhost:3000          (proxied cashify.in)
# → http://localhost:3000/payment  (custom payment page)
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — just click **Deploy**
4. Done! `vercel.app/payment` → custom page, rest → cashify.in

## Project Structure

```
cashify-clone/
├── src/
│   ├── pages/
│   │   └── PaymentPage.jsx   ← Custom payment page (4-step)
│   ├── components/           ← Cashify UI components
│   └── App.jsx               ← React Router setup
├── server.js                 ← Local Express proxy (dev only)
├── vercel.json               ← Vercel proxy + routing config
└── vite.config.js
```

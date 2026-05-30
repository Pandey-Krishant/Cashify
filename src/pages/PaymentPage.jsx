import { useState } from "react";
import { Shield, CreditCard, Smartphone, CheckCircle, ArrowLeft, Lock, Zap, Star } from "lucide-react";

const steps = ["Device Info", "Your Details", "Payment", "Confirm"];

export default function PaymentPage() {
  const [step, setStep] = useState(0);
  const [payMode, setPayMode] = useState("upi");
  const [form, setForm] = useState({
    device: "iPhone 13 Pro",
    condition: "Good",
    storage: "256GB",
    name: "",
    email: "",
    phone: "",
    address: "",
    upiId: "",
    bank: "",
    ifsc: "",
    account: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const quoteAmount = 32500;
  const platformFee = 199;
  const finalAmount = quoteAmount - platformFee;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleNext = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-14 h-14 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Payment Done! 🎉</h1>
          <p className="text-gray-500 mb-2">
            <span className="font-semibold text-green-600">₹{finalAmount.toLocaleString("en-IN")}</span> aapke account mein 24-48 ghante mein aa jayenge.
          </p>
          <p className="text-sm text-gray-400 mb-8">Order ID: CFY{Math.floor(Math.random() * 9000000 + 1000000)}</p>
          <div className="bg-green-50 rounded-2xl p-4 mb-8 text-left">
            <p className="text-sm font-semibold text-green-700 mb-2">📦 Next Steps:</p>
            <ul className="text-sm text-green-600 space-y-1">
              <li>✅ Device pickup scheduled within 24hrs</li>
              <li>✅ SMS confirmation bheja gaya</li>
              <li>✅ Payment process ho raha hai</li>
            </ul>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-2xl transition-all duration-200 hover:scale-105"
          >
            Cashify Home Pe Jao
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => (step > 0 ? setStep((s) => s - 1) : (window.location.href = "/"))}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <img src="https://www.cashify.in/nuxtjs/_nuxt/img/logo.d6bc8a7.svg" alt="Cashify" className="h-8" onError={(e) => { e.target.style.display = "none"; }} />
            <span className="font-bold text-orange-500 text-xl">cashify</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
            <Lock className="w-4 h-4" />
            <span>100% Secure</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    i < step
                      ? "bg-green-500 text-white"
                      : i === step
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-200 scale-110"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {i < step ? <CheckCircle className="w-5 h-5" /> : i + 1}
                </div>
                <span className={`text-xs mt-1 font-medium ${i === step ? "text-orange-500" : "text-gray-400"}`}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-16 sm:w-24 h-1 mx-2 mb-5 rounded-full transition-all duration-500 ${i < step ? "bg-green-400" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 0: Device Info */}
            {step === 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-500" /> Device Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">Device Model</label>
                    <select name="device" value={form.device} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50">
                      <option>iPhone 13 Pro</option>
                      <option>iPhone 12</option>
                      <option>Samsung Galaxy S23</option>
                      <option>OnePlus 11</option>
                      <option>Pixel 7 Pro</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600 block mb-2">Condition</label>
                      <select name="condition" value={form.condition} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50">
                        <option>Like New</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Poor</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-600 block mb-2">Storage</label>
                      <select name="storage" value={form.storage} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50">
                        <option>64GB</option>
                        <option>128GB</option>
                        <option>256GB</option>
                        <option>512GB</option>
                      </select>
                    </div>
                  </div>
                  {/* Quote Preview */}
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 text-white mt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-semibold opacity-90">Instant Quote</span>
                    </div>
                    <p className="text-3xl font-black">₹{quoteAmount.toLocaleString("en-IN")}</p>
                    <p className="text-sm opacity-80 mt-1">Best price in market • Free pickup</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Details</h2>
                <div className="space-y-4">
                  {[
                    { label: "Full Name", name: "name", type: "text", placeholder: "Rahul Sharma" },
                    { label: "Email Address", name: "email", type: "email", placeholder: "rahul@gmail.com" },
                    { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="text-sm font-semibold text-gray-600 block mb-2">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50 placeholder-gray-300"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-2">Pickup Address</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="123, Sector 15, Noida, UP - 201301"
                      rows={3}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50 placeholder-gray-300 resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-500" /> Payment Method
                </h2>
                <p className="text-sm text-gray-500 mb-5">Paise directly aapke account mein jayenge</p>

                {/* Mode Toggle */}
                <div className="flex gap-3 mb-6">
                  {["upi", "bank"].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setPayMode(mode)}
                      className={`flex-1 py-3 px-4 rounded-2xl font-semibold text-sm border-2 transition-all duration-200 ${
                        payMode === mode
                          ? "border-orange-500 bg-orange-50 text-orange-600"
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {mode === "upi" ? "📱 UPI" : "🏦 Bank Transfer"}
                    </button>
                  ))}
                </div>

                {payMode === "upi" && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600 block mb-2">UPI ID</label>
                      <input
                        type="text"
                        name="upiId"
                        value={form.upiId}
                        onChange={handleChange}
                        placeholder="rahul@upi / 9876543210@paytm"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50 placeholder-gray-300"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["@paytm", "@gpay", "@phonepe", "@upi"].map((suffix) => (
                        <button
                          key={suffix}
                          onClick={() => setForm((f) => ({ ...f, upiId: f.upiId.split("@")[0] + suffix }))}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg text-xs font-medium transition-colors"
                        >
                          {suffix}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {payMode === "bank" && (
                  <div className="space-y-4">
                    {[
                      { label: "Bank Name", name: "bank", placeholder: "State Bank of India" },
                      { label: "Account Number", name: "account", placeholder: "1234567890123456" },
                      { label: "IFSC Code", name: "ifsc", placeholder: "SBIN0001234" },
                    ].map(({ label, name, placeholder }) => (
                      <div key={name}>
                        <label className="text-sm font-semibold text-gray-600 block mb-2">{label}</label>
                        <input
                          type="text"
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 bg-gray-50 placeholder-gray-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  {[
                    ["Device", form.device],
                    ["Condition", form.condition],
                    ["Storage", form.storage],
                    ["Name", form.name || "—"],
                    ["Phone", form.phone || "—"],
                    ["Payment via", payMode === "upi" ? `UPI: ${form.upiId || "—"}` : `Bank: ${form.bank || "—"}`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-gray-50">
                      <span className="text-gray-500">{k}</span>
                      <span className="font-semibold text-gray-700">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-orange-50 rounded-2xl p-4">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-600">Device Quote</span>
                    <span>₹{quoteAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between mb-3 text-sm">
                    <span className="text-gray-600">Platform Fee</span>
                    <span className="text-red-500">−₹{platformFee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-orange-200 pt-3">
                    <span>Aapko Milega</span>
                    <span className="text-orange-600">₹{finalAmount.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg shadow-orange-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-orange-300"
            >
              {step === steps.length - 1 ? "✅ Confirm & Submit" : "Continue →"}
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Trust Badge */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">100% Safe & Secure</p>
                  <p className="text-xs text-gray-400">Bank-level encryption</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Instant Price Guarantee", "Free Home Pickup", "Same-day Payment", "5-Star Rated Service"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-5 text-white">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white" />)}
              </div>
              <p className="font-bold text-lg">4.8 / 5</p>
              <p className="text-sm opacity-90">15,000+ happy customers</p>
            </div>

            {/* Help */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 text-sm">
              <p className="font-bold text-gray-700 mb-2">Need Help?</p>
              <p className="text-gray-500 mb-3">Hmare experts available hain</p>
              <a href="tel:+919990011911" className="flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600">
                📞 +91-9990-011-911
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

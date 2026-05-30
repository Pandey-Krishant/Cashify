import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage";

// Main Cashify Clone Homepage
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import HotDeals from "./components/HotDeals";
import WhyUs from "./components/WhyUs";
import TopBrands from "./components/TopBrands";
import TopPhones from "./components/TopPhones";
import CustomerStories from "./components/CustomerStories";
import Articles from "./components/Articles";
import FAQ from "./components/FAQ";
import GoogleReviews from "./components/GoogleReviews";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-16 sm:pb-0">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <HotDeals />
        <WhyUs />
        <TopBrands />
        <TopPhones />
        <CustomerStories />
        <Articles />
        <FAQ />
        <GoogleReviews />
        <AppDownload />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Custom Payment Page - Apna banana tha yahan */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/sell/payment" element={<PaymentPage />} />
        <Route path="/pay" element={<PaymentPage />} />

        {/* Baaki sab → Homepage (jab direct Vite dev server pe ho) */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

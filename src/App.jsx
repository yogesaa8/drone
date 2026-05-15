import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/landingpage/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/landingpage/Footer";
import AboutPage from "./pages/AboutPage";
import MissionPage from "./pages/MissionPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DroneDetailsPage from "./pages/DroneDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import PartsKitsPage from "./pages/PartsKitsPage";
import BlogPostPage from "./pages/BlogPostPage";
import LabPage from "./pages/LabPage";
import AgriculturePage from "./pages/AgriculturePage";
import whatsappContact from "./assets/whatsapp-contact.svg";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/parts-kits" element={<PartsKitsPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/agriculture" element={<AgriculturePage />} />
            <Route path="/drone/:id" element={<DroneDetailsPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />

        <a
          href="https://wa.me/918004369347"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed left-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 rounded-full bg-[#25D366] p-2.5 shadow-2xl transition duration-200 ease-out hover:scale-105 sm:left-4 sm:bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:p-3"
        >
          <img
            src={whatsappContact}
            alt="WhatsApp contact"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;

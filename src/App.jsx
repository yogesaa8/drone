import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import whatsappContact from "./assets/whatsapp-contact.svg";

const applyAosToPage = () => {
  const animatedElements = document.querySelectorAll(
    "main > *, main section, main article"
  );

  animatedElements.forEach((element) => {
    if (!element.hasAttribute("data-aos")) {
      element.setAttribute("data-aos", "fade-up");
    }

    if (!element.hasAttribute("data-aos-duration")) {
      element.setAttribute("data-aos-duration", "700");
    }

    if (!element.hasAttribute("data-aos-easing")) {
      element.setAttribute("data-aos-easing", "ease-out-cubic");
    }

    if (!element.hasAttribute("data-aos-offset")) {
      element.setAttribute("data-aos-offset", "80");
    }
  });
};

const AOSController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      offset: 80,
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const refreshId = window.setTimeout(() => {
      applyAosToPage();
      AOS.refreshHard();
    }, 80);

    return () => window.clearTimeout(refreshId);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AOSController />
      <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
        <Header />
        <main className="grow">
          <AppRoutes />
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

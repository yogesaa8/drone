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
            <Route path="/drone/:id" element={<DroneDetailsPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

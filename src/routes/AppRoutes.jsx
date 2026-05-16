import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AgriculturePage from "../pages/AgriculturePage";
import BlogPage from "../pages/BlogPage";
import BlogPostPage from "../pages/BlogPostPage";
import Carrier from "../pages/Carrier";
import ContactPage from "../pages/ContactPage";
import DroneDetailsPage from "../pages/DroneDetailsPage";
import LabPage from "../pages/LabPage";
import LandingPage from "../pages/LandingPage";
import MissionPage from "../pages/MissionPage";
import PartsKitsPage from "../pages/PartsKitsPage";
import ProductsPage from "../pages/ProductsPage";

const AppRoutes = () => {
  return (
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
      <Route path="/carrier" element={<Carrier />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;

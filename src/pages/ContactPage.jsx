import { useEffect } from "react";
import Contact from "../components/landingpage/Contact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      <Contact />
    </div>
  );
};

export default ContactPage;

import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const cols = [
  {
    t: "Quick Links",
    items: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Mission", to: "/mission" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    t: "Services",
    items: [
      "Drone Surveillance",
      "Mapping UAVs",
      "Industrial Inspection",
      "Payload Systems",
      "Custom UAV Configuration",
    ],
  },
  {
    t: "Contact",
    items: [
      "sales@arcanumspace.com",
      "+91 8004369347",
      "AH-1101, ANTRIKSH HEIGHTS, SECTOR 84, GURUGRAM, HARYANA",
    ],
  },
];

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    formData.append("apiKey", import.meta.env.VITE_STATICFORMS_API_KEY);

    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Subscribed successfully!");
        form.reset();
      } else {
        toast.error("Subscription failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-border bg-charcoal/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 shrink-0 border border-tactical relative flex items-center justify-center">
                <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
              </div>

              <span className="font-display text-base sm:text-lg font-bold tracking-widest break-words">
                Arcanum Space
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Advanced UAV systems engineered for intelligence, inspection, and
              mission-critical deployment.
            </p>

            {/* Subscribe Form */}
            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col xs:flex-row sm:flex-row border border-border w-full max-w-sm"
            >
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter Mobile Number"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 sm:py-2.5 text-sm focus:outline-none"
              />

              <input
                type="hidden"
                name="message"
                value="New footer subscription request"
              />

              <button
                type="submit"
                disabled={loading}
                className="shrink-0 px-4 py-3 sm:py-0 bg-tactical text-primary-foreground font-mono text-xs tracking-widest uppercase hover:bg-tactical/80 transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.t} className="min-w-0">
              <div className="label-mono text-tactical text-[10px] mb-4">
                ▌ {c.t.toUpperCase()}
              </div>

              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li
                    key={typeof it === "string" ? it : it.label}
                    className="min-w-0"
                  >
                    {typeof it === "string" ? (
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed break-words"
                      >
                        {it}
                      </a>
                    ) : (
                      <Link
                        to={it.to}
                        className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed"
                      >
                        {it.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 pt-5 border-t border-border">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="label-mono text-[9px] sm:text-[10px] leading-relaxed max-w-full">
              © 2026 Arcanum Space. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
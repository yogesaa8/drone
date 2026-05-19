import { useState } from "react";
import toast from "react-hot-toast";
import worldMap from "../../assets/world-map.webp";

function Label({ children }) {
  return <div className="label-mono text-[10px] mb-2">{children}</div>;
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-charcoal/85 border border-border px-4 py-3 text-sm focus:outline-none focus:border-tactical transition-colors"
      />
    </div>
  );
}

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
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
        toast.success("Inquiry transmitted successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-background py-16 lg:py-20"
    >
      {/* World Map Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src={worldMap}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full max-w-none object-cover object-center opacity-[0.24]"
        />

        {/* Main dark layer for readability */}
        <div className="absolute inset-0 bg-background/45" />

        {/* Smooth fade without hiding the map completely */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/25 to-background/80" />

        {/* Tactical green glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(171,188,80,0.22),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-border/80 border border-border shadow-2xl backdrop-blur-[1px]">
          <aside className="lg:col-span-2 bg-charcoal/92 backdrop-blur-sm p-6 sm:p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-tactical animate-hud-pulse" />
              <span className="label-mono text-tactical text-[10px]">
                SECURE INQUIRY CHANNEL
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Request Mission Consultation
            </h2>

            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Tell us about your operational requirement and our team will help
              configure the right UAV system.
            </p>

            <div className="mt-8 space-y-5 border-t border-border pt-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 min-w-0">
                <div className="label-mono text-[10px] sm:w-24 shrink-0 pt-1">
                  EMAIL
                </div>

                <div className="font-display font-semibold min-w-0 space-y-1">
                  <a
                    href="mailto:sales@arcanumspace.com"
                    className="block break-all hover:text-tactical transition-colors"
                  >
                    sales@arcanumspace.com
                  </a>

                  <a
                    href="mailto:info@arcanumspace.com"
                    className="block break-all hover:text-tactical transition-colors"
                  >
                    info@arcanumspace.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 min-w-0">
                <div className="label-mono text-[10px] sm:w-24 shrink-0 pt-1">
                  PHONE
                </div>

                <div className="font-display font-semibold min-w-0">
                  <a
                    href="tel:+918004369347"
                    className="break-all hover:text-tactical transition-colors"
                  >
                    +91 8004369347
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 min-w-0">
                <div className="label-mono text-[10px] sm:w-24 shrink-0 pt-1">
                  LOCATION
                </div>

                <div className="font-display font-semibold min-w-0 break-words">
                  AH-1101, ANTRIKSH HEIGHTS, SECTOR 84, GURUGRAM, HARYANA
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="border border-border p-4 bg-background/60 corner-frame">
                <div className="label-mono text-[10px] mb-1">
                  ▌ ENCRYPTION STATUS
                </div>

                <div className="text-tactical font-mono text-sm">
                  Command the Unseen
                </div>
              </div>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-background/90 backdrop-blur-sm p-6 sm:p-8 lg:p-10 space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-3 mb-2 gap-3">
              <span className="label-mono text-[10px]">▌ BRIEFING FORM</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />

              <Field label="Organization" name="org" required />

              <Field label="Email Address" name="email" type="email" required />

              <Field label="Phone Number" name="phone" type="tel" />
            </div>

            <div>
              <Label>Mission Type</Label>

              <select
                name="mission"
                required
                className="w-full bg-charcoal/85 border border-border px-4 py-3 text-sm font-mono focus:outline-none focus:border-tactical transition-colors"
              >
                <option>Survey & Mapping</option>
                <option>Surveillance & Inspection</option>
                <option>Payload Delivery</option>
                <option>Search & Rescue</option>
                <option>Custom Requirement</option>
                <option>Agriculture</option>
                <option>Components</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label>Message</Label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Describe operational requirement, terrain, and timeline..."
                className="w-full bg-charcoal/85 border border-border px-4 py-3 text-sm focus:outline-none focus:border-tactical resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-tactical w-full justify-center !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Transmitting..." : "Submit Inquiry →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
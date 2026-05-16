import { useState } from "react";
import toast from "react-hot-toast";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";

const Label = ({ children }) => (
  <label className="label-mono text-[10px] mb-2 block">{children}</label>
);

const Carrier = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("apiKey", import.meta.env.VITE_STATICFORMS_API_KEY);
    formData.append("subject", "New career application");

    setLoading(true);

    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Application submitted successfully!");
        form.reset();
      } else {
        toast.error("Application submission failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <AnimatedGrid />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-px bg-border border border-border">
            <aside className="lg:col-span-2 bg-charcoal p-6 sm:p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-tactical" />
                <span className="label-mono text-tactical">Careers</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                Build field-ready UAV systems with Arcanumspace.
              </h1>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                Share the role you want to apply for, a short note about your
                background, and your resume. Our team will review your
                application and contact you if there is a match.
              </p>

              <div className="mt-auto pt-8">
                <div className="border border-border bg-background/60 p-4 corner-frame">
                  <div className="label-mono text-tactical text-[10px] mb-2">
                    APPLICATION CHANNEL
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Engineering, operations, design, field testing, and UAV
                    support roles are welcome.
                  </p>
                </div>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="lg:col-span-3 bg-background p-6 sm:p-8 lg:p-10 space-y-5"
            >
              <div className="border-b border-border pb-3 mb-2">
                <span className="label-mono text-[10px]">
                  CAREER APPLICATION FORM
                </span>
              </div>

              <div>
                <Label>Role</Label>
                <input
                  type="text"
                  name="role"
                  required
                  placeholder="Example: UAV Engineer"
                  className="w-full bg-charcoal border border-border px-4 py-3 text-sm focus:outline-none focus:border-tactical"
                />
              </div>

              <div>
                <Label>Message</Label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your experience, skills, and why you want to join..."
                  className="w-full bg-charcoal border border-border px-4 py-3 text-sm focus:outline-none focus:border-tactical resize-none"
                />
              </div>

              <div>
                <Label>Resume / CV</Label>
                <input
                  type="file"
                  name="attachment"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-charcoal border border-border px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-tactical file:px-4 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-widest file:text-primary-foreground hover:file:bg-tactical/80 focus:outline-none focus:border-tactical"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-tactical w-full justify-center py-4! disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carrier;

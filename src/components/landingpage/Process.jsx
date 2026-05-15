const steps = [
  {
    t: "Mission Requirement",
    d: "We analyze your operational objective and required drone capabilities.",
    icon: "◎",
    glow: "rgba(132, 180, 60, 0.34)",
  },
  {
    t: "System Configuration",
    d: "We configure camera, payload, endurance, and control modules.",
    icon: "⚙",
    glow: "rgba(104, 170, 82, 0.32)",
  },
  {
    t: "Field Testing",
    d: "Every system is tested under mission-like environmental conditions.",
    icon: "⌁",
    glow: "rgba(120, 190, 255, 0.26)",
  },
  {
    t: "Deployment Support",
    d: "We provide training, documentation, and operational support.",
    icon: "♙",
    glow: "rgba(255, 177, 66, 0.24)",
  },
];

import { AnimatedGrid } from "../animations/AnimatedGrid";

const Process = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-y border-border bg-background">
      <AnimatedGrid />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-tactical" />

            <span className="label-mono text-tactical uppercase tracking-[0.28em]">
              Mission Protocol
            </span>

            <span className="h-px w-8 bg-tactical" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            From Briefing to Deployment
          </h2>
        </div>

        <div className="relative">
          {/* Top Connected Line */}
          <div className="hidden lg:block absolute -top-5.5 left-[6.5%] right-[6.5%] h-px bg-linear-to-r from-transparent via-tactical/55 to-transparent" />

          {/* Line Nodes */}
          <div className="hidden lg:grid absolute -top-7 left-0 right-0 grid-cols-4 pointer-events-none">
            {steps.map((step) => (
              <div key={step.t} className="flex justify-center">
                <span className="h-3 w-3 border border-tactical bg-background shadow-[0_0_18px_rgba(132,180,60,0.35)]" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {steps.map((s, i) => (
              <article key={s.t} className="group relative min-w-0">
                <div className="relative h-full min-h-52.5 overflow-hidden border border-border bg-charcoal/90 p-5 sm:p-6 zero-g-hover transition-all duration-500 group-hover:border-tactical/60">
                  {/* Left Bottom Hover Glow */}
                  <div
                    className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full opacity-0 blur-3xl transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-125 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${s.glow} 0%, rgba(0,0,0,0) 68%)`,
                    }}
                  />

                  {/* Full Soft Hover Wash */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent 10%, ${s.glow} 160%)`,
                    }}
                  />

                  {/* HUD Grid */}
                  <div className="absolute inset-0 hud-grid opacity-0 transition-opacity duration-700 group-hover:opacity-20 pointer-events-none" />

                  {/* Corner Frame Style */}
                  <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-tactical/50 transition-colors duration-500 group-hover:border-tactical" />
                  <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-tactical/50 transition-colors duration-500 group-hover:border-tactical" />
                  <div className="absolute left-0 bottom-0 h-4 w-4 border-l border-b border-tactical/50 transition-colors duration-500 group-hover:border-tactical" />
                  <div className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-tactical/50 transition-colors duration-500 group-hover:border-tactical" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex items-start justify-between gap-5">
                      <div className="flex items-start gap-4">
                        <div className="font-display text-3xl sm:text-4xl font-bold leading-none text-tactical/80 group-hover:text-tactical transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </div>

                        <div className="pt-1 label-mono text-[9px] uppercase tracking-[0.22em] text-tactical/80">
                          Phase {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="grid h-11 w-11 shrink-0 place-items-center border border-tactical/35 bg-background/45 text-tactical backdrop-blur-sm transition-all duration-500 group-hover:border-tactical group-hover:bg-background/70 group-hover:shadow-[0_0_24px_rgba(132,180,60,0.24)]">
                        <span className="text-lg leading-none">{s.icon}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold leading-tight transition-colors duration-500 group-hover:text-tactical">
                      {s.t}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.d}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="h-px w-10 bg-tactical/50 transition-all duration-500 group-hover:w-20 group-hover:bg-tactical" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
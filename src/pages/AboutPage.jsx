import { useEffect } from "react";
import heroImg from "../assets/hero-drone.jpg";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const capabilities = [
  ["Platform Engineering", "Carbon-frame UAVs configured for endurance, payload stability, and rapid deployment."],
  ["Mission Control", "Ground workflows for live video, mapping, thermal feeds, and secure operator handoff."],
  ["Field Support", "Training, calibration, and deployment assistance for operational teams."],
];

const metrics = [
  ["04", "Mission-ready drone platforms"],
  ["12 KM", "Long-range encrypted control"],
  ["48 MIN", "Maximum flight endurance"],
  ["24/7", "Operational response planning"],
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AnimatedGrid />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FloatUpText>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-tactical" />
                  <span className="label-mono text-tactical">DRONEOPS / COMPANY PROFILE</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                  UAV systems built for teams that cannot lose signal.
                </h1>
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                  DroneOps designs and deploys tactical aerial platforms for surveillance, mapping,
                  infrastructure inspection, and time-critical field intelligence.
                </p>
              </div>
            </FloatUpText>

            <FloatUpText delay={0.15}>
              <div className="relative border border-border bg-charcoal corner-frame overflow-hidden">
                <img
                  src={heroImg}
                  alt="Tactical drone platform"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 label-mono text-[10px] bg-background/80 px-3 py-2">
                  FIELD UNIT / ACTIVE READINESS
                </div>
              </div>
            </FloatUpText>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {metrics.map(([value, label]) => (
              <div key={label} className="bg-charcoal p-6">
                <div className="font-display text-3xl font-bold text-tactical">{value}</div>
                <div className="label-mono text-[10px] mt-3">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-border bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />
              <span className="label-mono text-tactical">CORE OPERATIONS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Designed around field reliability
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {capabilities.map(([title, desc], index) => (
              <article key={title} className="bg-charcoal p-8 zero-g-hover">
                <div className="label-mono text-tactical text-[10px] mb-5">
                  CAPABILITY {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

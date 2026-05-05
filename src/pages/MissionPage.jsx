import { useEffect } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const missionPillars = [
  {
    title: "Situational Awareness",
    desc: "Deliver clean aerial intelligence to operators, command teams, and response units.",
  },
  {
    title: "Rapid Deployment",
    desc: "Keep launch, calibration, and mission handoff simple enough for high-pressure field use.",
  },
  {
    title: "Secure Autonomy",
    desc: "Blend encrypted command links, autonomous routing, and human override into one workflow.",
  },
];

const timeline = [
  ["01", "Brief", "Operational objective, terrain, range, and payload requirements are captured."],
  ["02", "Configure", "The UAV frame, sensor stack, and control station are matched to the mission."],
  ["03", "Validate", "Flight profile, telemetry, and recovery protocol are tested before deployment."],
  ["04", "Deploy", "Operators receive system handoff, training, and support for active operations."],
];

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      <section className="relative py-24 lg:py-32">
        <AnimatedGrid />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <FloatUpText>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-tactical" />
                <span className="label-mono text-tactical">MISSION DIRECTIVE</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Make advanced aerial intelligence dependable in the field.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our mission is to give teams a faster, safer way to inspect, monitor, map, and
                respond when ground access is slow, risky, or impossible.
              </p>
            </div>
          </FloatUpText>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
            {missionPillars.map((pillar, index) => (
              <FloatUpText key={pillar.title} delay={index * 0.08}>
                <article className="bg-charcoal p-8 h-full zero-g-hover">
                  <div className="font-display text-5xl font-bold text-tactical/30 mb-6">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3">{pillar.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </article>
              </FloatUpText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-y border-border bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />
              <span className="label-mono text-tactical">MISSION PROTOCOL</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              From requirement to deployment
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-px bg-border border border-border">
            {timeline.map(([step, title, desc]) => (
              <article key={step} className="bg-charcoal p-7 corner-frame">
                <div className="label-mono text-tactical text-[10px] mb-5">PHASE {step}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;

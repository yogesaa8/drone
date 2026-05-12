import { useEffect } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const labCapabilities = [
  [
    "Prototype Build",
    "Rapid UAV frame, payload, wiring, and electronics configuration for mission-focused testing.",
  ],
  [
    "Flight Validation",
    "Bench checks, tuning support, flight readiness review, and performance observations before deployment.",
  ],
  [
    "Payload Integration",
    "Camera, sensor, telemetry, and modular payload fitment workflows for practical UAV operations.",
  ],
  [
    "Operator Readiness",
    "Hands-on familiarization, checklists, maintenance notes, and training support for field teams.",
  ],
];

const LabPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden">
      <AnimatedGrid />

      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">
        <FloatUpText>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-tactical" />
              <span className="label-mono text-tactical uppercase">
                Defence / Lab
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              UAV Lab for testing, integration, and field readiness.
            </h1>

            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Our lab supports drone prototyping, payload integration, flight
              validation, operator training, and practical configuration work
              for defence-focused UAV systems.
            </p>
          </div>
        </FloatUpText>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {labCapabilities.map(([title, desc], index) => (
            <FloatUpText key={title} delay={index * 0.08}>
              <article className="bg-charcoal p-7 h-full zero-g-hover min-w-0">
                <div className="label-mono text-tactical text-[10px] mb-5">
                  LAB {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="font-display text-2xl font-semibold mb-3 break-words">
                  {title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </article>
            </FloatUpText>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LabPage;

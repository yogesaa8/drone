import { useEffect } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";
import missionTrainingImage from "../assets/mission-training.png";

const missionPillars = [
  {
    title: "Our Mission",
    desc: "To make advanced UAV capability accessible, reliable, and field-ready for teams operating in real environments.",
  },
  {
    title: "Operational Focus",
    desc: "We support surveillance, ISR, mapping, rapid response, training, payload operations, and AI-assisted drone workflows.",
  },
  {
    title: "Training & Readiness",
    desc: "Pilot training, familiarization, checklists, and deployment guidance help teams operate UAV systems with confidence.",
  },
  {
    title: "Technology Direction",
    desc: "Our roadmap focuses on modular airframes, secure control workflows, payload flexibility, autonomy, and AI-enabled field intelligence.",
  },
  {
    title: "Partner Ecosystem",
    desc: "We collaborate with operators, institutions, suppliers, and field teams to align UAV capability with practical mission needs.",
  },
  {
    title: "Field Support",
    desc: "Configuration support, validation, maintenance guidance, and documentation keep UAV operations repeatable after delivery.",
  },
];

const timeline = [
  [
    "01",
    "Mission Requirement",
    "Operational goals, terrain, endurance needs, payload expectations, and operator readiness are assessed before configuration.",
  ],
  [
    "02",
    "Platform Configuration",
    "The UAV platform, sensors, payload modules, control workflow, and training plan are aligned to the intended use case.",
  ],
  [
    "03",
    "Testing & Validation",
    "Flight stability, range behavior, payload handling, telemetry, recovery checks, and documentation are reviewed before handoff.",
  ],
  [
    "04",
    "Deployment Readiness",
    "Teams receive practical guidance, operating notes, and support inputs for field deployment and repeatable UAV operation.",
  ],
];

const technologies = [
  [
    "ISR Workflow Support",
    "Drone systems configured for surveillance, observation, mapping, documentation, and rapid data capture in operational environments.",
  ],
  [
    "AI-Enabled Operations",
    "AI-assisted workflows support object tracking, route planning, mapping intelligence, and faster review of aerial information.",
  ],
  [
    "Modular Payload Systems",
    "Flexible payload integration allows UAV platforms to adapt for training, surveillance, mapping, imaging, and field-specific tasks.",
  ],
  [
    "Reliable Flight Engineering",
    "Airframe selection, power systems, control tuning, and validation practices are focused on stable, repeatable field performance.",
  ],
];

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <AnimatedGrid />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_520px] gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <FloatUpText>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-tactical" />

                  <span className="label-mono text-tactical">
                    MISSION DIRECTIVE
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  To make advanced UAV capability accessible, reliable, and
                  field-ready.
                </h1>

                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Our mission is to support teams with dependable drone systems,
                  practical training workflows, and mission-focused UAV
                  technology built for real operational environments.
                </p>

                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Arcanumspace works across UAV training, surveillance, ISR,
                  payload systems, field support, and AI-enabled operations to
                  help organizations deploy aerial capability with clarity and
                  confidence.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-px bg-border border border-border max-w-3xl">
                  <div className="bg-charcoal p-5 corner-frame">
                    <div className="label-mono text-tactical text-[10px] mb-2">
                      FIELD TRAINING
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Practical UAV learning designed around real operational
                      readiness.
                    </p>
                  </div>

                  <div className="bg-charcoal p-5 corner-frame">
                    <div className="label-mono text-tactical text-[10px] mb-2">
                      DEPLOYMENT READY
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Systems, workflows, and support aligned for field use.
                    </p>
                  </div>
                </div>
              </div>
            </FloatUpText>

            {/* Right Portrait Image - Full Image Visible */}
            <FloatUpText delay={0.1}>
              <div className="relative w-full max-w-130 mx-auto lg:mx-0">
                <div className="absolute -inset-4 border border-tactical/20 corner-frame" />

                <div className="relative border border-border bg-charcoal p-3 corner-frame shadow-2xl overflow-hidden">
                  <div className="relative aspect-1086/1448 w-full overflow-hidden bg-background/40">
                    <img
                      src={missionTrainingImage}
                      alt="Arcanumspace UAV training and certification"
                      className="w-full h-full object-contain object-center"
                      loading="eager"
                    />
                  </div>

                  <div className="mt-3 border border-border bg-background/70 px-4 py-3 corner-frame">
                    <div className="label-mono text-tactical text-[10px] mb-1">
                      ARCANUMSPACE PRIVATE LIMITED
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      UAV training, pilot readiness, and mission-focused drone
                      capability.
                    </p>
                  </div>
                </div>
              </div>
            </FloatUpText>
          </div>

          {/* Mission Pillars */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {missionPillars.map((pillar, index) => (
              <FloatUpText key={pillar.title} delay={index * 0.08}>
                <article className="bg-charcoal p-8 h-full zero-g-hover min-w-0">
                  <div className="font-display text-5xl font-bold text-tactical/30 mb-6">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="font-display text-2xl font-semibold mb-3 wrap-break-word">
                    {pillar.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </article>
              </FloatUpText>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 lg:py-32 border-y border-border bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">
                TECHNOLOGY DIRECTION
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Reliable UAV technology shaped by operational requirements.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              We develop drone platforms around field usability, stable flight,
              modular payloads, data capture, operator training, and
              AI-assisted workflows that improve mission awareness without
              overcomplicating the system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {technologies.map(([title, desc], index) => (
              <article
                key={title}
                className="bg-charcoal p-8 zero-g-hover min-w-0"
              >
                <div className="label-mono text-tactical text-[10px] mb-5">
                  SYSTEM {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-display text-2xl font-semibold mb-4 wrap-break-word">
                  {title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Workflow */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">
                OPERATIONAL FOCUS
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              From mission requirement to deployment readiness.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-px bg-border border border-border">
            {timeline.map(([step, title, desc]) => (
              <article
                key={step}
                className="bg-charcoal p-7 corner-frame min-w-0"
              >
                <div className="label-mono text-tactical text-[10px] mb-5">
                  PHASE {step}
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-24 lg:py-32 border-t border-border bg-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-tactical" />

                <span className="label-mono text-tactical">
                  PARTNER ECOSYSTEM
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Building UAV readiness through practical collaboration.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Reliable UAV operations require more than a capable aircraft.
                They require trained operators, clear procedures, appropriate
                payloads, responsive support, and systems that fit the mission
                rather than forcing the mission to fit the system.
              </p>

              <p>
                We work with customers, training partners, technology vendors,
                and field teams to refine platform configurations, improve
                operator readiness, and keep UAV deployment practical at scale.
              </p>

              <p>
                Our direction is steady: strengthen surveillance capability,
                expand training access, improve ISR workflows, and deliver
                drone systems that teams can trust in demanding field use.
              </p>

              <div className="border border-border bg-charcoal p-6 corner-frame">
                <div className="label-mono text-tactical text-[10px] mb-3">
                  TRAINING & READINESS
                </div>

                <p className="text-sm leading-relaxed">
                  Arcanumspace supports UAV readiness through system
                  configuration, pilot training, deployment planning, field
                  validation, and practical documentation for repeatable
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
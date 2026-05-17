import { useEffect } from "react";
import heroImg from "../assets/about/about_page.png";
import btmImg from "../assets/about/about_page1.jpg";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";
import capabilityImg1 from "../assets/about/WWA.jpg";
import capabilityImg2 from "../assets/about/about_page.png";
import capabilityImg3 from "../assets/about/EA.jpg";
import capabilityImg4 from "../assets/about/AG.jpg";
import capabilityImg5 from "../assets/about/AI.png";
import capabilityImg6 from "../assets/about/OD.png";

const capabilities = [
  {
    title: "Who We Are",
    desc: "A UAV technology company focused on mission-ready platforms for training, surveillance, ISR, rapid response, and field operations.",
    image: capabilityImg1,
  },
  {
    title: "What We Build",
    desc: "Drone systems such as Tinywoop, ARC MT 280, Shadow Drop 10, Beetle 5, and ARC MT 480AI for practical operational workflows.",
    image: capabilityImg2,
  },
  {
    title: "Engineering Approach",
    desc: "Airframe design, payload integration, flight tuning, documentation, and operator usability are developed as one connected system.",
    image: capabilityImg3,
  },
  {
    title: "Field Testing & Deployment",
    desc: "Platforms are validated through flight trials, configuration checks, payload testing, and deployment planning for real conditions.",
    image: capabilityImg4,
  },
  {
    title: "AI-Assisted Workflows",
    desc: "We support AI-enabled drone operations for mapping, ISR support, object tracking, data capture, and faster mission decisions.",
    image: capabilityImg5,
  },
  {
    title: "Operational Support",
    desc: "Teams are supported with pilot training, system configuration, maintenance guidance, and deployment-ready documentation.",
    image: capabilityImg6,
  },
];

const metrics = [
  ["05", "Operational UAV platforms"],
  ["ISR", "Surveillance workflow focus"],
  ["AI", "Assisted drone capability"],
  ["FPV", "Training and field systems"],
  ["MOD", "Payload-ready architecture"],
  ["FIELD", "Deployment support model"],
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AnimatedGrid />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FloatUpText>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-tactical" />

                  <span className="label-mono text-tactical">
                    Arcanumspace / Company Profile
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Engineering mission-ready UAV systems for real-world
                  operations.
                </h1>

                <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                  We design, test, and deploy advanced drone platforms for
                  training, surveillance, ISR, rapid response, and field-ready
                  operational workflows.
                </p>

                <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
                  Arcanumspace combines product engineering, payload
                  integration, flight validation, and operator support to build
                  UAV systems that are reliable, configurable, and practical for
                  demanding environments.
                </p>
              </div>
            </FloatUpText>

            <FloatUpText delay={0.15}>
              <div className="relative border border-border bg-charcoal corner-frame overflow-hidden">
                <img
                  src={heroImg}
                  alt="Arcanumspace tactical drone platform"
                  className="aspect-4/3 w-full object-cover"
                />
              
                <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 label-mono text-[10px] bg-background/80 px-3 py-2">
                  FIELD UNIT / ACTIVE READINESS
                </div>
              </div>
            </FloatUpText>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-px bg-border border border-border">
            {metrics.map(([value, label]) => (
              <div key={label} className="bg-charcoal p-6">
                <div className="font-display text-3xl font-bold text-tactical">
                  {value}
                </div>

                <div className="label-mono text-[10px] mt-3">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-24 lg:py-32 border-t border-border bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">COMPANY OVERVIEW</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Built around product engineering, field discipline, and
              operational readiness.
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Arcanumspace builds UAV systems for organizations that need
                dependable aerial capability without unnecessary complexity. Our
                work spans airframe selection, electronics integration, payload
                configuration, flight tuning, and deployment planning.
              </p>

              <p>
                Our platforms support training, surveillance, ISR workflows,
                rapid response, mapping, modular payload missions, and
                AI-assisted drone operations. Each system is shaped around
                stable flight, quick launch readiness, field durability, and
                clear operator control.
              </p>

              <p>
                We work with teams from concept to deployment: defining mission
                requirements, configuring platforms, validating performance,
                preparing documentation, and supporting operator training.
              </p>

              <p>
                The result is a focused UAV ecosystem designed for practical
                readiness, repeatable field performance, and long-term
                operational confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* image */}
      <section className="py-10 sm:py-14 lg:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <FloatUpText>
            <div className="relative border border-border bg-charcoal corner-frame overflow-hidden">
              <img
                src={btmImg}
                alt="Arcanumspace UAV operations"
                className="w-full h-65 sm:h-95 md:h-115 lg:h-150 object-contain lg:object-cover object-center"
              />

              <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
            </div>
          </FloatUpText>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">CORE OPERATIONS</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Focused capabilities for reliable UAV deployment.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {capabilities.map(({ title, desc, image }, index) => (
              <article
                key={title}
                className="group relative overflow-hidden bg-charcoal p-8 zero-g-hover min-w-0"
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-charcoal/60 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="label-mono text-tactical text-[10px] mb-5">
                    CAPABILITY {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-display text-2xl font-semibold mb-3 wrap-break-word">
                    {title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 lg:py-32 border-t border-border bg-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-tactical" />

                <span className="label-mono text-tactical">WHY CHOOSE US</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                Practical UAV systems backed by engineering discipline and field
                support.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We do not treat a drone as only an aircraft. We treat it as a
                complete operational system: platform, payload, communications,
                training, maintenance, documentation, and deployment workflow.
              </p>

              <p>
                From compact FPV training platforms to AI-assisted tactical
                multirotor UAVs, every configuration is built with usability,
                reliability, and mission adaptability at the center.
              </p>

              <div className="border border-border bg-charcoal p-6 corner-frame">
                <div className="label-mono text-tactical text-[10px] mb-3">
                  FIELD-READY UAV DELIVERY
                </div>

                <p className="text-sm leading-relaxed">
                  Arcanumspace supports teams with platform selection,
                  configuration, flight validation, pilot training, and
                  deployment planning so UAV capability can move from lab
                  readiness to real-world use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

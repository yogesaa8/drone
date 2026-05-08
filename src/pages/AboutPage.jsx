import { useEffect } from "react";
import heroImg from "../assets/hero-drone.jpg";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const capabilities = [
  [
    "Defense Drone Systems",
    "Advanced UAV platforms engineered for surveillance, reconnaissance, border security, and tactical field intelligence operations.",
  ],
  [
    "Agriculture Automation",
    "Smart agricultural drone solutions for spraying, mapping, crop analysis, and precision farming workflows.",
  ],
  [
    "Mission Control Infrastructure",
    "Secure ground-control systems with encrypted telemetry, thermal feeds, live monitoring, and remote coordination.",
  ],
  [
    "Training & Deployment",
    "Operator training, maintenance support, repair infrastructure, and on-site deployment assistance across India.",
  ],
  [
    "Indigenous Manufacturing",
    "Built under the vision of Atmanirbhar Bharat with a strong focus on Make in India innovation and engineering excellence.",
  ],
  [
    "Research & Innovation",
    "Continuous R&D in aerospace engineering, payload optimization, endurance systems, and autonomous flight technologies.",
  ],
];

const metrics = [
  ["2025", "Established in Gurgaon, India"],
  ["04+", "Mission-ready UAV platforms"],
  ["12 KM", "Encrypted long-range control"],
  ["48 MIN", "Maximum flight endurance"],
  ["24/7", "Operational planning support"],
  ["100%", "Focused on indigenous innovation"],
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
                    ARCANUMSPACE / COMPANY PROFILE
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Building the future of indigenous drone technology in India.
                </h1>

                <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                  Arcanumspace Private Limited is a next-generation drone
                  technology company established in August 2025 and
                  headquartered in Gurgaon, India. We specialize in advanced
                  UAV systems for defense, surveillance, agriculture, and
                  industrial applications.
                </p>

                <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
                  Operating at the intersection of aerospace engineering,
                  tactical defense systems, and agricultural automation, we are
                  committed to delivering reliable, scalable, and mission-ready
                  drone platforms built for India’s evolving operational needs.
                </p>
              </div>
            </FloatUpText>

            <FloatUpText delay={0.15}>
              <div className="relative border border-border bg-charcoal corner-frame overflow-hidden">
                <img
                  src={heroImg}
                  alt="Arcanumspace tactical drone platform"
                  className="aspect-[4/3] w-full object-cover"
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

                <div className="label-mono text-[10px] mt-3">
                  {label}
                </div>
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

              <span className="label-mono text-tactical">
                COMPANY OVERVIEW
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Engineering drones that empower defense, agriculture, and national growth.
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Arcanumspace is driven by the vision of strengthening India’s
                technological self-reliance through innovation-led UAV
                development. Our defense-focused systems are designed for
                surveillance, security operations, and tactical intelligence,
                while our agricultural drone ecosystem supports farmers and
                drone entrepreneurs with affordable and efficient solutions.
              </p>

              <p>
                From product development and pilot training to service,
                maintenance, and repair infrastructure, we are building a
                complete drone ecosystem that delivers long-term value and
                dependable support to organizations across India.
              </p>

              <p>
                Through strategic collaborations with government agencies,
                private institutions, and industry leaders, Arcanumspace
                continues to expand its capabilities in aerospace innovation,
                autonomous systems, and operational deployment technologies.
              </p>

              <p>
                Our mission is to promote sustainable and technology-driven
                practices that enhance national security, improve agricultural
                productivity, and create new opportunities within India’s drone
                sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">
                CORE OPERATIONS
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Designed for reliability in the most demanding environments.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {capabilities.map(([title, desc], index) => (
              <article
                key={title}
                className="bg-charcoal p-8 zero-g-hover min-w-0"
              >
                <div className="label-mono text-tactical text-[10px] mb-5">
                  CAPABILITY {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-display text-2xl font-semibold mb-3 break-words">
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

      {/* Vision Section */}
      <section className="py-24 lg:py-32 border-t border-border bg-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-tactical" />

                <span className="label-mono text-tactical">
                  OUR MISSION
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                Advancing India’s UAV ecosystem through innovation and self-reliance.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Arcanumspace, we don’t just build drones — we build
                intelligent aerial solutions that empower defense operations,
                support Indian farmers, and create opportunities for the next
                generation of drone professionals.
              </p>

              <p>
                Every platform we develop reflects our commitment to Make in
                India innovation, engineering excellence, and field-ready
                operational performance.
              </p>

              <div className="border border-border bg-charcoal p-6 corner-frame">
                <div className="label-mono text-tactical text-[10px] mb-3">
                  ▌ ATMANIRBHAR BHARAT INITIATIVE
                </div>

                <p className="text-sm leading-relaxed">
                  We contribute towards Atmanirbhar Bharat through innovation,
                  engineering excellence, and mission-ready UAV platforms
                  designed and developed in India.
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

import { useEffect } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const missionPillars = [
  {
    title: "AI-Powered Intelligence",
    desc: "Advanced artificial intelligence systems enabling autonomous navigation, obstacle detection, adaptive flight control, and mission optimization.",
  },
  {
    title: "Secure Communication",
    desc: "Encrypted telemetry and interference-resistant communication systems for reliable command, control, and mission-critical data transfer.",
  },
  {
    title: "Rapid Deployment",
    desc: "Mission-ready UAV platforms engineered for fast deployment, operational flexibility, and field adaptability.",
  },
  {
    title: "Modular Architecture",
    desc: "Flexible drone ecosystems supporting interchangeable payloads, sensors, and mission modules for multiple operational scenarios.",
  },
  {
    title: "Indigenous Engineering",
    desc: "Designed, developed, and manufactured in India with complete focus on quality, reliability, and national technological self-reliance.",
  },
  {
    title: "Field Reliability",
    desc: "Built with precision avionics, energy-efficient propulsion systems, and rigorous real-world testing for dependable operations.",
  },
];

const timeline = [
  [
    "01",
    "Mission Briefing",
    "Operational requirements, terrain analysis, payload needs, and flight objectives are assessed in detail.",
  ],
  [
    "02",
    "System Configuration",
    "Drone platform, AI modules, communication systems, and payload architecture are configured for the mission.",
  ],
  [
    "03",
    "Testing & Validation",
    "Flight endurance, telemetry stability, autonomous controls, and recovery protocols are validated under real-world conditions.",
  ],
  [
    "04",
    "Deployment",
    "Mission-ready systems are deployed with operator training, support infrastructure, and operational handoff.",
  ],
];

const technologies = [
  [
    "Artificial Intelligence",
    "AI-assisted flight systems with intelligent navigation, obstacle avoidance, autonomous routing, and adaptive mission control.",
  ],
  [
    "Encrypted Telemetry",
    "Secure communication protocols ensuring protected and interference-resistant connectivity between aerial systems and ground control.",
  ],
  [
    "Modular Payload Systems",
    "Interchangeable surveillance, mapping, thermal, spraying, and reconnaissance payloads for rapid mission customization.",
  ],
  [
    "Energy Efficient Engineering",
    "Optimized propulsion systems and lightweight materials delivering extended endurance and improved payload efficiency.",
  ],
];

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <AnimatedGrid />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          
          <FloatUpText>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-tactical" />

                <span className="label-mono text-tactical">
                  MISSION DIRECTIVE
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Building intelligent UAV systems for defense, agriculture, and national advancement.
              </h1>

              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                At Arcanumspace, technology is the foundation of everything we
                build. We integrate advanced artificial intelligence, secure
                communication systems, and indigenous engineering to create
                reliable, mission-ready drone platforms for modern operational
                environments.
              </p>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our mission is to empower defense forces, farmers, industries,
                and drone entrepreneurs with scalable aerial systems that
                combine intelligence, adaptability, security, and performance.
              </p>
            </div>
          </FloatUpText>

          {/* Mission Pillars */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {missionPillars.map((pillar, index) => (
              <FloatUpText
                key={pillar.title}
                delay={index * 0.08}
              >
                <article className="bg-charcoal p-8 h-full zero-g-hover min-w-0">
                  
                  <div className="font-display text-5xl font-bold text-tactical/30 mb-6">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="font-display text-2xl font-semibold mb-3 break-words">
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
                CORE TECHNOLOGY
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Advanced engineering designed for real-world operational demands.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our UAV systems leverage AI-powered autonomy, secure telemetry,
              modular payload ecosystems, and indigenous manufacturing to
              deliver dependable performance in high-risk and mission-critical
              environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {technologies.map(([title, desc], index) => (
              <article key={title} className="bg-charcoal p-8 zero-g-hover min-w-0">
                <div className="label-mono text-tactical text-[10px] mb-5">
                  SYSTEM {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-display text-2xl font-semibold mb-4 break-words">
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
                MISSION PROTOCOL
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              From operational requirement to field deployment.
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

      {/* Indigenous Innovation */}
      <section className="py-24 lg:py-32 border-t border-border bg-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-tactical" />

                <span className="label-mono text-tactical">
                  INDIGENOUS INNOVATION
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Built in India for the future of Indian drone technology.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Indigenous manufacturing lies at the core of our engineering
                philosophy. By designing, developing, and producing our UAV
                systems in India, we maintain complete control over quality,
                operational security, and platform reliability.
              </p>

              <p>
                Our in-house research, testing, and production infrastructure
                supports continuous innovation in autonomous systems, aerospace
                engineering, and tactical aerial technologies while aligning
                with the national “Make in India” initiative.
              </p>

              <p>
                Every platform undergoes extensive testing under real-world
                operational conditions to ensure consistent endurance, payload
                stability, and mission reliability across demanding environments.
              </p>

              <div className="border border-border bg-charcoal p-6 corner-frame">
                <div className="label-mono text-tactical text-[10px] mb-3">
                  ▌ ATMANIRBHAR BHARAT VISION
                </div>

                <p className="text-sm leading-relaxed">
                  Through innovation, engineering excellence, and field-ready
                  UAV systems, Arcanumspace contributes toward strengthening
                  India’s technological self-reliance and next-generation drone
                  ecosystem.
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

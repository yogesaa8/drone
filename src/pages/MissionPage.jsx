import { useEffect } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";
import missionTrainingImage from "../assets/mission/mission-training.png";
import police from "../assets/mission/police.webp";
import logistic from "../assets/mission/logistic.webp";
import search from "../assets/mission/search.webp";
import WindTurbine from "../assets/mission/WindTurbine.webp";
import Forest from "../assets/mission/Forest&Wildlife.webp";
import Agriculture from "../assets/mission/Agriculture&Crop.webp";
import Survey from "../assets/mission/Survey&Mapping.webp";
import bordermonitoring from "../assets/mission/bordermonitoring.webp";
import IndustrialSite from "../assets/mission/IndustrialSite.webp";
import DisasterDamage from "../assets/mission/DisasterDamage.webp";
import ConstructionProgress from "../assets/mission/ConstructionProgress.webp";
import solar from "../assets/mission/roof&solar.webp";

import VerticalSlider from "../embla/VerticalSlider";

const missionPillars = [
  {
    title: "Our Mission",
    desc: "To make advanced UAV capability accessible, reliable, and field-ready for teams operating in real environments.",
    glow: "rgba(132, 180, 60, 0.22)",
    border: "rgba(132, 180, 60, 0.85)",
    shadow: "rgba(132, 180, 60, 0.24)",
  },
  {
    title: "Operational Focus",
    desc: "We support surveillance, ISR, mapping, rapid response, training, payload operations, and AI-assisted drone workflows.",
    glow: "rgba(90, 200, 255, 0.22)",
    border: "rgba(90, 200, 255, 0.85)",
    shadow: "rgba(90, 200, 255, 0.24)",
  },
  {
    title: "Training & Readiness",
    desc: "Pilot training, familiarization, checklists, and deployment guidance help teams operate UAV systems with confidence.",
    glow: "rgba(186, 120, 255, 0.22)",
    border: "rgba(186, 120, 255, 0.85)",
    shadow: "rgba(186, 120, 255, 0.24)",
  },
  {
    title: "Technology Direction",
    desc: "Our roadmap focuses on modular airframes, secure control workflows, payload flexibility, autonomy, and AI-enabled field intelligence.",
    glow: "rgba(255, 190, 90, 0.22)",
    border: "rgba(255, 190, 90, 0.85)",
    shadow: "rgba(255, 190, 90, 0.24)",
  },
  {
    title: "Partner Ecosystem",
    desc: "We collaborate with operators, institutions, suppliers, and field teams to align UAV capability with practical mission needs.",
    glow: "rgba(80, 255, 180, 0.2)",
    border: "rgba(80, 255, 180, 0.85)",
    shadow: "rgba(80, 255, 180, 0.22)",
  },
  {
    title: "Field Support",
    desc: "Configuration support, validation, maintenance guidance, and documentation keep UAV operations repeatable after delivery.",
    glow: "rgba(255, 120, 150, 0.2)",
    border: "rgba(255, 120, 150, 0.85)",
    shadow: "rgba(255, 120, 150, 0.22)",
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

const useCases = [
  {
    title: "Police & Public Safety",
    tag: "LAW ENFORCEMENT",
    image: police,
    desc: "Aerial overwatch for crowd monitoring, traffic response, incident documentation, and safer field coordination.",
  },
  {
    title: "Wind Turbine Inspection",
    tag: "ENERGY ASSETS",
    image: WindTurbine,
    desc: "Close visual inspection of blades, towers, and hard-to-reach energy infrastructure without risky manual access.",
  },
  {
    title: "Forest & Wildlife Monitoring",
    tag: "ENVIRONMENT",
    image: Forest,
    desc: "Rapid terrain observation for forest patrols, wildlife tracking, fire-risk review, and remote area assessment.",
  },
  {
    title: "Agriculture & Crop Health",
    tag: "SMART FARMING",
    image: Agriculture,
    desc: "Crop spraying, field mapping, irrigation review, plantation checks, and precision agriculture workflows.",
  },
  {
    title: "Search & Rescue",
    tag: "EMERGENCY RESPONSE",
    image: search,
    desc: "Thermal-guided search, missing-person support, disaster assessment, and fast visibility over difficult terrain.",
  },
  {
    title: "Survey & Mapping",
    tag: "GEOSPATIAL",
    image: Survey,
    desc: "High-resolution aerial capture for land survey, construction planning, stockpile review, and GIS documentation.",
  },
  {
    title: "Border & Perimeter Watch",
    tag: "SECURITY",
    image: bordermonitoring,
    desc: "Persistent observation for restricted zones, perimeter alerts, route checks, and tactical reconnaissance.",
  },
  {
    title: "Industrial Site Monitoring",
    tag: "OPERATIONS",
    image: IndustrialSite,
    desc: "Plant, warehouse, pipeline, and infrastructure monitoring with faster inspection cycles and reduced ground risk.",
  },
  {
    title: "Disaster Damage Assessment",
    tag: "RAPID REVIEW",
    image: DisasterDamage,
    desc: "Fast post-event aerial review for flood zones, landslides, fire damage, blocked routes, and relief planning.",
  },
  {
    title: "Construction Progress",
    tag: "SITE INTELLIGENCE",
    image: ConstructionProgress,
    desc: "Periodic aerial records for project tracking, site comparison, earthwork progress, and stakeholder reporting.",
  },
  {
    title: "Roof & Solar Inspection",
    tag: "ASSET CHECKS",
    image: solar,
    desc: "Safer inspection of rooftops, solar arrays, elevated structures, and hard-to-access facility surfaces.",
  },
  {
    title: "Logistics Route Review",
    tag: "FIELD MOVEMENT",
    image: logistic,
    desc: "Aerial route checks for remote access, delivery planning, terrain visibility, and field movement coordination.",
  },
];

const wideCardIndexes = new Set([0, 4, 11]);

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
                  field-ready
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
                {/* <div className="absolute -inset-4 border border-tactical/20 corner-frame" /> */}

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
            {/* {missionPillars.map((pillar, index) => (
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
            ))} */}

            {missionPillars.map((pillar, index) => (
              <FloatUpText key={pillar.title} delay={index * 0.08}>
                <article
                  className="group relative h-full min-w-0"
                  style={{
                    "--card-glow": pillar.glow,
                    "--card-border": pillar.border,
                    "--card-shadow": pillar.shadow,
                  }}
                >
                  <div
                    className="
                  relative h-full overflow-hidden bg-charcoal p-8 zero-g-hover
                  border border-border transition-all duration-500 ease-out
                  group-hover:border-(--card-border)
                  group-hover:shadow-[0_0_30px_var(--card-shadow)]
                "
                  >
                    {/* Bottom Glow */}
                    <div
                      className="
                    pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full
                    opacity-0 blur-3xl transition-all duration-700 ease-out
                    group-hover:opacity-100 group-hover:scale-125
                  "
                      style={{
                        background: `radial-gradient(circle, ${pillar.glow} 0%, rgba(0,0,0,0) 68%)`,
                      }}
                    />

                    {/* Soft Gradient Wash */}
                    <div
                      className="
                    pointer-events-none absolute inset-0 opacity-0
                    transition-opacity duration-700 group-hover:opacity-100
                  "
                      style={{
                        background: `linear-gradient(135deg, transparent 8%, ${pillar.glow} 155%)`,
                      }}
                    />

                    {/* HUD Grid */}
                    <div
                      className="
                      pointer-events-none absolute inset-0 hud-grid opacity-0
                      transition-opacity duration-700 group-hover:opacity-20
                    "
                    />

                    {/* Corner Frame */}
                    <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-tactical/50 transition-colors duration-500 group-hover:border-(--card-border)" />
                    <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-tactical/50 transition-colors duration-500 group-hover:border-(--card-border)" />
                    <div className="absolute left-0 bottom-0 h-4 w-4 border-l border-b border-tactical/50 transition-colors duration-500 group-hover:border-(--card-border)" />
                    <div className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-tactical/50 transition-colors duration-500 group-hover:border-(--card-border)" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div
                        className="
                      font-display text-5xl font-bold text-tactical/30 mb-6
                      transition-colors duration-500
                      group-hover:text-(--card-border)
                    "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h2
                        className="
                        font-display text-2xl font-semibold mb-3 wrap-break-word
                        transition-colors duration-500
                        group-hover:text-(--card-border)
                      "
                      >
                        {pillar.title}
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>

                      <div className="mt-auto pt-6">
                        <div
                          className="
                          h-px w-10 bg-tactical/50
                          transition-all duration-500
                          group-hover:w-20 group-hover:bg-(--card-border)
                        "
                        />
                      </div>
                    </div>
                  </div>
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
              Reliable UAV technology shaped by operational requirements
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              We develop drone platforms around field usability, stable flight,
              modular payloads, data capture, operator training, and AI-assisted
              workflows that improve mission awareness without overcomplicating
              the system.
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

      {/* Drone Use Cases */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-t border-border">
        <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-end mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-tactical" />
                <span className="label-mono text-tactical">
                  DRONE USE CASES
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Where drones create real operational advantage
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              UAV systems are useful wherever teams need faster visibility,
              safer inspection, better documentation, or rapid intelligence from
              difficult locations.
            </p>
          </div>

          {/* <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className={`group relative min-h-90 overflow-hidden bg-charcoal ${
                  index === 0 || index === 4 || index === 11 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/10" />
                <div className="absolute inset-0 hud-grid opacity-15" />

                <div className="relative z-10 flex min-h-90 flex-col justify-end p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-tactical" />
                    <span className="label-mono text-tactical text-[10px]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 auto-rows-fr items-stretch gap-px bg-border border border-border">
            {useCases.map((item, index) => {
              const isWide = wideCardIndexes.has(index);
              const imageSrc =
                isWide && item.wideImage ? item.wideImage : item.image;

              return (
                <article
                  key={item.title}
                  className={`group relative min-h-[360px] overflow-hidden bg-charcoal ${
                    isWide ? "lg:col-span-2" : ""
                  }`}
                >
                  <img
                    src={imageSrc}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/10" />
                  <div className="absolute inset-0 hud-grid opacity-15" />

                  <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-6 lg:p-8">
                    <div className="w-full max-w-xl">
                      <div className="mb-4 flex h-[18px] items-center gap-3">
                        <span className="h-px w-8 shrink-0 bg-tactical" />

                        <span
                          className="label-mono text-tactical text-[10px] leading-none uppercase tracking-wider overflow-hidden break-words"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <h3
                        className="font-display text-2xl lg:text-3xl font-bold leading-tight h-[76px] overflow-hidden break-words"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 h-[66px] max-w-xl text-sm text-muted-foreground leading-relaxed overflow-hidden break-words transition-colors duration-300 group-hover:text-foreground"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
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
              From mission requirement to deployment readiness
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
                Building UAV readiness through practical collaboration
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
                expand training access, improve ISR workflows, and deliver drone
                systems that teams can trust in demanding field use.
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

      {/* embla slider */}
      <section className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32">
          <div className="mb-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">
                PLATFORM SEQUENCE
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Mission flow designed for focused UAV operations
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              A streamlined view of the operational stages that connect product
              engineering, validation, and deployment readiness.
            </p>
          </div>
        </div>

        <VerticalSlider />
      </section>
    </div>
  );
};

export default MissionPage;

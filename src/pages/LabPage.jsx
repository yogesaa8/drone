import { useEffect, useState } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

import hero from "../assets/lab/hero.png";
import droneLab from "../assets/lab/droneLab.png";
import groundSupport from "../assets/lab/groundSupport.png";
import studyMaterial from "../assets/lab/studyMaterials.png";
import infrastructure from "../assets/lab/infrastructure.png";
import engineering from "../assets/lab/engineering.png";
import buildProcess from "../assets/lab/buildProcess.png";
import fixedwingkit from "../assets/lab/fixedwingkit.png";
import logisticsdronekit from "../assets/lab/logisticsdronekit.png";
import quadcopterkit from "../assets/lab/quadcopterkit.png";
import fpvdronekit from "../assets/lab/fpvdronekit.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMaximize2, FiX } from "react-icons/fi";

import { drones } from "../data/data";

const dummyImages = {
  hero: hero,
  droneLab: droneLab,
  engineering: engineering,
  infrastructure: infrastructure,
  buildProcess: buildProcess,
  quadcopterkit: quadcopterkit,
  fpvdronekit: fpvdronekit,
  fixedwingkit: fixedwingkit,
  logisticsdronekit: logisticsdronekit,
  groundSupport: groundSupport,
  studyMaterials: studyMaterial,
};

const labCapabilities = [
  [
    "Drone Labs Assisted",
    "Complete turnkey Defence Drone Lab Setup solutions for defence organisations, military training institutions, academic campuses, and industrial innovation centres.",
  ],
  [
    "Institutions Supported",
    "Hands-on training, indigenous UAV development, payload integration, surveillance systems, AI-based mission planning, and field-ready drone operations.",
  ],
  [
    "End-to-End Support",
    "From classroom training to command-centre operations, we help institutions build complete defence drone ecosystems.",
  ],
  [
    "Defence Drone Ecosystem",
    "UAV manufacturing, pilot training, R&D, surveillance, logistics, payload systems, and AI integration for future-ready drone capabilities.",
  ],
];

const labNeeds = [
  [
    "Modern Warfare Demand",
    "Countries worldwide are integrating drones for combat, surveillance, reconnaissance, and logistics.",
  ],
  [
    "Countering Emerging Threats",
    "Drone warfare, kamikaze drones, and AI-driven UAVs are now a reality of modern conflicts.",
  ],
  [
    "Self-Reliance In Defence Technology",
    "India must develop indigenous drone capability to reduce dependence on imported defence systems.",
  ],
  [
    "Cost-Effective, High-Impact Operations",
    "Drones provide surveillance, combat support, disaster response, and remote operations at lower operational cost.",
  ],
  [
    "Disaster Response & Strategic Support",
    "Drones are vital for border security, anti-terror missions, aerial supply drops, and search-and-rescue missions.",
  ],
];

const globalSignals = [
  [
    "Ukraine-Russia Conflict",
    "Drones are being used extensively for precision strikes, reconnaissance, and low-cost tactical warfare.",
  ],
  [
    "US & China Advancement",
    "Leading nations are developing autonomous UAV swarms, AI-driven warfare drones, and next-generation surveillance systems.",
  ],
  [
    "Middle East Drone Warfare",
    "Countries are using loitering munitions and drone strikes for targeted operations.",
  ],
  [
    "India’s Strategic Push",
    "India is ramping up indigenous drone production and counter-drone measures to strengthen national defence.",
  ],
];

const engineeringZones = [
  [
    "Concept Design & Simulation Lab",
    "Mission-ready solution planning and design validation for defence-grade UAVs.",
  ],
  [
    "Airframe Manufacturing Assembly Line",
    "Precision manufacturing and UAV frame assembly workflows.",
  ],
  [
    "Knowledge Hub / Classroom Learning Zone",
    "Structured classroom environment for UAV fundamentals and tactical learning.",
  ],
  [
    "Electronics Integration & Spares Lab",
    "Wiring, avionics, payload integration, maintenance, and repair workflows.",
  ],
  [
    "Flight Control / Calibration Testing Area",
    "Flight controller tuning, calibration, bench checks, and performance validation.",
  ],
  [
    "Software / AI Tactical Training Zone",
    "Mission planning, AI integration, autonomous systems, and tactical operations training.",
  ],
];

const workflowSequence = [
  "Ideate",
  "Build",
  "Integrate",
  "Calibrate",
  "Validate",
  "Train",
  "Test",
  "Deploy",
];

const infrastructureItems = [
  ["CNC Router Machine", "Precision airframe and component manufacturing."],
  [
    "3D Printer Machine",
    "Rapid prototyping for custom UAV parts and fixtures.",
  ],
  [
    "Drone Simulators",
    "Safe pilot training and mission practice before live flight.",
  ],
  [
    "3 DOF Drone Test Jig",
    "Controlled testing for drone stability and flight behaviour.",
  ],
  ["Telescopic Drone Stage Jig", "Structured mounting and inspection support."],
  [
    "BLDC Motor Thrust Test Bench",
    "Motor and propeller thrust validation for UAV performance.",
  ],
  ["Multimeter", "Electrical testing, diagnostics, and maintenance support."],
  ["Soldering Iron", "Electronics integration, repair, and wiring workflows."],
  [
    "Drone Repair Tools",
    "Field repair, maintenance, and operational readiness.",
  ],
];

const buildSteps = [
  [
    "01",
    "Requirement Analysis",
    "Define objectives, identify use-cases, and determine the required lab scale.",
  ],
  [
    "02",
    "Site Survey",
    "Assess available space, check power readiness, and define safety pathways.",
  ],
  [
    "03",
    "Customized Lab Design",
    "Plan layout, zoning, standards, and training flow as per institution needs.",
  ],
  [
    "04",
    "Infrastructure Setup",
    "Install benches, cages, safety fixtures, charging stations, and lab zones.",
  ],
  [
    "05",
    "Equipment Integration",
    "Set up drones, simulators, electronics tools, software, and control systems.",
  ],
  [
    "06",
    "Training & Operations",
    "Deliver handover, SOPs, operator training, and ongoing upskilling support.",
  ],
];

const whyChoose = [
  [
    "Indigenous Technology",
    "Built for India with localized drone systems and defence-ready workflows.",
  ],
  [
    "Operational Expertise",
    "Hands-on experience in drone operations, training, and mission support.",
  ],
  [
    "Defence Background",
    "Military-grade precision, practical readiness, and secure lab planning.",
  ],
  [
    "Turnkey Capability",
    "Complete end-to-end lab deployment from design to training.",
  ],
  ["Scalable Solutions", "Grow your lab as your requirements expand."],
  [
    "AI Future Technologies",
    "Cutting-edge autonomous systems and tactical integration support.",
  ],
  [
    "Custom Design Capability",
    "Tailored lab solutions for institution-specific missions.",
  ],
  [
    "Long-Term Technical Support",
    "24/7 maintenance and operational assistance.",
  ],
];

const assemblyKits = [
  {
    name: "Quadcopter Kit",
    image: dummyImages.quadcopterkit,
    description:
      "A versatile quad-rotor UAV platform for hands-on assembly, repair, testing, and pilot skill development.",
    points: [
      "Max speed: 25 km/h for efficient missions",
      "Lightweight and agile platform for easy handling",
      "Flight time: up to 25 minutes of continuous operation",
      "Range: up to 1 km",
      "Ideal for practical training and self-building",
    ],
  },
  {
    name: "FPV Drone Kit",
    image: dummyImages.fpvdronekit,
    description:
      "A high-performance FPV kit designed for hands-on learning, racing-style control, tactical familiarization, and repair practice.",
    points: [
      "Brushless motor propulsion for smooth and stable flight",
      "Battery support for balanced performance",
      "Camera: 720p / 1080p FPV video transmission",
      "Max speed: 60-80 km/h for agile manoeuvring",
      "Max range: up to 1.5 km",
    ],
  },
  {
    name: "Fixed Wing Drone Kit",
    image: dummyImages.fixedwingkit,
    description:
      "A hands-on fixed-wing learning platform built for stable flight, mapping payloads, and endurance-oriented UAV training.",
    points: [
      "Lightweight and durable EPP foam with carbon fiber reinforcement",
      "Flight time: 25-35 minutes for extended operation",
      "Control range: up to 2 km",
      "Brushless motor for efficient performance",
      "Modular design for repair, upgrades, and payload modifications",
    ],
  },
  {
    name: "Logistics Drone Kit",
    image: dummyImages.logisticsdronekit,
    description:
      "A payload delivery platform for institutions seeking practical logistics, waypoint navigation, and field mission training.",
    points: [
      "Payload capacity: up to 10 kg",
      "Flight time: around 30 minutes",
      "GPS navigation with waypoint planning",
      "Carbon fiber and aluminium alloy frame for durability",
      "Modular assembly and customization for easy setup",
    ],
  },
];

const supportEquipment = [
  ["FPV Obstacles", "Indoor and outdoor pilot training obstacles."],
  [
    "Hanging FPV Obstacles",
    "Suspended route challenges for FPV skill-building.",
  ],
  [
    "Drone Launching Pad",
    "Safe launch and landing support for field operations.",
  ],
  ["Canopy Tent", "Portable shade and field command support."],
  [
    "Portable Folding Table With Chair",
    "Field-ready workspace for training, repair, and mission control.",
  ],
];

const studyMaterials = [
  [
    "Drone Handbook",
    "Operating procedures, maintenance guidelines, and troubleshooting support.",
  ],
  [
    "Manuals & User Guides",
    "Structured documentation for practical drone operations.",
  ],
  [
    "Posters & Presentations",
    "Quick-reference visuals and classroom teaching support.",
  ],
  [
    "Lab Setup & Software Operations",
    "Drone assembly, mapping software, flight planning, and mission workflow training.",
  ],
  [
    "Operational Readiness",
    "Checklists, safety procedures, and admin-ready training material.",
  ],
];

const stats = [
  ["30+", "Drone Labs Assisted"],
  ["5+", "Institutions Supported"],
  ["120+", "Drones Deployed"],
  ["100%", "Success Rate"],
];

const SectionHeader = ({ kicker, title, description }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-10 bg-tactical" />
      <span className="label-mono text-tactical uppercase">{kicker}</span>
    </div>

    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
      {title}
    </h2>

    {description ? (
      <p className="text-muted-foreground max-w-3xl text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    ) : null}
  </div>
);

const DummyImage = ({ src, alt, className = "" }) => (
  <div
    className={`relative bg-charcoal border border-border overflow-hidden zero-g-hover ${className}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover block" />
  </div>
);

export const ProductCard = ({ item, type, onClick, onZoom }) => {
  const actionTo = type === "drone" ? `/drone/${item.id}` : "/contact";
  const canZoom = Boolean(onZoom);

  return (
    <article
      className="group bg-charcoal flex flex-col cursor-pointer relative border border-border min-w-0"
      onClick={onClick}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-background">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />
        {item.serial && (
          <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
            {item.serial}
          </div>
        )}
        {item.price && (
          <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
            {item.price}
          </div>
        )}
        {canZoom && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onZoom(item);
            }}
            aria-label={`Open ${item.name} image fullscreen`}
            title="Click to zoom"
            className="absolute bottom-3 right-3 z-20 grid h-9 w-9 place-items-center border border-border bg-background/85 text-foreground transition-colors hover:border-tactical hover:text-tactical"
          >
            <FiMaximize2 size={16} />
          </button>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="label-mono text-tactical text-[10px] mb-2 uppercase wrap-break-word">
          {item.use || item.category || type}
        </div>
        <h3 className="font-display text-xl font-bold leading-tight wrap-break-word">
          {item.name}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {item.specs.slice(0, 4).map(([k, v]) => (
            <div key={k} className="border-l border-tactical/40 pl-2 min-w-0">
              <div className="label-mono text-[9px] uppercase">{k}</div>
              <div className="text-sm font-semibold mt-0.5 wrap-break-word">
                {v}
              </div>
            </div>
          ))}
        </div>

        <Link
          to={actionTo}
          onClick={(event) => event.stopPropagation()}
          className="mt-6 w-full btn-ghost justify-between !py-3"
        >
          <span>
            {type === "drone" ? "View Details" : "Request Configuration"}
          </span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
};

const LabPage = () => {
  const navigate = useNavigate();
  const [zoomedItem, setZoomedItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = zoomedItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedItem]);

  useEffect(() => {
    if (!zoomedItem) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedItem]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden">
      <AnimatedGrid />

      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">
        <FloatUpText>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-tactical" />
                <span className="label-mono text-tactical uppercase">
                  Defence / Drone Lab Setup
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                Building India’s Future Defence Drone Ecosystem.
              </h1>

              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                Arcanumspace provides complete turnkey Defence Drone Lab Setup
                solutions for defence organisations, military training
                institutions, academic campuses, and industrial innovation
                centres.
              </p>

              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mt-5">
                Our labs enable hands-on training, indigenous UAV development,
                payload integration, surveillance systems, AI-based mission
                planning, and field-ready drone operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Design",
                  "Train",
                  "Innovate",
                  "Deploy",
                  "DGCA Aligned Training",
                  "Defence-Grade Systems",
                  "Academic & Industrial Partner",
                ].map((item) => (
                  <span
                    key={item}
                    className="label-mono text-xs uppercase border border-border bg-charcoal/70 px-4 py-2 text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-tactical/20" />
              <DummyImage
                src={dummyImages.hero}
                alt="Defence Drone Lab Setup"
                className="relative w-full h-auto object-cover"
              />
            </div>
          </div>
        </FloatUpText>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {labCapabilities.map(([title, desc], index) => (
            <FloatUpText key={title} delay={index * 0.08}>
              <article className="bg-charcoal p-7 h-full zero-g-hover min-w-0">
                <div className="label-mono text-tactical text-[10px] mb-5">
                  LAB {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="font-display text-2xl font-semibold mb-3 wrap-break-word">
                  {title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </article>
            </FloatUpText>
          ))}
        </div>

        <FloatUpText delay={0.25}>
          <div className="mt-10 border border-border bg-charcoal/70 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-tactical" />
              <span className="label-mono text-tactical uppercase">
                Complete Lab Support
              </span>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-5xl">
              From classroom training to command-centre operations, we help
              institutions build complete defence drone ecosystems covering{" "}
              <span className="text-tactical">
                UAV manufacturing, pilot training, R&amp;D, surveillance,
                logistics, payload systems, and AI integration.
              </span>
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {stats.map(([value, label]) => (
                <div key={label} className="bg-background/70 p-6">
                  <div className="font-display text-4xl font-bold text-tactical mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.18}>
          <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeader
                kicker="Drone Lab"
                title="What Is A Drone Lab?"
                description="A Drone Lab is a specialised facility designed for the training, research, development, and deployment of UAVs for military, security, and tactical applications."
              />

              <DummyImage
                src={dummyImages.droneLab}
                alt="What is a Drone Lab"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {labNeeds.map(([title, desc], index) => {
                const isLastItem = index === labNeeds.length - 1;

                return (
                  <article
                    key={title}
                    className={`bg-charcoal p-6 zero-g-hover ${
                      isLastItem ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="label-mono text-tactical text-[10px] mb-4">
                      NEED {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="font-display text-xl font-semibold mb-3">
                      {title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.22}>
          <div className="mt-10 border border-border bg-charcoal/70 p-6 lg:p-8">
            <SectionHeader
              kicker="Global Context"
              title="What’s Happening Around The World?"
              description="Drone-led defence capability is no longer optional. Modern institutions need hands-on systems for training, tactical experimentation, and strategic preparedness."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {globalSignals.map(([title, desc]) => (
                <article key={title} className="bg-background/70 p-6">
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
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Engineering"
              title="Engineering Indigenous Aerial Intelligence"
              description="We bridge the gap between academic learning, defence readiness, and industrial execution through turnkey labs that empower institutions to shape the future of aerial intelligence."
            />

            {/* Image Top */}
            <div className="w-full">
              <DummyImage
                src={dummyImages.engineering}
                alt="Engineering Indigenous Aerial Intelligence"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 6 Points Bottom - 3 in one row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {engineeringZones.map(([title, desc], index) => (
                <article
                  key={title}
                  className="bg-charcoal p-5 sm:p-6 zero-g-hover"
                >
                  <div className="label-mono text-tactical text-[10px] mb-4">
                    ZONE {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-3">
                    {title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 border border-border bg-charcoal/70 p-5 sm:p-6">
              <div className="label-mono text-tactical uppercase text-xs mb-4">
                Workflow Sequence
              </div>

              <div className="flex flex-wrap gap-3">
                {workflowSequence.map((item, index) => (
                  <span
                    key={item}
                    className="label-mono text-xs uppercase border border-border bg-background/70 px-4 py-2 text-muted-foreground"
                  >
                    {String(index + 1).padStart(2, "0")} / {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Infrastructure"
              title="The Rise of Drone-Centric Infrastructure"
              description="Drone labs are becoming the new computer labs, enabling institutions to build the future of aerial intelligence across defence, agriculture, and industrial sectors."
            />

            <DummyImage
              src={dummyImages.infrastructure}
              alt="Drone-Centric Infrastructure"
              className="w-full h-auto object-cover"
            />

            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {infrastructureItems.map(([title, desc], index) => (
                <article key={title} className="bg-charcoal p-6 zero-g-hover">
                  <div className="label-mono text-tactical text-[10px] mb-4">
                    EQUIPMENT {String(index + 1).padStart(2, "0")}
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
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Drone Platforms"
              title="Mission-Ready Drone Platforms"
              description="Versatile indigenous UAV platforms engineered for defence training, surveillance readiness, tactical support, and rapid field deployment."
            />

            <div className=" min-h-screen relative overflow-hidden">
              <AnimatedGrid />
              <div className="relative z-20 max-w-7xl mx-auto space-y-32">
                {/* 1. Drone Section */}
                <section>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {drones.map((d) => (
                      <ProductCard
                        key={d.id}
                        item={d}
                        type="drone"
                        onClick={() => navigate("/drone/" + d.id)}
                      />
                    ))}
                  </div>
                </section>
              </div>

              {zoomedItem && (
                <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 md:p-8"
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${zoomedItem.name} image preview`}
                  onClick={() => setZoomedItem(null)}
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setZoomedItem(null);
                    }}
                    aria-label="Close fullscreen image"
                    title="Close"
                    className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-border bg-charcoal text-foreground transition-colors hover:border-tactical hover:text-tactical md:right-8 md:top-8"
                  >
                    <FiX size={22} />
                  </button>
                  <img
                    src={zoomedItem.image}
                    alt={`${zoomedItem.name} fullscreen preview`}
                    className="max-h-full max-w-full object-contain"
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
              )}
            </div>
            {/* <ProductsPage /> */}
          </div>
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Build Process"
              title="How We Build Your Drone Lab"
              description="From blueprint to airborne capability, our systematic approach ensures every drone lab meets your specific requirements."
            />

            <DummyImage
              src={dummyImages.buildProcess}
              alt="How We Build Your Drone Lab"
              className="w-full h-auto object-cover"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {buildSteps.map(([number, title, desc]) => (
                <article key={title} className="bg-charcoal p-7 zero-g-hover">
                  <div className="font-display text-4xl font-bold text-tactical mb-5">
                    {number}
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Why Choose Us"
              title="Why Institutions Choose Arcanumspace"
              description="We combine indigenous technology with operational expertise to deliver turnkey drone lab solutions that transform institutions into centres of aerial innovation."
            />

            <div className="grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map(([title, desc], index) => (
                <article key={title} className="bg-charcoal p-6 zero-g-hover">
                  <div className="label-mono text-tactical text-[10px] mb-4">
                    VALUE {String(index + 1).padStart(2, "0")}
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
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Kits"
              title="Drone Assembly, Training & Logistics Kits"
              description="Hands-on platforms for assembly, learning, repair, testing, pilot skill development, payload delivery, and practical field operations."
            />

            <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
              {assemblyKits.map((kit, index) => (
                <article
                  key={kit.name}
                  className="bg-charcoal p-6 zero-g-hover"
                >
                  <div className="grid sm:grid-cols-[0.85fr_1.15fr] gap-6">
                    <DummyImage
                      src={kit.image}
                      alt={kit.name}
                      className="w-full h-auto object-cover"
                    />

                    <div>
                      <div className="label-mono text-tactical text-[10px] mb-3">
                        KIT {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="font-display text-2xl font-semibold mb-3">
                        {kit.name}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {kit.description}
                      </p>

                      <div className="space-y-3">
                        {kit.points.map((point) => (
                          <div key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-tactical" />
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeader
                kicker="Field Support"
                title="Ground Support Equipment"
                description="Essential field support systems for safe drone training, deployment, and mission readiness."
              />

              <DummyImage
                src={dummyImages.groundSupport}
                alt="Ground Support Equipment"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid gap-px bg-border border border-border">
              {supportEquipment.map(([title, desc], index) => (
                <article key={title} className="bg-charcoal p-6 zero-g-hover">
                  <div className="label-mono text-tactical text-[10px] mb-3">
                    SUPPORT {String(index + 1).padStart(2, "0")}
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
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <DummyImage
              src={dummyImages.studyMaterials}
              alt="Specialized Study Materials and Training"
              className="w-full h-auto object-cover"
            />

            <div>
              <SectionHeader
                kicker="Training Material"
                title="Specialized Study Materials & Training"
                description="Specialized study materials and structured training content for drone enthusiasts, trainees, institutions, and professionals."
              />

              <div className="grid gap-px bg-border border border-border">
                {studyMaterials.map(([title, desc], index) => (
                  <article key={title} className="bg-charcoal p-6 zero-g-hover">
                    <div className="label-mono text-tactical text-[10px] mb-3">
                      MATERIAL {String(index + 1).padStart(2, "0")}
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
          </div>
        </FloatUpText>

        <FloatUpText delay={0.25}>
          <div className="mt-20 border border-border bg-charcoal/70 p-6 lg:p-10 text-center">
            <div className="label-mono text-tactical uppercase mb-4">
              Ready To Build Your Drone Lab?
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
              Transform your institution with a complete drone ecosystem.
            </h2>

            <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
              Let’s discuss your requirements and deploy a lab built for
              indigenous drone innovation, defence training, and practical
              operational excellence.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border text-left">
              {[
                ["Website", "www.arcanumspace.com"],
                ["Email", "sales@arcanumspace.com"],
                ["Phone", "80043 69347"],
                [
                  "Address",
                  "AH-101, Antriksh Heights, Sector 84, Gurugram Haryana - 122004",
                ],
              ].map(([label, value]) => (
                <div key={label} className="bg-background/70 p-6">
                  <div className="label-mono text-tactical uppercase text-[10px] mb-3">
                    {label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.3}>
          <div className="mt-10 flex justify-center">
            <div className="w-32 sm:w-40 md:w-44 border border-border bg-background/70 p-2 shadow-lg">
              <svg
                viewBox="0 0 300 200"
                className="w-full h-auto block"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="India Flag"
              >
                <rect width="300" height="200" fill="#ffffff" />
                <rect width="300" height="66.67" y="0" fill="#FF9933" />
                <rect width="300" height="66.67" y="133.33" fill="#138808" />

                <g transform="translate(150 100)">
                  <circle
                    r="22"
                    fill="none"
                    stroke="#000080"
                    strokeWidth="2.5"
                  />
                  {Array.from({ length: 24 }).map((_, index) => (
                    <line
                      key={index}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-22"
                      stroke="#000080"
                      strokeWidth="1"
                      transform={`rotate(${index * 15})`}
                      strokeLinecap="round"
                    />
                  ))}
                  <circle r="3" fill="#000080" />
                </g>
              </svg>
            </div>
          </div>
        </FloatUpText>
      </section>
    </div>
  );
};

export default LabPage;

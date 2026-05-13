import { useEffect } from "react";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1524851823820-22796f95efec?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const dummyImages = {
  hero: DUMMY_IMAGE,
  droneLab: DUMMY_IMAGE,
  engineering: DUMMY_IMAGE,
  infrastructure: DUMMY_IMAGE,
  platforms: DUMMY_IMAGE,
  aiPlatforms: DUMMY_IMAGE,
  buildProcess: DUMMY_IMAGE,
  whyChoose: DUMMY_IMAGE,
  assemblyKits: DUMMY_IMAGE,
  trainingKits: DUMMY_IMAGE,
  groundSupport: DUMMY_IMAGE,
  studyMaterials: DUMMY_IMAGE,
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

const dronePlatforms = [
  {
    name: "Tinywoop",
    type: "FPV Training / Surveillance FPV Platform",
    image: dummyImages.platforms,
    description:
      "A compact FPV drone built for entry-level pilot development, indoor and outdoor tactical training, and close-range observation missions.",
    specs: [
      ["Endurance", "12 min"],
      ["Range", "1.5 km"],
      ["Camera", "Action Camera Mount"],
      ["Size", "2.5-inch FPV"],
      ["Max Altitude", "500 m"],
      ["Wind Resist", "12 m/s"],
    ],
    tags: ["Pilot Training", "Border Surveillance"],
  },
  {
    name: "ARC MT 280",
    type: "Surveillance / Payload Platform",
    image: dummyImages.platforms,
    description:
      "A lightweight tactical multi-rotor optimized for stable surveillance, rapid deployment, and precision payload support in field training.",
    specs: [
      ["Endurance", "20 min"],
      ["Sensor", "Surveillance 2K Camera"],
      ["Payload", "Payload Dropping Mechanism"],
      ["Frame", "Carbon Fiber"],
      ["Weight", "1.5 kg"],
      ["Range", "2 km"],
    ],
    tags: ["Training", "Surveillance", "Payload Delivery"],
  },
  {
    name: "Shadow Drop 10",
    type: "EW-Ready Anti-Drone FPV Platform",
    image: dummyImages.platforms,
    description:
      "A mission-oriented FPV drone configured for contested environments, tactical precision, payload operations, and short-range surveillance.",
    specs: [
      ["Payload", "800 g"],
      ["Battery Endurance", "20 min"],
      ["Speed", "100 km/h"],
      ["Size", "10-inch FPV"],
      ["Range", "5 km"],
    ],
    tags: ["EW Environment", "Surveillance", "Kamikaze Drone"],
  },
  {
    name: "Beetle 5",
    type: "FPV Training & Surveillance Platform",
    image: dummyImages.aiPlatforms,
    description:
      "A high-agility FPV drone built for pilot familiarization, close-range surveillance, compact reconnaissance, and mission-ready training.",
    specs: [
      ["Size", "5-inch FPV"],
      ["Weight", "750 g"],
      ["Speed", "100 km/h"],
      ["Category", "Analog / Digital"],
      ["Endurance", "15 min"],
      ["Range", "5 km"],
    ],
    tags: ["Training", "Surveillance"],
  },
  {
    name: "ARC MT 480AI",
    type: "AI Tactical Multi-Rotor Platform",
    image: dummyImages.aiPlatforms,
    description:
      "An AI-enabled multirotor designed for autonomous flight, day/night surveillance, payload integration, and tactical mission versatility.",
    specs: [
      ["Speed", "108 km/h"],
      ["Flight Mode", "Autonomous AI"],
      ["Camera", "Day / Night 2K Thermal"],
      ["Altitude", "1500 ft"],
      ["Endurance", "40 min"],
      ["Range", "15 km"],
    ],
    tags: ["Combat Surveillance", "Rapid Response", "Target Tracking"],
  },
  {
    name: "Soccer",
    type: "Training Drone",
    image: dummyImages.aiPlatforms,
    description:
      "An enclosed training drone designed for safe indoor and outdoor practice with protective cage support for beginner pilot development.",
    specs: [
      ["Range", "1 km"],
      ["Endurance", "12 min"],
      ["Size", "3.5 inch"],
      ["Weight", "250 g"],
    ],
    tags: ["Training"],
  },
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
    image: dummyImages.assemblyKits,
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
    image: dummyImages.assemblyKits,
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
    image: dummyImages.trainingKits,
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
    image: dummyImages.trainingKits,
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

const LabPage = () => {
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
                Arcanum Space provides complete turnkey Defence Drone Lab Setup
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
                className="relative aspect-4/3"
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
                className="aspect-4/3"
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

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
              <DummyImage
                src={dummyImages.engineering}
                alt="Engineering Indigenous Aerial Intelligence"
                className="aspect-4/3"
              />

              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {engineeringZones.map(([title, desc], index) => (
                  <article key={title} className="bg-charcoal p-6 zero-g-hover">
                    <div className="label-mono text-tactical text-[10px] mb-4">
                      ZONE {String(index + 1).padStart(2, "0")}
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

            <div className="mt-8 border border-border bg-charcoal/70 p-6">
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
              className="aspect-16/7 mb-8"
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

            <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
              {dronePlatforms.map((drone) => (
                <article
                  key={drone.name}
                  className="bg-charcoal p-6 zero-g-hover"
                >
                  <div className="grid sm:grid-cols-[0.85fr_1.15fr] gap-6">
                    <DummyImage
                      src={drone.image}
                      alt={drone.name}
                      className="aspect-4/3"
                    />

                    <div>
                      <div className="label-mono text-tactical text-[10px] uppercase mb-3">
                        {drone.type}
                      </div>

                      <h3 className="font-display text-2xl font-semibold mb-3">
                        {drone.name}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {drone.description}
                      </p>

                      <div className="grid grid-cols-2 gap-px bg-border border border-border mb-5">
                        {drone.specs.map(([label, value]) => (
                          <div key={label} className="bg-background/70 p-3">
                            <div className="label-mono text-[9px] text-tactical uppercase mb-1">
                              {label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {drone.tags.map((tag) => (
                          <span
                            key={tag}
                            className="label-mono text-[10px] uppercase border border-border bg-background/70 px-3 py-1.5 text-muted-foreground"
                          >
                            {tag}
                          </span>
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
          <div className="mt-20">
            <SectionHeader
              kicker="Build Process"
              title="How We Build Your Drone Lab"
              description="From blueprint to airborne capability, our systematic approach ensures every drone lab meets your specific requirements."
            />

            <DummyImage
              src={dummyImages.buildProcess}
              alt="How We Build Your Drone Lab"
              className="aspect-16/7 mb-8"
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
              title="Why Institutions Choose ArcanumSpace"
              description="We combine indigenous technology with operational expertise to deliver turnkey drone lab solutions that transform institutions into centres of aerial innovation."
            />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
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

              <DummyImage
                src={dummyImages.whyChoose}
                alt="Why Institutions Choose ArcanumSpace"
                className="aspect-4/3"
              />
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
                      className="aspect-4/3"
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
                className="aspect-4/3"
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
              className="aspect-4/3"
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
      </section>
    </div>
  );
};

export default LabPage;

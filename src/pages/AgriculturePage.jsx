import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";
import { drones } from "../data/data";
import heroVdo from "../assets/about/about_page.mp4";


const agricultureDrone = drones.find((drone) => drone.id === "agro-spray-x6");

const capabilityCards = [
  [
    "Precision Crop Spraying",
    "Uniform pesticide, fertilizer, and nutrient application with controlled flight paths for healthier crop coverage.",
  ],
  [
    "Large Field Coverage",
    "Heavy-lift multirotor architecture supports repeatable spraying operations across farms, plantations, and wide agricultural zones.",
  ],
  [
    "Smart Field Monitoring",
    "Aerial inspection support helps teams observe crop condition, irrigation zones, field boundaries, and operational progress.",
  ],
  [
    "Operator Controlled Workflow",
    "Autonomous, semi-autonomous, and manual modes allow field teams to match operations to terrain, crop type, and safety needs.",
  ],
];

const operationalFocus = [
  ["Application", "Pesticide, fertilizer, micronutrient, and water-based crop treatment support."],
  ["Platform", "High-clearance agricultural UAV with carbon-fiber extended arm structure."],
  ["Navigation", "GPS and GNSS assisted position hold for planned field passes."],
  ["Use Areas", "Farms, crop fields, orchards, plantations, and rural agricultural zones."],
];

const workflow = [
  ["01", "Survey", "Assess crop area, boundaries, terrain, wind conditions, and spray requirement."],
  ["02", "Plan", "Define field path, payload quantity, spray density, and operating mode."],
  ["03", "Deploy", "Run controlled crop treatment with stable height, coverage, and operator oversight."],
  ["04", "Review", "Inspect coverage quality, crop response, and next field operation priorities."],
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

const AgricultureImage = ({ src, alt, className = "" }) => (
  <div className={`relative border border-border bg-charcoal overflow-hidden corner-frame ${className}`}>
    <img src={src} alt={alt} className="h-full w-full object-cover" />
    <div className="absolute inset-0 hud-grid opacity-15 pointer-events-none" />
  </div>
);

const AgricultureVideo = ({ src, className = "" }) => (
  <div className={`relative border border-border bg-charcoal overflow-hidden corner-frame ${className}`}>
    <video
      src={src}
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Agriculture drone video"
    />
    <div className="absolute inset-0 hud-grid opacity-15 pointer-events-none" />
  </div>
);

const AgriculturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroImage = agricultureDrone?.image;
  const midImage = agricultureDrone?.gallery?.[1] || heroImage;

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
                  Defence / Agriculture Drone
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                Precision agriculture drone systems for smart farming operations
              </h1>

              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                Arcanumspace agriculture drones support crop spraying, fertilizer
                distribution, field surveillance, and smart farming workflows with
                practical UAV engineering built for Indian field conditions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Crop Spraying",
                  "Field Surveillance",
                  "Smart Farming",
                  "GPS Assisted",
                  "Large Area Coverage",
                ].map((item) => (
                  <span
                    key={item}
                    className="label-mono text-xs uppercase border border-border bg-charcoal/70 px-4 py-2 text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-tactical justify-center">
                  Request Agriculture Setup
                  <FiArrowRight aria-hidden />
                </Link>
                <Link to="/drone/agro-spray-x6" className="btn-ghost justify-center">
                  View Drone Details
                  <FiArrowRight aria-hidden />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-tactical/20" />
              <AgricultureVideo
                src={heroVdo}
                className="relative aspect-4/3 w-full"
              />
            </div>
          </div>
        </FloatUpText>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {operationalFocus.map(([label, value], index) => (
            <FloatUpText key={label} delay={index * 0.06}>
              <article className="bg-charcoal p-6 h-full zero-g-hover min-w-0">
                <div className="label-mono text-tactical text-[10px] mb-4">
                  AG {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-xl font-semibold mb-3">
                  {label}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value}
                </p>
              </article>
            </FloatUpText>
          ))}
        </div>

        <FloatUpText delay={0.15}>
          <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            {midImage ? (
              <AgricultureImage
                src={midImage}
                alt="Agriculture drone payload and spraying platform"
                className="aspect-[4/3] w-full"
              />
            ) : null}

            <div>
              <SectionHeader
                kicker="Field Capability"
                title="Built for crop treatment, field intelligence, and repeatable farm operations"
                description="The agriculture platform brings payload capacity, stable multirotor control, and field-ready workflow support into one practical UAV system for farms and agritech teams."
              />

              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {capabilityCards.map(([title, desc], index) => (
                  <article key={title} className="bg-charcoal p-6 zero-g-hover min-w-0">
                    <div className="label-mono text-tactical text-[10px] mb-4">
                      CAPABILITY {String(index + 1).padStart(2, "0")}
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

        {agricultureDrone ? (
          <FloatUpText delay={0.2}>
            <div className="mt-20">
              <SectionHeader
                kicker="Platform Data"
                title={agricultureDrone.name}
                description={agricultureDrone.use}
              />

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                {agricultureDrone.specs.map(([label, value]) => (
                  <article key={label} className="bg-charcoal p-6 min-w-0">
                    <div className="label-mono text-tactical text-[10px] mb-3">
                      {label}
                    </div>
                    <p className="font-display text-xl font-semibold leading-tight">
                      {value}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </FloatUpText>
        ) : null}

        <FloatUpText delay={0.2}>
          <div className="mt-20">
            <SectionHeader
              kicker="Operation Flow"
              title="A clear field workflow from survey to review"
              description="Agriculture drone deployment works best when field data, payload planning, operator control, and post-operation review are handled as one connected process."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {workflow.map(([step, title, desc]) => (
                <article key={step} className="bg-charcoal p-7 corner-frame min-w-0">
                  <div className="font-display text-4xl font-bold text-tactical/40 mb-5">
                    {step}
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

        <FloatUpText delay={0.25}>
          <div className="mt-20 border border-border bg-charcoal/70 p-6 lg:p-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="label-mono text-tactical uppercase mb-4">
                  Agriculture Drone Consultation
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Configure a crop spraying workflow for your field requirement
                </h2>
                <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
                  Share your crop type, field size, payload requirement, and
                  deployment goals. Our team can help align the agriculture drone
                  system with practical on-ground operations.
                </p>
              </div>

              <Link to="/contact" className="btn-tactical justify-center">
                Contact Team
                <FiArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </FloatUpText>
      </section>
    </div>
  );
};

export default AgriculturePage;

import { FloatUpText } from "../animations/Antigravity";
import AG from "../../assets/mission/AG.png";
import DH from "../../assets/mission/DH.png";
import ds from "../../assets/mission/ds.png";
import SR from "../../assets/mission/SR.png";
import IDM from "../../assets/mission/IDM.png";
import SM from "../../assets/mission/SM.png";

// Mission & Tech data combined for grid display
const combinedData = [
  {
    mission: "Defense Surveillance",
    missionDesc: "Persistent ISR coverage for forward operating zones.",
    tech: "AI Target Tracking",
    techDesc: "Onboard neural processing locks mobile targets.",
    techIcon: "◎",
    image: ds,
  },
  {
    mission: "Survey & Mapping",
    missionDesc: "Continuous perimeter watch with AI intrusion detection.",
    tech: "4K Thermal Imaging",
    techDesc: "Dual-spectrum optics for heat-signature feeds.",
    techIcon: "▦",
    image: SM,
  },
  {
    mission: "Disaster Response",
    missionDesc: "Rapid aerial assessment for search and rescue.",
    tech: "Autonomous Routing",
    techDesc: "Adaptive obstacle avoidance and re-routing.",
    techIcon: "⟶",
    image: DH,
  },
  {
    mission: "Industrial Inspection",
    missionDesc: "Asset and pipeline inspection without ground risk.",
    tech: "Encrypted Transmission",
    techDesc: "AES-256 secure link with anti-jamming.",
    techIcon: "⌬",
    image: IDM,
  },
  {
    mission: "Agricultural Mapping",
    missionDesc: "Multispectral crop analysis and precision farming.",
    tech: "All-Weather Build",
    techDesc: "IP54 rated — operates in rain, dust, sub-zero.",
    techIcon: "▲",
    image: AG,
  },
  {
    mission: "Search & Rescue",
    missionDesc: "Thermal-guided locate ops across difficult terrain.",
    tech: "Long-Range Control",
    techDesc: "Command authority up to 12 km redundant uplink.",
    techIcon: "≣",
    image: SR,
  },
];

const MissionTechGrid = () => {
  return (
    <section
      id="missions-tech"
      className="relative py-24 lg:py-32 border-y border-border overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <FloatUpText>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-tactical" />

              <span className="label-mono text-tactical">
                ▌ MISSIONS & CAPABILITIES
              </span>

              <span className="h-px w-8 bg-tactical" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Built for Critical Missions, Engineered for Precision
            </h2>
          </div>
        </FloatUpText>

        <FloatUpText delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr items-stretch gap-px bg-border border border-border">
            {combinedData.map((c, i) => (
              <div
                key={c.mission}
                className="relative overflow-hidden bg-charcoal p-8 group hover:bg-background zero-g-hover min-w-0 min-h-[310px] flex"
              >
                {/* Background Image */}
                <img
                  src={c.image}
                  alt={c.mission}
                  className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-[0.16] scale-105 group-hover:opacity-[0.80] group-hover:scale-100 transition-all duration-700 ease-out pointer-events-none"
                />

                {/* Readability Overlay */}
                <div className="absolute inset-0 z-1 bg-background/70 group-hover:bg-background/55 transition-colors duration-700 pointer-events-none" />

                {/* Tactical Gradient Overlay */}
                <div className="absolute inset-0 z-2 bg-linear-to-br from-charcoal/70 via-charcoal/35 to-background/75 group-hover:from-charcoal/45 group-hover:via-charcoal/20 group-hover:to-background/55 transition-all duration-700 pointer-events-none" />

                {/* HUD Texture */}
                <div className="absolute inset-0 z-3 hud-grid opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex h-full w-full flex-col min-w-0">
                  {/* Number Fixed Area */}
                  <div className="h-[54px] flex items-start justify-between shrink-0">
                    <span className="font-display text-5xl font-bold text-tactical/40 group-hover:text-tactical transition-colors leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title Fixed Area */}
                  <h3
                    className="font-display text-xl font-semibold leading-tight h-[32px] overflow-hidden break-words"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {c.mission}
                  </h3>

                  {/* Description Fixed Area */}
                  <p
                    className="text-sm text-muted-foreground leading-relaxed h-[48px] overflow-hidden mt-1 break-words"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {c.missionDesc}
                  </p>

                  {/* Divider Fixed Position */}
                  <div className="h-px bg-linear-to-r from-tactical/50 to-transparent my-6 shrink-0" />

                  {/* Tech Fixed Area */}
                  <div className="flex items-start gap-2 min-h-[38px] mb-2">
                    <span className="text-tactical text-sm leading-none mt-[2px] w-4 shrink-0 flex justify-center">
                      {c.techIcon}
                    </span>

                    <span className="label-mono text-tactical text-[10px] tracking-wider leading-relaxed break-words">
                      POWERED BY: {c.tech.toUpperCase()}
                    </span>
                  </div>

                  <p
                    className="text-xs text-muted-foreground/90 leading-relaxed overflow-hidden break-words"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {c.techDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FloatUpText>
      </div>
    </section>
  );
};

export default MissionTechGrid;
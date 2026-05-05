import raven from "../assets/drone-raven.jpg";
import falcon from "../assets/drone-falcon.jpg";
import viper from "../assets/drone-viper.jpg";
import atlas from "../assets/drone-atlas.jpg";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";

export const drones = [
  {
    id: "raven-x1",
    serial: "UAV-RX1-048",
    name: "Raven X1 Recon",
    use: "Long-range surveillance",
    image: raven,
    gallery: [raven, g1, g3, g5],
    specs: [
      ["Endurance", "48 min"],
      ["Range", "12 km"],
      ["Camera", "4K Thermal"],
      ["Frame", "Carbon Fiber"],
      ["Max Altitude", "5,000 m"],
      ["Wind Resist", "12 m/s"],
    ],
    missions: ["Border surveillance", "Recon mapping", "ISR operations"],
  },
  {
    id: "falcon-m4",
    serial: "UAV-FM4-112",
    name: "Falcon M4 Tactical",
    use: "Tactical field mapping",
    image: falcon,
    gallery: [falcon, g2, g1, g4],
    specs: [
      ["Endurance", "42 min"],
      ["Sensor", "LiDAR Ready"],
      ["Stabilization", "RTK GPS"],
      ["Frame", "Foldable Alloy"],
      ["Payload", "1.8 kg"],
      ["Deploy Time", "< 60 s"],
    ],
    missions: ["Terrain mapping", "Battlefield survey", "Engineering ops"],
  },
  {
    id: "viper-a7",
    serial: "UAV-VA7-207",
    name: "Viper A7 Patrol",
    use: "Border and perimeter patrol",
    image: viper,
    gallery: [viper, g3, g5, g1],
    specs: [
      ["Vision", "Night / IR"],
      ["AI Tracking", "Active"],
      ["Mode", "Silent Flight"],
      ["Rating", "IP54"],
      ["Endurance", "38 min"],
      ["Range", "9 km"],
    ],
    missions: ["Perimeter patrol", "Covert observation", "Anti-intrusion"],
  },
  {
    id: "atlas-hl",
    serial: "UAV-AHL-301",
    name: "Atlas HeavyLift",
    use: "Payload and emergency delivery",
    image: atlas,
    gallery: [atlas, g2, g4, g5],
    specs: [
      ["Payload", "4.5 kg"],
      ["Battery", "Dual Hot-Swap"],
      ["Routing", "Autonomous"],
      ["Protocol", "Emergency Land"],
      ["Endurance", "32 min"],
      ["Range", "8 km"],
    ],
    missions: ["Logistics drop", "Medical delivery", "Field resupply"],
  },
];

export const gallery = [
  { src: g1, caption: "Mountain Recon — Sector 7-A" },
  { src: g2, caption: "Industrial Inspection — Refinery 04" },
  { src: g3, caption: "Desert Surveillance — Grid 19N" },
  { src: g5, caption: "Pad Standby — Forward Operating Base" },
  { src: g4, caption: "Command Operations — TOC Alpha" },
];

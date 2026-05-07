import viper from "../assets/drone-viper.jpg";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";

import d1_1 from "../assets/d1/1.1.png"
import d2_1 from "../assets/d1/1.2.png"
import d3_1 from "../assets/d1/1.3.png"
import d4_1 from "../assets/d1/1.4.png"
import d5_1 from "../assets/d1/1.5.png"
import model1 from "../assets/d1/01.glb?url"

import d1_2 from "../assets/d2/2.png"
import d2_2 from "../assets/d2/2.1.png"
import d3_2 from "../assets/d2/2.2.png"
import d4_2 from "../assets/d2/2.3.png"
import d5_2 from "../assets/d2/2.4.png"
import model2 from "../assets/d2/02.glb?url"

import d1_3 from "../assets/d3/3.png"
import d2_3 from "../assets/d3/3.1.png"
import d3_3 from "../assets/d3/3.2.png"
import d4_3 from "../assets/d3/3.3.png"
import d5_3 from "../assets/d3/3.4.png"
import model3 from "../assets/d3/03.glb?url"


export const drones = [
  {
    id: "raven-x1",
    serial: "UAV-RX1-048",
    name: "Raven X1 Recon",
    use: "Long-range surveillance",
    image: d1_1,
    gallery: [d2_1, d3_1, d4_1, d5_1],
    model: model1,
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
    image: d1_2,
    gallery: [d2_2, d3_2, d4_2, d5_2],
    model: model2,
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
    image: d1_3,
    gallery: [d2_3, d3_3, d4_3, d5_3],
    model: model3,
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

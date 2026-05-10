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

import d1_4 from "../assets/d4/4.png"
import d2_4 from "../assets/d4/4.1.png"
import d3_4 from "../assets/d4/4.2.png"
import d4_4 from "../assets/d4/4.3.png"
import d5_4 from "../assets/d4/4.4.png"
import d6_4 from "../assets/d4/4.5.png"
import model4 from "../assets/d4/04.glb?url"

import d1_5 from "../assets/d5/5.png"
import d2_5 from "../assets/d5/5.1.png"
import d3_5 from "../assets/d5/5.2.png"
import d4_5 from "../assets/d5/5.3.png"
import d5_5 from "../assets/d5/5.4.png"
import d6_5 from "../assets/d5/5.5.png"
import model5 from "../assets/d5/05.glb?url"

// gallery
import g1 from "../assets/gallary/gallery1.jpg";
import g2 from "../assets/gallary/gallery2.jpg";
import g3 from "../assets/gallary/gallery3.jpg";
import g4 from "../assets/gallary/gallery4.jpg";
import g5 from "../assets/gallary/gallery5.jpg";
import g6 from "../assets/gallary/1.png";
import g7 from "../assets/gallary/2.png";
import g8 from "../assets/gallary/3.png";
import g9 from "../assets/gallary/4.png";
import g10 from "../assets/gallary/5.png";
import g11 from "../assets/gallary/6.png";
import g12 from "../assets/gallary/7.png";
import g13 from "../assets/gallary/8.png";
import g14 from "../assets/gallary/9.png";



export const drones = [
  {
    id: "raven-x1",
    serial: "UAV-RX1-048",
    name: "Tinywoop",
    use: "Use for Training and surveillance.",
    image: d1_1,
    gallery: [d2_1, d3_1, d4_1, d5_1],
    model: model1,
    specs: [
      ["Endurance", "12 min"],
      ["Range", "1.5 km"],
      ["Camera", "Moon Light Day 1080p"],
      ["Size", "2.5 inches FPV"],
      ["Max Altitude", "500 m"],
      ["Wind Resist", "12 m/s"],
    ],
    missions: ["Training", "Border surveillance"],
  },

  {
    id: "falcon-m4",
    serial: "UAV-FM4-112",
    name: "ARC MT 280",
    use: "Lightweight surveillance drone optimized for rapid deployment and stable observation.",
    image: d1_2,
    gallery: [d5_2, d3_2, d4_2, d2_2],
    model: model2,
    specs: [
      ["Endurance", "20 min"],
      ["Sensor", "Surveillance 2K camera"],
      ["Payload", "Payload dropping Mechanism"],
      ["Frame", "Carbon Fiber"],
      ["Weight", "1.5 kg"],
      ["Range", "2 km"],
    ],
    missions: ["Training", "Surveillance", "Payload Delivery"],
  },

  {
    id: "atlas-hl",
    serial: "UAV-AHL-301",
    name: "Shadow Drop 10",
    use: "For EW Environment , Antijam Surveillance and Grenade Drop",
    image: d1_3,
    gallery: [d4_3, d3_3, d5_3, d2_3],
    model: model3,
    specs: [
      ["Payload", "800 g"],
      ["Battery", "20 min"],
      ["MTOW", "2 kg"],
      ["Speed", "100 km/h"],
      ["Size", "10 inch FPV"],
      ["Range", "5 km"],
    ],
    missions: ["EW Environment", "KamiKaze", "Surveillance"],
  },

  {
    id: "viper-a7",
    serial: "UAV-VA7-207",
    name: "Beetle 5",
    use: "Training and Surveillance.",
    image: d1_4,
    gallery: [d2_4, d3_4, d4_4, d5_4, d6_4],
    model: model4,
    specs: [
      ["Size", "5 inch FPV"],
      ["Weight", "750 g"],
      ["Speed", "100 km/h"],
      ["Category", "Analog/ Digital"],
      ["Endurance", "15 min"],
      ["Range", "5 km"],
    ],
    missions: ["Training and Surveillance"],
  },

  {
    id: "storm-e5",
    serial: "UAV-SE5-509",
    name: "ARC MT 480AI",
    use: "AI Tactical Multirotor UAV designed for ISR missions with modular payload capability.",
    image: d6_5,
    gallery: [d6_5, d1_5, d3_5, d2_5, d4_5, d5_5,],
    model: model5,
    specs: [
      ["Speed", "108 km/h"],
      ["Flight Mode", "Autonomous AI"],
      ["Camera", "Day / Night 2K Thermal"],
      ["Altitude", "15000 ft"],
      ["Endurance", "40 min"],
      ["Range", "15 km"],
    ],
    missions: [
      "Combat surveillance",
      "Rapid response",
      "High-speed recon",
      "Survey & Mapping",
      "AI Target Tracking"
    ],
  },
];

export const gallery = [
  { src: g2, caption: "Industrial Inspection - Refinery 04" },
  { src: g3, caption: "Desert Surveillance - Grid 19N" },
  { src: g5, caption: "Pad Standby - Forward Operating Base" },
  { src: g4, caption: "Command Operations - TOC Alpha" },
  { src: g1, caption: "Mountain Recon — Sector 7-A" },

  { src: g6, caption: "Night Patrol — Border Zone Echo" },
  { src: g7, caption: "Aerial Mapping — Canyon Ridge" },
  { src: g8, caption: "Rapid Deployment — Hangar Delta" },
  { src: g9, caption: "Tactical Sweep — Urban Sector 12" },
  { src: g10, caption: "Drone Calibration — Control Bay 3" },
  { src: g11, caption: "Perimeter Watch — Outpost Sigma" },
  { src: g12, caption: "Thermal Scan — Northern Corridor" },
  { src: g13, caption: "Fleet Coordination — Mission Control" },
  { src: g14, caption: "High Altitude Recon — Arctic Pass" },
];

// export const droneParts = [
//   {
//     id: "prop-cf-01",
//     name: "Carbon Fiber Propeller",
//     category: "Propulsion",
//     image: propellerImg,
//     price: "$89.00",
//     specs: [
//       ["Material", "High-Modulus CF"],
//       ["Diameter", "14 inches"],
//       ["Pitch", "4.8 inches"],
//       ["Weight", "24g"],
//     ],
//   },
//   {
//     id: "motor-bl-02",
//     name: "Brushless Motor T-80",
//     category: "Propulsion",
//     image: motorImg,
//     price: "$145.00",
//     specs: [
//       ["KV Rating", "1200 KV"],
//       ["Max Thrust", "2.4 kg"],
//       ["Voltage", "4S - 6S"],
//       ["Efficiency", "92%"],
//     ],
//   },
//   {
//     id: "batt-tx-03",
//     name: "Tactical Battery Pack",
//     category: "Power System",
//     image: batteryImg,
//     price: "$210.00",
//     specs: [
//       ["Capacity", "6500 mAh"],
//       ["Voltage", "22.2V (6S)"],
//       ["Discharge", "100C"],
//       ["Cycles", "500+"],
//     ],
//   },
// ];

export const droneParts = [
  {
    "id": "motor-12189",
    "name": "Hobbywing X8 G2 Motor with 30x11S Folding Propeller",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2026/03/Screenshot_16-10-2025_123113_www.hobbywing.com_-1-300x300.webp",
    "originalPrice": "₹17,500.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X8 G2"],
      ["Propeller Size", "30x11S"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "nozzle-10221",
    "name": "Aerosol Nozzle Max – Model 8820 For Agriculture Drones by Arcanum Space",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/08/1-2.png",
    "originalPrice": "₹10,200.00",
    "specs": [
      ["Type", "Aerosol Nozzle"],
      ["Model", "8820 Max"],
      ["Brand", "Arcanum Space"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "nozzle-10218",
    "name": "Folding Aerosol Nozzle – Model 4820 For Agriculture Drones by Arcanum Space",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/08/4820.png",
    "specs": [
      ["Type", "Folding Aerosol Nozzle"],
      ["Model", "4820"],
      ["Brand", "Arcanum Space"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "nozzle-10210",
    "name": "Folding Aerosol Nozzle Pro – Model 5820 For Agriculture Drones by Arcanum Space",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/08/1-1.png",
    "specs": [
      ["Type", "Folding Aerosol Nozzle Pro"],
      ["Model", "5820"],
      ["Brand", "Arcanum Space"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "nozzle-10186",
    "name": "Aerosol Nozzle – Model 4810 For Agriculture Drones by Arcanum Space",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/08/1.png",
    "originalPrice": "₹8,999.00",
    "specs": [
      ["Type", "Aerosol Nozzle"],
      ["Model", "4810"],
      ["Brand", "Arcanum Space"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-9740",
    "name": "Hobbywing X11 Plus 4314 Propellers Only with Hub – CW for Agriculture Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/07/5.png",
    "originalPrice": "₹6,800.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X11 Plus 4314"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-9733",
    "name": "Hobbywing X11 Plus 4314 Propellers Only with Hub – CCW for Agriculture Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/07/1.png",
    "originalPrice": "₹7,200.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X11 Plus 4314"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "nozzle-9536",
    "name": "Hobbywing 9L Centrifugal Nozzle Spray for UAV Drones at Best Price",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/07/hobbywing-9L.png",
    "originalPrice": "₹10,200.00",
    "specs": [
      ["Type", "Centrifugal Nozzle Spray"],
      ["Capacity", "9L"],
      ["Brand", "Hobbywing"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-9455",
    "name": "Hobbywing X11 Plus CCW Motor Combo with 4314 Propellers Combo for Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/06/hobbywing-x11-plus.png",
    "originalPrice": "₹32,999.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X11 Plus 4314"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-9420",
    "name": "Hobbywing X11 Plus CW Motor Combo with 4314 Propellers Combo for Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/06/hobbywing-x11-plus.png",
    "originalPrice": "₹32,999.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X11 Plus 4314"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-8495",
    "name": "Hobbywing X9 Plus 36190 Propellers Only with Hub – CW for Agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/04/1.png",
    "originalPrice": "₹5,200.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X9 Plus 36190"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-8491",
    "name": "Hobbywing X9 Plus 36190 Propellers Only with Hub – CCW for Agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/04/1.png",
    "originalPrice": "₹5,200.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X9 Plus 36190"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-8453",
    "name": "Hobbywing X9 3411 Propellers Only with Hub – CCW for Agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/03/1.png",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X9 3411"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-8448",
    "name": "Hobbywing X9 3411 Propellers Only with Hub – CW for Agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/03/1.png",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X9 3411"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-8445",
    "name": "Hobbywing X9 Plus X Rotor Motor with CCW Propeller Combo For Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/12/x9-plus.png",
    "originalPrice": "₹21,700.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X9 Plus X Rotor"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-8435",
    "name": "Hobbywing X8 100KV D40 Motor with 3011 CW Propeller Combo",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/X8桨叶.jpg",
    "originalPrice": "₹17,498.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X8 100KV D40"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-8434",
    "name": "Hobbywing X6 Plus 150KV D30 Motor with 2480 CCW Propeller Combo",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/X6-PLUS-6218-150K-1.jpg",
    "originalPrice": "₹10,700.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X6 Plus 150KV D30"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "pump-7991",
    "name": "Hobbywing Brushless Water Pump Combo – Pump 8L | Brushless 10A 14S V1 HW",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/02/hobbywing-8l.png",
    "originalPrice": "₹12,999.00",
    "specs": [
      ["Type", "Brushless Water Pump Combo"],
      ["Capacity", "8L"],
      ["Specs", "Brushless 10A 14S V1"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-7673",
    "name": "Hobbywing X8 3011 Propellers Only with Hub – CW for Agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1-2.png",
    "originalPrice": "₹2,800.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X8 3011"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-7671",
    "name": "Hobbywing XRotor X8 Motor Only- CW Agriculture Drones Components",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1-6.png",
    "originalPrice": "₹17,800.00",
    "specs": [
      ["Type", "Motor Only"],
      ["Model", "XRotor X8"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-7670",
    "name": "Hobbywing XRotor X6 Plus Motor Only- CW for Agriculture Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/4-2.png",
    "originalPrice": "₹9,900.00",
    "specs": [
      ["Type", "Motor Only"],
      ["Model", "XRotor X6 Plus"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-7661",
    "name": "Hobbywing X6 plus 2480 Propellers Only with Hub – CW for Agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1-3.png",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X6 Plus 2480"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-6768",
    "name": "Hobbywing X9 Plus X Rotor Motor with CW Propeller Combo For Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/12/x9-plus.png",
    "originalPrice": "₹21,700.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X9 Plus X Rotor"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-6733",
    "name": "Hobbywing XRotor X8 Motor Only- CCW Agriculture Drones Components",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1-6.png",
    "originalPrice": "₹17,800.00",
    "specs": [
      ["Type", "Motor Only"],
      ["Model", "XRotor X8"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-6727",
    "name": "Hobbywing XRotor X6 Plus Motor Only- CCW for Agriculture Drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1615376-02-300x300.jpg",
    "originalPrice": "₹10,700.00",
    "specs": [
      ["Type", "Motor Only"],
      ["Model", "XRotor X6 Plus"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-6722",
    "name": "Hobbywing X6 plus 2480 Propellers Only with Hub – CCW for drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1-3.png",   
    "originalPrice": "₹2,200.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X6 Plus 2480"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "prop-6718",
    "name": "Hobbywing X8 3011 Propellers Only with Hub – CCW for agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/1-2.png",
    "originalPrice": "₹2,800.00",
    "specs": [
      ["Type", "Propellers Only with Hub"],
      ["Model", "X8 3011"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-2204",
    "name": "T Motor A6 Modular Agriculture Propulsion System for agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/A6.jpg",
    "specs": [
      ["Type", "Modular Propulsion System"],
      ["Model", "A6"],
      ["Brand", "T Motor"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-2201",
    "name": "T Motor A8 Modular Agriculture Propulsion System for agriculture drones",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/A82.jpg",
    "specs": [
      ["Type", "Modular Propulsion System"],
      ["Model", "A8"],
      ["Brand", "T Motor"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-1410",
    "name": "Hobbywing X8 100KV D40 Motor with 3011 CCW Propeller Combo",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/X8桨叶.jpg",
    "originalPrice": "₹17,498.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X8 100KV D40"],
      ["Rotation", "CCW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "motor-1404",
    "name": "Hobbywing X6 Plus 150KV D30 Motor with 2480 CW Propeller Combo",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/X6-PLUS-6218-150K-1.jpg",
    "originalPrice": "₹10,700.00",
    "specs": [
      ["Type", "Motor + Propeller Combo"],
      ["Model", "X6 Plus 150KV D30"],
      ["Rotation", "CW"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "pump-1380",
    "name": "Hobbywing Water Pump 5L Brushless – Agriculture Drones Components",
    "category": "Propulsion",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/5L-水泵.jpg",
    "originalPrice": "₹7,218.00",
    "specs": [
      ["Type", "Brushless Water Pump"],
      ["Capacity", "5L"],
      ["Brand", "Hobbywing"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "battery-8070",
    "name": "Herewin 12S 44.4V 16000mAh Smart-5P LiPo Battery Pack for Drones Battery",
    "category": "Battery & Charger",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/02/20230203-BIA_3765-300x300.jpg",
    "specs": [
      ["Type", "LiPo Battery Pack"],
      ["Cells", "12S 44.4V"],
      ["Capacity", "16000mAh"],
      ["Smart", "5P"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "battery-8064",
    "name": "Herewin 6S 22.2V 16000mAh 20C LiPo Battery Pack for Drones Batteries",
    "category": "Battery & Charger",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/02/Herewin-16000-battery-300x300.jpg",
    "originalPrice": "₹16,999.00",
    "specs": [
      ["Type", "LiPo Battery Pack"],
      ["Cells", "6S 22.2V"],
      ["Capacity", "16000mAh"],
      ["Discharge", "20C"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "battery-8053",
    "name": "Herewin 6S 22.2V 22000mAh 25C Lipo Battery for Agriculture Drone Batteries",
    "category": "Battery & Charger",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/02/9-300x300.jpg",
    "originalPrice": "₹25,700.00",
    "specs": [
      ["Type", "LiPo Battery Pack"],
      ["Cells", "6S 22.2V"],
      ["Capacity", "22000mAh"],
      ["Discharge", "25C"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "charger-8048",
    "name": "Tattu TA1000 G-Tech Dual-Channel Charger 25A*2 1000W For 1S-7S Drone Battery",
    "category": "Battery & Charger",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/02/3.png",
    "specs": [
      ["Type", "Dual-Channel Charger"],
      ["Power", "1000W"],
      ["Current", "25A*2"],
      ["Compatibility", "1S-7S"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "charger-7373",
    "name": "SKYRC PC1080 Dual Channel Charger for Agriculture Drone Batteries",
    "category": "Battery & Charger",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/12/SKYRC-PC1080-Dual-Channel-LiPo-Battery-Charger-5-300x300.jpg",
    "originalPrice": "₹28,700.00",
    "specs": [
      ["Type", "Dual Channel Charger"],
      ["Model", "PC1080"],
      ["Brand", "SKYRC"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "battery-1362",
    "name": "Tattu 22.2V 25C 6S 22000mAh GTech Lipo Battery for Agriculture Drones",
    "category": "Battery & Charger",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/5-1.png",
    "originalPrice": "₹22,298.00",
    "specs": [
      ["Type", "GTech LiPo Battery"],
      ["Cells", "6S 22.2V"],
      ["Capacity", "22000mAh"],
      ["Discharge", "25C"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "fc-8025",
    "name": "Jiyi K-3A Pro Flight Controller Kit for Agriculture Drones at Best Price",
    "category": "Flight Controller & Radar",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/02/jiyi-k-3apro.png",
    "originalPrice": "₹37,200.00",
    "specs": [
      ["Type", "Flight Controller Kit"],
      ["Model", "K-3A Pro"],
      ["Brand", "Jiyi"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "radar-7653",
    "name": "Jiyi Obstacle Avoidance Radar Back (UAV-R21-B) Rear Radar for Agriculture drones",
    "category": "Flight Controller & Radar",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/1-4.png",
    "originalPrice": "₹18,698.00",
    "specs": [
      ["Type", "Obstacle Avoidance Radar"],
      ["Position", "Rear (Back)"],
      ["Model", "UAV-R21-B"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "radar-2254",
    "name": "Jiyi Obstacle Avoidance Radar Front (UAV-R21-F) Forward Radar for Agriculture drones",
    "category": "Flight Controller & Radar",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/1-4.png",
    "originalPrice": "₹18,698.00",
    "specs": [
      ["Type", "Obstacle Avoidance Radar"],
      ["Position", "Front (Forward)"],
      ["Model", "UAV-R21-F"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "radar-2245",
    "name": "Jiyi Terrain Simulating following Radar – Agriculture Drones Components",
    "category": "Flight Controller & Radar",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/5-4.png",
    "originalPrice": "₹18,698.00",
    "specs": [
      ["Type", "Terrain Following Radar"],
      ["Function", "Simulating"],
      ["Brand", "Jiyi"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "fc-2243",
    "name": "VK V9 Flight Controller with GPS Flight Control System for Agriculture Drones",
    "category": "Flight Controller & Radar",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/v9-300x300.jpg",
    "specs": [
      ["Type", "Flight Controller"],
      ["Model", "V9"],
      ["Features", "GPS Flight Control"],
      ["Brand", "VK"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "fc-2228",
    "name": "Jiyi K++V2 Flight Controller for Agriculture Drone Kit with GPS, Remote LED and PSU Original",
    "category": "Flight Controller & Radar",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/07/Kv2-2.jpg",
    "originalPrice": "₹35,700.00",
    "specs": [
      ["Type", "Flight Controller Kit"],
      ["Model", "K++V2"],
      ["Includes", "GPS, Remote LED, PSU"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-10561",
    "name": "Skydroid G12 Remote Controller for Agriculture Drones",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/09/skydroid-g12-remote-controller-with-24ghz-58ghz-1-300x300.webp",
    "originalPrice": "₹42,000.00",
    "specs": [
      ["Type", "Remote Controller"],
      ["Model", "G12"],
      ["Brand", "Skydroid"],
      ["Frequency", "2.4GHz / 5.8GHz"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-9344",
    "name": "SIYI MK15E Mini HD Handheld Agriculture Smart Controller Long Range FPV Combo",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/06/1.png",
    "originalPrice": "₹63,907.00",
    "specs": [
      ["Type", "Smart Controller Combo"],
      ["Model", "MK15E Mini HD"],
      ["Features", "Long Range FPV"],
      ["Brand", "SIYI"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-8550",
    "name": "Skydroid T12 Remote Controller without camera- Long Range Drone Transmitter",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/04/skydroid-t12-.png",
    "originalPrice": "₹18,790.00",
    "specs": [
      ["Type", "Remote Controller"],
      ["Model", "T12"],
      ["Camera", "Without"],
      ["Brand", "Skydroid"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-8541",
    "name": "Skydroid H12 Transmitter Remote Controller for Agriculture Drones",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/04/Skydroid-H12-Transmitter-Remote-Controller-for-Agriculture-Drones.png",
    "originalPrice": "₹31,900.00",
    "specs": [
      ["Type", "Transmitter Remote Controller"],
      ["Model", "H12"],
      ["Brand", "Skydroid"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-7558",
    "name": "Siyi UniRC 7 Pro New Era Handheld Ground Station for agriculture drones",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/siyi-uni-7-1.png",
    "originalPrice": "₹99,699.00",
    "specs": [
      ["Type", "Handheld Ground Station"],
      ["Model", "UniRC 7 Pro"],
      ["Brand", "Siyi"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-6702",
    "name": "Siyi UniRC 7 New Era Handheld Ground Station for agriculture drones",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/11/uni-rc-7-3.png",
    "originalPrice": "₹78,699.00",
    "specs": [
      ["Type", "Handheld Ground Station"],
      ["Model", "UniRC 7"],
      ["Brand", "Siyi"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-1453",
    "name": "Skydroid T12 Agriculture Transmitter RC with R12 Receiver & Camera (Combo)",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/T-12.jpg",
    "originalPrice": "₹21,298.00",
    "specs": [
      ["Type", "Transmitter RC Combo"],
      ["Model", "T12"],
      ["Includes", "R12 Receiver & Camera"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-1437",
    "name": "Siyi MK15 Mini HD Handheld Transmitter FPV RC Controller Combo for Agri Drone",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/MK15-AG-1-1.jpg",
    "originalPrice": "₹42,100.00",
    "specs": [
      ["Type", "Handheld Transmitter Combo"],
      ["Model", "MK15 Mini HD"],
      ["Features", "FPV RC Controller"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "rc-1425",
    "name": "Siyi MK 32 Agriculture Handheld Ground Station Smart Transmitter And RC Controller",
    "category": "Remote Controller",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/MK32-1-1.jpg",
    "originalPrice": "₹56,300.00",
    "specs": [
      ["Type", "Ground Station Smart Transmitter"],
      ["Model", "MK 32"],
      ["Brand", "Siyi"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "payload-8515",
    "name": "SIYI MK15 IP67 FPV Camera \"A\" Waterproof for Agriculture Drones",
    "category": "Payload & Camera",
    "image": "https://bharatskytech.com/wp-content/uploads/2025/04/SIYI-MK15-IP67-FPV-Camera-A.png",
    "originalPrice": "₹6,500.00",
    "specs": [
      ["Type", "FPV Camera"],
      ["Model", "MK15 IP67 \"A\""],
      ["Rating", "IP67 Waterproof"],
      ["Brand", "SIYI"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "payload-1270",
    "name": "SIYI AI Tracking Module 4T Computing Power Human Vehicle for ag drones",
    "category": "Payload & Camera",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/SIYI-AI-Tracking-Gen-2-2.jpg",
    "originalPrice": "₹40,699.00",
    "specs": [
      ["Type", "AI Tracking Module"],
      ["Computing Power", "4T"],
      ["Detection", "Human & Vehicle"],
      ["Brand", "SIYI"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "payload-1257",
    "name": "SIYI A8 mini 4K 8MP Ultra HD 6X Digital Zoom Gimbal Camera for Ag Drones",
    "category": "Payload & Camera",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/06/A8-mini-1_1.jpg",
    "originalPrice": "₹26,498.00",
    "specs": [
      ["Type", "Gimbal Camera"],
      ["Model", "A8 mini"],
      ["Resolution", "4K 8MP Ultra HD"],
      ["Zoom", "6X Digital"],
      ["GST", "Exclusive"]
    ]
  },
  {
    "id": "payload-225",
    "name": "SIYI A2 mini Ultra Wide Angle FPV Gimbal Single Axis Camera Sensor for Ag Drones",
    "category": "Payload & Camera",
    "image": "https://bharatskytech.com/wp-content/uploads/2024/05/1-4.jpg",
    "originalPrice": "₹11,298.00",
    "specs": [
      ["Type", "Single Axis Gimbal Camera"],
      ["Model", "A2 mini"],
      ["Lens", "Ultra Wide Angle FPV"],
      ["Brand", "SIYI"],
      ["GST", "Exclusive"]
    ]
  }
];

export const insideKits = [
  {
    id: "kit-dot-01",
    name: "Drone on Table (DOT) – The Ultimate Real-World Drone Training & Testing Platform",
    category: "UAV Training",
    image:
      "https://www.dronacharyatech.com/wp-content/uploads/2026/03/Camera-Kit-3-in-1-camera-T12-1-324x324.jpg",
    price: "Get a Quote",
    specs: [
      ["Type", "Drone Training Platform"],
      ["Use Case", "Real-World Drone Testing"],
      ["Category", "UAV Learning"],
      ["Availability", "Quote Based"],
    ]
  },

  {
    id: "kit-vikas-project-01",
    name: "Vikas Project Kit – All in one UAV Development & Learning Platform",
    category: "Development Kit",
    image:
      "https://www.dronacharyatech.com/wp-content/uploads/2026/01/Vikas-project-Kit-1-324x324.webp",
    price: "₹69,000",
    oldPrice: "₹70,000",
    specs: [
      ["Type", "UAV Development Kit"],
      ["Learning", "Advanced UAV Projects"],
      ["Platform", "All-in-One"],
    ]
  },

  {
    id: "kit-vikas-rd-01",
    name: "Vikas R&D Kit – Complete UAV Research & Learning Platform",
    category: "Research Kit",
    image:
      "https://www.dronacharyatech.com/wp-content/uploads/2025/03/Vikas-RD-Kit-1-324x324.webp",
    price: "₹49,000",
    oldPrice: "₹55,000",
    specs: [
      ["Type", "Research & Development Kit"],
      ["Purpose", "UAV Research"],
      ["Learning", "Drone Innovation"],
    ]
  },

  {
    id: "kit-vikas-camera-01",
    name: "Vikas Camera Kit – Advanced UAV Imaging & Research Platform",
    category: "Camera Kit",
    image:
      "https://www.dronacharyatech.com/wp-content/uploads/2025/03/Camera-Kit-A8-Mini-H12-Pro-1-324x324.jpg",
    price: "₹50k onwards",
    specs: [
      ["Type", "UAV Imaging Kit"],
      ["Feature", "Advanced Camera Support"],
      ["Use Case", "Aerial Imaging & Research"],
    ]
  },

  {
    id: "kit-vikas-starter-01",
    name: "Vikas Starter Kit : Complete UAV Foundation for Learning & Innovation",
    category: "Starter Kit",
    image:
      "https://www.dronacharyatech.com/wp-content/uploads/2026/03/Vikas-Starter-Kit-1-1-324x324.webp",
    price: "₹19,320",
    oldPrice: "₹23,000",
    specs: [
      ["Type", "Beginner UAV Kit"],
      ["Purpose", "Learning & Innovation"],
      ["Foundation", "Complete UAV Basics"],
    ]
  },
];

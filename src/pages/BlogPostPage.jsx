import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import b1 from "../assets/blog/b1.png";
import b2 from "../assets/blog/b2.png";
import b3 from "../assets/blog/b3.png";
import b4 from "../assets/blog/b4.png";
import b5 from "../assets/blog/b5.png";



import { FloatUpText } from "../components/animations/Antigravity";

const posts = [
  {
    slug: "make-in-india-uav-ecosystem",
    tag: "Industry Intel",
    date: "05 May 2026",
    title: "The Strategic Shift: Why 'Make in India' UAV Ecosystems Are Non-Negotiable",
    desc: "Analyzing the critical need for localized drone manufacturing and R&D labs to reduce foreign dependency in defense procurement.",
    image: b1,
    content: `
      <p>Modern warfare is defined by rapid technological turnover and unpredictable supply chain disruptions. For decades, defense forces relied heavily on imported UAV systems to fulfill their intelligence and tactical needs. However, relying on foreign OEMs (Original Equipment Manufacturers) creates a critical vulnerability: strategic dependency. The 'Make in India' initiative in the drone sector is no longer just an economic booster; it is a vital national security imperative.</p>

      <h3>The Supply Chain Vulnerability</h3>
      <p>When a defense force procures a foreign drone, it inevitably becomes dependent on foreign spare parts, proprietary foreign software, and external maintenance protocols. In a prolonged combat scenario or during sudden geopolitical tensions, a grounded fleet due to a missing circuit board is a lost battle. Indigenous manufacturing eliminates this single point of failure, ensuring that the fleet remains airborne regardless of international trade dynamics.</p>

      <h3>The Role of Private Drone R&D Labs</h3>
      <p>True defense readiness requires much more than mere assembly lines; it demands localized Research & Development. Dedicated UAV labs allow for rapid prototyping and immediate iteration based on direct, real-time feedback from field operators. If a specific payload configuration is urgently needed for a unique high-altitude terrain, an indigenous lab can engineer, test, and deploy the modification in a fraction of the time required by international vendors. This agility is impossible to outsource.</p>

      <h3>Building Intellectual Property</h3>
      <p>By investing in local UAV ecosystems, nations are not just building drones; they are building intellectual property. Every line of flight code written, every carbon-fiber mold designed, and every thermal sensor integrated adds to a localized knowledge base. This IP generation ensures that the next generation of UAVs will be inherently superior and tailor-made for specific geographical and operational realities.</p>

      <h3>Conclusion</h3>
      <p>An indigenous UAV ecosystem guarantees that the military gets exactly what it needs, precisely when it needs it. By shifting from consumers of foreign technology to creators of localized defense systems, a nation transforms its military infrastructure from being dependent to truly resilient and self-reliant.</p>
    `,
  },
  {
    slug: "electronic-warfare-ew-uav-survival",
    tag: "Tech Analysis",
    date: "01 May 2026",
    title: "Operating in the Gray Zone: Electronic Warfare and UAV Survival",
    desc: "How modern combat zones are saturated with jamming signals, and why anti-jam protocols are the true test of a tactical drone.",
    image: b2,
    content: `
      <p>The modern battlefield is largely invisible yet highly lethal. Electronic Warfare (EW) has evolved exponentially, to the point where simply flying a standard drone over a contested area is practically an invitation to have it neutralized. Understanding the electromagnetic spectrum is no longer an optional skill for UAV operators and manufacturers—it is the primary theater of modern combat.</p>

      <h3>The Jamming Reality</h3>
      <p>Adversaries now employ advanced, multi-directional signal jamming to sever the command and control (C2) link between the pilot and the UAV. When a drone loses its telemetry link, it generally defaults to one of three states: it falls out of the sky, it initiates a 'Return to Home' protocol (yielding zero intelligence and wasting a sortie), or worse, it gets spoofed—hijacked and guided into friendly positions or sensitive infrastructure.</p>

      <h3>Engineering for the EM Spectrum</h3>
      <p>Surviving in an EW-saturated environment requires hardware and software designed from the ground up to resist interference. Off-the-shelf commercial systems fail immediately under such stress. True tactical UAVs utilize Frequency-Hopping Spread Spectrum (FHSS) technologies, switching frequencies hundreds of times per second to avoid targeted jamming. Furthermore, autonomous failsafe logic must be integrated—if signal degradation hits a critical threshold, the drone must be capable of autonomously completing its pre-programmed mission waypoints using onboard inertial navigation rather than just freezing in place.</p>

      <h3>Beyond Anti-Jam: Low Observability</h3>
      <p>Surviving EW isn't just about resisting jamming; it's about not being detected in the first place. Modern tactical drones must employ Low-Probability-of-Intercept (LPI) communication protocols. Instead of continuously shouting its telemetry data loudly across the spectrum, the drone transmits in micro-bursts, making it nearly impossible for enemy signal intelligence (SIGINT) units to geolocate the operator's position.</p>

      <h3>Conclusion</h3>
      <p>A drone's top speed, camera resolution, or payload capacity means absolutely nothing if it cannot maintain a stable link in a contested electromagnetic environment. The ultimate metric of a tactical UAV’s capability is its Electronic Counter-Countermeasure (ECCM) resilience.</p>
    `,
  },
  {
    slug: "ai-target-tracking-isr-missions",
    tag: "AI ISR",
    date: "28 Apr 2026",
    title: "Beyond Human Limits: Autonomous AI in Combat ISR",
    desc: "Exploring how artificial intelligence is transforming Intelligence, Surveillance, and Reconnaissance from manual piloting to autonomous tracking.",
    image: b5,
    content: `
      <p>Traditional Intelligence, Surveillance, and Reconnaissance (ISR) missions rely heavily on the cognitive endurance of the drone operator. Manually flying a multirotor for hours while simultaneously adjusting camera gimbals and scanning a dense grid for hostile targets is physically exhausting and highly prone to human error. Artificial Intelligence fundamentally shifts this paradigm, turning the UAV from a flying camera into an autonomous data-gathering node.</p>

      <h3>From Pilot to Tactical Supervisor</h3>
      <p>With AI-integrated flight systems, the operator’s role transitions from micro-managing flight sticks to managing the macro-level mission. The UAV autonomously handles navigation to complex waypoints, maintains altitude profiles to avoid visual detection, and optimizes its flight path for maximum battery efficiency. This allows the human operator to dedicate 100% of their cognitive bandwidth to analyzing the sensor feed and making tactical decisions.</p>

      <h3>Dynamic Target Tracking</h3>
      <p>The most significant tactical advantage of edge-AI is dynamic target tracking. Machine learning algorithms, running directly on the drone's onboard computer, analyze the live video feed to differentiate between a civilian vehicle and a hostile asset based on shape, speed, and thermal signature. Once a target is designated by the operator, the AI autonomously tracks its movement, predicting paths and keeping the subject centered in the frame, even if the target attempts to break line-of-sight by entering treelines or urban canyons.</p>

      <h3>Edge Computing and Latency</h3>
      <p>For AI to be useful in combat, it cannot rely on cloud processing. Sending video feeds to a server miles away introduces lethal latency. Modern tactical UAVs process all AI algorithms via 'Edge Computing'—the computing happens directly on the drone. This ensures zero-latency response times, meaning the drone reacts to a moving target instantaneously, without waiting for a server ping.</p>

      <h3>Conclusion</h3>
      <p>AI in UAVs aggressively compresses the OODA loop (Observe, Orient, Decide, Act). By automating the mechanical aspects of flight and observation, AI-enabled drones provide field commanders with actionable, real-time intelligence faster and more accurately than any human-operated system could ever achieve.</p>
    `,
  },
  {
    slug: "fpv-pilot-training-doctrine",
    tag: "Training Doctrine",
    date: "22 Apr 2026",
    title: "Building the Operator: Why FPV Training Doctrines Define Mission Success",
    desc: "Why advanced hardware is useless without rigorous, structured FPV pilot training protocols for frontline deployment.",
    image: b4,
    content: `
      <p>A common and often fatal misconception in defense procurement is the belief that purchasing advanced, high-speed drones automatically equates to possessing advanced tactical capability. In reality, a highly sophisticated UAV placed in the hands of an untrained operator is a massive liability—not an asset. The hardware is only as effective as the human holding the controller.</p>

      <h3>The Muscle Memory Factor</h3>
      <p>First-Person View (FPV) flying is entirely counter-intuitive to the human brain. When looking through a pair of goggles, the operator's spatial awareness is completely disoriented compared to line-of-sight flying. Yaw, pitch, and roll inputs do not correlate naturally to the operator's physical position. Building the muscle memory required to execute aggressive maneuvers requires hundreds of hours of structured, repetitive practice under varying conditions.</p>

      <h3>A Phased Training Doctrine</h3>
      <p>Effective military training doctrines do not hand a $20,000 tactical drone to a rookie. They utilize a phased approach. Phase one utilizes micro-drones (e.g., 2.5-inch platforms) in controlled, indoor environments. This allows operators to crash, learn, and rebuild basic motor skills without the financial risk of destroying expensive tactical assets. Phase two graduates operators to 5-inch platforms to learn high-speed maneuvering, wind penetration, and acrobatic evasion techniques. Only in phase three do they transition to heavy-lift, mission-specific systems.</p>

      <h3>Stress Inoculation</h3>
      <p>Flying in a simulator or a peaceful field does not prepare a pilot for combat. A proper doctrine includes stress inoculation—simulating ground fire, simulating loss of video feed (blue screens), and forcing pilots to navigate back to base using only auditory telemetry. This conditions the operator's nervous system to remain calm and execute procedures under actual hostile conditions.</p>

      <h3>Conclusion</h3>
      <p>Investment in UAV technology must always be matched by an equal investment in human capital. A structured, tiered FPV training doctrine ensures that when a critical strike or recon mission arises, the operator’s skills are as predictable and reliable as the drone's motors.</p>
    `,
  },
  {
    slug: "last-mile-uav-logistics-supply",
    tag: "Field Logistics",
    date: "16 Apr 2026",
    title: "Last-Mile Resupply: Utilizing UAVs for Forward Deployment Logistics",
    desc: "How payload-dropping multirotors are solving the 'last mile' problem in combat zones where traditional supply lines are compromised.",
    image: b3,
    content: `
      <p>Historically, one of the most dangerous and casualty-intensive tasks in a combat zone is the "last mile" of logistics—getting critical supplies from a forward operating base to troops engaged on the front lines. Traditional logistics relying on convoys or dismounted soldiers are highly susceptible to ambushes, IEDs, and artillery fire. Multirotor UAVs are silently rewriting these tactical supply chains.</p>

      <h3>The Last-Mile Problem</h3>
      <p>Getting a truckload of ammunition to a regional base is a solved logistical problem. Getting a single box of medical supplies or fresh batteries to a specific trench or rooftop under direct enemy fire is an entirely different challenge. Manned vehicles are loud, slow, and constrained by terrain and destroyed infrastructure. Dismounted supply carries expose soldiers to sniper fire for extended periods.</p>

      <h3>Tactical Payload Delivery</h3>
      <p>Lightweight multirotors equipped with precision payload-dropping mechanisms solve this by bypassing ground threats entirely. A drone can carry essential payloads—ammunition, blood plasma, communication relays, or spare batteries—directly to a pinned-down squad. By flying above the threat canopy, the UAV removes the convoy from the danger zone entirely. Modern dropping mechanisms allow for precise delivery within a 2-meter radius, even in complex urban terrain or dense vegetation.</p>

      <h3>Reducing the Acoustic Signature</h3>
      <p>For last-mile resupply to be successful, it must not give away the receiving squad's position. Tactical logistics drones are engineered for low acoustic signatures. By utilizing specialized propeller profiles and optimized flight paths (avoiding sudden throttle changes), these UAVs can drop supplies and egress the area before the enemy can accurately triangulate their location or the location of the receiving troops.</p>

      <h3>Conclusion</h3>
      <p>UAV logistics are not about replacing heavy transport aircraft or armored supply trucks; they are about sustaining frontline troops when traditional routes are cut off or too dangerous. Integrating autonomous payload-drop capabilities into standard infantry UAV fleets is rapidly becoming a fundamental requirement for modern, agile combat operations.</p>
    `,
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 min-h-screen text-center px-6">
        <h1 className="font-display text-4xl text-tactical">
          Briefing Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The UAV briefing you are looking for does not exist.
        </p>

        <Link
          to="/blog"
          className="mt-6 inline-block label-mono text-tactical hover:underline"
        >
          &larr; Return to UAV Briefings
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <FloatUpText>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                to="/blog"
                className="label-mono text-[10px] text-tactical hover:underline"
              >
                UAV INTEL BRIEFINGS
              </Link>

              <span className="text-border">/</span>

              <span className="label-mono text-[10px] text-muted-foreground">
                {post.tag}
              </span>
            </div>

            <div className="mb-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 label-mono text-[10px] text-tactical">
                <span>{post.tag}</span>
                <span className="h-px w-4 bg-tactical" />
                <span>{post.date}</span>
              </div>
            </div>
          </FloatUpText>

          <div className="relative aspect-video bg-background overflow-hidden corner-frame border border-border mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
          </div>

          <FloatUpText>
            <div
              className="prose prose-invert max-w-none 
              font-body text-muted-foreground leading-relaxed
              [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4
              [&_p]:mb-4
              [&_strong]:text-foreground"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </FloatUpText>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="label-mono text-[10px] text-tactical hover:underline flex items-center gap-2"
            >
              <span>&larr;</span> BACK TO ALL BRIEFINGS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import d1_1 from "../assets/d1/1.1.png";
import d1_2 from "../assets/d2/2.png";
import d1_3 from "../assets/d3/3.png";
import d1_4 from "../assets/d4/4.png";
import d6_5 from "../assets/d5/5.5.png";

import { FloatUpText } from "../components/animations/Antigravity";

const posts = [
  {
    slug: "tinywoop-training-surveillance-uav",
    tag: "Training UAV",
    date: "05 May 2026",
    title: "Tinywoop: Compact FPV drone for training and close surveillance",
    desc: "A small 2.5-inch FPV platform designed for pilot training, indoor drills, and short-range surveillance workflows.",
    image: d1_1,
    content: `
      <p>The Tinywoop is a compact FPV drone built for training and close-range surveillance missions. Its small 2.5-inch frame makes it suitable for controlled pilot practice, obstacle navigation, indoor movement drills, and low-risk field familiarization.</p>

      <h3>Mission Role</h3>
      <p>With a 12-minute endurance and 1.5 km operating range, Tinywoop is ideal for short-duration training and localized observation. It gives operators a practical platform to build control confidence before moving to larger UAV systems.</p>

      <h3>System Highlights</h3>
      <p><strong>Endurance:</strong> 12 min<br/>
      <strong>Range:</strong> 1.5 km<br/>
      <strong>Camera:</strong> Moon Light Day 1080p<br/>
      <strong>Size:</strong> 2.5 inches FPV<br/>
      <strong>Max Altitude:</strong> 500 m<br/>
      <strong>Wind Resistance:</strong> 12 m/s</p>

      <h3>Best Use Cases</h3>
      <p>Tinywoop is best suited for training, border surveillance practice, indoor flight learning, and short-range mission simulation where agility and control matter more than heavy payload capacity.</p>
    `,
  },
  {
    slug: "arc-mt-280-rapid-surveillance-drone",
    tag: "Field Ops",
    date: "01 May 2026",
    title: "ARC MT 280: Lightweight surveillance drone for rapid deployment",
    desc: "A carbon-fiber UAV built for stable observation, training missions, and controlled payload delivery scenarios.",
    image: d1_2,
    content: `
      <p>The ARC MT 280 is a lightweight surveillance drone optimized for quick deployment and stable field observation. Its carbon-fiber frame keeps the platform strong while maintaining a manageable 1.5 kg weight profile.</p>

      <h3>Mission Role</h3>
      <p>This UAV is designed for training, surveillance, and controlled payload delivery workflows. With a 2K surveillance camera and 20-minute endurance, it offers a balanced setup for field teams that need portability and reliable visual coverage.</p>

      <h3>System Highlights</h3>
      <p><strong>Endurance:</strong> 20 min<br/>
      <strong>Sensor:</strong> Surveillance 2K camera<br/>
      <strong>Payload:</strong> Payload dropping mechanism<br/>
      <strong>Frame:</strong> Carbon Fiber<br/>
      <strong>Weight:</strong> 1.5 kg<br/>
      <strong>Range:</strong> 2 km</p>

      <h3>Best Use Cases</h3>
      <p>ARC MT 280 fits rapid surveillance, training flights, controlled delivery demonstrations, field observation, and short-range tactical monitoring where fast setup is important.</p>
    `,
  },
  {
    slug: "shadow-drop-10-ew-surveillance-platform",
    tag: "Tactical UAV",
    date: "28 Apr 2026",
    title: "Shadow Drop 10: EW-ready FPV platform for tactical surveillance",
    desc: "A 10-inch FPV drone engineered for anti-jam environments, high-speed response, and mission-focused field operations.",
    image: d1_3,
    content: `
      <p>Shadow Drop 10 is a 10-inch FPV platform designed for challenging field environments where speed, payload capacity, and stable communication matter. It is suitable for EW environment operations, anti-jam surveillance, and tactical observation roles.</p>

      <h3>Mission Role</h3>
      <p>With a 5 km range, 100 km/h speed, and 800 g payload capacity, Shadow Drop 10 is built for demanding field missions where fast movement and mission adaptability are required.</p>

      <h3>System Highlights</h3>
      <p><strong>Payload:</strong> 800 g<br/>
      <strong>Battery:</strong> 20 min<br/>
      <strong>MTOW:</strong> 2 kg<br/>
      <strong>Speed:</strong> 100 km/h<br/>
      <strong>Size:</strong> 10 inch FPV<br/>
      <strong>Range:</strong> 5 km</p>

      <h3>Best Use Cases</h3>
      <p>Shadow Drop 10 is suited for EW-ready surveillance, high-speed reconnaissance, tactical field monitoring, and mission simulations where reliability under signal-challenged conditions is important.</p>
    `,
  },
  {
    slug: "beetle-5-fpv-training-surveillance-drone",
    tag: "FPV System",
    date: "22 Apr 2026",
    title: "Beetle 5: Fast FPV drone for training and surveillance",
    desc: "A compact 5-inch FPV platform with strong speed, range, and analog/digital flexibility for field practice.",
    image: d1_4,
    content: `
      <p>Beetle 5 is a compact FPV drone designed for training and surveillance. Its 5-inch frame gives operators a fast, responsive platform for practice flights, tactical movement drills, and visual monitoring exercises.</p>

      <h3>Mission Role</h3>
      <p>With a 100 km/h speed profile and 5 km range, Beetle 5 gives pilots a strong balance between agility and practical field coverage. The analog/digital category support also makes it flexible for different operator setups.</p>

      <h3>System Highlights</h3>
      <p><strong>Size:</strong> 5 inch FPV<br/>
      <strong>Weight:</strong> 750 g<br/>
      <strong>Speed:</strong> 100 km/h<br/>
      <strong>Category:</strong> Analog / Digital<br/>
      <strong>Endurance:</strong> 15 min<br/>
      <strong>Range:</strong> 5 km</p>

      <h3>Best Use Cases</h3>
      <p>Beetle 5 works well for FPV pilot training, surveillance practice, rapid movement drills, and field exercises where speed and compact handling are required.</p>
    `,
  },
  {
    slug: "arc-mt-480ai-ai-tactical-multirotor-uav",
    tag: "AI ISR",
    date: "16 Apr 2026",
    title: "ARC MT 480AI: AI tactical multirotor UAV for ISR missions",
    desc: "A long-range AI-enabled multirotor designed for ISR, rapid response, high-speed recon, and AI target tracking.",
    image: d6_5,
    content: `
      <p>The ARC MT 480AI is an AI tactical multirotor UAV designed for ISR missions, modular payload capability, and advanced field intelligence workflows. It is built for teams that need longer endurance, higher altitude capability, and AI-supported observation.</p>

      <h3>Mission Role</h3>
      <p>With autonomous AI flight mode, day/night 2K thermal imaging, 40-minute endurance, and 15 km range, ARC MT 480AI is positioned as a high-capability platform for combat surveillance, rapid response, mapping, and AI-assisted tracking.</p>

      <h3>System Highlights</h3>
      <p><strong>Speed:</strong> 108 km/h<br/>
      <strong>Flight Mode:</strong> Autonomous AI<br/>
      <strong>Camera:</strong> Day / Night 2K Thermal<br/>
      <strong>Altitude:</strong> 15000 ft<br/>
      <strong>Endurance:</strong> 40 min<br/>
      <strong>Range:</strong> 15 km</p>

      <h3>Best Use Cases</h3>
      <p>ARC MT 480AI is suitable for ISR missions, combat surveillance, rapid response, high-speed reconnaissance, survey and mapping, and AI target tracking workflows.</p>
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

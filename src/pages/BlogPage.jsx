import { useEffect } from "react";
import { Link } from "react-router-dom";

import b1 from "../assets/blog/b1.png";
import b2 from "../assets/blog/b2.png";
import b3 from "../assets/blog/b3.png";
import b4 from "../assets/blog/b4.png";
import b5 from "../assets/blog/b5.png";
import b6 from "../assets/blog/b6.png";

import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const posts = [
  {
    slug: "make-in-india-uav-ecosystem",
    tag: "Industry Intel",
    date: "05 May 2026",
    title:
      "The Strategic Shift: Why 'Make in India' UAV Ecosystems Are Non-Negotiable",
    desc: "Analyzing the critical need for localized drone manufacturing and R&D labs to reduce foreign dependency in defense procurement.",
    image: b1,
  },
  {
    slug: "electronic-warfare-ew-uav-survival",
    tag: "Tech Analysis",
    date: "01 May 2026",
    title: "Operating in the Gray Zone: Electronic Warfare and UAV Survival",
    desc: "How modern combat zones are saturated with jamming signals, and why anti-jam protocols are the true test of a tactical drone.",
    image: b2,
  },
  {
    slug: "ai-target-tracking-isr-missions",
    tag: "AI ISR",
    date: "28 Apr 2026",
    title: "Beyond Human Limits: Autonomous AI in Combat ISR",
    desc: "Exploring how artificial intelligence is transforming Intelligence, Surveillance, and Reconnaissance from manual piloting to autonomous tracking.",
    image: b5,
  },
  {
    slug: "fpv-pilot-training-doctrine",
    tag: "Training Doctrine",
    date: "22 Apr 2026",
    title:
      "Building the Operator: Why FPV Training Doctrines Define Mission Success",
    desc: "Why advanced hardware is useless without rigorous, structured FPV pilot training protocols for frontline deployment.",
    image: b4,
  },
  {
    slug: "last-mile-uav-logistics-supply",
    tag: "Field Logistics",
    date: "16 Apr 2026",
    title:
      "Last-Mile Resupply: Utilizing UAVs for Forward Deployment Logistics",
    desc: "How payload-dropping multirotors are solving the 'last mile' problem in combat zones where traditional supply lines are compromised.",
    image: b3,
  },
  {
    slug: "kamikaze-drones-loitering-munitions-modern-warfare",
    tag: "Defense Tech",
    date: "12 May 2026",
    title: "Kamikaze Drones: The Rise of Loitering Munitions in Modern Warfare",
    desc: "A strategic look at how one-way UAV systems are changing battlefield surveillance, precision engagement, and counter-drone defense planning.",
    image: b6,
  },
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
      <section className="relative py-24 lg:py-32">
        <AnimatedGrid />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <FloatUpText>
            <div className="mb-14 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-tactical" />
                <span className="label-mono text-tactical">
                  UAV INTEL BRIEFINGS
                </span>
                <span className="h-px w-8 bg-tactical" />
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Drone insights, mission notes, and system briefings
              </h1>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Explore our UAV platforms built for training, surveillance, ISR,
                rapid response, and field-ready deployment workflows.
              </p>
            </div>
          </FloatUpText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="group bg-charcoal cursor-pointer relative overflow-hidden flex flex-col min-w-0"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block relative aspect-video bg-background overflow-hidden corner-frame"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 from-charcoal via-transparent to-transparent" />
                  <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

                  <div className="absolute top-3 left-3 label-mono text-[10px] bg-background/80 px-2 py-1 pointer-events-none">
                    {post.tag}
                  </div>

                  <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/80 px-2 py-1 pointer-events-none">
                    LOG {String(index + 1).padStart(2, "0")}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="label-mono text-tactical text-[10px] mb-3">
                    {post.date}
                  </div>

                  <h2 className="font-display text-xl font-bold leading-tight mb-3 group-hover:text-tactical transition-colors wrap-break-word">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.desc}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="label-mono text-[10px] group-hover:text-tactical transition-colors"
                    >
                      Read briefing
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

import { useEffect } from "react";
import { Link } from "react-router-dom";

import d1_1 from "../assets/d1/1.1.png";
import d1_2 from "../assets/d2/2.png";
import d1_3 from "../assets/d3/3.png";
import d1_4 from "../assets/d4/4.png";
import d6_5 from "../assets/d5/5.5.png";

import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const posts = [
  {
    slug: "tinywoop-training-surveillance-uav",
    tag: "Training UAV",
    date: "05 May 2026",
    title: "Tinywoop: Compact FPV drone for training and close surveillance",
    desc: "A small 2.5-inch FPV platform designed for pilot training, indoor drills, and short-range surveillance workflows.",
    image: d1_1,
  },
  {
    slug: "arc-mt-280-rapid-surveillance-drone",
    tag: "Field Ops",
    date: "01 May 2026",
    title: "ARC MT 280: Lightweight surveillance drone for rapid deployment",
    desc: "A carbon-fiber UAV built for stable observation, training missions, and controlled payload delivery scenarios.",
    image: d1_2,
  },
  {
    slug: "shadow-drop-10-ew-surveillance-platform",
    tag: "Tactical UAV",
    date: "28 Apr 2026",
    title: "Shadow Drop 10: EW-ready FPV platform for tactical surveillance",
    desc: "A 10-inch FPV drone engineered for anti-jam environments, high-speed response, and mission-focused field operations.",
    image: d1_3,
  },
  {
    slug: "beetle-5-fpv-training-surveillance-drone",
    tag: "FPV System",
    date: "22 Apr 2026",
    title: "Beetle 5: Fast FPV drone for training and surveillance",
    desc: "A compact 5-inch FPV platform with strong speed, range, and analog/digital flexibility for field practice.",
    image: d1_4,
  },
  {
    slug: "arc-mt-480ai-ai-tactical-multirotor-uav",
    tag: "AI ISR",
    date: "16 Apr 2026",
    title: "ARC MT 480AI: AI tactical multirotor UAV for ISR missions",
    desc: "A long-range AI-enabled multirotor designed for ISR, rapid response, high-speed recon, and AI target tracking.",
    image: d6_5,
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
                Drone insights, mission notes, and system briefings.
              </h1>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Explore our UAV platforms built for training, surveillance, ISR,
                rapid response, and field-ready deployment workflows.
              </p>
            </div>
          </FloatUpText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
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

                  <h2 className="font-display text-xl font-bold leading-tight mb-3 group-hover:text-tactical transition-colors break-words">
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

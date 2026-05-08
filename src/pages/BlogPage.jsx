import { useEffect } from "react";
import { Link } from "react-router-dom";
import g1 from "../assets/gallary/gallery1.jpg";
import g2 from "../assets/gallary/gallery2.jpg";
import g4 from "../assets/gallary/gallery4.jpg";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";
import { FloatUpText } from "../components/animations/Antigravity";

const posts = [
  {
    slug: "next-gen-lidar-integration-in-falcon-m4",
    tag: "Tech Report",
    date: "05 May 2026",
    title: "Next-gen LiDAR integration in Falcon M4",
    desc: "Field notes on lightweight LiDAR payloads, RTK stabilization, and faster mapping handoff.",
    image: g2,
  },
  {
    slug: "thermal-patrol-patterns-for-perimeter-monitoring",
    tag: "Field Ops",
    date: "28 Apr 2026",
    title: "Thermal patrol patterns for perimeter monitoring",
    desc: "How night operations combine thermal feeds, AI tracking, and redundant operator alerts.",
    image: g1,
  },
  {
    slug: "building-a-clean-uav-deployment-checklist",
    tag: "Command Desk",
    date: "16 Apr 2026",
    title: "Building a clean UAV deployment checklist",
    desc: "A practical readiness sequence for batteries, payloads, telemetry, and recovery planning.",
    image: g4,
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
                <span className="label-mono text-tactical">INTEL BRIEFINGS</span>
                <span className="h-px w-8 bg-tactical" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Field intel, system updates, and mission notes.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Updates from UAV testing, deployment planning, payload development, and operational
                workflows used by DroneOps teams.
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

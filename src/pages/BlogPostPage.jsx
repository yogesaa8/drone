import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import g1 from "../assets/gallary/gallery1.jpg";
import g2 from "../assets/gallary/gallery2.jpg";
import g4 from "../assets/gallary/gallery4.jpg";
import { FloatUpText } from "../components/animations/Antigravity";

const posts = [
  {
    slug: "next-gen-lidar-integration-in-falcon-m4",
    tag: "Tech Report",
    date: "05 May 2026",
    title: "Next-gen LiDAR integration in Falcon M4",
    desc: "Field notes on lightweight LiDAR payloads, RTK stabilization, and faster mapping handoff.",
    image: g2,
    content: `
      <p>During the latest deployment cycle, the engineering team successfully integrated the lightweight L3 LiDAR payload onto the Falcon M4 airframe. The primary goal was to reduce overall system weight while maintaining high-fidelity point cloud generation.</p>
      <h3>RTK Stabilization Enhancements</h3>
      <p>By pairing the LiDAR with our new base-station RTK module, we observed a 40% reduction in positional drift during low-altitude grid sweeps. This allows for faster mapping handoff to the ground station, cutting post-processing time from 15 minutes down to just 4 minutes per hectare.</p>
      <h3>Next Steps</h3>
      <p>The next phase of testing will focus on dense canopy penetration and multi-return signal processing to improve ground-model accuracy in wooded environments.</p>
    `,
  },
  {
    slug: "thermal-patrol-patterns-for-perimeter-monitoring",
    tag: "Field Ops",
    date: "28 Apr 2026",
    title: "Thermal patrol patterns for perimeter monitoring",
    desc: "How night operations combine thermal feeds, AI tracking, and redundant operator alerts.",
    image: g1,
    content: `
      <p>Night operations present unique challenges for perimeter security. Relying solely on visual spectrum cameras leaves blind spots that adversaries can exploit. Our recent field tests outline a new standard operating procedure for thermal drone patrols.</p>
      <h3>AI-Powered Tracking</h3>
      <p>Instead of relying on the operator to spot anomalies in the thermal feed, the onboard AI now automatically tags heat signatures that exhibit bipedal movement patterns. Once tagged, the drone alters its flight path to keep the target centered in the frame.</p>
      <h3>Redundant Alerts</h3>
      <p>To prevent single-points-of-failure, alert packets are sent simultaneously via RF telemetry, LTE backup, and localized mesh network nodes. If the primary video feed drops, the operator still receives coordinate pings and heading data of the tracked target.</p>
    `,
  },
  {
    slug: "building-a-clean-uav-deployment-checklist",
    tag: "Command Desk",
    date: "16 Apr 2026",
    title: "Building a clean UAV deployment checklist",
    desc: "A practical readiness sequence for batteries, payloads, telemetry, and recovery planning.",
    image: g4,
    content: `
      <p>A missed step during pre-flight is the leading cause of non-combat UAV losses. We've redesigned our deployment checklist to be linear, idiot-proof, and fast.</p>
      <h3>The Sequence</h3>
      <p><strong>1. Power & Comms:</strong> Verify battery cell voltage (within 0.1V tolerance), confirm radio binding, and check HDLink video connection.<br/>
      <strong>2. Payloads:</strong> Secure gimbal locking pins, run a 10-second calibration spin, and verify sensor heating elements (for thermal) are active.<br/>
      <strong>3. Telemetry:</strong> Ensure GPS lock achieves a minimum of 12 satellites with PDOP < 2.0.<br/>
      <strong>4. Recovery:</strong> Brief the ground crew on the exact LZ coordinates, wind direction, and emergency motor-cut procedure.</p>
      <h3>Result</h3>
      <p>Since implementing this rigid sequence, our pre-flight time has actually decreased by 3 minutes, while mechanical failures during the first 60 seconds of flight have dropped to zero.</p>
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
      <div className="pt-32 min-h-screen text-center">
        <h1 className="font-display text-4xl text-tactical">
          Briefing Not Found
        </h1>
        <Link
          to="/blog"
          className="mt-4 inline-block label-mono text-tactical hover:underline"
        >
          &larr; Return to Intel Briefings
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
                INTEL BRIEFINGS
              </Link>
              <span className="text-border">/</span>
              <span className="label-mono text-[10px] text-muted-foreground">
                {post.tag}
              </span>
            </div>

            {/* Header */}
            <div className="mb-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 label-mono text-[10px] text-tactical">
                <span>{post.tag}</span>
                <span className="h-px w-4 bg-tactical" />
                <span>{post.date}</span>
              </div>
            </div>
          </FloatUpText>

          {/* Hero Image */}
          <div className="relative aspect-video bg-background overflow-hidden corner-frame border border-border mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
          </div>

          {/* Article Content */}
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

          {/* Back Link */}
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

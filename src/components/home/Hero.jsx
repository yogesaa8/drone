import heroVdo from "../../assets/hero-video.mp4";
import { FloatUpText } from "../animations/Antigravity";

const stats = [
  ["FLIGHT ENDURANCE", "48+ MIN"],
  ["RANGE", "12 KM"],
  ["PAYLOAD", "10 KG"],
  ["LIVE FEED", "4K THERMAL"],
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background image (video fallback / poster) */}
      <div className="absolute inset-0">
        <video
          src={heroVdo}
          width={1920}
          height={1080}
          aria-label="Tactical drone over mountain terrain"
          className="w-full h-full object-cover object-[72%_68%] md:object-center"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 hud-grid opacity-40" />
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
        {/* moving scanner */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-tactical/60 to-transparent animate-scanner" />
        </div>
      </div>      

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <FloatUpText delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-tactical" />
              <span className="label-mono text-tactical">
                TACTICAL UAV PLATFORM / MISSION READY
              </span>
            </div>
          </FloatUpText>

          <FloatUpText delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Advanced Drone Systems
              <br />
              <span className="text-muted-foreground">for </span>
              <span className="text-tactical">Tactical Intelligence</span>
            </h1>
          </FloatUpText>

          <FloatUpText delay={0.3}>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Precision aerial platforms engineered for surveillance, mapping,
              inspection, defense operations, and mission-critical intelligence.
            </p>
          </FloatUpText>

          <FloatUpText delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4">
              <a href="#fleet" className="btn-tactical">
                Explore Fleet <span aria-hidden>→</span>
              </a>
              <a href="#gallery" className="btn-ghost">
                <span className="w-2 h-2 bg-tactical animate-hud-pulse" />
                Watch Capability Demo
              </a>
            </div>
          </FloatUpText>

          {/* stats */}
          <FloatUpText delay={0.5}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-3xl border border-border">
              {stats.map(([label, value]) => (
                <div
                  key={label}
                  className="bg-background/80 backdrop-blur p-4 zero-g-hover"
                >
                  <div className="label-mono text-[9px] mb-2">{label}</div>
                  <div className="font-display text-xl font-bold text-tactical">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </FloatUpText>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="label-mono text-[10px]">SCROLL</span>
        <div className="w-px h-10 bg-linear-to-b from-tactical to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

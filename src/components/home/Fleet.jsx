import { useNavigate } from "react-router-dom";
import { drones } from "../../data/data";
import { AnimatedGrid } from "../animations/AnimatedGrid";

const cleanText = (value = "") => {
  return String(value)
    .replace(/droping/gi, "Dropping")
    .replace(/surveilance/gi, "Surveillance")
    .replace(/antijam/gi, "Anti-Jam");
};

const Fleet = () => {
  const navigate = useNavigate();
  const featuredDrones = drones.slice(0, 4);

  return (
    <section id="fleet" className="py-24 lg:py-32 relative overflow-hidden">
      <AnimatedGrid />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-tactical" />
              <span className="label-mono text-tactical">
                ▌ FLEET INVENTORY
              </span>
              <span className="h-px w-10 bg-tactical" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
              Mission-Ready Drone Fleet
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Explore high-performance UAV platforms designed for surveillance,
            mapping, rescue, inspection, and tactical deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr items-stretch gap-px bg-border border border-border">
          {featuredDrones.map((d, i) => (
            <article
              key={d.id}
              className="group bg-charcoal flex flex-col h-full min-w-0 cursor-pointer relative"
              onClick={() => navigate("/drone/" + d.id)}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-background shrink-0">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 label-mono text-[10px] bg-background/70 px-2 py-1">
                  UNIT {String(i + 1).padStart(2, "0")}
                </div>

                <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
                  {d.serial}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 min-w-0">
                <div
                  className="label-mono text-tactical text-[10px] leading-[1.8] tracking-[0.28em] h-19.5 overflow-hidden wrap-break-word"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {cleanText(d.use).toUpperCase()}
                </div>

                <h3
                  className="font-display text-xl font-bold leading-tight h-14 overflow-hidden wrap-break-word"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {cleanText(d.name).toUpperCase()}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 min-h-33">
                  {d.specs.slice(0, 4).map(([k, v]) => (
                    <div
                      key={k}
                      className="border-l border-tactical/40 pl-2 min-w-0"
                    >
                      <div className="label-mono text-[9px] leading-relaxed wrap-break-word">
                        {cleanText(k)}
                      </div>

                      <div className="text-sm font-semibold mt-1 leading-snug wrap-break-word">
                        {cleanText(v)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <button
                    className="w-full btn-ghost justify-between py-3!"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/drone/" + d.id);
                    }}
                  >
                    <span>View Details</span>
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate("/products")}
            className="btn-tactical md:px-12! py-4! text-lg flex items-center gap-4 group"
          >
            <span>VIEW ALL PRODUCTS</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
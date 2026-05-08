import { useNavigate } from "react-router-dom";
import { drones } from "../../data/data";
import { AnimatedGrid } from "../animations/AnimatedGrid";

const Fleet = () => {
  const navigate = useNavigate();
  const featuredDrones = drones.slice(0, 4);

  return (
    <section id="fleet" className="py-24 lg:py-32 relative">
      <AnimatedGrid />
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-tactical" />
              <span className="label-mono text-tactical">▌ FLEET INVENTORY / 04 UNITS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
              Mission-Ready Drone Fleet
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Explore high-performance UAV platforms designed for surveillance, mapping, rescue,
            inspection, and tactical deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {featuredDrones.map((d, i) => (
            <article
              key={d.id}
              className="group bg-charcoal flex flex-col cursor-pointer relative min-w-0"
              onClick={() => navigate("/drone/" + d.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 label-mono text-[10px] bg-background/70 px-2 py-1">
                  UNIT {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
                  {d.serial}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="label-mono text-tactical text-[10px] mb-2">
                  {d.use.toUpperCase()}
                </div>
                <h3 className="font-display text-xl font-bold leading-tight break-words">
                  {d.name}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {d.specs.slice(0, 4).map(([k, v]) => (
                    <div key={k} className="border-l border-tactical/40 pl-2 min-w-0">
                      <div className="label-mono text-[9px]">{k}</div>
                      <div className="text-sm font-semibold mt-0.5 break-words">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-6 w-full btn-ghost justify-between !py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/drone/" + d.id);
                  }}
                >
                  <span>View Details</span>
                  <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => navigate("/products")}
            className="btn-tactical !px-12 !py-4 text-lg flex items-center gap-4 group"
          >
            <span>VIEW ALL PRODUCTS</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;

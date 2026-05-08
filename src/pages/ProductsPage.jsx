import { Link, useNavigate } from "react-router-dom";
import { drones, droneParts, insideKits } from "../data/data";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";

const ProductCard = ({ item, type, onClick }) => {
  const actionTo = type === "drone" ? `/drone/${item.id}` : "/contact";

  return (
    <article
      className="group bg-charcoal flex flex-col cursor-pointer relative border border-border"
      onClick={onClick}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-background">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />
        {item.serial && (
          <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
            {item.serial}
          </div>
        )}
        {item.price && (
          <div className="absolute top-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
            {item.price}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="label-mono text-tactical text-[10px] mb-2 uppercase">
          {item.use || item.category || type}
        </div>
        <h3 className="font-display text-xl font-bold leading-tight">
          {item.name}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {item.specs.slice(0, 4).map(([k, v]) => (
            <div key={k} className="border-l border-tactical/40 pl-2">
              <div className="label-mono text-[9px] uppercase">{k}</div>
              <div className="text-sm font-semibold mt-0.5">{v}</div>
            </div>
          ))}
        </div>

        <Link
          to={actionTo}
          onClick={(event) => event.stopPropagation()}
          className="mt-6 w-full btn-ghost justify-between py-3!"
        >
          <span>
            {type === "drone" ? "View Details" : "Request Configuration"}
          </span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
};

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      <AnimatedGrid />

      {/* Hero Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 mb-20 text-left">
        <div className="flex items-center justify-start gap-3 mb-4">
          <span className="h-px w-10 bg-tactical" />
          <span className="label-mono text-tactical uppercase">
            ▌ Inventory / Full Catalog
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Advanced Equipment
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Browse our complete range of tactical UAVs, precision-engineered
          components, and ready-to-deploy mission kits.
        </p>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 space-y-32">
        {/* 1. Drone Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-display text-3xl font-bold">
              01 / Fleet Drones
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drones.map((d) => (
              <ProductCard
                key={d.id}
                item={d}
                type="drone"
                onClick={() => navigate("/drone/" + d.id)}
              />
            ))}
          </div>
        </section>

        {/* 2. Drone Parts Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-display text-3xl font-bold">
              02 / Precision Parts
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {droneParts.map((p) => (
              <ProductCard key={p.id} item={p} type="component" />
            ))}
          </div>
        </section>

        {/* 3. Inside Kit Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-display text-3xl font-bold">
              03 / Mission Kits
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insideKits.map((k) => (
              <ProductCard key={k.id} item={k} type="kit" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;

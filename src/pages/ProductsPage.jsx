import { useEffect, useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { drones } from "../data/data";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";

export const ProductCard = ({ item, type, onClick, onZoom }) => {
  const actionTo = type === "drone" ? `/drone/${item.id}` : "/contact";
  const canZoom = Boolean(onZoom);

  return (
    <article
      className="group bg-charcoal flex flex-col cursor-pointer relative border border-border min-w-0"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
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
        {canZoom && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onZoom(item);
            }}
            aria-label={`Open ${item.name} image fullscreen`}
            title="Click to zoom"
            className="absolute bottom-3 right-3 z-20 grid h-9 w-9 place-items-center border border-border bg-background/85 text-foreground transition-colors hover:border-tactical hover:text-tactical"
          >
            <FiMaximize2 size={16} />
          </button>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="label-mono text-tactical text-[10px] mb-2 uppercase break-words">
          {item.use || item.category || type}
        </div>
        <h3 className="font-display text-xl font-bold leading-tight break-words">
          {item.name}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {item.specs.slice(0, 4).map(([k, v]) => (
            <div key={k} className="border-l border-tactical/40 pl-2 min-w-0">
              <div className="label-mono text-[9px] uppercase">{k}</div>
              <div className="text-sm font-semibold mt-0.5 break-words">
                {v}
              </div>
            </div>
          ))}
        </div>

        <Link
          to={actionTo}
          onClick={(event) => event.stopPropagation()}
          className="mt-6 w-full btn-ghost justify-between !py-3"
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
  const [zoomedItem, setZoomedItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = zoomedItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedItem]);

  useEffect(() => {
    if (!zoomedItem) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedItem]);

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
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          Advanced Equipment
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Browse our complete range of tactical UAVs.
        </p>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 space-y-32">
        {/* 1. Drone Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
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
      </div>

      {zoomedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomedItem.name} image preview`}
          onClick={() => setZoomedItem(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setZoomedItem(null);
            }}
            aria-label="Close fullscreen image"
            title="Close"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-border bg-charcoal text-foreground transition-colors hover:border-tactical hover:text-tactical md:right-8 md:top-8"
          >
            <FiX size={22} />
          </button>
          <img
            src={zoomedItem.image}
            alt={`${zoomedItem.name} fullscreen preview`}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

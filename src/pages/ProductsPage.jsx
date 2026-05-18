import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/common/ProductCard";
import { drones } from "../data/data";
import { AnimatedGrid } from "../components/animations/AnimatedGrid";

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
                onZoom={setZoomedItem}
              />
            ))}
          </div>
        </section>
      </div>

      {zoomedItem &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-8"
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
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  );
};

export default ProductsPage;


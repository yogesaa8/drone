import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiMaximize2, FiX } from "react-icons/fi";
import { drones } from "../data/data";
import DroneViewer from "../components/DroneViewer";

const DroneDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const drone = drones.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = isPreviewOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  if (!drone) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Drone Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="btn-tactical justify-center"
          >
            Return to Fleet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 lg:py-32 flex items-center justify-center px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="relative w-full max-w-6xl bg-charcoal border border-border animate-fade-up">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border px-5 py-3 bg-background/60">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-2 h-2 shrink-0 bg-tactical animate-hud-pulse" />
            <span className="label-mono text-[10px]">
              UNIT BRIEF / {drone.serial}
            </span>
          </div>
          <button
            onClick={() => navigate("/")}
            aria-label="Back to Fleet"
            className="px-4 py-1.5 border border-border flex items-center justify-center hover:border-tactical hover:text-tactical transition-colors text-xs font-mono sm:shrink-0"
          >
            ← BACK TO FLEET
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {/* Image gallery */}
          <div className="bg-charcoal p-6 lg:p-8">
            <div className="relative aspect-[4/3] bg-background corner-frame overflow-hidden">
              <img
                src={drone.gallery[active]}
                alt={`${drone.name} view ${active + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                aria-label="Open image fullscreen"
                title="Open fullscreen"
                className="absolute top-3 right-3 z-20 grid h-9 w-9 place-items-center border border-border bg-background/80 text-foreground transition-colors hover:border-tactical hover:text-tactical"
              >
                <FiMaximize2 size={16} />
              </button>
              <div className="absolute top-3 left-3 label-mono text-[10px] bg-background/70 px-2 py-1">
                VIEW {String(active + 1).padStart(2, "0")} /{" "}
                {String(drone.gallery.length).padStart(2, "0")}
              </div>
              <div className="absolute bottom-3 right-3 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1">
                ● LIVE PREVIEW
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-3">
              {drone.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden border transition-all ${
                    i === active
                      ? "border-tactical"
                      : "border-border hover:border-muted-foreground"
                  }`}
                  aria-label={`View ${i + 1}`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* 3D viewer placeholder */}
            {/* <div className="mt-4 border border-border p-5 bg-background/60 corner-frame">
              <div className="flex items-center justify-between mb-3">
                <span className="label-mono text-tactical text-[10px]">3D MODEL VIEWER</span>
                <span className="label-mono text-[10px]">ROTATE / ZOOM / INSPECT</span>
              </div>
              <div className="aspect-video bg-background border border-dashed border-border relative overflow-hidden">
                <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none z-10" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tactical/60 to-transparent animate-scanner z-10 pointer-events-none" />
                <div className="absolute top-2 left-2 label-mono text-[9px] bg-background/70 px-2 py-1 z-10">
                  MODEL.{drone.id.toUpperCase()}
                </div>
                <div className="absolute bottom-2 right-2 label-mono text-[9px] text-tactical bg-background/70 px-2 py-1 z-10">
                  ● ACTIVE
                </div>
                <div className="absolute inset-0">
                  <DroneViewer variant={drone.id} model={drone.model} />
                </div>
              </div>
            </div> */}
            <div className="mt-4 border border-border p-3 md:p-5 bg-background/60 corner-frame">
              <div className="flex items-center justify-between mb-3">
                <span className="label-mono text-tactical text-[9px] md:text-[10px]">
                  3D MODEL VIEWER
                </span>
                <span className="label-mono text-[9px] md:text-[10px]">
                  ROTATE / ZOOM / INSPECT
                </span>
              </div>

              <div className="relative h-75 sm:h-90 md:h-97.5 lg:h-107.5 bg-background border border-dashed border-border overflow-hidden">
                <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none z-10" />

                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-tactical/60 to-transparent animate-scanner z-10 pointer-events-none" />

                <div className="absolute top-2 left-2 label-mono text-[8px] md:text-[9px] bg-background/70 px-2 py-1 z-10">
                  MODEL.{drone.id.toUpperCase()}
                </div>

                <div className="absolute bottom-2 right-2 label-mono text-[8px] md:text-[9px] text-tactical bg-background/70 px-2 py-1 z-10">
                  ● ACTIVE
                </div>

                <div className="absolute inset-0">
                  <DroneViewer variant={drone.id} model={drone.model} />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-charcoal p-6 lg:p-8 flex flex-col">
            <div className="label-mono text-tactical text-[10px] mb-2">
              {drone.use.toUpperCase()}
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              {drone.name}
            </h3>
            <div className="mt-2 label-mono text-[10px]">
              SERIAL // {drone.serial}
            </div>

            <div className="mt-6">
              <div className="label-mono text-[10px] mb-3">
                ▌ FULL SPECIFICATIONS
              </div>
              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                {drone.specs.map(([k, v]) => (
                  <div key={k} className="bg-charcoal p-3">
                    <div className="label-mono text-[9px]">{k}</div>
                    <div className="font-display text-base font-semibold mt-1">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="label-mono text-[10px] mb-3">
                ▌ MISSION USE CASES
              </div>
              <ul className="space-y-2">
                {drone.missions.map((m, i) => (
                  <li key={m} className="flex items-center gap-3 text-sm">
                    <span className="label-mono text-tactical text-[10px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-6 bg-border" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-tactical flex-1 justify-center"
              >
                Request Configuration
              </button>
              <button
                onClick={() => navigate("/products")}
                className="btn-ghost flex-1 justify-center"
              >
                Return to Fleet
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            aria-label="Close fullscreen image"
            title="Close"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-border bg-charcoal text-foreground transition-colors hover:border-tactical hover:text-tactical md:right-8 md:top-8"
          >
            <FiX size={22} />
          </button>
          <img
            src={drone.gallery[active]}
            alt={`${drone.name} fullscreen view ${active + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default DroneDetailsPage;

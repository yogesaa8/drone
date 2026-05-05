import React, { useEffect, useState } from 'react'
import { gallery } from "../../data/data"
import { AnimatedGrid } from "../animations/AnimatedGrid";

const Gallery = () => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % gallery.length);
  const prev = () => setI((v) => (v - 1 + gallery.length) % gallery.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <AnimatedGrid />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-tactical" />
              <span className="label-mono text-tactical">▌ FIELD ARCHIVE</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Field Operations Gallery
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Visual coverage from reconnaissance, industrial inspection, mapping, and tactical field
            deployments.
          </p>
        </div>

        <div className="relative corner-frame border border-border bg-charcoal">
          <div className="relative aspect-[16/9] overflow-hidden">
            {gallery.map((g, idx) => (
              <img
                key={idx}
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

            {/* Top labels */}
            <div className="absolute top-4 left-4 label-mono text-[10px] bg-background/70 px-2 py-1">
              FRAME {String(i + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
            </div>
            <div className="absolute top-4 right-4 label-mono text-[10px] text-tactical bg-background/70 px-2 py-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-tactical animate-hud-pulse" /> ARCHIVED FEED
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 inset-x-0 p-6 lg:p-10">
              <div className="label-mono text-tactical text-[10px] mb-2">▌ MISSION LOG</div>
              <div className="font-display text-2xl md:text-3xl font-semibold max-w-2xl">
                {gallery[i].caption}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-border bg-background/70 backdrop-blur flex items-center justify-center hover:border-tactical hover:text-tactical transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-border bg-background/70 backdrop-blur flex items-center justify-center hover:border-tactical hover:text-tactical transition-colors"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 py-4 border-t border-border">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to ${idx + 1}`}
                className={`h-1.5 transition-all ${idx === i
                    ? "w-8 bg-tactical"
                    : "w-3 bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery
import { useState } from "react";
import { FloatUpText } from "../animations/Antigravity";

const faqs = [
  {
    q: "What type of drones do you provide?",
    a: "We provide surveillance, mapping, inspection, tactical, payload, and mission-specific UAV systems.",
  },
  {
    q: "Can the drones support thermal cameras?",
    a: "Yes, selected models support 4K thermal imaging, night vision, and AI-based object tracking.",
  },
  {
    q: "Do you provide custom drone configurations?",
    a: "Yes, drones can be configured based on payload, range, camera system, battery capacity, and mission needs.",
  },
  {
    q: "Can I view a 3D model before selecting a drone?",
    a: "Yes, each drone detail modal includes a 3D model viewer area for rotation, zoom, and inspection.",
  },
  {
    q: "Are these drones suitable for industrial inspection?",
    a: "Yes, they can be used for infrastructure inspection, energy sites, construction monitoring, and asset surveillance.",
  },
  {
    q: "Do you provide training and deployment support?",
    a: "Yes, deployment guidance, training, documentation, and technical support can be included.",
  },
];

const FAQ = () => {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="relative py-24 lg:py-32 border-y border-border bg-charcoal/30">
            <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
                <FloatUpText>
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-tactical" />
                            <span className="label-mono text-tactical">▌ INTEL BRIEFING</span>
                            <span className="h-px w-8 bg-tactical" />
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>
                </FloatUpText>

                <FloatUpText delay={0.2}>
                    <div className="border border-border bg-background">
                        {faqs.map((f, i) => {
                            const isOpen = open === i;
                            return (
                                <div key={i} className="border-b border-border last:border-b-0">
                                    <button
                                        className="relative w-full flex items-center justify-between gap-6 px-6 py-5 text-left hover:bg-charcoal hover:z-10 zero-g-hover"
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-${i}`}
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            <span className="label-mono text-tactical text-[10px] shrink-0">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="font-display text-base md:text-lg font-semibold break-words">
                                                {f.q}
                                            </span>
                                        </div>
                                        <span
                                            className={`w-8 h-8 border border-border flex-shrink-0 flex items-center justify-center text-tactical transition-transform ${isOpen ? "rotate-45" : ""
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        id={`faq-${i}`}
                                        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-5 md:pl-16 text-sm text-muted-foreground leading-relaxed">
                                                {f.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </FloatUpText>
            </div>
        </section>
    );
}

export default FAQ

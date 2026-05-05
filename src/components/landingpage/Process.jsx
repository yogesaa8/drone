const steps = [
    {
        t: "Mission Requirement",
        d: "We analyze your operational objective and required drone capabilities.",
    },
    { t: "System Configuration", d: "We configure camera, payload, endurance, and control modules." },
    { t: "Field Testing", d: "Every system is tested under mission-like environmental conditions." },
    { t: "Deployment Support", d: "We provide training, documentation, and operational support." },
];

import { AnimatedGrid } from "../animations/AnimatedGrid";

const Process = () => {
    return (
        <section className="relative py-24 lg:py-32">
            <AnimatedGrid />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-tactical" />
                        <span className="label-mono text-tactical">▌ MISSION PROTOCOL</span>
                        <span className="h-px w-8 bg-tactical" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                        From Briefing to Deployment
                    </h2>
                </div>

                <div className="relative">
                    {/* connecting line */}
                    <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-tactical/40 to-transparent" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {steps.map((s, i) => (
                            <div key={s.t} className="relative">
                                <div className="flex flex-col items-center text-center bg-charcoal border border-border p-6 corner-frame h-full">
                                    <div className="relative mb-5">
                                        <div className="w-20 h-20 border border-tactical flex items-center justify-center bg-background">
                                            <span className="font-display text-3xl font-bold text-tactical">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-tactical animate-hud-pulse" />
                                    </div>
                                    <div className="label-mono text-[10px] mb-2">
                                        PHASE {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="font-display text-lg font-semibold mb-2">{s.t}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
import { FloatUpText } from "../animations/Antigravity";

const cases = [
    {
        t: "Defense Surveillance",
        d: "Persistent ISR coverage for forward operating zones and tactical units.",
        i: "◉",
    },
    {
        t: "Border Monitoring",
        d: "Continuous perimeter watch with AI intrusion detection alerts.",
        i: "▤",
    },
    {
        t: "Disaster Response",
        d: "Rapid aerial assessment for search, rescue, and damage triage.",
        i: "✕",
    },
    {
        t: "Industrial Inspection",
        d: "Asset, pipeline, and infrastructure inspection without ground risk.",
        i: "▦",
    },
    {
        t: "Agricultural Mapping",
        d: "Multispectral crop analysis and precision farming intelligence.",
        i: "≡",
    },
    { t: "Search & Rescue", d: "Thermal-guided locate operations across difficult terrain.", i: "↗" },
];

const UseCases = () => {
    return (
        <section id="missions" className="relative py-24 lg:py-32 border-y border-border">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

                <FloatUpText>
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-tactical" />
                            <span className="label-mono text-tactical">▌ OPERATIONAL DOMAINS</span>
                            <span className="h-px w-8 bg-tactical" />
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                            Built for Critical Missions
                        </h2>
                    </div>
                </FloatUpText>

                <FloatUpText delay={0.2}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                        {cases.map((c, i) => (
                            <div key={c.t} className="bg-charcoal p-8 group hover:bg-background zero-g-hover min-w-0">
                                <div className="flex items-start justify-between mb-6">
                                    <span className="font-display text-5xl font-bold text-tactical/30 group-hover:text-tactical transition-colors leading-none">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className={`w-10 h-10 border border-border flex items-center justify-center text-tactical group-hover:border-tactical transition-colors ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                                        {c.i}
                                    </div>
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2 wrap-break-word">{c.t}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                            </div>
                        ))}
                    </div>
                </FloatUpText>
            </div>
        </section>
    )
}

export default UseCases

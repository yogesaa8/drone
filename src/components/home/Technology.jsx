const features = [
    {
        title: "AI Target Tracking",
        desc: "Onboard neural processing locks and follows mobile targets with sub-second response.",
        icon: "◎",
    },
    {
        title: "4K Thermal Imaging",
        desc: "Dual-spectrum optics deliver crisp visual and heat-signature feeds in any condition.",
        icon: "▦",
    },
    {
        title: "Autonomous Routing",
        desc: "Pre-planned waypoints with adaptive obstacle avoidance and mission re-routing.",
        icon: "⟶",
    },
    {
        title: "Encrypted Transmission",
        desc: "AES-256 secure live link with frequency hopping and anti-jamming protocols.",
        icon: "⌬",
    },
    {
        title: "All-Weather Build",
        desc: "Ruggedized airframe rated IP54 — operates in rain, dust, wind, and sub-zero temps.",
        icon: "▲",
    },
    {
        title: "Long-Range Control",
        desc: "Ground station maintains command authority up to 12 km with redundant uplink.",
        icon: "≣",
    },
];


const Technology = () => {
    return (
        <section
            id="technology"
            className="py-24 lg:py-32 border-y border-border bg-charcoal/30 relative"
        >
            {/* <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" /> */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-tactical" />
                        <span className="label-mono text-tactical">▌ CORE CAPABILITIES</span>
                        <span className="h-px w-8 bg-tactical" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                        Engineered for Precision Operations
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                    {features.map((f, i) => (
                        <div
                            key={f.title}
                            className="bg-charcoal p-7 group hover:bg-background transition-colors relative min-w-0"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 border border-tactical/60 flex items-center justify-center text-tactical text-xl group-hover:border-tactical transition-colors">
                                    {f.icon}
                                </div>
                                <span className="label-mono text-tactical text-[10px]">
                                    MODULE {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="font-display text-lg font-semibold mb-2 break-words">{f.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                            <div className="mt-5 h-px bg-gradient-to-r from-tactical/40 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technology

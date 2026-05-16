import { FloatUpText } from "../animations/Antigravity";

const stats = [
    { value: "15", unit: "km", label: "Max Control Range" },
    { value: "45", unit: "min", label: "Flight Endurance" },
    { value: "4K", unit: "", label: "Thermal Resolution" },
    { value: "<1", unit: "s", label: "Target Lock Response" },
    { value: "IP54", unit: "", label: "Weather Rating" },
    { value: "AES-256", unit: "", label: "Encryption Standard" },
];

// const specs = [
//     { label: "Wingspan", value: "1.2 m" },
//     { label: "Max Speed", value: "72 km/h" },
//     { label: "Takeoff Weight", value: "3.8 kg" },
//     { label: "Operating Temp", value: "-20° to 50°C" },
//     { label: "Payload Capacity", value: "800 g" },
//     { label: "Frequency Band", value: "2.4 / 5.8 GHz" },
// ];

const PerformanceSpecs = () => {
    return (
        <section id="specs" className="relative py-24 lg:py-32 border-y border-border bg-charcoal/30">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

                {/* Section Header */}
                <FloatUpText>
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-tactical" />
                            <span className="label-mono text-tactical">▌ PERFORMANCE SPECS</span>
                            <span className="h-px w-8 bg-tactical" />
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                            Numbers That Matter
                        </h2>
                    </div>
                </FloatUpText>

                {/* ── Key Stats ── */}
                <FloatUpText delay={0.1}>
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 bg-tactical rotate-45" />
                            <h3 className="font-display text-lg font-semibold tracking-wide text-tactical">
                                KEY METRICS
                            </h3>
                            <span className="flex-1 h-px bg-border" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-charcoal p-6 text-center group hover:bg-background transition-colors min-w-0"
                                >
                                    <div className="font-display text-3xl lg:text-4xl font-bold text-tactical mb-1">
                                        {s.value}
                                        <span className="text-base font-medium text-tactical/60 ml-0.5">
                                            {s.unit}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FloatUpText>

                {/* ── Divider ── */}
                {/* <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-tactical/40 text-xs">◆</span>
                    <div className="flex-1 h-px bg-border" />
                </div> */}

                {/* ── Detailed Spec Table ── */}
                {/* <FloatUpText delay={0.2}>
                    <div className="mt-14">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 bg-tactical rotate-45" />
                            <h3 className="font-display text-lg font-semibold tracking-wide text-tactical">
                                AIRFRAME SPECIFICATIONS
                            </h3>
                            <span className="flex-1 h-px bg-border" />
                        </div>

                        <div className="border border-border">
                            {specs.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`flex items-center justify-between gap-4 px-6 py-4 group hover:bg-background transition-colors ${
                                        i < specs.length - 1 ? "border-b border-border" : ""
                                    }`}
                                >
                                    <span className="text-sm text-muted-foreground">
                                        {s.label}
                                    </span>
                                    <span className="font-display text-sm font-semibold text-tactical text-right">
                                        {s.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FloatUpText> */}

            </div>
        </section>
    );
};

export default PerformanceSpecs;

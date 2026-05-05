import { Link } from "react-router-dom";

const cols = [
    {
        t: "Quick Links",
        items: [
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Mission", to: "/mission" },
            { label: "Blog", to: "/blog" },
            { label: "Contact", to: "/contact" },
        ],
    },
    {
        t: "Services",
        items: [
            "Drone Surveillance",
            "Mapping UAVs",
            "Industrial Inspection",
            "Payload Systems",
            "Custom UAV Configuration",
        ],
    },
    {
        t: "Contact",
        items: ["operations@droneops.com", "+91 98765 43210", "New Delhi, India"],
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-border bg-charcoal/40">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                <div className="grid lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 border border-tactical relative flex items-center justify-center">
                                <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
                            </div>
                            <span className="font-display text-lg font-bold tracking-widest">DRONEOPS</span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                            Advanced UAV systems engineered for intelligence, inspection, and mission-critical
                            deployment.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-6 flex border border-border max-w-sm"
                        >
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none"
                            />
                            <button className="px-4 bg-tactical text-primary-foreground font-mono text-xs tracking-widest uppercase hover:bg-tactical/80 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {cols.map((c) => (
                        <div key={c.t}>
                            <div className="label-mono text-tactical text-[10px] mb-4">▌ {c.t.toUpperCase()}</div>
                            <ul className="space-y-2.5">
                                {c.items.map((it) => (
                                    <li key={typeof it === "string" ? it : it.label}>
                                        {typeof it === "string" ? (
                                            <a
                                                href="#"
                                                className="text-sm text-muted-foreground hover:text-tactical transition-colors"
                                            >
                                                {it}
                                            </a>
                                        ) : (
                                            <Link
                                                to={it.to}
                                                className="text-sm text-muted-foreground hover:text-tactical transition-colors"
                                            >
                                                {it.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="label-mono text-[10px]">
                        © 2026 DRONEOPS SYSTEMS — ALL RIGHTS RESERVED
                    </div>
                    <div className="flex items-center gap-5 label-mono text-[10px]">
                        {["LinkedIn", "YouTube", "Instagram", "X / Twitter"].map((s) => (
                            <a key={s} href="#" className="hover:text-tactical transition-colors">
                                {s}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 label-mono text-[10px]">
                        <a href="#" className="hover:text-tactical">
                            Privacy Policy
                        </a>
                        <span className="text-border">/</span>
                        <a href="#" className="hover:text-tactical">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

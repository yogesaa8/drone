import React, { useState } from 'react'
import { AnimatedGrid } from '../animations/AnimatedGrid';

function Label({ children }) {
    return <div className="label-mono text-[10px] mb-2">{children}</div>;
}

function Field({ label, name, type = "text", required }) {
    return (
        <div>
            <Label>{label}</Label>
            <input
                type={type}
                name={name}
                required={required}
                className="w-full bg-charcoal border border-border px-4 py-3 text-sm focus:outline-none focus:border-tactical"
            />
        </div>
    );
}


const Contact = () => {
    const [sent, setSent] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        e.currentTarget.reset();
    };

    return (
        <section id="contact" className="relative py-24 lg:py-32">
            <AnimatedGrid />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-5 gap-px bg-border border border-border">
                    {/* Info */}
                    <aside className="lg:col-span-2 bg-charcoal p-8 lg:p-10 flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 bg-tactical animate-hud-pulse" />
                            <span className="label-mono text-tactical text-[10px]">SECURE INQUIRY CHANNEL</span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                            Request Mission Consultation
                        </h2>
                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                            Tell us about your operational requirement and our team will help configure the right
                            UAV system.
                        </p>

                        <div className="mt-8 space-y-5 border-t border-border pt-6">
                            {[
                                ["EMAIL", "operations@droneops.com"],
                                ["PHONE", "+91 98765 43210"],
                                ["LOCATION", "New Delhi, India"],
                                ["AVAILABILITY", "Mon–Sat / 0900–1800 IST"],
                            ].map(([k, v]) => (
                                <div key={k} className="flex items-start gap-4">
                                    <div className="label-mono text-[10px] w-24 pt-1">{k}</div>
                                    <div className="font-display font-semibold">{v}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-8">
                            <div className="border border-border p-4 bg-background/60 corner-frame">
                                <div className="label-mono text-[10px] mb-1">▌ ENCRYPTION STATUS</div>
                                <div className="text-tactical font-mono text-sm">AES-256 / TLS 1.3 ACTIVE</div>
                            </div>
                        </div>
                    </aside>

                    {/* Form */}
                    <form onSubmit={onSubmit} className="lg:col-span-3 bg-background p-8 lg:p-10 space-y-5">
                        <div className="flex items-center justify-between border-b border-border pb-3 mb-2">
                            <span className="label-mono text-[10px]">▌ BRIEFING FORM / 06 FIELDS</span>
                            <span className="label-mono text-tactical text-[10px]">FORM ID: BRF-2026</span>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Full Name" name="name" required />
                            <Field label="Organization" name="org" required />
                            <Field label="Email Address" name="email" type="email" required />
                            <Field label="Phone Number" name="phone" type="tel" />
                        </div>

                        <div>
                            <Label>Mission Type</Label>
                            <select
                                name="mission"
                                required
                                className="w-full bg-charcoal border border-border px-4 py-3 text-sm font-mono focus:outline-none focus:border-tactical"
                            >
                                <option>Surveillance</option>
                                <option>Mapping</option>
                                <option>Inspection</option>
                                <option>Payload Delivery</option>
                                <option>Search & Rescue</option>
                                <option>Custom Requirement</option>
                            </select>
                        </div>

                        <div>
                            <Label>Message</Label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                placeholder="Describe operational requirement, terrain, and timeline..."
                                className="w-full bg-charcoal border border-border px-4 py-3 text-sm focus:outline-none focus:border-tactical resize-none"
                            />
                        </div>

                        <button type="submit" className="btn-tactical w-full justify-center !py-4">
                            {sent ? "✓ Inquiry Transmitted" : "Submit Inquiry →"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact
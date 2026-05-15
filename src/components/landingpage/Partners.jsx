const partners = [
  "BharatSkyTech",
  "DronacharyaTech",
  "Parity InfoTech",
  "Drobonation",
  "Gorkha Rifles",
  "Armoured Corps",
  "Officers Training Academy",
  "Quetzalcoatl",
  "46 Armoured Regiment",
  "10 Sikh"
];

const Partners = () => {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-border bg-charcoal/40 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Trusted by Mission-Focused Teams
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Built for organizations that require reliability, precision, and
          operational control.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {loop.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-12 py-6 border-r border-border min-w-60"
            >
              <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-6 h-6 border border-muted-foreground rotate-45 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-muted-foreground" />
                </div>
                <span className="font-display font-bold tracking-[0.2em] text-sm text-muted-foreground">
                  {p}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

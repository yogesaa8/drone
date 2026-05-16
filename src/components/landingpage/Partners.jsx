import BharatSkyTech from "../../assets/logo/bharat1.png";
import Drobonation from "../../assets/logo/DN1.png";
import DronacharyaTech from "../../assets/logo/DC.png";
import ParityInfoTech from "../../assets/logo/PT.png";

const partners = [
  {
    name: "BharatSkyTech",
    logo: BharatSkyTech,
  },
  {
    name: "Drobonation",
    logo: Drobonation,
  },
  {
    name: "DronacharyaTech",
    logo: DronacharyaTech,
  },
  {
    name: "Parity InfoTech",
    logo: ParityInfoTech,
  },
];

const Partners = () => {
  const loop = Array.from(
    { length: 12 },
    (_, i) => partners[i % partners.length],
  );

  return (
    <section className="border-y border-border bg-charcoal/40 py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center mb-8 sm:mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          Trusted by Mission-Focused Teams
        </h2>

        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Built for organizations that require reliability, precision, and
          operational control.
        </p>
      </div>

      <div className="group relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group/card flex items-center justify-center px-8 sm:px-10 lg:px-12 py-5 sm:py-6 border-r border-border min-w-44 sm:min-w-56 lg:min-w-64"
            >
              <div className="flex items-center justify-center opacity-70 transition-opacity duration-300 group-hover/card:opacity-100">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-30 object-contain grayscale transition-all duration-300 group-hover/card:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

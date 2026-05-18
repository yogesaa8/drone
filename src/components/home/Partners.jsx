// import BharatSkyTech from "../../assets/logo/bharat1.png";
// import Drobonation from "../../assets/logo/DN1.png";
// import DronacharyaTech from "../../assets/logo/DC.png";
// import ParityInfoTech from "../../assets/logo/PT.png";
// import Gorkha_rifles from "../../assets/logo/Gorkha_rifles.svg";
// import Armoured_Corps from "../../assets/logo/Armoured Corps.png";
// import Indian_Armoured from "../../assets/logo/Indian_Armoured.png";
// import Sikh_Regiment from "../../assets/logo/Sikh_Regiment.png";
// import Officers_Training_Academy from "../../assets/logo/OTA.jpg";
// import quet from "../../assets/logo/quet.png";
// import bharat1v2 from "../../assets/logo/bharat1v2.png";
// import DN1v2 from "../../assets/logo/DN1v2.png";
// import PTv2 from "../../assets/logo/PTv2.png";
// import quetv2 from "../../assets/logo/quetv2.png";


// const partners = [
//   {
//     name: "BharatSkyTech",
//     logo: BharatSkyTech,
//   },
//   {
//     name: "Drobonation",
//     logo: Drobonation,
//   },
//   {
//     name: "DronacharyaTech",
//     logo: DronacharyaTech,
//   },
//   {
//     name: "Parity InfoTech",
//     logo: ParityInfoTech,
//   },
//   {
//     name: "Gorkha Rifles",
//     logo: Gorkha_rifles,
//   },
//   {
//     name: "Armoured Corps",
//     logo: Armoured_Corps,
//   },
//   {
//     name: "Officers Training Academy",
//     logo: Officers_Training_Academy,
//   },
//   {
//     name: "Quetzalcoatl",
//     logo: quet,
//   },
//   {
//     name: "46 Armoured Regiment",
//     logo: Indian_Armoured,
//   },
//   {
//     name: "10 Sikh",
//     logo: Sikh_Regiment,
//   }
// ];

// const Partners = () => {
//   const loop = Array.from(
//     { length: 12 },
//     (_, i) => partners[i % partners.length],
//   );

//   return (
//     <section className="border-y border-border bg-charcoal/40 py-12 sm:py-14 lg:py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center mb-8 sm:mb-10">
//         <h2 className="font-display text-2xl md:text-3xl font-semibold">
//           Trusted by Mission-Focused Teams
//         </h2>

//         <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
//           Built for organizations that require reliability, precision, and
//           operational control.
//         </p>
//       </div>

//       <div className="group relative overflow-hidden">
//         <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
//         <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

//         <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
//           {loop.map((p, i) => (
//             <div
//               key={`${p.name}-${i}`}
//               className="group/card flex items-center justify-center px-8 sm:px-10 lg:px-12 py-5 sm:py-6 border-r border-border min-w-44 sm:min-w-56 lg:min-w-64"
//             >
//               <div className="flex items-center justify-center opacity-70 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:scale-105">
//                 <img
//                   src={p.logo}
//                   alt={p.name}
//                   className="h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-30 object-contain transition-all duration-300"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;


import BharatSkyTech from "../../assets/logo/bharat1.png";
import Drobonation from "../../assets/logo/DN1.png";
import DronacharyaTech from "../../assets/logo/DC.png";
import ParityInfoTech from "../../assets/logo/PT.png";
import Gorkha_rifles from "../../assets/logo/Gorkha_rifles.svg";
import Armoured_Corps from "../../assets/logo/Armoured Corps.png";
import Indian_Armoured from "../../assets/logo/Indian_Armoured.png";
import Sikh_Regiment from "../../assets/logo/Sikh_Regiment.png";
import Officers_Training_Academy from "../../assets/logo/OTA.jpg";
import quet from "../../assets/logo/quet.png";

import bharat1v2 from "../../assets/logo/bharat1v2.png";
import DN1v2 from "../../assets/logo/DN1v2.png";
import PTv2 from "../../assets/logo/PTv2.png";
import quetv2 from "../../assets/logo/quetv2.png";

const partners = [
  {
    name: "BharatSkyTech",
    logo: BharatSkyTech,
    darkLogo: bharat1v2,
  },
  {
    name: "Drobonation",
    logo: Drobonation,
    darkLogo: DN1v2,
  },
  {
    name: "DronacharyaTech",
    logo: DronacharyaTech,
  },
  {
    name: "Parity InfoTech",
    logo: ParityInfoTech,
    darkLogo: PTv2,
  },
  {
    name: "Gorkha Rifles",
    logo: Gorkha_rifles,
  },
  {
    name: "Armoured Corps",
    logo: Armoured_Corps,
  },
  {
    name: "Officers Training Academy",
    logo: Officers_Training_Academy,
  },
  {
    name: "Quetzalcoatl",
    logo: quet,
    darkLogo: quetv2,
  },
  {
    name: "46 Armoured Regiment",
    logo: Indian_Armoured,
  },
  {
    name: "10 Sikh",
    logo: Sikh_Regiment,
  },
];

const PartnerLogo = ({ partner }) => {
  const hasDarkLogo = Boolean(partner.darkLogo);

  if (!hasDarkLogo) {
    return (
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-30 object-contain transition-all duration-300"
      />
    );
  }

  return (
    <>
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-30 object-contain transition-all duration-300 dark:hidden"
      />

      <img
        src={partner.darkLogo}
        alt={partner.name}
        className="hidden h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-30 object-contain transition-all duration-300 dark:block"
      />
    </>
  );
};

const Partners = () => {
  const loop = Array.from(
    { length: 12 },
    (_, i) => partners[i % partners.length]
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
              <div className="flex items-center justify-center opacity-70 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:scale-105">
                <PartnerLogo partner={p} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import footerWave from "../../assets/foot_back.png";
// import drone from "../../assets/footer.png";

// const cols = [
//   {
//     t: "Quick Links",
//     items: [
//       { label: "Home", to: "/" },
//       { label: "About", to: "/about" },
//       { label: "Mission", to: "/mission" },
//       { label: "Blog", to: "/blog" },
//       { label: "Careers", to: "/careers" },
//       { label: "Contact", to: "/contact" },
//     ],
//   },
//   {
//     t: "Services",
//     items: [
//       "Drone Surveillance",
//       "Mapping UAVs",
//       "Industrial Inspection",
//       "Payload Systems",
//       "Custom UAV Configuration",
//     ],
//   },
//   {
//     t: "Contact",
//     items: [
//       {
//         label: "sales@arcanumspace.com",
//         href: "mailto:sales@arcanumspace.com",
//       },
//       {
//         label: "+91 8004369347",
//         href: "tel:+918004369347",
//       },
//       {
//         label: "AH-1101, ANTRIKSH HEIGHTS, SECTOR 84, GURUGRAM, HARYANA",
//         href: "https://www.google.com/maps/search/?api=1&query=AH-1101%2C%20ANTRIKSH%20HEIGHTS%2C%20SECTOR%2084%2C%20GURUGRAM%2C%20HARYANA",
//         target: "_blank",
//       },
//     ],
//   },
// ];

// const Footer = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     setLoading(true);

//     formData.append("apiKey", import.meta.env.VITE_STATICFORMS_API_KEY);

//     try {
//       const res = await fetch("https://api.staticforms.dev/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (data.success) {
//         toast.success("Subscribed successfully!");
//         form.reset();
//       } else {
//         toast.error("Subscription failed!");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="relative bg-charcoal/40 overflow-hidden">
//       <img
//         src={footerWave}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-20 "
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
//         <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-8 lg:gap-6">
//           <div className="col-span-2 lg:col-span-2">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-8 h-8 shrink-0 border border-tactical relative flex items-center justify-center">
//                 <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
//               </div>

//               <span className="font-display text-base sm:text-lg font-bold tracking-widest wrap-break-word">
//                 Arcanumspace
//               </span>
//             </div>

//             <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
//               Advanced UAV systems engineered for intelligence, inspection, and
//               mission-critical deployment.
//             </p>

//             <form
//               onSubmit={handleSubscribe}
//               className="mt-4 flex w-full max-w-sm overflow-hidden border border-border"
//             >
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 placeholder="Enter Mobile Number"
//                 className="min-w-0 flex-1 bg-charcoal/40 px-3 py-3 text-sm focus:outline-none"
//               />

//               <input
//                 type="hidden"
//                 name="message"
//                 value="New footer subscription request"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-28.75 shrink-0 bg-tactical px-3 py-3 text-primary-foreground font-mono text-[10px] sm:text-xs tracking-widest uppercase hover:bg-tactical/80 transition-colors disabled:opacity-50"
//               >
//                 {loading ? "..." : "Subscribe"}
//               </button>
//             </form>
//           </div>

//           {cols.map((c) => {
//             const isContact = c.t.toLowerCase() === "contact";

//             return (
//               <div
//                 key={c.t}
//                 className={`min-w-0 ${
//                   isContact ? "col-span-2 lg:col-span-1" : "col-span-1"
//                 }`}
//               >
//                 <div className="label-mono text-tactical text-[10px] mb-3">
//                   ▌ {c.t.toUpperCase()}
//                 </div>

//                 <ul className="space-y-2">
//                   {c.items.map((it) => (
//                     <li
//                       key={typeof it === "string" ? it : it.label}
//                       className="min-w-0"
//                     >
//                       {typeof it === "string" ? (
//                         <a
//                           href="#"
//                           className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed wrap-break-word"
//                         >
//                           {it}
//                         </a>
//                       ) : it.to ? (
//                         <Link
//                           to={it.to}
//                           className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed wrap-break-word"
//                         >
//                           {it.label}
//                         </Link>
//                       ) : (
//                         <a
//                           href={it.href}
//                           target={it.target || undefined}
//                           rel={
//                             it.target === "_blank"
//                               ? "noopener noreferrer"
//                               : undefined
//                           }
//                           className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed wrap-break-word"
//                         >
//                           {it.label}
//                         </a>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-5 sm:mt-6 pt-3 border-t border-border">
//           <div className="flex flex-col items-center gap-3 text-center">
//             <div className="label-mono text-[9px] sm:text-[10px] leading-relaxed max-w-full">
//               © 2026 Arcanumspace. All rights reserved
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import footerWave from "../../assets/foot_back.png";

const cols = [
  {
    t: "Quick Links",
    items: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Mission", to: "/mission" },
      { label: "Blog", to: "/blog" },
      { label: "Careers", to: "/careers" },
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
    items: [
      {
        label: "sales@arcanumspace.com",
        href: "mailto:sales@arcanumspace.com",
      },
      {
        label: "+91 8004369347",
        href: "tel:+918004369347",
      },
      {
        label: "AH-1101, ANTRIKSH HEIGHTS, SECTOR 84, GURUGRAM, HARYANA",
        href: "https://www.google.com/maps/search/?api=1&query=AH-1101%2C%20ANTRIKSH%20HEIGHTS%2C%20SECTOR%2084%2C%20GURUGRAM%2C%20HARYANA",
        target: "_blank",
      },
    ],
  },
];

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    formData.append("apiKey", import.meta.env.VITE_STATICFORMS_API_KEY);

    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Subscribed successfully!");
        form.reset();
      } else {
        toast.error("Subscription failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-visible border-t border-border bg-charcoal/40">
      {/* Footer Background Wave */}
      <img
        src={footerWave}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-8 lg:gap-6">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 shrink-0 border border-tactical relative flex items-center justify-center">
                <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
              </div>

              <span className="font-display text-base sm:text-lg font-bold tracking-widest wrap-break-word">
                Arcanumspace
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Advanced UAV systems engineered for intelligence, inspection, and
              mission-critical deployment.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex w-full max-w-sm overflow-hidden border border-border"
            >
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter Mobile Number"
                className="min-w-0 flex-1 bg-charcoal/40 px-3 py-3 text-sm focus:outline-none"
              />

              <input
                type="hidden"
                name="message"
                value="New footer subscription request"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-28.75 shrink-0 bg-tactical px-3 py-3 text-primary-foreground font-mono text-[10px] sm:text-xs tracking-widest uppercase hover:bg-tactical/80 transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>

          {cols.map((c) => {
            const isContact = c.t.toLowerCase() === "contact";

            return (
              <div
                key={c.t}
                className={`min-w-0 ${
                  isContact ? "col-span-2 lg:col-span-1" : "col-span-1"
                }`}
              >
                <div className="label-mono text-tactical text-[10px] mb-3">
                  ▌ {c.t.toUpperCase()}
                </div>

                <ul className="space-y-2">
                  {c.items.map((it) => (
                    <li
                      key={typeof it === "string" ? it : it.label}
                      className="min-w-0"
                    >
                      {typeof it === "string" ? (
                        <a
                          href="#"
                          className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed wrap-break-word"
                        >
                          {it}
                        </a>
                      ) : it.to ? (
                        <Link
                          to={it.to}
                          className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed wrap-break-word"
                        >
                          {it.label}
                        </Link>
                      ) : (
                        <a
                          href={it.href}
                          target={it.target || undefined}
                          rel={
                            it.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block text-sm text-muted-foreground hover:text-tactical transition-colors leading-relaxed wrap-break-word"
                        >
                          {it.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-5 sm:mt-6 pt-3 border-t border-border">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="label-mono text-[9px] sm:text-[10px] leading-relaxed max-w-full">
              © 2026 Arcanumspace. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

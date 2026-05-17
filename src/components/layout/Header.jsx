import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown, IoMenu } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { AiFillMoon } from "react-icons/ai";
import black_logo_v1 from "../../assets/logo.png";
import white_logo_v2 from "../../assets/logov2.png";
import { droneParts, drones, insideKits } from "../../data/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/blog", label: "Blog" },
];

const defenceLinks = [
  { to: "/products", label: "Drones" },
  { to: "/parts-kits", label: "Components" },
  { to: "/lab", label: "Defence Lab" },
  { to: "/agriculture", label: "Agriculture" },
];

const agricultureDrone = drones.find((drone) => drone.id === "agro-spray-x6");

const agricultureMenuItems = agricultureDrone
  ? [
      agricultureDrone,
      {
        ...agricultureDrone,
        id: `${agricultureDrone.id}-field-system`,
        name: "Agriculture Drone System",
        image: agricultureDrone.gallery?.[1] || agricultureDrone.image,
      },
    ]
  : [];

const productMenuSections = [
  {
    title: "Drones",
    to: "/products",
    items: drones
      .filter((drone) => drone.id !== "agro-spray-x6")
      .slice(0, 2)
      .map((drone) => ({ ...drone, to: `/drone/${drone.id}` })),
  },
  {
    title: "Components",
    to: "/parts-kits",
    items: droneParts
      .slice(0, 2)
      .map((part) => ({ ...part, to: "/parts-kits" })),
  },
  {
    title: "Defence Lab",
    to: "/lab",
    items: insideKits.slice(0, 1).map((kit) => ({ ...kit, to: "/lab" })),
  },
  {
    title: "Agriculture",
    to: "/agriculture",
    items: agricultureMenuItems
      .slice(0, 1)
      .map((item) => ({ ...item, to: "/agriculture" })),
  },
];

const navClass = ({ isActive }) =>
  `font-mono tracking-widest uppercase transition-colors ${
    isActive ? "text-tactical" : "text-muted-foreground hover:text-tactical"
  }`;

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [defenceDropdownOpen, setDefenceDropdownOpen] = useState(false);
  const defenceMenuRef = useRef(null);
  const defenceCloseTimeoutRef = useRef(null);

  const defenceActive = defenceLinks.some(
    (link) => pathname === link.to || pathname.startsWith(`${link.to}/`),
  );

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle("dark", storedTheme === "dark");

    return storedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDefenceDropdownOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      window.clearTimeout(defenceCloseTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        defenceMenuRef.current &&
        !defenceMenuRef.current.contains(e.target)
      ) {
        setDefenceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");

      return nextTheme;
    });
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
    setDefenceDropdownOpen(false);
  };

  const openDefenceDropdown = () => {
    window.clearTimeout(defenceCloseTimeoutRef.current);
    setDefenceDropdownOpen(true);
  };

  const scheduleDefenceDropdownClose = () => {
    window.clearTimeout(defenceCloseTimeoutRef.current);
    defenceCloseTimeoutRef.current = window.setTimeout(() => {
      setDefenceDropdownOpen(false);
    }, 140);
  };

  const toggleDefenceDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const trigger = e.currentTarget;
    window.clearTimeout(defenceCloseTimeoutRef.current);

    setDefenceDropdownOpen((prev) => {
      if (prev) {
        trigger.blur();
      }

      return !prev;
    });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 relative flex items-center justify-center">
            <img
              src={theme === "dark" ? white_logo_v2 : black_logo_v1}
              alt="Arcanumspace Logo"
            />
            {/* <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
            <span className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-tactical" />
            <span className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-tactical" /> */}
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-widest">
              Arcanumspace
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            className={(state) => `${navClass(state)} text-xs py-2`}
          >
            Home
          </NavLink>

          <div
            ref={defenceMenuRef}
            className="relative"
            onMouseEnter={openDefenceDropdown}
            onMouseLeave={scheduleDefenceDropdownClose}
          >
            <NavLink
              to="/products"
              onClick={toggleDefenceDropdown}
              aria-haspopup="true"
              aria-expanded={defenceDropdownOpen}
              className={() =>
                `font-mono tracking-widest uppercase transition-colors text-xs py-2 flex items-center gap-1.5 ${
                  defenceActive
                    ? "text-tactical"
                    : "text-muted-foreground hover:text-tactical"
                }`
              }
            >
              Products
              <IoChevronDown
                className={`text-sm transition-transform duration-300 ${
                  defenceDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </NavLink>

            <div
              className={`fixed left-1/2 top-18 z-50 w-[min(1120px,calc(100vw-3rem))] -translate-x-1/2 border border-border bg-background/98 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out ${
                defenceDropdownOpen
                  ? "visible translate-x-[-50%] translate-y-0 opacity-100"
                  : "invisible translate-x-[-50%] -translate-y-2 opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-[0.95fr_1.05fr] gap-8 px-5 py-5 lg:px-6">
                <div>
                  <div className="label-mono mb-2 text-[10px] text-tactical">
                    Products
                  </div>
                  <div className="mb-4 font-display text-2xl font-bold leading-none">
                    Products
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {productMenuSections.slice(0, 2).map((section) => (
                      <div key={section.title} className="min-w-0">
                        <div className="mb-2 border-l-2 border-tactical pl-3 font-display text-lg font-bold leading-none">
                          {section.title}
                        </div>

                        <div className="space-y-3">
                          {section.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.to}
                              onClick={() => setDefenceDropdownOpen(false)}
                              className="group/card block border border-border bg-charcoal/45 p-2.5 transition-colors hover:border-tactical/60 hover:bg-charcoal"
                            >
                              <div className="aspect-[16/9] overflow-hidden border border-border bg-background">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-contain p-2.5"
                                  loading="lazy"
                                />
                              </div>
                              <div className="mt-2.5 font-display text-sm font-semibold leading-tight transition-colors group-hover/card:text-tactical">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>

                        <Link
                          to={section.to}
                          onClick={() => setDefenceDropdownOpen(false)}
                          className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-tactical"
                        >
                          View More <span aria-hidden>&rarr;</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="label-mono mb-2 text-[10px] text-tactical">
                    Explore
                  </div>
                  <div className="mb-4 font-display text-2xl font-bold leading-none">
                    Applications
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {productMenuSections.slice(2).map((section) => {
                      const item = section.items[0];

                      return (
                        <Link
                          key={section.title}
                          to={section.to}
                          onClick={() => setDefenceDropdownOpen(false)}
                          className="group/card block min-w-0 border border-border bg-charcoal/45 p-2.5 transition-colors hover:border-tactical/60 hover:bg-charcoal"
                        >
                          <div className="mb-2 border-l-2 border-tactical pl-3 font-display text-lg font-bold leading-none">
                            {section.title}
                          </div>
                          <div className="aspect-[16/9] overflow-hidden border border-border bg-background">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-contain p-2.5"
                              loading="lazy"
                            />
                          </div>
                          <div className="mt-2.5 font-display text-sm font-semibold leading-tight transition-colors group-hover/card:text-tactical">
                            {item.name}
                          </div>
                          <div className="mt-3 inline-flex items-center gap-2 border-t border-border pt-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover/card:text-tactical">
                            View More <span aria-hidden>&rarr;</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={(state) => `${navClass(state)} text-xs py-2`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 cursor-pointer group"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            <div className="text-xl transition-transform duration-300 group-hover:rotate-12">
              {theme === "light" ? (
                <IoIosSunny className="text-yellow-400" />
              ) : (
                <AiFillMoon className="text-blue-400" />
              )}
            </div>

            <span className="label-mono text-[10px] uppercase">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>

          <Link to="/contact" className="btn-tactical px-4! py-2.5!">
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`lg:hidden border border-border flex items-center justify-center transition-all duration-300 ${
            scrolled ? "w-9 h-9 rounded-full" : "w-10 h-10 rounded-none"
          }`}
          onPointerDown={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <IoMdClose className="text-2xl text-foreground pointer-events-none" />
          ) : (
            <IoMenu className="text-2xl text-foreground pointer-events-none" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-6 py-6 flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={(state) => `${navClass(state)} text-sm`}
            >
              Home
            </NavLink>

            <div className="border-y border-border py-4">
              <div className="mb-3 flex items-center justify-between font-mono text-sm uppercase tracking-widest text-foreground">
                <span>Products</span>
                <IoChevronDown className="text-base text-tactical" />
              </div>

              <div className="flex flex-col gap-3 pl-4">
                {defenceLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={closeMenu}
                    className={(state) => `${navClass(state)} text-xs`}
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {links.slice(1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={closeMenu}
                className={(state) => `${navClass(state)} text-sm`}
              >
                {l.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className="font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-tactical text-left flex items-center gap-2"
            >
              {theme === "light" ? (
                <>
                  <AiFillMoon className="text-blue-400 text-lg" />
                  Switch to Dark
                </>
              ) : (
                <>
                  <IoIosSunny className="text-yellow-400 text-lg" />
                  Switch to Light
                </>
              )}
            </button>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn-tactical mt-2 justify-center"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

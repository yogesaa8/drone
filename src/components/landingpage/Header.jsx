import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown, IoMenu } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { AiFillMoon } from "react-icons/ai";
import logo from "../../assets/logo.png"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/blog", label: "Blog" },
];

const defenceLinks = [
  { to: "/products", label: "Products" },
  { to: "/parts-kits", label: "Parts & Kit" },
  { to: "/lab", label: "Lab" },
];

const navClass = ({ isActive }) =>
  `font-mono tracking-widest uppercase transition-colors ${
    isActive ? "text-tactical" : "text-muted-foreground hover:text-tactical"
  }`;

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const defenceActive = defenceLinks.some(
    (link) => pathname === link.to || pathname.startsWith(`${link.to}/`)
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
          <img src={logo} alt="Arcanum Space Logo" />
            {/* <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
            <span className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-tactical" />
            <span className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-tactical" /> */}
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-widest">
              ARCANUM
            </span>
            <span className="label-mono text-[9px] mt-0.5">
              TACTICAL UAV SYS
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

          <div className="group relative">
            <NavLink
              to="/products"
              className={() =>
                `font-mono tracking-widest uppercase transition-colors text-xs py-2 flex items-center gap-1.5 ${
                  defenceActive
                    ? "text-tactical"
                    : "text-muted-foreground hover:text-tactical"
                }`
              }
            >
              Defence
              <IoChevronDown className="text-sm transition-transform group-hover:rotate-180" />
            </NavLink>

            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-border bg-background/95 backdrop-blur-md shadow-xl">
                {defenceLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                        isActive
                          ? "bg-tactical/10 text-tactical"
                          : "text-muted-foreground hover:bg-charcoal hover:text-tactical"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
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
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
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

          <Link to="/contact" className="btn-tactical !px-4 !py-2.5">
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
                <span>Defence</span>
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

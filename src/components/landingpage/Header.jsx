import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { AiFillMoon } from "react-icons/ai";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/blog", label: "Blog" },
];

const navClass = ({ isActive }) =>
  `font-mono tracking-widest uppercase transition-colors ${
    isActive ? "text-tactical" : "text-muted-foreground hover:text-tactical"
  }`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
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
          <div className="w-8 h-8 border border-tactical relative flex items-center justify-center">
            <div className="w-2 h-2 bg-tactical animate-hud-pulse" />
            <span className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-tactical" />
            <span className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-tactical" />
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
          {links.map((l) => (
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
          <div
            onClick={toggleTheme}
            className="flex items-center gap-2 cursor-pointer group"
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
          </div>

          <Link to="/contact" className="btn-tactical py-2.5! px-4!">
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
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
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

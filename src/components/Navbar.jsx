import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { profile } from "../data/portfolio";

const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {profile.name.split(" ")[0]}
          <span className="text-gradient">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const id = l.toLowerCase();
            const isActive = active === id;
            return (
              <li key={l}>
                <a
                  href={`#${id}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {l}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-white/10"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full text-slate-700 transition hover:bg-slate-200/60 md:hidden dark:text-slate-200 dark:hover:bg-white/10"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-slate-200 bg-white/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden dark:border-white/10 dark:bg-slate-950/95 ${
          open ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 font-medium ${
                  active === l.toLowerCase()
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

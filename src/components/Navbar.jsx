import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiX,
} from "react-icons/hi";
import { applyTheme } from "../utils/theme";
import { site } from "../data/siteData";

const NAV_LINKS = [
  { id: "what-i-do", label: "What I Do" },
  { id: "about", label: "About Me" },
  { id: "certifications", label: "Credentials" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Connect" },
];

const SCROLL_OFFSET = 88;

export default function Navbar() {
  const [elevated, setElevated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true,
  );

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const meta = document.getElementById("theme-color-meta");
    if (meta) meta.setAttribute("content", isDark ? "#0D0D0D" : "#FAFAFA");
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next ? "dark" : "light");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - SCROLL_OFFSET,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="section-inset fixed top-2 left-0 right-0 z-50 flex flex-col items-center pointer-events-none sm:top-3"
    >
      <motion.nav
        className={`pointer-events-auto page-container flex min-h-[2.75rem] items-center justify-between gap-2 rounded-full border border-foreground/10 bg-nav-surface/90 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-shadow duration-300 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:min-h-[3rem] sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 ${
          elevated
            ? "shadow-[0_12px_24px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
            : ""
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="font-wordmark group flex shrink-0 items-center rounded-full px-0.5 py-0.5 outline-none ring-accent/0 transition hover:ring-2 focus-visible:ring-2 focus-visible:ring-accent/50"
          aria-label="Home"
        >
          <span className="relative pb-0.5 text-[clamp(1.05rem,2.8vw,1.35rem)] leading-[0.95] tracking-[0.02em] text-foreground antialiased drop-shadow-[0_1px_10px_rgba(0,0,0,0.2)] transition duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_14px_rgb(var(--accent)_/_0.3)] dark:drop-shadow-[0_1px_12px_rgba(0,0,0,0.45)] sm:text-[clamp(1.1rem,2.5vw,1.45rem)]">
            {site.name}
          </span>
        </button>

        <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-2.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent/10 hover:text-accent lg:px-3.5 lg:text-[0.9375rem]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
          <motion.button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.04] text-base text-foreground transition hover:border-accent/35 hover:bg-foreground/[0.07]"
            whileTap={{ scale: 0.95 }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <HiOutlineSun aria-hidden />
            ) : (
              <HiOutlineMoon aria-hidden />
            )}
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden items-center gap-1.5 rounded-full border border-foreground/12 bg-elevated px-2.5 py-1 text-[12px] font-medium text-foreground/95 transition hover:border-accent/40 hover:bg-foreground/[0.04] sm:inline-flex lg:gap-2 lg:px-3 lg:py-1.5 lg:text-[13px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="hidden lg:inline">{site.availabilityBadge}</span>
            <span className="lg:hidden">Available</span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <TbArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </motion.button>
          <motion.button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.05] text-lg text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto page-container relative mt-3 overflow-hidden rounded-3xl border border-foreground/10 bg-nav-surface/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="w-full rounded-2xl px-4 py-3 text-left text-base font-medium text-foreground/95 transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <motion.button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-foreground/12 bg-elevated px-4 py-3 text-sm font-semibold text-foreground"
              whileTap={{ scale: 0.99 }}
            >
              {site.availabilityBadge}
              <TbArrowUpRight className="h-5 w-5 text-accent" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

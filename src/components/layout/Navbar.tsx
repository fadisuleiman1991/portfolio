import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import ThemeToggle from "../ui/ThemeToggle";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const SECTIONS = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "activities",
  "contact",
] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy([...SECTIONS]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-fg/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-fg hover:text-accent transition-colors"
        >
          Fadi<span className="text-accent">.</span>Suleiman
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {SECTIONS.map((s) => {
            const isActive = active === s;
            return (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className={`px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-fg/70 hover:text-fg"
                  }`}
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-9 h-9 text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-fg/10 bg-bg/95 backdrop-blur-md">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 font-mono text-sm uppercase tracking-wider text-fg/80 hover:text-accent"
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-4 flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

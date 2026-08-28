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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 border-fg/10 border-b backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-10">
        <a
          href="#top"
          className="text-fg hover:text-accent font-serif text-lg tracking-tight transition-colors"
        >
          Fadi<span className="text-accent">.</span>Suleiman
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s;
            return (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className={`px-3 py-2 font-mono text-xs tracking-wider uppercase transition-colors ${
                    isActive ? "text-accent" : "text-fg/70 hover:text-fg"
                  }`}
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="text-fg inline-flex h-9 w-9 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-fg/10 bg-bg/95 border-t backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="text-fg/80 hover:text-accent block px-3 py-2 font-mono text-sm tracking-wider uppercase"
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 px-6 pb-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

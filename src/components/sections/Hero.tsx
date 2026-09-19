import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useCV } from "../../hooks/useCV";

const FLOATING_TAGS = [
  "React",
  "TypeScript",
  "Angular",
  "ASP.NET",
  "Docker",
  "Tailwind",
  "Jest",
  "Cypress",
  "Azure",
];

export default function Hero() {
  const { t } = useTranslation();
  const { cv } = useCV();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        {FLOATING_TAGS.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 1, delay: i * 0.1 },
              y: {
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              },
            }}
            className="absolute font-mono text-xs md:text-sm text-fg"
            style={{
              top: `${10 + ((i * 11) % 75)}%`,
              left: `${5 + ((i * 17) % 85)}%`,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div className="mx-auto max-w-6xl w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            {t("hero.greeting")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-fg"
          >
            {cv.personalInfo.name.split(" ").map((part, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="block"
              >
                {part}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-sm md:text-base text-accent"
          >
            // {cv.personalInfo.jobTitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl text-base md:text-lg text-fg/75 leading-relaxed"
          >
            {cv.personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-3 font-mono text-xs uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              <Mail size={16} />
              {t("hero.ctaContact")}
            </a>
            <a
              href="/cv-fadi-suleiman.pdf"
              download
              className="inline-flex items-center gap-2 border border-fg/30 text-fg px-5 py-3 font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} />
              {t("hero.ctaDownload")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-accent/50 translate-x-3 translate-y-3"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-fg/20 -translate-x-3 -translate-y-3"
            />
            <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden bg-fg/5">
              <img
                src={cv.personalInfo.profileImage}
                alt={cv.personalInfo.name}
                loading="eager"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-label={t("hero.scrollHint")}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 text-fg/50 hover:text-accent transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

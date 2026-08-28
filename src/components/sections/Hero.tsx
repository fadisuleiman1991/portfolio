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
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
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
            className="text-fg absolute font-mono text-xs md:text-sm"
            style={{
              top: `${10 + ((i * 11) % 75)}%`,
              left: `${5 + ((i * 17) % 85)}%`,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono text-xs tracking-[0.3em] uppercase"
          >
            {t("hero.greeting")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-fg font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
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
            className="text-accent font-mono text-sm md:text-base"
          >
            // {cv.personalInfo.jobTitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-fg/75 max-w-xl text-base leading-relaxed md:text-lg"
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
              className="bg-accent text-bg hover:bg-accent/90 inline-flex items-center gap-2 px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <Mail size={16} />
              {t("hero.ctaContact")}
            </a>
            <a
              href="/cv-fadi-suleiman.pdf"
              download
              className="border-fg/30 text-fg hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors"
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
          className="relative flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="border-accent/50 absolute -inset-3 translate-x-3 translate-y-3 border"
            />
            <div
              aria-hidden="true"
              className="border-fg/20 absolute -inset-3 -translate-x-3 -translate-y-3 border"
            />
            <div className="bg-fg/5 relative h-80 w-64 overflow-hidden md:h-96 md:w-72">
              <img
                src={cv.personalInfo.profileImage}
                alt={cv.personalInfo.name}
                loading="eager"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
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
        className="text-fg/50 hover:text-accent absolute start-1/2 bottom-8 -translate-x-1/2 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

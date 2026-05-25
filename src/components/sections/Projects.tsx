import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import { useCV } from "../../hooks/useCV";

export default function Projects() {
  const { t } = useTranslation();
  const { cv } = useCV();
  const [filter, setFilter] = useState<string | null>(null);

  const allTech = useMemo(() => {
    const set = new Set<string>();
    cv.projects.forEach((p) => p.technologies.forEach((tt) => set.add(tt)));
    return Array.from(set).sort();
  }, [cv.projects]);

  const visible = filter
    ? cv.projects.filter((p) => p.technologies.includes(filter))
    : cv.projects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-fg/[0.02]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.projectsEyebrow")}
          title={t("sections.projectsTitle")}
        />

        <div className="mb-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`px-3 py-1 font-mono text-xs uppercase tracking-wider border transition-colors ${
              filter === null
                ? "border-accent text-accent"
                : "border-fg/15 text-fg/60 hover:text-fg"
            }`}
          >
            All
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setFilter(tech)}
              className={`px-3 py-1 font-mono text-xs tracking-wider border transition-colors ${
                filter === tech
                  ? "border-accent text-accent"
                  : "border-fg/15 text-fg/60 hover:text-fg"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col gap-4 p-6 md:p-8 border border-fg/10 bg-bg hover:border-accent/40 hover:shadow-[0_20px_40px_-25px_rgba(245,158,11,0.4)] transition-all"
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <time className="font-mono text-[11px] uppercase tracking-wider text-fg/50">
                    {p.startDate} — {p.endDate}
                  </time>
                  <h3 className="mt-1 font-serif text-xl md:text-2xl text-fg">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("labels.liveDemo")}
                      className="text-fg/70 hover:text-accent"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {p.sourceCode && (
                    <a
                      href={p.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("labels.sourceCode")}
                      className="text-fg/70 hover:text-accent"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </header>

              <p className="text-fg/80 text-sm md:text-base">{p.description}</p>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg/50">
                  {t("labels.role")}
                </span>
                <span className="text-fg/85 text-sm">{p.role}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.technologies.map((tt) => (
                  <Tag key={tt}>{tt}</Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

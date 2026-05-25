import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import { useCV } from "../../hooks/useCV";

export default function About() {
  const { t } = useTranslation();
  const { cv } = useCV();

  const facts: Array<{ label: string; value: string }> = [
    { label: t("labels.birthDate"), value: cv.personalInfo.birthDate },
    { label: t("labels.birthPlace"), value: cv.personalInfo.birthPlace },
    { label: t("labels.nationality"), value: cv.personalInfo.nationality },
    { label: t("labels.location"), value: `${cv.contact.city}, ${cv.contact.country}` },
    { label: t("labels.maritalStatus"), value: cv.personalInfo.maritalStatus },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.aboutEyebrow")}
          title={t("sections.aboutTitle")}
        />

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-lg md:text-xl text-fg/85 leading-relaxed">
              {cv.intro}
            </p>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-fg/50">
                    {f.label}
                  </dt>
                  <dd className="text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              {t("labels.languages")}
            </h3>
            <ul className="flex flex-col gap-5">
              {cv.languages.map((lang, i) => (
                <li key={lang.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-fg">{lang.name}</span>
                    <span className="font-mono text-xs text-fg/60">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1 bg-fg/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + i * 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full bg-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

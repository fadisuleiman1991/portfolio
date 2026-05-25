import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import { useCV } from "../../hooks/useCV";

export default function Activities() {
  const { t } = useTranslation();
  const { cv } = useCV();

  return (
    <section id="activities" className="py-24 md:py-32 bg-fg/[0.02]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.activitiesEyebrow")}
          title={t("sections.activitiesTitle")}
        />

        <ul className="flex flex-col">
          {cv.activities.map((a, i) => (
            <motion.li
              key={a.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 border-t border-fg/10 last:border-b"
            >
              <div className="lg:col-span-3">
                <time className="font-mono text-xs uppercase tracking-wider text-fg/60">
                  {a.startDate} — {a.endDate}
                </time>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-serif text-xl md:text-2xl text-fg mb-3">
                  {a.name}
                </h3>
                {a.responsibilities && a.responsibilities.length > 0 && (
                  <ul className="flex flex-col gap-1.5 list-disc list-outside ms-5">
                    {a.responsibilities.map((r, ri) => (
                      <li key={ri} className="text-fg/75 text-sm md:text-base">
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

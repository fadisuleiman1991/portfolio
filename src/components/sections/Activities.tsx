import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import { useCV } from "../../hooks/useCV";

export default function Activities() {
  const { t } = useTranslation();
  const { cv } = useCV();

  return (
    <section id="activities" className="bg-fg/[0.02] py-24 md:py-32">
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
              className="border-fg/10 grid gap-4 border-t py-8 last:border-b lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-3">
                <time className="text-fg/60 font-mono text-xs tracking-wider uppercase">
                  {a.startDate} — {a.endDate}
                </time>
              </div>
              <div className="lg:col-span-9">
                <h3 className="text-fg mb-3 font-serif text-xl md:text-2xl">
                  {a.name}
                </h3>
                {a.responsibilities && a.responsibilities.length > 0 && (
                  <ul className="ms-5 flex list-outside list-disc flex-col gap-1.5">
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

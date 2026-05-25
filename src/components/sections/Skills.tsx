import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import { useCV } from "../../hooks/useCV";

export default function Skills() {
  const { t } = useTranslation();
  const { cv } = useCV();

  return (
    <section id="skills" className="py-24 md:py-32 bg-fg/[0.02]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.skillsEyebrow")}
          title={t("sections.skillsTitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {cv.skills.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="flex flex-col gap-4"
            >
              <header className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-fg">{group.name}</h3>
              </header>
              <div className="flex flex-wrap gap-2">
                {group.content.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.3,
                      delay: gi * 0.05 + si * 0.03,
                    }}
                  >
                    <Tag>{skill}</Tag>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

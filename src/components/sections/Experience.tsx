import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import Timeline, { type TimelineItem } from "../ui/Timeline";
import { useCV } from "../../hooks/useCV";

export default function Experience() {
  const { t } = useTranslation();
  const { cv } = useCV();

  const items: TimelineItem[] = cv.experiences.map((exp, i) => ({
    id: `exp-${i}`,
    title: exp.position,
    subtitle: exp.company,
    meta: exp.location,
    dateRange: `${exp.startDate} — ${exp.endDate}${
      exp.isSecondaryJob ? ` · ${t("labels.secondaryJob")}` : ""
    }`,
    muted: exp.isSecondaryJob,
    body:
      exp.responsibilities && exp.responsibilities.length > 0 ? (
        <ul className="flex flex-col gap-2 list-disc list-outside ms-5">
          {exp.responsibilities.map((r, ri) => (
            <li key={ri} className="text-fg/75 text-sm md:text-base">
              {r}
            </li>
          ))}
        </ul>
      ) : null,
  }));

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.experienceEyebrow")}
          title={t("sections.experienceTitle")}
        />
        <div className="max-w-3xl">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import Timeline, { type TimelineItem } from "../ui/Timeline";
import { useCV } from "../../hooks/useCV";

export default function Education() {
  const { t } = useTranslation();
  const { cv } = useCV();

  const educationItems: TimelineItem[] = cv.educations.map((e, i) => ({
    id: `edu-${i}`,
    title: e.name,
    subtitle: e.institution,
    meta: e.degree,
    dateRange: `${e.startDate} — ${e.endDate}`,
  }));

  const trainingItems: TimelineItem[] = cv.trainings.map((tr, i) => ({
    id: `tr-${i}`,
    title: tr.name,
    subtitle: tr.institution,
    dateRange:
      tr.startDate === tr.endDate
        ? tr.startDate
        : `${tr.startDate} — ${tr.endDate}`,
  }));

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.educationEyebrow")}
          title={t("sections.educationTitle")}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-8">
              {t("labels.education")}
            </h3>
            <Timeline items={educationItems} />
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-8">
              {t("labels.trainings")}
            </h3>
            <Timeline items={trainingItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

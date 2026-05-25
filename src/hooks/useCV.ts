import { useTranslation } from "react-i18next";
import { cvData as cvDe } from "../data/cv.de";
import { cvData as cvEn } from "../data/cv.en";
import { cvData as cvAr } from "../data/cv.ar";
import type { CV } from "../data/types";

const dataset: Record<string, CV> = {
  de: cvDe,
  en: cvEn,
  ar: cvAr,
};

export function useCV(): { cv: CV; lang: string; isRtl: boolean } {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "de").split("-")[0];
  const cv = dataset[lang] ?? cvDe;
  return { cv, lang, isRtl: lang === "ar" };
}

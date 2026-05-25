import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import de from "./locales/de.json";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED_LANGS = ["de", "en", "ar"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

const RTL_LANGS: SupportedLang[] = ["ar"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "de",
    lng: "de",
    supportedLngs: SUPPORTED_LANGS,
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: { escapeValue: false },
    returnNull: false,
  });

function applyDocumentLang(lng: string) {
  const lang = (SUPPORTED_LANGS.includes(lng as SupportedLang)
    ? lng
    : "de") as SupportedLang;
  const isRtl = RTL_LANGS.includes(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.dataset.lang = lang;
}

applyDocumentLang(i18n.language || "de");
i18n.on("languageChanged", applyDocumentLang);

export default i18n;

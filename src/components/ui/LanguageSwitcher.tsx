import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, type SupportedLang } from "../../i18n";

const LABELS: Record<SupportedLang, string> = {
  de: "DE",
  en: "EN",
  ar: "AR",
};

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = (i18n.language?.split("-")[0] || "de") as SupportedLang;

  return (
    <div
      role="group"
      aria-label={t("nav.home")}
      className="inline-flex items-center border border-fg/15 rounded-sm overflow-hidden font-mono text-xs"
    >
      {SUPPORTED_LANGS.map((lng) => {
        const isActive = lng === current;
        return (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={isActive}
            className={`px-2.5 py-1.5 transition-colors ${
              isActive
                ? "bg-accent text-bg"
                : "text-fg/70 hover:bg-fg/5 hover:text-fg"
            }`}
          >
            {LABELS[lng]}
          </button>
        );
      })}
    </div>
  );
}

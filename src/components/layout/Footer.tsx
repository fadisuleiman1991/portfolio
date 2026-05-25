import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, XingIcon } from "../ui/BrandIcons";
import { useCV } from "../../hooks/useCV";

export default function Footer() {
  const { t } = useTranslation();
  const { cv } = useCV();
  const year = new Date().getFullYear();

  const iconFor = (name: string) => {
    switch (name) {
      case "GitHub":
        return <GithubIcon size={16} />;
      case "LinkedIn":
        return <LinkedinIcon size={16} />;
      case "XING":
        return <XingIcon size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <footer className="border-t border-fg/10 bg-bg">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col gap-1">
          <p className="font-serif text-lg text-fg">{cv.personalInfo.name}</p>
          <p className="font-mono text-xs text-fg/60">
            © {year} {cv.personalInfo.name}. {t("footer.rights")}
          </p>
          <p className="font-mono text-xs text-fg/40">{t("footer.builtWith")}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${cv.contact.email}`}
            aria-label={t("labels.email")}
            className="text-fg/70 hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
          {cv.onlineProfiles.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="text-fg/70 hover:text-accent transition-colors"
            >
              {iconFor(p.name)}
            </a>
          ))}
          <Link
            to="/impressum"
            className="font-mono text-xs uppercase tracking-wider text-fg/60 hover:text-accent ms-4"
          >
            {t("nav.impressum")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

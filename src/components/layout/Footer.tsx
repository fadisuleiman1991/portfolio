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
    <footer className="border-fg/10 bg-bg border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex flex-col gap-1">
          <p className="text-fg font-serif text-lg">{cv.personalInfo.name}</p>
          <p className="text-fg/60 font-mono text-xs">
            © {year} {cv.personalInfo.name}. {t("footer.rights")}
          </p>
          <p className="text-fg/40 font-mono text-xs">
            {t("footer.builtWith")}
          </p>
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
            className="text-fg/60 hover:text-accent ms-4 font-mono text-xs tracking-wider uppercase"
          >
            {t("nav.impressum")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

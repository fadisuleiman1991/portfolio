import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          to="/"
          className="text-fg/60 hover:text-accent mb-10 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft size={14} />
          {t("impressum.backHome")}
        </Link>

        <h1 className="text-fg mb-6 font-serif text-4xl md:text-5xl">
          {t("impressum.title")}
        </h1>

        <p className="text-fg/75 mb-10">{t("impressum.placeholder")}</p>

        <section className="text-fg/80 space-y-6">
          <div>
            <h2 className="text-accent mb-2 font-mono text-xs tracking-[0.3em] uppercase">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Fadi Suleiman
              <br />
              Friedrich-Ebert-Str. 254
              <br />
              47139 Duisburg
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-accent mb-2 font-mono text-xs tracking-[0.3em] uppercase">
              Kontakt
            </h2>
            <p>
              E-Mail: info@fadisuleiman.com
              <br />
              Telefon: +49 1577 3594045
            </p>
          </div>

          <div>
            <h2 className="text-accent mb-2 font-mono text-xs tracking-[0.3em] uppercase">
              Verantwortlich für den Inhalt
            </h2>
            <p>Fadi Suleiman</p>
          </div>

          <p className="text-fg/50 border-fg/10 border-t pt-6 text-xs">
            Hinweis: Diese Angaben sind ein Platzhalter und müssen vor
            Veröffentlichung rechtssicher vervollständigt werden.
          </p>
        </section>
      </div>
    </main>
  );
}

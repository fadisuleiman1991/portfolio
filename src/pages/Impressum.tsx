import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { useCV } from "../hooks/useCV";

export default function Impressum() {
  const { t } = useTranslation();
  const { cv } = useCV();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg/60 hover:text-accent mb-10"
        >
          <ArrowLeft size={14} />
          {t("impressum.backHome")}
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-fg mb-6">
          {t("impressum.title")}
        </h1>

        <section className="space-y-6 text-fg/80">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-2">
              {t("impressum.providerInformation")}
            </h2>

            <address className="not-italic">
              {cv.personalInfo.name}
              <br />
              {cv.contact.address.street} {cv.contact.address.hausnumber}
              <br />
              {cv.contact.address.postalCode} {cv.contact.address.city}
              <br />
              {cv.contact.address.country}
            </address>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-2">
              {t("sections.contactTitle")}
            </h2>

            <p>
              {t("labels.email")}:{" "}
              <a
                href={`mailto:${cv.contact.email}`}
                className="hover:text-accent"
              >
                {cv.contact.email}
              </a>
              <br />
              {t("labels.phone")}:{" "}
              <a href={`tel:${cv.contact.phone}`} className="hover:text-accent">
                {cv.contact.phone}
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

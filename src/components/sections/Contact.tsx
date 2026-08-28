import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, XingIcon } from "../ui/BrandIcons";
import SectionTitle from "../ui/SectionTitle";
import { useCV } from "../../hooks/useCV";

export default function Contact() {
  const { t } = useTranslation();
  const { cv } = useCV();

  const iconFor = (name: string) => {
    switch (name) {
      case "GitHub":
        return <GithubIcon size={18} />;
      case "LinkedIn":
        return <LinkedinIcon size={18} />;
      case "XING":
        return <XingIcon size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: t("labels.email"),
      value: cv.contact.email,
      href: `mailto:${cv.contact.email}`,
    },
    {
      icon: <Phone size={18} />,
      label: t("labels.phone"),
      value: cv.contact.phone,
      href: `tel:${cv.contact.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: <MapPin size={18} />,
      label: t("labels.location"),
      value: `${cv.contact.city}, ${cv.contact.country}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle
          eyebrow={t("sections.contactEyebrow")}
          title={t("sections.contactTitle")}
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            {contactItems.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-fg/10 hover:border-accent/40 flex items-center gap-5 border p-5 transition-colors"
              >
                <span className="bg-accent/10 text-accent flex h-10 w-10 items-center justify-center rounded-sm">
                  {c.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-fg/50 font-mono text-[11px] tracking-wider uppercase">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-fg hover:text-accent transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-fg">{c.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-accent mb-6 font-mono text-xs tracking-[0.3em] uppercase">
              Online
            </h3>
            <ul className="flex flex-col gap-3">
              {cv.onlineProfiles.map((p, i) => (
                <motion.li
                  key={p.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-fg/10 hover:border-accent/40 flex items-center justify-between gap-4 border p-4 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-fg/70 group-hover:text-accent">
                        {iconFor(p.name)}
                      </span>
                      <span className="text-fg group-hover:text-accent">
                        {p.name}
                      </span>
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-fg/40 group-hover:text-accent"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  align?: "start" | "center";
  id?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  align = "start",
  id,
}: Props) {
  return (
    <header
      id={id}
      className={`mb-12 flex flex-col gap-3 md:mb-16 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="text-accent font-mono text-xs tracking-[0.3em] uppercase"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-fg font-serif text-4xl leading-tight md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-accent h-px"
        aria-hidden="true"
      />
    </header>
  );
}

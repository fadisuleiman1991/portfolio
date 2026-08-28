import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  dateRange: string;
  body?: ReactNode;
  muted?: boolean;
}

interface Props {
  items: TimelineItem[];
}

export default function Timeline({ items }: Props) {
  return (
    <ol className="border-fg/10 relative ms-4 border-s">
      {items.map((item, i) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`relative ps-6 pb-10 last:pb-0 ${
            item.muted ? "opacity-70" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className={`ring-bg absolute -start-[7px] top-1 h-3 w-3 rounded-full ring-4 ${
              item.muted ? "bg-fg/30" : "bg-accent"
            }`}
          />
          <div className="flex flex-col gap-1">
            <time className="text-fg/60 font-mono text-xs tracking-wider uppercase">
              {item.dateRange}
            </time>
            <h3 className="text-fg font-serif text-xl md:text-2xl">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-fg/70 text-sm">
                {item.subtitle}
                {item.meta ? (
                  <span className="text-fg/40"> · {item.meta}</span>
                ) : null}
              </p>
            )}
            {item.body && <div className="text-fg/80 mt-3">{item.body}</div>}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

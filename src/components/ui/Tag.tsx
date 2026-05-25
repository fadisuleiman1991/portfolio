interface Props {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export default function Tag({ children, variant = "default" }: Props) {
  const base =
    "inline-flex items-center px-3 py-1 font-mono text-xs tracking-wide rounded-sm transition-colors";
  const styles: Record<string, string> = {
    default:
      "bg-fg/5 text-fg/80 border border-fg/10 hover:border-accent/40 hover:text-accent",
    accent: "bg-accent/15 text-accent border border-accent/30",
    outline: "border border-fg/20 text-fg/70 hover:border-accent hover:text-accent",
  };
  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}

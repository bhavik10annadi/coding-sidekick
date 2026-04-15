import { motion } from "framer-motion";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function BentoCard({ title, description, icon, className = "", children }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_var(--color-glow)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
          {icon}
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {children}
      </div>
    </motion.div>
  );
}

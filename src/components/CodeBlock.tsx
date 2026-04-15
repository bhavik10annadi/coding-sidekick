import { motion } from "framer-motion";

export function CodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="rounded-xl border border-border bg-muted/50 p-4 font-mono text-xs leading-relaxed"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-2/60" />
      </div>
      <div className="space-y-1">
        <div><span className="text-primary">const</span> <span className="text-chart-2">result</span> = <span className="text-primary">await</span> <span className="text-chart-3">analyze</span>(code);</div>
        <div className="text-muted-foreground">{"// ✨ CodeCompanion suggests:"}</div>
        <div><span className="text-chart-2">result</span>.<span className="text-chart-3">suggestions</span>.<span className="text-chart-3">map</span>(<span className="text-primary">fix</span> {"=>"}</div>
        <div className="pl-4"><span className="text-primary">fix</span>.<span className="text-chart-3">apply</span>()</div>
        <div>);</div>
      </div>
    </motion.div>
  );
}

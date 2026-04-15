import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/BentoCard";
import { CodeBlock } from "@/components/CodeBlock";
import { PricingSection } from "@/components/PricingSection";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CodeCompanion — AI-Powered Developer Tool" },
      { name: "description", content: "Real-time code suggestions, interactive debugging, and personalized learning. Write better code, faster." },
    ],
  }),
});

function Index() {
  const { user, signOut, isLoading } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-heading text-sm font-bold text-primary-foreground">&lt;/&gt;</span>
            </div>
            <span className="font-heading text-lg font-semibold text-foreground">CodeCompanion</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#how" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
            <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
            {!isLoading && (
              user ? (
                <button
                  onClick={() => signOut()}
                  className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_var(--color-glow)]"
                >
                  Log In
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-chart-2" />
              Now in public beta
            </div>
            <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
              Code smarter,{" "}
              <span className="bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
                not harder
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Real-time code suggestions, interactive debugging, and personalized learning — all powered by AI that understands your codebase.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="rounded-xl bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_-5px_var(--color-glow)]">
              Start Free Trial
            </button>
            <button className="rounded-xl border border-border bg-secondary px-8 py-3.5 font-heading text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-16 max-w-lg"
          >
            <CodeBlock />
          </motion.div>
        </div>
      </section>

      {/* Bento Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Everything you need to ship faster
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Three core pillars designed to accelerate your development workflow.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Large card */}
            <BentoCard
              className="md:col-span-2 md:row-span-2"
              icon={<BrainIcon />}
              title="Context-Aware Suggestions"
              description="CodeCompanion understands your entire codebase — imports, types, patterns — and offers suggestions that actually fit. No more generic snippets."
            >
              <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4">
                <div className="space-y-3">
                  <SuggestionLine label="Type inference" confidence={95} />
                  <SuggestionLine label="Pattern matching" confidence={88} />
                  <SuggestionLine label="Import resolution" confidence={92} />
                </div>
              </div>
            </BentoCard>

            {/* Right column */}
            <BentoCard
              icon={<BugIcon />}
              title="Interactive Debugging"
              description="Step through errors with plain-English explanations. Understand the why, not just the what."
            />
            <BentoCard
              icon={<BookIcon />}
              title="Personalized Learning"
              description="Tracks your common mistakes and surfaces targeted resources to help you improve over time."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">How it works</h2>
            <p className="mt-4 text-muted-foreground">Three steps to better code.</p>
          </motion.div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { step: "01", title: "Install", desc: "Add the extension to your editor in one click." },
              { step: "02", title: "Code", desc: "Write as you normally do — suggestions appear in real time." },
              { step: "03", title: "Learn", desc: "Review insights and improve with each session." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="font-heading text-4xl font-bold text-primary/30 text-slate-300">{item.step}</span>
                <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-12 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ready to level up?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join thousands of developers writing better code with CodeCompanion.
          </p>
          <button className="mt-8 rounded-xl bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_-5px_var(--color-glow)]">
            Get Started Free
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
              <span className="font-heading text-[10px] font-bold text-primary-foreground">&lt;/&gt;</span>
            </div>
            <span className="font-heading text-sm font-semibold text-foreground">CodeCompanion</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 CodeCompanion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SuggestionLine({ label, confidence }: { label: string; confidence: number }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-surface-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${confidence}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full rounded-full bg-primary"
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{confidence}%</span>
      </div>
    </div>
  );
}

function BrainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function BugIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 2 1.88 1.88" /><path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" /><path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" /><path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" /><path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" /><path d="M8 11h8" />
    </svg>
  );
}

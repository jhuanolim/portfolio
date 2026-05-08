"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Years in Tech", value: "5+" },
  { label: "Domains", value: "Health · SaaS" },
  { label: "Current Role", value: "Biz Analyst" },
  { label: "Open to", value: "SG · Remote" },
];

export default function HomePage() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center px-6 py-12">

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Open to Strategy & Product roles · Based in Singapore
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Zac</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-5 text-xl font-medium text-foreground/70 sm:text-2xl"
        >
          Tech-savvy Strategist. Data-driven Decision Maker.{" "}<br />
          <span className="text-primary">Building the next great product.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I turn complex systems and messy data into clear strategy and
          measurable outcomes — bridging the gap between technical teams and
          business leadership across SaaS and Digital Health.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(158_64%_52%/0.3)] hover:shadow-[0_0_30px_hsl(158_64%_52%/0.45)] transition-shadow"
          >
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-border hover:border-primary/40 hover:bg-primary/8 hover:text-foreground transition-all"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 mt-10 grid grid-cols-2 gap-px sm:grid-cols-4 rounded-2xl overflow-hidden border border-border bg-border"
      >
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="bg-card px-6 py-5 group hover:bg-secondary/60 transition-colors"
          >
            <p className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { stats, skillsData } from "@/constants";
import { Hero3DBackground } from "@/components/portfolio/hero-3d-background";
import { HeroTerminal } from "@/components/portfolio/hero-terminal";
import { WordRotate } from "@/components/ui/word-rotate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Expert",
  "Mobile App Builder",
  "DevOps Engineer",
];

const HIGHLIGHTS = [
  "Production-ready",
  "Performance optimized",
  "Clean architecture",
  "Responsive design",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function GlassCard({
  children,
  className,
  beam = false,
}: {
  children: React.ReactNode;
  className?: string;
  beam?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden rounded-2xl",
        className
      )}
    >
      {beam && (
        <BorderBeam
          size={120}
          duration={10}
          colorFrom="#7c3aed"
          colorTo="#38bdf8"
          borderWidth={1}
        />
      )}
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-20 min-h-screen bg-background pb-2 dark:bg-[#050508]"
    >
      <Hero3DBackground />

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-20%,rgba(124,58,237,0.18),transparent)]" />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/90 dark:from-[#050508]/40 dark:to-[#050508]/90" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 pb-8 sm:px-5 sm:pt-24 lg:px-10 lg:pt-28 lg:pb-10">
        <div className="grid w-full items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-10">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.05)}>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Open to work
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/35">
                  <MapPin className="h-3 w-3" />
                  Lahore, PK
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/35">
                  <Clock className="h-3 w-3" />
                  24h response
                </span>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <p className="font-serif-accent mb-1 text-lg italic text-violet-300/70 md:text-xl">
                Hello, world — I&apos;m
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="relative mb-4">
              <h1 className="font-display leading-[0.9] tracking-[-0.04em]">
                <span className="block text-[clamp(2.5rem,9vw,6.5rem)] font-extrabold text-foreground dark:text-white sm:text-[clamp(3rem,9vw,6.5rem)]">
                  Muhammad
                </span>
                <span className="block text-[clamp(2.75rem,11vw,8rem)] font-extrabold text-foreground dark:text-white sm:text-[clamp(3.5rem,11vw,8rem)]">
                  Altaf
                </span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mb-4 space-y-2">
              <p className="font-serif-accent text-xl italic text-muted-foreground md:text-2xl dark:text-white/45">
                I design & build{" "}
                <span className="not-italic text-foreground/80 dark:text-white/75">
                  high-performance digital products
                </span>
              </p>
              <WordRotate
                words={ROLES}
                duration={2800}
                className="font-display text-lg font-semibold text-violet-300 md:text-xl"
              />
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="mb-4 max-w-xl">
              <TypingAnimation
                words={[
                  "React, Next.js, Node.js & React Native specialist.",
                  "Turning ideas into production-ready apps.",
                  "Focused on speed, scalability & great UX.",
                ]}
                className="text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/50"
                typeSpeed={28}
                deleteSpeed={16}
                pauseDelay={2400}
                loop
                startOnView={false}
                showCursor
              />
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground dark:text-white/35">
                Full Stack Developer building scalable web & mobile apps —
                from pixel-perfect UI to robust backends and cloud deployment.
                Currently at{" "}
                <span className="text-foreground/70 dark:text-white/55">Future Dev Solutions</span>.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="mt-4 flex flex-wrap gap-2">
              {HIGHLIGHTS.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/40"
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-400/70" />
                  {h}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 lg:col-span-5"
          >
            <GlassCard beam className="p-5">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute -inset-0.5 rounded-xl bg-linear-to-br from-violet-500 to-sky-400 opacity-60 blur-sm" />
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border/60 dark:border-white/20">
                    <Image
                      src="/logo.png"
                      alt="M. Altaf"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-base font-bold text-foreground dark:text-white">
                    Muhammad Altaf
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground dark:text-white/35">
                    Full Stack Engineer
                  </p>
                  <a
                    href="mailto:akaltaf610@gmail.com"
                    className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-violet-400/80 hover:text-violet-300"
                  >
                    <Mail className="h-3 w-3" />
                    akaltaf610@gmail.com
                  </a>
                </div>
              </div>
            </GlassCard>

            <HeroTerminal />

            {/* CTA buttons — under terminal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
            >
              <RainbowButton
                size="lg"
                className="h-11 w-full flex-1 font-display text-sm font-semibold sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Sparkles className="h-4 w-4" />
                View Projects
                <ArrowRight className="h-4 w-4" />
              </RainbowButton>

              <ShimmerButton
                className="h-11 w-full flex-1 sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="flex items-center justify-center gap-1.5 font-display text-sm font-semibold">
                  Hire Me
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </ShimmerButton>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-11 w-full flex-1 border-border/60 bg-muted/50 text-sm text-foreground/80 hover:bg-muted hover:text-foreground dark:border-white/10 dark:bg-white/4 dark:text-white/70 dark:hover:bg-white/8 dark:hover:text-white sm:w-auto"
              >
                <a href="/Altaf_Resume.pdf" download="Altaf_Resume.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Stats — visible first impression, under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-2 rounded-2xl border border-border/60 bg-muted/40 px-3 py-3 backdrop-blur-sm dark:border-white/8 dark:bg-white/4 sm:gap-3 sm:px-4 sm:py-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-xl font-bold text-foreground dark:text-white sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-wider text-muted-foreground dark:text-white/35 lg:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
              <div className="text-center">
                <p className="font-display text-xl font-bold text-foreground dark:text-white sm:text-2xl lg:text-3xl">
                  100%
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-wider text-muted-foreground dark:text-white/35 lg:text-[10px]">
                  Client Focus
                </p>
              </div>
            </motion.div>

            {/* Compact contact note */}
            <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-muted/30 px-3 py-2.5 dark:border-white/6 dark:bg-white/3 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground dark:text-white/35">
                <MapPin className="h-3 w-3" />
                Lahore · Remote OK
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/60">
                <Code2 className="h-3 w-3" />
                Accepting projects
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade — separates hero from next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-linear-to-t from-background to-transparent dark:from-[#050508]" />

      {/* Tech marquee */}
      <div className="relative z-10 border-t border-border/40 bg-background backdrop-blur-xl dark:border-white/6 dark:bg-[#050508]">
        <Marquee pauseOnHover className="[--duration:40s] py-3">
          {Array.from(
            new Map(skillsData.map((s) => [s.name, s])).values()
          ).map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-violet-500/30 hover:text-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/40 dark:hover:text-white/70"
            >
              <Image src={skill.icon} alt={skill.name} width={14} height={14} />
              {skill.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

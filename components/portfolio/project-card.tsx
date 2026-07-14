"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    type: string;
    icon: React.ComponentType<{ className?: string }>;
    technologies: string[];
    features?: string[];
    featured?: boolean;
  };
  index: number;
  delay?: number;
}

export function ProjectCard({ project, index, delay = 0 }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full w-full min-w-0"
    >
      <div
        className={cn(
          "relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border bg-card/95 transition-all duration-500 sm:rounded-2xl",
          "border-border/80 hover:border-primary/30 dark:border-white/8 dark:hover:border-white/18",
          "shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
          "sm:hover:-translate-y-1.5 sm:hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)] dark:sm:hover:shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
        )}
      >
        <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl">
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(500px_circle_at_50%_0%,rgba(124,58,237,0.16),transparent_55%)]" />
        </div>

        {/* Image */}
        <div className="relative aspect-[16/11] overflow-hidden bg-muted dark:bg-[#08080c] sm:aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent dark:from-[#0c0c12] dark:via-[#0c0c12]/30" />

          <div className="absolute inset-x-2.5 top-2.5 flex max-w-[calc(100%-1.25rem)] flex-wrap items-center gap-1.5 sm:inset-x-3 sm:top-3 sm:gap-2">
            {project.featured && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-violet-400/30 bg-violet-500/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-violet-700 backdrop-blur-md dark:text-violet-200 sm:px-2.5 sm:py-1 sm:text-[10px]">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                Featured
              </span>
            )}
            <span className="inline-flex max-w-full items-center gap-1 truncate rounded-full border border-border/80 bg-background/75 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-foreground/80 backdrop-blur-md dark:border-white/10 dark:bg-black/55 dark:text-white/70 sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[10px]">
              <Icon className="h-2.5 w-2.5 shrink-0 text-violet-500 dark:text-violet-300 sm:h-3 sm:w-3" />
              <span className="truncate">{project.type}</span>
            </span>
          </div>

          <div className="absolute bottom-2.5 right-2.5 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 dark:border-white/15 dark:bg-white/10 dark:text-white sm:flex sm:h-9 sm:w-9 sm:group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-w-0 flex-1 flex-col p-4 sm:p-5 md:p-6">
          <h3 className="font-display text-base font-bold leading-snug text-foreground sm:text-lg md:text-xl">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground sm:mt-2.5 sm:line-clamp-3 sm:text-sm">
            {project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <ul className="mt-3 hidden flex-wrap gap-1.5 sm:mt-4 sm:flex">
              {project.features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground dark:border-white/6 dark:bg-white/3 dark:text-white/40"
                >
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {project.features && project.features.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1 sm:hidden">
              {project.features.slice(0, 2).map((feature) => (
                <li
                  key={feature}
                  className="rounded-md border border-border bg-muted/60 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground dark:border-white/6 dark:bg-white/3 dark:text-white/40"
                >
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-wrap gap-1 pt-3.5 sm:gap-1.5 sm:pt-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:text-violet-200/90 sm:hidden"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/40 sm:hidden">
                +{project.technologies.length - 4}
              </span>
            )}

            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={`desk-${tech}`}
                className="hidden rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-700 transition-colors group-hover:border-violet-400/35 group-hover:bg-violet-500/15 dark:text-violet-200/90 sm:inline-flex"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="hidden rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] text-muted-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/40 sm:inline-flex">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

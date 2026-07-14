"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400/70">
        Expertise
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 px-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

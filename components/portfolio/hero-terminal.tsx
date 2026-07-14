"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

type LineType = "cmd" | "output" | "json" | "success" | "progress" | "highlight";

interface TerminalLine {
  type: LineType;
  text: string;
  indent?: number;
}

const SCRIPT: TerminalLine[] = [
  { type: "cmd", text: "$ whoami" },
  { type: "output", text: "→ muhammad-altaf · full-stack-developer" },
  { type: "cmd", text: "$ cat about.json" },
  {
    type: "json",
    text: '{ "role": "Full Stack Developer", "stack": ["React","Next.js","Node.js"] }',
  },
  { type: "cmd", text: "$ npm run build --production" },
  { type: "progress", text: "Building..." },
  { type: "success", text: "✓ Compiled · Linted · Deployed to production" },
  { type: "cmd", text: "$ echo $OPEN_TO_WORK" },
  { type: "highlight", text: "true ✦ Ready to build your next project" },
];

const COLOR: Record<LineType, string> = {
  cmd: "text-emerald-600 dark:text-emerald-400",
  output: "text-foreground/70 dark:text-white/70",
  json: "text-sky-600 dark:text-sky-300/85",
  success: "text-emerald-600 dark:text-emerald-400",
  progress: "text-muted-foreground dark:text-white/40",
  highlight: "font-semibold text-amber-600 dark:text-amber-300",
};

function useTypewriter(text: string, speed: number, enabled: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return { displayed, done };
}

function StaticLine({ line }: { line: TerminalLine }) {
  return (
    <div
      className={cn(
        "font-mono text-xs leading-[1.65]",
        COLOR[line.type],
        line.indent && "pl-3"
      )}
    >
      {line.text}
    </div>
  );
}

function ProgressLine({
  line,
  onComplete,
}: {
  line: TerminalLine;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 12;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(onComplete, 200);
      }
      setProgress(Math.min(100, p));
    }, 70);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="space-y-1 py-0.5">
      <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground dark:text-white/40">
        <span className="text-violet-400">▸</span>
        <span>{line.text}</span>
        <span className="ml-auto tabular-nums text-violet-300">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-muted dark:bg-white/8">
        <div
          className="h-full rounded-full bg-linear-to-r from-violet-500 to-sky-400 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function AnimatedLine({
  line,
  onComplete,
}: {
  line: TerminalLine;
  onComplete: () => void;
}) {
  const isCmd = line.type === "cmd";
  const { displayed, done } = useTypewriter(line.text, isCmd ? 38 : 10, true);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, isCmd ? 150 : 250);
      return () => clearTimeout(t);
    }
  }, [done, isCmd, onComplete]);

  return (
    <div
      className={cn(
        "font-mono text-xs leading-[1.65]",
        COLOR[line.type],
        line.indent && "pl-3"
      )}
    >
      {displayed}
      {!done && (
        <span className="ml-0.5 inline-block animate-pulse text-emerald-400/70">
          ▋
        </span>
      )}
    </div>
  );
}

export function HeroTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentLine, setCurrentLine] = useState(-1);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (isInView && currentLine === -1) {
      const t = setTimeout(() => setCurrentLine(0), 400);
      return () => clearTimeout(t);
    }
  }, [isInView, currentLine]);

  const advance = () => {
    setCurrentLine((prev) => {
      const next = prev + 1;
      if (next >= SCRIPT.length) setFinished(true);
      return next;
    });
  };

  return (
    <div
      ref={ref}
      className="glass-panel relative flex flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/5 dark:shadow-violet-950/30"
    >
      <BorderBeam
        size={120}
        duration={10}
        colorFrom="#7c3aed"
        colorTo="#38bdf8"
        borderWidth={1}
      />

      {/* Compact title bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-border/60 bg-muted/30 px-3 py-2 dark:border-white/6 dark:bg-white/2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground dark:text-white/30">
          altaf@portfolio ~ zsh
        </span>
        <div className="w-10" />
      </div>

      {/* Fixed-height body — fits in viewport, no scroll */}
      <div className="h-[210px] shrink-0 overflow-hidden bg-muted/50 px-3 py-3 dark:bg-[#0a0a0f]/85 sm:h-[240px] sm:px-4 sm:py-3.5">
        <div className="space-y-0.5">
          {SCRIPT.map((line, i) => {
            if (i < currentLine) return <StaticLine key={i} line={line} />;
            if (i === currentLine) {
              if (line.type === "progress") {
                return (
                  <ProgressLine key={i} line={line} onComplete={advance} />
                );
              }
              return <AnimatedLine key={i} line={line} onComplete={advance} />;
            }
            return null;
          })}
          {finished && (
            <div className="flex items-center gap-1 pt-1">
              <span className="font-mono text-[11px] text-emerald-400">$</span>
              <span className="animate-pulse font-mono text-[11px] text-emerald-400">
                ▋
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

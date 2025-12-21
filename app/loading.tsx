"use client";

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center gap-4">
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={75}
          gaugePrimaryColor="hsl(var(--primary))"
          gaugeSecondaryColor="hsl(var(--muted))"
          className="w-32 h-32"
        />
        <p className="text-muted-foreground animate-pulse">Loading portfolio...</p>
      </div>
    </div>
  );
}


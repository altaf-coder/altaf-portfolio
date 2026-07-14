"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import type { TechDeckCard } from "@/constants/tech-stack-cards";

function getCardMainIcon(card: TechDeckCard) {
  if (card.id === "devops") return "/icons/ci_cd.png";
  return card.icon;
}

interface TechStackCardProps {
  card: TechDeckCard;
  order: number;
}

export const TechStackCard = forwardRef<HTMLDivElement, TechStackCardProps>(
  function TechStackCard({ card, order }, ref) {
    return (
      <div
        ref={ref}
        className="deck-card absolute inset-0 m-auto will-change-transform"
        style={{
          zIndex: order + 1,
          ["--accent" as string]: card.accent,
          ["--accent-soft" as string]: card.accentSoft,
        }}
        data-card={card.id}
        data-active="false"
      >
        <div className="deck-flip relative h-full w-full will-change-transform [transform:rotateY(0deg)]">
          <div className="deck-face deck-face--back">
            <div className="deck-back">
              <span className="deck-back-frame" aria-hidden />
              <span className="deck-back-pattern" aria-hidden />
              <div className="deck-back-emblem" aria-hidden>
                <span
                  className="deck-back-suit-lg"
                  style={{ color: card.suitColor }}
                >
                  {card.suit}
                </span>
              </div>
            </div>
          </div>

          <div className="deck-face deck-face--front">
            <article className="deck-surface group relative flex h-full w-full flex-col overflow-hidden rounded-[22px]">
              <span className="deck-glow" aria-hidden />

              <div className="relative z-10 flex h-full min-w-0 flex-col p-4 sm:p-5 md:p-6">
                <div
                  className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm sm:mb-4 sm:h-11 sm:w-11"
                  style={{
                    boxShadow: `0 0 28px color-mix(in srgb, ${card.accent} 45%, transparent)`,
                  }}
                >
                  <Image
                    src={getCardMainIcon(card)}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                  />
                </div>

                <div className="mt-auto min-w-0">
                  <h3 className="deck-title text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl md:text-[1.75rem]">
                    {card.title}
                  </h3>
                  <p className="deck-tagline mt-1.5 text-xs font-medium text-muted-foreground sm:mt-2 sm:text-sm">
                    {card.tagline}
                  </p>
                  <p className="deck-desc mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground/80 sm:text-sm">
                    {card.description}
                  </p>

                  <ul className="deck-chips mt-3 flex flex-wrap gap-1 sm:mt-4 sm:gap-1.5">
                    {card.skills.map((skill, i) => (
                      <li
                        key={skill.name}
                        className="deck-chip flex max-w-full items-center gap-1 rounded-full border border-border bg-muted/60 py-0.5 pl-0.5 pr-2 backdrop-blur-md sm:gap-1.5 sm:py-1 sm:pl-1 sm:pr-2.5"
                        style={{ ["--i" as string]: i }}
                      >
                        <span className="relative flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background/80 sm:h-5 sm:w-5">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={16}
                            height={16}
                            className="h-3 w-3 object-contain sm:h-3.5 sm:w-3.5"
                          />
                        </span>
                        <span className="truncate text-[10px] font-medium text-foreground/85 sm:text-[11px]">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
);

"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techDeckCards } from "@/constants/tech-stack-cards";
import { TechStackCard } from "@/components/portfolio/tech-stack-card";
import { SectionHeader } from "@/components/portfolio/section-header";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TOTAL = techDeckCards.length;
const MAX_FAN_SPREAD = 1200;

export type FanLayout = {
  cardWidth: number;
  cardHeight: number;
  spacing: number;
  spreadScale: number;
  tilt: number;
  isMobile: boolean;
};

function computeFanLayout(): FanLayout {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 768;

  if (isMobile) {
    const cardWidth = Math.min(vw - 32, 420);
    const cardHeight = Math.min(
      Math.round(cardWidth * 1.28),
      Math.floor(vh * 0.58)
    );
    return {
      cardWidth,
      cardHeight,
      spacing: 0,
      spreadScale: 1,
      tilt: 0,
      isMobile: true,
    };
  }

  const horizontalPad = 24;
  const gap = 10;
  const maxSpread = Math.min(vw - horizontalPad * 2, MAX_FAN_SPREAD);
  let cardWidth = Math.floor((maxSpread - (TOTAL - 1) * gap) / TOTAL);
  cardWidth = Math.max(240, cardWidth);

  let cardHeight = Math.round(cardWidth * 1.48);
  const maxHeight = Math.floor(vh * 0.56);
  if (cardHeight > maxHeight) {
    cardHeight = maxHeight;
  }

  const spacing = ((cardWidth + gap) / cardWidth) * 100;

  return {
    cardWidth,
    cardHeight,
    spacing,
    spreadScale: 1,
    tilt: 3,
    isMobile: false,
  };
}

function applyFanDimensions(
  fan: HTMLElement,
  cards: HTMLElement[],
  layout: FanLayout
) {
  fan.style.setProperty("--deck-card-w", `${layout.cardWidth}px`);
  fan.style.setProperty("--deck-card-h", `${layout.cardHeight}px`);
  fan.style.width = `${layout.cardWidth}px`;
  fan.style.height = `${layout.cardHeight}px`;
  fan.dataset.mobile = layout.isMobile ? "true" : "false";

  cards.forEach((card) => {
    card.style.width = `${layout.cardWidth}px`;
    card.style.height = `${layout.cardHeight}px`;
    card.dataset.compact = layout.cardWidth < 220 ? "true" : "false";
  });
}

function fanTarget(
  i: number,
  n: number,
  spacing: number,
  tilt: number,
  spreadScale = 1
) {
  const mid = (n - 1) / 2;
  const offset = i - mid;
  return {
    xPercent: offset * spacing,
    yPercent: Math.abs(offset) * 1.5,
    rotateZ: offset * tilt,
    scale: spreadScale,
  };
}

export function TechStackDeck() {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const fanRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const pinTarget = pinRef.current;
    const stage = stageRef.current;
    const fan = fanRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!pinTarget || !stage || !fan || cards.length === 0) return;

    let onResize: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const flips = cards.map((c) =>
        c.querySelector<HTMLElement>(".deck-flip")
      );

      let layout = computeFanLayout();
      applyFanDimensions(fan, cards, layout);

      const seedStack = () => {
        cards.forEach((card, i) => {
          gsap.set(card, {
            xPercent: 0,
            yPercent: 0,
            rotateZ: layout.isMobile ? 0 : (i - (TOTAL - 1) / 2) * 1.5,
            z: layout.isMobile ? 0 : -i * 6,
            scale: 1,
            opacity: layout.isMobile ? (i === 0 ? 1 : 0) : 1,
          });
          gsap.set(flips[i], { rotateY: 0 });
          card.setAttribute("data-active", layout.isMobile && i === 0 ? "true" : "false");
        });
      };

      onResize = () => {
        layout = computeFanLayout();
        applyFanDimensions(fan, cards, layout);
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);

      const scrollConfig = {
        trigger: pinTarget,
        start: "top top+=64",
        end: () =>
          "+=" + window.innerHeight * (layout.isMobile ? 2.6 : 2.2),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      };

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        layout = computeFanLayout();
        applyFanDimensions(fan, cards, layout);
        seedStack();
        gsap.set(fan, { rotateX: 42, yPercent: 4, scale: 1 });

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          cards.forEach((card, i) => {
            gsap.set(
              card,
              fanTarget(i, TOTAL, layout.spacing, layout.tilt, layout.spreadScale)
            );
            gsap.set(flips[i], { rotateY: 180 });
            card.setAttribute("data-active", "true");
          });
          gsap.set(fan, { rotateX: 0, scale: 1 });
          return;
        }

        return buildDesktopTimeline(layout);
      });

      mm.add("(max-width: 767px)", () => {
        layout = computeFanLayout();
        applyFanDimensions(fan, cards, layout);
        seedStack();
        gsap.set(fan, { rotateX: 0, yPercent: 0, scale: 1 });

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          cards.forEach((card, i) => {
            gsap.set(card, { xPercent: 0, yPercent: 0, rotateZ: 0, opacity: 1 });
            gsap.set(flips[i], { rotateY: 180 });
            card.setAttribute("data-active", "true");
          });
          return;
        }

        return buildMobileTimeline();
      });

      function buildDesktopTimeline({
        spacing,
        tilt,
        spreadScale,
      }: Pick<FanLayout, "spacing" | "tilt" | "spreadScale">) {
        const STAGGER = 0.12;
        const MOVE = 0.85;
        const FLIP = 0.85;
        const span = MOVE + STAGGER * (TOTAL - 1) + 0.4;

        const tl = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          scrollTrigger: scrollConfig,
        });

        tl.to(fan, { rotateX: 0, yPercent: 0, duration: span }, 0);

        cards.forEach((card, i) => {
          const at = i * STAGGER;
          tl.to(
            card,
            {
              ...fanTarget(i, TOTAL, spacing, tilt, spreadScale),
              duration: MOVE,
            },
            at
          );
          tl.to(
            flips[i],
            {
              rotateY: 180,
              duration: FLIP,
              ease: "power2.inOut",
              onStart: () => {
                card.setAttribute("data-active", "true");
                gsap.set(card, { zIndex: 10 + i });
              },
              onReverseComplete: () => {
                card.setAttribute("data-active", "false");
                gsap.set(card, { zIndex: i + 1 });
              },
            },
            at + MOVE * 0.45
          );
        });

        return () => tl.scrollTrigger?.kill();
      }

      function buildMobileTimeline() {
        const STEP = 0.24;
        const FLIP = 0.2;

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: scrollConfig,
        });

        cards.forEach((card, i) => {
          const at = i * STEP;

          tl.set(
            card,
            { xPercent: 0, yPercent: 0, rotateZ: 0, scale: 1, zIndex: i + 1 },
            0
          );

          if (i > 0) {
            tl.set(cards[i - 1], { opacity: 0, zIndex: i }, at);
          }
          tl.set(card, { opacity: 1, zIndex: 20 + i }, at);

          tl.to(
            flips[i],
            {
              rotateY: 180,
              duration: FLIP,
              ease: "power2.inOut",
              onStart: () => card.setAttribute("data-active", "true"),
              onReverseComplete: () =>
                card.setAttribute("data-active", "false"),
            },
            at + STEP * 0.2
          );
        });

        return () => tl.scrollTrigger?.kill();
      }
    }, pinRef);

    return () => {
      if (onResize) window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="skills"
      aria-label="Tech stack"
      className="relative pb-24 lg:pb-32"
    >
      <div
        ref={pinRef}
        className="relative overflow-x-clip overflow-y-visible bg-secondary/30 text-foreground dark:bg-secondary/20"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <SectionHeader
            title="Tech Stack"
            subtitle="The tools and technologies I use to ship production-grade software."
          />
        </div>

        <div
          ref={stageRef}
          className="deck-stage relative z-10 flex w-full items-center justify-center px-3 pb-12 min-h-[calc(100vh-12rem)] sm:min-h-[calc(100vh-14rem)] sm:px-0 sm:pb-16 lg:min-h-[calc(100vh-16rem)] lg:pb-20"
        >
          <div ref={fanRef} className="deck-fan relative mx-auto">
            {techDeckCards.map((card, i) => (
              <TechStackCard
                key={card.id}
                card={card}
                order={i}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackDeck;

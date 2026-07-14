"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  experiences,
  projects,
} from "@/constants";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { ProjectCard } from "@/components/portfolio/project-card";
import { HeroSection } from "@/components/portfolio/hero-section";
import { TechStackDeck } from "@/components/portfolio/tech-stack-deck";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default function PortfolioPage() {
  const [particleCount, setParticleCount] = useState(50);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const update = () => setParticleCount(window.innerWidth < 768 ? 20 : 50);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const particleColor = resolvedTheme === "light" ? "#6366f1" : "#ffffff";

  return (
    <>
      <Particles
        className="fixed inset-0 pointer-events-none"
        quantity={particleCount}
        ease={80}
        color={particleColor}
        refresh={false}
      />

      <main className="relative min-h-screen overflow-x-hidden">
        <HeroSection />

        <TechStackDeck />

        {/* Projects Section */}
        <section
          id="projects"
          className="relative overflow-hidden bg-background py-12 dark:bg-[#08080c] sm:py-24 px-3 sm:px-6 lg:px-8"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(124,58,237,0.14),transparent_70%)]" />
          </div>

          <div className="hidden lg:block opacity-40">
            <ScrollVelocityRow
              baseVelocity={-0.35}
              className="absolute top-8 left-0 right-0"
            >
              <div className="font-display text-8xl font-bold text-foreground/10 whitespace-nowrap px-4 select-none dark:text-white/10">
                FEATURED PROJECTS · FEATURED PROJECTS · FEATURED PROJECTS ·
              </div>
            </ScrollVelocityRow>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1400px] pt-2 sm:pt-12">
            <div className="mb-8 px-1 text-center sm:mb-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400/70">
                Selected work
              </p>
              <AnimatedShinyText className="mt-2 text-2xl font-bold sm:text-4xl md:text-5xl">
                Featured Projects
              </AnimatedShinyText>
              <p className="mx-auto mt-2 max-w-xl px-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm md:text-base">
                Production products across web, mobile, and commerce —
                from dating apps to multi-tenant store platforms.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-lg grid-cols-1 gap-4 sm:max-w-none sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 6).map((project: any, idx: number) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={idx}
                  delay={0.05 + idx * 0.04}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section
          id="experience"
          className="relative flex min-h-0 items-center justify-center py-16 sm:min-h-screen sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <Meteors number={20} />

          <div className="w-full relative z-10">
            <BlurFade delay={0.2} inView>
              <div className="text-center mb-10 sm:mb-16">
                <AnimatedShinyText className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                  Professional Journey
                </AnimatedShinyText>
              </div>
            </BlurFade>

            <div className="max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
              <VerticalTimeline>
                {experiences.map((exp: any, index: number) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    position={index % 2 === 0 ? "left" : "right"}
                    contentStyle={{
                      background: "var(--card)",
                      color: "var(--card-foreground)",
                      border: "2px solid var(--primary)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid var(--primary)",
                    }}
                    iconStyle={{
                      background: "var(--primary)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      left: "calc(50% + 18px)",
                    }}
                    icon={
                      <Image
                        src={exp.icon}
                        alt={exp.title}
                        width={40}
                        height={40}
                        className="object-contain rounded-full"
                      />
                    }
                  >
                    <ExperienceItem
                      key={index}
                      title={exp.title}
                      company={exp.company}
                      period={exp.duration}
                      description={exp.description}
                      achievements={exp.achievements}
                      technologies={exp.technologies}
                    />
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
// Experience Item Component
function ExperienceItem({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div
      className="bg-card border border-border rounded-lg p-4 sm:p-6 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-2">
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-primary text-sm sm:text-base">{company}</p>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground shrink-0">{period}</span>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>

      {achievements && achievements.length > 0 && (
        <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-muted-foreground">
          {achievements.slice(0, 3).map((achievement: string, idx: number) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      )}

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 8).map((tech: string, idx: number) => (
            <span key={idx} className="px-2 py-1 bg-primary/10 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Import real data from constants
import {
  stats,
  experiences,
  projects,
  skillsData,
  categories,
} from "@/constants";

// Dynamically import heavy components for better performance
const InteractiveGrid = dynamic(
  () =>
    import("@/components/portfolio/interactive-grid").then((mod) => ({
      default: mod.InteractiveGrid,
    })),
  { ssr: false }
);

// Magic UI Components
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { AnimatedList } from "@/components/ui/animated-list";
import { Meteors } from "@/components/ui/meteors";
import { Terminal } from "@/components/ui/terminal";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Particles } from "@/components/ui/particles";
import { Button } from "@/components/ui/button";
import { DraggableCardContainer } from "@/components/ui/draggable-card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { HyperText } from "@/components/ui/hyper-text";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default function PortfolioPage() {
  return (
    <>
      {/* Particles Background - Reduced on mobile */}
      <Particles
        className="fixed inset-0 pointer-events-none"
        quantity={
          typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 50
        }
        ease={80}
        color="#ffffff"
        refresh={false}
      />

      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <AnimatedThemeToggler />
      </div>

      <main className="relative min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Custom Cursor - Only in Hero Section */}
          <div className="absolute inset-0 pointer-events-none z-50">
            <SmoothCursor />
          </div>

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />

          {/* Interactive Grid - Only on desktop for performance */}
          <div className="hidden lg:block">
            <Suspense fallback={null}>
              <InteractiveGrid />
            </Suspense>
          </div>

          <div className="relative z-10 w-full px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] max-w-[1600px] mx-auto">
              {/* Left Side - Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                {/* Greeting */}
                <BlurFade delay={0.2}>
                  <div className="space-y-2">
                    <p className="text-lg text-muted-foreground font-medium">
                      👋 Hello, I&apos;m
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                      <AnimatedShinyText className="inline-block">
                        M. Kashif
                      </AnimatedShinyText>
                    </h1>
                  </div>
                </BlurFade>

                {/* Title */}
                <BlurFade delay={0.3}>
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                      <HyperText
                        duration={800}
                        delay={0}
                        startOnView={false}
                        animateOnHover={true}
                        characterSet={[
                          "A",
                          "B",
                          "C",
                          "D",
                          "E",
                          "F",
                          "G",
                          "H",
                          "I",
                          "J",
                          "K",
                          "L",
                          "M",
                          "N",
                          "O",
                          "P",
                          "Q",
                          "R",
                          "S",
                          "T",
                          "U",
                          "V",
                          "W",
                          "X",
                          "Y",
                          "Z",
                        ]}
                        as="h2"
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
                      >
                        Full Stack Developer
                      </HyperText>
                    </h2>

                    {/* Terminal Description */}
                    <div className="max-w-2xl mx-auto lg:mx-0">
                      <Terminal className="overflow-x-hidden">
                        <div className="font-mono text-sm space-y-2">
                          <div>
                            <span className="text-green-500">$</span>{" "}
                            <span className="text-blue-400">cat</span>{" "}
                            profile.txt
                          </div>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap wrap-break-word">
                            Full Stack Developer specializing in modern
                            JavaScript frameworks (React.js, Next.js, React
                            Native, Node.js) with hands-on experience in DevOps
                            and cloud deployments. Passionate about building
                            scalable web applications and optimizing performance
                            across front-end and back-end systems.
                          </div>
                          <div className="mt-2">
                            <span className="text-green-500">$</span>{" "}
                            <span className="animate-pulse">_</span>
                          </div>
                        </div>
                      </Terminal>
                    </div>
                  </div>
                </BlurFade>

                {/* Action Buttons */}
                <BlurFade delay={0.5}>
                  <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                    <ShimmerButton
                      className="shadow-2xl"
                      onClick={() => {
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span className="flex items-center gap-2">
                        View Projects <ArrowRight className="w-4 h-4" />
                      </span>
                    </ShimmerButton>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="border-2"
                    >
                      Get In Touch
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-2 border-primary/50 hover:border-primary"
                    >
                      <a
                        target="_blank"
                        href="/Kashif_Resume.pdf"
                        download="Kashif_Resume.pdf"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </BlurFade>

                {/* Quick Stats */}
                <BlurFade delay={0.6}>
                  <div className="flex gap-6 justify-center lg:justify-start flex-wrap pt-4">
                    {stats.slice(0, 3).map((stat: any, idx: number) => (
                      <div key={idx} className="text-center lg:text-left">
                        <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                          <stat.icon className="w-5 h-5 text-primary" />
                          <span className="text-2xl md:text-3xl font-bold">
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </BlurFade>
              </motion.div>

              {/* Right Side - Orbiting Circles */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <BlurFade delay={0.4} inView>
                  <div className="relative w-full max-w-[600px] h-[600px] flex items-center justify-center">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full" />

                    {/* First Orbit - Core Technologies */}
                    <OrbitingCircles
                      radius={140}
                      duration={30}
                      iconSize={70}
                      path={true}
                    >
                      {Array.from(
                        new Map(
                          skillsData.map((skill: any) => [skill.name, skill])
                        ).values()
                      )
                        .filter((skill: any) =>
                          [
                            "React",
                            "Node.js",
                            "TypeScript",
                            "PostgreSQL",
                          ].includes(skill.name)
                        )
                        .map((skill: any, idx: number) => (
                          <div
                            key={`orbit1-${skill.name}-${idx}`}
                            className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 shadow-lg flex items-center justify-center overflow-hidden hover:border-primary transition-colors"
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                        ))}
                    </OrbitingCircles>

                    {/* Second Orbit - Supporting Technologies */}
                    <OrbitingCircles
                      radius={220}
                      duration={40}
                      iconSize={65}
                      path={true}
                      reverse
                    >
                      {Array.from(
                        new Map(
                          skillsData.map((skill: any) => [skill.name, skill])
                        ).values()
                      )
                        .filter((skill: any) =>
                          [
                            "JavaScript",
                            "Docker",
                            "MongoDB",
                            "Expo",
                            "Kubernetes",
                            "Express.js",
                          ].includes(skill.name)
                        )
                        .map((skill: any, idx: number) => (
                          <div
                            key={`orbit2-${skill.name}-${idx}`}
                            className="w-14 h-14 rounded-full bg-background border-2 border-accent/20 shadow-lg flex items-center justify-center overflow-hidden hover:border-accent transition-colors"
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={36}
                              height={36}
                              className="object-contain"
                            />
                          </div>
                        ))}
                    </OrbitingCircles>

                    {/* Third Orbit - Tools */}
                    <OrbitingCircles
                      radius={290}
                      duration={50}
                      iconSize={60}
                      path={false}
                    >
                      {Array.from(
                        new Map(
                          skillsData.map((skill: any) => [skill.name, skill])
                        ).values()
                      )
                        .filter((skill: any) =>
                          [
                            "Git",
                            "GitHub",
                            "Firebase",
                            "Redis",
                            "AWS",
                          ].includes(skill.name)
                        )
                        .map((skill: any, idx: number) => (
                          <div
                            key={`orbit3-${skill.name}-${idx}`}
                            className="w-12 h-12 rounded-full bg-background/80 border border-border shadow-md flex items-center justify-center overflow-hidden hover:scale-110 transition-transform"
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                        ))}
                    </OrbitingCircles>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-12 -left-12 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10" />
                  </div>
                </BlurFade>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* Skills & Tech Stack Section */}
        <section
          id="skills"
          className="relative min-h-screen flex items-center justify-center py-24 px-4 lg:px-8 overflow-hidden bg-secondary/10"
        >
          {/* Scroll-Based Velocity Text */}
          <div className="hidden lg:block">
            <ScrollVelocityRow
              baseVelocity={-0.5}
              className="absolute top-0 left-0 right-0 mb-16"
            >
              <div className="text-9xl font-bold opacity-50 whitespace-nowrap px-4 pb-16">
                TECH STACK . TECH STACK . TECH STACK .
              </div>
            </ScrollVelocityRow>
          </div>

          <div className="w-full relative z-10 px-4 lg:px-8 pt-16">
            <div className="text-center mb-16 block lg:hidden">
              <AnimatedShinyText className="text-4xl md:text-5xl font-bold text-center mb-16">
                Tech Stack
              </AnimatedShinyText>
            </div>

            {/* Skills by Category - Bento Grid Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
              {categories.map((category: string, categoryIdx: number) => {
                const categorySkills = skillsData.filter(
                  (skill: any) => skill.category === category
                );
                if (categorySkills.length === 0) return null;

                return (
                  <BlurFade
                    key={category}
                    delay={0.3 + categoryIdx * 0.1}
                    inView
                  >
                    <MagicCard className="p-8 rounded-2xl h-full">
                      {/* Category Title */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {category}
                        </h3>
                        <div className="h-0.5 w-12 bg-primary rounded-full" />
                      </div>

                      {/* Skills Grid - More rows, fewer columns */}
                      <div className="grid grid-cols-3 gap-4">
                        {categorySkills.map((skill: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className="group"
                          >
                            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-3 flex flex-col items-center gap-2 hover:shadow-md hover:border-primary/50 hover:bg-background transition-all duration-300 cursor-pointer">
                              {/* Skill Icon */}
                              <div className="w-12 h-12 relative flex items-center justify-center">
                                <Image
                                  src={skill.icon}
                                  alt={skill.name}
                                  width={48}
                                  height={48}
                                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>

                              {/* Skill Name */}
                              <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2 leading-tight">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </MagicCard>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="relative min-h-screen flex items-center justify-center py-24 px-4 lg:px-8 bg-secondary/20"
        >
          <div className="hidden lg:block">
            <ScrollVelocityRow
              baseVelocity={-0.5}
              className="absolute top-0 left-0 right-0 mb-16"
            >
              <div className="text-9xl font-bold opacity-50 whitespace-nowrap px-4 pb-16">
                FEATURED PROJECTS . FEATURED PROJECTS . FEATURED PROJECTS .
              </div>
            </ScrollVelocityRow>
          </div>

          <div className="w-full relative z-10 pt-16">
            <div className="text-center mb-16 block lg:hidden">
              <AnimatedShinyText className="text-4xl md:text-5xl font-bold text-center mb-16">
                Featured Projects
              </AnimatedShinyText>
            </div>

            <DraggableCardContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-[1600px] mx-auto px-4">
              {projects.slice(0, 6).map((project: any, idx: number) => (
                <ProjectCard
                  key={idx}
                  project={project}
                  index={idx}
                  delay={0.3 + idx * 0.1}
                />
              ))}
            </DraggableCardContainer>

            {/* View All Projects Button */}
            <BlurFade delay={0.7} inView>
              <div className="flex justify-center mt-12">
                <a href="/projects">
                  <InteractiveHoverButton className="text-base">
                    View All Projects
                  </InteractiveHoverButton>
                </a>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section
          id="experience"
          className="relative min-h-screen flex items-center justify-center py-24 px-4 lg:px-8 overflow-hidden"
        >
          <Meteors number={20} />

          <div className="w-full relative z-10">
            <BlurFade delay={0.2} inView>
              <div className="text-center mb-16">
                <AnimatedShinyText className="text-4xl md:text-5xl font-bold text-center mb-16">
                  Professional Journey
                </AnimatedShinyText>
              </div>
            </BlurFade>

            <div className="max-w-[1600px] mx-auto space-y-8">
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
      className="bg-card border border-border rounded-lg p-6 cursor-pointer "
      onClick={() => setExpanded(!expanded)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary">{company}</p>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
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

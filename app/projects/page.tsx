"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/constants";
import { ProjectCard } from "@/components/portfolio/project-card";
import { DraggableCardContainer } from "@/components/ui/draggable-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

export default function ProjectsPage() {
  return (
    <>
      {/* Particles Background */}
      <Particles
        className="fixed inset-0 pointer-events-none"
        quantity={
          typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 50
        }
        ease={80}
        color="#ffffff"
        refresh={false}
      />

      <main className="relative min-h-screen overflow-x-hidden">
        {/* Projects Section */}
        <section className="relative py-32 px-4 bg-secondary/20">
          {/* Scroll-Based Velocity Text */}
          <div className="hidden lg:block">
            <ScrollVelocityRow
              baseVelocity={-0.5}
              className="absolute top-0 left-0 right-0"
            >
              <div className="text-9xl font-bold opacity-5 whitespace-nowrap px-4">
                PROJECTS • WORK • PORTFOLIO •
              </div>
            </ScrollVelocityRow>
          </div>

          <div className="container mx-auto relative z-10">
            {/* Back Button */}
            <BlurFade delay={0.1} inView>
              <Link href="/">
                <Button variant="ghost" className="mb-8 group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>
            </BlurFade>

            {/* Page Title */}
            <BlurFade delay={0.2} inView>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  All Projects
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  A comprehensive showcase of my work across web development,
                  mobile applications, and DevOps solutions
                </p>
              </div>
            </BlurFade>

            {/* Projects Grid */}
            <DraggableCardContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projects.map((project: any, idx: number) => (
                <ProjectCard
                  key={idx}
                  project={project}
                  index={idx}
                  delay={0.3 + idx * 0.1}
                />
              ))}
            </DraggableCardContainer>
          </div>
        </section>
      </main>
    </>
  );
}

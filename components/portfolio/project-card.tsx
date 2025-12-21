"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DraggableCardBody } from "@/components/ui/draggable-card";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    type: string;
    icon: any;
    technologies: string[];
  };
  index: number;
  delay?: number;
}

export function ProjectCard({ project, index, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="w-full"
    >
      <DraggableCardBody className="relative cursor-grab active:cursor-grabbing group w-full h-full rounded-2xl overflow-hidden border border-border/50 flex flex-col">
        <BorderBeam size={250} duration={12} delay={9} />

        {/* Project Image - On Top */}
        <div className="relative h-56 overflow-hidden bg-linear-to-br from-primary/5 to-accent/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Project Content - On Bottom */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Project Type Badge */}
          <div className="flex items-center gap-2 mb-3">
            <project.icon className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-medium">
              {project.type}
            </span>
          </div>

          {/* Project Title */}
          <div className="mb-3">
            <AnimatedGradientText className="text-xl font-bold">
              <span>{project.title}</span>
            </AnimatedGradientText>
          </div>

          {/* Project Description - Full text visible */}
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 5).map((tech: string, techIdx: number) => (
              <span
                key={techIdx}
                className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-full text-xs font-medium transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </DraggableCardBody>
    </motion.div>
  );
}


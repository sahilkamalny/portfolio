"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  metrics: { label: string; type: "success" | "accent" | "muted" }[];
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  hasCaseStudy: boolean;
  year: string;
}

const projects: Project[] = [
  {
    slug: "relearnable",
    name: "relearnable.ai",
    type: "Full-Stack AI SaaS",
    year: "Nov 2025 — Present",
    description: "A production AI learning platform with a real-time Knowledge Correction Engine that detects misconceptions and generates targeted curriculum paths.",
    metrics: [
      { label: "80+ users, 1,000+ assessments", type: "success" },
      { label: "60–70% user retention", type: "accent" },
      { label: "50%+ faster load times", type: "muted" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Gemini AI"],
    liveUrl: "https://relearnable.ai",
    githubUrl: "https://github.com/sahilkamalny/relearnable",
    hasCaseStudy: true,
  },
  {
    slug: "tratlus",
    name: "Tratlus",
    type: "Full-Stack AI Travel Platform",
    year: "Jun 2025 — Oct 2025",
    description: "An AI travel planning system that captures preferences via swipe interface and generates personalized itineraries with automated calendar synchronization.",
    metrics: [
      { label: "Itineraries in <30 seconds", type: "success" },
      { label: "60% less manual scheduling", type: "accent" },
      { label: "Google Maps + Calendar APIs", type: "muted" },
    ],
    stack: ["React", "TypeScript", "Firebase", "Google APIs", "Stripe"],
    liveUrl: "https://tratlus.vercel.app/",
    githubUrl: "https://github.com/sahilkamalny/tratlus",
    hasCaseStudy: true,
  },
  {
    slug: "flavorbot",
    name: "FlavorBot",
    type: "AI Recipe System",
    year: "Jan 2025 — May 2025",
    description: "A desktop AI recipe generator that personalizes recipes based on ingredients, allergies, and dietary constraints with interactive LLM-driven refinement.",
    metrics: [
      { label: "🏆 RamHacks 2025 Winner", type: "success" },
      { label: "400+ recipes processed", type: "accent" },
      { label: "25% faster revisions", type: "muted" },
    ],
    stack: ["Java", "JavaFX", "SQL", "OpenAI API"],
    liveUrl: null,
    githubUrl: "https://github.com/aescorcia65/FlavorBot",
    hasCaseStudy: true,
  },
  {
    slug: "kairo",
    name: "Kairo",
    type: "Interactive OS Shell",
    year: "Sep 2024 — Dec 2024",
    description: "A Python-based REPL shell that consolidates OS utilities into a functional programming architecture with 40% faster execution.",
    metrics: [
      { label: "100+ chainable commands", type: "success" },
      { label: "40% faster execution", type: "accent" },
      { label: "10+ beta testers", type: "muted" },
    ],
    stack: ["Python", "Functional Programming"],
    liveUrl: null,
    githubUrl: "https://github.com/sahilkamalny/kairo",
    hasCaseStudy: true,
  },
];

export const ProjectTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto px-6 py-20">
      
      {/* Central Line (Desktop) / Left Line (Mobile) */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border">
        <motion.div 
          style={{ height: lineHeight }} 
          className="w-full bg-accent origin-top"
        />
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <TimelineItem key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-accent z-10 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />

      {/* Date Marker (Opposite side) */}
      <div className={`hidden md:block md:w-1/2 px-12 text-muted font-mono text-sm ${
        isEven ? "text-right" : "text-left"
      }`}>
        {project.year}
      </div>

      {/* Card Content */}
      <div className="pl-12 md:pl-0 md:w-1/2 md:px-12 w-full">
        <div className="group relative rounded-xl border border-border bg-card p-6 md:p-8 hover:border-accent/50 transition-colors shadow-sm hover:shadow-md">
          {/* Mobile Date */}
          <div className="md:hidden text-xs font-mono text-accent mb-2">{project.year}</div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-foreground/5 text-muted">
                {project.type}
              </span>
            </div>

            <p className="text-muted leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${
                    metric.type === "success"
                      ? "bg-success/10 text-success"
                      : metric.type === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-foreground/5 text-muted"
                  }`}
                >
                   {metric.type === "success" && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  {metric.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-muted font-mono border-t border-border pt-4">
              {project.stack.map((tech) => (
                <span key={tech} className="bg-foreground/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-2">
               {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center h-9 text-sm font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
                  >
                    Live Site
                  </a>
                )}
                {project.hasCaseStudy && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center h-9 text-sm font-medium rounded-md border border-border hover:bg-foreground/5 transition-colors"
                  >
                    Case Study
                  </Link>
                )}
                 {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border hover:bg-foreground/5 transition-colors"
                  >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

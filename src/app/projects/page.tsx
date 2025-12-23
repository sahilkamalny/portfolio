import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Sahil Kamal",
  description: "Production software I've built and shipped end-to-end.",
};

const projects = [
  {
    slug: "relearnable",
    name: "relearnable.ai",
    type: "Full-Stack AI SaaS",
    description: "A production AI learning platform with a Knowledge Correction Engine that detects misconceptions and generates targeted curriculum paths.",
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
    description: "An AI-assisted travel planning platform that turns swipe-based preferences into personalized itineraries with automatic calendar synchronization.",
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
    description: "A desktop AI recipe generator that personalizes recipes based on ingredients, allergies, and dietary constraints, with interactive LLM-driven refinement.",
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
    description: "A Python-based interactive REPL shell that unifies OS utilities into a functional architecture with 40% faster execution.",
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        <Link 
            href="/" 
            className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Selected Work
          </h1>
          <p className="mt-3 text-lg text-muted">
            Production software I&apos;ve built and shipped end-to-end.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-muted transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-foreground">
                      {project.name}
                    </h2>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-foreground/5 text-muted">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                          metric.type === "success"
                            ? "bg-success/10 text-success"
                            : metric.type === "accent"
                            ? "bg-accent/10 text-accent"
                            : "bg-foreground/5 text-muted"
                        }`}
                      >
                        {metric.type === "success" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        )}
                        {metric.label}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted font-mono">
                    {project.stack.map((tech, i) => (
                      <span key={tech}>
                        {tech}
                        {i < project.stack.length - 1 && (
                          <span className="text-border ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
                  >
                    Live Site →
                  </a>
                )}
                {project.hasCaseStudy && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg border border-border hover:bg-card hover:border-muted transition-colors"
                  >
                    Case Study
                  </Link>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg border border-border hover:bg-card hover:border-muted transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

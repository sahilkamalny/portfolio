import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "relearnable.ai Case Study — Sahil Kamal",
  description: "A production AI learning SaaS with a Knowledge Correction Engine serving live users.",
};

export default function RelearnableCaseStudy() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        {/* Header */}
        <header className="mb-12">
          <Link 
            href="/projects" 
            className="text-sm text-muted hover:text-foreground transition-colors mb-6 inline-block"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              relearnable.ai
            </h1>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              Full-Stack AI SaaS
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            A production AI learning platform with a real-time Knowledge Correction Engine that detects misconceptions and generates targeted curriculum paths.
          </p>
          
          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-success/10 text-success">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              80+ users, 1,000+ assessments
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
              60–70% user retention
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 text-muted">
              50%+ faster load times
            </span>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://relearnable.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Live Site →
            </a>
            <a
              href="https://github.com/sahilkamalny/relearnable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg border border-border hover:border-muted transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted leading-relaxed">
              relearnable.ai is a full-stack AI learning SaaS I designed and deployed to help users genuinely retain what they learn. The core innovation is a Knowledge Correction Engine—an LLM-driven system that identifies gaps in understanding and generates targeted curriculum in real time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Problem</h2>
            <p className="text-muted leading-relaxed">
              Most learning platforms measure completion, not comprehension. Users finish courses but forget the material weeks later. There&apos;s no feedback loop that catches misconceptions early or adapts content based on what a learner actually struggles with.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Constraints</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>System needed to support live users at production scale</li>
              <li>LLM responses had to be fast enough for real-time interaction</li>
              <li>Mobile-first UX with minimal friction for repeat sessions</li>
              <li>Curriculum logic needed to be flexible across subjects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Solution</h2>
            <p className="text-muted leading-relaxed">
              I built a Knowledge Correction Engine that uses LLM-generated assessments (powered by Google Gemini) to detect where learners have misconceptions. When gaps are identified, the system dynamically generates targeted curriculum trees—structured learning paths that rebuild mastery from the point of confusion. Instead of restarting learners from the beginning, curriculum starts precisely at the point of misunderstanding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Architecture &amp; Stack</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[120px]">Frontend</span>
                  <span className="text-muted">Next.js (App Router), React, TypeScript</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[120px]">Backend</span>
                  <span className="text-muted">Supabase Edge Functions, PostgreSQL</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[120px]">AI &amp; Inference</span>
                  <span className="text-muted">Google Gemini API for assessment generation</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[120px]">Auth</span>
                  <span className="text-muted">Google OAuth via Supabase Auth</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[120px]">Deployment</span>
                  <span className="text-muted">Vercel with automatic CI/CD</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Engineering Decisions</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Structured LLM outputs with schema validation for reliable curriculum generation</li>
              <li>PostgreSQL relational modeling for curriculum trees and prerequisite tracking</li>
              <li>Row-Level Security for user data isolation without custom auth infrastructure</li>
              <li>Component memoization and hardware-accelerated CSS for 50%+ load time improvement</li>
              <li>Mobile-first responsive design optimized for repeat engagement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges &amp; Tradeoffs</h2>
            <p className="text-muted leading-relaxed">
              The main challenge was ensuring LLM-generated curriculum felt intentional rather than random. I solved this by designing a tree-based curriculum schema where each node has prerequisite relationships. When the correction engine detects a gap, it walks up the tree to find the true root cause, then generates targeted content from that point. The tradeoff: more complex state management, but significantly more effective curriculum delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Results</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">80+</div>
                  <div className="text-sm text-muted mt-1">Active users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">1,000+</div>
                  <div className="text-sm text-muted mt-1">Assessments generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">60–70%</div>
                  <div className="text-sm text-muted mt-1">User retention</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What This Demonstrates</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Full-stack ownership from system design to production deployment</li>
              <li>AI system design beyond API usage—structured outputs, validation, and failure handling</li>
              <li>Performance optimization with measurable outcomes</li>
              <li>Product thinking: solving real user problems, not just building features</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}

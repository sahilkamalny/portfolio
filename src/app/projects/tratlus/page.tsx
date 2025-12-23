import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratlus Case Study — Sahil Kamal",
  description: "An AI-assisted travel planning platform with calendar automation and Stripe payments.",
};

export default function TratlusCaseStudy() {
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
              Tratlus
            </h1>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              Full-Stack AI Travel Platform
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            An AI-assisted travel planning platform that turns swipe-based preferences into personalized itineraries with automatic calendar synchronization.
          </p>
          
          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-success/10 text-success">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Itineraries in &lt;30 seconds
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
              60% less manual scheduling
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 text-muted">
              Google Maps + Calendar APIs
            </span>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://tratlus.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Live Site →
            </a>
            <a
              href="https://github.com/sahilkamalny/tratlus"
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
              Tratlus is a travel planning platform that converts vague preferences into concrete, schedulable itineraries. Users swipe through destination options, and the system generates personalized travel plans that automatically sync with their calendars.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Problem</h2>
            <p className="text-muted leading-relaxed">
              Planning travel is tedious. Users spend hours researching destinations, cross-referencing calendars, and manually creating schedules. Most planning tools require significant upfront input before providing any value. The result: abandoned plans and decision fatigue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Constraints</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Preference capture needed to be fast and low-friction (mobile-first)</li>
              <li>Generated plans had to account for real calendar constraints</li>
              <li>System needed to handle payment flow for booking fees</li>
              <li>API rate limits on Google Maps and Calendar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Solution</h2>
            <p className="text-muted leading-relaxed">
              I built a swipe-based preference capture system that uses a swipe-based interface to minimize friction during preference capture. Once preferences are collected, LLM-driven prompt engineering generates structured itineraries. The system then integrates with Google Calendar to automatically schedule activities and prevent conflicts, reducing manual scheduling work by 60%.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Architecture &amp; Stack</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Frontend</span>
                  <span className="text-muted">React, TypeScript, mobile-first responsive UI</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Backend</span>
                  <span className="text-muted">Firebase Cloud Functions</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Database</span>
                  <span className="text-muted">Firebase Firestore</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">External APIs</span>
                  <span className="text-muted">Google Maps, Google Calendar, Stripe</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Engineering Decisions</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Swipe-based preference capture to reduce cognitive load</li>
              <li>Structured LLM prompts producing JSON-formatted itineraries</li>
              <li>Google Calendar integration for conflict-aware scheduling</li>
              <li>Stripe payment flow with webhook-based confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges &amp; Tradeoffs</h2>
            <p className="text-muted leading-relaxed">
              Coordinating multiple external APIs (Maps, Calendar, Stripe) while keeping the UX snappy was the core challenge. I implemented optimistic UI updates and background syncing—the user sees immediate feedback while the system reconciles with external services asynchronously. The tradeoff: eventual consistency instead of strong consistency, but significantly better perceived performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Results</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">&lt;30s</div>
                  <div className="text-sm text-muted mt-1">Itinerary generation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">60%</div>
                  <div className="text-sm text-muted mt-1">Less manual scheduling</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Zero</div>
                  <div className="text-sm text-muted mt-1">Calendar conflicts</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What This Demonstrates</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>API orchestration across multiple external services</li>
              <li>Payment integration with proper webhook handling</li>
              <li>UX design that reduces friction and increases task completion</li>
              <li>LLM prompt engineering for structured, parseable outputs</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}

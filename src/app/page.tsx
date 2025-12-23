"use client";

import Link from "next/link";
import Image from "next/image";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          
          {/* Profile Image - Left Column */}
          <ScrollReveal>
             <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                <Image 
                  src="/profile.png" 
                  alt="Sahil Kamal" 
                  fill 
                  className="object-cover scale-[1.35] -translate-x-3"
                  style={{ objectPosition: '100% 6%' }}
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content - Right Column */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0">
             <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[0.9] mb-6">
                SOFTWARE<br />ENGINEER
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Hi, I&apos;m <span className="text-accent">Sahil Kamal</span>!
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-lg text-muted leading-relaxed space-y-4 max-w-2xl">
                 <p>
                  Full-stack engineer focused on <span className="text-foreground font-medium">AI-driven applications</span> and <span className="text-foreground font-medium">performance optimization</span>. I build systems that scale - from spaced repetition algorithms validated by educators to async conflict detection that handles scheduling without blocking UX.
                </p>
                <p>
                  Recent work includes a <span className="text-foreground font-medium">production SaaS platform</span> serving 80+ users with 60-70% retention, and frontend optimizations that cut load times by 50% through React memoization and hardware-accelerated CSS.
                </p>
                <p>
                   🏆 <span className="text-foreground font-medium">RamHacks 2025 Winner</span> • Founder, relearnable.ai
                </p>
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
                >
                  Projects <span className="ml-2">↓</span>
                </Link>
                 <Link
                  href="/resume"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full border border-border text-foreground hover:bg-foreground/5 transition-colors"
                >
                  Resume
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </section>

      {/* Selected Work Header - Centered to viewport */}
      <section className="w-full py-16">
        <div className="flex flex-col items-center justify-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">Selected Work</h2>
            <p className="mt-4 text-muted text-center">A timeline of production systems and engineering challenges.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-foreground/[0.02] py-12">
        <ProjectTimeline />

        <div className="text-center pt-16 pb-8">
          <Link href="/projects" className="inline-flex items-center text-accent hover:underline gap-1 group font-medium">
            View all projects detailed view 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Contact Section - Centered to viewport */}
      <section className="w-full py-24">
        <div className="flex flex-col items-center justify-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">Get In Touch</h2>
            <p className="mt-4 text-muted text-lg text-center">Currently seeking Software Engineering Internships for Summer 2026.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mt-12 px-6">
              <a href="mailto:sahilkamal.dev@gmail.com" className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-left min-w-0">
                  <div className="text-sm font-medium text-muted">Email</div>
                  <div className="font-semibold text-foreground truncate">sahilkamal.dev@gmail.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/sahilkamalny" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-muted">LinkedIn</div>
                  <div className="font-semibold text-foreground">/in/sahilkamalny</div>
                </div>
              </a>
              <a href="https://github.com/sahilkamalny" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-muted">GitHub</div>
                  <div className="font-semibold text-foreground">sahilkamalny</div>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

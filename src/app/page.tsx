"use client";

import Link from "next/link";
import Image from "next/image";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Building production web products <br className="hidden md:block" />
                <span className="text-muted/60">that solve real problems.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-xl text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Full-stack software engineer focused on <span className="text-foreground font-medium">clean architecture</span>, <span className="text-foreground font-medium">performance</span>, and <span className="text-foreground font-medium">user engagement</span>.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full bg-foreground text-background hover:scale-105 transition-transform duration-200"
                >
                  View Work
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full border border-border hover:bg-card hover:border-accent/50 transition-all duration-200"
                >
                  Download Resume
                </Link>
              </div>
            </ScrollReveal>

            {/* Credibility Line */}
            <ScrollReveal delay={0.3}>
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted bg-card/50 px-4 py-2 rounded-full border border-border/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                Founder & Lead Engineer, <span className="font-semibold text-foreground">relearnable.ai</span> - AI SaaS with 60-70% returning users
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="relative w-full h-full rounded-full border-4 border-background overflow-hidden">
                <Image 
                  src="/profile.png" 
                  alt="Sahil Kamal" 
                  fill 
                  className="object-cover object-center scale-[1.45] translate-y-12"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
           <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Selected Work</h2>
            <p className="mt-4 text-muted">A timeline of production systems and engineering challenges.</p>
          </ScrollReveal>
        </div>
        
        <ProjectTimeline />

        <div className="text-center pb-32">
          <Link href="/projects" className="inline-flex items-center text-accent hover:underline gap-1 group">
            View all projects detailed view 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <ScrollReveal>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background flourish */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

            <h2 className="relative text-2xl font-semibold text-foreground mb-6">About Me</h2>
            <div className="relative text-muted leading-relaxed space-y-4 text-lg">
              <p>
                I&apos;m a software engineer who believes the <span className="text-foreground font-medium">best code is invisible</span> - fast, reliable, and intuitive.
              </p>
              <p>
                My approach: solve the core problem, minimize friction, and ship often. From optimizing React re-renders to designing scalable databases, I focus on the details that deliver <span className="text-foreground font-medium">real user impact</span>.
              </p>
              <p>
                Currently seeking <span className="text-foreground font-medium">Software Engineering Internships for Summer 2026</span> - ready to contribute <span className="text-foreground font-medium">production-quality code</span> from day one.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:sahilkamal.dev@gmail.com" className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-accent/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-muted">Email</div>
                  <div className="font-medium text-foreground">sahilkamal.dev@gmail.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/sahilkamalny" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-accent/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <div className="text-xs text-muted">LinkedIn</div>
                  <div className="font-medium text-foreground">/in/sahilkamalny</div>
                </div>
              </a>
            </div>

          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

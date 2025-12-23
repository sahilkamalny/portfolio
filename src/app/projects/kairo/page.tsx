import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kairo Case Study — Sahil Kamal",
  description: "An interactive REPL OS shell with 40% improved execution speed.",
};

export default function KairoCaseStudy() {
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
              Kairo
            </h1>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              Interactive OS Shell
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            A Python-based interactive REPL shell that unifies OS utilities into a functional architecture with 40% faster execution.
          </p>
          
          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-success/10 text-success">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              100+ chainable commands
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
              40% faster execution
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 text-muted">
              10+ beta testers
            </span>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/sahilkamalny/kairo"
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
              Kairo is an interactive command-line shell built in Python that reimagines how OS utilities are organized and executed. By consolidating scattered legacy executables into a unified REPL with functional programming patterns, it achieves 40% faster execution and dramatically cleaner code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Problem</h2>
            <p className="text-muted leading-relaxed">
              Legacy OS utilities are scattered, inconsistently designed, and often require chaining multiple commands for simple tasks. Maintenance is painful—each utility has its own argument conventions, output formats, and error handling patterns. The result: slow workflows and brittle scripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Constraints</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Had to interoperate with existing system utilities</li>
              <li>REPL needed to be responsive for interactive use</li>
              <li>Command syntax had to be intuitive for users familiar with traditional shells</li>
              <li>Architecture needed to support easy addition of new commands</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Solution</h2>
            <p className="text-muted leading-relaxed">
              I refactored legacy executables into a unified functional programming architecture. Commands are first-class functions that can be composed, piped, and tested independently. The REPL evaluates expressions lazily where possible, and command orthogonality was refined through peer usability testing—users helped identify confusing or overlapping commands.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Architecture &amp; Stack</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Runtime</span>
                  <span className="text-muted">Python 3.x</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Architecture</span>
                  <span className="text-muted">Functional programming with command composition</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Interface</span>
                  <span className="text-muted">Interactive REPL with readline support</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Testing</span>
                  <span className="text-muted">Peer usability testing for command design</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Engineering Decisions</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Functional architecture: commands are pure functions where possible, enabling easy composition</li>
              <li>Lazy evaluation for expensive operations, improving perceived responsiveness</li>
              <li>Command orthogonality: each command does one thing well, reducing overlap and confusion</li>
              <li>Consistent output format across all commands for reliable piping</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges &amp; Tradeoffs</h2>
            <p className="text-muted leading-relaxed">
              The hardest part was deciding where to break compatibility with traditional shell conventions. I chose to prioritize consistency over familiarity—commands follow a uniform pattern even when it differs from legacy equivalents. This required clear documentation and a learning curve, but dramatically reduced cognitive load once users adapted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Results</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">100+</div>
                  <div className="text-sm text-muted mt-1">Chainable commands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">40%</div>
                  <div className="text-sm text-muted mt-1">Faster execution</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted mt-1">Beta testers</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What This Demonstrates</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Systems programming and OS-level understanding</li>
              <li>Functional programming architecture design</li>
              <li>Performance optimization with measurable results</li>
              <li>User-centered design through peer testing</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}

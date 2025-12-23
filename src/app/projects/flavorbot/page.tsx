import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlavorBot Case Study — Sahil Kamal",
  description: "An AI recipe generator with interactive LLM-driven refinement.",
};

export default function FlavorBotCaseStudy() {
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
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              FlavorBot
            </h1>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              AI Recipe System
            </span>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-success/10 text-success">
              🏆 RamHacks 2025 Winner
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            A desktop AI recipe generator that personalizes recipes based on ingredients, allergies, and dietary constraints, with interactive LLM-driven refinement.
          </p>
          
          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-success/10 text-success">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Most Practical Application of AI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
              400+ recipes processed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 text-muted">
              25% faster revisions
            </span>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/aescorcia65/FlavorBot"
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
              FlavorBot is a Java desktop application that generates personalized recipes using AI. Users input available ingredients and dietary constraints, and the system produces tailored recipes. What sets it apart: an interactive refinement loop where users can request specific changes that get routed back to the LLM for automated adjustment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Problem</h2>
            <p className="text-muted leading-relaxed">
              Recipe websites assume you have every ingredient and no dietary restrictions. Users with specific constraints—allergies, limited pantries, dietary preferences—spend significant time manually adapting recipes. When AI-generated recipes aren&apos;t quite right, there&apos;s no efficient way to request targeted modifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Constraints</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Desktop application (JavaFX) with traditional UI patterns</li>
              <li>Recipe output needed to be structured and parseable, not freeform text</li>
              <li>Edit requests had to preserve context from previous iterations</li>
              <li>API costs required efficient prompt design</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Solution</h2>
            <p className="text-muted leading-relaxed">
              I built a structured output interface that presents recipes in editable sections. When users request changes—&quot;less salt,&quot; &quot;substitute chicken for tofu&quot;—the system routes those edits back to the OpenAI API with full conversation context. This refinement loop reduced revision turnaround time by 25% and improved first-pass acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Architecture &amp; Stack</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Runtime</span>
                  <span className="text-muted">Java (JDK 17+)</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">UI Framework</span>
                  <span className="text-muted">JavaFX with FXML layouts</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Database</span>
                  <span className="text-muted">SQL (local persistence for saved recipes)</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">AI Layer</span>
                  <span className="text-muted">OpenAI API with structured prompt chains</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Engineering Decisions</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Structured JSON output from LLM for consistent recipe parsing across iterations</li>
              <li>Conversation context preservation to maintain coherence during refinement</li>
              <li>Sectioned UI that maps to recipe structure (ingredients, steps, notes)</li>
              <li>Local SQL storage for recipe persistence without cloud dependency</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges &amp; Tradeoffs</h2>
            <p className="text-muted leading-relaxed">
              The main challenge was balancing conversation context with API token limits. Longer context means better refinement quality, but higher latency and cost. I implemented a sliding window approach: the system keeps the original constraints plus the last 2 refinement requests, which provided the best balance of quality and responsiveness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Results</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">25%</div>
                  <div className="text-sm text-muted mt-1">Faster revision turnaround</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">Higher</div>
                  <div className="text-sm text-muted mt-1">First-pass acceptance rate</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What This Demonstrates</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Interactive AI system design with refinement loops</li>
              <li>Structured LLM output parsing and validation</li>
              <li>Desktop application development (JavaFX)</li>
              <li>Token-aware prompt engineering for cost efficiency</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}

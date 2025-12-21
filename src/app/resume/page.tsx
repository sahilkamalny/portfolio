import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Sahil Kamal",
  description: "Download my resume for a concise overview of my experience, skills, and projects.",
};

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="text-left mb-8">
            <Link 
                href="/" 
                className="text-sm text-muted hover:text-foreground transition-colors"
            >
            ← Back to Home
            </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Resume
        </h1>
        <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
          For a concise overview of my experience, skills, and projects, download my resume below.
        </p>
        
        <div className="mt-10">
          <a
            href="/resume.pdf"
            download="Sahil Kamal (Resume).pdf"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        {/* PDF Preview */}
        <div className="mt-12 rounded-xl border border-border overflow-hidden bg-card">
          <iframe
            src="/resume.pdf"
            className="w-full h-[800px]"
            title="Resume Preview"
          />
        </div>

        <p className="mt-6 text-sm text-muted">
          PDF not loading? <a href="/resume.pdf" download className="text-accent hover:underline">Click here to download</a>
        </p>
      </section>
    </div>
  );
}

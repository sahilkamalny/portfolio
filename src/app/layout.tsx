import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Kamal — Software Engineer",
  description: "Full-stack software engineer building production-ready web applications with real users and measurable engagement.",
  openGraph: {
    title: "Sahil Kamal — Software Engineer",
    description: "Full-stack software engineer building production-ready web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold text-foreground hover:text-accent transition-colors shrink-0">
              Sahil Kamal
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/projects" className="text-muted hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/resume" className="text-muted hover:text-foreground transition-colors">
                Resume
              </Link>
              <a 
                href="https://github.com/sahilkamalny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/sahilkamalny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-3">
              <Link href="/projects" className="text-sm text-muted hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/resume" className="text-sm text-muted hover:text-foreground transition-colors">
                Resume
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main content with padding for fixed nav */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-12 mt-24">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted">
            <p>© {new Date().getFullYear()} Sahil Kamal</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

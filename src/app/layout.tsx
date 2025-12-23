import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const corporateSPro = localFont({
  src: "../fonts/CorporateSProMedium.otf",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Kamal — Software Engineer",
  description: "Full-stack software engineer building AI-driven applications with live users. RamHacks 2025 award winner. Founder of Relearnable.ai, a production SaaS platform.",
  openGraph: {
    title: "Sahil Kamal — Software Engineer",
    description: "Full-stack software engineer building AI-driven applications. Award-winning developer and founder of Relearnable.ai.",
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
        className={`${corporateSPro.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors shrink-0">
              Sahil Kamal
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-base font-medium">
              <Link href="/" className="text-muted hover:text-foreground transition-colors">
                Home
              </Link>
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
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted">
            <p>© {new Date().getFullYear()} Sahil Kamal</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zachary Lim — Tech-savvy Strategist & Aspiring PM",
  description:
    "Tech-savvy Business Strategist and aspiring Product Manager based in Singapore. Bridging engineering depth, data storytelling, and business strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-geist-sans)] antialiased">
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 Zachary Lim 
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/zlim/" },
                { label: "GitHub", href: "https://github.com/jhuanolim/" },
                { label: "Email", href: "mailto:jhuanolim@gmail.com" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

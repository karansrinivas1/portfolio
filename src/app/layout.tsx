import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karan Srinivas — AI & Software Engineer",
  description:
    "Software Engineer specializing in agentic AI pipelines, cloud infrastructure, and full-stack development. Building systems that scale to millions.",
  openGraph: {
    title: "Karan Srinivas",
    description:
      "Software Engineer building AI systems that actually ship. 4+ years, 1M+ daily queries.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

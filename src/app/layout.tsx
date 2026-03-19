import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divinity Reflections - AI-Powered Wellbeing for Young People",
  description: "Divinity Reflections is an AI-powered wellbeing app for young people, designed to support focus, emotional expression, self-confidence, and academic growth. With Bestie, a friendly AI companion, bridging mindfulness, AI, and the gap between student and counselor ratios.",
  keywords: ["Divinity Reflections", "wellbeing", "AI companion", "Bestie", "mental health", "focus", "students", "mindfulness", "emotional expression", "self-confidence", "academic growth"],
  authors: [{ name: "Hayley Owens" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Divinity Reflections - AI-Powered Wellbeing",
    description: "An AI-powered wellbeing app for young people, designed to support focus, emotional expression, self-confidence, and academic growth.",
    url: "https://divinity-three.vercel.app",
    siteName: "Divinity Reflections",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divinity Reflections - AI-Powered Wellbeing",
    description: "An AI-powered wellbeing app for young people, designed to support focus, emotional expression, self-confidence, and academic growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

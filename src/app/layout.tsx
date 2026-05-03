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
  title: "Divinity Reflections - AI Companion for Wellbeing, Growth & Everyday Life",
  description: "Divinity Reflections is an AI-powered wellbeing platform built to support the whole person — emotionally, mentally, academically, and practically. With agentic intelligence, long-term memory, and a warm AI companion that understands you, grows with you, and actively helps lighten your load.",
  keywords: ["Divinity Reflections", "wellbeing", "AI companion", "mental health", "agentic AI", "long-term memory", "emotional intelligence", "focus tools", "mindfulness", "self-development", "students", "professionals"],
  authors: [{ name: "Hayley Owens" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Divinity Reflections - AI Companion for Wellbeing, Growth & Everyday Life",
    description: "An AI-powered wellbeing platform built to support the whole person — emotionally, mentally, academically, and practically. Wellness that listens, intelligence that acts, support that stays.",
    url: "https://divinity-three.vercel.app",
    siteName: "Divinity Reflections",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divinity Reflections - AI Companion for Wellbeing, Growth & Everyday Life",
    description: "An AI-powered wellbeing platform built to support the whole person — emotionally, mentally, academically, and practically.",
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

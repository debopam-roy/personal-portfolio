import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debopam Roy",
  description: "Full-stack developer specializing in modern web technologies. Explore my projects, skills, and experience in software development.",
  keywords: ["Debopam Roy", "Portfolio", "Full-stack Developer", "Web Developer", "Software Engineer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Debopam Roy" }],
  creator: "Debopam Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Debopam Roy",
    description: "Full-stack developer specializing in modern web technologies. Explore my projects, skills, and experience in software development.",
    siteName: "Debopam Roy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debopam Roy",
    description: "Full-stack developer specializing in modern web technologies. Explore my projects, skills, and experience in software development.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

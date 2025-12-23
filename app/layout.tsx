import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navigation from "@/components/Navigation";
import "react-vertical-timeline-component/style.min.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altaf - Full-Stack Engineer | Web & Mobile Development",
  description:
    "Full-Stack Engineer specializing in React, Next.js, React Native, and DevOps. Building scalable web and mobile applications with modern technologies. Based in Lahore, Pakistan.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "React Native",
    "Node.js",
    "DevOps",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "Web Development",
    "Mobile App Development",
  ],
  authors: [{ name: "Altaf", url: "https://github.com/codewithkashi" }],
  creator: "Altaf",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Altaf - Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in building scalable web and mobile applications",
    siteName: "Altaf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altaf - Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in building scalable web and mobile applications",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navigation />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

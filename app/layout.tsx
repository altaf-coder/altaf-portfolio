import type { Metadata } from "next";
import {
  DM_Sans,
  Instrument_Serif,
  JetBrains_Mono,
  Syne,
} from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navigation from "@/components/Navigation";
import "react-vertical-timeline-component/style.min.css";
import { Toaster } from "sonner";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          // enableSystem — re-enable when theme toggle is restored
          storageKey="theme"
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

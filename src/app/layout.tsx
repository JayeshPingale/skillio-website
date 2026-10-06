import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skillio | Pune's Premier IT Training & Career Accelerator",
  description:
    "Launch your tech career with Pune's top-rated IT training institute. Practical courses in AI-Powered Software Testing, Java Full Stack, Data Science, and DevOps. Centers in Pimple Saudagar & Erandwane with 100% placement support.",
  keywords: [
    "software training institute pune",
    "software testing course in pune",
    "java full stack developer classes pune",
    "automation testing selenium playwright",
    "it training pimple saudagar",
    "it classes erandwane",
    "skillio pune",
  ],
  authors: [{ name: "Skillio Tech Institute" }],
  openGraph: {
    title: "Skillio | Launch Your Tech Career with 100% Placement Support",
    description:
      "Join Pune's premier software training academy. Live industry projects, MNC mentors, zero-cost EMI, and dedicated placement cell.",
    url: "https://helloskillio.com",
    siteName: "Skillio",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0D1117] text-[#C9D1D9] antialiased selection:bg-[#FF8800] selection:text-[#0D1117]">
        {children}
      </body>
    </html>
  );
}

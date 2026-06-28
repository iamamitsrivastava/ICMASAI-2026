import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ICMASAI 2026 - International Conference on Multi-Agent Systems in Artificial Intelligence",
  description: "International Conference on Multi-Agent Systems in Artificial Intelligence 2026, bringing together researchers, academics, and industry experts from around the world.",
  keywords: ["conference", "quantum", "technology", "research", "digital transformation", "blockchain", "AI", "innovation"],
  authors: [{ name: "ICMASAI" }],
  creator: "ICMASAI",
  publisher: "ICMASAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ICMASAI2026.com",
    title: "ICMASAI 2026 - International Conference on Multi-Agent Systems in Artificial Intelligence",
    description: "International Conference on Multi-Agent Systems in Artificial Intelligence 2026, bringing together researchers, academics, and industry experts from around the world.",
    siteName: "ICMASAI 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICMASAI 2026 - International Conference on Multi-Agent Systems in Artificial Intelligence",
    description: "International Conference on Multi-Agent Systems in Artificial Intelligence 2026, bringing together researchers, academics, and industry experts from around the world.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

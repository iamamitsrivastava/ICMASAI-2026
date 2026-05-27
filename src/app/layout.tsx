import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ICQTDBT 2026 - International Conference on Quantum Technologies and Digital Business Transformation",
  description: "International Conference on Quantum Technologies and Digital Business Transformation 2026, bringing together researchers, academics, and industry experts from around the world.",
  keywords: ["conference", "quantum", "technology", "research", "digital transformation", "blockchain", "AI", "innovation"],
  authors: [{ name: "ICQTDBT" }],
  creator: "ICQTDBT",
  publisher: "ICQTDBT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ICQTDBT2026.com",
    title: "ICQTDBT 2026 - International Conference on Quantum Technologies and Digital Business Transformation",
    description: "International Conference on Quantum Technologies and Digital Business Transformation 2026, bringing together researchers, academics, and industry experts from around the world.",
    siteName: "ICQTDBT 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICQTDBT 2026 - International Conference on Quantum Technologies and Digital Business Transformation",
    description: "International Conference on Quantum Technologies and Digital Business Transformation 2026, bringing together researchers, academics, and industry experts from around the world.",
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
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
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

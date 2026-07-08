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
  title: "AISCT 2026-27 - International Conference on Artificial Intelligence and Sustainable Computing Technologies",
  description: "International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27), bringing together researchers, academics, and industry experts from around the world.",
  keywords: ["conference", "quantum", "technology", "research", "digital transformation", "blockchain", "AI", "innovation", "sustainable computing"],
  authors: [{ name: "AISCT" }],
  creator: "AISCT",
  publisher: "AISCT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://AISCT2026-27.com",
    title: "AISCT 2026-27 - International Conference on Artificial Intelligence and Sustainable Computing Technologies",
    description: "International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27), bringing together researchers, academics, and industry experts from around the world.",
    siteName: "AISCT 2026-27",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISCT 2026-27 - International Conference on Artificial Intelligence and Sustainable Computing Technologies",
    description: "International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27), bringing together researchers, academics, and industry experts from around the world.",
  },
  robots: "index, follow",
  icons: {
    icon: "/assets/aisct-logo-new.png",
    shortcut: "/assets/aisct-logo-new.png",
    apple: "/assets/aisct-logo-new.png",
  },
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

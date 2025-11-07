import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUNARA - AI-Optimized Carbon-Aware Heating for Budapest",
  description: "28% energy reduction through ML-powered carbon-aware heating optimization. Proven with 11,310+ Hungarian grid data points. GradientBoosting model with 35% MAE improvement.",
  keywords: ["carbon-aware", "AI optimization", "MAVIR", "Budapest", "energy efficiency", "machine learning", "smart heating", "GradientBoosting", "RandomForest"],
  openGraph: {
    title: "LUNARA - AI-Optimized Carbon-Aware Heating",
    description: "28% energy reduction with ML-powered heating optimization",
    type: "website",
  },
};

"use client";

import { LanguageProvider } from "@/lib/contexts/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

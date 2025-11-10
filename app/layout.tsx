import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUNARA - AI-Optimized Carbon-Aware Heating for Budapest",
  description: "37.9% energy reduction through ML-powered carbon-aware heating optimization. Trained on 11,310+ data points from Open-Meteo, Eurostat, and Hungarian grid patterns. GradientBoosting model with 35% MAE improvement.",
  keywords: ["carbon-aware", "AI optimization", "Hungarian grid", "Budapest", "energy efficiency", "machine learning", "smart heating", "GradientBoosting", "RandomForest", "district heating"],
  openGraph: {
    title: "LUNARA - AI-Optimized Carbon-Aware Heating",
    description: "37.9% energy reduction with ML-powered heating optimization",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

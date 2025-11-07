import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUNARA - AI-Optimized Carbon-Aware Heating for Budapest",
  description: "29% energy reduction through ML-powered carbon-aware heating optimization. Proven with 11,310+ Hungarian grid data points. Real-time MAVIR integration.",
  keywords: ["carbon-aware", "AI optimization", "MAVIR", "Budapest", "energy efficiency", "machine learning", "smart heating"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      {children}
    </LanguageProvider>
  );
}

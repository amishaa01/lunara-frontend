"use client";

import { motion } from "framer-motion";
import { Activity, Loader2 } from "lucide-react";
import { useCarbonIntensity } from "@/lib/hooks/use-carbon-intensity";
import { getCarbonIntensityColor } from "@/lib/utils/calculations";
import { scaleIn } from "@/lib/utils/animations";
import { cn } from "@/lib/utils/cn";
import type { CarbonTrend } from "@/types";

const trendConfig: Record<CarbonTrend, { icon: string; label: string }> = {
  decreasing: { icon: "↓", label: "Cleaner" },
  increasing: { icon: "↑", label: "Dirtier" },
  stable: { icon: "→", label: "Stable" },
};

export default function LiveCarbonIntensity() {
  const { intensity, trend, isLoading } = useCarbonIntensity();
  const colorClass = getCarbonIntensityColor(intensity);
  const trendInfo = trendConfig[trend];

  if (isLoading) {
    return (
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg">
        <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
        <span className="text-sm text-gray-600">Loading grid data...</span>
      </div>
    );
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg"
      role="status"
      aria-live="polite"
      aria-label={`Current carbon intensity: ${intensity} grams CO2 per kilowatt hour, ${trendInfo.label}`}
    >
      <Activity className={cn("h-5 w-5", colorClass)} aria-hidden="true" />
      <div className="text-left">
        <div className="text-xs text-gray-600 font-medium">Budapest Grid Now</div>
        <div className="text-lg font-bold">
          {intensity} <span className="text-sm font-normal text-gray-600">gCO₂/kWh</span>
        </div>
      </div>
      <div className={cn("text-xs px-2 py-1 rounded font-medium", colorClass)}>
        {trendInfo.icon} {trendInfo.label}
      </div>
    </motion.div>
  );
}

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
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-white border border-gray-200">
        <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
        <span className="text-sm text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="inline-flex items-center gap-4 px-5 py-2.5 rounded-lg bg-white border border-gray-200"
      role="status"
      aria-live="polite"
      aria-label={`Current carbon intensity: ${intensity} grams CO2 per kilowatt hour, ${trendInfo.label}`}
    >
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-gray-400" aria-hidden="true" />
        <span className="text-xs text-gray-500 font-medium">Live</span>
      </div>
      <div className="h-4 w-px bg-gray-200" />
      <div className="text-left">
        <div className="text-sm font-semibold text-gray-900">
          {intensity} <span className="text-xs font-normal text-gray-500">gCO₂/kWh</span>
        </div>
      </div>
      <div className="text-xs text-gray-500">
        {trendInfo.icon}
      </div>
    </motion.div>
  );
}

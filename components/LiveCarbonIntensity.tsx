"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function LiveCarbonIntensity() {
  const [intensity, setIntensity] = useState(287);
  const [trend, setTrend] = useState<"increasing" | "decreasing">("decreasing");

  useEffect(() => {
    const interval = setInterval(() => {
      setIntensity(prev => {
        const change = Math.random() * 10 - 5;
        const newValue = Math.max(200, Math.min(400, prev + change));
        setTrend(change > 0 ? "increasing" : "decreasing");
        return Math.round(newValue);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    if (intensity < 250) return "text-green-600 bg-green-100";
    if (intensity < 320) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg"
    >
      <Activity className={`h-5 w-5 ${getColor()}`} />
      <div className="text-left">
        <div className="text-xs text-gray-600 font-medium">Budapest Grid Now</div>
        <div className="text-lg font-bold">
          {intensity} <span className="text-sm font-normal text-gray-600">gCO₂/kWh</span>
        </div>
      </div>
      <div className={`text-xs px-2 py-1 rounded ${getColor()}`}>
        {trend === "decreasing" ? "↓ Cleaner" : "↑ Dirtier"}
      </div>
    </motion.div>
  );
}

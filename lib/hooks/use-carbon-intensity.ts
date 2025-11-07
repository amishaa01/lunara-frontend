import { useEffect, useState, useCallback } from "react";
import type { CarbonTrend } from "@/types";

interface UseCarbonIntensityReturn {
  intensity: number;
  trend: CarbonTrend;
  isLoading: boolean;
}

const MOCK_BASE_INTENSITY = 287;
const UPDATE_INTERVAL = 3000;
const INTENSITY_BOUNDS = { min: 200, max: 400 };

export function useCarbonIntensity(): UseCarbonIntensityReturn {
  const [intensity, setIntensity] = useState(MOCK_BASE_INTENSITY);
  const [trend, setTrend] = useState<CarbonTrend>("decreasing");
  const [isLoading, setIsLoading] = useState(true);

  const updateIntensity = useCallback(() => {
    setIntensity((prev) => {
      const change = Math.random() * 10 - 5;
      const newValue = Math.max(
        INTENSITY_BOUNDS.min,
        Math.min(INTENSITY_BOUNDS.max, prev + change)
      );
      
      // Determine trend
      if (Math.abs(change) < 1) {
        setTrend("stable");
      } else {
        setTrend(change > 0 ? "increasing" : "decreasing");
      }
      
      return Math.round(newValue);
    });
  }, []);

  useEffect(() => {
    // Simulate initial load
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const interval = setInterval(updateIntensity, UPDATE_INTERVAL);

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(interval);
    };
  }, [updateIntensity]);

  return { intensity, trend, isLoading };
}

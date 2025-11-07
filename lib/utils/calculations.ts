import { siteConfig } from "@/lib/config/site";
import type { SavingsResult, CarbonIntensityLevel } from "@/types";

const CARBON_THRESHOLDS = {
  low: 250,
  medium: 320,
} as const;

const EQUIVALENTS = {
  treesPerKg: 0.05, // 1 tree absorbs ~20kg CO2/year
  kmPerKg: 2.5, // 1kg CO2 = ~2.5km driven
  kwhPerEuro: 6.67, // Average €0.15/kWh
} as const;

export function calculateSavings(monthlyBill: number): SavingsResult {
  const { savingsRate, carbonMultiplier } = siteConfig.constants;
  
  const monthlySavings = monthlyBill * savingsRate;
  const yearlySavings = monthlySavings * 12;
  const carbonReduction = yearlySavings * carbonMultiplier;
  
  return {
    monthly: Math.round(monthlySavings),
    yearly: Math.round(yearlySavings),
    carbon: Math.round(carbonReduction),
    equivalents: {
      trees: Math.round(carbonReduction * EQUIVALENTS.treesPerKg),
      kmNotDriven: Math.round(carbonReduction * EQUIVALENTS.kmPerKg),
      kwhSaved: Math.round(yearlySavings * EQUIVALENTS.kwhPerEuro),
    },
  };
}

export function getCarbonIntensityLevel(intensity: number): CarbonIntensityLevel {
  if (intensity < CARBON_THRESHOLDS.low) return "low";
  if (intensity < CARBON_THRESHOLDS.medium) return "medium";
  return "high";
}

export function getCarbonIntensityColor(intensity: number): string {
  const level = getCarbonIntensityLevel(intensity);
  
  const colorMap: Record<CarbonIntensityLevel, string> = {
    low: "text-green-600 bg-green-100",
    medium: "text-yellow-600 bg-yellow-100",
    high: "text-red-600 bg-red-100",
  };
  
  return colorMap[level];
}

export function formatCurrency(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("hu-HU").format(num);
}

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

// Building type efficiency from backend model
// residential: 0.85, commercial: 0.75, office: 0.80, mixed: 0.78
// Lower efficiency = higher energy use = more savings potential
const BUILDING_EFFICIENCY = {
  apartment: 0.85,           // residential
  "large-apartment": 0.82,   // larger residential, slightly less efficient
  house: 0.80,               // standalone house, less efficient
  business: 0.75,            // commercial, least efficient
} as const;

// Average area from backend: residential 85m², commercial 200m², office 150m²
const BUILDING_AREA = {
  apartment: 65,             // 50-80m² average
  "large-apartment": 100,    // 80-120m² average
  house: 140,                // 120m²+ average
  business: 200,             // commercial average
} as const;

// District heating coverage (from backend: 80% have district heating)
const DISTRICT_HEATING_COVERAGE = {
  "5": 0.85,  // Belváros - high coverage
  "6": 0.82,  // Terézváros
  "7": 0.80,  // Erzsébetváros
  "8": 0.78,  // Józsefváros - slightly lower
} as const;

export function calculateSavings(
  monthlyBill: number,
  buildingType: keyof typeof BUILDING_EFFICIENCY = "apartment",
  district: string = "8"
): SavingsResult {
  const { savingsRate, carbonMultiplier } = siteConfig.constants;
  
  // Calculate based on building characteristics from backend model
  const efficiency = BUILDING_EFFICIENCY[buildingType] || 0.85;
  const area = BUILDING_AREA[buildingType] || 85;
  const districtHeating = DISTRICT_HEATING_COVERAGE[district as keyof typeof DISTRICT_HEATING_COVERAGE] || 0.80;
  
  // Larger area + lower efficiency = more energy use = more savings potential
  // Formula matches backend: area_factor * (1/efficiency) * district_heating_factor
  const areaFactor = area / 85; // normalized to apartment baseline
  const efficiencyFactor = 0.85 / efficiency; // inverse - lower efficiency = higher factor
  const heatingFactor = districtHeating / 0.80; // normalized to baseline
  
  const adjustedRate = savingsRate * areaFactor * efficiencyFactor * heatingFactor;
  
  const monthlySavings = monthlyBill * adjustedRate;
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

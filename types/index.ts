import { LucideIcon } from "lucide-react";

export type CarbonIntensityLevel = "low" | "medium" | "high";
export type CarbonTrend = "increasing" | "decreasing" | "stable";
export type BuildingType = "apartment" | "large-apartment" | "house" | "business";
export type DistrictStatus = "available" | "coming";

export interface CarbonIntensity {
  value: number;
  intensity: CarbonIntensityLevel;
  trend: CarbonTrend;
  lastUpdated: string;
}

export interface CalculatorFormData {
  district: string;
  buildingType: BuildingType;
  monthlyBill: number;
}

export interface SavingsResult {
  monthly: number;
  yearly: number;
  carbon: number;
  equivalents: {
    trees: number;
    kmNotDriven: number;
    kwhSaved: number;
  };
}

export interface District {
  id: number;
  name: string;
  fullName: string;
  status: DistrictStatus;
  date?: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  district?: string;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

export interface AnimationVariant {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string | number[];
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}

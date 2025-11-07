import { Database, TrendingDown, Building2, Zap } from "lucide-react";
import type { Stat } from "@/types";

export const technicalStats: Stat[] = [
  {
    icon: Database,
    value: "11,310+",
    label: "Real Hungarian data points",
    color: "text-blue-600",
  },
  {
    icon: TrendingDown,
    value: "29%",
    label: "Average proven savings",
    color: "text-green-600",
  },
  {
    icon: Building2,
    value: "1,000+",
    label: "Buildings modeled",
    color: "text-purple-600",
  },
  {
    icon: Zap,
    value: "2M+",
    label: "Hourly decisions optimized",
    color: "text-orange-600",
  },
] as const;

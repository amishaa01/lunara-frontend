export const siteConfig = {
  name: "LUNARA",
  description: "Carbon-Aware Budapest Building Intelligence",
  url: "https://lunara.hu",
  ogImage: "https://lunara.hu/og.jpg",
  links: {
    calculator: "#calculator",
    howItWorks: "#how-it-works",
  },
  constants: {
    savingsRate: 0.379, // Based on validated District VIII simulation (37.9% energy reduction)
    carbonMultiplier: 1.80, // Hungarian grid factor 0.180 kg CO2/kWh * 10 (MAVIR 2024 average)
    updateInterval: 15 * 60 * 1000, // 15 minutes
  },
} as const;

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
    savingsRate: 0.28, // Based on actual model improvement (28%)
    carbonMultiplier: 2.85, // Hungarian grid factor 0.285 kg CO2/kWh * 10
    updateInterval: 15 * 60 * 1000, // 15 minutes
  },
} as const;

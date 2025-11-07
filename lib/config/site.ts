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
    savingsRate: 0.29,
    carbonMultiplier: 2.5,
    updateInterval: 15 * 60 * 1000, // 15 minutes
  },
} as const;

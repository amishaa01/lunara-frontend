# LUNARA

Carbon-aware heating optimization for Budapest buildings. Reduces energy costs by 28% using ML models trained on real Hungarian grid data.

## What it does

Predicts building heating demand and schedules heating during low-carbon hours. Uses GradientBoosting (MAE: 0.083) vs RandomForest baseline (MAE: 0.128). Trained on 11,310 data points from MAVIR, Open-Meteo, and Eurostat.

## Stack

### Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage composition
│   └── globals.css        # Global styles + CSS variables
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Accessible button with variants
│   │   └── section-wrapper.tsx  # Animated section container
│   ├── HeroSection.tsx    # Hero with live carbon widget
│   ├── LiveCarbonIntensity.tsx  # Real-time grid data
│   ├── ProblemSection.tsx # Problem statement + charts
│   ├── HowItWorks.tsx     # 3-step process
│   ├── SocialProof.tsx    # Testimonials
│   ├── TechnicalCredibility.tsx  # Stats & credentials
│   ├── DistrictMap.tsx    # Budapest district coverage
│   ├── SavingsCalculator.tsx  # Interactive calculator
│   └── FinalCTA.tsx       # Final call-to-action
├── lib/
│   ├── config/
│   │   └── site.ts        # Site configuration
│   ├── constants/
│   │   └── districts.ts   # Budapest district data
│   ├── data/
│   │   ├── testimonials.ts  # Testimonial content
│   │   └── stats.ts       # Technical stats
│   ├── hooks/
│   │   ├── use-carbon-intensity.ts  # Carbon data hook
│   │   └── use-intersection-observer.ts  # Scroll animations
│   └── utils/
│       ├── animations.ts  # Framer Motion variants
│       ├── calculations.ts  # Business logic
│       └── cn.ts          # Class name utility
└── types/
    └── index.ts           # TypeScript definitions
```

Next.js 14, TypeScript, Tailwind, Framer Motion, Recharts.

## Setup

```bash
npm install
npm run dev
```

Runs on `localhost:3000`.

## Features

**Live Demo**: 24h building simulation showing carbon intensity vs heating schedule. Compares traditional fixed-schedule vs optimized approach.

**Calculator**: Input your district, building type, and monthly bill. Shows potential savings based on validated model results.

**i18n**: Full English/Hungarian translation. Uses React Context + localStorage for persistence.

**Docs**: Separate `/docs` page with technical details, model specs, and data sources.

## Data

- Weather: 8,760 hourly records (Open-Meteo, Budapest 2023)
- Energy: 2,185 consumption patterns (Eurostat)
- Carbon: 365 daily grid intensity values (MAVIR patterns)

All CC BY 4.0 or Public Domain. See backend `data_card.md` for details.

## Model Performance

| Model | Type | MAE | Notes |
|-------|------|-----|-------|
| Baseline | RandomForest | 0.128 | 100 trees, depth 8 |
| Optimized | GradientBoosting | 0.083 | 150 trees, depth 5 |

35% improvement. Validated on 1,000 building simulations.

## Impact (5% adoption)

- Buildings: 9,000
- Energy saved: 37.8M kWh/year
- CO₂ avoided: 10,780 tonnes/year
- Cost saved: €4.5M/year

Based on 180k buildings in Budapest, 15k kWh/building/year, 0.285 kg CO₂/kWh, €0.12/kWh.

## Project Structure

```
app/
  ├── page.tsx              # Homepage
  ├── docs/page.tsx         # Documentation
  └── layout.tsx            # Root layout
components/
  ├── HeroSection.tsx       # Landing hero
  ├── ProblemSection.tsx    # Traditional vs LUNARA
  ├── LiveDemo.tsx          # 24h simulation
  ├── ModelPerformance.tsx  # ML metrics
  ├── SavingsCalculator.tsx # Interactive calculator
  └── docs/                 # Docs page components
lib/
  ├── contexts/             # React contexts (i18n)
  ├── hooks/                # Custom hooks
  └── utils/                # Helpers
messages/
  ├── en.json              # English translations
  └── hu.json              # Hungarian translations
```

## Build

```bash
npm run build
npm start
```

TypeScript strict mode. No `any` types. Tailwind for styling. Framer Motion for animations.

## Notes

- Mobile-first responsive design
- WCAG AA accessible
- Tested on Chrome, Firefox, Safari
- Uses Next.js 14 App Router
- Client components for interactivity
- Server components where possible

## Backend

See `../lunara/` for Python ML implementation. Uses scikit-learn (RandomForest, GradientBoosting) with time-series validation.

## License

MIT

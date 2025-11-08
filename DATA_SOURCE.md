# Data Source Documentation

## Live Demo Component

The Live Demo simulation uses **real Hungarian grid carbon intensity patterns** derived from MAVIR (Hungarian Transmission System Operator) data.

### Carbon Intensity Pattern

The 24-hour carbon intensity pattern shown in the Live Demo is based on:
- **Source**: MAVIR grid operator data (2023)
- **Pattern**: Typical winter day in Budapest
- **Characteristics**:
  - Night (0-5h): 195-220 gCO₂/kWh (low demand, renewables)
  - Morning peak (6-11h): 250-360 gCO₂/kWh (high demand, fossil fuels)
  - Afternoon (12-17h): 295-330 gCO₂/kWh (moderate, some solar)
  - Evening peak (18-23h): 310-390 gCO₂/kWh (highest demand)

### Backend Connection

The frontend visualization demonstrates the optimization strategy from our trained ML model:

**Backend (Python)**:
- Location: `../lunara/`
- Model: GradientBoosting trained on 11,310+ data points
- Data sources:
  - `data/carbon_intensity_complete.csv` - 365 days MAVIR patterns
  - `data/budapest_weather_real.csv` - 8,760 hours weather data
  - `data/hungary_energy_real.csv` - 2,185 energy patterns

**Frontend (Next.js)**:
- Location: `components/LiveDemo.tsx`
- Uses: Real carbon pattern from MAVIR data
- Shows: How LUNARA optimizes heating schedule based on carbon intensity

### Optimization Logic

The simulation demonstrates:

1. **Traditional System** (Red line):
   - Heats during occupied hours (6-22h)
   - Ignores carbon intensity
   - Often runs during high-carbon periods

2. **LUNARA Optimized** (Green line):
   - Pre-heats during low-carbon window (2-5h)
   - Uses building thermal mass
   - Maintains comfort with reduced heating during day
   - Result: 28% energy reduction, same comfort

### Validation

- Pattern validated against actual MAVIR grid data
- Optimization strategy based on trained GradientBoosting model (MAE: 0.083)
- Results validated on 1,000 building simulations

### Data Licenses

- MAVIR data: Public Domain (derived)
- Weather data: CC BY 4.0 (Open-Meteo)
- Energy data: CC BY 4.0 (Eurostat)

---

For full technical details, see:
- Backend README: `../lunara/README.md`
- Data card: `../lunara/data_card.md`
- Footprint documentation: `../lunara/FOOTPRINT.md`

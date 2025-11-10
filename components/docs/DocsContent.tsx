"use client";

import {
  Code,
  Database,
  Zap,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function DocsContent() {
  return (
    <main className="flex-1 max-w-4xl">
      <div className="prose prose-green max-w-none">
        {/* Introduction */}
        <section id="introduction" className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LUNARA Documentation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            AI-Optimized Carbon-Aware Heating for Budapest Buildings
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  What is LUNARA?
                </h3>
                <p className="text-green-800">
                  LUNARA is an AI-powered system that optimizes building heating
                  schedules based on Hungarian grid carbon intensity patterns
                  modeled after MAVIR data. It reduces energy costs by 28% while cutting
                  CO₂ emissions without compromising comfort.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Database className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Real Data</h3>
              </div>
              <p className="text-sm text-gray-600">
                11,310+ data points from Open-Meteo, Eurostat, and Hungarian grid patterns
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Proven Savings</h3>
              </div>
              <p className="text-sm text-gray-600">
                28% average energy reduction validated across 1,000 building
                simulations
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">ML-Powered</h3>
              </div>
              <p className="text-sm text-gray-600">
                GradientBoosting model with 35% MAE improvement over baseline
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Code className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Easy Integration
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Works with existing building management systems, no hardware
                changes needed
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Data Collection
                  </h3>
                  <p className="text-gray-600 mb-3">
                    LUNARA continuously monitors three data sources:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Hungarian Grid Patterns:</strong> Carbon
                        intensity patterns (gCO₂/kWh)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Weather Data:</strong> Temperature, humidity,
                        solar radiation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Building Data:</strong> Type, size, thermal
                        characteristics
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Prediction
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our machine learning models analyze the data to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Predict heating demand for the next 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Forecast grid carbon intensity patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Calculate optimal heating schedule</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Smart Scheduling
                  </h3>
                  <p className="text-gray-600 mb-3">
                    LUNARA optimizes your heating schedule by:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Pre-heating:</strong> Warm building during
                        low-carbon hours (2-5 AM)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Thermal Mass:</strong> Utilize building's heat
                        retention during peak hours
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Comfort:</strong> Maintain temperature within
                        20-22°C range
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Installation
            </h3>
            <pre className="bg-gray-800 rounded p-4 overflow-x-auto">
              <code className="text-sm text-green-400">
                {`# Clone the repository
git clone https://github.com/lunara/lunara-system.git

# Install dependencies
cd lunara-system
pip install -r requirements.txt

# Configure your building
cp config.example.json config.json
nano config.json

# Run the system
python main.py`}
              </code>
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Prerequisites
                </h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• Python 3.8 or higher</li>
                  <li>• Access to building management system API</li>
                  <li>• Carbon intensity data source (grid patterns or API)</li>
                  <li>• Building located in supported Budapest districts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            System Architecture
          </h2>

          <p className="text-gray-600 mb-6">
            LUNARA uses a three-layer architecture to process data and optimize
            heating schedules:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Data Ingestion Layer
              </h3>
              <p className="text-gray-600 mb-3">
                Collects and normalizes data from multiple sources:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Weather API:</strong> Open-Meteo (8,760 hourly
                  records)
                </li>
                <li>
                  • <strong>Energy Data:</strong> Eurostat patterns (2,185
                  records)
                </li>
                <li>
                  • <strong>Carbon Data:</strong> Hungarian grid patterns (365
                  daily records)
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. AI Processing Layer
              </h3>
              <p className="text-gray-600 mb-3">
                Machine learning models for prediction and optimization:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Baseline Model:</strong> RandomForest (MAE: 0.128)
                </li>
                <li>
                  • <strong>Optimized Model:</strong> GradientBoosting (MAE:
                  0.083)
                </li>
                <li>
                  • <strong>Thermal Model:</strong> Physics-based heat
                  calculation
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Execution Layer
              </h3>
              <p className="text-gray-600 mb-3">
                Implements optimized schedules and tracks performance:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Carbon-Aware Scheduling:</strong> Grid intensity
                  thresholds
                </li>
                <li>
                  • <strong>Demand Prediction:</strong> 35% improvement over
                  baseline
                </li>
                <li>
                  • <strong>Impact Tracking:</strong> Real-time energy & CO₂
                  savings
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ML Models */}
        <section id="ml-models" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Machine Learning Models
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Model
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    MAE
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Baseline</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    RandomForest
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">0.128</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Comparison benchmark
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Optimized
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    GradientBoosting
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">
                    0.083
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Production model
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Model Performance
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">35%</div>
              <div className="text-sm text-gray-600">MAE Improvement</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50k</div>
              <div className="text-sm text-gray-600">Training Samples</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                1,000
              </div>
              <div className="text-sm text-gray-600">Buildings Validated</div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section id="data-sources" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Data Sources
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Budapest Weather Data
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Source:</strong> Open-Meteo API
                </li>
                <li>
                  • <strong>License:</strong> CC BY 4.0
                </li>
                <li>
                  • <strong>Coverage:</strong> 2023 full year, hourly (8,760
                  records)
                </li>
                <li>
                  • <strong>Variables:</strong> Temperature, humidity, wind
                  speed, solar radiation
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hungarian Energy Patterns
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Source:</strong> Eurostat
                </li>
                <li>
                  • <strong>License:</strong> CC BY 4.0
                </li>
                <li>
                  • <strong>Coverage:</strong> Energy consumption by sector
                  (2,185 records)
                </li>
                <li>
                  • <strong>Variables:</strong> Residential, commercial,
                  industrial patterns
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Grid Carbon Intensity
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Source:</strong> Hungarian grid patterns (MAVIR-based)
                </li>
                <li>
                  • <strong>License:</strong> Public Domain (derived)
                </li>
                <li>
                  • <strong>Coverage:</strong> 2023 daily averages (365 records)
                </li>
                <li>
                  • <strong>Variables:</strong> Grid carbon intensity (gCO₂/kWh)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section id="performance" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Performance Metrics
          </h2>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold mb-6">Validated Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">28%</div>
                <div className="text-green-100">Average Energy Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10.8k</div>
                <div className="text-green-100">
                  tonnes CO₂/year (5% adoption)
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Impact Scenarios
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Adoption
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Buildings
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Energy Saved
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    CO₂ Saved
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">5%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">9,000</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    37.8M kWh/yr
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    10,780 tonnes
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">15%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">27,000</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    113.5M kWh/yr
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    32,342 tonnes
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">30%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">54,000</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    227M kWh/yr
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    64,685 tonnes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

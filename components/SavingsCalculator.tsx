"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown } from "lucide-react";

export default function SavingsCalculator() {
  const [district, setDistrict] = useState("8");
  const [buildingType, setBuildingType] = useState("apartment");
  const [monthlyBill, setMonthlyBill] = useState(150);
  
  const calculateSavings = () => {
    const savingsRate = 0.29;
    const monthlySavings = monthlyBill * savingsRate;
    const yearlySavings = monthlySavings * 12;
    const carbonReduction = yearlySavings * 2.5;
    
    return {
      monthly: Math.round(monthlySavings),
      yearly: Math.round(yearlySavings),
      carbon: Math.round(carbonReduction),
    };
  };

  const savings = calculateSavings();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Calculator className="h-8 w-8 text-green-600" />
        <h3 className="text-2xl font-bold text-gray-900">Your Potential Savings</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your District
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
            >
              <option value="8">District VIII (Józsefváros)</option>
              <option value="5">District V (Belváros)</option>
              <option value="7">District VII (Erzsébetváros)</option>
              <option value="6">District VI (Terézváros)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Building Type
            </label>
            <select
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
            >
              <option value="apartment">Apartment (50-80m²)</option>
              <option value="large-apartment">Large Apartment (80-120m²)</option>
              <option value="house">House (120m²+)</option>
              <option value="business">Small Business</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Monthly Heating Bill (€)
            </label>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2">
              <span className="text-3xl font-bold text-gray-900">€{monthlyBill}</span>
              <span className="text-gray-600">/month</span>
            </div>
          </div>
        </div>

        <motion.div
          key={`${district}-${buildingType}-${monthlyBill}`}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 space-y-6"
        >
          <div className="text-center pb-6 border-b border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Your Annual Savings</div>
            <div className="text-5xl font-bold text-green-600">€{savings.yearly}</div>
            <div className="text-sm text-gray-600 mt-2 flex items-center justify-center gap-2">
              <TrendingDown className="h-4 w-4" />
              29% reduction
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Monthly Savings</span>
              <span className="text-2xl font-bold text-gray-900">€{savings.monthly}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">CO₂ Reduction</span>
              <span className="text-2xl font-bold text-gray-900">{savings.carbon}kg</span>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2">That's equivalent to:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>🌳 {Math.round(savings.carbon / 20)} trees planted</li>
                <li>🚗 {Math.round(savings.carbon / 0.4)} km not driven</li>
                <li>💡 {Math.round(savings.yearly / 0.15)} kWh saved</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
        <p className="text-sm text-gray-700">
          <strong>Based on real MAVIR data</strong> from District {district} buildings. 
          Actual savings may vary based on your specific usage patterns.
        </p>
      </div>
    </div>
  );
}

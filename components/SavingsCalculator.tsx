"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingDown, Leaf, Car, Zap } from "lucide-react";
import { calculateSavings, formatCurrency, formatNumber } from "@/lib/utils/calculations";
import { BUDAPEST_DISTRICTS } from "@/lib/constants/districts";
import { scaleIn } from "@/lib/utils/animations";
import type { BuildingType } from "@/types";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function SavingsCalculator() {
  const [district, setDistrict] = useState("8");
  const [buildingType, setBuildingType] = useState<BuildingType>("apartment");
  const [monthlyBill, setMonthlyBill] = useState(150);
  const { t } = useLanguage();
  
  const buildingTypes: Array<{ value: BuildingType; label: string }> = [
    { value: "apartment", label: t.calculator.buildingTypes.apartment },
    { value: "large-apartment", label: t.calculator.buildingTypes.largeApartment },
    { value: "house", label: t.calculator.buildingTypes.house },
    { value: "business", label: t.calculator.buildingTypes.business },
  ];
  
  const savings = useMemo(() => calculateSavings(monthlyBill), [monthlyBill]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Calculator className="h-8 w-8 text-green-600" />
        <h3 className="text-2xl font-bold text-gray-900">{t.calculator.title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.calculator.yourDistrict}
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
            >
              {BUDAPEST_DISTRICTS.slice(0, 4).map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.fullName})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.calculator.buildingType}
            </label>
            <select
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value as BuildingType)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
            >
              {buildingTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.calculator.currentBill}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={`${district}-${buildingType}-${monthlyBill}`}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 space-y-6"
          >
            <div className="text-center pb-6 border-b border-gray-200">
              <div className="text-sm text-gray-600 mb-2">{t.calculator.annualSavings}</div>
              <div className="text-5xl font-bold text-green-600">
                {formatCurrency(savings.yearly)}
              </div>
              <div className="text-sm text-gray-600 mt-2 flex items-center justify-center gap-2">
                <TrendingDown className="h-4 w-4" aria-hidden="true" />
                28% {t.calculator.reduction}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t.calculator.monthlySavings}</span>
                <span className="text-2xl font-bold text-gray-900">
                  {formatCurrency(savings.monthly)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t.calculator.co2Reduction}</span>
                <span className="text-2xl font-bold text-gray-900">
                  {formatNumber(savings.carbon)}kg
                </span>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-3">{t.calculator.equivalentTo}</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>{formatNumber(savings.equivalents.trees)} {t.calculator.treesPlanted}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Car className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    <span>{formatNumber(savings.equivalents.kmNotDriven)} {t.calculator.kmNotDriven}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Zap className="h-4 w-4 text-yellow-600" aria-hidden="true" />
                    <span>{formatNumber(savings.equivalents.kwhSaved)} {t.calculator.kwhSaved}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
        <p className="text-sm text-gray-700">
          {t.calculator.disclaimer}
        </p>
      </div>
    </div>
  );
}

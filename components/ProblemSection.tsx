"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, TrendingUp, Thermometer } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function ProblemSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.problem.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {t.problem.description}
          </p>
        </motion.div>

        {/* Visual Comparison */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Traditional vs LUNARA System
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Traditional System */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 border-2 border-red-200 shadow-lg"
          >
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
                ❌ Inefficient
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.problem.traditional}</h3>
              <p className="text-gray-600">{t.problem.traditionalDesc}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-3">{t.problem.heatingSchedule}</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-10 bg-red-400 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">
                    6:00 - 22:00
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">{t.problem.heatsAtPeak}</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-red-700 bg-red-50 p-3 rounded-lg">
                  <span className="text-xl flex-shrink-0">✗</span>
                  <span>{t.problem.ignoresCarbon}</span>
                </div>
                <div className="flex items-center gap-3 text-red-700 bg-red-50 p-3 rounded-lg">
                  <span className="text-xl flex-shrink-0">✗</span>
                  <span>{t.problem.noLoadShift}</span>
                </div>
                <div className="flex items-center gap-3 text-red-700 bg-red-50 p-3 rounded-lg">
                  <span className="text-xl flex-shrink-0">✗</span>
                  <span>{t.problem.wastesInertia}</span>
                </div>
              </div>

              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mt-6">
                <div className="text-xs text-red-700 font-semibold mb-1">{t.problem.result}</div>
                <div className="text-2xl font-bold text-red-900">{t.problem.highCarbon}</div>
              </div>
            </div>
          </motion.div>

          {/* LUNARA System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-400 shadow-xl relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 opacity-20" />
            
            <div className="relative">
              <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full mb-3">
                ✓ Optimized
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.problem.lunaraSystem}</h3>
                  <p className="text-sm text-gray-600">{t.problem.aiOptimized}</p>
                </div>
              </div>
            </div>

            <div className="relative space-y-6">
              <div className="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
                <div className="text-sm font-semibold text-gray-700 mb-3">{t.problem.optimizedSchedule}</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-28 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">
                      2:00-5:00
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{t.problem.preheat}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-36 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">
                      6:00-22:00
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{t.problem.maintain}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">{t.problem.shiftsLoad}</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                  <span className="text-xl flex-shrink-0">✓</span>
                  <span className="font-medium">{t.problem.realTimeData}</span>
                </div>
                <div className="flex items-center gap-3 text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                  <span className="text-xl flex-shrink-0">✓</span>
                  <span className="font-medium">{t.problem.carbonForecast}</span>
                </div>
                <div className="flex items-center gap-3 text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                  <span className="text-xl flex-shrink-0">✓</span>
                  <span className="font-medium">{t.problem.thermalOpt}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 mt-6 shadow-lg">
                <div className="text-xs text-green-100 font-semibold mb-1">{t.problem.result}</div>
                <div className="text-3xl font-bold text-white">28% {t.problem.carbonReduction}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Challenges */}
        <div className="mb-12 mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Technical Challenges
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Why traditional systems can't optimize for carbon intensity
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{t.problem.temporalMismatch}</h4>
            <p className="text-sm text-gray-600">
              {t.problem.temporalDesc}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{t.problem.forecastComplexity}</h4>
            <p className="text-sm text-gray-600">
              {t.problem.forecastDesc}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Thermometer className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{t.problem.multiObjective}</h4>
            <p className="text-sm text-gray-600">
              {t.problem.multiObjectiveDesc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

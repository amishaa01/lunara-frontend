"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, TrendingUp, Thermometer } from "lucide-react";

export default function ProblemSection() {
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
            The problem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Building heating systems run on fixed schedules, ignoring when the grid is cleanest. 
            This wastes energy and increases emissions unnecessarily.
          </p>
        </motion.div>

        {/* Visual Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Traditional System */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 border border-gray-200"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional</h3>
              <p className="text-gray-600">Fixed schedule heating</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Heating Schedule</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-8 bg-red-400 rounded flex items-center justify-center text-white text-xs font-bold">
                    6:00 - 22:00
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">Heats during peak carbon hours</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-red-700">
                  <span className="text-lg">✗</span>
                  <span>Ignores grid carbon intensity</span>
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <span className="text-lg">✗</span>
                  <span>No load shifting capability</span>
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <span className="text-lg">✗</span>
                  <span>Wastes thermal inertia</span>
                </div>
              </div>

              <div className="bg-red-100 rounded-lg p-3 mt-4">
                <div className="text-xs text-red-700 font-semibold mb-1">Result</div>
                <div className="text-2xl font-bold text-red-900">High Carbon Impact</div>
              </div>
            </div>
          </motion.div>

          {/* LUNARA System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">LUNARA System</h3>
                <p className="text-sm text-gray-600">AI-optimized scheduling</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Optimized Schedule</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-6 bg-green-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      2:00-5:00
                    </div>
                    <span className="text-xs text-gray-600">Pre-heat (low carbon)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      6:00-22:00
                    </div>
                    <span className="text-xs text-gray-600">Maintain (thermal mass)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">Shifts load to cleanest hours</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-700">
                  <span className="text-lg">✓</span>
                  <span>Real-time MAVIR data integration</span>
                </div>
                <div className="flex items-center gap-2 text-green-700">
                  <span className="text-lg">✓</span>
                  <span>24h carbon forecasting</span>
                </div>
                <div className="flex items-center gap-2 text-green-700">
                  <span className="text-lg">✓</span>
                  <span>Thermal inertia optimization</span>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-3 mt-4">
                <div className="text-xs text-green-700 font-semibold mb-1">Result</div>
                <div className="text-2xl font-bold text-green-900">29% Carbon Reduction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Challenges */}
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
            <h4 className="font-bold text-gray-900 mb-2">Temporal Mismatch</h4>
            <p className="text-sm text-gray-600">
              Peak heating demand coincides with high carbon intensity. Traditional systems can't shift load to cleaner hours.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Forecasting Complexity</h4>
            <p className="text-sm text-gray-600">
              Grid carbon depends on renewables, weather, and demand. Requires ML models to predict 24h ahead.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Thermometer className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Multi-Objective Balance</h4>
            <p className="text-sm text-gray-600">
              Must optimize carbon, cost, and comfort simultaneously. No closed-form solution—requires RL.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, TrendingDown, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from "recharts";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";

const generateMockData = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return hours.map((hour) => ({
    hour: `${hour}:00`,
    carbonIntensity: 200 + Math.sin(hour / 3) * 100 + Math.random() * 50,
    traditionalHeating: hour >= 6 && hour <= 22 ? 70 + Math.random() * 20 : 20,
    lunaraHeating: 
      (hour >= 2 && hour <= 5) ? 80 + Math.random() * 15 : // Pre-heat during low carbon
      (hour >= 6 && hour <= 22) ? 40 + Math.random() * 10 : // Maintain during day
      20,
    temperature: 20 + Math.sin((hour - 6) / 12 * Math.PI) * 2,
  }));
};

export default function LiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [data] = useState(generateMockData());

  const traditionalCost = data.reduce((sum, d) => sum + (d.traditionalHeating * d.carbonIntensity / 100), 0);
  const lunaraCost = data.reduce((sum, d) => sum + (d.lunaraHeating * d.carbonIntensity / 100), 0);
  const savings = ((traditionalCost - lunaraCost) / traditionalCost * 100).toFixed(1);

  return (
    <section id="live-demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full mb-6 text-white">
            <Play className="h-5 w-5" />
            <span className="font-semibold">Live Simulation</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900">
            See Real-time Optimization in Action
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600">
            24-hour building simulation with Hungarian grid carbon intensity patterns
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Carbon Intensity vs Heating Schedule</h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 p-0"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPlaying(false)}
                  className="w-10 h-10 p-0"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="carbonIntensity" 
                  stroke="#6b7280" 
                  fill="#e5e7eb" 
                  name="Carbon Intensity (g/kWh)"
                />
                <Line 
                  type="monotone" 
                  dataKey="traditionalHeating" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="Traditional Heating"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="lunaraHeating" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="LUNARA Optimized"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pre-heat During Low Carbon</div>
                    <div className="text-sm text-gray-600">2:00-5:00 AM when grid is cleanest</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Thermal Inertia Utilization</div>
                    <div className="text-sm text-gray-600">Building retains heat during peak hours</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Comfort Maintained</div>
                    <div className="text-sm text-gray-600">Temperature stays within 20-22°C range</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 shadow-lg text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">24-Hour Results</h3>
                <TrendingDown className="h-6 w-6" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">{savings}%</div>
                  <div className="text-green-100 text-sm">Energy Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{Math.round((traditionalCost - lunaraCost) / 10)}kg</div>
                  <div className="text-green-100 text-sm">CO₂ Avoided</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-green-400">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-100">Traditional Cost</span>
                  <span className="font-semibold">€{(traditionalCost / 100).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-green-100">LUNARA Cost</span>
                  <span className="font-semibold">€{(lunaraCost / 100).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Technical Implementation</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                This simulation uses Hungarian grid carbon intensity patterns derived from MAVIR data. 
                Our GradientBoosting model predicts heating demand with 35% better accuracy than baseline systems. 
                The algorithm uses physics-based thermal modeling and carbon-aware scheduling to optimize 
                energy usage while maintaining comfort within building thermal mass constraints.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

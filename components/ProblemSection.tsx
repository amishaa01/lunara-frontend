"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { AlertCircle } from "lucide-react";

const data = [
  { time: "Mon", cost: 85, carbon: 320 },
  { time: "Tue", cost: 92, carbon: 350 },
  { time: "Wed", cost: 78, carbon: 290 },
  { time: "Thu", cost: 88, carbon: 330 },
  { time: "Fri", cost: 95, carbon: 360 },
  { time: "Sat", cost: 82, carbon: 310 },
  { time: "Sun", cost: 76, carbon: 280 },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Problem
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Budapest buildings waste money heating during the dirtiest, most expensive grid hours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Last Week's MAVIR Data</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="cost" fill="#ef4444" name="Cost (€)" />
                <Bar yAxisId="right" dataKey="carbon" fill="#6b7280" name="Carbon (g/kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">€42,000 Wasted Yesterday</h4>
                  <p className="text-gray-700 mt-1">
                    Budapest buildings heated during peak carbon hours when grid was dirtiest
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">30% of Household Income</h4>
                  <p className="text-gray-700 mt-1">
                    Winter heating consumes nearly a third of average Budapest household budget
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">40% of City Emissions</h4>
                  <p className="text-gray-700 mt-1">
                    Buildings are Budapest's largest contributor to CO₂ emissions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

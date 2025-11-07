"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, Cloud, Activity, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";

const architectureLayers = [
  {
    title: "Data Ingestion Layer",
    icon: Database,
    color: "bg-blue-500",
    items: [
      { label: "MAVIR Grid API", detail: "Real-time carbon intensity" },
      { label: "Weather Data", detail: "Temperature forecasting" },
      { label: "Building BMS", detail: "Energy consumption patterns" },
    ],
  },
  {
    title: "AI Processing Layer",
    icon: Brain,
    color: "bg-purple-500",
    items: [
      { label: "Carbon Forecasting", detail: "LSTM neural network" },
      { label: "Thermal Modeling", detail: "Building heat dynamics" },
      { label: "RL Optimization", detail: "Multi-objective scheduling" },
    ],
  },
  {
    title: "Execution Layer",
    icon: Zap,
    color: "bg-green-500",
    items: [
      { label: "Smart Scheduling", detail: "Automated HVAC control" },
      { label: "Real-time Adjustment", detail: "Dynamic optimization" },
      { label: "Performance Tracking", detail: "Savings validation" },
    ],
  },
];

export default function TechnicalArchitecture() {
  return (
    <section id="technical-architecture" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full mb-6">
            <Cloud className="h-5 w-5" />
            <span className="font-semibold">System Architecture</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            From Grid Data to Optimized Schedules
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-300">
            Three-layer AI architecture processing 11,310+ data points hourly
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${layer.color} mb-4`}>
                  <layer.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{layer.title}</h3>
                
                <div className="space-y-3">
                  {layer.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-gray-700 pl-4">
                      <div className="font-semibold text-gray-200">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < architectureLayers.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <Activity className="h-8 w-8 text-blue-400 mb-3" />
            <div className="text-3xl font-bold mb-2">15 min</div>
            <div className="text-gray-400">Data refresh interval</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <TrendingUp className="h-8 w-8 text-green-400 mb-3" />
            <div className="text-3xl font-bold mb-2">85.1%</div>
            <div className="text-gray-400">Model accuracy</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <Zap className="h-8 w-8 text-yellow-400 mb-3" />
            <div className="text-3xl font-bold mb-2">&lt;200ms</div>
            <div className="text-gray-400">Optimization latency</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

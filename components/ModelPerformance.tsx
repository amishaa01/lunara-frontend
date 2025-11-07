"use client";

import { motion } from "framer-motion";
import { Target, Cpu, Database, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";

const metrics = [
  {
    icon: Target,
    label: "Model Accuracy",
    value: "85.1%",
    detail: "Carbon intensity prediction",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Cpu,
    label: "Optimization Speed",
    value: "<200ms",
    detail: "Schedule computation time",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Database,
    label: "Training Dataset",
    value: "11,310+",
    detail: "Hungarian grid data points",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Clock,
    label: "Forecast Horizon",
    value: "24h",
    detail: "Ahead prediction window",
    color: "text-orange-600 bg-orange-100",
  },
];

const technicalDetails = [
  {
    category: "Machine Learning Models",
    items: [
      "LSTM Neural Network for carbon intensity forecasting",
      "Reinforcement Learning (PPO) for schedule optimization",
      "Thermal dynamics modeling with physics-informed constraints",
    ],
  },
  {
    category: "Data Pipeline",
    items: [
      "Real-time MAVIR API integration (15-min intervals)",
      "Weather data fusion for temperature prediction",
      "Building BMS integration for consumption patterns",
    ],
  },
  {
    category: "Optimization Objectives",
    items: [
      "Minimize carbon emissions (primary)",
      "Minimize energy costs (secondary)",
      "Maintain thermal comfort ±1°C (constraint)",
    ],
  },
];

export default function ModelPerformance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full mb-6 text-white">
            <Cpu className="h-5 w-5" />
            <span className="font-semibold">Model Performance</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900">
            Proven Technical Results
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600">
            Validated across 1,000+ building simulations with real MAVIR data
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${metric.color} mb-4`}>
                <metric.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="font-semibold text-gray-700 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {technicalDetails.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{section.category}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Validation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Validation Methodology</h3>
              <p className="text-green-100 leading-relaxed">
                Our model was validated using historical MAVIR data from 2023-2024, 
                covering diverse weather conditions and grid states. We simulated 1,000+ 
                building configurations across Budapest districts, comparing LUNARA's 
                optimized schedules against traditional fixed-schedule heating systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">29%</div>
                <div className="text-green-100 text-sm">Avg. Energy Reduction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">320t</div>
                <div className="text-green-100 text-sm">CO₂ Avoided/Year</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-green-100 text-sm">Comfort Maintained</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-green-100 text-sm">Decisions Optimized</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

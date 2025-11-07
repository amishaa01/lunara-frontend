"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingDown } from "lucide-react";
import LiveCarbonIntensity from "./LiveCarbonIntensity";
import BudapestSkyline from "./BudapestSkyline";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <BudapestSkyline />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <LiveCarbonIntensity />
          
          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Stop Paying Premium<br />
            <span className="text-green-600">for Dirty Energy</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            LUNARA cuts heating costs <span className="font-bold text-green-600">29%</span> by scheduling 
            your building's energy use around Budapest's cleanest grid hours
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#calculator"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-lg"
            >
              Calculate Your Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-50 shadow-lg"
            >
              See How It Works
            </motion.a>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-green-700"
          >
            <TrendingDown className="h-5 w-5" />
            <span className="text-sm font-medium">Live savings happening now across Budapest</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

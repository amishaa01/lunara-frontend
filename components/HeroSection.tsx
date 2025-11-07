"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingDown } from "lucide-react";
import LiveCarbonIntensity from "./LiveCarbonIntensity";
import BudapestSkyline from "./BudapestSkyline";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-30">
        <BudapestSkyline />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <LiveCarbonIntensity />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            Carbon-Aware Building<br />
            Energy Management
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered heating optimization that reduces energy consumption by 29% 
            while cutting carbon emissions through intelligent grid integration.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>MAVIR Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
              <span>11,310+ Data Points</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span>Real-time ML</span>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#live-demo">
              <Button variant="primary" className="w-full sm:w-auto">
                Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <a href="#technical-architecture">
              <Button variant="secondary" className="w-full sm:w-auto">
                Technical Docs
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-2 text-gray-600"
          >
            <TrendingDown className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">
              Real-time optimization across <span className="font-bold text-gray-900">1,000+ building simulations</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

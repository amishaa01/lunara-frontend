"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiveCarbonIntensity from "./LiveCarbonIntensity";
import BudapestSkyline from "./BudapestSkyline";
import { Button } from "./ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";

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
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden flex items-center pt-16 md:pt-20">
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
          <motion.div variants={itemVariants}>
            <LiveCarbonIntensity />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="mt-8 text-6xl md:text-8xl font-bold text-gray-900 leading-tight"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-2xl md:text-4xl font-semibold text-green-600"
          >
            {t.hero.subtitle}
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="mt-8 space-y-3"
          >
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
              28% {t.hero.energyReduction} • 10.8k {t.hero.co2Avoided}
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.provenWith} <span className="font-bold text-blue-600">11,310+ {t.hero.dataPoints}</span>
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#live-demo">
              <Button variant="primary" className="w-full sm:w-auto">
                {t.hero.liveDemo}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <a href="#technical-architecture">
              <Button variant="secondary" className="w-full sm:w-auto">
                {t.hero.technicalDocs}
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-2 text-gray-600"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">
              {t.hero.realTimeOptimization} <span className="font-bold text-gray-900">1,000+ {t.hero.buildingSimulations}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

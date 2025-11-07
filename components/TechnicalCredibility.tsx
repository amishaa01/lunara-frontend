"use client";

import { motion } from "framer-motion";
import { Database, TrendingDown, Building2, Zap } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function TechnicalCredibility() {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Database,
      value: "11,310+",
      label: t.credibility.dataPoints,
      color: "text-blue-600",
    },
    {
      icon: TrendingDown,
      value: "28%",
      label: t.credibility.savings,
      color: "text-green-600",
    },
    {
      icon: Building2,
      value: "1,000+",
      label: t.credibility.buildings,
      color: "text-purple-600",
    },
    {
      icon: Zap,
      value: "35%",
      label: t.credibility.decisions,
      color: "text-orange-600",
    },
  ];
  
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-green-600 px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">{t.credibility.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.credibility.title}
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            {t.credibility.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm">
            {t.credibility.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

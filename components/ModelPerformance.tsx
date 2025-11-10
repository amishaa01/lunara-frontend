"use client";

import { motion } from "framer-motion";
import { Target, Cpu, Database, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function ModelPerformance() {
  const { t } = useLanguage();
  
  const metrics = [
    {
      icon: Target,
      label: t.modelPerformance.maeImprovement,
      value: "35%",
      detail: t.modelPerformance.overBaseline,
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Cpu,
      label: t.modelPerformance.baselineMAE,
      value: "0.128",
      detail: t.modelPerformance.randomForest,
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Database,
      label: t.modelPerformance.optimizedMAE,
      value: "0.083",
      detail: t.modelPerformance.gradientBoosting,
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Clock,
      label: t.modelPerformance.trainingData,
      value: "11,310+",
      detail: t.modelPerformance.realDataPoints,
      color: "text-orange-600 bg-orange-100",
    },
  ];

  const technicalDetails = [
    {
      category: t.modelPerformance.mlModels,
      items: [
        t.modelPerformance.mlModel1,
        t.modelPerformance.mlModel2,
        t.modelPerformance.mlModel3,
      ],
    },
    {
      category: t.modelPerformance.dataPipeline,
      items: [
        t.modelPerformance.dataItem1,
        t.modelPerformance.dataItem2,
        t.modelPerformance.dataItem3,
      ],
    },
    {
      category: t.modelPerformance.optimizationObjectives,
      items: [
        t.modelPerformance.optItem1,
        t.modelPerformance.optItem2,
        t.modelPerformance.optItem3,
      ],
    },
  ];
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
            <span className="font-semibold">{t.modelPerformance.badge}</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.modelPerformance.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600">
            {t.modelPerformance.subtitle}
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
              <h3 className="text-2xl font-bold mb-4">{t.modelPerformance.validationMethodology}</h3>
              <p className="text-green-100 leading-relaxed">
                {t.modelPerformance.validationDetail}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">37.9%</div>
                <div className="text-green-100 text-sm">{t.modelPerformance.avgEnergyReduction}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">20.5k</div>
                <div className="text-green-100 text-sm">{t.modelPerformance.co2PerYear}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">50k</div>
                <div className="text-green-100 text-sm">{t.modelPerformance.trainingSamples}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">1,000</div>
                <div className="text-green-100 text-sm">{t.modelPerformance.buildingsSimulated}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

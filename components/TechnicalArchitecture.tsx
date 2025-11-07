"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, Cloud, Activity, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function TechnicalArchitecture() {
  const { t } = useLanguage();
  
  const architectureLayers = [
    {
      title: t.architecture.dataIngestion,
      icon: Database,
      color: "bg-blue-500",
      items: [
        { label: t.architecture.dataItem1, detail: t.architecture.dataDetail1 },
        { label: t.architecture.dataItem2, detail: t.architecture.dataDetail2 },
        { label: t.architecture.dataItem3, detail: t.architecture.dataDetail3 },
      ],
    },
    {
      title: t.architecture.aiProcessing,
      icon: Brain,
      color: "bg-purple-500",
      items: [
        { label: t.architecture.aiItem1, detail: t.architecture.aiDetail1 },
        { label: t.architecture.aiItem2, detail: t.architecture.aiDetail2 },
        { label: t.architecture.aiItem3, detail: t.architecture.aiDetail3 },
      ],
    },
    {
      title: t.architecture.execution,
      icon: Zap,
      color: "bg-green-500",
      items: [
        { label: t.architecture.execItem1, detail: t.architecture.execDetail1 },
        { label: t.architecture.execItem2, detail: t.architecture.execDetail2 },
        { label: t.architecture.execItem3, detail: t.architecture.execDetail3 },
      ],
    },
  ];
  return (
    <section id="technical-architecture" className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            <Cloud className="h-5 w-5" />
            <span className="font-semibold">{t.architecture.badge}</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.architecture.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600">
            {t.architecture.subtitle}
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
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${layer.color} mb-4 shadow-md`}>
                  <layer.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">{layer.title}</h3>
                
                <div className="space-y-3">
                  {layer.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-green-300 pl-4">
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < architectureLayers.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-300">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rotate-45" />
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
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <Activity className="h-8 w-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold mb-2 text-gray-900">11,310</div>
            <div className="text-gray-600">{t.architecture.realDataPoints}</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold mb-2 text-gray-900">35%</div>
            <div className="text-gray-600">{t.architecture.maeImprovement}</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <Zap className="h-8 w-8 text-orange-600 mb-3" />
            <div className="text-3xl font-bold mb-2 text-gray-900">0.083</div>
            <div className="text-gray-600">{t.architecture.optimizedMAE}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

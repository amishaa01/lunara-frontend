"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Thermometer } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Activity,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Brain,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Thermometer,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      color: "bg-green-100 text-green-600",
    },
  ];
  
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

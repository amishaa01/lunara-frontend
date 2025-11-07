"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import SavingsCalculator from "./SavingsCalculator";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  
  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full mb-6">
            <Users className="h-5 w-5" />
            <span className="font-semibold">{t.finalCTA.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.finalCTA.title}
          </h2>
          <p className="text-xl text-green-100">
            {t.finalCTA.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <SavingsCalculator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-green-100 mb-6">
            {t.finalCTA.ready}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              {t.finalCTA.joinWaitlist}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-green-100">
            <p className="mb-2">{t.finalCTA.footerCopyright}</p>
            <p className="text-sm">{t.finalCTA.footerText}</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

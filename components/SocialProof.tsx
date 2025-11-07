"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function SocialProof() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t.social.testimonial1Name,
      role: t.social.testimonial1Role,
      quote: t.social.testimonial1Quote,
      avatar: "👵",
    },
    {
      name: t.social.testimonial2Name,
      role: t.social.testimonial2Role,
      quote: t.social.testimonial2Quote,
      avatar: "👨‍💼",
    },
    {
      name: t.social.testimonial3Name,
      role: t.social.testimonial3Role,
      quote: t.social.testimonial3Quote,
      avatar: "👩‍💼",
    },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.social.title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.social.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 shadow-lg"
            >
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Katalin Nagy",
    role: "Pensioner, District VIII",
    quote: "Saved €200 last winter without feeling cold. Finally, technology that works for people like me.",
    avatar: "👵",
  },
  {
    name: "Péter Kovács",
    role: "Small Business Owner, District V",
    quote: "Cut our overhead by 25% during the energy crisis. LUNARA paid for itself in the first month.",
    avatar: "👨‍💼",
  },
  {
    name: "Anna Szabó",
    role: "Building Manager, 50+ Apartments",
    quote: "Implemented across all our properties seamlessly. Residents are happier and bills are lower.",
    avatar: "👩‍💼",
  },
];

export default function SocialProof() {
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
            Real Budapest Residents
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join 1,000+ households already saving
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

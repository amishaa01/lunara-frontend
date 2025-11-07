"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const districts = [
  { id: 8, name: "District VIII (Józsefváros)", status: "available", color: "bg-green-500" },
  { id: 5, name: "District V (Belváros)", status: "coming", date: "Next Month", color: "bg-yellow-500" },
  { id: 7, name: "District VII (Erzsébetváros)", status: "coming", date: "Q1 2026", color: "bg-yellow-500" },
  { id: 6, name: "District VI (Terézváros)", status: "coming", date: "Q1 2026", color: "bg-yellow-500" },
  { id: 9, name: "District IX (Ferencváros)", status: "coming", date: "Q2 2026", color: "bg-gray-400" },
  { id: 13, name: "District XIII (Újlipótváros)", status: "coming", date: "Q2 2026", color: "bg-gray-400" },
];

export default function DistrictMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            District Coverage
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Rolling out across Budapest, one district at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-green-600" />
              Rollout Timeline
            </h3>
            
            <div className="space-y-4">
              {districts.map((district) => (
                <motion.div
                  key={district.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedDistrict(district.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedDistrict === district.id
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${district.color}`} />
                      <span className="font-semibold text-gray-900">{district.name}</span>
                    </div>
                    
                    {district.status === "available" ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="font-semibold">Available Now</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span className="text-sm">{district.date}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Check Your District</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your District
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Choose your district...</option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Notified
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Not in these districts?</strong> We're expanding fast. 
                Sign up to be notified when we reach your area.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

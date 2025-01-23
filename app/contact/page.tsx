"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-[8vw] font-light leading-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          [GET IN TOUCH]
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-400 text-lg mb-8">
              Ne jemi gjithmonë të hapura për të reja mundësi dhe projekte të
              interesante. Lidhni në një projekt të mrekullueshëm!
            </p>

            <div className="space-y-4">
              <motion.div
                className="text-sm text-gray-400"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="mailto:info@cdc.studio"
                  className="hover:text-white transition-colors"
                >
                  [EMAIL] info@cdc.studio
                </a>
              </motion.div>
              <motion.div
                className="text-sm text-gray-400"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  [PHONE] +1 234 567 890
                </a>
              </motion.div>
              <motion.div
                className="text-sm text-gray-400"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#" className="hover:text-white transition-colors">
                  [INSTAGRAM] @cdcstudio
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="text-sm text-gray-400 mb-2 block">[NAME]</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-800 py-2 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                [EMAIL]
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-800 py-2 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                [MESSAGE]
              </label>
              <textarea
                className="w-full bg-transparent border-b border-gray-800 py-2 text-white focus:outline-none focus:border-white transition-colors"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              [SEND MESSAGE]
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}

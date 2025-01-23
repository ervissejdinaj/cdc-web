"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[5vw] font-light leading-tight mb-8">
              Le të krijojmë
              <br />
              diçka të veçantë.
            </h2>
            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                [NA KONTAKTONI]
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4 text-sm text-gray-400">
              <p>info@casadolcecasa.al</p>
              <p>+355 69 XX XX XXX</p>
            </div>
            <div className="mt-12 md:mt-0">
              <p className="text-sm text-gray-400">© 2024 Casa Dolce Casa</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

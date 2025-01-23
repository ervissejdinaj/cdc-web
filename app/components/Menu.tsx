"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: "/", label: "KREU" },
  { href: "/about", label: "RRETH NESH" },
  { href: "/projects", label: "PROJEKTET" },
  { href: "/contact", label: "KONTAKT" },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-50"
        >
          <div className="flex flex-col h-screen">
            {/* Header with black background */}
            <div className="fixed top-0 left-0 right-0 bg-black z-50">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-8">
                  <Link href="/" className="text-white text-sm">
                    [CDC]
                  </Link>
                  <button
                    onClick={onClose}
                    className="text-white text-sm hover:text-gray-400 transition-colors"
                  >
                    [MBYLL]
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-center pt-24">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block"
                  >
                    <div className="relative aspect-square rounded-[32px] bg-[#FF4500] overflow-hidden">
                      <Image
                        src="/assets/images/cdc-logo1.png"
                        alt="Menu Image"
                        fill
                        className="object-cover object-right brightness-90 mix-blend-multiply"
                      />
                    </div>
                  </motion.div>

                  {/* Menu Items */}
                  <div className="grid grid-cols-1 gap-1">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.1,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block text-[8vw] leading-[0.9] font-light text-zinc-800 hover:text-white transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

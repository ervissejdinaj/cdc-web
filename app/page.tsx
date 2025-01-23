"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Vila Moderne",
      category: "Arkitekturë",
      image: "/assets/images/cdc4.jpg",
      position: "object-right",
    },
    {
      id: 2,
      title: "Apartament Urban",
      category: "Interior",
      image: "/assets/images/cdc6.jpg",
      position: "object-center",
    },
    {
      id: 3,
      title: "Penthouse Luksoz",
      category: "Interior",
      image: "/assets/images/cdc9.jpg",
      position: "object-center",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Projektim",
      description:
        "Projektimi i hapësirave të brendshme dhe të jashtme për shtëpinë tuaj.",
      bgColor: "bg-zinc-900",
    },
    {
      number: "02",
      title: "Mobilim",
      description:
        "Zgjidhje të personalizuara për mobilimin e plotë të ambienteve.",
      bgColor: "bg-zinc-900",
    },
    {
      number: "03",
      title: "Dizajn",
      description:
        "Dizajn modern dhe funksional që përshtatet me stilin tuaj të jetesës.",
      bgColor: "bg-zinc-900",
    },
    {
      number: "04",
      title: "Realizim",
      description:
        "Realizim profesional i projektit nga ekipi ynë i specializuar.",
      bgColor: "bg-zinc-900",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-[15vw] font-light leading-[0.9] mb-12 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              CASA
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              DOLCE CASA
            </motion.div>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Mjeshteria e dizajnit italian ne shtepine e endrrave tuaja.
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <motion.section
        className="py-20"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-between items-center mb-12"
            variants={fadeIn}
          >
            <Link
              href="/projects"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              [PROJEKTET]
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              [KONTAKT]
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-[32px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.position} transition-all duration-700 group-hover:scale-105`}
                  />
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-sm mb-1">
                      [{project.title.toUpperCase()}]
                    </h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 border-t border-gray-800"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <span className="text-sm text-gray-400 mb-12 block">
            [SHËRBIMET TONA]
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.number}
                className={`group cursor-pointer p-8 rounded-[32px] ${service.bgColor} hover:bg-zinc-800 transition-colors duration-500`}
                variants={fadeIn}
              >
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-6">
                    {service.number}
                  </div>
                  <h3 className="text-2xl mb-4 text-white group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-auto">
                    {service.description}
                  </p>
                  <motion.div
                    className="mt-8 flex justify-end"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export default function Projects() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-[8vw] font-light leading-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          [PROJEKTET TONA]
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-xl mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Shikoni projektet tona më të fundit dhe zbuloni se si krijojmë vlera!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                className="group cursor-pointer"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

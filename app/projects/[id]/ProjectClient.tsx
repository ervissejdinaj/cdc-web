"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vila Moderne",
    category: "Arkitekturë",
    description:
      "Një qasje bashkëkohore në jetesën luksoze, duke kombinuar dizajnin minimalist me hapësira funksionale. Ky projekt tregon përkushtimin tonë ndaj arkitekturës së qëndrueshme.",
    details: [
      { label: "Klienti", value: "Rezidencë Private" },
      { label: "Vendndodhja", value: "Tiranë, Shqipëri" },
      { label: "Viti", value: "2024" },
      { label: "Sipërfaqja", value: "450 m²" },
    ],
    images: [
      { url: "/assets/images/cdc4.jpg" },
      { url: "/assets/images/cdc3.jpg" },
      { url: "/assets/images/cdc5.jpg" },
    ],
  },
  {
    id: 2,
    title: "Apartament Urban",
    category: "Interior",
    description:
      "Një hapësirë urbane që maksimizon dritën natyrore dhe funksionalitetin. Ky projekt demonstron ekspertizën tonë në zgjidhjet moderne të interierit.",
    details: [
      { label: "Klienti", value: "Zhvillim Urban" },
      { label: "Vendndodhja", value: "Durrës, Shqipëri" },
      { label: "Viti", value: "2023" },
      { label: "Sipërfaqja", value: "280 m²" },
    ],
    images: [
      { url: "/assets/images/cdc6.jpg" },
      { url: "/assets/images/cdc7.jpg" },
      { url: "/assets/images/cdc8.jpg" },
    ],
  },
  {
    id: 3,
    title: "Penthouse Luksoz",
    category: "Interior",
    description:
      "Një dizajn ekskluziv që kombinon luksin me funksionalitetin. Ky projekt përfaqëson kulmin e jetesës moderne.",
    details: [
      { label: "Klienti", value: "Rezidencë Private" },
      { label: "Vendndodhja", value: "Vlorë, Shqipëri" },
      { label: "Viti", value: "2024" },
      { label: "Sipërfaqja", value: "600 m²" },
    ],
    images: [
      { url: "/assets/images/cdc9.jpg" },
      { url: "/assets/images/cdc10.jpg" },
      { url: "/assets/images/cdc11.jpg" },
    ],
  },
];

export default function ProjectClient({ params }: { params: { id: string } }) {
  const project =
    projects.find((p) => p.id === parseInt(params.id)) || projects[0];
  const nextProjectId = project.id < projects.length ? project.id + 1 : 1;

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            [KTHEHU TEK PROJEKTET]
          </Link>
        </motion.div>

        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-[8vw] font-light leading-[0.9] mb-6">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-gray-400 text-lg">{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {project.details.map((detail, index) => (
              <div key={detail.label}>
                <div className="text-sm text-gray-400 mb-2">
                  [{detail.label.toUpperCase()}]
                </div>
                <div className="text-lg">{detail.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 gap-8">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden">
                <Image
                  src={image.url}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 mb-20 text-center"
        >
          <Link
            href={`/projects/${nextProjectId}`}
            className="text-[5vw] font-light text-gray-600 hover:text-white transition-colors"
          >
            PROJEKTI TJETËR
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

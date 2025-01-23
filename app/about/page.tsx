"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountingNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value);
  const [count, setCount] = React.useState(0);

  const animate = React.useCallback(
    (currentTime: number) => {
      let startTime = currentTime;
      const duration = 2000;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(easeOutExpo(progress) * numericValue);
        setCount(currentCount);
        if (progress < 1) requestAnimationFrame(step);
      };

      step(currentTime);
    },
    [numericValue]
  );

  React.useEffect(() => {
    if (isInView) {
      requestAnimationFrame(animate);
    }
  }, [isInView, animate]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-light mb-2"
    >
      {count}+
    </motion.div>
  );
}

export default function About() {
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

  const stats = [
    { number: "25", label: "Vite Eksperiencë" },
    { number: "300", label: "Projekte të Realizuara" },
    { number: "300", label: "Klientë të Kënaqur" },
  ];

  const team = [
    {
      name: "Elda Bano",
      role: "Themeluese",
      image: "/assets/images/elda.png",
    },
    {
      name: "Silvi Laku",
      role: "Arkitekte",
      image: "/assets/images/silvi.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-[8vw] font-light leading-[0.9] mb-8">
            RRETH NESH
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Casa Dolce Casa është një studio dizajni e specializuar në
            projektimin dhe realizimin e hapësirave të brendshme dhe të jashtme.
            Me një përvojë 10-vjeçare në treg, ne kemi krijuar hapësira unike që
            reflektojnë personalitetin dhe nevojat e klientëve tanë.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group overflow-hidden bg-zinc-900 rounded-[32px] p-12 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              {/* Content */}
              <CountingNumber value={stat.number.replace("+", "")} />
              <motion.div
                className="text-sm text-gray-400 group-hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.section
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-sm text-gray-400 mb-12 block">[EKIPI YNË]</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-[32px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-sm text-gray-400 mb-12 block">
            [VLERAT TONA]
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              className="bg-zinc-900 p-8 rounded-[32px]"
            >
              <h3 className="text-2xl mb-4">Cilësi pa Kompromis</h3>
              <p className="text-gray-400 leading-relaxed">
                Çdo projekt realizohet me materialet më cilësore dhe me
                standardet më të larta të punimit.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-zinc-900 p-8 rounded-[32px]"
            >
              <h3 className="text-2xl mb-4">Dizajn i Personalizuar</h3>
              <p className="text-gray-400 leading-relaxed">
                Krijojmë hapësira unike që reflektojnë personalitetin dhe stilin
                e çdo klienti.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

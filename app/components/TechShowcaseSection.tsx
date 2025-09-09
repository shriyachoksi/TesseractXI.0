"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Brain, Network, Atom } from "lucide-react";

interface TechShowcase {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const techShowcases: TechShowcase[] = [
  {
    icon: Brain,
    title: "AI & Robotics",
    description: "Experience next-gen AI and autonomous robots in action",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: Network,
    title: "Metaverse Lab",
    description: "Dive into immersive VR/AR experiences and virtual worlds",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Cpu,
    title: "Tech Battles",
    description: "Compete in coding, robotics, and gaming tournaments",
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    icon: Atom,
    title: "Innovation Hub",
    description: "Student projects pushing technological boundaries",
    color: "from-emerald-500/20 to-green-500/20"
  }
];

const TechShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-reveal"
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-tesseract-dark mb-4">
            Future Technologies
          </h2>
          <p className="text-xl text-tesseract-bronze max-w-3xl mx-auto">
            Exploring the cutting-edge innovations shaping tomorrow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techShowcases.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative bg-tesseract-light/80 backdrop-blur-sm p-8 rounded-2xl shadow-tesseract overflow-hidden hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <tech.icon className="w-12 h-12 text-tesseract-bronze mb-6" />
                  <h3 className="text-2xl font-bold text-tesseract-dark mb-3">{tech.title}</h3>
                  <p className="text-tesseract-bronze">{tech.description}</p>
                </div>

                {/* Interactive Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcaseSection;

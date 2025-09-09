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
    color: "from-tesseract-bronze/20 to-tesseract-sand/30"
  },
  {
    icon: Network,
    title: "Metaverse Lab",
    description: "Dive into immersive VR/AR experiences and virtual worlds",
    color: "from-tesseract-sand/20 to-tesseract-cream/30"
  },
  {
    icon: Cpu,
    title: "Tech Battles",
    description: "Compete in coding, robotics, and gaming tournaments",
    color: "from-tesseract-cream/20 to-tesseract-light/30"
  },
  {
    icon: Atom,
    title: "Innovation Hub",
    description: "Student projects pushing technological boundaries",
    color: "from-tesseract-bronze/30 to-tesseract-sand/20"
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
      className="py-20 relative overflow-hidden bg-gradient-to-br from-tesseract-cream/40 via-tesseract-light/80 to-tesseract-sand/50"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-1/4 w-48 h-48 bg-tesseract-bronze/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-36 h-36 bg-tesseract-sand/15 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold text-tesseract-dark mb-4"
            style={{ 
              textShadow: '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(66,48,31,0.2)' 
            }}
          >
            Future Technologies
          </h2>
          <p 
            className="text-xl text-tesseract-bronze max-w-3xl mx-auto font-medium"
            style={{ 
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
            }}
          >
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
                className="group relative bg-tesseract-light/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl overflow-hidden border border-tesseract-sand/30 hover:border-tesseract-bronze/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <tech.icon 
                      className="w-12 h-12 text-tesseract-bronze group-hover:text-tesseract-dark transition-colors" 
                      style={{ 
                        filter: 'drop-shadow(1px 1px 2px rgba(255,255,255,0.8))' 
                      }}
                    />
                  </motion.div>
                  <h3 
                    className="text-2xl font-bold text-tesseract-dark mb-3 group-hover:text-tesseract-bronze transition-colors"
                    style={{ 
                      textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
                    }}
                  >
                    {tech.title}
                  </h3>
                  <p 
                    className="text-tesseract-bronze font-medium leading-relaxed"
                    style={{ 
                      textShadow: '0.5px 0.5px 1px rgba(255,255,255,0.8)' 
                    }}
                  >
                    {tech.description}
                  </p>
                </div>

                {/* Interactive Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-r from-tesseract-bronze/20 to-tesseract-sand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-tesseract-bronze/5 via-transparent to-tesseract-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcaseSection;

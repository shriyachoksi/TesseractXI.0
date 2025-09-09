/**
 * HeroSection Component
 * 
 * Required Dependencies:
 * - react: For hooks (useEffect, useRef)
 * - framer-motion: For animations and transitions
 * - typed.js: For animated typing effect
 * 
 * Features:
 * - Animated text typing effect
 * - Parallax background image
 * - Responsive design
 * - Smooth entrance animations
 * 
 * Props: None
 * 
 * Refs:
 * - typedRef: For typed.js instance
 * - typedInstance: Stores the Typed object
 * 
 * Assets:
 * - heroTechBanner: Background image URL
 * 
 * Animations:
 * - Text typing effect with multiple strings
 * - Fade-in and slide-up animations
 * 
 * Styling:
 * - Tailwind CSS for responsive layout
 * - Custom background image with overlay
 * - Typography with tesseract theme
 * 
 * Usage:
 * ```tsx
 * import HeroSection from '@/components/HeroSection';
 * 
 * function App() {
 *   return <HeroSection />;
 * }
 * ```
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";


// Words that will be animated with a glitch effect
const glitchWords = ["INNOVATE", "CREATE", "EVOLVE", "DISRUPT", "TRANSFORM"];

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [glitchWord, setGlitchWord] = useState(glitchWords[0]);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          "Evolution Through Technologies",
          "Past, Present, Future: A Tech Odyssey", 
          "Chronicles of Change",
          "Engines to Algorithms",
          "Threads of Time: A Technological Journey"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(244, 235, 226, 0.85), rgba(203, 177, 151, 0.7)), url(/placeholder.svg)` 
        }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-tesseract-dark to-tesseract-bronze text-transparent bg-clip-text">
            TESSERACT
          </span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div
          className="text-xl md:text-3xl lg:text-4xl font-semibold text-tesseract-dark mb-8 min-h-[3rem] [text-shadow:_0_1px_1px_rgb(255_255_255_/_50%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span ref={typedRef}></span>
        </motion.div>

        {/* Tech Fest 2025 Badge */}
        <motion.div
          className="inline-flex items-center bg-tesseract-cream/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-tesseract"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 bg-tesseract-bronze rounded-full animate-pulse mr-3"></div>
          <span className="text-tesseract-dark font-bold text-lg">
            Tech Fest 2025 • February 15-17
          </span>
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;
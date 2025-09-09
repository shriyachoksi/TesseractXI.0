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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-tesseract-light via-tesseract-cream/60 to-tesseract-sand/40">
      {/* Enhanced Background with better gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tesseract-light/95 via-tesseract-cream/80 to-tesseract-sand/70" />
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(/placeholder.svg)`,
              filter: 'blur(1px)'
            }}
          />
        </div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-tesseract-bronze/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-tesseract-sand/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-tesseract-cream/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main Title with enhanced styling */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            textShadow: '3px 3px 6px rgba(255,255,255,0.8), -2px -2px 4px rgba(66,48,31,0.3)' 
          }}
        >
          <span className="bg-gradient-to-r from-tesseract-dark via-tesseract-bronze to-tesseract-dark text-transparent bg-clip-text drop-shadow-lg">
            TESSERACT
          </span>
        </motion.h1>

        {/* Enhanced Animated Tagline */}
        <motion.div
          className="text-xl md:text-3xl lg:text-4xl font-bold text-tesseract-dark mb-12 min-h-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ 
            textShadow: '2px 2px 4px rgba(255,255,255,0.9), -1px -1px 2px rgba(66,48,31,0.2)' 
          }}
        >
          <span ref={typedRef}></span>
        </motion.div>

        {/* Enhanced Tech Fest 2025 Badge */}
        <motion.div
          className="inline-flex items-center bg-gradient-to-r from-tesseract-light/95 to-tesseract-cream/95 backdrop-blur-md rounded-full px-10 py-5 shadow-2xl border-2 border-tesseract-bronze/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(166, 124, 82, 0.3)"
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-tesseract-bronze to-tesseract-dark rounded-full animate-pulse mr-4 shadow-lg"></div>
          <span className="text-tesseract-dark font-bold text-lg md:text-xl">
            Tech Fest 2025 • February 15-17
          </span>
        </motion.div>

        {/* Additional Call to Action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="text-tesseract-bronze font-semibold text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed"
             style={{ 
               textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
             }}>
            Embark on a journey through time and technology at the most innovative fest of the year
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
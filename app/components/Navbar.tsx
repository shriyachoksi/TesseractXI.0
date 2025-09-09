
/**
 * Navbar Component
 * 
 * Required Dependencies:
 * - framer-motion: For animations and transitions
 * - lucide-react: For icons (Home, Info, Calendar, Image, Users, Menu, X)
 * - react: For useState hook and component functionality
 * 
 * Features:
 * - Responsive navigation with mobile menu support
 * - Animated transitions and hover effects
 * - Fixed positioning with backdrop blur
 * - Logo and brand name display
 * 
 * Props: None
 * 
 * State:
 * - isOpen: boolean - Controls mobile menu visibility
 * 
 * Navigation Items:
 * - Home
 * - About
 * - Events
 * - Gallery
 * - Team
 * 
 * Styling:
 * - Uses Tailwind CSS for responsive design
 * - Custom color scheme with tesseract theme
 * - Backdrop blur effect for modern UI
 * 
 * Usage:
 * ```tsx
 * import Navbar from '@/components/Navbar';
 * 
 * function App() {
 *   return <Navbar />;
 * }
 * ```
 */

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "#team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-tesseract-light/95 backdrop-blur-md shadow-2xl border-b border-tesseract-sand/30 z-50"
    >
      <div className="flex items-center justify-between mx-4 md:mx-8 py-4">
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center ml-2 group">
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-black text-tesseract-dark relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ 
                textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
              }}
            >
              TESSERACT
              <div className="absolute inset-0 bg-gradient-to-r from-tesseract-bronze/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-tesseract-dark hover:text-tesseract-bronze transition-colors bg-tesseract-cream/50 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 mr-4">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative text-tesseract-dark hover:text-tesseract-bronze font-semibold transition-colors group px-3 py-2 rounded-lg hover:bg-tesseract-cream/50"
              style={{ 
                textShadow: '0.5px 0.5px 1px rgba(255,255,255,0.8)' 
              }}
            >
              {item.name}
              <motion.div 
                className="absolute -bottom-1 left-3 w-0 h-[2px] bg-tesseract-bronze origin-left group-hover:w-[calc(100%-1.5rem)] transition-all duration-300" 
                layoutId={`underline-${item.name}`}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-tesseract-light/98 backdrop-blur-md md:hidden border-b border-tesseract-sand/30 shadow-xl"
            >
              <nav className="flex flex-col py-4 px-6">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsOpen(false)}
                    className="relative px-4 py-3 text-tesseract-dark hover:text-tesseract-bronze border-b border-tesseract-sand/20 last:border-none transition-colors group font-medium rounded-lg hover:bg-tesseract-cream/30"
                  >
                    <span>{item.name}</span>
                    <motion.div 
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-tesseract-bronze/0 group-hover:bg-tesseract-bronze/50 transition-colors duration-300" 
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
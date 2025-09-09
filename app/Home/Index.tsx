"use client";

/**
 * HomePage/Index Component
 * 
 * Required Dependencies:
 * - framer-motion: For page animations
 * - lucide-react: For section icons
 * 
 * Required Components:
 * - Navbar: Main navigation
 * - HeroSection: Landing banner
 * - VideoSection: Featured video
 * - TimelineSection: Timeline showcase
 * - TechShowcaseSection: Tech highlights
 * - SponsorsSection: Sponsor showcase
 * - Footer: Page footer
 * 
 * Page Structure:
 * 1. Navigation bar (fixed)
 * 2. Hero section with typed text
 * 3. Video showcase
 * 4. Timeline section
 * 5. Tech showcase
 * 6. Sponsors grid
 * 7. Footer
 * 
 * Features:
 * - Smooth scroll navigation
 * - Animated section transitions
 * - Responsive layout
 * - Dynamic content loading
 * 
 * Navigation Handling:
 * - Section scrolling
 * - Route management
 * - Smooth transitions
 * 
 * Styling:
 * - Tailwind CSS layout
 * - Custom animations
 * - Responsive design
 * - Theme consistency
 * 
 * Usage:
 * ```tsx
 * import HomePage from '@/pages/Index';
 * 
 * function App() {
 *   return <HomePage />;
 * }
 * ```
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import VideoSection from "@/app/components/VideoSection";
import TimelineSection from "@/app/components/TimelineSection";
import TechShowcaseSection from "@/app/components/TechShowcaseSection";
import TeamSection from "@/app/components/TeamSection";
import SponsorsSection from "@/app/components/SponsorsSection";
import Footer from "@/app/components/Footer";

const HomePage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.2, 0.1]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--tesseract-bronze)), transparent)",
          opacity: backgroundOpacity
        }}
      />
      
      {/* Main Content */}
      <main className="pt-16 relative" ref={mainRef}>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Video Section */}
        <VideoSection />
        
        {/* Timeline Section */}
        <TimelineSection />
        
        {/* Tech Showcase Section */}
        <TechShowcaseSection />

        {/* Team Section */}
        <TeamSection />
        
        {/* Sponsors Section */}
        <SponsorsSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;

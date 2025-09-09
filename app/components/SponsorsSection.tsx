/**
 * SponsorsSection Component
 * 
 * Required Dependencies:
 * - framer-motion: For animations and transitions
 * - lucide-react: For icons (Crown, Award, Star)
 * 
 * Features:
 * - Tiered sponsor display (Title, Gold, Silver)
 * - Animated sponsor logos
 * - Responsive grid layout
 * - Hover effects on logos
 * 
 * Props: None
 * 
 * Constants:
 * - sponsorLogos: Array of logo image URLs
 * - sponsorTiers: Array of tier configurations
 *   - tier: string - Tier name
 *   - icon: IconComponent - Tier icon
 *   - sponsors: string[] - Sponsor names
 * 
 * Animations:
 * - Fade-in and scale effects
 * - Staggered entrance for logos
 * - Hover animations on cards
 * 
 * Styling:
 * - Tailwind CSS grid system
 * - Custom card designs
 * - Responsive spacing
 * - Brand-specific colors
 * 
 * Usage:
 * ```tsx
 * import SponsorsSection from '@/components/SponsorsSection';
 * 
 * function App() {
 *   return <SponsorsSection />;
 * }
 * ```
 */

import React from "react";
import { motion } from "framer-motion";
import { Crown, Award, Star } from "lucide-react";


// Array of sponsor logo images (using placeholder tech company logos)
const sponsorLogos = [
  "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg",
  "https://img.freepik.com/free-vector/abstract-technology-logo_1061-95.jpg",
  "https://img.freepik.com/free-vector/abstract-logo-template_1061-143.jpg",
  "https://img.freepik.com/free-vector/technology-logo-template_1061-97.jpg"
];

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    icon: Crown,
    sponsors: ["TechCorp Global", "Innovation Labs"]
  },
  {
    tier: "Gold Sponsors",
    icon: Award,
    sponsors: ["FutureTech Solutions", "AI Dynamics", "Quantum Systems", "NextGen Robotics"]
  },
  {
    tier: "Silver Sponsors", 
    icon: Star,
    sponsors: ["Digital Innovations", "Smart Solutions", "Tech Pioneers", "Code Masters", "Data Insights", "Cloud Nine"]
  }
];

const SponsorsSection = () => {
  return (
    <section className="py-20 px-4 bg-tesseract-sand/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-tesseract-dark mb-4 [text-shadow:_0_1px_2px_rgb(255_255_255_/_30%)]">
            Our Partners
          </h2>
          <p className="text-xl font-medium text-tesseract-dark max-w-3xl mx-auto">
            Supported by industry leaders who believe in the future of technology
          </p>
        </motion.div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tierIndex * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-8">
                <tier.icon className="w-8 h-8 text-tesseract-bronze mr-3" />
                <h3 className="text-2xl font-bold text-tesseract-dark">
                  {tier.tier}
                </h3>
              </div>
              
              <div className={`grid gap-6 ${
                tier.tier === "Title Sponsor" 
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" 
                  : tier.tier === "Gold Sponsors"
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
              }`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsor}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (tierIndex * 0.2) + (sponsorIndex * 0.1) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5 
                    }}
                    className={`bg-tesseract-light rounded-xl shadow-tesseract hover:shadow-glow transition-all duration-300 ${
                      tier.tier === "Title Sponsor" 
                        ? "p-12" 
                        : tier.tier === "Gold Sponsors"
                        ? "p-8"
                        : "p-6"
                    }`}
                  >
                    <div className="flex items-center justify-center h-16 mb-4">
                      <img 
                        src={sponsorLogos[Math.floor(Math.random() * sponsorLogos.length)]}
                        alt={sponsor}
                        className={`rounded-lg object-contain ${
                          tier.tier === "Title Sponsor" 
                            ? "w-16 h-16" 
                            : tier.tier === "Gold Sponsors"
                            ? "w-12 h-12"
                            : "w-10 h-10"
                        }`}
                      />
                    </div>
                    <h4 className={`font-semibold text-tesseract-dark text-center ${
                      tier.tier === "Title Sponsor" 
                        ? "text-xl" 
                        : tier.tier === "Gold Sponsors"
                        ? "text-lg"
                        : "text-sm"
                    }`}>
                      {sponsor}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action for sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-tesseract-cream/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-tesseract-dark mb-4">
              Become a Sponsor
            </h3>
            <p className="text-tesseract-dark mb-6">
              Join us in shaping the future of technology. Partner with Tesseract 2025 
              and showcase your innovation to the next generation.
            </p>
            <motion.button
              className="bg-tesseract-dark text-tesseract-cream hover:bg-tesseract-bronze px-8 py-3 rounded-xl font-semibold shadow-tesseract hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log("Sponsor inquiry")}
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
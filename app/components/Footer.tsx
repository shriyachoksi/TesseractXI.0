/**
 * Footer Component
 * 
 * Required Dependencies:
 * - framer-motion: For animations
 * - lucide-react: For icons
 *   - Mail: Email icon
 *   - Phone: Contact icon
 *   - MapPin: Location icon
 *   - Instagram: Social media icon
 *   - Twitter: Social media icon
 *   - Linkedin: Social media icon
 *   - Youtube: Social media icon
 *   - Calendar: Events icon
 * 
 * Features:
 * - Contact information display
 * - Social media links
 * - Quick links section
 * - Newsletter subscription
 * - Copyright notice
 * 
 * Sections:
 * - Brand section with logo
 * - Contact info with icons
 * - Social media links
 * - Quick navigation links
 * - Newsletter subscription form
 * 
 * Animations:
 * - Fade-in on scroll
 * - Hover effects on links
 * - Button animations
 * 
 * Styling:
 * - Responsive grid layout
 * - Custom color scheme
 * - Icon animations
 * - Hover effects
 * 
 * Usage:
 * ```tsx
 * import Footer from '@/components/Footer';
 * 
 * function App() {
 *   return <Footer />;
 * }
 * ```
 */
import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Calendar,
  Clock,
  Users
} from "lucide-react";
const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/#team" },
    { name: "Sponsors", href: "#sponsors" }
  ];

  const eventHighlights = [
    { icon: Calendar, text: "February 15-17, 2025" },
    { icon: Clock, text: "72 Hours of Innovation" },
    { icon: Users, text: "1000+ Participants Expected" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-tesseract-bronze" },
    { icon: Twitter, href: "#", color: "hover:text-tesseract-bronze" },
    { icon: Linkedin, href: "#", color: "hover:text-tesseract-bronze" },
    { icon: Youtube, href: "#", color: "hover:text-tesseract-bronze" }
  ];

  return (
    <footer className="bg-gradient-to-br from-tesseract-dark/95 via-tesseract-dark/90 to-tesseract-bronze/20 text-tesseract-light backdrop-blur-sm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-tesseract-bronze rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-tesseract-sand rounded-full blur-3xl"></div>
      </div>

      <div className="px-4 py-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-y-4">
            {/* Logo and Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center gap-4">
                <motion.img
                  src="/images/favicon.ico"
                  alt="Tesseract Logo"
                  className="w-8 h-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    filter: 'drop-shadow(1px 1px 2px rgba(237,213,183,0.8))' 
                  }}
                />
                <div>
                  <h3 
                    className="text-lg font-bold text-tesseract-light"
                    style={{ 
                      textShadow: '1px 1px 2px rgba(237,213,183,0.5)' 
                    }}
                  >
                    TESSERACT
                  </h3>
                  <p 
                    className="text-sm text-tesseract-sand"
                    style={{ 
                      textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.5)' 
                    }}
                  >
                    Tech Fest 2025
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                {eventHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center text-xs text-tesseract-sand mr-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <item.icon className="w-3 h-3 mr-1 text-tesseract-bronze" />
                    <span style={{ textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' }}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links and Contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-x-8 gap-y-2"
            >
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  className="text-sm text-tesseract-cream hover:text-tesseract-bronze transition-colors"
                  whileHover={{ y: -1, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => console.log(`Navigate to ${link.name}`)}
                  style={{ 
                    textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' 
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="h-4 w-px bg-tesseract-bronze/50 hidden md:block" />
              <motion.div
                className="flex items-center gap-4 text-sm text-tesseract-sand"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail 
                    className="w-4 h-4 text-tesseract-bronze" 
                    style={{ filter: 'drop-shadow(0.5px 0.5px 1px rgba(237,213,183,0.5))' }}
                  />
                  <span style={{ textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' }}>
                    info@tesseract2025.com
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone 
                    className="w-4 h-4 text-tesseract-bronze" 
                    style={{ filter: 'drop-shadow(0.5px 0.5px 1px rgba(237,213,183,0.5))' }}
                  />
                  <span style={{ textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' }}>
                    +91 12345 67890
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Newsletter and Social */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="hidden md:flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-48 bg-tesseract-bronze/20 border border-tesseract-bronze/50 rounded-l-lg px-3 py-1 text-sm text-tesseract-cream placeholder-tesseract-sand/70 focus:outline-none focus:border-tesseract-bronze backdrop-blur-sm"
                  style={{ 
                    textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' 
                  }}
                />
                <motion.button
                  className="bg-gradient-to-r from-tesseract-bronze to-tesseract-sand text-tesseract-dark px-4 py-1 rounded-r-lg text-sm font-medium hover:from-tesseract-sand hover:to-tesseract-bronze transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    textShadow: '0.5px 0.5px 1px rgba(66,48,31,0.3)' 
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
              <div className="h-4 w-px bg-tesseract-bronze/50 hidden md:block" />
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-tesseract-cream ${social.color} transition-colors p-1 rounded-lg hover:bg-tesseract-bronze/20`}
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon 
                      className="w-4 h-4" 
                      style={{ filter: 'drop-shadow(0.5px 0.5px 1px rgba(237,213,183,0.5))' }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 pt-4 mt-4 border-t border-tesseract-bronze/50 text-xs text-tesseract-sand">
            <p style={{ textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' }}>
              © 2025 Tesseract - Tech Fest | Evolution Through Technologies
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ y: -1, scale: 1.02 }}
                className="hover:text-tesseract-cream transition-colors"
                style={{ textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ y: -1, scale: 1.02 }}
                className="hover:text-tesseract-cream transition-colors"
                style={{ textShadow: '0.5px 0.5px 1px rgba(237,213,183,0.3)' }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
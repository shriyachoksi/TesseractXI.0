"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "hover:text-neon-blue",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-neon-purple",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-neon-green",
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-tesseract-darkest via-tesseract-dark to-tesseract-medium/50 border-t-2 border-neon-blue/30 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl animate-slow-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-neon-purple/10 rounded-full blur-2xl animate-slow-pulse delay-75" />
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-neon-green/10 rounded-full blur-2xl animate-slow-pulse delay-150" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-neon-orange/10 rounded-full blur-2xl animate-slow-pulse delay-225" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src="/logo/logo_white.png"
                  alt="Tesseract Logo"
                  className="h-12 w-12 mr-3"
                  style={{
                    filter: "drop-shadow(0 0 8px hsla(var(--neon-blue),0.9))",
                  }}
                />
                <h3
                  className="text-2xl font-bold text-neon-green"
                  style={{
                    textShadow:
                      "0 0 10px hsla(var(--neon-green),0.8), 0 0 15px hsla(var(--neon-blue),0.6)",
                  }}
                >
                  Tesseract XI.0
                </h3>
              </div>
              <p
                className="text-neon-orange mb-6 leading-relaxed max-w-md"
                style={{
                  textShadow: "0.5px 0.5px 3px hsla(var(--neon-orange),0.7)",
                }}
              >
                Evolution Through Technologies - Where innovation meets the
                future of computing and human potential.
              </p>
            </motion.div>

            {/* Event Highlights */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4
                className="text-lg font-semibold mb-4 text-neon-blue"
                style={{
                  textShadow: "0 0 8px hsla(var(--neon-blue),0.8)",
                }}
              >
                Event Highlights
              </h4>
              <div className="flex flex-wrap gap-3">
                {eventHighlights.map((event, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center text-xs text-neon-orange mr-6"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 8px hsla(var(--neon-orange), 1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-1">{event.icon}</span>
                    {event.name}
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4
                className="text-lg font-semibold mb-6 text-neon-purple"
                style={{
                  textShadow: "0 0 8px hsla(var(--neon-purple),0.8)",
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      y: -2,
                      scale: 1.05,
                      textShadow: "0 0 8px hsla(var(--neon-orange), 1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-neon-green hover:text-neon-orange transition-colors"
                      onClick={() => console.log(`Navigate to ${link.name}`)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4
                className="text-lg font-semibold mb-6 text-neon-green"
                style={{
                  textShadow: "0 0 8px hsla(var(--neon-green),0.8)",
                }}
              >
                Contact Us
              </h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 8px hsla(var(--neon-blue), 1)",
                  }}
                >
                  <Mail
                    className="w-4 h-4 text-neon-blue"
                    style={{
                      filter: "drop-shadow(0 0 5px hsla(var(--neon-blue),0.8))",
                    }}
                  />
                  <span className="text-sm text-neon-orange">
                    contact@tesseract.com
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 8px hsla(var(--neon-blue), 1)",
                  }}
                >
                  <Phone
                    className="w-4 h-4 text-neon-blue"
                    style={{
                      filter: "drop-shadow(0 0 5px hsla(var(--neon-blue),0.8))",
                    }}
                  />
                  <span className="text-sm text-neon-orange">
                    +1 (555) 123-4567
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 8px hsla(var(--neon-blue), 1)",
                  }}
                >
                  <MapPin
                    className="w-4 h-4 text-neon-blue"
                    style={{
                      filter: "drop-shadow(0 0 5px hsla(var(--neon-blue),0.8))",
                    }}
                  />
                  <span className="text-sm text-neon-orange">
                    Tech Campus, Innovation District
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-neon-green ${social.color} transition-colors p-1 rounded-lg hover:bg-neon-blue/30`}
                whileHover={{
                  scale: 1.15,
                  y: -2,
                  boxShadow: "0 0 10px hsla(var(--neon-blue),0.7)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon
                  className="w-6 h-6"
                  style={{
                    filter: "drop-shadow(0 0 6px hsla(var(--neon-green),0.8))",
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <div
          className="flex flex-wrap items-center justify-between gap-y-2 pt-4 mt-4 border-t border-neon-blue/60 text-xs text-neon-orange"
          style={{
            textShadow: "0.5px 0.5px 2px hsla(var(--neon-orange),0.7)",
          }}
        >
          <p>
            © {currentYear} Tesseract - Tech Fest | Evolution Through
            Technologies
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{
                y: -2,
                scale: 1.05,
                textShadow: "0 0 8px hsla(var(--neon-green), 1)",
              }}
              className="hover:text-neon-green transition-colors"
              style={{
                textShadow: "0.5px 0.5px 2px hsla(var(--neon-orange),0.7)",
              }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              whileHover={{
                y: -2,
                scale: 1.05,
                textShadow: "0 0 8px hsla(var(--neon-green), 1)",
              }}
              className="hover:text-neon-green transition-colors"
              style={{
                textShadow: "0.5px 0.5px 2px hsla(var(--neon-orange),0.7)",
              }}
            >
              Terms of Service
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

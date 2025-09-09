"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
   

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: "past" | "present" | "future";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "Day 1",
    title: "Tech Unleashed",
    description: "Kickoff with cutting-edge tech demos and interactive workshops",
    category: "past"
  },
  {
    year: "Day 2",
    title: "Code Warriors",
    description: "Hackathons and coding challenges push innovation limits",
    category: "present"
  },
  {
    year: "Day 3",
    title: "Future Now",
    description: "Showcasing breakthroughs in AI, VR, and quantum tech",
    category: "future"
  },
  {
    year: "Evening",
    title: "Tech Talks",
    description: "Industry leaders share insights on emerging technologies",
    category: "present"
  },
  {
    year: "Night",
    title: "Innovation Awards",
    description: "Celebrating the best tech innovations and creators",
    category: "future"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-tesseract-sand/30 via-tesseract-cream/20 to-tesseract-light/60 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-tesseract-bronze/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-tesseract-sand/15 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
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
            Milestones
          </h2>
          <p 
            className="text-xl text-tesseract-bronze max-w-3xl mx-auto font-medium"
            style={{ 
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
            }}
          >
            Our journey, one milestone at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year + event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-tesseract-light/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-start relative group hover:shadow-2xl transition-all duration-300 border border-tesseract-sand/30 hover:border-tesseract-bronze/50"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <span className={`px-4 py-2 mb-4 rounded-full text-sm font-semibold tracking-wider uppercase
                ${event.category === "past" ? "bg-gradient-to-r from-tesseract-bronze/30 to-tesseract-sand/30 text-tesseract-dark" :
                  event.category === "present" ? "bg-gradient-to-r from-tesseract-bronze/50 to-tesseract-cream/50 text-tesseract-dark" :
                  "bg-gradient-to-r from-tesseract-bronze/70 to-tesseract-dark/20 text-tesseract-dark"}`}
              >
                {event.year}
              </span>
              <h3 
                className="text-xl font-bold text-tesseract-dark mb-3 group-hover:text-tesseract-bronze transition-colors"
                style={{ 
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
                }}
              >
                {event.title}
              </h3>
              <p 
                className="text-tesseract-bronze mb-4 font-medium leading-relaxed"
                style={{ 
                  textShadow: '0.5px 0.5px 1px rgba(255,255,255,0.8)' 
                }}
              >
                {event.description}
              </p>
              <motion.div 
                className="absolute top-6 right-6 w-4 h-4 rounded-full bg-gradient-to-r from-tesseract-bronze to-tesseract-sand" 
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-tesseract-bronze/5 via-transparent to-tesseract-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

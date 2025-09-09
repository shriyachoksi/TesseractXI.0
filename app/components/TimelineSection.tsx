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
    <section className="py-20 bg-tesseract-dark/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-tesseract-dark mb-4">
            Milestones
          </h2>
          <p className="text-xl text-tesseract-bronze max-w-3xl mx-auto">
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
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start relative group hover:shadow-xl transition-shadow duration-300"
            >
              <span className={`px-4 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase
                ${event.category === "past" ? "bg-tesseract-bronze/20 text-tesseract-dark" :
                  event.category === "present" ? "bg-tesseract-bronze/40 text-tesseract-dark" :
                  "bg-tesseract-bronze/60 text-tesseract-light"}`}
              >
                {event.year}
              </span>
              <h3 className="text-xl font-bold text-tesseract-dark mb-2">{event.title}</h3>
              <p className="text-tesseract-bronze mb-4">{event.description}</p>
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-tesseract-bronze/60 group-hover:scale-125 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

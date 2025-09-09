"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle scroll events and video visibility
  useEffect(() => {
    const checkVideoVisibility = () => {
      if (!videoContainerRef.current || !videoRef.current) return;

      const rect = videoContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visiblePercentage = (Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)) / rect.height;

      if (visiblePercentage >= 0.9) {
        // Video is 90% or more visible
        if (!isPlaying) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      } else {
        // Video is less than 90% visible
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    // Check visibility on scroll
    const handleScroll = () => {
      requestAnimationFrame(checkVideoVisibility);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    checkVideoVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-tesseract-light via-tesseract-cream/60 to-tesseract-sand/40 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-tesseract-bronze/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-60 h-60 bg-tesseract-sand/20 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-6xl font-bold text-tesseract-dark mb-4"
              style={{ 
                textShadow: '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(66,48,31,0.2)' 
              }}
            >
              Journey Through Time
            </h2>
            <p 
              className="text-xl text-tesseract-bronze max-w-3xl mx-auto font-medium"
              style={{ 
                textShadow: '1px 1px 2px rgba(255,255,255,0.8)' 
              }}
            >
              Experience the evolution of technology from the Industrial Revolution to the AI-driven future
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-tesseract-dark/10 backdrop-blur-sm border border-tesseract-sand/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div ref={videoContainerRef} className="relative aspect-video bg-gradient-to-br from-tesseract-sand to-tesseract-bronze">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                controls
                playsInline
                muted={false}
                loop
                src="/placeholder.mp4"
              />
              {/* Video Overlay for Better Integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-tesseract-dark/20 via-transparent to-tesseract-light/10 pointer-events-none rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
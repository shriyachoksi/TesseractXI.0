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
    <section className="py-20 px-4 bg-tesseract-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-tesseract-dark mb-4">
              Journey Through Time
            </h2>
            <p className="text-xl text-tesseract-bronze max-w-3xl mx-auto">
              Experience the evolution of technology from the Industrial Revolution to the AI-driven future
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-tesseract bg-black"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div ref={videoContainerRef} className="relative aspect-video">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                muted={false}
                loop
                src="/placeholder.mp4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
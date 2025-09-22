"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllImages45 } from "../gallery/data";

export default function GalleryPreview() {
  // Use the exact same images as the Gallery, but show a subset (first 9)
  const all = useMemo(() => getAllImages45(), []);
  const images = useMemo(() => all.slice(0, 9), [all]);
  const [loading, setLoading] = useState<{ [id: number]: boolean }>({});

  // Minimal variants identical to Gallery for matching motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, damping: 25, stiffness: 120 },
    },
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-tesseract-light to-tesseract-cream">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-tesseract-dark text-center mb-12 capitalize"
        >
          Timeless Moments: A Tesseract Chronicle
        </motion.h3>

        <div className="relative">
          {/* Abstract dotted background behind grid */}
          <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(rgba(66,48,31,0.12) 1px, transparent 1px)`,
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          {/* Masonry columns identical to Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {images.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mb-6 break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden border border-tesseract-sand/30 bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full">
                  {loading[image.id] && (
                    <div className="absolute inset-0 bg-tesseract-cream/50 animate-pulse flex items-center justify-center z-10">
                      <div className="w-10 h-10 border-3 border-tesseract-bronze rounded-full animate-spin border-t-transparent" />
                    </div>
                  )}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition duration-300 transform filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                    style={{ opacity: loading[image.id] ? 0.6 : 1 }}
                    onLoad={() => setLoading((p) => ({ ...p, [image.id]: false }))}
                    onLoadStart={() => setLoading((p) => ({ ...p, [image.id]: true }))}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity text-tesseract-light">
                    <div className="text-sm font-semibold line-clamp-1">{image.title}</div>
                    <div className="text-xs text-tesseract-cream/90 line-clamp-2">{image.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-block px-6 py-3 rounded-2xl bg-tesseract-dark text-tesseract-light hover:bg-tesseract-bronze transition-colors border border-tesseract-sand/30 shadow-md"
          >
            View More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
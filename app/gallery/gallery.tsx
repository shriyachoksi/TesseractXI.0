"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Navbar } from "@/app/components/navbar";
import { getAllImages45, findImageById } from "./data";
import Footer from "@/components/ui/footer";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center";
  const variantClasses =
    variant === "outline"
      ? "border border-current"
      : "bg-tesseract-dark text-tesseract-light hover:bg-tesseract-bronze";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadingImages, setLoadingImages] = useState<{
    [key: number]: boolean;
  }>({});

  // Show exactly 45 images
  const allImages = useMemo(() => getAllImages45(), []);

  // Carousel removed; no representatives needed

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Category button variants removed with UI

  return (
    <div className="min-h-screen bg-tesseract-light">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <div className="text-center mt-5 mb-5">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 tracking-wide ${orbitron.className}`}
            style={{ textShadow: "0 0 15px rgba(59, 130, 246, 0.4)" }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Moments from Tesseract
            </span>
          </h1>
          <p className="text-md text-slate-400 max-w-2xl mx-auto font-sans">
            Relive the Best Moments Through Our Gallery
          </p>
        </div>

        {/* Gallery Grid */}
        <section className="py-10 px-8 bg-gradient-to-b from-tesseract-light to-tesseract-cream">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Single view: Masonry Grid */}

            {/* Decade Filters removed: showing all images on a single page */}

            {/* Masonry Grid (Pinterest-style) with abstract dotted background */}
            {(() => {
              return (
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
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                    {allImages.map((image, index) => (
                      <motion.div
                        key={image.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                        className="mb-6 break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden border border-tesseract-sand/30 bg-white shadow-sm hover:shadow-xl transition-shadow"
                        // onClick={() => setSelectedImage(image.id)}
                      >
                        <div className="relative w-full">
                          {/* Loading State */}
                          {loadingImages[image.id] && (
                            <div className="absolute inset-0 bg-tesseract-cream/50 animate-pulse flex items-center justify-center z-10">
                              <div className="w-10 h-10 border-3 border-tesseract-bronze rounded-full animate-spin border-t-transparent" />
                            </div>
                          )}

                          {/* Image */}
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-auto object-cover transition duration-300 transform filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                            style={{
                              opacity: loadingImages[image.id] ? 0.6 : 1,
                            }}
                            onLoad={() =>
                              setLoadingImages((prev) => ({
                                ...prev,
                                [image.id]: false,
                              }))
                            }
                            onLoadStart={() =>
                              setLoadingImages((prev) => ({
                                ...prev,
                                [image.id]: true,
                              }))
                            }
                          />
                          {/* Caption overlay */}
                          {/* <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity text-tesseract-light">
                            <div className="text-sm font-semibold line-clamp-1">
                              {image.title}
                            </div>
                            <div className="text-xs text-tesseract-cream/90 line-clamp-2">
                              {image.description}
                            </div>
                          </div> */}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </section>

        {/* Enhanced Modal for Image Preview (refined layout & readability) */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-tesseract-dark/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-3xl w-full rounded-3xl border border-tesseract-sand/30 bg-transparent backdrop-blur-xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-auto text-tesseract-light"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const image =
                    selectedImage != null
                      ? findImageById(selectedImage)
                      : undefined;
                  return image ? (
                    <div>
                      {/* Header with title and close button (no overlap with image) */}
                      <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
                        <motion.h2
                          className="text-xl md:text-2xl font-bold text-tesseract-light"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {image.title}
                        </motion.h2>
                        <motion.button
                          onClick={() => setSelectedImage(null)}
                          className="shrink-0 w-10 h-10 bg-tesseract-light/10 hover:bg-tesseract-light/20 text-tesseract-light hover:text-tesseract-cream rounded-full flex items-center justify-center text-xl font-bold focus:outline-none transition-all duration-200 border border-tesseract-cream/30"
                          whileHover={{ scale: 1.05, rotate: 90 }}
                          whileTap={{ scale: 0.92 }}
                          aria-label="Close"
                        >
                          ×
                        </motion.button>
                      </div>

                      {/* Image area with containment to avoid cropping and overlap */}
                      <motion.div
                        className="rounded-2xl overflow-hidden shadow-xl border border-tesseract-sand/30 bg-black"
                        initial={{ scale: 0.97, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full max-h-[70vh] object-contain bg-black"
                        />
                      </motion.div>

                      {/* Description and actions */}
                      {image.description && (
                        <motion.p
                          className="mt-4 text-sm md:text-base text-tesseract-cream"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {image.description}
                        </motion.p>
                      )}

                      <motion.div
                        className="mt-6"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        <Button
                          onClick={() => setSelectedImage(null)}
                          className="bg-gradient-to-r from-tesseract-bronze to-tesseract-dark text-tesseract-light hover:from-tesseract-dark hover:to-tesseract-bronze transition-all duration-300 px-6 py-3 rounded-2xl shadow-lg"
                        >
                          Close Preview
                        </Button>
                      </motion.div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
};
export default Gallery;

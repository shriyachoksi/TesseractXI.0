"use client"
/**
 * Gallery Page Component
 * 
 * Required Dependencies:
 * - framer-motion: For animations and transitions
 * - react: For state management
 * - lucide-react: For category and navigation icons
 * - react-router-dom: For navigation
 * 
 * Required Components:
 * - Button: UI component for actions
 * - Navbar: Main navigation
 * - lucide-react: For category and navigation icons
 * - react-router-dom: For navigation
 * 
 * Required Components:
 * - Button: UI component for actions
 * - Navbar: Main navigation
 * 
 * Features:
 * - Timeline-based image categories (Past, Present, Future)
 * - Image modal with animations
 * - Category filtering
 * - Responsive grid layout
 * 
 * State Management:
 * - selectedCategory: Current active category
 * - selectedImage: Currently viewed image
 * 
 * Data Structure:
 * - galleryCategories: Category definitions
 * - galleryImages: Image collections by category
 * 
 * Animations:
 * - Grid item entrance
 * - Modal transitions
 * - Category switching
 * - Image hover effects
 * 
 * Styling:
 * - Responsive grid system
 * - Category color coding
 * - Modal overlay design
 * - Image card layouts
 * 
 * Usage:
 * ```tsx
 * import Gallery from '@/pages/Gallery';
 * 
 * function App() {
 *   return <Gallery />;
 * }
 * ```
 */

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowLeft, Clock, Cpu, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

// Simple Button component
const Button = ({ 
  children, 
  variant = "default", 
  className = "", 
  onClick, 
  ...props 
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center";
  const variantClasses = variant === "outline" 
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

// Category selection UI removed; keep images grouped internally but render all together

// Base curated images per category
const baseGalleryImages = {
  past: [
    { id: 1, title: "First Computers", description: "Early Computing History", type: "image", src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg" },
    { id: 2, title: "Vintage Technology", description: "Classic Computing Era", type: "image", src: "https://images.pexels.com/photos/163125/board-electronics-computer-data-processing-163125.jpeg" },
    { id: 3, title: "Analog Era", description: "Pre-Digital Technology", type: "image", src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" },
    { id: 4, title: "Early Networks", description: "Birth of Connectivity", type: "image", src: "https://images.unsplash.com/photo-1601791074012-d4e0ee30d9a7?auto=format&fit=crop&q=80&w=2070" },
    { id: 5, title: "Mathematical Origins", description: "Foundations of Computing", type: "image", src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070" },
    { id: 6, title: "Pioneering Innovations", description: "Breakthrough Moments", type: "image", src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=2069" },
    { id: 7, title: "Retro Gaming", description: "Early Video Game Era", type: "image", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" },
    { id: 8, title: "First Mobile Phones", description: "Mobile Communication History", type: "image", src: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=2070" },
    { id: 9, title: "Mechanical Computing", description: "Early Calculation Devices", type: "image", src: "https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?auto=format&fit=crop&q=80&w=2070" },
    { id: 10, title: "Vacuum Tubes", description: "Early Electronic Era", type: "image", src: "https://images.unsplash.com/photo-1516280906200-bf8c959f3e76?auto=format&fit=crop&q=80&w=2070" }
  ],
  present: [
    { id: 11, title: "Modern Computing", description: "Current Technology", type: "image", src: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" },
    { id: 12, title: "AI Development", description: "Machine Learning Era", type: "image", src: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" },
    { id: 13, title: "Cloud Computing", description: "Connected World", type: "image", src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg" },
    { id: 14, title: "Data Centers", description: "Modern Infrastructure", type: "image", src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2091" },
    { id: 15, title: "Smart Devices", description: "IoT Revolution", type: "image", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=2078" },
    { id: 16, title: "Digital Workspace", description: "Modern Collaboration", type: "image", src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=2070" },
    { id: 17, title: "Blockchain", description: "Decentralized Technology", type: "image", src: "https://images.unsplash.com/photo-1644658722893-2f1a17c0b39b?auto=format&fit=crop&q=80&w=2070" },
    { id: 18, title: "Cybersecurity", description: "Digital Protection", type: "image", src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2070" },
    { id: 19, title: "5G Networks", description: "Modern Connectivity", type: "image", src: "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?auto=format&fit=crop&q=80&w=2070" },
    { id: 20, title: "Green Computing", description: "Sustainable Technology", type: "image", src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070" }
  ],
  future: [
    { id: 21, title: "Future Computing", description: "Next-Gen Technology", type: "image", src: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg" },
    { id: 22, title: "Quantum Computing", description: "Future of Processing", type: "image", src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg" },
    { id: 23, title: "Virtual Reality", description: "Immersive Technology", type: "image", src: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg" },
    { id: 24, title: "Robotics & AI", description: "Autonomous Systems", type: "image", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070" },
    { id: 25, title: "Space Tech", description: "Next Frontier", type: "image", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" },
    { id: 26, title: "Bio-Computing", description: "Merging Biology & Tech", type: "image", src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070" },
    { id: 27, title: "Brain-Computer Interface", description: "Neural Technology", type: "image", src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2070" },
    { id: 28, title: "Holographic Displays", description: "3D Visualization", type: "image", src: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?auto=format&fit=crop&q=80&w=2070" },
    { id: 29, title: "Flying Cars", description: "Future Transportation", type: "image", src: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&q=80&w=2070" },
    { id: 30, title: "Smart Cities", description: "Future Urban Living", type: "image", src: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=2070" }
  ]
};

// Helper to generate many unique, reliable placeholder images (vary heights for masonry)
const generateDummyImages = (categoryKey: string, startId: number, count: number) => {
  const items = [] as { id: number; title: string; description: string; type: string; src: string }[];
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const seed = `${categoryKey}-${id}`;
    const width = 1200;
    // produce variable heights for a better masonry look
    const height = 700 + ((id % 6) * 80); // 700..1100
    items.push({
      id,
      title: `${categoryKey.toUpperCase()} Concept ${i + 1}`,
      description: `Exploration ${i + 1} in the ${categoryKey} series`,
      type: "image",
      // picsum with seed is stable and avoids 404s
      src: `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`,
    });
  }
  return items;
};

// Final galleryImages with expanded dummy items for better layout preview
const galleryImages = {
  past: [
    ...baseGalleryImages.past,
    ...generateDummyImages("past", 1001, 60),
  ],
  present: [
    ...baseGalleryImages.present,
    ...generateDummyImages("present", 2001, 60),
  ],
  future: [
    ...baseGalleryImages.future,
    ...generateDummyImages("future", 3001, 60),
  ],
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});
  // Decade filter removed: always show all images in one page

  // Shared data for both Masonry and Carousel (assign eras deterministically)
  const decadesList = useMemo(() => [
    "1960s",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "2020s",
  ], []);

  // Show exactly 45 images: 15 from each category for balance
  const allImages = useMemo(() => {
    const perCategory = 15;
    const categories = ["past", "present", "future"] as const;
    return categories.flatMap((cat) => galleryImages[cat].slice(0, perCategory));
  }, []);

  const imagesWithDecade = useMemo(
    () => allImages.map((img, idx) => ({ ...img, decade: decadesList[idx % decadesList.length] })),
    [allImages, decadesList]
  );

  // Carousel removed; no representatives needed



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
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
        stiffness: 120
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    }
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
        stiffness: 150
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };
  
  // Category button variants removed with UI

  return (
    <div className="min-h-screen bg-tesseract-light">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 px-8 bg-gradient-to-br from-tesseract-light via-tesseract-cream to-tesseract-sand overflow-hidden"
        >
          {/* Enhanced Floating Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-64 h-64 bg-tesseract-bronze/10 rounded-full blur-3xl top-10 left-1/4 animate-pulse"></div>
            <div className="absolute w-48 h-48 bg-tesseract-sand/15 rounded-full blur-2xl top-1/2 right-1/3 animate-pulse delay-1000"></div>
            <div className="absolute w-32 h-32 bg-tesseract-cream/20 rounded-full blur-xl bottom-1/4 left-1/2 animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.6 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-tesseract-bronze to-tesseract-dark rounded-2xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-10 h-10 text-tesseract-light" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl lg:text-8xl font-black text-tesseract-dark mb-6 tracking-tight drop-shadow-lg"
              style={{ 
                textShadow: '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(66,48,31,0.3)' 
              }}
            >
              GALLERY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl lg:text-2xl text-tesseract-dark font-semibold max-w-3xl mx-auto leading-relaxed mb-8"
              style={{ 
                textShadow: '1px 1px 2px rgba(255,255,255,0.9)' 
              }}
            >
              Witness the Evolution Through Technologies - From Heritage to Future Innovations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8"
            >
              {/* <Link href="/">
                <Button variant="outline" className="bg-tesseract-light/90 border-2 border-tesseract-bronze text-tesseract-dark hover:bg-tesseract-cream hover:border-tesseract-dark transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-3">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link> */}
            </motion.div>
          </div>
        </motion.section>

        {/* Category Selection removed: single-page gallery */}

        {/* Gallery Grid */}
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
                    {imagesWithDecade.map((image, index) => (
                      <motion.div
                        key={image.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                        className="mb-6 break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden border border-tesseract-sand/30 bg-white shadow-sm hover:shadow-xl transition-shadow"
                        onClick={() => setSelectedImage(image.id)}
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
                            style={{ opacity: loadingImages[image.id] ? 0.6 : 1 }}
                            onLoad={() => setLoadingImages(prev => ({ ...prev, [image.id]: false }))}
                            onLoadStart={() => setLoadingImages(prev => ({ ...prev, [image.id]: true }))}
                          />
                          {/* Caption overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity text-tesseract-light">
                            <div className="text-sm font-semibold line-clamp-1">{image.title}</div>
                            <div className="text-xs text-tesseract-cream/90 line-clamp-2">{image.description}</div>
                            <div className="mt-1 text-[10px] uppercase tracking-wide text-tesseract-cream/70">{(image as any).decade}</div>
                          </div>
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
                  const image = Object.values(galleryImages)
                    .flat()
                    .find(img => img.id === selectedImage);
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
        {/* Enhanced Statistics Section */}
        <section className="py-20 px-8 bg-gradient-to-br from-tesseract-cream/40 via-tesseract-sand/20 to-tesseract-bronze/10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h2 
              className="text-5xl font-black text-tesseract-dark mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Journey in Numbers
            </motion.h2>
            <motion.p 
              className="text-xl text-tesseract-bronze mb-16 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Discover the milestones that define our technological evolution
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ 
                { number: "500+", label: "Digital Memories", icon: Sparkles, color: "from-tesseract-bronze to-tesseract-dark" },
                { number: "50+", label: "Tech Milestones", icon: Clock, color: "from-tesseract-sand to-tesseract-bronze" },
                { number: "1000+", label: "Innovation Stories", icon: Cpu, color: "from-tesseract-cream to-tesseract-sand" },
                { number: "25+", label: "Years of Progress", icon: ArrowLeft, color: "from-tesseract-light to-tesseract-cream" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`relative p-8 bg-gradient-to-br ${stat.color} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-tesseract-sand/30 overflow-hidden group`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  
                  {/* Animated Icon Background */}
                  <motion.div 
                    className="absolute top-4 right-4 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <stat.icon className="w-16 h-16 text-tesseract-light" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-tesseract-light/90 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon className="w-8 h-8 text-tesseract-dark" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl lg:text-5xl font-black text-tesseract-light mb-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 300 }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-tesseract-light/90 font-semibold text-lg">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-tesseract-light/0 group-hover:bg-tesseract-light/10 rounded-3xl transition-all duration-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};
export default Gallery;
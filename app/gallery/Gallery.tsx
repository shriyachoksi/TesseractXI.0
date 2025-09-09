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
import { useState } from "react";
import { ArrowLeft, Clock, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";
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

const galleryCategories = [
  { 
    id: "past", 
    title: "Heritage & Foundations", 
    subtitle: "Glimpse of the Past",
    icon: Clock,
    color: "bg-gradient-to-br from-tesseract-bronze to-tesseract-dark",
    hoverColor: "bg-gradient-to-br from-tesseract-bronze/80 to-tesseract-dark/90",
    accent: "bg-tesseract-bronze"
  },
  { 
    id: "present", 
    title: "Innovation & Connectivity", 
    subtitle: "The Present",
    icon: Cpu,
    color: "bg-gradient-to-br from-tesseract-sand to-tesseract-bronze",
    hoverColor: "bg-gradient-to-br from-tesseract-sand/80 to-tesseract-bronze/90",
    accent: "bg-tesseract-sand"
  },
  { 
    id: "future", 
    title: "Visionary & Futuristic", 
    subtitle: "Beyond Reality",
    icon: Sparkles,
    color: "bg-gradient-to-br from-tesseract-cream to-tesseract-sand",
    hoverColor: "bg-gradient-to-br from-tesseract-cream/80 to-tesseract-sand/90",
    accent: "bg-tesseract-cream"
  }
];

const galleryImages = {
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

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("past");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});

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
  
  const categoryVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-tesseract-light">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 px-8 bg-gradient-to-br from-tesseract-light via-tesseract-cream/50 to-tesseract-sand/30 overflow-hidden"
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
              <Link href="/">
                <Button variant="outline" className="bg-tesseract-light/90 border-2 border-tesseract-bronze text-tesseract-dark hover:bg-tesseract-cream hover:border-tesseract-dark transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-3">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Category Selection */}
        <section className="py-16 px-8 bg-gradient-to-b from-tesseract-cream/30 to-tesseract-light">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-tesseract-dark text-center mb-12"
            >
              Explore by Era
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleryCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative p-8 rounded-3xl text-left overflow-hidden group transition-all duration-500 ${
                    selectedCategory === category.id
                      ? `${category.color} shadow-2xl transform scale-105 border-2 border-tesseract-dark/30`
                      : "bg-tesseract-cream hover:bg-tesseract-sand shadow-lg hover:shadow-xl border-2 border-tesseract-bronze/20 hover:border-tesseract-bronze/40"
                  }`}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                    animate={{
                      backgroundPosition: selectedCategory === category.id ? ['0px 0px', '20px 20px'] : '0px 0px'
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-2xl ${selectedCategory === category.id ? 'bg-tesseract-light/95 shadow-lg' : 'bg-tesseract-light/80 group-hover:bg-tesseract-light/95 group-hover:shadow-md'} mr-4 transition-all duration-300`}>
                        <category.icon className={`w-8 h-8 ${
                          selectedCategory === category.id ? "text-tesseract-dark" : "text-tesseract-bronze group-hover:text-tesseract-dark"
                        } transition-colors duration-300`} />
                      </div>
                      {selectedCategory === category.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-3 h-3 bg-tesseract-light rounded-full shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      selectedCategory === category.id ? "text-tesseract-light" : "text-tesseract-dark group-hover:text-tesseract-dark"
                    }`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      selectedCategory === category.id ? "text-tesseract-cream/95" : "text-tesseract-bronze group-hover:text-tesseract-dark/80"
                    }`}>
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Hover Effect Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${category.accent}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: selectedCategory === category.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-8 bg-gradient-to-b from-tesseract-light to-tesseract-cream/50">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-tesseract-dark text-center mb-12 capitalize"
            >
              {galleryCategories.find(cat => cat.id === selectedCategory)?.title} Collection
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages[selectedCategory as keyof typeof galleryImages].map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="relative h-80 bg-gradient-to-br from-tesseract-sand/20 to-tesseract-bronze/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-tesseract-sand/30">
                    {/* Loading State */}
                    {loadingImages[image.id] && (
                      <div className="absolute inset-0 bg-tesseract-cream/50 animate-pulse flex items-center justify-center">
                        <div className="w-10 h-10 border-3 border-tesseract-bronze rounded-full animate-spin border-t-transparent" />
                      </div>
                    )}
                    
                    {/* Actual Image */}
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      style={{ opacity: loadingImages[image.id] ? 0 : 1 }}
                      onLoad={() => setLoadingImages(prev => ({...prev, [image.id]: false}))}
                      onLoadStart={() => setLoadingImages(prev => ({...prev, [image.id]: true}))}
                    />

                    {/* Enhanced Overlay with better colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tesseract-dark/95 via-tesseract-bronze/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.h3 
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-tesseract-light font-bold text-xl mb-2 drop-shadow-lg"
                        >
                          {image.title}
                        </motion.h3>
                        <motion.p 
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-tesseract-cream text-sm drop-shadow-md"
                        >
                          {image.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-6 right-6 w-4 h-4 bg-tesseract-bronze rounded-full shadow-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />

                    {/* Type Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-tesseract-light/98 text-tesseract-dark text-xs font-bold rounded-full border border-tesseract-bronze/30 shadow-lg backdrop-blur-sm">
                        {image.type.toUpperCase()}
                      </span>
                    </div>

                    {/* Attractive Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-tesseract-bronze/0 via-tesseract-sand/0 to-tesseract-bronze/0 group-hover:from-tesseract-bronze/20 group-hover:via-tesseract-sand/15 group-hover:to-tesseract-bronze/20 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Enhanced Modal for Image Preview */}
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
                className="bg-gradient-to-br from-tesseract-light to-tesseract-cream rounded-3xl p-8 max-w-3xl w-full shadow-2xl relative border border-tesseract-sand/30"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Enhanced Close Button */}
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-tesseract-bronze/10 hover:bg-tesseract-bronze/20 text-tesseract-dark hover:text-tesseract-bronze rounded-full flex items-center justify-center text-xl font-bold focus:outline-none transition-all duration-200 border border-tesseract-sand/30"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close"
                >
                  ×
                </motion.button>
                
                {(() => {
                  const image = Object.values(galleryImages)
                    .flat()
                    .find(img => img.id === selectedImage);
                  return image ? (
                    <div className="text-center">
                      <motion.div 
                        className="h-96 rounded-2xl mb-8 overflow-hidden shadow-xl border border-tesseract-sand/30"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <img 
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                      
                      <motion.h2 
                        className="text-3xl font-bold text-tesseract-dark mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {image.title}
                      </motion.h2>
                      
                      <motion.p 
                        className="text-lg text-tesseract-bronze mb-8 max-w-md mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {image.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button
                          onClick={() => setSelectedImage(null)}
                          className="bg-gradient-to-r from-tesseract-bronze to-tesseract-dark text-tesseract-light hover:from-tesseract-dark hover:to-tesseract-bronze transition-all duration-300 px-8 py-3 rounded-2xl shadow-lg"
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
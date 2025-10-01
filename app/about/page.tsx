"use client";

import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/footer";
// import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect, FC } from "react";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

// --- Type Definitions ---
interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  images: string[];
}

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

interface YearCardProps {
  event: TimelineEvent;
  isReversed: boolean;
}

const YearCard: FC<YearCardProps> = ({ event, isReversed }) => {
  const [activeImage, setActiveImage] = useState<string>(event.images[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
      {/* Text Content - Order changes based on isReversed prop */}
      <div
        className={`flex flex-col justify-center text-center md:text-left ${
          isReversed ? "md:order-last" : ""
        }`}
      >
        <div>
          <p className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
            {event.year}
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold mb-5 text-slate-100 tracking-wide">
            {event.title}
          </h3>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed font-sans">
            {event.description}
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className={`${isReversed ? "md:order-first" : ""}`}>
        <div className="relative mb-4 group/image-gallery rounded-xl overflow-hidden border-2 border-slate-800 group-hover/image-gallery:border-blue-500/50 transition-all duration-300">
          <img
            src={activeImage}
            alt={`${event.title} main`}
            className="relative w-full h-64 md:h-80 object-cover transition-transform duration-500 ease-in-out group-hover/image-gallery:scale-110"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {event.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className={`rounded-lg overflow-hidden border-2 transition-all duration-200 transform hover:scale-105 hover:border-blue-500/50 ${
                activeImage === img
                  ? "border-blue-500 shadow-md shadow-blue-500/20"
                  : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-16 md:h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function AboutPage() {
  const techFestTimeline: TimelineEvent[] = [
    {
      year: 2025,
      title: "Quantum Frontiers",
      description:
        "Tesseract 2025 delves into the mind-bending world of quantum mechanics, exploring advancements in quantum computing, cryptography, and teleportation that are set to redefine the boundaries of technology.",
      images: [
        "/abt25/26.JPG",
        "/abt25/25.JPG",
        "/abt25/8.JPG",
        "/abt25/23.JPG",
      ],
    },
    {
      year: 2024,
      title: "The Future is Elemental",
      description:
        "Tesseract X's 2024 theme centers around the five fundamental elements—Earth, Fire, Air, Water, and Ether—emphasizing their significance in shaping the future of technology and innovation.",
      images: [
        "/about24/group.JPG",
        "/about24/shivamWalk.JPEG",
        "/about24/group2.PNG",
        "/about24/SKS_7504.JPG",
      ],
    },
    {
      year: 2023,
      title: "Amazing Tech-Verse",
      description:
        "The Extraordinary TechVerse: Tesseract 2023 embraces superheroes, science fiction, and the multiverse to make complex scientific concepts more relatable and accessible to a broader audience.",
      images: [
        "https://tesseract-x.vercel.app/static/media/23Ceremony.8fb8cdd7f69af273eb0e.JPG",
        "https://tesseract-x.vercel.app/static/media/53ClubActivity.3ed21ca4d8d75d994880.JPG",
        "https://tesseract-x.vercel.app/static/media/58ClubActivity.8c919bb8002c6e8c4200.JPG",
        "https://tesseract-x.vercel.app/static/media/98ClubActivity.f4c18c89dfa42c0eff00.JPG",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (index: number) => {
    const container = scrollContainerRef.current;
    if (container && container.children[index]) {
      const slideEl = container.children[index] as HTMLElement;
      const containerPadding = parseInt(
        window.getComputedStyle(container).paddingLeft
      );
      const scrollPosition = slideEl.offsetLeft - containerPadding;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setActiveIndex(parseInt(target.dataset.index || "0", 10));
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card-container");

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as EventListener);
      });
    };
  }, [techFestTimeline]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto:wght@400;500;700&display=swap');
        
        html {
          font-family: 'Orbitron', sans-serif;
        }

        .font-sans {
            font-family: 'Roboto', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .card-container {
            position: relative;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(8px);
            border: 1px solid #1e293b;
            border-radius: 1.25rem;
            padding: 2rem 3rem;
            transition: background 0.3s, border 0.3s;
            overflow: hidden;
        }

        .card-container::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 80%);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            z-index: 0;
        }

        .card-container:hover::before {
            opacity: 1;
        }

        .card-container > * {
            position: relative;
            z-index: 1;
        }
        
      `}</style>

      <main className="min-h-screen text-white bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 font-sans">
                <Calendar className="h-4 w-4 mr-2" />
                Our Journey
              </Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 tracking-wide"
                style={{ textShadow: "0 0 15px rgba(59, 130, 246, 0.4)" }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  TechFest Evolution
                </span>
              </h1>
              <p className="text-md text-slate-400 max-w-2xl mx-auto font-sans">
                A chronicle of our innovation, growth, and technological
                breakthroughs over the years.
              </p>
            </div>

            <div className="relative group">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4"
              >
                {techFestTimeline.map((event, idx) => (
                  <div
                    key={idx}
                    data-index={idx}
                    className="w-full flex-shrink-0 snap-center px-4 md:px-6"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="card-container">
                      <YearCard event={event} isReversed={idx % 2 !== 0} />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  handleNavClick(
                    (activeIndex - 1 + techFestTimeline.length) %
                      techFestTimeline.length
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-800/50 rounded-full hover:bg-blue-500/30 transition-all opacity-0 group-hover:opacity-100 md:block hidden -translate-x-6 group-hover:translate-x-0"
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() =>
                  handleNavClick((activeIndex + 1) % techFestTimeline.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-800/50 rounded-full hover:bg-blue-500/30 transition-all opacity-0 group-hover:opacity-100 md:block hidden translate-x-6 group-hover:translate-x-0"
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </button>

              <div className="flex justify-center gap-3 mt-12">
                {techFestTimeline.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-blue-500 w-8 animate-pulse"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                    style={{ animationDuration: "2s" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

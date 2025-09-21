"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Cloud, Brain, Cpu, Zap } from "lucide-react";

export function TechEvolution() {
  const [scrollX, setScrollX] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.left < window.innerWidth && rect.right > 0;
        if (isVisible) {
          const newVisible = new Set<number>();
          const progress = Math.max(
            0,
            Math.min(1, (window.innerWidth - rect.left) / window.innerWidth)
          );
          const itemsToShow = Math.floor(progress * techEras.length);
          for (let i = 0; i <= itemsToShow; i++) {
            newVisible.add(i);
          }
          setVisibleItems(newVisible);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techEras = [
    {
      year: "1990s",
      title: "Personal Computing Era",
      description:
        "Desktop computers revolutionized how we work and communicate",
      icon: <Monitor className="h-8 w-8" />,
      color: "neon-cyan",
      achievements: ["Windows 95", "Internet Explorer", "Email Communication"],
    },
    {
      year: "2000s",
      title: "Internet Revolution",
      description: "The world wide web connected humanity like never before",
      icon: <Zap className="h-8 w-8" />,
      color: "neon-purple",
      achievements: ["Social Media", "E-commerce", "Search Engines"],
    },
    {
      year: "2010s",
      title: "Mobile & Cloud Era",
      description: "Smartphones and cloud computing transformed daily life",
      icon: <Smartphone className="h-8 w-8" />,
      color: "neon-pink",
      achievements: ["iOS & Android", "Cloud Storage", "App Ecosystem"],
    },
    {
      year: "2015s",
      title: "Cloud Computing",
      description:
        "Infrastructure as a service changed how we build applications",
      icon: <Cloud className="h-8 w-8" />,
      color: "neon-green",
      achievements: ["AWS/Azure", "Microservices", "DevOps Culture"],
    },
    {
      year: "2020s",
      title: "AI & Machine Learning",
      description: "Artificial intelligence began reshaping every industry",
      icon: <Brain className="h-8 w-8" />,
      color: "neon-cyan",
      achievements: ["GPT Models", "Computer Vision", "Autonomous Systems"],
    },
    {
      year: "2025+",
      title: "Quantum & Beyond",
      description: "The next frontier of computing and human-AI collaboration",
      icon: <Cpu className="h-8 w-8" />,
      color: "neon-purple",
      achievements: [
        "Quantum Computing",
        "AGI Development",
        "Neural Interfaces",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-2rem bg-gradient-to-b from-dark-surface to-dark-bg relative overflow-x-auto overflow-y-hidden custom-scrollbar-hide"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      />
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
            `,
            transform: `translateX(${scrollX * 0.05}px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Badge className="mb-4 bg-black text-white border-grey/20 px-4 py-2">
            <Cpu className="h-4 w-4 mr-2" />
            Tech Evolution Timeline
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold leading-none m-0 p-0 -mt-10">
            <span className="bg-gradient-to-r bg-clip-text text-transparent">
              Journey Through Time
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-none m-0 p-0 -mt-1">
            Witness the incredible evolution of technology that brought us to
            today
          </p>
        </div>

        <div className="relative">
          {/* Continuous Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 z-0 bg-gradient-to-r from-blue-700/40 via-blue-400/30 to-blue-700/40 opacity-60 transform -translate-y-1/2" />

          <div className="flex flex-row space-x-16 overflow-x-auto pb-8 custom-scrollbar-hide pl-8 md:pl-16 lg:pl-32 pr-8 md:pr-16 lg:pr-32 relative z-10">
            {techEras.map((era, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 w-[340px] h-[370px] flex-shrink-0 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center justify-end h-full w-full">
                  {/* Timeline Node */}
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-${era.color} rounded-full border-4 border-dark-bg shadow-lg`}
                  >
                    <div
                      className={`absolute inset-0 bg-${era.color} rounded-full animate-ping opacity-20`}
                    />
                  </div>
                  <Card
                    className={`mt-8 w-full h-[300px] flex flex-col justify-between group transition-all duration-500
                      bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-gray-900/70
                      border border-blue-700/30
                      backdrop-blur-xl
                      shadow-[0_2px_24px_0_rgba(79,140,255,0.08)]
                      rounded-2xl
                      relative
                      hover:ring-4 hover:ring-blue-400/80 hover:scale-105
                    `}
                    style={{
                      boxShadow: "0 2px 24px 0 rgba(79,140,255,0.08)",
                      zIndex: visibleItems.has(index) ? 2 : 1,
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`text-${era.color} group-hover:animate-pulse`}
                      >
                        {era.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge
                            className={`bg-${era.color}/10 text-${era.color} border-${era.color}/20`}
                          >
                            {era.year}
                          </Badge>
                        </div>
                        <h3
                          className="text-2xl font-bold mb-2 text-white tracking-wide"
                          style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                          {era.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {era.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {era.achievements.map((achievement, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs bg-blue-900/40 border-blue-700/40 text-blue-200 px-3 py-1 rounded-md"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Blue glow highlight only on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_32px_8px_rgba(79,140,255,0.18)]" />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

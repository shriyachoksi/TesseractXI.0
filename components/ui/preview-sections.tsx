"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, ImageIcon, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function PreviewSections() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "Meet Our Team",
      description: "Brilliant minds shaping the future of technology",
      icon: <Users className="h-8 w-8" />,
      color: "neon-cyan",
      href: "/team",
      preview: "20+ Tech Innovators",
      stats: "Leading experts from top tech companies",
    },
    {
      title: "Event Gallery",
      description: "Moments that defined our tech journey",
      icon: <ImageIcon className="h-8 w-8" />,
      color: "neon-purple",
      href: "/gallery",
      preview: "1000+ Memories",
      stats: "Capturing innovation in action",
    },
    {
      title: "Upcoming Events",
      description: "Next-gen experiences waiting for you",
      icon: <Calendar className="h-8 w-8" />,
      color: "neon-pink",
      href: "/events",
      preview: "30+ Events",
      stats: "Workshops, hackathons, and tech talks",
    },
    // {
    //   title: "Our Sponsors",
    //   description: "Partners powering the future",
    //   icon: <Award className="h-8 w-8" />,
    //   color: "neon-green",
    //   href: "#sponsors",
    //   preview: "25+ Partners",
    //   stats: "Industry leaders supporting innovation",
    // },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-blue-950/20 to-background">
      {" "}
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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-neon-cyan border-neon-cyan/20 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Explore Tesseract XI.0
          </Badge>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Get a glimpse into the different facets of our tech ecosystem
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group relative p-6 bg-card/30 backdrop-blur-md border-border/50 hover:border-blue-400/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(79,140,255,0.25)] overflow-hidden w-full max-w-[320px] md:max-w-[340px]"
              style={{
                transform: `translateY(${
                  Math.sin((scrollY + index * 100) * 0.001) * 10
                }px)`,
              }}
            >
              {/* Gradient border glow */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${section.color}/20 via-blue-500/10 to-transparent`}
              />

              <div className="relative z-10">
                <div
                  className={`text-${section.color} mb-4 group-hover:animate-pulse`}
                >
                  {section.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground tracking-wide">
                  {section.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {section.description}
                </p>

                <div className="flex items-center justify-between gap-3 mb-6">
                  <div
                    className={`text-2xl md:text-3xl font-bold text-${section.color}`}
                  >
                    {section.preview}
                  </div>
                  <div className="text-xs text-muted-foreground text-right leading-snug max-w-[58%]">
                    {section.stats}
                  </div>
                </div>

                <Link href={section.href} className="block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full rounded-lg bg-transparent hover:bg-${section.color}/10 hover:text-${section.color} border border-transparent hover:border-${section.color}/30 transition-all duration-300`}
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

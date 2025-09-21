"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  ImageIcon,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
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
      preview: "50+ Tech Innovators",
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
      preview: "15+ Events",
      stats: "Workshops, hackathons, and tech talks",
    },
    {
      title: "Our Sponsors",
      description: "Partners powering the future",
      icon: <Award className="h-8 w-8" />,
      color: "neon-green",
      href: "#sponsors",
      preview: "25+ Partners",
      stats: "Industry leaders supporting innovation",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-tesseract-light/60 via-tesseract-cream/40 to-tesseract-sand/60 relative overflow-hidden">
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
          <Badge className="mb-4 bg-black/10 text-neon-cyan border-neon-cyan/20 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Explore Tesseract XI.0
          </Badge>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Get a glimpse into the different facets of our tech ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group relative p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-cyan/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{
                transform: `translateY(${
                  Math.sin((scrollY + index * 100) * 0.001) * 10
                }px)`,
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${section.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`text-${section.color} mb-4 group-hover:animate-pulse`}
                >
                  {section.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                  {section.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className={`text-2xl font-bold text-${section.color}`}>
                    {section.preview}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {section.stats}
                  </div>
                </div>

                <Link href={section.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full group-hover:bg-${section.color}/10 group-hover:text-${section.color} transition-all duration-300`}
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

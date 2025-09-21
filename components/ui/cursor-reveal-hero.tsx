"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CursorRevealHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [revealedText, setRevealedText] = useState<Set<number>>(new Set());
  const [particles, setParticles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const mainText = "TESSERACT XI.0 2025";
  const subText = "WHERE INNOVATION MEETS REALITY";

  // Generate particles only once on client
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 2}s`,
      }))
    );
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !textRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - heroRect.left;
      const y = e.clientY - heroRect.top;
      setMousePosition({ x, y });

      const textRect = textRef.current.getBoundingClientRect();
      const relativeX = e.clientX - heroRect.left;
      const relativeY = e.clientY - heroRect.top;

      // functional state update avoids needing revealedText in deps
      setRevealedText((prev) => {
        const newRevealed = new Set(prev);

        for (let i = 0; i < mainText.length + subText.length; i++) {
          const charIndex = i < mainText.length ? i : i - mainText.length;
          const isMainText = i < mainText.length;
          const charX =
            textRect.left - heroRect.left + charIndex * (isMainText ? 40 : 25);
          const charY = textRect.top - heroRect.top + (isMainText ? 0 : 80);

          const distance = Math.hypot(relativeX - charX, relativeY - charY);
          if (distance < 100) newRevealed.add(i);
        }

        return newRevealed;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mainText.length, subText.length]); // ✅ removed revealedText

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Cursor glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Hero text */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <span className="inline-block px-6 py-3 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-sm font-medium mb-8 backdrop-blur-sm">
          🚀 Drag your cursor to reveal the future
        </span>

        <h1
          ref={textRef}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-mono"
        >
          <div className="mb-4">
            {mainText.split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ${
                  revealedText.has(i)
                    ? "text-neon-cyan opacity-100 scale-100 neon-glow"
                    : "text-transparent opacity-0 scale-95"
                }`}
                style={{
                  textShadow: revealedText.has(i)
                    ? "0 0 20px rgba(0,255,255,0.8)"
                    : "none",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          <div className="text-4xl md:text-5xl">
            {subText.split("").map((char, i) => {
              const globalIndex = mainText.length + i;
              return (
                <span
                  key={globalIndex}
                  className={`inline-block transition-all duration-500 ${
                    revealedText.has(globalIndex)
                      ? "text-neon-pink opacity-100 scale-100"
                      : "text-transparent opacity-0 scale-95"
                  }`}
                  style={{
                    textShadow: revealedText.has(globalIndex)
                      ? "0 0 15px rgba(236,72,153,0.8)"
                      : "none",
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </div>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed opacity-80">
          Experience the ultimate tech fest where cutting-edge innovation meets
          boundless creativity
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg hover:from-neon-purple hover:to-neon-cyan transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-neon-cyan/25"
          >
            Enter the Future <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-10 py-4 text-lg bg-transparent rounded-full backdrop-blur-sm"
          >
            Explore Events
          </Button>
        </div>
      </div>
    </section>
  );
}

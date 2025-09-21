"use client";
import { useState, useEffect } from "react";

interface TesseractCubeProps {
  isHovered: boolean;
}

export const TesseractCube = ({ isHovered }: TesseractCubeProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96 perspective-1000">
      {/* Outer Cube */}
      <div
        className={`absolute inset-0 transition-all duration-1000 transform-gpu ${
          isHovered ? "scale-110 rotate-12" : "scale-100"
        } animate-float`}
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${
            mousePosition.x
          }deg) ${isHovered ? "scale(1.1) rotateZ(12deg)" : "scale(1)"}`,
        }}
      >
        {/* Main Cube Frame */}
        <div className="relative w-full h-full">
          {/* Cube Faces */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-full border-2 transition-all duration-700 ${
                isHovered
                  ? "border-neon-blue shadow-[0_0_20px_theme(colors.neon-blue)]"
                  : "border-electric-blue/50"
              }`}
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(120px)`,
                backgroundColor: isHovered
                  ? "hsl(var(--electric-blue) / 0.1)"
                  : "transparent",
              }}
            />
          ))}

          {/* Inner Tesseract Elements */}
          <div
            className={`absolute inset-8 transition-all duration-1000 ${
              isHovered ? "animate-rotate-3d" : ""
            }`}
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={`inner-${i}`}
                className={`absolute w-full h-full border transition-all duration-700 ${
                  isHovered
                    ? "border-electric-blue animate-glow-pulse"
                    : "border-electric-blue/30"
                }`}
                style={{
                  transform: `rotateX(${i * 45}deg) rotateY(${
                    i * 45
                  }deg) scale(${0.8 - i * 0.1})`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8">
            <div
              className={`w-full h-full rounded-full transition-all duration-700 ${
                isHovered
                  ? "bg-gradient-to-r from-electric-blue to-neon-blue animate-glow-pulse scale-150"
                  : "bg-electric-blue/50 scale-100"
              }`}
            />
          </div>

          {/* Floating Particles */}
          {isHovered &&
            [...Array(8)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-electric-blue rounded-full animate-particle-float"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${20 + i * 10}%`,
                  animationDelay: `${i * 0.3}s`,
                  boxShadow: "0 0 10px currentColor",
                }}
              />
            ))}
        </div>
      </div>

      {/* Background Glow Effect */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isHovered ? "opacity-100 scale-150" : "opacity-50 scale-100"
        }`}
        style={{
          background:
            "radial-gradient(circle, hsl(var(--electric-blue) / 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Interactive Info Panels */}
      {isHovered && (
        <>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-electric-blue/20 backdrop-blur-sm rounded-lg border border-electric-blue/50 animate-reveal-up">
            <span className="text-sm font-medium text-foreground">
              4D Technology
            </span>
          </div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-electric-blue/20 backdrop-blur-sm rounded-lg border border-electric-blue/50 animate-reveal-up">
            <span className="text-sm font-medium text-foreground">
              Innovation Cube
            </span>
          </div>
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 px-4 py-2 bg-electric-blue/20 backdrop-blur-sm rounded-lg border border-electric-blue/50 animate-reveal-up">
            <span className="text-sm font-medium text-foreground">XI.0</span>
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 px-4 py-2 bg-electric-blue/20 backdrop-blur-sm rounded-lg border border-electric-blue/50 animate-reveal-up">
            <span className="text-sm font-medium text-foreground">
              Tesseract
            </span>
          </div>
        </>
      )}
    </div>
  );
};

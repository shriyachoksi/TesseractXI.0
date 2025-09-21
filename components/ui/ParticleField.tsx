import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

export const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate initial particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
    }));

    setParticles(initialParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.velocityX;
          let newY = particle.y + particle.velocityY;

          // Wrap around screen edges
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-electric-blue rounded-full animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: "0 0 10px currentColor",
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--electric-blue)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--electric-blue)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

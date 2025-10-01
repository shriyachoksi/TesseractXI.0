"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
};

const InteractiveHero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const router = useRouter();
  const subheadingFull = "Where Technology Meets Creativity";
  const [typedSubheading, setTypedSubheading] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const boundsRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const mouseRef = useRef<{ x: number; y: number; inside: boolean }>({
    x: 0,
    y: 0,
    inside: false,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      setMouse({ x, y });
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Countdown timer to Oct 10-12, 2025
  useEffect(() => {
    const start = new Date(Date.UTC(2025, 9, 10, 0, 0, 0)).getTime();
    const end = new Date(Date.UTC(2025, 9, 13, 0, 0, 0)).getTime(); // exclusive end
    const tick = () => {
      const now = Date.now();
      let target = start;
      if (now >= start && now < end) {
        target = end;
      }
      const ms = Math.max(0, target - now);
      const days = Math.floor(ms / (24 * 60 * 60 * 1000));
      const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((ms % (60 * 1000)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad2 = (n: number) => n.toString().padStart(2, "0");

  // Type-in effect for subheading
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTypedSubheading(subheadingFull.slice(0, i));
      if (i >= subheadingFull.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);

  // Build particle field from logo image
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      boundsRef.current = { w: rect.width, h: rect.height };
      // Rebuild particles on resize
      buildParticles();
    };

    const buildParticles = async () => {
      const { w, h } = boundsRef.current;
      if (w === 0 || h === 0) return;
      const off = document.createElement("canvas");
      const octx = off.getContext("2d");
      if (!octx) return;
      // Make the logo the main element: larger relative size
      const targetW = Math.min(1000, Math.floor(w * 0.78));
      const targetH = Math.min(1000, Math.floor(h * 0.78));
      off.width = targetW;
      off.height = targetH;
      const img = new Image();
      img.src = "/logo/tess_white.png";
      await img.decode().catch(() => {});
      const ratio = Math.min(targetW / img.width, targetH / img.height);
      const drawW = Math.floor(img.width * ratio);
      const drawH = Math.floor(img.height * ratio);
      const dx = Math.floor((targetW - drawW) / 2);
      const dy = Math.floor((targetH - drawH) / 2);
      octx.clearRect(0, 0, targetW, targetH);
      octx.drawImage(img, dx, dy, drawW, drawH);
      const data = octx.getImageData(0, 0, targetW, targetH).data;

      const points: { x: number; y: number; a: number }[] = [];
      // Increase particle density for larger display (adaptive step)
      const step = Math.max(3, Math.floor(Math.min(targetW, targetH) / 160));
      const textExclusionStartY = Math.floor(targetH * 0.7); // exclude bottom area where image text sits
      for (let y = 0; y < targetH; y += step) {
        for (let x = 0; x < targetW; x += step) {
          const idx = (y * targetW + x) * 4;
          const a = data[idx + 3];
          if (y < textExclusionStartY && a > 200) points.push({ x, y, a });
        }
      }

      const centerX = w / 2;
      const centerY = h / 2;
      const offsetX = centerX - targetW / 2;
      // Lift the cube so it sits above the heading for better prominence
      const lift = Math.min(160, Math.max(60, Math.floor(h * 0.12)));
      const offsetY = centerY - targetH / 2 - lift;

      const particles: Particle[] = points.map((p) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        originX: offsetX + p.x,
        originY: offsetY + p.y,
        vx: 0,
        vy: 0,
        size: 1.8 + Math.random() * 1.4,
        hue: 210 + Math.random() * 30,
      }));

      particlesRef.current = particles;
    };

    const animate = () => {
      const { w, h } = boundsRef.current;
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;
      const m = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Spring back to origin
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;
        p.vx += dx * 0.02;
        p.vy += dy * 0.02;

        // Mouse repulsion
        const mdx = p.x - m.x;
        const mdy = p.y - m.y;
        const dist2 = mdx * mdx + mdy * mdy;
        const radius = hovering ? 160 : 110;
        if (dist2 < radius * radius) {
          const force = (radius * radius - dist2) / (radius * radius);
          const len = Math.sqrt(dist2) || 1;
          p.vx += (mdx / len) * (4.2 * force);
          p.vy += (mdy / len) * (4.2 * force);
        }

        // Damping
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;

        // Draw
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.9)`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soft connecting lines for cohesion
      for (let i = 0; i < particles.length; i += 6) {
        const a = particles[i];
        for (let j = i + 1; j < Math.min(i + 24, particles.length); j += 6) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 22) {
            ctx.strokeStyle = `rgba(79, 140, 255, ${1 - d / 22})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovering]);

  const spotlightStyle = () => {
    const size = hovering ? 420 : 260;
    return {
      left: mouse.x - size / 2,
      top: mouse.y - size / 2,
      width: size,
      height: size,
      background:
        "radial-gradient(circle at center, rgba(79,140,255,0.25) 0%, rgba(59,91,219,0.18) 40%, rgba(0,0,0,0) 70%)",
      filter: "blur(24px)",
    } as React.CSSProperties;
  };

  const parallax = (mult: number) => {
    if (!sectionRef.current) return { transform: "translate3d(0,0,0)" };
    const r = sectionRef.current.getBoundingClientRect();
    const tx = clamp(((mouse.x - r.width / 2) / r.width) * mult, -12, 12);
    const ty = clamp(((mouse.y - r.height / 2) / r.height) * mult, -12, 12);
    return {
      transform: `translate3d(${tx}px, ${ty}px, 0)`,
    } as React.CSSProperties;
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-gray-900"
    >
      {/* Canvas particle logo */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,140,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,140,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            animation: "grid-move 24s linear infinite",
          }}
        />
      </div>

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute rounded-full transition-all duration-300"
        style={spotlightStyle()}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center gap-5 md:gap-7 mt-[28vh] md:mt-[32vh]">
          <h1
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-white will-change-transform drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
            style={parallax(10)}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">
              Tesseract XI
            </span>
          </h1>

          <p
            className="max-w-3xl text-xl md:text-2xl text-blue-100/95 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] font-semibold tracking-widest"
            style={{
              ...parallax(6),
              fontFamily:
                'var(--font-orbitron), "Segoe UI", system-ui, -apple-system, sans-serif',
            }}
          >
            <span aria-label={subheadingFull}>{typedSubheading}</span>
            <span className="ml-1 text-blue-300/80 animate-pulse">|</span>
          </p>

          {/* Countdown - fancy segmented display */}
          <div
            className="flex items-end gap-3 md:gap-4 px-4 py-3 rounded-2xl bg-blue-500/10 border border-blue-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(79,140,255,0.25)]"
            style={parallax(5)}
          >
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map((seg, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400/40 to-blue-300/30 blur-md" />
                  <div className="relative rounded-xl bg-blue-950/40 border border-blue-400/40 px-4 py-3 md:px-6 md:py-4">
                    <span className="font-bold text-2xl md:text-4xl text-blue-100 tracking-widest tabular-nums">
                      {pad2(seg.value)}
                    </span>
                  </div>
                </div>
                <span className="mt-2 text-[10px] md:text-xs uppercase tracking-wider text-blue-300/90">
                  {seg.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4" style={parallax(4)}>
            <Button
              className="bg-blue-500/90 hover:bg-blue-500 text-white px-10 py-7 rounded-2xl text-lg transition-transform will-change-transform hover:-translate-y-0.5"
              onClick={() => router.push("/about")}
              type="button"
            >
              About Us
            </Button>
            <Button
              variant="outline"
              className="border-blue-400/40 text-blue-300 hover:bg-blue-500/10 px-10 py-7 rounded-2xl text-lg transition-transform will-change-transform hover:-translate-y-0.5"
              onClick={() => router.push("/events")}
              type="button"
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>

      {/* Corners glow and bottom blend */}
      <div className="pointer-events-none absolute -top-12 -left-12 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default InteractiveHero;

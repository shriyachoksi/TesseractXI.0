"use client";

import React, { useState, useEffect, useRef } from "react";

const logoFiles = [
  "/logo1/aatmann.png.png",
  "/logo1/anirveda png.png",
  "/logo1/Avionics.png",
  "/logo1/Brahmand Logo - White PNG.png",
  "/logo1/bulls&b.png",
  "/logo1/Cretus.png",
  "/logo1/encode.png",
  "/logo1/enviro white new.png",
  "/logo1/Mind~Ripple.png",
  "/logo1/Nucleus.png",
  "/logo1/S&T.png",
  "/logo1/SoM logo (Black text).png",
  "/logo1/Sorriso (2).png",
  "/logo1/SYMMETRY NEW WHITELOGO1.4.2.png",
  "/logo1/Synergy.png",
  "/logo1/tir.png",
  "/logo1/Vga-logo.png",
  "/logo1/tess_white.png",
];

export default function LoadingScreen() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const logoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setProgress(
      Math.min(
        100,
        Math.round(((currentLogoIndex + 1) / logoFiles.length) * 100)
      )
    );
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    logoIntervalRef.current = setInterval(() => {
      setCurrentLogoIndex((prev) => {
        // Stop at last logo
        if (prev === logoFiles.length - 1) {
          setProgress(100);
          setIsLoading(false);
          if (logoIntervalRef.current) {
            clearInterval(logoIntervalRef.current);
            logoIntervalRef.current = null;
          }
          return prev;
        }
        const nextIndex = prev + 1;
        const pct = Math.min(
          100,
          Math.round(((nextIndex + 1) / logoFiles.length) * 100)
        );
        setProgress(pct);
        return nextIndex;
      });
    }, 240);

    return () => {
      if (logoIntervalRef.current) {
        clearInterval(logoIntervalRef.current);
        logoIntervalRef.current = null;
      }
    };
  }, [isLoading]);

  const currentLogo = logoFiles[currentLogoIndex];

  return (
    <div
      className="bg-black text-white flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Mobile view: only logo + % */}
      <div className="block md:hidden relative w-full h-full min-h-screen flex items-center justify-center">
        <img
          src={currentLogo}
          alt={currentLogo.replace(/\.[^.]+$/, "")}
          className="w-40 h-40 object-contain drop-shadow-[0_2px_12px_rgba(0,255,255,0.15)]"
          loading="eager"
        />
        <span className="absolute bottom-3 right-3 text-white text-sm font-mono">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Camera body */}
      <div
        className="relative w-full max-w-[920px] aspect-[1.65] bg-[#1d1d1f] rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] font-sans"
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgba(255,255,255,0.03), transparent 40%), radial-gradient(1200px_400px at 30% -50%, rgba(255,255,255,0.04), transparent)",
        }}
      >
        {/* Top hump with eyepiece and hot shoe */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-64 h-16 rounded-b-2xl bg-[#1a1a1c] border-b border-black/60 shadow-[0_12px_30px_rgba(0,0,0,0.6)]"></div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-10 rounded-md bg-[#0a0a0b] border border-gray-700 shadow-inner flex items-center justify-center overflow-hidden">
          <div className="relative w-24 h-7 rounded-sm bg-gradient-to-b from-[#1f2430] to-[#0e0e12] border border-black/60 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(18px 10px at 60% 50%, rgba(168,85,247,.55), transparent 60%), radial-gradient(30px 16px at 40% 40%, rgba(99,102,241,.6), transparent 60%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#101012] border-x border-t border-gray-700 rounded-t-[3px]"></div>

        {/* Right-hand grip */}
        <div
          className="absolute right-0 top-8 h-[78%] w-28 bg-gradient-to-l from-[#0f0f11] via-[#121214] to-[#1a1a1c] rounded-l-[36px] shadow-[inset_-6px_0_10px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0 1px, transparent 2px)",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <div className="absolute right-6 -top-2 w-16 h-10 bg-[#202024] rounded-b-2xl shadow-[0_8px_18px_rgba(0,0,0,0.6)]"></div>
        <div className="absolute right-10 -top-1 w-9 h-9 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 shadow-[0_6px_18px_rgba(0,0,0,0.6)] border border-black/40"></div>

        {/* Strap lugs */}
        <div className="absolute -left-2 top-16 w-4 h-8 rounded-full bg-[#101012] border border-black/60"></div>
        <div className="absolute -right-2 top-20 w-4 h-8 rounded-full bg-[#101012] border border-black/60"></div>

        {/* Decorative screws */}
        <div className="absolute left-4 top-4 w-2.5 h-2.5 rounded-full bg-[#0f0f10] border border-gray-700 shadow-inner"></div>
        <div className="absolute right-4 top-4 w-2.5 h-2.5 rounded-full bg-[#0f0f10] border border-gray-700 shadow-inner"></div>
        <div className="absolute left-4 bottom-4 w-2.5 h-2.5 rounded-full bg-[#0f0f10] border border-gray-700 shadow-inner"></div>
        <div className="absolute right-4 bottom-4 w-2.5 h-2.5 rounded-full bg-[#0f0f10] border border-gray-700 shadow-inner"></div>

        {/* Layout: left button column – LCD – right controls */}
        <div className="absolute inset-0 px-5 sm:px-6 md:px-8 lg:px-10 pt-8 pb-10 flex items-stretch gap-3 sm:gap-4">
          {/* Left buttons */}
          <div className="w-12 flex flex-col items-center pt-6 gap-3">
            <button className="w-10 h-8 rounded-md bg-[#202024] border border-black/60 shadow-[0_4px_8px_rgba(0,0,0,0.6)] text-[10px] tracking-wide text-gray-200 hover:bg-[#26262b]">
              MENU
            </button>
            <button className="w-10 h-8 rounded-md bg-[#202024] border border-black/60 shadow-[0_4px_8px_rgba(0,0,0,0.6)] text-[10px] tracking-wide text-gray-200 hover:bg-[#26262b]">
              INFO
            </button>
            <button
              className="w-10 h-10 rounded-lg bg-[#1f1f22] border border-black/60 shadow-[0_4px_10px_rgba(0,0,0,0.6)] text-gray-300 hover:bg-[#26262b] flex items-center justify-center"
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#1f1f22] border border-black/60 shadow-[0_4px_10px_rgba(0,0,0,0.6)] text-gray-300 hover:bg-[#26262b] flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12l6 4V8z" />
              </svg>
            </button>
          </div>

          {/* LCD with bezel and hinge */}
          <div className="relative flex-1 rounded-xl bg-[#0e0f11] border-2 border-black/70 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.02),0_0_0_6px_#0a0a0b] overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-40 rounded-r bg-[#111113] border-r border-black/60 shadow-[inset_-2px_0_6px_rgba(0,0,0,0.7)]"></div>
            <div className="absolute inset-1 rounded-lg bg-[#050506] border border-gray-800"></div>
            {/* Active screen */}
            <div className="absolute inset-3 rounded-lg bg-gray-950 border-4 border-green-500 shadow-[0_0_24px_rgba(34,197,94,0.35)] overflow-hidden flex flex-col items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-white/5 opacity-50 z-0 animate-pulse-slow"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), repeating-linear-gradient(0deg, rgba(0,255,0,0.1), rgba(0,255,0,0.1) 1px, transparent 1px, transparent 5px)",
                }}
              ></div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

              <div className="absolute top-4 left-4 flex items-center gap-1">
                <svg
                  className="w-2 h-2 text-red-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="12" />
                </svg>
                <span className="text-gray-300/80 text-[10px] font-mono">
                  REC
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                <img
                  src={currentLogo}
                  alt={currentLogo.replace(/\.[^.]+$/, "")}
                  className="w-64 h-64 object-contain mb-4 drop-shadow-[0_2px_12px_rgba(0,255,255,0.15)]"
                  loading="eager"
                />
              </div>

              <span className="absolute bottom-3 right-3 text-white text-[10px] font-mono">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Right controls */}
          <div className="w-36 flex flex-col items-center justify-between py-6">
            <div className="w-full flex items-center justify-start gap-3 px-2">
              <div className="grid grid-cols-3 gap-[3px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-black/70 border border-gray-700 block"
                  ></span>
                ))}
              </div>
              <button className="px-2 h-7 rounded-md bg-[#1f1f22] border border-black/60 text-[10px] text-gray-200 shadow">
                Q
              </button>
            </div>

            <div className="relative w-28 h-28 rounded-full bg-[#202024] border-[3px] border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#131316] border-2 border-[#0c0c0e] shadow-inner"></div>
              <div className="absolute flex flex-col items-center justify-center w-full h-full">
                <button className="absolute top-0 -mt-3 w-10 h-10 rounded-full bg-[#1f1f22] border border-black/60 hover:bg-[#2a2a2f] transition flex items-center justify-center text-[10px] text-gray-200">
                  Av
                </button>
                <button className="absolute bottom-0 -mb-3 w-10 h-10 rounded-full bg-[#1f1f22] border border-black/60 hover:bg-[#2a2a2f] transition flex items-center justify-center text-[10px] text-gray-200">
                  WB
                </button>
                <button className="absolute left-0 -ml-3 w-10 h-10 rounded-full bg-[#1f1f22] border border-black/60 hover:bg-[#2a2a2f] transition flex items-center justify-center text-[10px] text-gray-200">
                  AF
                </button>
                <button className="absolute right-0 -mr-3 w-10 h-10 rounded-full bg-[#1f1f22] border border-black/60 hover:bg-[#2a2a2f] transition flex items-center justify-center text-[10px] text-gray-200">
                  DRIVE
                </button>
              </div>
              <div className="absolute w-12 h-12 rounded-full bg-[#3a3a40] border-2 border-gray-600 flex items-center justify-center">
                <span className="text-gray-200 text-[10px] font-bold">SET</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between px-4">
              <button className="w-8 h-8 rounded-full bg-[#1f1f22] border border-black/60 shadow-[0_4px_10px_rgba(0,0,0,0.6)] flex items-center justify-center text-gray-300">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-[#1f1f22] border border-black/60 shadow-[0_4px_10px_rgba(0,0,0,0.6)] flex items-center justify-center text-gray-300">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 7h12l-1 13H7L6 7zm3-3h6l1 2H8l1-2z" />
                </svg>
              </button>
            </div>

            <div className="absolute right-2 top-[52%] w-8 h-8 rounded-full bg-[#2a2a2e] border border-black/60 shadow-inner"></div>
          </div>
        </div>

        {/* Branding */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-300/80 text-xs select-none">
          <span className="font-bold">Canon</span>
        </div>
        <div className="absolute bottom-3 right-4 text-gray-400 text-[10px] tracking-wider select-none">
          EOS 3000D
        </div>
      </div>
    </div>
  );
}

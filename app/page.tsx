"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/app/components/navbar";
import { CursorRevealHero } from "@/components/ui/cursor-reveal-hero";
import { PreviewSections } from "@/components/ui/preview-sections";
// import { TechEvolution } from "@/components/ui/tech-evolution";
import { Footer } from "@/components/ui/footer";
import { TeamGlimpse } from "@/components/ui/team-glimpse";
import LoadingScreen from "@/components/ui/loading-screen";
import SponsorsSection from "@/components/ui/sponserSection";
import GalleryPreview from "@/components/ui/GalleryPreview";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // 8 seconds to show the full loading experience

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <CursorRevealHero />
        <PreviewSections />
        <GalleryPreview />
        {/* <TechEvolution /> */}
        <TeamGlimpse />
        <SponsorsSection />

        <Footer />
      </div>
    </main>
  );
}

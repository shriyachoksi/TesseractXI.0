import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TesseractCube } from "@/components/ui/TesseractCube";
import { ParticleField } from "@/components/ui/ParticleField";
import { Calendar, MapPin, Users, Zap } from "lucide-react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-deep-space via-cosmic-blue to-deep-space">
      {/* Particle Background */}
      <ParticleField />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Event Badge */}
              <div
                className="inline-flex items-center px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 backdrop-blur-sm animate-glow-pulse cursor-pointer transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Zap className="w-4 h-4 mr-2 text-electric-blue" />
                <span className="text-sm font-medium text-foreground">
                  {isHovered ? "4D Innovation Unleashed" : "Tech Fest 2024"}
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold leading-none">
                  <span className="bg-gradient-to-r from-foreground via-electric-blue to-neon-blue bg-clip-text text-transparent animate-reveal-up">
                    TESSERACT
                  </span>
                  <br />
                  <span
                    className="text-electric-blue animate-reveal-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    XI.0
                  </span>
                </h1>

                <p
                  className="text-xl lg:text-2xl text-muted-foreground max-w-2xl animate-reveal-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  Where technology meet creativity
                </p>
              </div>

              {/* Event Details - Revealed on Hover */}
              <div
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 transform ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-60 translate-y-4"
                }`}
              >
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <Calendar className="w-6 h-6 text-electric-blue" />
                  <span className="text-sm text-muted-foreground">
                    March 15-17
                  </span>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <MapPin className="w-6 h-6 text-electric-blue" />
                  <span className="text-sm text-muted-foreground">
                    Tech Campus
                  </span>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <Users className="w-6 h-6 text-electric-blue" />
                  <span className="text-sm text-muted-foreground">
                    500+ Participants
                  </span>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <Zap className="w-6 h-6 text-electric-blue" />
                  <span className="text-sm text-muted-foreground">
                    24 Hours
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-reveal-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-electric-blue to-neon-blue hover:from-neon-blue hover:to-electric-blue text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/25"
                >
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-electric-blue/50 text-foreground hover:bg-electric-blue/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Events
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Tesseract */}
            <div className="flex justify-center lg:justify-end">
              <TesseractCube isHovered={isHovered} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default HeroSection;

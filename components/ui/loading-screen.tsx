"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Cpu,
  Satellite,
  Globe,
  CircuitBoard,
  Monitor,
  Apple,
  Laptop,
  Wifi,
  Code,
  Search,
  Music,
  Users,
  Video,
  Smartphone,
  Shield,
  Tablet,
  Cloud,
  Camera,
  Headphones,
  Car,
  Brain,
  Zap,
  Home,
  Image,
  MessageSquare,
  Atom,
  Rocket,
} from "lucide-react";

interface TechMilestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  category: string;
}

const techMilestones: TechMilestone[] = [
  {
    year: "1946",
    title: "ENIAC Computer",
    description: "First general-purpose electronic computer",
    icon: Cpu,
    color: "neon-blue",
    category: "Computing",
  },
  {
    year: "1957",
    title: "Sputnik Launch",
    description: "First artificial satellite in space",
    icon: Satellite,
    color: "neon-purple",
    category: "Space",
  },
  {
    year: "1969",
    title: "ARPANET",
    description: "Precursor to the modern Internet",
    icon: Globe,
    color: "neon-green",
    category: "Networking",
  },
  {
    year: "1971",
    title: "Microprocessor",
    description: "Intel 4004 - first commercial microprocessor",
    icon: CircuitBoard,
    color: "neon-orange",
    category: "Computing",
  },
  {
    year: "1975",
    title: "Personal Computer",
    description: "Altair 8800 - first personal computer",
    icon: Monitor,
    color: "neon-blue",
    category: "Computing",
  },
  {
    year: "1976",
    title: "Apple I",
    description: "First Apple computer",
    icon: Apple,
    color: "neon-green",
    category: "Computing",
  },
  {
    year: "1981",
    title: "IBM PC",
    description: "First IBM personal computer",
    icon: Laptop,
    color: "neon-purple",
    category: "Computing",
  },
  {
    year: "1983",
    title: "ARPANET TCP/IP",
    description: "Internet protocol suite adoption",
    icon: Wifi,
    color: "neon-blue",
    category: "Networking",
  },
  {
    year: "1984",
    title: "Macintosh",
    description: "First Macintosh with GUI",
    icon: Monitor,
    color: "neon-green",
    category: "Computing",
  },
  {
    year: "1989",
    title: "World Wide Web",
    description: "Tim Berners-Lee invents the Web",
    icon: Globe,
    color: "neon-purple",
    category: "Web",
  },
  {
    year: "1991",
    title: "Linux",
    description: "Open-source operating system",
    icon: Code,
    color: "neon-orange",
    category: "Software",
  },
  {
    year: "1995",
    title: "Windows 95",
    description: "Revolutionary operating system",
    icon: Monitor,
    color: "neon-blue",
    category: "Software",
  },
  {
    year: "1998",
    title: "Google Search",
    description: "Revolutionary search engine",
    icon: Search,
    color: "neon-green",
    category: "Web",
  },
  {
    year: "2001",
    title: "iPod",
    description: "Revolutionary portable music player",
    icon: Music,
    color: "neon-purple",
    category: "Mobile",
  },
  {
    year: "2004",
    title: "Facebook",
    description: "Social networking revolution",
    icon: Users,
    color: "neon-blue",
    category: "Social",
  },
  {
    year: "2005",
    title: "YouTube",
    description: "Video sharing platform",
    icon: Video,
    color: "neon-red",
    category: "Web",
  },
  {
    year: "2007",
    title: "iPhone",
    description: "First smartphone revolution",
    icon: Smartphone,
    color: "neon-green",
    category: "Mobile",
  },
  {
    year: "2008",
    title: "Android",
    description: "Open-source mobile platform",
    icon: Smartphone,
    color: "neon-orange",
    category: "Mobile",
  },
  {
    year: "2009",
    title: "Bitcoin",
    description: "First cryptocurrency",
    icon: Shield,
    color: "neon-yellow",
    category: "Blockchain",
  },
  {
    year: "2010",
    title: "iPad",
    description: "Tablet computing revolution",
    icon: Tablet,
    color: "neon-purple",
    category: "Mobile",
  },
  {
    year: "2011",
    title: "Cloud Computing",
    description: "AWS and cloud infrastructure",
    icon: Cloud,
    color: "neon-blue",
    category: "Cloud",
  },
  {
    year: "2012",
    title: "Instagram",
    description: "Photo sharing social network",
    icon: Camera,
    color: "neon-pink",
    category: "Social",
  },
  {
    year: "2014",
    title: "Oculus VR",
    description: "Virtual reality headset",
    icon: Headphones,
    color: "neon-purple",
    category: "VR/AR",
  },
  {
    year: "2015",
    title: "Tesla Autopilot",
    description: "Autonomous driving technology",
    icon: Car,
    color: "neon-green",
    category: "AI/Automation",
  },
  {
    year: "2016",
    title: "AlphaGo",
    description: "AI defeats human Go champion",
    icon: Brain,
    color: "neon-blue",
    category: "AI",
  },
  {
    year: "2017",
    title: "Cryptocurrency Boom",
    description: "Bitcoin reaches $20,000",
    icon: Zap,
    color: "neon-yellow",
    category: "Blockchain",
  },
  {
    year: "2018",
    title: "GPT-1",
    description: "First generative pre-trained transformer",
    icon: Brain,
    color: "neon-purple",
    category: "AI",
  },
  {
    year: "2019",
    title: "5G Networks",
    description: "Fifth generation wireless technology",
    icon: Wifi,
    color: "neon-blue",
    category: "Networking",
  },
  {
    year: "2020",
    title: "Remote Work Revolution",
    description: "Global shift to remote work",
    icon: Home,
    color: "neon-green",
    category: "Work",
  },
  {
    year: "2021",
    title: "NFTs",
    description: "Non-fungible tokens explosion",
    icon: Image,
    color: "neon-orange",
    category: "Blockchain",
  },
  {
    year: "2022",
    title: "ChatGPT",
    description: "AI chatbot revolution",
    icon: MessageSquare,
    color: "neon-blue",
    category: "AI",
  },
  {
    year: "2023",
    title: "AI Art Generation",
    description: "DALL-E, Midjourney, Stable Diffusion",
    icon: Image,
    color: "neon-purple",
    category: "AI",
  },
  {
    year: "2024",
    title: "Quantum Computing",
    description: "IBM Quantum System Two",
    icon: Atom,
    color: "neon-green",
    category: "Quantum",
  },
  {
    year: "2025",
    title: "AGI Development",
    description: "Artificial General Intelligence",
    icon: Brain,
    color: "neon-blue",
    category: "AI",
  },
  {
    year: "2026",
    title: "Neural Interfaces",
    description: "Brain-computer interfaces",
    icon: Zap,
    color: "neon-purple",
    category: "Biotech",
  },
  {
    year: "2027",
    title: "Mars Colonization",
    description: "First human settlement on Mars",
    icon: Rocket,
    color: "neon-red",
    category: "Space",
  },
  {
    year: "2028",
    title: "Fusion Energy",
    description: "Clean unlimited energy",
    icon: Zap,
    color: "neon-yellow",
    category: "Energy",
  },
  {
    year: "2029",
    title: "Singularity",
    description: "Technological singularity",
    icon: Brain,
    color: "neon-blue",
    category: "Future",
  },
  {
    year: "2030",
    title: "Post-Human Era",
    description: "Human-AI symbiosis",
    icon: Users,
    color: "neon-purple",
    category: "Future",
  },
];

const colorMap: { [key: string]: string } = {
  "neon-blue": "#4F46E5",
  "neon-purple": "#8B5CF6",
  "neon-green": "#22C55E",
  "neon-orange": "#F97316",
  "neon-red": "#EF4444",
  "neon-yellow": "#EAB308",
  "neon-pink": "#EC4899",
};

export default function LoadingScreen() {
  const router = useRouter();
  const [currentMilestoneIndex, setCurrentMilestone] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increase progress speed from 0.5 to 1
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Reduced from 50ms to 25ms for faster loading

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Increase logo cycling speed to 500ms
    const milestoneInterval = setInterval(() => {
      setCurrentMilestone((prev) => (prev + 1) % techMilestones.length);
    }, 500);

    return () => clearInterval(milestoneInterval);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.replace("/");
  };

  const currentMilestone = techMilestones[currentMilestoneIndex];
  const MilestoneIcon = currentMilestone.icon;

  return (
    <div
      className="bg-black text-white flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="relative w-full max-w-[700px] aspect-[1.3] bg-[#222] rounded-3xl shadow-2xl flex flex-col items-center justify-center font-sans p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="absolute top-0 w-24 h-8 rounded-b-lg bg-[#111] border-b-2 border-gray-600 shadow-inner -translate-y-4"></div>

        <div className="flex w-full h-full items-center justify-between space-x-2 sm:space-x-4">
          <div className="flex flex-col space-y-4">
            <button className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-700 shadow-lg hover:bg-gray-700 hover:shadow-green-500/50 transition-all text-gray-400 text-xs cursor-pointer font-bold tracking-wide flex items-center justify-center">
              MENU
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-700 shadow-lg hover:bg-gray-700 hover:shadow-green-500/50 transition-all text-gray-400 text-xs cursor-pointer font-bold tracking-wide flex items-center justify-center">
              INFO
            </button>
            <button
              className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-700 shadow-lg hover:bg-gray-700 hover:shadow-green-500/50 transition-all flex items-center justify-center text-gray-400 text-xs cursor-pointer"
              onClick={handleHomeClick}
              type="button"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-gray-700 shadow-lg hover:bg-gray-700 hover:shadow-green-500/50 transition-all flex items-center justify-center text-gray-400 text-xs cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12l6 4V8z" />
              </svg>
            </button>
          </div>

          <div className="relative flex-grow h-full aspect-[1.2] bg-gray-950 border-4 border-green-500 rounded-lg overflow-hidden flex flex-col justify-between items-center shadow-[0_0_30px_rgba(0,255,0,0.3)] p-4">
            <div
              className="absolute inset-0 bg-white/5 opacity-50 z-0 animate-pulse-slow"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), repeating-linear-gradient(0deg, rgba(0,255,0,0.1), rgba(0,255,0,0.1) 1px, transparent 1px, transparent 5px)",
              }}
            ></div>

            <div className="absolute top-2 left-2 flex items-center space-x-1">
              <svg
                className="w-2 h-2 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="12" />
              </svg>
              <span className="text-gray-400 text-xs font-mono">REC</span>
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-gray-400 text-xs font-mono mb-2">
                  Powering On...
                </span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <MilestoneIcon
                  className="w-24 h-24 mb-4 animate-fade-in-up"
                  style={{ color: colorMap[currentMilestone.color] }}
                />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 animate-fade-in-up">
                  {currentMilestone.title}
                </h1>
                <p className="text-base sm:text-lg mb-2 animate-fade-in-up text-gray-300">
                  {currentMilestone.year}
                </p>
                <p className="text-sm sm:text-base text-gray-400 animate-fade-in-up">
                  {currentMilestone.description}
                </p>
              </div>
            )}

            <span className="absolute bottom-2 right-2 text-white text-xs font-mono">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 shadow-lg hover:bg-gray-700 hover:shadow-green-500/50 transition-all flex items-center justify-center text-gray-400 cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12l6 4V8z" />
              </svg>
            </button>
            <div className="relative w-28 h-28 rounded-full bg-gray-800 border-4 border-gray-700 shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-gray-900 border-2 border-gray-800 shadow-inner"></div>
              <div className="absolute flex flex-col items-center justify-center w-full h-full">
                <button className="absolute top-0 -mt-2 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:shadow-green-500/50 transition-all"></button>
                <button className="absolute bottom-0 -mb-2 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:shadow-green-500/50 transition-all"></button>
                <button className="absolute left-0 -ml-2 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:shadow-green-500/50 transition-all"></button>
                <button className="absolute right-0 -mr-2 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:shadow-green-500/50 transition-all"></button>
              </div>
              <div className="absolute w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold">SET</span>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 shadow-lg hover:bg-gray-700 hover:shadow-green-500/50 transition-all flex items-center justify-center text-gray-400 cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12l6 4V8z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs">
          <span className="font-bold">Canon</span> TesseractXI.0
        </div>
      </div>
    </div>
  );
}

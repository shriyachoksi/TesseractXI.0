"use client";
import { Navbar } from "@/app/components/navbar";

import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Footer } from "@/components/ui/footer";

import React from "react";

// --- Type Definitions ---

interface EventData {
  club: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  status: "registration";
  image: string;
}

interface IconProps {
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline";
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline";
}

// --- Helper Components (replacing imports) ---

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`rounded-xl shadow-lg ${className}`}>{children}</div>
);

const Badge: React.FC<BadgeProps> = ({ children, className, variant }) => {
  const baseClasses =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase";
  const variantClasses = variant === "outline" ? "border" : "";
  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};

const Button: React.FC<ButtonProps> = ({ children, className, variant }) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-2.5 border text-sm font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 transform hover:-translate-y-1";
  const variantClasses =
    variant === "outline" ? "bg-transparent hover:bg-gray-900" : "text-black";
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

// --- Main Page Component ---

const App: React.FC = () => {
  const events: EventData[] = [
    {
      club: "Science and technical Committee",
      title: "Tess Run",
      date: "2025-10-11",
      time: "6:30 AM - 8:30 AM",
      location: "Sports Complex",
      type: "Fitness",
      description:
        "A refreshing morning marathon to kickstart the fest's energy.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/00ffff?text=Tess+Run",
    },
    {
      club: "Science and technical Committee",
      title: "Tech Talk",
      date: "2025-10-11",
      time: "5:00 PM - 6:30 PM",
      location: "Auditorium",
      type: "Keynote",
      description:
        "Join us for an enlightening session with a prominent speaker from the tech industry.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/00ffff?text=Tech+Talk",
    },
    {
      club: "Science and technical Committee",
      title: "EDM Night",
      date: "2025-10-12",
      time: "7:00 PM onwards",
      location: "E-Block Ground",
      type: "Concert",
      description:
        "Get ready for an electrifying night of music and dance with a renowned artist.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/00ffff?text=EDM+Night",
    },
    {
      club: "Aatmann",
      title: "Ideathon",
      date: "2025-09-28",
      time: "2:00 PM - 6:00 PM",
      location: "NAD-001",
      type: "Ideathon",
      description:
        "Uses past psychology insights for modern sustainability solutions.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Ideathon",
    },
    {
      club: "Alchemy",
      title: "Parla Tech 7.0",
      date: "2025-09-29",
      time: "4:00 PM - 6:00 PM",
      location: "E-001",
      type: "Debate",
      description: "Structured debates on technology, society, and governance.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Parla+Tech",
    },
    {
      club: "Anirveda",
      title: "Mock RBI",
      date: "2025-10-10",
      time: "4:00 PM - 6:00 PM",
      location: "D-001/002",
      type: "Simulation",
      description:
        "Simulation replicating the role of the RBI, responding to real-time economic issues.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Mock+RBI",
    },
    {
      club: "Avionics",
      title: "Retro Aircraft building",
      date: "2025-09-27",
      time: "4:00 PM - 7:00 PM",
      location: "C-block Classroom",
      type: "Hackathon",
      description:
        "Workshop to build an airframe based on origins/early generations of aircraft.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Avionics",
    },
    {
      club: "Brahmand",
      title: "ChronoHedron",
      date: "2025-10-11",
      time: "10:00 AM - 7:00 PM",
      location: "D BLOCK FOYER",
      type: "Planetarium",
      description:
        "Planetarium journey showing the evolution of analogue astronomy and future exploration.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=ChronoHedron",
    },
    {
      club: "Brahmand",
      title: "Night Sky Gazing",
      date: "2025-10-11",
      time: "6:30 PM - 9:30 PM",
      location: "E block Ground",
      type: "Observation",
      description:
        "Observation of visible celestial bodies using a dobsonian telescope.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Sky+Gazing",
    },
    {
      club: "Bulls & Bears",
      title: "SPEND",
      date: "2025-10-10",
      time: "4:00 PM - 6:00 PM",
      location: "C-001",
      type: "Simulation",
      description:
        "Simulated investment experience using virtual capital and an auction round.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=SPEND",
    },
    {
      club: "Cretus",
      title: "Robotics Carnival",
      date: "2025-10-11",
      time: "4:00 PM - 7:00 PM",
      location: "E-Block Foyer",
      type: "Carnival",
      description:
        "Interactive carnival showcasing the club's robots (past, present, and future concepts).",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Robotics",
    },
    {
      club: "Encode",
      title: "The Origin Stories",
      date: "2025-09-30",
      time: "3:00 PM - 6:00 PM",
      location: "Auditorium",
      type: "Alumni Session",
      description:
        "Alumni session sharing career journeys and paths from college to global careers.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Origin+Stories",
    },
    {
      club: "Encode",
      title: "Clue Verse",
      date: "2025-10-10",
      time: "9:00 AM - 3:00 PM",
      location: "Full campus",
      type: "Treasure Hunt",
      description:
        "Campus-wide treasure hunt blending riddles, digital portals, and real-world exploration.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Clue+Verse",
    },
    {
      club: "Enigma",
      title: "Puzzle Hunt 2.0",
      date: "2025-09-26",
      time: "4:00 PM - 7:00 PM",
      location: "OSAIL Ground",
      type: "Treasure Hunt",
      description:
        "Treasure hunt celebrating past technologies and inventions.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Puzzle+Hunt",
    },
    {
      club: "Mind Ripple",
      title: "Matrix Breakout",
      date: "2025-10-12",
      time: "2:00 PM - 4:00 PM",
      location: "OSAIL Ground (2 mandaps)",
      type: "Escape Room",
      description:
        "Escape room with a dynamic storyline and clues that change daily.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Matrix+Breakout",
    },
    {
      club: "Nucleus",
      title: "Physics Expo",
      date: "2025-09-25",
      time: "10:00 AM - 6:00 PM",
      location: "Osail ground tent",
      type: "Expo",
      description:
        "Expo featuring interactive displays of historical physics innovations.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Physics+Expo",
    },
    {
      club: "Respawn",
      title: "FIFA Tournament",
      date: "2025-10-11",
      time: "4:00 PM - 8:00 PM",
      location: "D 003",
      type: "eSports",
      description:
        "Hyper-realistic eSports tournament reflecting the cutting-edge of gaming.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=FIFA",
    },
    {
      club: "SOM",
      title: "Math Odyssey",
      date: "2025-09-24",
      time: "10:00 AM - 5:00 PM",
      location: "E Block Foyer",
      type: "Maze",
      description:
        "Life-sized maze where participants solve math puzzles inspired by historical concepts.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Math+Odyssey",
    },
    {
      club: "Sorriso",
      title: "Photography W-shop",
      date: "2025-10-10",
      time: "4:00 PM - 6:00 PM",
      location: "D207 (PA ROOM)",
      type: "Workshop",
      description:
        "Workshop conducted by a guest expert to enhance participants' photography skills.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Photography",
    },
    {
      club: "Sorriso",
      title: "Tech Photobooth",
      date: "2025-10-11",
      time: "All Day",
      location: "OSAIL Ground",
      type: "Photobooth",
      description:
        "Photobooth with retro-to-modern props; provides polaroid prints.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Photobooth",
    },
    {
      club: "Symmetry",
      title: "Stop Motion",
      date: "2025-09-23",
      time: "4:00 PM - 6:00 PM",
      location: "C-001",
      type: "Workshop",
      description:
        "Workshop to create stop-motion animation using traditional materials.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Stop+Motion",
    },
    {
      club: "Symmetry",
      title: "Designathon",
      date: "2025-10-12",
      time: "4:00 PM - 7:00 PM",
      location: "C-002",
      type: "Designathon",
      description: "Day 1 (Workshop): Introduction to UI/UX design and Figma.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Designathon",
    },
    {
      club: "Synergy",
      title: "BizzTalk",
      date: "2025-10-18",
      time: "4:00 PM - 6:00 PM",
      location: "Auditorium",
      type: "Panel Discussion",
      description:
        "Keynotes and panel discussion with startup founders and industry experts.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=BizzTalk",
    },
    {
      club: "The Inspired Room",
      title: "Bridge Making",
      date: "2025-10-11",
      time: "2:00 PM - 5:00 PM",
      location: "D004 or D001",
      type: "Challenge",
      description:
        "Challenge to build the strongest bridge using simple and sustainable materials.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Bridge+Making",
    },
    {
      club: "VGA",
      title: "Cineshaam",
      date: "2025-10-12",
      time: "4:00 PM - 6:00 PM",
      location: "BLT-001",
      type: "Film Screening",
      description:
        "Short film screening and moderated discussion on the evolution of cinema.",
      status: "registration",
      image: "https://placehold.co/600x400/000000/ffffff?text=Cineshaam",
    },
  ];

  const groupedEvents = events.reduce(
    (acc: { [key: string]: EventData[] }, event: EventData) => {
      const club = event.club;
      if (!acc[club]) {
        acc[club] = [];
      }
      acc[club].push(event);
      return acc;
    },
    {}
  );

  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;500;600&display=swap');
          .font-orbitron {
            font-family: 'Orbitron', sans-serif;
          }
          body, .font-sans {
            font-family: 'Inter', sans-serif;
          }
          .grid-bg {
            position: relative;
            z-index: 0;
          }
          .grid-bg::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background-image:
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}</style>
      <main className="min-h-screen bg-black text-gray-300 font-sans grid-bg">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-24">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 tracking-wide font-orbitron`}
                style={{ textShadow: "0 0 15px rgba(59, 130, 246, 0.4)" }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  {"Connect & Learn"}
                  <br />
                  <span>{"Together"}</span>
                </span>
              </h1>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                {
                  "Join our community events, workshops, and conferences to stay at the forefront of technological innovation."
                }
              </p>
            </div>

            {/* Events List */}
            <div className="space-y-24">
              {Object.keys(groupedEvents).map((clubName) => (
                <section key={clubName}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white font-orbitron">
                    {clubName}
                  </h2>
                  <div className="space-y-8">
                    {groupedEvents[clubName].map((event, index) => (
                      <Card
                        key={index}
                        className="bg-[#101114] border border-[#22232a] rounded-2xl md:flex overflow-hidden shadow-md p-0"
                      >
                        {/* Left: Title as image replacement */}
                        <div className="md:w-1/3 xl:w-2/5 flex items-center justify-center bg-black min-h-[220px]">
                          <span
                            className="text-4xl md:text-5xl font-bold font-orbitron text-cyan-300 text-center w-full px-2"
                            style={{ wordBreak: "break-word" }}
                          >
                            {event.title}
                          </span>
                        </div>
                        {/* Right: Details */}
                        <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-white mb-1">
                              {event.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className="border-purple-500/60 text-purple-300 bg-transparent px-4 py-1 ml-4 tracking-wide font-semibold"
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <p className="text-base text-gray-400 mb-10">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-gray-300 items-center border-b border-[#23242a] pb-3 mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-cyan-300" />
                              <span>
                                {new Date(event.date).toLocaleDateString(
                                  undefined,
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-cyan-300" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-cyan-300" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <a
                              href="https://forms.gle/your-form-id"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-1.5 rounded-md font-bold text-sm bg-white/100 text-black hover:bg-white/100 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-cyan-200/40 relative overflow-hidden"
                            >
                              <span className="relative z-10 shimmer-text font-orbitron font-bold text-base md:text-base">
                                Register Now
                              </span>
                            </a>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;

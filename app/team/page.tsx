"use client";
import { Navbar } from "@/app/components/navbar";

import React, { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const Icon = ({ name, className }: { name: string; className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {name === "linkedin" && (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </>
    )}
    {name === "instagram" && (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    )}
  </svg>
);

interface TeamMember {
  name: string;
  role: string;
  image: string;
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- CUSTOM CARD COMPONENT with 3D TILT ---
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    setRotate({ x: -y, y: x });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative w-full h-96 [transform-style:preserve-3d] group"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.05)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl shadow-2xl shadow-black/40 border border-white/10 backdrop-blur-md overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75"
          style={{
            transform: `scale(1.15) translateX(${rotate.y * -4}px) translateY(${
              rotate.x * -4
            }px)`,
            transition: "transform 0.2s ease-out, opacity 0.5s ease-in-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white [transform:translateZ(40px)]">
          <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-10">
            <h3 className="text-2xl font-bold mb-1 font-orbitron">
              {member.name}
            </h3>
            <p className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wider">
              {member.role}
            </p>
          </div>
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6">
            <a
              href="#"
              aria-label={`${member.name}'s LinkedIn`}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Icon name="linkedin" className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label={`${member.name}'s Instagram`}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Icon name="instagram" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function TeamPage() {
  // NOTE: Make sure to install framer-motion: `npm install framer-motion` or `yarn add framer-motion`
  const teamMembers: TeamMember[] = [
    // Executives
    {
      name: "Pratham Mohta",
      role: "General Secretary",
      image: "/heads/pratham-mohta.jpg",
    },
    {
      name: "Nisarg Adhvaryu",
      role: "Treasurer",
      image: "/heads/Nisarg Adhvaryu.jpg",
    },
    // Heads
    {
      name: "Shriya Choksi",
      role: "Technical Head",
      image: "/heads/shriya-choksi.jpeg",
    },
    {
      name: "Krisha Patel",
      role: "Logistics Head",
      image: "/heads/Krisha_Logistics.jpg",
    },
    {
      name: "Nikhil Tiwari",
      role: "Logistics Head",
      image: "/heads/Nikhil Tiwari_Logistics.jpg",
    },
    {
      name: "Aryan Shah",
      role: "Logistics Head",
      image: "/heads/Aryan Shah Logs head.jpg",
    },
    {
      name: "Abhay Sampath",
      role: "Logistics Head",
      image: "/heads/abhay-sampath.jpg",
    },
    {
      name: "Akhil Shah",
      role: "Event Management Head",
      image: "/heads/Akhil Shah EM Head.jpg",
    },
    {
      name: "Rudra dave",
      role: "Event Management Head",
      image: "/heads/rudra-dave.jpg",
    },
    {
      name: "Diya Sachdev",
      role: "Event Management Head",
      image: "/heads/diya-sachdev.jpg",
    },
    {
      name: "Vrund Sharma",
      role: "Event Management Head",
      image: "/heads/vrund-sharma.jpg",
    },
    {
      name: "Dhruvi Singh",
      role: "Public Relations and Marketing",
      image: "/heads/dhruvi-singh.jpg",
    },
    {
      name: "Chirag Buliya",
      role: "Public Relations and Marketing",
      image: "/heads/chirag-buliya.jpg",
    },
    {
      name: "Manav Patel",
      role: "Public Relations and Marketing",
      image: "/heads/manav-patel.jpg",
    },
    {
      name: "Tathya Modi",
      role: "Public Relations and Marketing",
      image: "/heads/tathya-modi.jpg",
    },
    {
      name: "Bhalala Zankar",
      role: "Graphic Design Head",
      image: "/heads/zankar.jpg",
    },
    {
      name: "Diya Arvadia",
      role: "Graphic Design Head",
      image: "/heads/diya-arvadia.jpg",
    },
    {
      name: "Mansi Rupapara",
      role: "Graphic Design Head",
      image: "/heads/mansi-rupa.jpg",
    },
    {
      name: "Bansari Patel",
      role: "Fine Arts Head",
      image: "/heads/bansari-patel.jpg",
    },
    {
      name: "Shweta Sharma",
      role: "Fine Arts Head",
      image: "/heads/Shweta Sharma_fine arts.jpg",
    },
    {
      name: "Rumit Shah",
      role: "Fine Arts Head",
      image: "/heads/rumit-shah.jpg",
    },
    {
      name: "Shreyash Pattnaik",
      role: "Sponsorship Head",
      image: "/heads/Shreyash Pattnaik.jpg",
    },
    {
      name: "Saurav Kaushik",
      role: "Sponsorship Head",
      image: "/heads/Saurav.jpeg",
    },
    {
      name: "Aditya Mehta",
      role: "Sponsorship Head",
      image: "/heads/aditya-mehta.webp",
    },
    {
      name: "Rushvi Patel",
      role: "Hospitality Head",
      image: "/heads/Rushvi Patel_Hospitality.jpg",
    },
    {
      name: "Parthrajsinh Zala",
      role: "Hospitality Head",
      image: "/heads/Parthraj_hospi.jpg",
    },
    { name: "Rahul Pal", role: "C&D Head", image: "/heads/rahul-pal.jpg" },
    {
      name: "Veda Solanki",
      role: "C&D Head",
      image: "/heads/Veda Solanki.jpg",
    },
  ];

  const executives = teamMembers.slice(0, 2);
  const heads = teamMembers.slice(2);

  const groupedHeads = heads.reduce((acc, member) => {
    const role = member.role;
    if (!acc[role]) acc[role] = [];
    acc[role].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <main className="min-h-screen bg-[#02040a] text-gray-200 font-sans overflow-hidden">
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
                    .font-orbitron {
                        font-family: 'Orbitron', sans-serif;
                    }
                `}
      </style>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[#02040a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e7022,transparent)]"></div>

      <Navbar />

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mt-5 mb-5">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 tracking-wide ${orbitron.className}`}
              style={{ textShadow: "0 0 15px rgba(59, 130, 246, 0.4)" }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Architects of The Future
              </span>
            </h1>
            <p className="text-md text-slate-400 max-w-2xl mx-auto font-sans mb-20">
              Presenting the Team That Powers SNT
            </p>
          </div>

          {/* Sections */}
          <AnimatePresence>
            {/* Executives Section */}
            <motion.div
              className="mb-20"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl font-bold text-center mb-12 text-white tracking-wide font-orbitron"
              >
                Executive Council
              </motion.h2>
              <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-8 gap-y-12">
                {executives.map((member) => (
                  <div key={member.name} className="w-full max-w-sm">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heads Sections */}
            {Object.entries(groupedHeads).map(([role, members]) => (
              <motion.div
                key={role}
                className="mb-24"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-bold text-center mb-12 text-white tracking-wide font-orbitron"
                >
                  {role}
                </motion.h2>
                {(() => {
                  if (members.length === 1) {
                    return (
                      <div className="flex justify-center">
                        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                          <TeamMemberCard member={members[0]} />
                        </div>
                      </div>
                    );
                  } else if (members.length === 2) {
                    return (
                      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-8 gap-y-12">
                        {members.map((member) => (
                          <div key={member.name} className="w-full max-w-sm">
                            <TeamMemberCard member={member} />
                          </div>
                        ))}
                      </div>
                    );
                  } else if (members.length === 4) {
                    return (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                          {members.slice(0, 3).map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                          ))}
                        </div>
                        <div className="flex justify-center mt-12">
                          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                            <TeamMemberCard member={members[3]} />
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {members.map((member) => (
                          <TeamMemberCard key={member.name} member={member} />
                        ))}
                      </div>
                    );
                  }
                })()}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack wizard specializing in AI integration and scalable architectures.",
    skills: ["React", "Node.js", "AI/ML", "Cloud"],
    image: "/professional-developer-portrait.png",
  },
  {
    name: "Maya Rodriguez",
    role: "UX/UI Designer",
    bio: "Creative visionary crafting intuitive interfaces for the digital future.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    image: "/creative-designer-portrait.png",
  },
];

export function TeamGlimpse() {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <Badge className="mb-3 bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-4 py-2 text-base">
            Meet the Team
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold mb-1 tracking-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Glimpse of Our Team
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-start min-w-[240px] max-w-[300px] w-full bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-gray-900/50 border border-blue-700/30 rounded-2xl shadow-[0_2px_20px_0_rgba(79,140,255,0.08)] backdrop-blur-xl p-6 hover:ring-2 hover:ring-blue-400/60 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center w-full">
                <div className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-400/20 group-hover:border-blue-400/60 transition-all duration-300 object-cover"
                  />
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-blue-400/10 group-hover:bg-blue-400/20 transition-all duration-300" />
                </div>
                <h3
                  className="text-lg font-bold mb-1 text-white group-hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {member.name}
                </h3>
                <Badge className="mb-2 bg-blue-800/20 text-blue-300 border-blue-400/30 px-3 py-1 text-xs">
                  {member.role}
                </Badge>
                <p className="text-gray-300 mb-2 leading-relaxed text-xs text-center">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs border-blue-400/30 text-blue-200 px-2 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="inline-block px-6 py-3 rounded-2xl bg-tesseract-dark text-tesseract-light hover:bg-tesseract-bronze transition-colors border border-tesseract-sand/30 shadow-md"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

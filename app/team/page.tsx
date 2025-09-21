import { Navbar } from "@/app/components/navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, X } from "lucide-react";

export default function TeamPage() {
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
    {
      name: "Jordan Kim",
      role: "DevOps Engineer",
      bio: "Infrastructure expert ensuring seamless deployment and scalability.",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      image: "/tech-engineer-portrait.jpg",
    },
    {
      name: "Sam Taylor",
      role: "Data Scientist",
      bio: "Analytics guru transforming data into actionable insights and predictions.",
      skills: ["Python", "TensorFlow", "Analytics", "Visualization"],
      image: "/data-scientist-portrait.png",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-purple/10 text-neon-purple border-neon-purple/20">
              {"Meet Our Team"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                {"Brilliant Minds"}
              </span>
              <br />
              <span className="text-foreground">{"Behind Innovation"}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "Our diverse team of experts brings together cutting-edge technical skills, creative vision, and innovative thinking to push the boundaries of what's possible."
              }
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-cyan/30 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto border-2 border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-all duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                    {member.name}
                  </h3>

                  <Badge className="mb-4 bg-neon-purple/10 text-neon-purple border-neon-purple/20">
                    {member.role}
                  </Badge>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-neon-cyan/30 text-neon-cyan"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
                    <X className="h-5 w-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

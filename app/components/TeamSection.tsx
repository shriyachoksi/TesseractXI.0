import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Namraa Patel",
    role: "Tech Lead",
    image: "data:image/jpeg;base64,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",
    skills: ["Full Stack", "AI/ML", "Architecture"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Takshil Patel",
    role: "Creative Director",
    image: "data:image/jpeg;base64,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",
    skills: ["UI/UX", "Design", "Frontend"],
    social: {
      instagram: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Chen",
    role: "AI Specialist",
    image: "data:image/jpeg;base64,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",
    skills: ["Machine Learning", "Neural Networks", "Data Science"],    
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-tesseract-cream/20" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tesseract-dark">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-tesseract-dark/70">
            The innovative minds shaping the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-tesseract-dark to-black rounded-xl overflow-hidden shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                {/* Circuit Board Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                  }}
                />

                {/* Image with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-tesseract-dark to-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Glowing Line */}
                  <div className="w-1/3 h-0.5 bg-tesseract-bronze mb-4 group-hover:w-1/2 transition-all duration-300" />
                  
                  {/* Name and Role */}
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-1"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-tesseract-bronze mb-4">{member.role}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-sm bg-white/10 text-white rounded-md backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    {member.social.instagram && (
                      <motion.a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Instagram className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 rounded-full bg-tesseract-bronze animate-pulse" />
                </div>
                <div className="absolute top-4 right-8">
                  <div className="w-1 h-1 rounded-full bg-tesseract-bronze/50 animate-pulse delay-75" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

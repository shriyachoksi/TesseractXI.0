import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "@/components/ui/footer";
export default function AboutPage() {
  // Timeline data
  const techFestTimeline = [
    {
      year: 2024,
      title: "The Future is Elemental",
      description:
        "Tesseract X's 2024 theme centers around the five fundamental elements—Earth, Fire, Air, Water, and Ether—emphasizing their significance in shaping the future of technology and innovation. The theme highlights the deep relationship between natural forces and technological advancements, setting the stage for discussions and activities exploring how these elements will influence future scientific and technological progress.",
      images: [
        "./group2.png",
        "./group.JPG",
        "./SKS_7504.JPG",
        "/shivamWalk.jpeg",
      ],
    },
    {
      year: 2023,
      title: "Amazing Tech-Verse",
      description:
        "The Extraordinary TechVerse: Tesseract 2023 embraces superheroes, science fiction, and the multiverse to make complex scientific and technological concepts more relatable and accessible to a broader audience. By leveraging the appeal of superheroes, the theme connects intricate ideas in physics and technology with popular culture, attracting a diverse audience while promoting technical excellence.",
      images: [
        "/inaugralCeremony/23Ceremony.JPG",
        "/ClubActivity/53ClubActivity.JPG",
        "/ClubActivity/58ClubActivity.JPG",
        "/ClubActivity/98ClubActivity.JPG",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">{/* ...existing code... */}</div>
        {/* TechFest Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20 px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                TechFest Evolution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two years of innovation, growth, and technological breakthroughs
            </p>
          </div>

          <div className="relative flex flex-col gap-32">
            {techFestTimeline.map((event, idx) => (
              <div
                key={idx}
                className="flex flex-row items-stretch relative min-h-[180px] md:min-h-[240px] lg:min-h-[340px]"
              >
                {/* Sticky year badge */}
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 flex items-start justify-center">
                  <span
                    className="sticky z-20 mt-16 top-[5.5rem] inline-block rounded-full bg-white/90 text-gray-900 font-bold text-xl md:text-2xl px-5 py-2 shadow-md border border-gray-200"
                    style={{ minWidth: "4rem", textAlign: "center" }}
                  >
                    {event.year}
                  </span>
                </div>
                {/* Card and images, vertically centered */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                    {event.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.images.map((img, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl shadow-lg bg-gray-900"
                      >
                        <img
                          src={img}
                          alt={`Event ${event.year} photo ${i + 1}`}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

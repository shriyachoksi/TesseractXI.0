import { Navbar } from "@/app/components/navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Footer } from "@/components/ui/footer";
export default function EventsPage() {
  const events = [
    {
      title: "AI Revolution Summit 2025",
      date: "2025-03-15",
      time: "09:00 AM - 06:00 PM",
      location: "Tesseract XI.0 HQ",
      attendees: 250,
      type: "Conference",
      description:
        "Join industry leaders as we explore the latest breakthroughs in artificial intelligence and machine learning.",
      status: "upcoming",
      image: "/ai-conference-futuristic-stage.jpg",
    },
    {
      title: "Quantum Computing Workshop",
      date: "2025-02-28",
      time: "02:00 PM - 05:00 PM",
      location: "Virtual Reality Lab",
      attendees: 50,
      type: "Workshop",
      description:
        "Hands-on workshop exploring quantum algorithms and their practical applications.",
      status: "upcoming",
      image: "/quantum-computing-lab-setup.jpg",
    },
    {
      title: "Blockchain & Web3 Hackathon",
      date: "2025-04-20",
      time: "48 Hours",
      location: "Innovation Center",
      attendees: 150,
      type: "Hackathon",
      description:
        "48-hour intensive hackathon focused on building the next generation of decentralized applications.",
      status: "registration",
      image: "/hackathon-coding-event-space.jpg",
    },
    {
      title: "AR/VR Experience Showcase",
      date: "2025-01-25",
      time: "07:00 PM - 10:00 PM",
      location: "Digital Arts Gallery",
      attendees: 100,
      type: "Showcase",
      description:
        "Immersive showcase of cutting-edge augmented and virtual reality experiences.",
      status: "past",
      image: "/vr-showcase-exhibition.jpg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-neon-green/10 text-neon-green border-neon-green/20";
      case "registration":
        return "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20";
      case "past":
        return "bg-muted/10 text-muted-foreground border-muted/20";
      default:
        return "bg-neon-purple/10 text-neon-purple border-neon-purple/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming";
      case "registration":
        return "Registration Open";
      case "past":
        return "Past Event";
      default:
        return "Event";
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-purple/10 text-neon-purple border-neon-purple/20">
              {"Upcoming Events"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                {"Connect & Learn"}
              </span>
              <br />
              <span className="text-foreground">{"Together"}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "Join our community events, workshops, and conferences to stay at the forefront of technological innovation."
              }
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-cyan/30 transition-all duration-300 group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge
                          className={`mb-2 ${getStatusColor(event.status)}`}
                        >
                          {getStatusText(event.status)}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-neon-purple/30 text-neon-purple"
                      >
                        {event.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-neon-cyan" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-neon-cyan" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-neon-cyan" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-neon-cyan" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {event.status !== "past" && (
                        <Button className="bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90">
                          {event.status === "registration"
                            ? "Register Now"
                            : "Learn More"}
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 bg-transparent"
                      >
                        {"Add to Calendar"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

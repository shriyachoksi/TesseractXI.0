import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DraggableCardDemo from "@/components/draggable-card-demo-2";
import Countdown from "@/components/site/Countdown";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Index() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const events = [
    {
      title: "AI Summit 2025",
      img: "https://images.pexels.com/photos/7234409/pexels-photo-7234409.jpeg",
      desc: "Talks and panels on AI safety, ML systems, and ethics.",
      tag: "Upcoming",
    },
    {
      title: "Hack the Future",
      img: "https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg",
      desc: "36-hour hackathon focused on sustainability and edge compute.",
      tag: "Past",
    },
    {
      title: "Robotics Workshop",
      img: "https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg",
      desc: "Hands-on build with microcontrollers, actuators, and CV.",
      tag: "Past",
    },
  ];

  const team = [
    { name: "XYZ", role: "President", img: "https://images.pexels.com/photos/5662643/pexels-photo-5662643.jpeg" },
    { name: "ABC", role: "VP, Engineering", img: "https://images.pexels.com/photos/7565176/pexels-photo-7565176.jpeg" },
    { name: "DEF", role: "Head of Ops", img: "https://images.pexels.com/photos/33761727/pexels-photo-33761727.jpeg" },
    { name: "PQR", role: "Design Lead", img: "https://images.pexels.com/photos/33717098/pexels-photo-33717098.jpeg" },

  ];

  const gallery = [
    "https://images.pexels.com/photos/20738435/pexels-photo-20738435.jpeg",
    "https://images.pexels.com/photos/8720586/pexels-photo-8720586.jpeg",
    "https://images.pexels.com/photos/7751703/pexels-photo-7751703.jpeg",
    "https://images.pexels.com/photos/4827508/pexels-photo-4827508.jpeg",
    "https://images.pexels.com/photos/8973459/pexels-photo-8973459.jpeg",
    "https://images.pexels.com/photos/32086033/pexels-photo-32086033.jpeg",
    "https://images.pexels.com/photos/6212498/pexels-photo-6212498.jpeg",
    "https://images.pexels.com/photos/8369216/pexels-photo-8369216.jpeg",
  ];

  return (
    <div>
      {/* Hero with background video */}
      <section className="relative h-[72vh] min-h-[500px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/8720586/pexels-photo-8720586.jpeg"
        >
          <source src="https://cdn.builder.io/o/assets%2F2861b4b9e21740cb82ae3930f81d9484%2Ffcd7ccd4e24d4930964a1b30fb19b012?alt=media&token=203489c1-f56f-4b31-ab08-4daf1479f12a&apiKey=2861b4b9e21740cb82ae3930f81d9484" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
        <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center">
          <h1 className="font-title uppercase max-w-4xl text-3xl md:text-5xl font-extrabold leading-tight tracking-wider text-white drop-shadow-2xl">
            Tesseract 2025
          </h1>
          <p className="font-tech mt-2 max-w-3xl text-xl md:text-2xl text-white/90 drop-shadow">
            Where technology meets creativity
          </p>
          <div className="mt-8">
            <a href="#events">
              <Button size="pill" className="font-tech shadow-md hover:shadow-lg">
                Explore More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Events Spotlight */}
      <section id="events" className="container py-16 md:py-24">
        <SectionHeader title="Events Spotlight" subtitle="Get a glimpse of what's coming and what we've built together." />
        <FocusCards items={events} />
        <div className="mt-10 text-center">
          <a href="#events">
            <Button size="pill" className="font-tech shadow-md hover:shadow-lg">
              View All Events
            </Button>
          </a>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container py-16 md:py-24">
        <SectionHeader title="Our Team" subtitle="Builders, designers, and dreamers behind Tesseract." />
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 md:gap-6">
          {team.slice(0, 4).map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm">
              <img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-sm font-semibold text-primary">{m.name}</p>
                <p className="text-xs text-foreground/70">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#team">
            <Button size="pill" className="font-tech shadow-md hover:shadow-lg">View All Members</Button>
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container py-16 md:py-24">
        <SectionHeader title="Gallery" subtitle="Moments from our events and workshops." />
        <div className="mt-10 -mx-8">
          <DraggableCardDemo />
        </div>
        <div className="mt-8 text-center">
          <a href="#gallery">
            <Button size="pill" className="font-tech shadow-md hover:shadow-lg">
              View Gallery
            </Button>
          </a>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="container py-16 md:py-24">
        <SectionHeader title="Sponsors" subtitle="Thanks to our partners for powering innovation." />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "AlphaTech",
            "Nova Labs",
            "QuantumWorks",
            "ByteForge",
            "Orbit AI",
            "Vertex Cloud",
          ].map((brand, i) => (
            <div key={brand} className="group">
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent">
                <div className="relative grid place-items-center rounded-2xl bg-card/70 backdrop-blur-sm px-6 py-7 shadow-sm ring-1 ring-border transition-all group-hover:ring-primary/40">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 transition-opacity" />
                  <SponsorLogo index={i} label={brand} />
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold text-foreground/80 ring-1 ring-border">Partner</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Countdown Section (replaces contact CTA) */}
      <section id="register" className="container pb-20">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Join the Revolution</h2>
        </div>
        <Countdown targetDate={new Date(new Date().getFullYear(), 9, 1)} />
      </section>

      <Dialog open={!!lightboxSrc} onOpenChange={(o) => !o && setLightboxSrc(null)}>
        <DialogContent className="max-w-4xl">
          {lightboxSrc && (
            <img src={lightboxSrc} alt="Gallery large view" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FocusCards({ items }: { items: { title: string; img: string; desc: string; tag: string }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:[perspective:1200px]" onMouseLeave={() => setHovered(null)}>
      {items.map((item, i) => (
        <FocusCard
          key={item.title}
          item={item}
          active={hovered === i}
          dimmed={hovered !== null && hovered !== i}
          onEnter={() => setHovered(i)}
        />
      ))}
    </div>
  );
}

function FocusCard({ item, active, dimmed, onEnter }: {
  item: { title: string; img: string; desc: string; tag: string };
  active: boolean;
  dimmed: boolean;
  onEnter: () => void;
}) {
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  return (
    <article
      onMouseEnter={onEnter}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setMx(e.clientX - r.left);
        setMy(e.clientY - r.top);
      }}
      className={cn(
        "group relative rounded-2xl border bg-card overflow-hidden transition-all duration-300",
        active && "md:scale-[1.04] md:shadow-xl md:ring-2 md:ring-primary/40",
        dimmed && "md:opacity-60 md:[filter:blur(1px)] md:scale-[0.98]"
      )}
    >
      <div className="relative">
        <img src={item.img} alt={item.title} loading="lazy" className="h-48 w-full object-cover"/>
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary border">
          {item.tag}
        </span>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(360px circle at ${mx}px ${my}px, hsl(var(--ring)/0.25), transparent 40%)`,
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{item.desc}</p>
      </div>
    </article>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-tech text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="mt-2 text-foreground/70">{subtitle}</p>
    </div>
  );
}

function SponsorLogo({ index, label }: { index: number; label: string }) {
  const colors = ["#A68563", "#CBB197", "#7D572E", "#E6D4C2", "#A68563", "#CBB197"];
  const c = colors[index % colors.length];
  const avatarUrl = `https://i.pravatar.cc/128?img=${(index % 70) + 1}`;
  const initials = label
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-primary/40 via-transparent to-primary/20 opacity-60 blur group-hover:opacity-80 transition-opacity" />
        <Avatar className="relative h-16 w-16 ring-1 ring-border group-hover:ring-primary/40">
          <AvatarImage src={avatarUrl} alt={`${label} avatar`} />
          <AvatarFallback className="text-sm font-semibold" style={{ background: c, color: "#1a1a1a" }}>
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
    </div>
  );
}

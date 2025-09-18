import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "border-b",
        scrolled ? "bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/40" : "bg-background/30"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="group inline-flex items-center gap-2" aria-label="Tesseract Home">
          <span
            aria-hidden
            className="h-10 w-10 inline-block text-foreground/90 hover:text-primary transition-transform duration-300 origin-left scale-[1.9] group-hover:scale-[2.05]"
            style={{
              WebkitMaskImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F2861b4b9e21740cb82ae3930f81d9484%2F9587089b09bc4b069b5e388bade7bdf1?format=webp&width=256)",
              maskImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F2861b4b9e21740cb82ae3930f81d9484%2F9587089b09bc4b069b5e388bade7bdf1?format=webp&width=256)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              backgroundColor: "currentColor",
              display: "inline-block",
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={isHome ? item.href : `/${item.href}`}
              className="font-tech px-3 py-2 rounded-md text-sm font-semibold text-foreground/90 hover:text-primary hover:bg-secondary/60 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          {/* Simple mobile menu toggle via native details/summary for zero JS */}
          <details className="relative">
            <summary className="font-tech list-none cursor-pointer select-none rounded-md px-3 py-2 text-sm font-semibold text-foreground/90 hover:text-primary hover:bg-secondary/60">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-card shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={isHome ? item.href : `/${item.href}`}
                  className="font-tech block px-4 py-2 text-sm text-foreground/90 hover:bg-secondary/60 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

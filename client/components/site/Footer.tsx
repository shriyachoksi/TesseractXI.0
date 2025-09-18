import { Link } from "react-router-dom";
import { Github, Instagram, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-secondary/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
              <span className="text-primary font-bold">T</span>
            </div>
            <span className="font-semibold text-primary">Tesseract</span>
          </div>
          <p className="mt-3 text-sm text-foreground/70 max-w-sm">
            Innovating the Future of Tech. Join our community for events, workshops, and collaborations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Events", href: "#events" },
                { label: "Team", href: "#team" },
                { label: "Gallery", href: "#gallery" },
                { label: "Sponsors", href: "#sponsors" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-primary">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@tesseract.tech" className="hover:text-primary transition-colors">
                  hello@tesseract.tech
                </a>
              </li>
              <li className="text-foreground/70">+1 (555) 012-3456</li>
              <li className="text-foreground/70">123 Innovation Dr, SF, CA</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-primary">Follow Us</h4>
          <div className="flex items-center gap-2.5">
            <Social href="#" ariaLabel="Twitter"><Twitter className="h-5 w-5"/></Social>
            <Social href="#" ariaLabel="Instagram"><Instagram className="h-5 w-5"/></Social>
            <Social href="#" ariaLabel="GitHub"><Github className="h-5 w-5"/></Social>
            <Social href="#" ariaLabel="Email"><Mail className="h-5 w-5"/></Social>
          </div>
        </div>
      </div>
      <div className="border-t py-2 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Tesseract. All rights reserved.
      </div>
    </footer>
  );
}

function Social({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center h-9 w-9 rounded-full border bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
    >
      {children}
    </a>
  );
}

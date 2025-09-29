"use client";

import React from "react";

const InstagramIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <circle cx="6.5" cy="8" r="1" />
    <path d="M6.5 11v6" />
    <path d="M10 11v6" />
    <path d="M10 13.5c0-1 1-2 2.5-2 1.5 0 2.5 1 2.5 2.5V17" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.42-1.39c1.37.71 2.92 1.12 4.58 1.12h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.26c-1.5 0-2.93-.4-4.2-1.12l-.3-.18-3.12.8.82-3.05-.2-.32a8.38 8.38 0 01-1.28-4.49c0-4.6 3.73-8.33 8.33-8.33s8.33 3.73 8.33 8.33-3.74 8.33-8.33 8.33zm4.51-6.15c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.98s-.29.17-.54.06c-.25-.12-1.06-.39-2.02-1.25s-1.46-1.92-1.63-2.24c-.17-.32-.02-.49.11-.62s.25-.29.37-.44c.12-.14.17-.25.25-.41s.12-.3-.06-.54c-.19-.25-.56-1.35-.76-1.84s-.4-.41-.56-.41h-.54c-.17 0-.44.06-.68.3s-.91.89-.91 2.18.93 2.53 1.06 2.71c.12.17 1.83 2.81 4.45 3.92.63.26 1.12.42 1.51.53.59.18 1.13.15 1.55.09.47-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18s-.25-.12-.5-.24z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-black text-gray-300 px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-6 md:pb-8"
      aria-labelledby="footer-heading"
    >
      <style>{`
        .glitch-wrapper { position: relative; cursor: pointer; }
        .glitch { position: relative; font-weight: 900; color: #f9fafb; letter-spacing: 0.08em; transition: 0.25s ease; }
        .glitch-wrapper:hover .glitch::before, 
        .glitch-wrapper:hover .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .glitch-wrapper:hover .glitch::before { left: 2px; text-shadow: -2px 0 #ff00c1; animation: g1 1.8s infinite linear alternate-reverse; }
        .glitch-wrapper:hover .glitch::after { left: -2px; text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1; animation: g2 1.8s infinite linear alternate-reverse; }
        @keyframes g1 { 0%{clip-path: inset(10% 0 80% 0);}50%{clip-path: inset(60% 0 10% 0);}100%{clip-path: inset(20% 0 70% 0);} }
        @keyframes g2 { 0%{clip-path: inset(60% 0 20% 0);}50%{clip-path: inset(10% 0 80% 0);}100%{clip-path: inset(80% 0 5% 0);} }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
            Join the Tesseract
            <br className="hidden sm:block" />
            Revolution!
          </h1>
          <p className="max-w-3xl mx-auto md:mx-0 text-gray-400 text-base sm:text-lg">
            Join us at Tesseract XI for cutting-edge innovations, exciting
            competitions, and a glimpse into the future of technology.
          </p>
        </div>

        {/* Logo + Nav + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Interactive Logo */}
          <div className="glitch-wrapper" title="Tesseract XI">
            <div
              className="glitch text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              data-text="TESSERACT XI"
            >
              TESSERACT XI
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="hidden md:block">
            <ul className="flex gap-6 text-sm lg:text-base">
              {["HOME", "ABOUT", "EVENTS", "GALLERY", "TEAM"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <hr className="border-gray-800" />

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mb-2">
          <p>
            Built by the 2025 tech team of SnT (Science And Technical Committee)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

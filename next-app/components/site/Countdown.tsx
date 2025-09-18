"use client";
import { useEffect, useMemo, useState } from "react";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

function getTimeParts(diffMs: number) {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function Countdown({ targetDate, className }: { targetDate: Date | string; className?: string }) {
  const target = useMemo(() => (typeof targetDate === "string" ? new Date(targetDate) : targetDate), [targetDate]);
  const [now, setNow] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = now ? target.getTime() - now.getTime() : 0;
  const { days, hours, minutes, seconds } = getTimeParts(diff);
  const closed = now ? diff <= 0 : false;

  return (
    <div className={cn("mx-auto w-full max-w-5xl", className)}>
      <div className="rounded-3xl border bg-card/80 shadow-xl backdrop-blur p-6 md:p-10">
        <h3 className="font-tech text-center text-3xl md:text-4xl font-bold text-primary">Registration Deadline</h3>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <TimeBox label="Days" value={mounted ? days : 0} />
          <TimeBox label="Hours" value={mounted ? hours : 0} />
          <TimeBox label="Minutes" value={mounted ? minutes : 0} />
          <TimeBox label="Seconds" value={mounted ? seconds : 0} />
        </div>

        <div className="mt-8 grid place-items-center">
          <a href="#events" className="w-full md:w-auto">
            <button
              className="font-tech group relative inline-flex items-center justify-center w-full md:w-auto rounded-full px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_25px_-10px_rgba(0,0,0,0.35)] transition-all focus:outline-none ring-1 ring-primary/30 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.45)]"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--secondary)) 100%)", color: "white" }}
            >
              <Rocket className="mr-2 h-5 w-5 opacity-90 transition-transform group-hover:-translate-y-0.5" />
              {mounted && closed ? "Registration Closed" : "Register Now – Free Entry"}
            </button>
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-foreground/70">Limited seats available. Secure your spot in the future of technology.</p>
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="rounded-2xl border bg-secondary/40 p-5 text-center">
      <div className="font-tech text-3xl md:text-4xl font-extrabold text-primary tracking-wide">{v}</div>
      <div className="font-tech mt-1 text-xs md:text-sm uppercase tracking-wider text-foreground/70">{label}</div>
    </div>
  );
}

export default Countdown;

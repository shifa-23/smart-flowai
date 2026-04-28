import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "How it Works", href: "#how", id: "how" },
  { label: "Why Us", href: "#why", id: "why" },
  { label: "Demos", href: "#portfolio", id: "portfolio" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-content px-6 md:px-10 py-4">
        <div
          className={cn(
            "rounded-xl border border-border flex items-center justify-between px-5 py-3 transition-medium",
            scrolled ? "bg-white/85 backdrop-blur-xl shadow-card" : "bg-white/70 backdrop-blur-md shadow-sm"
          )}
        >
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-foreground transition-fast hover:opacity-90">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary shadow-glow-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            SkillYug Lab
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative transition-fast",
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-primary transition-medium",
                    active === l.id ? "w-full opacity-100" : "w-0 opacity-0"
                  )}
                />
              </a>
            ))}
          </nav>
          <Button variant="hero" size="sm" className="btn-press" asChild>
            <a href="#cta">Book a Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

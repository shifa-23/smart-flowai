import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Why Us", href: "/why-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Demos", href: "/demos" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = location.pathname;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-content px-6 md:px-10 py-4">
        <div
          className={cn(
            "rounded-2xl shadow-lg border border-border flex items-center justify-between px-6 py-2 transition-medium",
            scrolled ? "bg-white/85 backdrop-blur-xl shadow-card" : "bg-white/70 backdrop-blur-md shadow-sm"
          )}
        >
          <Link
            to="/"
            className="flex items-center gap-3 transition-fast hover:opacity-90"
          >
            
            <div className="flex flex-col leading-none items-center">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap">
                <span className="text-primary">SKILL</span>
                <span className="text-[#0B1C3F]">YUG</span>
              </span>

              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500">
                  TECHNOLOGIES
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={cn(
                  "relative transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-1 px-0.5",
                  active === l.href ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}

                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-primary transition-medium",
                    active === l.href ? "w-full opacity-100" : "w-0 opacity-0"
                  )}
                />
              </Link>
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

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "How it Works", href: "#how", id: "how" },
  { label: "Why Us", href: "#why", id: "why" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Team", href: "#team", id: "team" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-content px-6 md:px-10 py-4">
        <div
          className={cn(
            "rounded-2xl border border-border flex items-center justify-between px-6 py-3 transition-all duration-300",
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-lg"
              : "bg-white/75 backdrop-blur-md shadow-sm"
          )}
        >
          {/* Logo */}
          <a
  href="#home"
  className="flex items-center gap-3 transition-fast hover:opacity-90"
>
  <img
    src={logo}
    alt="SkillYug Technologies"
    className="h-12 md:h-14 w-auto object-contain"
  />

  <div className="hidden sm:block">
    <h1 className="font-bold text-lg md:text-xl text-slate-900 leading-tight">
      SkillYug Technologies
    </h1>

    <p className="text-xs text-slate-500 tracking-wide">
      Your Vision Engineered
    </p>
  </div>
</a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "relative transition-all duration-300",
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300",
                    active === link.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  )}
                />
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <Button
            variant="hero"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/12RdL1PB6xmfXQOTf6tjx4T1xmJNZPZKv5pBIudeYnyQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
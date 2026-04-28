import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how" },
  { label: "Why Us", href: "#why" },
  { label: "Demos", href: "#portfolio" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-2xl flex items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary shadow-glow-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            SkillYug Lab
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="#cta">Book a Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

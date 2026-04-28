import { Sparkles, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary shadow-glow-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              SkillYug Lab
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Smart AI systems that save time, reduce costs, and scale your operations.
            </p>
            <a href="mailto:hello@skillyuglab.com" className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" /> hello@skillyuglab.com
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Home", "Services", "Demos", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-foreground hover:after:w-full after:transition-all">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["AI Automation", "Chatbots", "Workflows", "Web Apps"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SkillYug Lab. All rights reserved.</p>
          <p>Built with care · Premium AI automation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

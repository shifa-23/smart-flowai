import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-muted border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="SkillYug Technology logo"
                className="h-12 w-auto"
              />
            </div>

            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Smart AI systems that save time, reduce costs, and scale your
              operations.
            </p>

            <a
              href="mailto:consultantskillyug@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              consultantskillyug@gmail.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Home", "Services", "Demos", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-foreground after:content-[''] hover:after:w-full after:transition-all"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">
              Solutions
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {["AI Automation", "Chatbots", "Workflows", "Web Apps"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#services"
                      className="hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SkillYug Technologies. All rights
            reserved.
          </p>
          <p>Built with care · Premium AI automation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
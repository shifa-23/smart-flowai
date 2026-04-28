import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageSquare, GitBranch, LayoutDashboard } from "lucide-react";
import Reveal from "./Reveal";

const demos = [
  { icon: MessageSquare, tag: "Chatbot", title: "Lead-qualifying assistant", desc: "A 24/7 chatbot that captures, qualifies, and books leads automatically." },
  { icon: GitBranch, tag: "Workflow", title: "Sales pipeline automation", desc: "Auto-sync data across CRM, email, and Slack with zero manual effort." },
  { icon: LayoutDashboard, tag: "Web App", title: "AI-powered dashboard", desc: "Real-time insights and AI suggestions baked into a beautiful UI." },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20 md:py-24 bg-muted">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary mb-3">Demos & portfolio</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Recent <span className="text-gradient">automations</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A look at systems we've shipped — chatbots, automated workflows, and intelligent web apps.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {demos.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <article className="group relative h-full rounded-xl bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/30 card-lift">
                <div className="relative h-44 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow-primary transition-medium group-hover:scale-110 group-hover:rotate-3">
                      <d.icon className="h-9 w-9 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/90 border border-border text-foreground">
                    {d.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{d.desc}</p>
                  <Button variant="glass" size="sm" className="btn-press group/btn">
                    View Demo
                    <ArrowUpRight className="ml-1 transition-fast group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

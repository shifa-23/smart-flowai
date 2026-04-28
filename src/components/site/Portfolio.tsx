import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageSquare, GitBranch, LayoutDashboard } from "lucide-react";

const demos = [
  { icon: MessageSquare, tag: "Chatbot", title: "Lead-qualifying assistant", desc: "A 24/7 chatbot that captures, qualifies, and books leads automatically." },
  { icon: GitBranch, tag: "Workflow", title: "Sales pipeline automation", desc: "Auto-sync data across CRM, email, and Slack with zero manual effort." },
  { icon: LayoutDashboard, tag: "Web App", title: "AI-powered dashboard", desc: "Real-time insights and AI suggestions baked into a beautiful UI." },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-medium text-primary mb-3">Demos & portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Recent <span className="text-gradient">automations</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A look at systems we've shipped — chatbots, automated workflows, and intelligent web apps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((d) => (
            <article key={d.title} className="group relative glass rounded-2xl overflow-hidden transition-smooth hover:-translate-y-2 hover:shadow-glow-secondary">
              <div className="relative h-48 bg-gradient-cta overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow-primary group-hover:scale-110 transition-transform">
                    <d.icon className="h-9 w-9 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full glass">{d.tag}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{d.desc}</p>
                <Button variant="glass" size="sm">View Demo <ArrowUpRight className="ml-1" /></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

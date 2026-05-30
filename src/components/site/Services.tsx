import { Bot, Workflow, Cpu, Globe } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Cpu, title: "AI Automation", desc: "Custom AI agents that handle repetitive tasks across your business." },
  { icon: Bot, title: "AI Chatbots", desc: "Conversational assistants that engage customers and qualify leads 24/7." },
  { icon: Workflow, title: "Workflow Automation", desc: "Connect your tools and automate entire pipelines end-to-end." },
  { icon: Globe, title: "Web Solutions", desc: "Modern, fast websites and apps wired with intelligent automations." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary mb-3">What we build</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Solutions that <span className="text-gradient">work for you</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Focused, lightweight, and built to scale — pick what fits your business.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative h-full rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 card-lift">
                <div className="h-12 w-12 rounded-lg grid place-items-center bg-gradient-primary shadow-glow-primary mb-5 transition-medium group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

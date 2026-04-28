import { Bot, Workflow, Cpu, Globe } from "lucide-react";

const services = [
  { icon: Cpu, title: "AI Automation", desc: "Custom AI agents that handle repetitive tasks across your business." },
  { icon: Bot, title: "AI Chatbots", desc: "Conversational assistants that engage customers and qualify leads 24/7." },
  { icon: Workflow, title: "Workflow Automation", desc: "Connect your tools and automate entire pipelines end-to-end." },
  { icon: Globe, title: "Web Solutions", desc: "Modern, fast websites and apps wired with intelligent automations." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3">What we build</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Solutions that <span className="text-gradient">work for you</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Focused, lightweight, and built to scale — pick what fits your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative glass rounded-2xl p-7 transition-smooth hover:-translate-y-2 hover:shadow-glow-primary">
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-primary shadow-glow-primary mb-5">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

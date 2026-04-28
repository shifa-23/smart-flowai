import { Check } from "lucide-react";
import illus from "@/assets/why-choose.png";
import Reveal from "./Reveal";

const points = [
  { title: "Fast Delivery", desc: "Working systems shipped in weeks, not months." },
  { title: "Cost Effective", desc: "Lean automations that pay for themselves quickly." },
  { title: "Scalable Systems", desc: "Built to grow with your traffic and team." },
  { title: "Global Clients", desc: "Trusted by founders and teams across the world." },
];

const WhyChoose = () => {
  return (
    <section id="why" className="relative py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <p className="text-sm font-medium text-primary mb-3">Why SkillYug Lab</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Premium automation, <br /><span className="text-gradient">startup-friendly</span> pricing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
              We blend enterprise-grade engineering with the speed and clarity of a startup partner.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-5">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="flex gap-4 group">
                  <span className="mt-1 h-7 w-7 grid place-items-center rounded-md bg-gradient-primary shadow-glow-primary shrink-0 transition-medium group-hover:scale-110 group-hover:rotate-6">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150} y={32} duration={600}>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-primary blur-3xl opacity-15 rounded-full" />
            <div className="relative rounded-2xl bg-gradient-to-br from-muted to-white border border-border p-6 shadow-card animate-float-slow transition-medium hover:shadow-card-hover">
              <img src={illus} alt="AI automation specialist illustration" width={1024} height={1024} loading="lazy" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyChoose;

import { Check } from "lucide-react";
import illus from "@/assets/why-choose.png";

const points = [
  { title: "Fast Delivery", desc: "Working systems shipped in weeks, not months." },
  { title: "Cost Effective", desc: "Lean automations that pay for themselves quickly." },
  { title: "Scalable Systems", desc: "Built to grow with your traffic and team." },
  { title: "Global Clients", desc: "Trusted by founders and teams across the world." },
];

const WhyChoose = () => {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-medium text-primary mb-3">Why SkillYug Lab</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Premium automation, <br /><span className="text-gradient">startup-friendly</span> pricing
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            We blend enterprise-grade engineering with the speed and clarity of a startup partner.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4 group">
                <span className="mt-1 h-7 w-7 grid place-items-center rounded-lg bg-gradient-primary shadow-glow-primary shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </span>
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative glass rounded-3xl p-6 animate-float-slow">
            <img src={illus} alt="AI automation specialist illustration" width={1024} height={1024} loading="lazy" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

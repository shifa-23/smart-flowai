import { Lightbulb, ClipboardList, Hammer, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: Lightbulb, title: "Understand", desc: "We dive into your workflows and goals." },
  { icon: ClipboardList, title: "Plan", desc: "We design a clear, lightweight automation roadmap." },
  { icon: Hammer, title: "Build", desc: "We ship intelligent systems quickly and reliably." },
  { icon: TrendingUp, title: "Scale", desc: "We refine and grow with your business." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20 md:py-24 bg-muted overflow-hidden">
      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            From idea to <span className="text-gradient">automation</span>
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative group text-center">
                <div className="relative mx-auto h-20 w-20 grid place-items-center rounded-2xl bg-white border border-border shadow-card group-hover:shadow-glow-primary group-hover:-translate-y-1 transition-medium">
                  <s.icon className="h-7 w-7 text-primary transition-medium group-hover:scale-110" />
                  <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-primary text-xs font-bold grid place-items-center text-primary-foreground shadow-glow-primary">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-[220px] mx-auto leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

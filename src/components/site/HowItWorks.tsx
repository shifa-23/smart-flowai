import { Lightbulb, ClipboardList, Hammer, TrendingUp } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Understand", desc: "We dive into your workflows and goals." },
  { icon: ClipboardList, title: "Plan", desc: "We design a clear, lightweight automation roadmap." },
  { icon: Hammer, title: "Build", desc: "We ship intelligent systems quickly and reliably." },
  { icon: TrendingUp, title: "Scale", desc: "We refine and grow with your business." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-28 overflow-hidden">
      <div className="glow-blob h-[400px] w-[400px] top-20 left-1/2 -translate-x-1/2 bg-secondary/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            From idea to <span className="text-gradient">automation</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative group text-center">
              <div className="relative mx-auto h-20 w-20 grid place-items-center rounded-2xl glass shadow-card group-hover:shadow-glow-primary transition-smooth">
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                <s.icon className="h-7 w-7 text-primary-glow relative" style={{ color: "hsl(var(--primary-glow))" }} />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-primary text-xs font-bold grid place-items-center text-primary-foreground shadow-glow-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-[220px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

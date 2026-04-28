import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import dashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="glow-blob h-[500px] w-[500px] -top-32 -left-32 bg-primary/40 animate-glow" />
      <div className="glow-blob h-[600px] w-[600px] top-20 -right-40 bg-secondary/40 animate-glow" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            AI Automation for modern businesses
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Automate Your <br />
            Business with <span className="text-gradient">AI</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            We build smart systems that save time, reduce costs, and scale your operations — chatbots, workflows, and tailored AI solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#cta">Get Started <ArrowRight className="ml-1" /></a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#cta"><PhoneCall className="mr-1" /> Book a Call</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="text-foreground font-bold text-2xl">120+</div><div>Projects shipped</div></div>
            <div className="h-10 w-px bg-border" />
            <div><div className="text-foreground font-bold text-2xl">40%</div><div>Avg. cost saved</div></div>
            <div className="h-10 w-px bg-border" />
            <div><div className="text-foreground font-bold text-2xl">24/7</div><div>AI working</div></div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative glass rounded-3xl p-3 shadow-elegant">
            <img src={dashboard} alt="AI automation dashboard preview" width={1280} height={960} className="rounded-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import dashboard from "@/assets/hero-dashboard.png";
import Reveal from "./Reveal";
import Counter from "./Counter";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-hero">
      <div className="glow-blob h-[480px] w-[480px] -top-32 -left-32 bg-primary/30 animate-float-slow" />
      <div className="glow-blob h-[520px] w-[520px] top-20 -right-40 bg-secondary/25 animate-float" />

      <div className="relative mx-auto max-w-content px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs text-muted-foreground mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              AI Automation for modern businesses
            </div>
          </Reveal>
          <Reveal delay={100} as="h1" className="font-display text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
            Automate Your <br />
            Business with <span className="text-gradient">AI</span>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build smart systems that save time, reduce costs, and scale your operations — chatbots, workflows, and tailored AI solutions.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" className="btn-press" asChild>
                <a href="#cta">Get Started <ArrowRight className="ml-1" /></a>
              </Button>
              <Button variant="glass" size="lg" className="btn-press" asChild>
                <a href="#cta"><PhoneCall className="mr-1" /> Book a Call</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-6 md:gap-8 text-sm text-muted-foreground">
              <div>
                <div className="text-foreground font-bold text-2xl"><Counter to={120} suffix="+" /></div>
                <div>Projects shipped</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-foreground font-bold text-2xl"><Counter to={40} suffix="%" /></div>
                <div>Avg. cost saved</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-foreground font-bold text-2xl">24/7</div>
                <div>AI working</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} y={32} duration={600}>
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
            <div className="relative rounded-2xl bg-white border border-border p-2 shadow-elegant transition-medium hover:shadow-glow-primary">
              <img src={dashboard} alt="AI automation dashboard preview" width={1280} height={960} className="rounded-xl w-full h-auto" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;

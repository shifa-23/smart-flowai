import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboard from "@/assets/hero-dashboard.png";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-hero">
      <div className="glow-blob h-[480px] w-[480px] -top-32 -left-32 bg-primary/30 animate-float-slow" />
      <div className="glow-blob h-[520px] w-[520px] top-20 -right-40 bg-secondary/25 animate-float" />

      <div className="relative mx-auto max-w-content px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs text-muted-foreground mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              AI Automation & Software Development
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
              Build Smarter
              <br />
              Solutions with <span className="text-gradient">SkillYug</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help businesses automate workflows, build custom software,
              develop AI-powered solutions, and create digital products that
              drive growth and efficiency.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative">
            <div className="relative rounded-2xl bg-white border border-border p-2 shadow-elegant">
              <img
                src={dashboard}
                alt="SkillYug Technologies Dashboard"
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
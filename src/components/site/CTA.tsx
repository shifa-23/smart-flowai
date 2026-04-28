import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative glass rounded-3xl p-12 md:p-20 overflow-hidden text-center">
          <div className="glow-blob h-[400px] w-[400px] -top-20 -left-20 bg-primary/50 animate-glow" />
          <div className="glow-blob h-[400px] w-[400px] -bottom-20 -right-20 bg-secondary/50 animate-glow" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Ready to <span className="text-gradient">automate</span> <br className="hidden md:block" /> your business?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Book a free 30-minute consultation. We'll map out automations that move the needle — no fluff, no obligation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="animate-pulse-glow">
                Book a Free Consultation <ArrowRight className="ml-1" />
              </Button>
              <Button variant="glass" size="lg">See Pricing</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

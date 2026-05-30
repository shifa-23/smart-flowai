import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const CTA = () => {
  return (
    <section id="cta" className="relative py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal y={32} duration={600}>
          <div className="relative rounded-2xl bg-gradient-cta p-12 md:p-20 overflow-hidden text-center shadow-elegant">
            <div className="glow-blob h-[400px] w-[400px] -top-24 -left-24 bg-white/30 animate-float-slow" />
            <div className="glow-blob h-[400px] w-[400px] -bottom-24 -right-24 bg-white/20 animate-float" />
            <div className="absolute inset-0 grid-bg opacity-10" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-primary-foreground">
                Ready to automate <br className="hidden md:block" /> your business?
              </h2>
              <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
                Book a free 30-minute consultation. We'll map out automations that move the needle — no fluff, no obligation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/95 hover:scale-[1.03] shadow-elegant btn-press transition-medium">
                  Book a Free Consultation <ArrowRight className="ml-1" />
                </Button>
                <Button size="lg" className="bg-transparent text-primary-foreground border border-white/40 hover:bg-white/10 btn-press transition-medium">
                  See Pricing
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;

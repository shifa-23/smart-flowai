import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
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
                Ready to automate <br className="hidden md:block" />
                your business?
              </h2>

              <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
                Let's discuss your business requirements and build the right automation solutions together.
              </p>

              {/* Contact Info */}
              <div className="mt-6 flex flex-col items-center gap-2 text-primary-foreground">
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>consultantskillyug@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>9450935939</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/95 hover:scale-[1.03] shadow-elegant btn-press btn-animated transition-medium"
                  asChild
                >
                  <a
                    href="https://docs.google.com/forms/d/12RdL1PB6xmfXQOTf6tjx4T1xmJNZPZKv5pBIudeYnyQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                    <ArrowRight className="ml-1" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="bg-transparent text-primary-foreground border border-white/40 hover:bg-white/10 btn-press transition-medium"
                  asChild
                >
                  <a href="#portfolio">
                    View Portfolio
                  </a>
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

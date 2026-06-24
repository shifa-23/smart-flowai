import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const Home = () => {
  return (
    <section className="relative py-32 md:py-40 bg-background overflow-hidden">
      {/* Background blobs */}
      <div className="glow-blob h-[480px] w-[480px] -top-32 -left-32 bg-primary/20 animate-float-slow" />
      <div className="glow-blob h-[520px] w-[520px] top-20 -right-40 bg-secondary/15 animate-float" />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <Reveal delay={100}>
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
                Your Vision <span className="text-gradient">Engineered</span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Transform your business with cutting-edge AI automation, custom software development, and digital marketing solutions that drive real growth.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#services">
                  Explore Our Services
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Home;

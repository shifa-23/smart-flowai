import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import WhyChoose from "@/components/site/WhyChoose";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const valueCards = [
  {
    icon: Zap,
    title: "Uncompromised Speed",
    desc: "We leverage cutting-edge frameworks like Vite, React, and Tailwind CSS to guarantee lightning-fast load times, maximizing conversion rates and search rankings."
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "From encrypted databases to strict CORS policies and roles-based API authorization, security is baked into our solutions from day one."
  },
  {
    icon: Sparkles,
    title: "Bespoke Engineering",
    desc: "We don't do cookie-cutter templates. Every layout, route structure, and database model is built specifically for your product goals."
  }
];

const WhyUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuroraBackground className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-24 md:pt-32 z-10 relative">
        {/* Page Hero */}
        <div className="relative py-12 md:py-20 bg-muted/30">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 text-center relative z-10">
            <Reveal>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Why Skillyug</p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Designed for <span className="text-gradient">Performance</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                We bridge the gap between high-end software engineering and cost-effective delivery timelines for modern businesses.
              </p>
            </Reveal>
          </div>
        </div>

        {/* WhyChoose core points block */}
        <WhyChoose />

        {/* Extra value cards section */}
        <section className="py-16 bg-muted/0 relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 relative z-10">
            <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                Our Core Engineering Values
              </h2>
              <p className="text-muted-foreground mt-3 text-sm">
                We focus on writing maintainable, clean code that provides immediate and long-term business value.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {valueCards.map((vc, i) => (
                <Reveal key={vc.title} delay={i * 100}>
                  <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <vc.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-3">{vc.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{vc.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default WhyUsPage;

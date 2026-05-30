import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustedStrip from "@/components/site/TrustedStrip";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, LayoutDashboard, Dumbbell, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AuroraBackground id="content" className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div id="main" className="scroll-mt-[110px]">
        <Hero />
        <TrustedStrip />

        {/* Services & Capabilities Teaser Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Our Core Expertise</p>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
                    We Build Scalable, Secure <span className="text-gradient">Digital Solutions</span>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    From bespoke web applications and high-performance admin dashboards to responsive mobile apps and CRM analytics reporting, we deliver premium technical execution tailored directly to your business goals.
                  </p>
                  <Button variant="hero" className="btn-press group" asChild>
                    <Link to="/services">
                      Explore All 9 Services
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Reveal>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Laptop,
                    title: "Web App Development",
                    desc: "Custom fullstack applications engineered with modern, lightning-fast React and TypeScript frameworks."
                  },
                  {
                    icon: LayoutDashboard,
                    title: "Admin Dashboards",
                    desc: "Secure, central control systems tailored to manage your clinics, gyms, products, or daily operations."
                  }
                ].map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 100}>
                    <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-card transition-all duration-300 card-lift">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Live Client Demos Teaser Section */}
        <section className="py-20 bg-muted/40 relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 relative z-10 text-center">
            <Reveal as="div" className="max-w-2xl mx-auto mb-12">
              <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Live Deployments</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                Inspect Our <span className="text-gradient">Real-World Projects</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                We believe in complete transparency. Interact with our live client system deployments, hospital panels, and fitness applications to see our quality standards firsthand.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {[
                "Gym & Fitness Website",
                "Hospital Management Panel",
                "Fitness Web Application"
              ].map((name, i) => (
                <Reveal key={name} delay={i * 80}>
                  <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-foreground text-left">{name}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="inline-flex flex-wrap gap-4 justify-center">
                <Button variant="hero" className="btn-press group" asChild>
                  <Link to="/demos">
                    Launch Interactive Demos
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" className="btn-press" asChild>
                  <Link to="/how-it-works">Our Working Process</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
        <Footer />

        {/* Sticky mobile CTA */}
        <div
          className={cn(
            "md:hidden fixed bottom-4 inset-x-4 z-40 transition-medium safe-bottom",
            showSticky ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
          )}
        >
          <Button variant="hero" size="lg" className="w-full btn-press shadow-elegant" asChild>
            <a href="#cta" aria-label="Book a call (jump to CTA)"><Sparkles className="mr-1" /> Book a Call</a>
          </Button>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Index;


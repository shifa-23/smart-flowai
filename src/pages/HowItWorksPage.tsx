import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import HowItWorks from "@/components/site/HowItWorks";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import { ArrowRight, Lightbulb, ClipboardList, Hammer, TrendingUp } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const details = [
  {
    icon: Lightbulb,
    title: "1. Understand & Scope",
    desc: "We schedule an initial alignment call to understand your core operational bottlenecks, target objectives, and tech stack constraints. We map your offline or manual processes so we can redesign them with optimal efficiency."
  },
  {
    icon: ClipboardList,
    title: "2. Strategic Planning",
    desc: "Our engineers formulate a technical architecture and feature roadmap. We deliver a clear scope of work showing how the solution fits together, complete with milestone estimates and concrete delivery timelines."
  },
  {
    icon: Hammer,
    title: "3. Rapid Custom Build",
    desc: "We write clean, high-performance TypeScript and React code, configure database and API structures, and set up secure deployment pipelines. You receive regular staging preview URLs to test and monitor progress."
  },
  {
    icon: TrendingUp,
    title: "4. Deployment & Handover",
    desc: "We deploy the application to premium global cloud providers, verify load times and security layers, and provide user manuals. We offer ongoing maintenance checkpoints to refine interfaces and scale capabilities."
  }
];

const HowItWorksPage = () => {
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
              <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Our Process</p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                How We <span className="text-gradient">Deliver Quality</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                A simple, transparent, and structured engineering journey from initial strategy down to ultimate product deployment.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Step-by-step roadmap */}
        <HowItWorks />

        {/* Deep Dive details */}
        <section className="py-16 bg-background/0">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                A Closer Look at Our Collaboration
              </h2>
              <p className="text-muted-foreground mt-3 text-sm">
                Here's what you can expect during each phase of working with Skillyug Technologies.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {details.map((d, i) => (
                <Reveal key={d.title} delay={i * 100}>
                  <div className="bg-card/90 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm hover:shadow-card hover:border-primary/20 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mb-2">{d.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
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

export default HowItWorksPage;

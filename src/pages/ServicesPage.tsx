import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import SkillyugProjectCatalog from "@/components/site/SkillyugProjectCatalog";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuroraBackground className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-24 md:pt-32 z-10 relative">
        {/* Custom banner/hero for the page */}
        <div className="relative py-12 md:py-20 bg-muted/30">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 text-center relative z-10">
            <Reveal>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Our Offerings</p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Services & <span className="text-gradient">Capabilities</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Discover the digital products, frameworks, and custom systems we design and engineer to help your business scale.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Custom Services components */}
        <SkillyugProjectCatalog />
        
        <CTA />
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default ServicesPage;

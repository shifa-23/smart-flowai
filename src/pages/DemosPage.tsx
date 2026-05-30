import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Portfolio from "@/components/site/Portfolio";
import SkillyugProjectCatalog from "@/components/site/SkillyugProjectCatalog";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";

const DemosPage = () => {
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
              <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Interactive Portfolio</p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Client Demo <span className="text-gradient">Catalog</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Explore real, working deployments showcasing the application responsiveness, clean styling, and code quality we deliver.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Portfolio component - containing the 3 live demo cards */}
        <Portfolio />

        {/* Catalog details (Overview, Client Use, Highlights) */}
        <SkillyugProjectCatalog />

        <CTA />
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default DemosPage;

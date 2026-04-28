import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustedStrip from "@/components/site/TrustedStrip";
import Services from "@/components/site/Services";
import HowItWorks from "@/components/site/HowItWorks";
import WhyChoose from "@/components/site/WhyChoose";
import Portfolio from "@/components/site/Portfolio";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedStrip />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Portfolio />
      <CTA />
      <Footer />

      {/* Sticky mobile CTA */}
      <div
        className={cn(
          "md:hidden fixed bottom-4 inset-x-4 z-40 transition-medium",
          showSticky ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        )}
      >
        <Button variant="hero" size="lg" className="w-full btn-press shadow-elegant" asChild>
          <a href="#cta"><PhoneCall className="mr-1" /> Book a Call</a>
        </Button>
      </div>
    </main>
  );
};

export default Index;

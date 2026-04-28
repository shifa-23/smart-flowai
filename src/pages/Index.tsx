import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustedStrip from "@/components/site/TrustedStrip";
import Services from "@/components/site/Services";
import HowItWorks from "@/components/site/HowItWorks";
import WhyChoose from "@/components/site/WhyChoose";
import Portfolio from "@/components/site/Portfolio";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-hero overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedStrip />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

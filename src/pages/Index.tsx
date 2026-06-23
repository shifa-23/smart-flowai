import Navbar from "@/components/site/Navbar";
import Home from "@/components/site/Home";
import Hero from "@/components/site/Hero";
import TrustedStrip from "@/components/site/TrustedStrip";
import Services from "@/components/site/Services";
import Automations from "@/components/site/Automations";
import HowItWorks from "@/components/site/HowItWorks";
import WhyChoose from "@/components/site/WhyChoose";
import Portfolio from "@/components/site/Portfolio";
import Team from "@/components/site/Team";
import Contact from "@/components/site/Contact";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedStrip />
      <Services />
      <Automations />
      <HowItWorks />
      <WhyChoose />
      <Portfolio />
      <Team />
      <Contact />
      <CTA />
      <Home />
      <Footer />
    </main>
  );
};

export default Index;
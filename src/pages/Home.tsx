import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import HowItWorks from "@/components/site/HowItWorks";
import WhyUs from "@/components/site/WhyUs";
import Portfolio from "@/components/site/Portfolio";
import Team from "@/components/site/Team";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Portfolio />
        <Team />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

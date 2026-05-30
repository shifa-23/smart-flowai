import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import Reveal from "@/components/site/Reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import pfp from "@/assets/pfp.jpg";

const members = [
  {
    name: "Vatsal Varshney",
    role: "Founder / Engineer",
    photoUrl: pfp,
  },
];

const OurTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuroraBackground className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-24 md:pt-32 z-10 relative">
        <div className="relative py-12 md:py-20 bg-muted/30">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 text-center relative z-10">
            <Reveal>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
                Our Team
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Dedication to clean architecture, reliable delivery, and performance-first engineering.
              </p>
            </Reveal>
          </div>
        </div>

        <section className="py-16 bg-background/40 relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="mx-auto max-w-content px-6 md:px-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {members.map((m, idx) => (
                <Reveal key={m.name} delay={idx * 120}>
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <img
                          src={m.photoUrl}
                          alt={m.name}
                          className="h-20 w-20 rounded-2xl object-cover border border-border"
                        />
                      </div>

                      <div className="min-w-0">
                        <h2 className="font-display font-extrabold text-xl text-foreground">
                          {m.name}
                        </h2>
                        <p className="text-sm text-primary font-semibold mt-1">
                          {m.role}
                        </p>

                        <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
                          Passion for full-stack development, scalable systems, and
                          turning product requirements into robust software.
                        </div>
                      </div>
                    </div>
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

export default OurTeamPage;

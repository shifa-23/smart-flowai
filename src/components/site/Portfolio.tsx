import { Button } from "@/components/ui/button";
import { ArrowUpRight, Dumbbell, HeartPulse, Sparkles, CheckCircle2, Users } from "lucide-react";
import Reveal from "./Reveal";

const demos = [
  {
    icon: Dumbbell,
    tag: "Gym & Fitness Portal",
    title: "Gym & Fitness Website",
    desc: "A modern and responsive website designed for fitness centers, gyms, and personal trainers. The platform focuses on visual appeal, performance, and user engagement.",
    url: "https://elevate-fitness-tawny.vercel.app/",
    features: [
      "Fully responsive layout (desktop, tablet, mobile)",
      "Modern and clean user interface",
      "Trainer & workout program showcase",
      "Membership plans section",
      "Contact and inquiry functionality",
      "Fast loading & optimized performance"
    ],
    idealFor: ["Gym Owners", "Fitness Centers", "Personal Trainers", "Wellness Brands"],
    gradient: "from-blue-500/10 via-indigo-500/10 to-transparent",
    iconBg: "bg-blue-600"
  },
  {
    icon: HeartPulse,
    tag: "HMS & Admin Panel",
    title: "Hospital Management System",
    desc: "A comprehensive Admin Dashboard designed to streamline hospital and clinic operations through centralized management and secure data handling.",
    url: "https://admin-doc-nexus.vercel.app/",
    features: [
      "Admin dashboard with real-time insights",
      "Doctor and patient management",
      "Appointment scheduling & tracking",
      "Secure data access & role-based management",
      "Scalable system architecture"
    ],
    idealFor: ["Hospitals", "Clinics", "Healthcare Centers", "Medical Startups"],
    gradient: "from-emerald-500/10 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-600"
  },
  {
    icon: Sparkles,
    tag: "Interactive Web App",
    title: "Fitness Web Application",
    desc: "A fitness-focused web application built to support online fitness platforms and digital health services with a clean, intuitive, and engaging user experience.",
    url: "https://rfitness-wheat.vercel.app/",
    features: [
      "Clean and professional UI/UX",
      "Fitness programs & services showcase",
      "User-friendly navigation",
      "Mobile-responsive layout",
      "Performance-optimized structure"
    ],
    idealFor: ["Online Fitness Platforms", "Health Coaches", "Fitness Startups"],
    gradient: "from-purple-500/10 via-pink-500/10 to-transparent",
    iconBg: "bg-purple-600"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20 md:py-24 bg-muted/50">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="mx-auto max-w-content px-6 md:px-10 relative z-10">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Live Demos & Portfolio</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Explore Our <span className="text-gradient">Working Solutions</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Interact with our live deployments to witness our design standards, lightning-fast performance, and focus on user experience.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {demos.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <article className="group relative h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 card-lift">
                <div className={`relative h-48 bg-gradient-to-br ${d.gradient} overflow-hidden flex items-center justify-center border-b border-border/50`}>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="h-20 w-20 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <d.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-border/80 text-foreground shadow-sm">
                    {d.tag}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {d.desc}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {d.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2.5 flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-muted-foreground" />
                        Ideal For
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {d.idealFor.map((item) => (
                          <span key={item} className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/60">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full btn-press group/btn mt-auto" asChild>
                    <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1">
                      Launch Live Demo
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

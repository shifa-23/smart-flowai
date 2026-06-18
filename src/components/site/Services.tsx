import {
  Zap,
  Globe,
  Smartphone,
  TrendingUp,
  Settings,
  PenTool,
  Clapperboard,
  FileText,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Custom AI agents that automate repetitive tasks and streamline workflows.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, fast, and responsive websites built with latest technologies.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps with seamless user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Strategic digital marketing and SEO services to boost your online presence.",
  },
  {
    icon: PenTool,
    title: "Logo Designing",
    desc: "Professional logo and brand identity design that makes your business stand out.",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    desc: "High-quality promotional, social media, and corporate video editing services.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    desc: "Professional blogs, website content, captions, social media posts, and marketing copywriting.",
  },
  {
    icon: Settings,
    title: "CRM Dashboard",
    desc: "Custom CRM solutions and dashboards for efficient customer management.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-24 bg-background"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary mb-3">
            What We Do
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive solutions to accelerate your business growth and
            digital transformation.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group h-full rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all">
                <div className="h-12 w-12 rounded-lg grid place-items-center bg-gradient-primary shadow-glow-primary mb-5">
                  <service.icon className="h-5 w-5 text-primary-foreground" />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
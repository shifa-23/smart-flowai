import { Button } from "@/components/ui/button";
import {
ArrowUpRight,
Brain,
Linkedin,
Hash,
CheckCircle2,
Users,
} from "lucide-react";
import Reveal from "./Reveal";

const demos = [

{
 icon: Brain,
  tag: "AI Automated Evaluation System",
  title: "AI-Evaluate",
  desc: "An AI-powered answer sheet evaluation platform that automates copy checking, marks allocation, and performance analysis. The system evaluates student responses with speed, accuracy, and fairness while providing detailed insights for educators and institutions.",
  url: "https://ai-evaluaite-1.onrender.com/",
  features: [
    "AI-powered marks evaluation",
    "Automated answer sheet checking",
    "AI answer generation & comparison",
    "Detailed student performance analysis",
    "Interactive digital whiteboard",
    "AI-driven grading insights",
    "PPT auto-generator",
    "Instant result processing"
  ],
  idealFor: [
    "Schools & Colleges",
    "Educational Institutes",
    "Teachers & Examiners",
    "Online Learning Platforms",
    "Coaching Centers",
    "EdTech Startups"
  ],
  gradient: "from-blue-500/10 via-cyan-500/10 to-transparent",
},

{
icon: Linkedin,
tag: "AI Content Creation SaaS",
title: "PostPilot AI",
desc: "A modern AI SaaS platform that helps creators, founders, marketers, students, and professionals generate high-quality LinkedIn content, hashtags, drafts, scheduled posts, and analytics from a single dashboard.",
url: "https://my-post-ai.lovable.app",
features: [
"AI-powered LinkedIn post generation",
"Automatic hashtag generation",
"Draft management system",
"Content scheduling",
"Analytics dashboard",
"Google & Email authentication",
],
idealFor: [
"Content Creators",
"Students",
"Founders",
"Marketers",
],
gradient: "from-blue-500/10 via-indigo-500/10 to-transparent",
},

{
icon: Hash,
tag: "AI Marketing SaaS",
title: "HashBoost AI",
desc: "An AI-powered hashtag generator platform that creates optimized hashtags for LinkedIn, Instagram, TikTok, YouTube, Facebook, and X. Built to maximize engagement, reach, and social media visibility.",
url: "https://viral-tag-ai.lovable.app/",
features: [
"AI hashtag generation",
"Support for all major social platforms",
"Keyword-based suggestions",
"Image-based hashtag generation",
"Hashtag history management",
"Google Authentication",
],
idealFor: [
"Influencers",
"Content Creators",
"Digital Marketers",
"Agencies",
],
gradient: "from-purple-500/10 via-pink-500/10 to-transparent",
},
];

const Portfolio = () => {
return ( <section
   id="portfolio"
   className="relative py-20 md:py-24 bg-muted/50"
 > <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

```
  <div className="mx-auto max-w-content px-6 md:px-10 relative z-10">
    <Reveal
      as="div"
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
    >
      <div>
        <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
          Live Projects & Portfolio
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Explore Our{" "}
          <span className="text-gradient">
            AI-Powered Solutions
          </span>
        </h2>
      </div>

      <p className="text-muted-foreground max-w-md leading-relaxed">
        Explore our real-world AI applications, SaaS platforms, and
        intelligent digital products designed to solve practical
        business and user challenges.
      </p>
    </Reveal>

    <div className="grid lg:grid-cols-3 gap-8">
      {demos.map((d, i) => (
        <Reveal key={d.title} delay={i * 100}>
          <article className="group relative h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-xl hover:border-primary/30 transition-all duration-300">

            <div
              className={`relative h-48 bg-gradient-to-br ${d.gradient} overflow-hidden flex items-center justify-center border-b border-border/50`}
            >
              <div className="absolute inset-0 grid-bg opacity-20" />

              <div className="h-20 w-20 rounded-2xl bg-gradient-primary grid place-items-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <d.icon className="h-10 w-10 text-white" />
              </div>

              <div className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-background border border-border">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">
                    Key Highlights
                  </h4>

                  <ul className="space-y-2">
                    {d.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
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
                      <span
                        key={item}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                className="w-full mt-auto"
                asChild
              >
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  View Live Demo
                  <ArrowUpRight className="h-4 w-4" />
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

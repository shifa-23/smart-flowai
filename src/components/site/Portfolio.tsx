import { Button } from "@/components/ui/button";
import { ArrowUpRight, Brain, MessageSquare, Hash } from "lucide-react";
import Reveal from "./Reveal";

const demos = [
{
icon: Brain,
tag: "AI Evaluation",
title: "AI-Evaluate",
shortDesc: "AI-powered answer sheet evaluation platform",
desc: "An AI-powered answer sheet evaluation platform that automates copy checking, marks allocation, and performance analysis.",
highlights: [
"AI-powered marks evaluation",
"Automated answer sheet checking",
"AI answer generation & comparison",
"Detailed student performance analysis",
],
idealFor:
"Schools & Colleges, Educational Institutes, Teachers & Examiners",
link: "https://ai-evaluaite-1.onrender.com/",
linkText: "View AI-Evaluate",
},
{
icon: MessageSquare,
tag: "LinkedIn AI",
title: "PostPilot AI",
shortDesc: "Generate viral LinkedIn posts in seconds",
desc: "AI SaaS platform that helps creators and professionals generate LinkedIn content.",
highlights: [
"AI-powered LinkedIn post generation",
"Automatic hashtag generation",
"Draft management system",
"Content scheduling",
],
idealFor: "Content Creators, Students, Founders, Marketers",
link: "https://my-post-ai.lovable.app/",
linkText: "View PostPilot AI",
},
{
icon: Hash,
tag: "Hashtag AI",
title: "HashBoost AI",
shortDesc: "AI-powered hashtag generator",
desc: "Generate optimized hashtags for LinkedIn, Instagram, TikTok, YouTube, Facebook, and X.",
highlights: [
"AI hashtag generation",
"Support for all major social platforms",
"Keyword-based suggestions",
"Image-based hashtag generation",
],
idealFor: "Influencers, Content Creators, Digital Marketers",
link: "https://viral-tag-ai.lovable.app/",
linkText: "View HashBoost AI",
},
];

const Portfolio = () => {
return ( <section
   id="portfolio"
   className="relative py-20 md:py-24 bg-muted"
 > <div className="mx-auto max-w-content px-6 md:px-10"> <Reveal
       as="div"
       className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
     > <div> <p className="text-sm font-medium text-primary mb-3">
Our Work </p>


        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </div>

      <p className="text-muted-foreground max-w-md leading-relaxed">
        Innovative AI-powered solutions we've built to help creators,
        educators, and businesses succeed.
      </p>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {demos.map((d, i) => (
        <Reveal key={d.title} delay={i * 100}>
          <article className="group relative h-full rounded-xl bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/30 card-lift flex flex-col">
            <div className="relative h-44 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />

              <div className="absolute inset-0 grid place-items-center">
                <div className="h-20 w-20 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow-primary">
                  <d.icon className="h-9 w-9 text-primary-foreground" />
                </div>
              </div>

              <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/90 border border-border text-foreground font-medium">
                {d.tag}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                {d.title}
              </h3>

              <p className="text-sm text-primary font-medium mb-3">
                {d.shortDesc}
              </p>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {d.desc}
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground mb-2">
                  Key Highlights:
                </p>

                <ul className="text-xs text-muted-foreground space-y-1">
                  {d.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground mb-2">
                  Ideal For:
                </p>

                <p className="text-xs text-muted-foreground">
                  {d.idealFor}
                </p>
              </div>

              <Button
                variant="glass"
                size="sm"
                className="mt-auto w-full"
                asChild
              >
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {d.linkText}
                  <ArrowUpRight className="ml-1" />
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

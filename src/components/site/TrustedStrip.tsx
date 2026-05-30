const logos = ["NEXUS", "QUANTUM", "ORBIT", "VERTEX", "PULSE", "STELLAR", "FUSION", "ATLAS"];

const TrustedStrip = () => {
  return (
    <section className="py-16 bg-muted border-y border-border">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Helping businesses automate faster
      </p>
      <div className="overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex gap-16 animate-marquee motion-reduce:animate-none whitespace-nowrap w-max">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="font-display font-bold text-2xl text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TrustedStrip;

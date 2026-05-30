import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface CounterProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Counter = ({ to, duration = 1400, suffix = "", prefix = "" }: CounterProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * easeOutCubic(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export default Counter;

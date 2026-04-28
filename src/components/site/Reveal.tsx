import { ReactNode, ElementType, CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number; // ms
  as?: ElementType;
  className?: string;
  duration?: number; // ms, default 500
  y?: number; // px translate, default 24
}

const Reveal = ({ children, delay = 0, as: Tag = "div", className, duration = 500, y = 24 }: RevealProps) => {
  const { ref, inView } = useInView<HTMLElement>();
  const style: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${delay}ms`,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
    opacity: inView ? 1 : 0,
    willChange: "opacity, transform",
  };
  return (
    <Tag ref={ref as any} style={style} className={cn(className)}>
      {children}
    </Tag>
  );
};

export default Reveal;

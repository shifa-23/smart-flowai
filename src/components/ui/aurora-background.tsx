"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-stretch justify-start bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300",
        className
      )}
      {...props}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-[0.35] dark:opacity-[0.15]" />
        
        {/* Soft professional radial gradient spot - no rainbow colors */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_50%)]" />
      </div>
      <div className="relative z-10 w-full flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
};

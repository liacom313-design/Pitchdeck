"use client"

import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: "black" | "surface"
  fullBleed?: boolean
}

export function SectionWrapper({
  children,
  id,
  className,
  background = "black",
  fullBleed = false,
}: SectionWrapperProps) {
  const ref = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative w-full",
        background === "black" ? "bg-background" : "bg-surface",
        fullBleed ? "" : "px-6 md:px-12 lg:px-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          fullBleed ? "" : "max-w-[1200px]"
        )}
      >
        {children}
      </div>
    </section>
  )
}

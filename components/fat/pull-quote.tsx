"use client"

import { cn } from "@/lib/utils"

interface PullQuoteProps {
  quote: string
  attribution?: string
  className?: string
}

export function PullQuote({ quote, attribution, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        "reveal relative py-12 md:py-16 lg:py-20",
        className
      )}
    >
      {/* Oversized opening quotation mark */}
      <span
        className="absolute -top-4 -left-2 md:-left-6 font-sans font-bold text-primary select-none pointer-events-none"
        style={{ fontSize: "clamp(80px, 12vw, 160px)", lineHeight: 1 }}
        aria-hidden="true"
      >
        {"\u201C"}
      </span>
      <p className="font-sans font-light italic text-foreground text-2xl md:text-3xl lg:text-4xl leading-[1.35] tracking-[-0.01em] relative z-10 pl-4 md:pl-8">
        {quote}
      </p>
      {attribution && (
        <footer className="mt-6 pl-4 md:pl-8">
          <span className="text-primary text-sm font-sans font-normal tracking-[0.2em] uppercase">
            {attribution}
          </span>
        </footer>
      )}
    </blockquote>
  )
}

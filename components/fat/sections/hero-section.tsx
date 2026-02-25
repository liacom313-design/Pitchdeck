"use client"

import Image from "next/image"
import { FATLogo } from "@/components/fat/fat-logo"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedHeroHeadline } from "@/components/fat/animated-hero-headline"

export function HeroSection() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center bg-background px-6 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-8 py-24 md:py-32">
        {/* Logo */}
        <div className="reveal">
          <FATLogo className="mb-8" />
        </div>

        {/* Headline with animated counter */}
        <AnimatedHeroHeadline />

        {/* Hero fashion show image */}
        <div className="reveal my-6 md:my-8 w-full overflow-hidden rounded-sm">
          <Image
            src="/hero-fashion-show.png"
            alt="Fashion Art Toronto runway show — models and audience at an industrial-style venue"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Sub-copy */}
        <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          Fashion Art Toronto is Canada&apos;s longest-running fashion week&mdash;a
          non-profit organization dedicated to platforming Canadian fashion
          designers, artists, and creatives on the local and global scene since
          2005.
        </p>

        {/* Executive summary stats */}
        <div className="reveal flex flex-wrap gap-x-12 gap-y-6 mt-8 reveal-stagger">
          {[
            { value: "93M", label: "Media Impressions in 2025" },
            { value: "33K", label: "Attendees in 2025" },
            { value: "80+", label: "Runway Shows in 2025" },
            { value: "53m+", label: "Social Impressions in 2025" },
          ].map((stat) => (
            <div key={stat.label} className="reveal flex flex-col">
              <span className="font-serif text-primary text-4xl md:text-5xl">
                {stat.value}
              </span>
              <span className="font-sans text-muted-foreground text-xs tracking-[0.15em] uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <HorizontalRule className="mt-12" />
      </div>
    </section>
  )
}

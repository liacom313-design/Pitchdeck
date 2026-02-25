"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface Milestone {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: "2005",
    title: "Founded",
    description:
      "Fashion Art Toronto launches as Canada\u2019s first inclusive fashion platform, opening the runway to every story and every vision.",
  },
  {
    year: "2010",
    title: "Made with Love",
    description:
      "Celebrating a milestone at Studio City in Liberty Village, our 5th anniversary was guided by the theme \"Made with Love.\" This landmark year saw the inception of our immersive exhibition programming the Dressing Room Project.",
  },
  {
    year: "2015",
    title: "Made in Canada",
    description:
      "Celebrating 10 years of innovation with a #MADEINCANADA lens. This landmark season at Daniels Spectrum was a tribute to the Canadian fashion landscape, marking a record-breaking era with over 400 runway shows to date.",
  },
  {
    year: "2020 - 2021",
    title: "Fashion Week Virtual",
    description:
      "Redefining the runway in a world on pause. Over two historic years, Fashion Art Toronto produced a groundbreaking virtual fashion series that tested our logistical limits and sparked a new era of creativity.",
  },
  {
    year: "2025",
    title: "20th Anniversary",
    description:
      "Two decades of creating! We kicked off our 20th year with an era-defining XX campaign shoot, bringing our incredible community together for a high-fashion celebration.",
  },
  {
    year: "2026",
    title: "S/S 2026 Fashion Week",
    description:
      "Seven days, city-wide. May 25–31 at T3 Bayside 30,000 sq ft of runway shows, art exhibitions, and brand activations. Expanding the Offsite Program further with more designers!",
  },
]

export function BrandTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeMilestones, setActiveMilestones] = useState<Set<number>>(
    new Set()
  )
  const rafRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far through the section the viewport center is
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const viewportCenter = windowHeight * 0.5

      // Progress: 0 when section top is at viewport center, 1 when section bottom is at viewport center
      const raw = (viewportCenter - sectionTop) / sectionHeight
      const progress = Math.max(0, Math.min(1, raw))
      setScrollProgress(progress)

      // Determine which milestones should be active
      const newActive = new Set<number>()
      milestones.forEach((_, index) => {
        const milestoneProgress = index / (milestones.length - 1)
        // Activate when scroll progress reaches 80% of the milestone's position
        // (offset so first one activates early)
        if (progress >= milestoneProgress * 0.85) {
          newActive.add(index)
        }
      })
      setActiveMilestones(newActive)
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial calculation
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [handleScroll])

  return (
    <div ref={containerRef} className="relative" role="list" aria-label="Fashion Art Toronto milestones">
      {/* Section label */}
      <span className="block text-primary font-sans text-xs tracking-[0.25em] uppercase mb-6">
        Timeline
      </span>

      {/* The vertical track */}
      <div className="relative ml-3">
        {/* Background track line */}
        <div
          className="absolute left-0 top-0 w-px bg-border"
          style={{ height: "100%" }}
          aria-hidden="true"
        />

        {/* Animated progress fill line */}
        <div
          className="absolute left-0 top-0 w-px bg-primary"
          style={{
            height: `${scrollProgress * 100}%`,
            transition: "height 0.15s linear",
          }}
          aria-hidden="true"
        />

        {/* Milestone nodes */}
        <div className="flex flex-col gap-0">
          {milestones.map((milestone, index) => {
            const isActive = activeMilestones.has(index)
            const isLast = index === milestones.length - 1

            return (
              <div
                key={milestone.year}
                role="listitem"
                className="relative"
                style={{ paddingBottom: isLast ? 0 : "2rem" }}
              >
                {/* Dot on the line */}
                <div
                  className={cn(
                    "absolute -left-[5px] top-[6px] w-[11px] h-[11px] border-2 transition-all duration-500",
                    isActive
                      ? "border-primary bg-primary scale-110"
                      : "border-border bg-background"
                  )}
                  style={{ borderRadius: "50%" }}
                  aria-hidden="true"
                />

                {/* Card content */}
                <div
                  className={cn(
                    "ml-6 transition-all duration-700 ease-out",
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-3"
                  )}
                >
                  <div className="bg-card p-4 border border-border group hover:border-primary/40 transition-colors duration-300 cursor-default">
                    {/* Year accent */}
                    <span className="text-primary font-sans text-xs tracking-[0.2em] font-medium">
                      {milestone.year}
                    </span>

                    {/* Title */}
                    <h4 className="text-card-foreground font-serif text-lg leading-tight mt-1">
                      {milestone.title}
                    </h4>

                    {/* Description - revealed on hover / always visible on mobile */}
                    <p
                      className={cn(
                        "text-muted-foreground font-sans text-sm leading-relaxed mt-2 transition-all duration-500",
                        isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      )}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom accent dash */}
      <div className="mt-6 flex items-center gap-3">
        <div className="w-8 h-[2px] bg-primary" aria-hidden="true" />
        <span className="text-muted-foreground font-sans text-xs tracking-widest uppercase">
          20 Years & Counting
        </span>
      </div>
    </div>
  )
}

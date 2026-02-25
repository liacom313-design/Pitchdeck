"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface Metric {
  value: number
  suffix: string
  label: string
}

const metrics: Metric[] = [
  { value: 93, suffix: "M", label: "Media Impressions\n2025" },
  { value: 53, suffix: "", label: "Social Media Impressions\n\n2025" },
  { value: 146, suffix: "", label: "Total Impressions in 2025" },
  { value: 33, suffix: "K", label: "Attendees\n2025" },
  { value: 900, suffix: "", label: "Industry Influencers\n2025" },
  { value: 600, suffix: "", label: "Media in Attendance\n2025" },
]

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function useCountUp(
  target: number,
  duration: number,
  started: boolean
): number {
  const [current, setCurrent] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)

      // For integers > 10, count in integers; for small decimals, keep one decimal
      if (target >= 10) {
        setCurrent(Math.round(easedProgress * target))
      } else {
        setCurrent(
          Math.round(easedProgress * target * 10) / 10
        )
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [target, duration, started])

  return current
}

function MetricCard({
  metric,
  started,
  index,
}: {
  metric: Metric
  started: boolean
  index: number
}) {
  // Stagger duration for a wave effect
  const duration = 2000 + index * 200
  const count = useCountUp(metric.value, duration, started)

  // Format the displayed number
  const displayValue = metric.value >= 10 ? count.toLocaleString() : count

  return (
    <div
      className="flex flex-col items-center gap-3 px-4 py-6 md:py-8"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      <span className="font-serif text-primary text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none tabular-nums">
        {displayValue}
        {metric.suffix}
      </span>
      <span className="font-sans text-muted-foreground text-[11px] md:text-xs tracking-[0.2em] uppercase text-center leading-relaxed whitespace-pre-line">
        {metric.label}
      </span>
    </div>
  )
}

export function AnimatedImpactMetrics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      })
    },
    [started]
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    })

    observer.observe(el)

    return () => observer.disconnect()
  }, [handleIntersect])

  return (
    <div ref={containerRef} className="w-full">
      {/* Top accent line */}
      <div className="w-[120px] h-[2px] bg-primary mb-8 mx-auto md:mx-0" />

      {/* Metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
        {metrics.map((metric, i) => (
          <div key={metric.label} className="bg-background">
            <MetricCard metric={metric} started={started} index={i} />
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="w-[120px] h-[2px] bg-primary mt-8 mx-auto md:ml-auto md:mr-0" />
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedHeroHeadline() {
  const [counter, setCounter] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [visibleWords, setVisibleWords] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const words = [
    "Years",
    "of",
    "High-Impact,",
    "Culture-Driven,",
    "Globally",
    "Connected",
    "Fashion",
  ]

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            // Animate counter from 0 to 20
            let current = 0
            const targetCount = 20
            const duration = 1500 // 1.5 seconds
            const steps = 30
            const increment = targetCount / steps
            const stepDuration = duration / steps

            const counterInterval = setInterval(() => {
              current += increment
              if (current >= targetCount) {
                setCounter(targetCount)
                clearInterval(counterInterval)
              } else {
                setCounter(Math.floor(current))
              }
            }, stepDuration)

            // Reveal words sequentially after counter completes
            setTimeout(() => {
              let wordIndex = 0
              const wordInterval = setInterval(() => {
                if (wordIndex < words.length) {
                  setVisibleWords(wordIndex + 1)
                  wordIndex++
                } else {
                  clearInterval(wordInterval)
                }
              }, 150) // 150ms between each word
            }, duration + 200) // Start words after counter finishes + small delay
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [hasAnimated, words.length])

  return (
    <div ref={ref} className="min-h-[180px]">
      <h1 className="font-serif text-foreground leading-[1.1] tracking-tight">
        {/* Counter Display */}
        <span
          className="inline-block text-6xl md:text-7xl lg:text-8xl mr-3 md:mr-4"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {counter}
          {counter === 20 && (
            <span className="text-primary">+</span>
          )}
        </span>

        {/* Word-by-word reveal */}
        <span className="text-4xl md:text-5xl lg:text-6xl">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2 md:mr-3"
              style={{
                opacity: index < visibleWords ? 1 : 0,
                transform:
                  index < visibleWords ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </h1>
    </div>
  )
}

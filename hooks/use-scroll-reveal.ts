"use client"

import { useEffect, useRef } from "react"

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )

    // Observe the container and all .reveal children
    const revealElements = el.querySelectorAll(".reveal")
    revealElements.forEach((child) => observer.observe(child))
    if (el.classList.contains("reveal")) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [threshold])

  return ref
}

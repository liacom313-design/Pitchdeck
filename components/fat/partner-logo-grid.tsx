"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Partner {
  name: string
  url: string
}

const partners: Partner[] = [
  { name: "1664", url: "https://www.1664.com/" },
  { name: "Tricon Residential", url: "https://www.triconresidential.com/" },
  { name: "Pure Leaf", url: "https://www.pureleaf.com/" },
  { name: "NYX Professional Makeup", url: "https://www.nyxcosmetics.ca/" },
  { name: "Ink Entertainment", url: "https://www.inkentertainment.com/" },
  { name: "Bioderma", url: "https://www.bioderma.ca/" },
  { name: "Glacéau Smartwater", url: "https://www.coca-cola.com/ca/en/brands/smartwater" },
  { name: "Schwarzkopf", url: "https://www.schwarzkopf.ca/" },
  { name: "The Distillery Toronto", url: "https://www.thedistillerydistrict.com/" },
  { name: "Bata Shoe Museum", url: "https://www.batashoemuseum.ca/" },
  { name: "The Bentway", url: "https://www.thebentway.ca/" },
  { name: "T3 Bayside", url: "https://t3bayside.com/" },
  { name: "Dillon's Small Batch", url: "https://www.dillons.ca/" },
  { name: "Rogers", url: "https://www.rogers.com/" },
  { name: "Living Luxe", url: "https://livingluxe.ca/" },
  { name: "Toronto Arts Foundation", url: "https://torontoartsfoundation.org/" },
  { name: "Spirit of York Distillery", url: "https://www.spiritofyork.com/" },
  { name: "Wireless DNA", url: "https://www.wirelessdna.ca/" },
]

function PartnerLogo({ partner, index }: { partner: Partner; index: number }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-logo-item reveal group relative flex items-center justify-center px-6 py-10 md:py-12 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-500"
      style={{ 
        transitionDelay: `${index * 60}ms`,
      }}
      aria-label={`Visit ${partner.name} website`}
    >
      {/* Subtle border that reveals on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#FF0033]/20 transition-all duration-500" />

      {/* Typographic logo - white text, with hover tint for most partners */}
      <span
        className={cn(
          "font-serif text-base md:text-lg lg:text-xl tracking-tight text-white text-center leading-tight select-none transition-all duration-500 group-hover:scale-105",
          partner.name === "Bata Shoe Museum" ? "" : "group-hover:text-[#FF0033]"
        )}
        style={{
          textShadow: "0 0 0 transparent",
        }}
      >
        {partner.name}
      </span>

      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-[#FF0033]/0 group-hover:bg-[#FF0033]/5 transition-all duration-500 pointer-events-none" />
    </a>
  )
}

export function PartnerLogoGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    )

    const items = el.querySelectorAll(".partner-logo-item")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={gridRef} className="flex flex-col gap-10">
      {/* Grid */}
      <div
        className={cn(
          "grid gap-px bg-border/30",
          "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        )}
      >
        {partners.map((partner, i) => (
          <div key={partner.name} className="bg-background">
            <PartnerLogo partner={partner} index={i} />
          </div>
        ))}
      </div>

      {/* Count summary */}
      <p className="reveal font-sans text-sm text-muted-foreground text-center tracking-wide">
        <span className="text-foreground font-serif text-lg">{partners.length}+</span>{" "}
        brands have partnered with Fashion Art Toronto
      </p>
    </div>
  )
}

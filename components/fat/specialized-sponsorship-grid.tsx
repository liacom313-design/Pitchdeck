"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import {
  Crown,
  Sparkles,
  DoorOpen,
  ShoppingBag,
  Users,
  Heart,
  Star,
  Gem,
  Handshake,
  Award,
  X,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SponsorshipPackage {
  id: string
  name: string
  price: string
  tagline: string
  icon: React.ElementType
  benefits: string[]
  highlight?: string
  category: "specialized" | "satellite"
}

const specializedPackages: SponsorshipPackage[] = [
  {
    id: "vip-lounge",
    name: "VIP Lounge",
    price: "$25K",
    tagline: "Own the most exclusive space",
    icon: Crown,
    highlight: "2,000 sq ft",
    category: "specialized",
    benefits: [
      "Exclusive naming rights to VIP Lounge",
      "20\u2019\u00d720\u2019 branded space in 2,000 sq ft VIP area",
      "Lounge merchandising opportunities",
      "Premium logo placement throughout VIP area",
      "Dedicated hosting for VIP guests",
    ],
  },
  {
    id: "backstage",
    name: "Backstage",
    price: "$25K",
    tagline: "Behind the scenes, front of mind",
    icon: Sparkles,
    highlight: "Exclusive Access",
    category: "specialized",
    benefits: [
      "\u201CBackstage Powered by [Brand]\u201D naming",
      "Behind-the-scenes branded content access",
      "Backstage branding: mirrors, workstations, media wall",
      "Exclusive backstage photo and video opportunities",
      "Brand visibility in all backstage media coverage",
    ],
  },
  {
    id: "entrance",
    name: "Entrance",
    price: "$25K",
    tagline: "The first impression",
    icon: DoorOpen,
    highlight: "5,000 sq ft",
    category: "specialized",
    benefits: [
      "\u201C[Brand] Welcome Experience\u201D naming",
      "Custom branding in 5,000 sq ft entrance area",
      "Every attendee interacts with your brand",
      "Branded welcome signage and activations",
      "High-traffic visibility for all 15K attendees",
    ],
  },
  {
    id: "fashion-boutique",
    name: "Fashion Boutique",
    price: "$15K",
    tagline: "Curate the retail experience",
    icon: ShoppingBag,
    highlight: "10\u2019\u00d710\u2019 Space",
    category: "specialized",
    benefits: [
      "Naming rights to the Fashion Boutique",
      "10\u2019\u00d710\u2019 branded retail space",
      "Retail marketplace branding throughout",
      "4 VIP passes included",
      "Direct consumer engagement opportunity",
    ],
  },
  {
    id: "sponsor-designer-solo",
    name: "Sponsor Designer Showcase",
    price: "From $5K",
    tagline: "Champion emerging talent \u2014 Solo Show",
    icon: Users,
    highlight: "Solo Show",
    category: "specialized",
    benefits: [
      "\u201CPresented by [Brand]\u201D designation",
      "Full photography and video access",
      "Backstage access and branding",
      "Direct association with emerging Canadian talent",
      "Social media content collaboration",
    ],
  },
  {
    id: "sponsor-designer-group",
    name: "Group Show Sponsor",
    price: "$1.8K",
    tagline: "Support the next generation",
    icon: Heart,
    highlight: "Group Show",
    category: "specialized",
    benefits: [
      "\u201CPresented by [Brand]\u201D designation",
      "Photography and video access",
      "Backstage access",
      "Brand visibility during group runway presentation",
      "Alignment with FAT\u2019s community mission",
    ],
  },
]

const satellitePackages: SponsorshipPackage[] = [
  {
    id: "title-patron",
    name: "Title Patron",
    price: "$25K+",
    tagline: "Lead the satellite experience",
    icon: Award,
    highlight: "12 VIP Seats",
    category: "satellite",
    benefits: [
      "Naming rights to satellite event",
      "Dominant logo placement across all materials",
      "2 branded reels with full media access",
      "Premium activation space at satellite venue",
      "12 VIP seats",
    ],
  },
  {
    id: "major-patron",
    name: "Major Patron",
    price: "$15K\u2013$24,999",
    tagline: "Command prominent positioning",
    icon: Gem,
    highlight: "6 VIP Seats",
    category: "satellite",
    benefits: [
      "Prominent logo placement on all materials",
      "1 branded reel with media access",
      "Dedicated activation space",
      "6 VIP seats at satellite event",
      "Inclusion in satellite event press coverage",
    ],
  },
  {
    id: "partner",
    name: "Partner",
    price: "$10K\u2013$14,999",
    tagline: "Visible across screens and print",
    icon: Handshake,
    highlight: "4 VIP Seats",
    category: "satellite",
    benefits: [
      "Logo on screens and event program",
      "Static social media post feature",
      "4 VIP seats at satellite event",
      "Brand mention in event communications",
      "On-site brand presence",
    ],
  },
  {
    id: "community-patron",
    name: "Community Patron",
    price: "$5K\u2013$9,999",
    tagline: "Be part of the cultural story",
    icon: Star,
    highlight: "2 VIP Seats",
    category: "satellite",
    benefits: [
      "Website recognition and listing",
      "Instagram story tag and mention",
      "2 VIP seats at satellite event",
      "Community-level brand alignment",
      "Invitation to FAT networking events",
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Card component                                                     */
/* ------------------------------------------------------------------ */

function SponsorCard({
  pkg,
  onSelect,
}: {
  pkg: SponsorshipPackage
  onSelect: (pkg: SponsorshipPackage) => void
}) {
  const Icon = pkg.icon

  return (
    <button
      type="button"
      onClick={() => onSelect(pkg)}
      className={cn(
        "group relative flex flex-col items-start text-left",
        "bg-card border border-border p-6 md:p-8",
        "transition-all duration-500 ease-out",
        "hover:border-primary/60 hover:bg-[#0f0f0f]",
        "cursor-pointer outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "reveal"
      )}
    >
      {/* Top accent line */}
      <span
        className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out w-0 group-hover:w-full"
        aria-hidden="true"
      />

      {/* Icon + Price row */}
      <div className="flex items-start justify-between w-full mb-5">
        <span className="flex items-center justify-center w-10 h-10 border border-border text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors duration-500">
          <Icon size={20} strokeWidth={1.5} />
        </span>
        <span className="font-serif text-primary text-xl md:text-2xl leading-none">
          {pkg.price}
        </span>
      </div>

      {/* Name */}
      <h4 className="font-serif text-foreground text-lg md:text-xl leading-tight mb-2 group-hover:text-foreground transition-colors">
        {pkg.name}
      </h4>

      {/* Tagline */}
      <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
        {pkg.tagline}
      </p>

      {/* Highlight badge */}
      {pkg.highlight && (
        <span className="inline-block font-sans text-[11px] tracking-[0.15em] uppercase text-primary border border-primary/30 px-3 py-1 mb-4 group-hover:border-primary/60 transition-colors duration-500">
          {pkg.highlight}
        </span>
      )}

      {/* CTA hint */}
      <span className="mt-auto font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-500">
        View Benefits
      </span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Detail panel (modal-like overlay)                                  */
/* ------------------------------------------------------------------ */

function DetailPanel({
  pkg,
  onClose,
}: {
  pkg: SponsorshipPackage
  onClose: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const Icon = pkg.icon

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  /* close on click outside */
  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    },
    [onClose]
  )

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4 animate-in fade-in duration-200"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`${pkg.name} sponsorship details`}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-lg bg-card border border-border p-8 md:p-10 animate-in slide-in-from-bottom-4 fade-in duration-300"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Top accent */}
        <span
          className="absolute top-0 left-0 w-full h-[2px] bg-primary"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <span className="flex items-center justify-center w-12 h-12 border border-primary text-primary shrink-0">
            <Icon size={24} strokeWidth={1.5} />
          </span>
          <div>
            <h4 className="font-serif text-foreground text-2xl md:text-3xl leading-tight">
              {pkg.name}
            </h4>
            <p className="font-sans text-muted-foreground text-sm mt-1">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
          <span className="font-serif text-primary text-3xl md:text-4xl">
            {pkg.price}
          </span>
          {pkg.highlight && (
            <span className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground border border-border px-2 py-0.5">
              {pkg.highlight}
            </span>
          )}
        </div>

        {/* Benefits */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
          Benefits Included
        </p>
        <ul className="flex flex-col gap-3">
          {pkg.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary shrink-0" aria-hidden="true" />
              <span className="font-sans text-foreground text-sm leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Category tabs                                                      */
/* ------------------------------------------------------------------ */

type Category = "specialized" | "satellite"

function CategoryTabs({
  active,
  onChange,
}: {
  active: Category
  onChange: (c: Category) => void
}) {
  return (
    <div className="reveal flex gap-0 border border-border w-fit">
      {(
        [
          { key: "specialized" as const, label: "Specialized" },
          { key: "satellite" as const, label: "Satellite Events" },
        ] as const
      ).map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={cn(
            "font-sans text-xs md:text-sm tracking-[0.15em] uppercase px-5 py-3 transition-colors duration-300 cursor-pointer",
            active === key
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function SpecializedSponsorshipGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("specialized")
  const [selected, setSelected] = useState<SponsorshipPackage | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  /* Scroll reveal for dynamically rendered grid items */
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const items = el.querySelectorAll(".reveal")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [activeCategory])

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selected])

  const packages =
    activeCategory === "specialized" ? specializedPackages : satellitePackages

  return (
    <div className="flex flex-col gap-8">
      {/* Tabs */}
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      {/* Subtitle */}
      <p className="reveal font-sans text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
        {activeCategory === "specialized"
          ? "Premium experiential packages that position your brand at the heart of Fashion Week\u2019s most high-touch moments."
          : "Extend your reach across Toronto\u2019s city-wide cultural programming with satellite event partnerships."}
      </p>

      {/* Grid */}
      <div
        ref={gridRef}
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border reveal-stagger"
      >
        {packages.map((pkg) => (
          <SponsorCard key={pkg.id} pkg={pkg} onSelect={setSelected} />
        ))}
      </div>

      {/* Detail modal */}
      {selected && (
        <DetailPanel pkg={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

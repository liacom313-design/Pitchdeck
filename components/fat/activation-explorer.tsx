"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  ChevronLeft,
  Maximize2,
  Tv,
  ShoppingBag,
  Gift,
  Mail,
  Palette,
  ChevronRight,
  Users,
  Eye,
  Zap,
} from "lucide-react"

interface Activation {
  id: string
  title: string
  tagline: string
  description: string
  details: string[]
  image: string
  icon: React.ReactNode
  highlight: string
  stretchImage?: boolean
  carouselImages?: string[]
}

const activations: Activation[] = [
  {
    id: "promotional-spaces",
    title: "Promotional Spaces",
    tagline: "Command the room",
    description:
      "Secure premium floor space within T3 Bayside's 30,000 sq ft venue. From intimate 5'x5' stations to commanding 40'x40' branded environments, create immersive experiences that place your brand at the heart of Fashion Week.",
    details: [
      "Up to 40'x40' premium activation footprint",
      "Custom-branded environment design",
      "Prime positioning near runway entrance",
      "4 evening sessions (5pm-11pm, May 28-31)",
      "15,000+ attendees walking through the venue",
    ],
    image: "/images/activation-promotional-space-new.png",
    carouselImages: [
      "/images/activation-promotional-space-new.png",
      "/images/activation-promotional-space-2.png",
    ],
    icon: <Maximize2 className="w-5 h-5" />,
    highlight: "40'x40'",
  },
  {
    id: "runway-integration",
    title: "Runway Integration",
    tagline: "Own the spotlight",
    description:
      "Place your brand directly within the runway experience. 30-second commercial videos screen before each show to a captive, seated audience, while product integration within designer presentations creates organic, editorial brand moments.",
    details: [
      "30-second commercial before runway shows",
      "Product placement in designer collections",
      "Step-and-repeat branding on runway backdrop",
      "Media screen placements throughout venue",
      "30+ runway shows across 4 evenings",
    ],
    image: "/images/activation-runway.jpg",
    carouselImages: [
      "/images/runway-integration-b.png",
      "/images/runway-integration-c.png",
      "/images/runway-integration-d.png",
    ],
    icon: <Tv className="w-5 h-5" />,
    highlight: "30+ shows",
  },
  {
    id: "branded-items",
    title: "Branded Items",
    tagline: "In every hand",
    description:
      "Extend your brand beyond the venue through premium branded merchandise distributed to every attendee. From VIP lanyards and tote bags to staff apparel and tableware, your brand becomes part of the Fashion Week experience.",
    details: [
      "Custom VIP lanyards for all attendees",
      "Branded tableware and glassware",
      "Staff apparel with sponsor branding",
      "Gift bag inclusions for VIP guests",
      "Ongoing visibility throughout event",
    ],
    image: "/images/activation-branded-items-new.png",
    icon: <ShoppingBag className="w-5 h-5" />,
    highlight: "15K reach",
  },
  {
    id: "contests",
    title: "Contests & Giveaways",
    tagline: "Drive engagement",
    description:
      "Launch exclusive contests and giveaways that generate buzz before, during, and after Fashion Week. Leverage FAT's engaged audience to build your database, drive social sharing, and create memorable brand interactions.",
    details: [
      "Exclusive on-site giveaway activations",
      "Social media contest amplification",
      "Cross-promotion with FAT channels",
      "Direct audience data capture",
      "Pre-event and post-event engagement",
    ],
    image: "/images/activation-contests-new.png",
    icon: <Gift className="w-5 h-5" />,
    highlight: "53K followers",
  },
  {
    id: "eblasts",
    title: "E-blasts",
    tagline: "Direct to inbox",
    description:
      "Reach FAT's curated subscriber list of 20,000 fashion-forward individuals. Dedicated email blasts deliver your message directly to an audience of designers, buyers, influencers, and fashion enthusiasts who have opted in to hear from the platform.",
    details: [
      "Access to 20,000+ opted-in subscribers",
      "Custom-designed branded email template",
      "Dedicated send (not shared placement)",
      "Open-rate tracking and analytics",
      "Audience: designers, buyers, influencers",
    ],
    image: "/images/activation-eblasts-new.png",
    icon: <Mail className="w-5 h-5" />,
    highlight: "20K subs",
  },
  {
    id: "designer-sponsorship",
    title: "Designer Sponsorships",
    tagline: "Champion talent",
    description:
      "Align your brand with emerging Canadian fashion talent through direct designer sponsorship. Your brand receives 'Presented by' designation, backstage access, and full photo/video rights from the show, creating authentic storytelling content.",
    details: [
      "Solo show sponsorship from $5K",
      "'Presented by [Your Brand]' designation",
      "Backstage access and content rights",
      "Full photography and video access",
    ],
    image: "/images/activation-designer-new.png",
    icon: <Palette className="w-5 h-5" />,
    highlight: "From $5K",
  },
]

function ActivationCard({
  activation,
  isActive,
  onClick,
  index,
}: {
  activation: Activation
  isActive: boolean
  onClick: () => void
  index: number
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full text-left cursor-pointer",
        "border-b border-[#333333] transition-all duration-500",
        "py-5 md:py-6",
        isActive && "border-[#FF0033]"
      )}
      aria-expanded={isActive}
      aria-controls={`activation-panel-${activation.id}`}
    >
      <div className="flex items-center gap-4">
        {/* Index number */}
        <span
          className={cn(
            "font-serif text-2xl md:text-3xl transition-colors duration-300 w-8 shrink-0",
            isActive ? "text-[#FF0033]" : "text-[#333333] group-hover:text-[#666666]"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <span
          className={cn(
            "flex items-center justify-center w-10 h-10 shrink-0 border transition-all duration-300",
            isActive
              ? "border-[#FF0033] text-[#FF0033]"
              : "border-[#333333] text-[#666666] group-hover:border-[#666666] group-hover:text-[#999999]"
          )}
        >
          {activation.icon}
        </span>

        {/* Title + Tagline */}
        <div className="flex-1 min-w-0">
          <span
            className={cn(
              "block font-serif text-lg md:text-xl transition-colors duration-300 truncate",
              isActive ? "text-foreground" : "text-[#999999] group-hover:text-foreground"
            )}
          >
            {activation.title}
          </span>
          <span
            className={cn(
              "block font-sans text-xs tracking-[0.15em] uppercase mt-0.5 transition-colors duration-300",
              isActive ? "text-[#FF0033]" : "text-[#555555] group-hover:text-[#777777]"
            )}
          >
            {activation.tagline}
          </span>
        </div>

        {/* Highlight badge */}
        <span
          className={cn(
            "hidden md:inline-flex items-center shrink-0 font-sans text-xs tracking-wider px-3 py-1 border transition-all duration-300",
            isActive
              ? "border-[#FF0033] text-[#FF0033]"
              : "border-[#333333] text-[#555555] group-hover:border-[#555555] group-hover:text-[#777777]"
          )}
        >
          {activation.highlight}
        </span>

        {/* Arrow */}
        <ChevronRight
          className={cn(
            "w-4 h-4 shrink-0 transition-all duration-300",
            isActive
              ? "rotate-90 text-[#FF0033]"
              : "text-[#555555] group-hover:text-[#999999] group-hover:translate-x-1"
          )}
        />
      </div>
    </button>
  )
}

function DetailPanel({ activation }: { activation: Activation }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setImageLoaded(false)
    if (activation.id === "runway-integration") {
      setCurrentSlide(2)
    } else {
      setCurrentSlide(0)
    }
  }, [activation.id])

  return (
    <div
      ref={panelRef}
      id={`activation-panel-${activation.id}`}
      role="region"
      aria-label={`${activation.title} details`}
      className="flex flex-col gap-6"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {activation.carouselImages?.length ? (
          <div className="absolute inset-0 z-0">
            {activation.carouselImages.map((src, index) => (
              <div
                key={src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <Image
                  src={src}
                  alt={`${activation.title} slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority={index === 0}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? activation.carouselImages!.length - 1 : prev - 1
                )
              }
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white hover:bg-black/55"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % activation.carouselImages!.length)
              }
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white hover:bg-black/55"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <Image
            src={activation.image}
            alt={`${activation.title} activation at Fashion Art Toronto`}
            fill
            className={cn(
              activation.stretchImage ? "object-fill transition-all duration-700" : "object-cover transition-all duration-700",
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
            sizes="(max-width: 768px) 100vw, 55vw"
            onLoad={() => setImageLoaded(true)}
          />
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <span className="inline-flex items-center gap-2 text-[#FF0033] font-sans text-xs tracking-[0.2em] uppercase mb-2">
            {activation.icon}
            {activation.tagline}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground">
            {activation.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="font-sans text-[#CCCCCC] text-sm md:text-base leading-relaxed">
        {activation.description}
      </p>

      {/* Details list */}
      <ul className="flex flex-col gap-3">
        {activation.details.map((detail, i) => (
          <li
            key={i}
            className="flex items-start gap-3 font-sans text-sm text-[#999999]"
            style={{
              animationDelay: `${i * 60}ms`,
            }}
          >
            <span className="mt-1.5 w-1.5 h-1.5 bg-[#FF0033] shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Stats row */}
      <div className="flex items-center gap-6 pt-4 border-t border-[#333333]">
        <StatBadge icon={<Users className="w-3.5 h-3.5" />} label="Reach" value="15K+" />
        <StatBadge icon={<Eye className="w-3.5 h-3.5" />} label="Impressions" value="62M" />
        <StatBadge icon={<Zap className="w-3.5 h-3.5" />} label="Influencers" value="450" />
      </div>
    </div>
  )
}

function StatBadge({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#FF0033]">{icon}</span>
      <div className="flex flex-col">
        <span className="font-serif text-sm text-foreground leading-tight">{value}</span>
        <span className="font-sans text-[10px] text-[#666666] uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  )
}

export function ActivationExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="reveal w-full">
      {/* Mobile: stacked accordion layout */}
      <div className="flex flex-col gap-0 md:hidden">
        {activations.map((activation, index) => (
          <div key={activation.id}>
            <ActivationCard
              activation={activation}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? index : index)}
              index={index}
            />
            {/* Expanded detail panel for mobile */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-out",
                activeIndex === index ? "max-h-[1200px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
              )}
            >
              {activeIndex === index && <DetailPanel activation={activation} />}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: split layout — list left, detail right */}
      <div className="hidden md:flex gap-8 lg:gap-12">
        {/* Left column: activation list */}
        <div className="flex flex-col w-[45%] shrink-0">
          <div className="border-t border-[#333333]">
            {activations.map((activation, index) => (
              <ActivationCard
                key={activation.id}
                activation={activation}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                index={index}
              />
            ))}
          </div>

          {/* Summary bar */}
          <div className="mt-8 flex items-center gap-3 py-4 border-t border-[#333333]">
            <span className="font-sans text-xs text-[#666666] uppercase tracking-[0.15em]">
              6 Activation Types
            </span>
            <span className="w-px h-3 bg-[#333333]" />
            <span className="font-sans text-xs text-[#666666] uppercase tracking-[0.15em]">
              Packages from $5000
            </span>
            <span className="w-px h-3 bg-[#333333]" />
            <span className="font-sans text-xs text-[#FF0033] uppercase tracking-[0.15em]">
              Fully Customizable
            </span>
          </div>
        </div>

        {/* Right column: detail panel */}
        <div className="flex-1 min-w-0">
          <div className="sticky top-24">
            <DetailPanel
              key={activations[activeIndex].id}
              activation={activations[activeIndex]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

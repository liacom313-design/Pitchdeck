"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Globe,
  Share2,
  MapPin,
  Ticket,
  ChevronDown,
  Crown,
  Star,
  Award,
  Gem,
  Medal,
  Shield,
} from "lucide-react"

interface TierBenefit {
  category: string
  icon: React.ReactNode
  items: string[]
}

interface Tier {
  name: string
  price: string
  tagline: string
  icon: React.ReactNode
  accentOpacity: string
  benefits: TierBenefit[]
}

const tiers: Tier[] = [
  {
    name: "Title",
    price: "$100K",
    tagline: "Exclusive naming rights: \"[Your Brand] Fashion Week\"",
    icon: <Crown className="size-5" />,
    accentOpacity: "opacity-100",
    benefits: [
      {
        category: "Online Presence",
        icon: <Globe className="size-4" />,
        items: [
          "Premium logo on all marketing materials",
          "Homepage logo with hyperlink",
          "Press release inclusion",
        ],
      },
      {
        category: "Social Media",
        icon: <Share2 className="size-4" />,
        items: [
          "6 branded Instagram posts",
          "2 storytelling pieces",
          "Full photo & video access",
        ],
      },
      {
        category: "Onsite Activation",
        icon: <MapPin className="size-4" />,
        items: [
          "40\u2019\u00d740\u2019 activation space",
          "30-second runway commercial",
          "Step-and-repeat branding",
          "Media screen placement",
        ],
      },
      {
        category: "Event Benefits",
        icon: <Ticket className="size-4" />,
        items: [
          "20 VIP passes",
          "50 GA tickets",
          "4 front-row seats per show",
        ],
      },
    ],
  },
  {
    name: "Presenting",
    price: "$80K",
    tagline: "\"Fashion Week, Presented by [Your Brand]\"",
    icon: <Star className="size-5" />,
    accentOpacity: "opacity-90",
    benefits: [
      {
        category: "Online Presence",
        icon: <Globe className="size-4" />,
        items: [
          "Homepage logo with hyperlink",
          "Press release inclusion",
          "Logo on all marketing materials",
        ],
      },
      {
        category: "Social Media",
        icon: <Share2 className="size-4" />,
        items: [
          "6 branded Instagram posts",
          "Full photo & video access",
        ],
      },
      {
        category: "Onsite Activation",
        icon: <MapPin className="size-4" />,
        items: [
          "40\u2019\u00d740\u2019 activation space",
          "Step-and-repeat branding",
          "Media screen placement",
        ],
      },
      {
        category: "Event Benefits",
        icon: <Ticket className="size-4" />,
        items: [
          "20 VIP passes",
          "50 GA tickets",
        ],
      },
    ],
  },
  {
    name: "Platinum",
    price: "$50K",
    tagline: "Premium visibility across all channels",
    icon: <Award className="size-5" />,
    accentOpacity: "opacity-75",
    benefits: [
      {
        category: "Online Presence",
        icon: <Globe className="size-4" />,
        items: [
          "Logo on all marketing materials",
          "Website logo placement",
        ],
      },
      {
        category: "Social Media",
        icon: <Share2 className="size-4" />,
        items: [
          "3 branded Instagram posts",
          "1 storytelling piece",
        ],
      },
      {
        category: "Onsite Activation",
        icon: <MapPin className="size-4" />,
        items: [
          "20\u2019\u00d730\u2019 activation space",
          "Media screens + step-and-repeat",
        ],
      },
      {
        category: "Event Benefits",
        icon: <Ticket className="size-4" />,
        items: [
          "10 VIP passes",
          "20 GA tickets",
        ],
      },
    ],
  },
  {
    name: "Gold",
    price: "$25K",
    tagline: "Strong brand presence with activation",
    icon: <Gem className="size-5" />,
    accentOpacity: "opacity-60",
    benefits: [
      {
        category: "Online Presence",
        icon: <Globe className="size-4" />,
        items: [
          "Website + promotional materials logo",
        ],
      },
      {
        category: "Social Media",
        icon: <Share2 className="size-4" />,
        items: [
          "2 branded Instagram posts",
          "Contest & e-blast options",
        ],
      },
      {
        category: "Onsite Activation",
        icon: <MapPin className="size-4" />,
        items: [
          "20\u2019\u00d720\u2019 activation space",
          "Step-and-repeat inclusion",
        ],
      },
      {
        category: "Event Benefits",
        icon: <Ticket className="size-4" />,
        items: [
          "6 VIP passes",
          "10 GA tickets",
          "2 front-row seats per show",
        ],
      },
    ],
  },
  {
    name: "Silver",
    price: "$10K",
    tagline: "Targeted exposure with digital reach",
    icon: <Medal className="size-5" />,
    accentOpacity: "opacity-45",
    benefits: [
      {
        category: "Online Presence",
        icon: <Globe className="size-4" />,
        items: [
          "Website logo placement",
        ],
      },
      {
        category: "Social Media",
        icon: <Share2 className="size-4" />,
        items: [
          "1 branded Instagram post + stories",
        ],
      },
      {
        category: "Onsite Activation",
        icon: <MapPin className="size-4" />,
        items: [
          "10\u2019\u00d710\u2019 activation space",
          "Media screen placement",
        ],
      },
      {
        category: "Event Benefits",
        icon: <Ticket className="size-4" />,
        items: [
          "4 VIP passes",
          "6 GA tickets",
        ],
      },
    ],
  },
  {
    name: "Bronze",
    price: "$5K",
    tagline: "Essential brand visibility",
    icon: <Shield className="size-5" />,
    accentOpacity: "opacity-30",
    benefits: [
      {
        category: "Online Presence",
        icon: <Globe className="size-4" />,
        items: [
          "Website logo placement",
        ],
      },
      {
        category: "Social Media",
        icon: <Share2 className="size-4" />,
        items: [
          "Social media tagging",
          "1 static Instagram post",
        ],
      },
      {
        category: "Onsite Activation",
        icon: <MapPin className="size-4" />,
        items: [
          "5\u2019\u00d75\u2019 promotional space",
        ],
      },
      {
        category: "Event Benefits",
        icon: <Ticket className="size-4" />,
        items: [
          "2 VIP passes",
          "4 GA tickets",
        ],
      },
    ],
  },
]

function BenefitCategory({ benefit }: { benefit: TierBenefit }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-primary">
        {benefit.icon}
        <span className="font-sans text-xs tracking-[0.15em] uppercase text-primary">
          {benefit.category}
        </span>
      </div>
      <ul className="flex flex-col gap-1.5 pl-6">
        {benefit.items.map((item) => (
          <li
            key={item}
            className="font-sans text-sm text-muted-foreground leading-relaxed relative before:absolute before:left-[-16px] before:top-[9px] before:size-1 before:bg-primary/50 before:rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TierCard({ tier, isOpen, onToggle, index }: { tier: Tier; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className={cn(
        "reveal group relative bg-card border border-border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
        isOpen && "border-primary/40"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Accent bar at top */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] bg-primary transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
        )}
      />

      {/* Clickable header */}
      <button
        onClick={onToggle}
        className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between p-6 md:p-8 transition-colors duration-300 group-hover:bg-[#222222]">
          <div className="flex items-center gap-4 md:gap-6">
            {/* Icon */}
            <div
              className={cn(
                "flex items-center justify-center size-10 md:size-12 border transition-all duration-300",
                isOpen
                  ? "border-primary/60 text-primary bg-primary/10"
                  : "border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
              )}
            >
              {tier.icon}
            </div>

            {/* Tier name + tagline */}
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground tracking-tight leading-none">
                {tier.name}
              </span>
              <span className="font-sans text-xs md:text-sm text-muted-foreground leading-snug hidden sm:block">
                {tier.tagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            {/* Price */}
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight leading-none">
              {tier.price}
            </span>

            {/* Chevron */}
            <div
              className={cn(
                "flex items-center justify-center size-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen && "rotate-180"
              )}
            >
              <ChevronDown className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8">
            {/* Separator */}
            <div className="h-px bg-border mb-6" />

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {tier.benefits.map((benefit) => (
                <BenefitCategory key={benefit.category} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InteractiveTierCards() {
  const [openTier, setOpenTier] = useState<string | null>(null)

  const handleToggle = (tierName: string) => {
    setOpenTier((prev) => (prev === tierName ? null : tierName))
  }

  return (
    <div className="reveal flex flex-col gap-3">
      {tiers.map((tier, index) => (
        <TierCard
          key={tier.name}
          tier={tier}
          index={index}
          isOpen={openTier === tier.name}
          onToggle={() => handleToggle(tier.name)}
        />
      ))}
    </div>
  )
}

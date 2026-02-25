"use client"

import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import {
  Crown,
  Star,
  Award,
  Gem,
  Medal,
  Shield,
  Sparkles,
  DoorOpen,
  ShoppingBag,
  Users,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronRight,
} from "lucide-react"

interface PackageRow {
  id: string
  tier: string
  price: string
  priceValue: number
  category: "Main Event" | "Specialized"
  icon: React.ReactNode
  tagline: string
  onlinePresence: string[]
  socialMedia: string[]
  onsiteActivation: string[]
  eventBenefits: string[]
  additionalBenefits?: string[]
}

const packageData: PackageRow[] = [
  // Main Event Tiers
  {
    id: "title",
    tier: "Title",
    price: "$100K",
    priceValue: 100000,
    category: "Main Event",
    icon: <Crown className="size-4" />,
    tagline: 'Exclusive naming rights: "[Your Brand] Fashion Week"',
    onlinePresence: [
      "Premium logo on all marketing materials",
      "Homepage logo with hyperlink",
      "Press release inclusion",
    ],
    socialMedia: [
      "6 branded Instagram posts",
      "2 storytelling pieces",
      "Full photo & video access",
    ],
    onsiteActivation: [
      "40'×40' activation space",
      "30-second runway commercial",
      "Step-and-repeat branding",
      "Media screen placement",
    ],
    eventBenefits: [
      "20 VIP passes",
      "50 GA tickets",
      "4 front-row seats per show",
    ],
  },
  {
    id: "presenting",
    tier: "Presenting",
    price: "$80K",
    priceValue: 80000,
    category: "Main Event",
    icon: <Star className="size-4" />,
    tagline: '"Fashion Week, Presented by [Your Brand]"',
    onlinePresence: [
      "Homepage logo with hyperlink",
      "Press release inclusion",
      "Logo on all marketing materials",
    ],
    socialMedia: [
      "6 branded Instagram posts",
      "Full photo & video access",
    ],
    onsiteActivation: [
      "40'×40' activation space",
      "Step-and-repeat branding",
      "Media screen placement",
    ],
    eventBenefits: [
      "20 VIP passes",
      "50 GA tickets",
    ],
  },
  {
    id: "platinum",
    tier: "Platinum",
    price: "$50K",
    priceValue: 50000,
    category: "Main Event",
    icon: <Award className="size-4" />,
    tagline: "Premium visibility across all channels",
    onlinePresence: [
      "Logo on all marketing materials",
      "Website logo placement",
    ],
    socialMedia: [
      "3 branded Instagram posts",
      "1 storytelling piece",
    ],
    onsiteActivation: [
      "20'×30' activation space",
      "Media screens + step-and-repeat",
    ],
    eventBenefits: [
      "10 VIP passes",
      "20 GA tickets",
    ],
  },
  {
    id: "gold",
    tier: "Gold",
    price: "$25K",
    priceValue: 25000,
    category: "Main Event",
    icon: <Gem className="size-4" />,
    tagline: "Strong brand presence with activation",
    onlinePresence: [
      "Website + promotional materials logo",
    ],
    socialMedia: [
      "2 branded Instagram posts",
      "Contest & e-blast options",
    ],
    onsiteActivation: [
      "20'×20' activation space",
      "Step-and-repeat inclusion",
    ],
    eventBenefits: [
      "6 VIP passes",
      "10 GA tickets",
      "2 front-row seats per show",
    ],
  },
  {
    id: "silver",
    tier: "Silver",
    price: "$10K",
    priceValue: 10000,
    category: "Main Event",
    icon: <Medal className="size-4" />,
    tagline: "Targeted exposure with digital reach",
    onlinePresence: [
      "Website logo placement",
    ],
    socialMedia: [
      "1 branded Instagram post + stories",
    ],
    onsiteActivation: [
      "10'×10' activation space",
      "Media screen placement",
    ],
    eventBenefits: [
      "4 VIP passes",
      "6 GA tickets",
    ],
  },
  {
    id: "bronze",
    tier: "Bronze",
    price: "$5K",
    priceValue: 5000,
    category: "Main Event",
    icon: <Shield className="size-4" />,
    tagline: "Essential brand visibility",
    onlinePresence: [
      "Website logo placement",
    ],
    socialMedia: [
      "Social media tagging",
      "1 static Instagram post",
    ],
    onsiteActivation: [
      "5'×5' promotional space",
    ],
    eventBenefits: [
      "2 VIP passes",
      "4 GA tickets",
    ],
  },
  // Specialized Sponsorships
  {
    id: "vip-lounge",
    tier: "VIP Lounge",
    price: "$25K",
    priceValue: 25000,
    category: "Specialized",
    icon: <Crown className="size-4" />,
    tagline: "Own the most exclusive space (2,000 sq ft)",
    onlinePresence: [
      "Premium logo placement throughout VIP area",
    ],
    socialMedia: [
      "Behind-the-scenes content access",
    ],
    onsiteActivation: [
      "Exclusive naming rights to VIP Lounge",
      "20'×20' branded space in 2,000 sq ft VIP area",
      "Lounge merchandising opportunities",
    ],
    eventBenefits: [
      "Dedicated hosting for VIP guests",
    ],
  },
  {
    id: "backstage",
    tier: "Backstage",
    price: "$25K",
    priceValue: 25000,
    category: "Specialized",
    icon: <Sparkles className="size-4" />,
    tagline: "Behind the scenes, front of mind",
    onlinePresence: [
      "Brand visibility in all backstage media coverage",
    ],
    socialMedia: [
      "Behind-the-scenes branded content access",
    ],
    onsiteActivation: [
      '"Backstage Powered by [Brand]" naming',
      "Backstage branding: mirrors, workstations, media wall",
      "Exclusive backstage photo and video opportunities",
    ],
    eventBenefits: [],
  },
  {
    id: "entrance",
    tier: "Entrance",
    price: "$25K",
    priceValue: 25000,
    category: "Specialized",
    icon: <DoorOpen className="size-4" />,
    tagline: "The first impression (5,000 sq ft)",
    onlinePresence: [],
    socialMedia: [],
    onsiteActivation: [
      '"[Brand] Welcome Experience" naming',
      "Custom branding in 5,000 sq ft entrance area",
      "Branded welcome signage and activations",
      "High-traffic visibility for all 15K attendees",
    ],
    eventBenefits: [
      "Every attendee interacts with your brand",
    ],
  },
  {
    id: "fashion-boutique",
    tier: "Fashion Boutique",
    price: "$15K",
    priceValue: 15000,
    category: "Specialized",
    icon: <ShoppingBag className="size-4" />,
    tagline: "Curate the retail experience (10'×10' Space)",
    onlinePresence: [
      "Retail marketplace branding",
    ],
    socialMedia: [],
    onsiteActivation: [
      "Naming rights to the Fashion Boutique",
      "10'×10' branded retail space",
    ],
    eventBenefits: [
      "4 VIP passes",
      "Direct consumer engagement opportunity",
    ],
  },
  {
    id: "sponsor-designer",
    tier: "Sponsor a Designer",
    price: "$5K",
    priceValue: 5000,
    category: "Specialized",
    icon: <Users className="size-4" />,
    tagline: "Champion emerging talent — Solo Show",
    onlinePresence: [
      "Direct association with emerging Canadian talent",
    ],
    socialMedia: [
      "Social media content collaboration",
      "Full photography and video access",
    ],
    onsiteActivation: [
      '"Presented by [Brand]" designation',
      "Backstage access and branding",
    ],
    eventBenefits: [],
  },
]

type SortColumn = "tier" | "price" | "category"
type SortDirection = "asc" | "desc"

function SortIcon({ column, sortColumn, sortDirection }: { column: SortColumn; sortColumn: SortColumn | null; sortDirection: SortDirection }) {
  if (sortColumn !== column) {
    return <ChevronsUpDown className="size-3.5 text-muted-foreground" />
  }
  return sortDirection === "asc" ? (
    <ChevronUp className="size-3.5 text-primary" />
  ) : (
    <ChevronDown className="size-3.5 text-primary" />
  )
}

function ExpandableRow({ pkg, isExpanded, onToggle }: { pkg: PackageRow; isExpanded: boolean; onToggle: () => void }) {
  return (
    <>
      {/* Main row */}
      <tr
        className={cn(
          "border-b border-border transition-colors duration-300 cursor-pointer group",
          isExpanded ? "bg-[#0f0f0f]" : "hover:bg-[#1a1a1a]"
        )}
        onClick={onToggle}
      >
        {/* Tier */}
        <td className="p-4 md:p-6">
          <div className="flex items-center gap-3">
            <div className={cn(
              "flex items-center justify-center size-8 border transition-colors duration-300",
              isExpanded ? "border-primary text-primary" : "border-border text-muted-foreground group-hover:text-primary group-hover:border-primary/40"
            )}>
              {pkg.icon}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-base md:text-lg text-foreground leading-tight">{pkg.tier}</span>
              <span className="font-sans text-xs text-muted-foreground leading-tight hidden md:block">{pkg.tagline}</span>
            </div>
          </div>
        </td>

        {/* Price */}
        <td className="p-4 md:p-6">
          <span className="font-serif text-xl md:text-2xl text-primary whitespace-nowrap">{pkg.price}</span>
        </td>

        {/* Category */}
        <td className="p-4 md:p-6 hidden lg:table-cell">
          <span className={cn(
            "inline-block font-sans text-xs tracking-[0.15em] uppercase px-3 py-1 border",
            pkg.category === "Main Event" 
              ? "text-primary border-primary/30" 
              : "text-foreground border-border"
          )}>
            {pkg.category}
          </span>
        </td>

        {/* Expand toggle */}
        <td className="p-4 md:p-6 text-right">
          <div className={cn(
            "inline-flex items-center gap-2 transition-colors duration-300",
            isExpanded ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
          )}>
            <span className="font-sans text-xs tracking-[0.15em] uppercase hidden sm:inline">
              {isExpanded ? "Hide" : "Details"}
            </span>
            <ChevronRight className={cn(
              "size-4 transition-transform duration-300",
              isExpanded && "rotate-90"
            )} />
          </div>
        </td>
      </tr>

      {/* Expanded details */}
      {isExpanded && (
        <tr className="border-b border-border bg-[#0f0f0f]">
          <td colSpan={4} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Online Presence */}
              {pkg.onlinePresence.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-primary">
                    Online Presence
                  </span>
                  <ul className="flex flex-col gap-2">
                    {pkg.onlinePresence.map((item, i) => (
                      <li key={i} className="font-sans text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:size-1 before:bg-primary/50 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Media */}
              {pkg.socialMedia.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-primary">
                    Social Media
                  </span>
                  <ul className="flex flex-col gap-2">
                    {pkg.socialMedia.map((item, i) => (
                      <li key={i} className="font-sans text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:size-1 before:bg-primary/50 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Onsite Activation */}
              {pkg.onsiteActivation.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-primary">
                    Onsite Activation
                  </span>
                  <ul className="flex flex-col gap-2">
                    {pkg.onsiteActivation.map((item, i) => (
                      <li key={i} className="font-sans text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:size-1 before:bg-primary/50 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Event Benefits */}
              {pkg.eventBenefits.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-primary">
                    Event Benefits
                  </span>
                  <ul className="flex flex-col gap-2">
                    {pkg.eventBenefits.map((item, i) => (
                      <li key={i} className="font-sans text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:size-1 before:bg-primary/50 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export function PartnershipTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())
  const [filterCategory, setFilterCategory] = useState<"all" | "Main Event" | "Specialized">("all")

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const toggleRow = (id: string) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const sortedAndFilteredData = useMemo(() => {
    let filtered = packageData
    
    if (filterCategory !== "all") {
      filtered = filtered.filter(pkg => pkg.category === filterCategory)
    }

    if (!sortColumn) return filtered

    return [...filtered].sort((a, b) => {
      let comparison = 0

      switch (sortColumn) {
        case "tier":
          comparison = a.tier.localeCompare(b.tier)
          break
        case "price":
          comparison = a.priceValue - b.priceValue
          break
        case "category":
          comparison = a.category.localeCompare(b.category)
          break
      }

      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [sortColumn, sortDirection, filterCategory])

  return (
    <div className="reveal flex flex-col gap-6">
      {/* Filter tabs */}
      <div className="flex gap-0 border border-border w-fit">
        {["all", "Main Event", "Specialized"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat as typeof filterCategory)}
            className={cn(
              "font-sans text-xs md:text-sm tracking-[0.15em] uppercase px-4 md:px-5 py-2 md:py-3 transition-colors duration-300",
              filterCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {cat === "all" ? "All Packages" : cat}
          </button>
        ))}
      </div>

      {/* Table container with horizontal scroll on mobile */}
      <div className="border border-border overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-primary bg-card">
              <th className="p-4 md:p-6 text-left">
                <button
                  onClick={() => handleSort("tier")}
                  className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors group"
                >
                  Partnership Tier
                  <SortIcon column="tier" sortColumn={sortColumn} sortDirection={sortDirection} />
                </button>
              </th>
              <th className="p-4 md:p-6 text-left">
                <button
                  onClick={() => handleSort("price")}
                  className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors group"
                >
                  Investment
                  <SortIcon column="price" sortColumn={sortColumn} sortDirection={sortDirection} />
                </button>
              </th>
              <th className="p-4 md:p-6 text-left hidden lg:table-cell">
                <button
                  onClick={() => handleSort("category")}
                  className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors group"
                >
                  Category
                  <SortIcon column="category" sortColumn={sortColumn} sortDirection={sortDirection} />
                </button>
              </th>
              <th className="p-4 md:p-6"></th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredData.map((pkg) => (
              <ExpandableRow
                key={pkg.id}
                pkg={pkg}
                isExpanded={expandedRows.has(pkg.id)}
                onToggle={() => toggleRow(pkg.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3 pt-4">
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
          Table Features
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ChevronsUpDown className="size-3.5 text-muted-foreground" />
            <span className="font-sans text-muted-foreground">Click headers to sort</span>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight className="size-3.5 text-muted-foreground" />
            <span className="font-sans text-muted-foreground">Click rows for details</span>
          </div>
        </div>
      </div>
    </div>
  )
}

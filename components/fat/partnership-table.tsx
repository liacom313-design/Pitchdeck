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
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronRight,
} from "lucide-react"

interface TierSection {
  heading: string
  items: string[]
}

interface PackageRow {
  id: string
  tier: string
  price: string
  priceValue: number
  category: "Main Event" | "Offsite Sponsorship" | "Specialized" | "In Kind"
  icon: React.ReactNode
  sections: TierSection[]
}

const packageData: PackageRow[] = [
  {
    id: "bronze-sponsor",
    tier: "BRONZE SPONSOR",
    price: "$5K",
    priceValue: 5000,
    category: "Main Event",
    icon: <Shield className="size-4" />,
    sections: [
      {
        heading: "ONLINE PRESENCE",
        items: ["Logo on Fashion Art Toronto website"],
      },
      {
        heading: "SOCIAL MEDIA",
        items: [
          "Tagging in pre-event and event social media posts.",
          "One Instagram static photo post",
        ],
      },
      {
        heading: "ONSITE ACTIVATION",
        items: [
          "5' x 5' promotional space for brand activation",
          "Logo inclusion on media screens throughout the event.",
        ],
      },
      {
        heading: "EVENT BENEFITS",
        items: ["2 VIP Passes", "4 General Admission Tickets"],
      },
    ],
  },
  {
    id: "silver-sponsor",
    tier: "SILVER SPONSOR",
    price: "$10K",
    priceValue: 10000,
    category: "Main Event",
    icon: <Medal className="size-4" />,
    sections: [
      {
        heading: "ONLINE PRESENCE",
        items: ["Logo on Fashion Art Toronto website"],
      },
      {
        heading: "SOCIAL MEDIA",
        items: [
          "Tagging in pre-event and event social media posts.",
          "One branded post on Instagram + Stories",
        ],
      },
      {
        heading: "ONSITE PRESENCE:",
        items: ["Logo inclusion on media screens throughout the event."],
      },
      {
        heading: "ONSITE ACTIVATION (choose 1):",
        items: [
          "10'x10' promotional space in main event area",
          "Integration in the runway show (e.g., accessories for models).",
          "Branded items (e.g., lanyards, glasses, T-shirts).",
          "E-blast to our database of 20k subscribers",
          "Sponsor a designer or award (additional cost).",
        ],
      },
      {
        heading: "EVENT BENEFITS:",
        items: ["4 VIP Passes", "6 General Admission Tickets"],
      },
    ],
  },
  {
    id: "gold-sponsor",
    tier: "GOLD SPONSOR",
    price: "$25K",
    priceValue: 25000,
    category: "Main Event",
    icon: <Gem className="size-4" />,
    sections: [
      {
        heading: "ONLINE PRESENCE",
        items: ["Logo on Fashion Art Toronto website and promotional materials."],
      },
      {
        heading: "SOCIAL MEDIA",
        items: [
          "Tagging in pre-event and event social media posts.",
          "Two branded posts on Instagram + Stories",
        ],
      },
      {
        heading: "ON-SITE PRESENCE",
        items: [
          "Logo inclusion on media screens throughout the event.",
          "Step & Repeat media wall inclusion on the red carpet.",
        ],
      },
      {
        heading: "ONSITE ACTIVATION (choose two):",
        items: [
          "20'x20' promotional space in the event area.",
          "Contest for giveaways or exclusive offers",
          "E-blast to our database of 20k subscribers",
          "Integration in the runway show (e.g., accessories or product gifting)",
          "Branded items: lanyards, glasses/tableware, elevator stickers, staff T-shirts, event signage, branded cocktails (additional cost involved)",
        ],
      },
      {
        heading: "EVENT BENEFITS:",
        items: [
          "6 VIP Passes",
          "10 General Admission Tickets.",
          "2 front-row seats at each show",
        ],
      },
    ],
  },
  {
    id: "fashion-boutique-sponsor",
    tier: "FASHION BOUTIQUE SPONSOR +2",
    price: "$15,000",
    priceValue: 15000,
    category: "Specialized",
    icon: <ShoppingBag className="size-4" />,
    sections: [
      {
        heading: "NAMING RIGHTS",
        items: ['Naming rights as "[Sponsor Name] Fashion Boutique"'],
      },
      {
        heading: "ONLINE PRESENCE",
        items: [
          "Logo included in boutique promotions",
          "2 dedicated social media posts",
        ],
      },
      {
        heading: "ONSITE ACTIVATION",
        items: [
          "10'x10' promotional space in the Fashion Boutique area",
          "Branding throughout the retail marketplace",
        ],
      },
      {
        heading: "EVENT BENEFITS",
        items: [
          "4 VIP Passes",
          "6 General Admission Tickets",
          "4 Front row tickets for a single show",
        ],
      },
    ],
  },
  {
    id: "backstage-sponsor",
    tier: "BACKSTAGE SPONSOR",
    price: "$25,000",
    priceValue: 25000,
    category: "Specialized",
    icon: <Sparkles className="size-4" />,
    sections: [
      {
        heading: "NAMING RIGHTS:",
        items: ['Exclusive naming rights as "Backstage Powered by [Sponsor Name]"'],
      },
      {
        heading: "ONLINE PRESENCE:",
        items: [
          "Logo on behind-the-scenes content (reels, photos, interviews)",
          "2 dedicated social media posts + stories on Instagram",
        ],
      },
      {
        heading: "ONSITE PRESENCE:",
        items: [
          "Logo on Media screens",
          "Logo on red carpet Step & Repeat media wall",
        ],
      },
      {
        heading: "ONSITE ACTIVATION:",
        items: [
          "Designated promotional space of 20'x 20', or as otherwise negotiated, within a 30,000 square foot backstage area",
          "Branding opportunities in backstage areas, including mirrors, workstations, stylists' t-shirts, and a media wall",
        ],
      },
      {
        heading: "EVENT BENEFITS:",
        items: [
          "6 VIP Passes",
          "10 General Admission Tickets",
          "2 VIP front-row seats for each show",
        ],
      },
    ],
  },
  {
    id: "entrance-sponsor",
    tier: "ENTRANCE SPONSOR +1",
    price: "$25,000",
    priceValue: 25000,
    category: "Specialized",
    icon: <DoorOpen className="size-4" />,
    sections: [
      {
        heading: "NAMING RIGHTS",
        items: ['Event entrance branded as "[Sponsor Name] Welcome Experience"'],
      },
      {
        heading: "ONLINE PRESENCE",
        items: [
          "Logo featured in arrival-related content",
          "2 dedicated social media posts + stories on Instagram",
        ],
      },
      {
        heading: "ONSITE PRESENCE",
        items: [
          "Logo on Media screens",
          "Logo on red carpet Step & Repeat media wall",
        ],
      },
      {
        heading: "ONSITE ACTIVATION",
        items: [
          "Designated promotional space of 20'x 20', or as otherwise negotiated, within a 5,000 square foot entrance area",
          "Custom branding throughout the entrance area",
        ],
      },
      {
        heading: "EVENT BENEFITS",
        items: [
          "6 VIP Passes",
          "10 General Admission Tickets",
          "2 VIP front-row seats at each show",
        ],
      },
    ],
  },
  {
    id: "vip-lounge-sponsor",
    tier: "VIP LOUNGE SPONSOR",
    price: "$25,000",
    priceValue: 25000,
    category: "Specialized",
    icon: <Crown className="size-4" />,
    sections: [
      {
        heading: "NAMING RIGHTS",
        items: ['Exclusive naming rights to the "[Sponsor Name] VIP Lounge"'],
      },
      {
        heading: "ONLINE PRESENCE",
        items: [
          "Social media tagging in captions for both pre-event and ON SEASON event posts",
          "2 creatively branded or collaborative posts (such as reels, photos, or stories) on Instagram",
        ],
      },
      {
        heading: "ONSITE PRESENCE",
        items: [
          "Logo featured on media screens",
          "Logo displayed on the red carpet Step & Repeat media wall",
        ],
      },
      {
        heading: "ONSITE ACTIVATION",
        items: [
          "Designated promotional space of up to 20'x20', or as otherwise negotiated, within a 2,000 square foot VIP area",
          "VIP Lounge merchandising, including signage, cocktail napkins, and decor etc.",
        ],
      },
      {
        heading: "EVENT BENEFITS",
        items: [
          "6 VIP Passes",
          "10 General Admission Tickets",
          "2 VIP front-row seats at each show",
        ],
      },
    ],
  },
  {
    id: "platinum-sponsor",
    tier: "PLATINUM SPONSOR",
    price: "$50K",
    priceValue: 50000,
    category: "Main Event",
    icon: <Award className="size-4" />,
    sections: [
      {
        heading: "ONLINE PRESENCE",
        items: [
          "Logo on Fashion Art Toronto website and all marketing materials",
          "Inclusion in press releases",
        ],
      },
      {
        heading: "SOCIAL MEDIA",
        items: [
          "Tagged in captions for all event posts (prominent placement)",
          "3 branded posts on Instagram",
          "1 storytelling piece highlighting the partnership",
        ],
      },
      {
        heading: "ON-SITE PRESENCE",
        items: [
          "Logo inclusion on media screens throughout the event.",
          "Logo on step and repeat red carpet area",
        ],
      },
      {
        heading: "PHOTOGRAPHY/FILM",
        items: ["Access to all photography and video footage for promotional use."],
      },
      {
        heading: "INTERACTIVE ACTIVATION (CHOOSE 3):",
        items: [
          "20'x30' promotional space in most prominent event area",
          "Contest for giveaways or exclusive offers",
          "15-second commercial video before select runway shows",
          "E-blast to our database of 20k subscribers",
          "Runway show integration for product features (where applicable)",
          "Branded items: lanyards, glasses/tableware, elevator stickers, staff T-shirts, event signage, branded cocktails (additional cost involved)",
          "Sponsorship of a designer or award (additional cost).",
        ],
      },
      {
        heading: "EVENT BENEFITS:",
        items: [
          "10 VIP Passes",
          "20 General Admission Tickets",
          "4 front-row seats at each show",
        ],
      },
    ],
  },
  {
    id: "title-sponsor",
    tier: "TITLE SPONSOR",
    price: "$100K",
    priceValue: 100000,
    category: "Main Event",
    icon: <Crown className="size-4" />,
    sections: [
      {
        heading: "NAMING RIGHTS",
        items: [
          '* EXCLUSIVE NAMING RIGHTS AS "[YOUR BRAND NAME] FASHION WEEK."',
          "BY BECOMING OUR TITLE SPONSOR, YOUR NAME WILL BE ON EVERYTHING WE DO.",
        ],
      },
      {
        heading: "ONLINE PRESENCE",
        items: [
          "Logo on the homepage of Fashion Art Toronto's website with a link to your page.",
          "Inclusion in all event press releases",
          "Logo in all advertising and marketing materials.",
          "Social media tagging in all posts",
          "Social Tag prominently placed in captions",
          "6 branded or collaborative posts on Instagram,",
          "2 storytelling pieces from the FAT content team on instagram",
        ],
      },
      {
        heading: "ON-SITE PRESENCE",
        items: [
          "Logo displayed on media screens throughout the event.",
          "Logo displayed on the Step & Repeat media wall.",
        ],
      },
      {
        heading: "PHOTOGRAPHY/FILM",
        items: ["Access to all photography and video footage for promotional use."],
      },
      {
        heading: "INTERACTIVE ACTIVATION (Choose up to three):",
        items: [
          "40' x 40 promotional space for brand activation.",
          "Contest: Giveaway or exclusive offers.",
          "30-second commercial video before select runway shows",
          "Integration in runway shows with creative features or product displays (where applicable)",
          "Branded items: lanyards, glasses/tableware, elevator stickers, staff T-shirts, event signage, branded cocktails (additional cost involved)",
          "Sponsorship of a designer or award (additional cost)",
        ],
      },
      {
        heading: "ADDITIONAL EVENT BENEFITS:",
        items: [
          "20 VIP Passes.",
          "50 General Admission Tickets.",
          "4 VIP front-row seats at each show",
        ],
      },
    ],
  },
  {
    id: "presenting-sponsor",
    tier: "PRESENTING SPONSOR",
    price: "$80K",
    priceValue: 80000,
    category: "Main Event",
    icon: <Star className="size-4" />,
    sections: [
      {
        heading: "NAMING RIGHTS",
        items: [
          'EXCLUSIVE NAMING RIGHTS AS THE PRESENTING SPONSOR, "FASHION WEEK, PRESENTED BY [YOUR BRAND NAME]."',
        ],
      },
      {
        heading: "ONLINE PRESENCE",
        items: [
          "Logo on the Fashion Art Toronto website homepage with hyperlink.",
          "Inclusion in all event press releases",
          "Logo in all advertising and marketing materials.",
          "Social media tagging in all posts",
          "Social Tag prominently placed in captions",
          "6 branded posts on Instagram, including two storytelling pieces.",
        ],
      },
      {
        heading: "ON-SITE PRESENCE",
        items: [
          "Logo on media projection screens",
          "Logo on step & repeat media wall.",
        ],
      },
      {
        heading: "PHOTOGRAPHY/FILM",
        items: ["Access to all photography and video footage for promotional use."],
      },
      {
        heading: "INTERACTIVE ACTIVATION (Choose up to 3):",
        items: [
          "40' x 40' promotional space for brand activation",
          "Contest: Giveaway or exclusive offers.",
          "30-second commercial video before select runway shows",
          "Integration in runway shows with creative features or product displays (where applicable)",
          "Branded items: lanyards, glasses/tableware, elevator stickers, staff T-shirts, event signage, branded cocktails (additional cost involved)",
          "Sponsorship of a designer or award (additional cost).",
        ],
      },
      {
        heading: "ADDITIONAL EVENT BENEFITS:",
        items: [
          "20 VIP Passes.",
          "50 General Admission Tickets.",
          "4 VIP front-row seats at each show.",
        ],
      },
    ],
  },
  {
    id: "in-kind-5k",
    tier: "IN-KIND SPONSOR",
    price: "$5K",
    priceValue: 5000,
    category: "In Kind",
    icon: <Shield className="size-4" />,
    sections: [
      {
        heading: "BRAND VISIBILITY",
        items: [
          "Being featured during Toronto's largest and longest running Fashion Event.",
          "2 stories (to be negotiated with the Social Media team).",
          "Logo placement on our website, runway and social media.",
        ],
      },
      {
        heading: "DIRECT ACCESS & AUDIENCE",
        items: [
          "Your contribution experienced firsthand by our event staff, models, and talent.",
          "Opportunities for networking and increased brand awareness.",
        ],
      },
      {
        heading: "CONTRIBUTION EXAMPLES",
        items: [
          "Transportation discounts",
          "Food & Drinks for Staff/Models",
          "Food & Drinks for VIP lounge",
          "Product on the runway - front row goodie bags",
          "Branded merch for staff /VIP/Frontrow",
        ],
      },
    ],
  },
  {
    id: "in-kind-10k",
    tier: "IN-KIND SPONSOR",
    price: "$10K",
    priceValue: 10000,
    category: "In Kind",
    icon: <Medal className="size-4" />,
    sections: [
      {
        heading: "ONLINE PRESENCE:",
        items: [
          "Logo on the Fashion Art Toronto website.",
          "Mentions with tagging during the event.",
          "One branded collaborative post on Instagram and Tik Tok.",
        ],
      },
      {
        heading: "ONSITE PRESENCE:",
        items: ["Logo on media projection screens in the runway room."],
      },
      {
        heading: "ONSITE ACTIVATION (choose 1):",
        items: [
          "Integration in the runway show",
          "Branded items (e.g., lanyards, glasses, T-shirts).",
          "Branded fashion cocktail.",
        ],
      },
      {
        heading: "EVENT BENEFITS:",
        items: ["4 VIP Passes", "6 GENERAL ADMISSION TICKETS"],
      },
    ],
  },
  {
    id: "in-kind-20k-plus",
    tier: "IN-KIND SPONSOR",
    price: "$20K+",
    priceValue: 20000,
    category: "In Kind",
    icon: <Award className="size-4" />,
    sections: [
      {
        heading: "ONLINE PRESENCE:",
        items: [
          "Prominent Logo on the Fashion Art Toronto website.",
          "Mentions with tagging during the event.",
          "Two branded collaborative posts on Instagram and Tik Tok.",
        ],
      },
      {
        heading: "ONSITE PRESENCE:",
        items: [
          "Logo on media projection screens in the runway room.",
          "Logo on red carpet Step & Repeat media wall.",
        ],
      },
      {
        heading: "ONSITE ACTIVATION (choose 2):",
        items: [
          "Integration in the runway show",
          "Branded items (e.g., lanyards, glasses, T-shirts).",
          "Branded fashion cocktail.",
          "Dedicated promotional space.",
        ],
      },
      {
        heading: "EVENT BENEFITS:",
        items: ["8 VIP Passes", "12 General Admission Tickets"],
      },
    ],
  },
  {
    id: "offsite-6-5k",
    tier: "OFFSITE PACKAGE",
    price: "$6.5K",
    priceValue: 6500,
    category: "Offsite Sponsorship",
    icon: <DoorOpen className="size-4" />,
    sections: [
      {
        heading: "INCLUDED FEATURES",
        items: [
          "Location provision",
          "Tables and chairs for the runway show",
          "Staffing to support the runway presentation",
        ],
      },
      {
        heading: "NOTES",
        items: ["Any other elements or customizations are additional"],
      },
    ],
  },
  {
    id: "offsite-10k",
    tier: "EXTENDED OFFSITE PACKAGE",
    price: "$10K",
    priceValue: 10000,
    category: "Offsite Sponsorship",
    icon: <Sparkles className="size-4" />,
    sections: [
      {
        heading: "ENHANCED PRODUCTION",
        items: [
          "Extended decor support",
          "Additional equipment and staging options",
          "Additional AV effects",
        ],
      },
      {
        heading: "PROMOTION",
        items: [
          "Additional promotion and amplification on the FAT page",
        ],
      },
    ],
  },
  {
    id: "offsite-25k",
    tier: "FULL SHOW PRODUCTION",
    price: "$25K",
    priceValue: 25000,
    category: "Offsite Sponsorship",
    icon: <Award className="size-4" />,
    sections: [
      {
        heading: "WHITE GLOVE SERVICE",
        items: [
          "Full show production top to bottom",
          "White-glove service to produce the exact event you want (within reason)",
        ],
      },
    ],
  },
]

type SortColumn = "tier" | "price" | "category"
type SortDirection = "asc" | "desc"

const defaultAllPackagesOrder: Record<string, number> = {
  "title-sponsor": 0,
  "presenting-sponsor": 1,
  "platinum-sponsor": 2,
  "gold-sponsor": 3,
  "silver-sponsor": 4,
  "bronze-sponsor": 5,
  "offsite-6-5k": 6,
  "offsite-10k": 7,
  "offsite-25k": 8,
  "fashion-boutique-sponsor": 9,
  "backstage-sponsor": 10,
  "entrance-sponsor": 11,
  "vip-lounge-sponsor": 12,
  "in-kind-5k": 13,
  "in-kind-10k": 14,
  "in-kind-20k-plus": 15,
}

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pkg.sections.map((section) => (
                <div className="flex flex-col gap-3" key={section.heading}>
                  <span className="font-sans text-xs tracking-[0.15em] text-primary">
                    {section.heading}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {section.items.map((item) => (
                      <li key={item} className="font-sans text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:size-1 before:bg-primary/50 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
  const [filterCategory, setFilterCategory] = useState<"all" | "Main Event" | "Offsite Sponsorship" | "Specialized" | "In Kind">("all")

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
      return [...filtered].sort((a, b) => b.priceValue - a.priceValue)
    }

    if (!sortColumn) {
      if (filterCategory === "all") {
        return [...filtered].sort(
          (a, b) => defaultAllPackagesOrder[a.id] - defaultAllPackagesOrder[b.id]
        )
      }
      return filtered
    }

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
        {["all", "Main Event", "Offsite Sponsorship", "Specialized", "In Kind"].map((cat) => (
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
      <p className="font-sans text-xs md:text-sm text-muted-foreground">
        Offsite Sponsorship packages are primarily designed for designers.
      </p>

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

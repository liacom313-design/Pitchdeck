"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { MapPin, Calendar, Clock, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface DayData {
  date: number
  dayOfWeek: string
  label: string
  isMainVenue: boolean
  programming: string[]
  venue: string
  time: string
  icon: "city" | "main"
}

const SCHEDULE: DayData[] = [
  {
    date: 25,
    dayOfWeek: "Monday",
    label: "Opening Night/Opening Party",
    isMainVenue: false,
    programming: [
      "Opening Night Gala",
      "Welcome Reception",
      "VIP Preview",
    ],
    venue: "Opening Party Venue TBD",
    time: "Evening",
    icon: "city",
  },
  {
    date: 26,
    dayOfWeek: "Tuesday",
    label: "Offsite TBD",
    isMainVenue: false,
    programming: [
      "Special Programming",
      "Location & Details TBD",
    ],
    venue: "Location TBD",
    time: "TBD",
    icon: "city",
  },
  {
    date: 27,
    dayOfWeek: "Wednesday",
    label: "Historic Distillery District Showcase",
    isMainVenue: false,
    programming: [
      "Historic Distillery District Showcase",
      "Designer Presentations",
      "Pop-up Exhibitions",
      "Networking Events",
    ],
    venue: "Historic Distillery District",
    time: "All Day",
    icon: "city",
  },
  {
    date: 28,
    dayOfWeek: "Thursday",
    label: "Main Venue Event at T3 Bayside",
    isMainVenue: true,
    programming: [
      "Opening Night Runway Shows",
      "Art Exhibitions Launch",
      "Brand Activations",
      "VIP Reception",
    ],
    venue: "T3 Bayside, 251 Queens Quay East",
    time: "5 PM – 11 PM",
    icon: "main",
  },
  {
    date: 29,
    dayOfWeek: "Friday",
    label: "Main Venue Event at T3 Bayside",
    isMainVenue: true,
    programming: [
      "10+ Runway Shows",
      "Fashion Presentations",
      "Canadian Boutique Shopping",
      "Live Performances",
    ],
    venue: "T3 Bayside, 251 Queens Quay East",
    time: "5 PM – 11 PM",
    icon: "main",
  },
  {
    date: 30,
    dayOfWeek: "Saturday",
    label: "Main Venue Event at T3 Bayside",
    isMainVenue: true,
    programming: [
      "10+ Runway Shows",
      "Industry Panels",
      "Brand Activations",
      "Designer Meet & Greets",
    ],
    venue: "T3 Bayside, 251 Queens Quay East",
    time: "5 PM – 11 PM",
    icon: "main",
  },
  {
    date: 31,
    dayOfWeek: "Sunday",
    label: "Main Venue Event at T3 Bayside — Final Day",
    isMainVenue: true,
    programming: [
      "Closing Runway Shows",
      "Award Presentations",
      "Grand Finale Performance",
      "Closing Night Party",
    ],
    venue: "T3 Bayside, 251 Queens Quay East",
    time: "5 PM – 11 PM",
    icon: "main",
  },
]

export function InteractiveEventCalendar() {
  const [activeDay, setActiveDay] = useState<number | null>(null)
  const [hoveredDay, setHoveredDay] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  const selectedDay = activeDay ?? hoveredDay
  const selectedData = selectedDay !== null
    ? SCHEDULE.find((d) => d.date === selectedDay) ?? null
    : null

  // Close active day when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveDay(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const handleDayClick = useCallback((date: number) => {
    setActiveDay((prev) => (prev === date ? null : date))
  }, [])

  return (
    <div ref={containerRef} className="reveal flex flex-col gap-0">
      {/* Month label */}
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground">
          May 2026
        </span>
      </div>

      {/* Timeline track */}
      <div className="relative">
        {/* Connecting line behind the day tiles */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none hidden md:block"
          style={{ background: "#333333" }}
        />

        {/* Day tiles - 7-day horizontal grid */}
        <div className="grid grid-cols-7 gap-1 md:gap-2 relative z-10">
          {SCHEDULE.map((day) => {
            const isSelected = selectedDay === day.date
            const isActive = activeDay === day.date

            return (
              <button
                key={day.date}
                type="button"
                onClick={() => handleDayClick(day.date)}
                onMouseEnter={() => setHoveredDay(day.date)}
                onMouseLeave={() => setHoveredDay(null)}
                className={cn(
                  "group relative flex flex-col items-center gap-1 py-3 md:py-4 px-1 md:px-3 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  day.isMainVenue
                    ? "border border-[#FF0033]/40"
                    : "border border-[#333333]",
                  isSelected && day.isMainVenue && "border-[#FF0033] bg-[#FF0033]/10",
                  isSelected && !day.isMainVenue && "border-[#555555] bg-[#1A1A1A]",
                  !isSelected && "bg-[#0D0D0D] hover:bg-[#1A1A1A]"
                )}
                aria-label={`May ${day.date}, ${day.dayOfWeek} \u2014 ${day.label}`}
                aria-expanded={isActive}
              >
                {/* Day of week */}
                <span
                  className={cn(
                    "font-sans text-[9px] md:text-xs uppercase tracking-wider transition-colors duration-300 text-center leading-tight",
                    isSelected
                      ? day.isMainVenue
                        ? "text-[#FF0033]"
                        : "text-[#CCCCCC]"
                      : "text-[#666666]"
                  )}
                >
                  {day.dayOfWeek}
                </span>

                {/* Date number */}
                <span
                  className={cn(
                    "font-serif text-xl md:text-3xl leading-none transition-all duration-300",
                    isSelected
                      ? day.isMainVenue
                        ? "text-[#FF0033] scale-110"
                        : "text-[#FFFFFF] scale-110"
                      : day.isMainVenue
                        ? "text-[#FF0033]/70 group-hover:text-[#FF0033]"
                        : "text-[#FFFFFF]/50 group-hover:text-[#FFFFFF]"
                  )}
                >
                  {day.date}
                </span>

                {/* Label */}
                <span
                  className={cn(
                    "font-sans text-[7px] md:text-[9px] uppercase tracking-wider leading-tight text-center transition-colors duration-300 mt-1 px-1",
                    isSelected
                      ? "text-[#CCCCCC]"
                      : "text-[#555555] group-hover:text-[#999999]"
                  )}
                >
                  {day.date === 31 ? "Final Day" : day.isMainVenue ? "T3 Bayside" : "Offsite"}
                </span>

                {/* Active indicator dot */}
                <div
                  className={cn(
                    "w-1 h-1 rounded-full mt-1 transition-all duration-300",
                    isActive
                      ? day.isMainVenue
                        ? "bg-[#FF0033] scale-100"
                        : "bg-[#FFFFFF] scale-100"
                      : "bg-transparent scale-0"
                  )}
                />

                {/* Main venue top-edge accent */}
                {day.isMainVenue && (
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300",
                      isSelected ? "opacity-100" : "opacity-40 group-hover:opacity-70"
                    )}
                    style={{ background: "#FF0033" }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px]" style={{ background: "#FF0033" }} />
          <span className="font-sans text-[10px] md:text-xs text-[#999999] tracking-wider uppercase">
            Main Venue
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px]" style={{ background: "#555555" }} />
          <span className="font-sans text-[10px] md:text-xs text-[#999999] tracking-wider uppercase">
            Offsite
          </span>
        </div>
      </div>

      {/* Detail panel - appears below the timeline */}
      <div
        ref={detailRef}
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          selectedData ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        )}
      >
        {selectedData && (
          <div
            className={cn(
              "border-l-2 p-5 md:p-6",
              selectedData.isMainVenue
                ? "bg-[#0D0D0D] border-[#FF0033]"
                : "bg-[#0D0D0D] border-[#555555]"
            )}
          >
            <div className="flex flex-col gap-4">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <h4 className="font-serif text-xl md:text-2xl text-[#FFFFFF]">
                  {selectedData.dayOfWeek}, May {selectedData.date}
                  {selectedData.date === 31 && (
                    <span className="text-[#FF0033] ml-2 text-sm">
                      • Final Day
                    </span>
                  )}
                </h4>
                <span
                  className={cn(
                    "font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase px-3 py-1.5 w-fit leading-tight",
                    selectedData.isMainVenue
                      ? "bg-[#FF0033]/15 text-[#FF0033] border border-[#FF0033]/30"
                      : "bg-[#1A1A1A] text-[#999999] border border-[#333333]"
                  )}
                >
                  {selectedData.label}
                </span>
              </div>

              {/* Venue & time */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#999999] shrink-0" />
                  <span className="font-sans text-sm text-[#CCCCCC]">
                    {selectedData.venue}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#999999] shrink-0" />
                  <span className="font-sans text-sm text-[#CCCCCC]">
                    {selectedData.time}
                  </span>
                </div>
              </div>

              {/* Programming list */}
              <div className="flex flex-col gap-2 mt-1">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#666666]">
                  Programming
                </span>
                <ul className="flex flex-col gap-1.5">
                  {selectedData.programming.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ChevronRight
                        className={cn(
                          "w-3 h-3 shrink-0",
                          selectedData.isMainVenue
                            ? "text-[#FF0033]"
                            : "text-[#555555]"
                        )}
                      />
                      <span className="font-sans text-sm text-[#CCCCCC]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

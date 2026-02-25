"use client"

import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { InteractiveEventCalendar } from "@/components/fat/interactive-event-calendar"

export function EventOverviewSection() {
  return (
    <SectionWrapper id="event-overview" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
          Spring/Summer 2026
        </span>

        <SectionHeading as="h2">
          Seven Days, City-Wide
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
              The 2026 Spring Festival takes place over seven consecutive days,
              May 25&ndash;31, with programming distributed across
              Toronto&apos;s cultural landmarks and neighborhoods.
            </p>

            <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
              <strong className="text-foreground">Offsite Programming</strong>{" "}
              expands Fashion Week beyond the main runway into unconventional
              spaces&mdash;ROM, Bata Shoe Museum, The Bentway, The Historic
              Distillery District, turning Toronto itself into a fashion stage.
            </p>

            {/* Interactive Event Calendar */}
            <InteractiveEventCalendar />

            <SectionHeading as="h3" className="mt-8">
              Main Venue: T3 Bayside
            </SectionHeading>

            <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
              From May 28&ndash;31, the festival&apos;s main program is
              presented at T3 Bayside on Toronto&apos;s Waterfront&mdash;30,000
              square feet at 251 Queens Quay East. Each evening from 5pm&ndash;11pm
              showcases:
            </p>

            <ul className="reveal font-sans text-muted-foreground text-base leading-relaxed flex flex-col gap-2 pl-6 list-disc marker:text-primary">
              <li>40+ runway shows</li>
              <li>Fashion presentations and art exhibitions</li>
              <li>Brand activations</li>
              <li>Canadian boutique shopping</li>
              <li>Live performances</li>
              <li>Industry panels</li>
            </ul>
          </div>

          {/* Sidebar: Venue stats */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Venue stat cards */}
              {[
                { value: "30,000", unit: "sq ft", label: "Venue Space" },
                { value: "15K+", unit: "", label: "Attendance per season" },
                { value: "40+", unit: "", label: "Runway Shows" },
                { value: "4", unit: "Nights", label: "Main Programming" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="reveal bg-surface p-6 border-l-2 border-primary"
                >
                  <span className="font-serif text-foreground text-3xl md:text-4xl">
                    {stat.value}
                    {stat.unit && (
                      <span className="text-muted-foreground text-lg ml-2">
                        {stat.unit}
                      </span>
                    )}
                  </span>
                  <span className="block font-sans text-muted-foreground text-xs tracking-[0.15em] uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

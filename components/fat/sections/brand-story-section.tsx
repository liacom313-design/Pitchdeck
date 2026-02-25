"use client"

import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { PullQuote } from "@/components/fat/pull-quote"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { BrandTimeline } from "@/components/fat/brand-timeline"

export function BrandStorySection() {
  return (
    <SectionWrapper id="brand-story" className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Main column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
            Our Story
          </span>

          <SectionHeading as="h2">
            We Were Never Into Gate-Keeping
          </SectionHeading>

          <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            From the start, our runway has been open to every story, every
            vision. For us, everybody always meant every body.
          </p>

          <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            We&apos;ve staged more than{" "}
            <strong className="text-foreground">
              1,000 runway presentations
            </strong>
            , hosted thousands of models and artists, and put fashion and art
            side by side long before &ldquo;cross-disciplinary&rdquo; became a
            trend.
          </p>

          <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            What sets us apart isn&apos;t scale&mdash;it&apos;s values:
            community-built, radically inclusive, fashion as both art and a
            career pipeline.
          </p>

          <PullQuote
            quote="If fashion is not for everybody, it is not fashion."
          />
        </div>

        {/* Sidebar: Timeline */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <BrandTimeline />
          </div>
        </aside>
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

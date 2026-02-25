"use client"

import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { PullQuote } from "@/components/fat/pull-quote"
import { PartnershipTable } from "@/components/fat/partnership-table"

export function PartnershipTiersSection() {
  return (
    <SectionWrapper id="partnership-tiers" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
          Partnerships
        </span>

        <SectionHeading as="h2">Partnership Tiers</SectionHeading>

        <HorizontalRule variant="accent" />

        <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Strategic investment opportunities designed to amplify your brand
          across every touchpoint of Toronto&apos;s premier fashion platform.
          Explore all packages in our interactive table below.
        </p>

        <PartnershipTable />

        <PullQuote
          quote="Launching my collection at Fashion Art Toronto gave me validation from the Canadian fashion industry... my collection was exposed to many new people."
          attribution="Charles Lu, Designer"
        />

        <p className="reveal font-sans text-foreground text-lg md:text-xl mt-8">
          <strong>Packages from $5,000</strong>
        </p>
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

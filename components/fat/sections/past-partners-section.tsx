"use client"

import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { PartnerLogoGrid } from "@/components/fat/partner-logo-grid"

export function PastPartnersSection() {
  return (
    <SectionWrapper id="past-partners" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
          Our Network
        </span>

        <SectionHeading as="h2">Our Partners</SectionHeading>

        <PartnerLogoGrid />
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

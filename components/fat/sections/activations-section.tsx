"use client"

import Image from "next/image"
import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { PullQuote } from "@/components/fat/pull-quote"
import { ActivationExplorer } from "@/components/fat/activation-explorer"

export function ActivationsSection() {
  return (
    <SectionWrapper id="activations" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
          Activations
        </span>

        <SectionHeading as="h2">Activation Opportunities</SectionHeading>

        <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Transform your brand presence through premium activations:
          40&apos;x40&apos; promotional spaces, 30-second commercial videos
          before runway shows, runway integration with product features, branded
          items (lanyards, tableware, staff apparel), exclusive contests and
          giveaways, e-blasts to 20K subscribers, and designer sponsorships.
        </p>

        {/* Activation Explorer */}
        <ActivationExplorer />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="reveal">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/images/activation-mario-quote.png"
                alt="Fashion Art Toronto creatives portrait"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs italic text-muted-foreground">
              George Antonopoulos, Mario Fugnitto, Deidre Marinelli Fall/Winter 2025
            </p>
          </div>

          <PullQuote
            quote="Fashion Art Toronto is the birth of my success in fashion. So many opportunities came from being discovered on the platform. A safe space for artists like me to flourish."
            attribution="Mario Fugnitto, 2024"
          />
        </div>
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

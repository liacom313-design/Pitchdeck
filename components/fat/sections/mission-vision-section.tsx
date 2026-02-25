"use client"

import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"

export function MissionVisionSection() {
  return (
    <SectionWrapper id="mission-vision" className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Main column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
            Mission & Vision
          </span>

          <SectionHeading as="h2">
            Positioning Toronto as the Next Global Fashion Capital
          </SectionHeading>

          <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            Toronto doesn&apos;t have one look. Toronto has every look. 200
            origins. 180 languages. The fastest-growing city in North America.
          </p>

          <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            This city is a living kaleidoscope&mdash;layered cultures and
            voices, a moving tapestry that reinvents itself daily. That&apos;s
            what a fashion capital should be. Not locked in tradition, not
            chasing trends. A place that listens to the world and answers in its
            own voice.
          </p>
        </div>

        {/* Sidebar: Mission card */}
        <aside className="lg:col-span-4">
          <div className="reveal lg:sticky lg:top-24 bg-surface border-l-4 border-primary p-6 md:p-8">
            <p className="font-sans text-surface-foreground text-sm md:text-base leading-relaxed">
              For twenty years, Fashion Art Toronto has been the stage for this
              voice&mdash;transforming raw talent into global recognition
              through radical inclusion and unwavering commitment to every body,
              every story, every vision.
            </p>
          </div>
        </aside>
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

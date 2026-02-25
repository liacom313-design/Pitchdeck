import { HeroSection } from "@/components/fat/sections/hero-section"
import { BrandStorySection } from "@/components/fat/sections/brand-story-section"
import { MissionVisionSection } from "@/components/fat/sections/mission-vision-section"
import { EventOverviewSection } from "@/components/fat/sections/event-overview-section"
import { AudienceImpactSection } from "@/components/fat/sections/audience-impact-section"
import { PartnershipTiersSection } from "@/components/fat/sections/partnership-tiers-section"
import { ActivationsSection } from "@/components/fat/sections/activations-section"
import { PastPartnersSection } from "@/components/fat/sections/past-partners-section"
import { CTASection } from "@/components/fat/sections/cta-section"
import { TableOfContents } from "@/components/fat/table-of-contents"

export default function Page() {
  return (
    <>
      {/* Fixed Navigation Sidebar */}
      <TableOfContents />
      
      {/* Main Content - Offset for desktop sidebar */}
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden md:ml-72">
        <HeroSection />
        <BrandStorySection />
        <MissionVisionSection />
        <EventOverviewSection />
        <AudienceImpactSection />
        <PartnershipTiersSection />
        <ActivationsSection />
        <PastPartnersSection />
        <CTASection />
        <p className="mt-4 mb-8 text-center text-xs italic text-muted-foreground">
          2026 Fashion Art Toronto - All Rights Reserved
        </p>
      </main>
    </>
  )
}

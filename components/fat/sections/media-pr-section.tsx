"use client"

import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { PullQuote } from "@/components/fat/pull-quote"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MediaPRSection() {
  const pressHighlights = [
    {
      outlet: "FASHION Magazine",
      quote: "A showcase of Canadian creativity at its finest, featuring bold designs that challenge conventional fashion narratives.",
      coverage: "Feature Coverage"
    },
    {
      outlet: "The Kit",
      quote: "Fashion Art Toronto continues to push boundaries, offering a platform for emerging designers to shine on a national stage.",
      coverage: "Design Spotlight"
    },
    {
      outlet: "Toronto Star",
      quote: "The event has become a cultural cornerstone, attracting industry leaders and fashion enthusiasts alike.",
      coverage: "Event Review"
    },
    {
      outlet: "Globe & Mail",
      quote: "An essential fixture in Toronto's fashion calendar, championing diversity and innovation in Canadian design.",
      coverage: "Industry Feature"
    },
    {
      outlet: "CP24 Breakfast Television",
      quote: "Fashion Art Toronto brings the runway to life with spectacular shows that captivate audiences.",
      coverage: "Broadcast Feature"
    },
    {
      outlet: "blogTO",
      quote: "The go-to fashion event that showcases Toronto's thriving creative scene and emerging talent.",
      coverage: "City Feature"
    }
  ]

  const socialHighlights = [
    {
      platform: "TikTok",
      metric: "5M+",
      achievement: "Video views across designer and influencer content per season"
    },
    {
      platform: "Instagram",
      metric: "48M+",
      achievement: "Combined impressions from event coverage and partnerships per season"
    },
    {
      platform: "Influencer Network",
      metric: "450+",
      achievement: "Industry tastemakers and content creators engaged per season"
    }
  ]

  const prAchievements = [
    "Secured features in 20+ major national publications",
    "Generated 93M+ combined media impressions across FW2025 and Spring 2025",
    "Achieved 555+ total press placements (235 FW2025 + 320 Spring 2025)",
    "Hosted 250+ credentialed media representatives per event",
    "Coordinated with 450+ industry tastemakers and influencers",
    "Dominated Canadian fashion media cycle during event weeks",
    "Expanded international press coverage to US and UK markets",
    "Maintained consistent year-over-year growth in earned media value"
  ]

  return (
    <SectionWrapper id="media-pr" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <span className="reveal text-primary font-sans text-xs tracking-[0.25em] uppercase">
          Media Excellence
        </span>

        <SectionHeading as="h2">
          Media and PR Specifics
        </SectionHeading>

        <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Fashion Art Toronto delivered exceptional media performance throughout 
          2025, combining strategic PR campaigns with organic editorial coverage 
          to generate unprecedented reach and engagement across all platforms.
        </p>

        {/* Media Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="reveal bg-surface p-8 border-l-4 border-primary">
            <span className="font-serif text-foreground text-4xl md:text-5xl">
              62M+
            </span>
            <span className="block font-sans text-muted-foreground text-xs tracking-[0.15em] uppercase mt-3">
              Per Season Impressions
            </span>
            <span className="block font-sans text-muted-foreground text-sm mt-2">
              Combined FW2025 + Spring 2025
            </span>
          </div>

          <div className="reveal bg-surface p-8 border-l-4 border-primary">
            <span className="font-serif text-foreground text-4xl md:text-5xl">
              235+
            </span>
            <span className="block font-sans text-muted-foreground text-xs tracking-[0.15em] uppercase mt-3">
              Per Season
            </span>
            <span className="block font-sans text-muted-foreground text-sm mt-2">
              Across all media channels
            </span>
          </div>

          <div className="reveal bg-surface p-8 border-l-4 border-primary">
            <span className="font-serif text-foreground text-4xl md:text-5xl">
              300+
            </span>
            <span className="block font-sans text-muted-foreground text-xs tracking-[0.15em] uppercase mt-3">
              Per season coverage
            </span>
            <span className="block font-sans text-muted-foreground text-sm mt-2">
              Per event coverage
            </span>
          </div>

          <div className="reveal bg-surface p-8 border-l-4 border-primary">
            <span className="font-serif text-foreground text-4xl md:text-5xl">
              900+
            </span>
            <span className="block font-sans text-muted-foreground text-xs tracking-[0.15em] uppercase mt-3">
              Influencers per season
            </span>
            <span className="block font-sans text-muted-foreground text-sm mt-2">
              Influencers per event
            </span>
          </div>
        </div>

        <HorizontalRule variant="accent" className="mt-8" />

        {/* Official Media Partners Section */}
        <div className="mt-12">
          <SectionHeading as="h3">Official Media Partners</SectionHeading>
          <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
            Fashion Art Toronto is proud to collaborate with Canada&apos;s leading fashion 
            and lifestyle publications. These official media partners provide comprehensive 
            coverage and amplify our platform&apos;s reach across diverse audiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              "FASHION Magazine",
              "The Kit",
              "Style Canada",
              "BlogTO",
              "ViewTheVibe",
              "Liminul",
              "Evolve Magazine",
              "Living Luxe"
            ].map((partner) => (
              <div 
                key={partner}
                className="reveal bg-surface border-l-2 border-primary p-6 hover:bg-card transition-colors"
              >
                <h4 className="font-serif text-xl text-foreground">
                  {partner}
                </h4>
                <span className="block font-sans text-xs tracking-[0.15em] uppercase text-primary mt-2">
                  Official Media Partner
                </span>
              </div>
            ))}
          </div>
        </div>

        <HorizontalRule variant="accent" className="mt-12" />

        {/* Press Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div>
              <SectionHeading as="h3">Press Highlights</SectionHeading>
              <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
                Fashion Art Toronto secured prominent editorial coverage across 
                Canada&apos;s leading fashion, lifestyle, and news publications. 
                Major media outlets consistently featured the platform throughout 
                both Fall/Winter 2025 and Spring 2025 campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {pressHighlights.map((press) => (
                <Card key={press.outlet} className="reveal bg-card border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="font-serif text-2xl text-foreground">
                        {press.outlet}
                      </CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        {press.coverage}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="font-sans text-muted-foreground text-base leading-relaxed italic">
                      &quot;{press.quote}&quot;
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>

            <PullQuote
              quote="Notable additional coverage from Style Canada, ViewTheVibe, Vita Magazine, CityNews, and numerous digital fashion platforms amplified our reach across diverse audiences."
            />

            {/* Social Media Impact */}
            <div className="mt-12">
              <SectionHeading as="h3">Social Media Impact</SectionHeading>
              <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
                Digital and social platforms drove massive engagement, with TikTok 
                and Instagram leading content distribution. Influencer partnerships 
                created authentic touchpoints with highly engaged fashion audiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {socialHighlights.map((social) => (
                  <Card key={social.platform} className="reveal bg-surface border-l-2 border-primary">
                    <CardHeader>
                      <CardTitle className="font-serif text-3xl text-foreground">
                        {social.metric}
                      </CardTitle>
                      <span className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        {social.platform}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {social.achievement}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key PR Achievements */}
            <div className="mt-12">
              <SectionHeading as="h3">Key PR Achievements</SectionHeading>
              <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
                Strategic campaigns throughout 2025 delivered measurable success 
                across all PR objectives, establishing Fashion Art Toronto as 
                Canada&apos;s premier fashion platform.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {prAchievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="reveal flex items-start gap-3 font-sans text-muted-foreground text-base leading-relaxed"
                  >
                    <span className="text-primary mt-1 flex-shrink-0">●</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: Campaign Breakdown */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              <Card className="reveal bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground">
                    Fall/Winter 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-serif text-3xl text-foreground">62M</span>
                    <span className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      Media Impressions
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-3xl text-foreground">235</span>
                    <span className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      Press Placements
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="reveal bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground">
                    Spring 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-serif text-3xl text-foreground">31M</span>
                    <span className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      Media Impressions
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-3xl text-foreground">320</span>
                    <span className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      Press Placements
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="reveal bg-primary p-6">
                <p className="font-serif text-xl text-primary-foreground leading-tight">
                  Combined campaigns established FAT as the most-covered fashion 
                  platform in Canadian media
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <HorizontalRule className="mt-20" />
    </SectionWrapper>
  )
}

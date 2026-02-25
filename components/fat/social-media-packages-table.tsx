"use client"

interface SocialMediaPackageRow {
  id: string
  packageName: string
  details: string
  investment: string
}

const socialMediaPackageData: SocialMediaPackageRow[] = [
  {
    id: "collab-feed-post",
    packageName: "Collab Feed Post (IG)",
    details:
      "1 high-quality in-feed image post. Brand tagged in caption + image. 24-hour link in bio. Cross-post to stories.",
    investment: "$1200-$1800",
  },
  {
    id: "carousel-feature",
    packageName: "Carousel Feature (IG)",
    details:
      "3-5 image carousel. Brand integrated visually + tagged. Strong CTA. Story reshare included.",
    investment: "$1800-$2400",
  },
  {
    id: "reel-short-form-video",
    packageName: "Reel / Short-Form Video (IG + TikTok)",
    details:
      "High-production vertical video (runway energy, styled shoot, backstage, or branded moment). Posted to IG Reels + cross-posted to TikTok.",
    investment: "$2500-$4000",
  },
  {
    id: "instagram-story-set",
    packageName: "Instagram Story Set",
    details:
      "3-5 frames. Brand tag, link sticker, CTA. Can include BTS, event coverage, or product highlight.",
    investment: "$600-$1200",
  },
  {
    id: "feed-story-bundle",
    packageName: "Feed + Story Bundle",
    details:
      "1 Feed Post (single or carousel) + 3-5 Story frames.",
    investment: "$1800-$2800",
  },
  {
    id: "runway-presentation-collab",
    packageName: "Runway / Presentation Collaboration",
    details:
      "Brand integration within official runway coverage. Tag in caption + visual integration. Backstage moments. Cross-post to TikTok.",
    investment: "$3500-$6000",
  },
  {
    id: "custom-content-production",
    packageName: "Custom Content Production",
    details:
      "Full creative direction, styling, filming, and editing with FAT team. Includes content strategy consult.",
    investment: "Starting $5000",
  },
  {
    id: "extended-usage-rights",
    packageName: "Extended Usage Rights",
    details:
      "Paid media usage (whitelisting, ads, website, email, etc.). Based on duration + assets.",
    investment: "Starting $500",
  },
]

export function SocialMediaPackagesTable() {
  return (
    <div id="social-media-packages" className="reveal flex flex-col gap-6 scroll-mt-24">
      <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
        SOCIAL MEDIA PACKAGES
      </h3>

      <div className="border border-border overflow-x-auto">
        <table className="w-full min-w-[860px]">
          <thead>
            <tr className="border-b-2 border-primary bg-card">
              <th className="p-4 md:p-6 text-left font-sans text-xs tracking-[0.2em] uppercase text-foreground">
                Package
              </th>
              <th className="p-4 md:p-6 text-left font-sans text-xs tracking-[0.2em] uppercase text-foreground">
                Details (Refined)
              </th>
              <th className="p-4 md:p-6 text-right font-sans text-xs tracking-[0.2em] uppercase text-foreground whitespace-nowrap">
                Investment
              </th>
            </tr>
          </thead>
          <tbody>
            {socialMediaPackageData.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-background hover:bg-[#1a1a1a]" : "bg-[#0f0f0f] hover:bg-[#1a1a1a]"}
              >
                <td className="p-4 md:p-6 align-top border-b border-border">
                  <p className="font-serif text-base md:text-lg text-foreground leading-snug">
                    {row.packageName}
                  </p>
                </td>
                <td className="p-4 md:p-6 align-top border-b border-border">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {row.details}
                  </p>
                </td>
                <td className="p-4 md:p-6 align-top border-b border-border text-right">
                  <p className="font-sans text-sm md:text-base text-primary whitespace-nowrap">
                    {row.investment}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

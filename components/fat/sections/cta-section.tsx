"use client"

import Image from "next/image"
import { SectionWrapper } from "@/components/fat/section-wrapper"
import { SectionHeading } from "@/components/fat/section-heading"
import { HorizontalRule } from "@/components/fat/horizontal-rule"
import { FATLogo } from "@/components/fat/fat-logo"
import { Mail, Globe, Instagram } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CTASection() {
  const ref = useScrollReveal()

  return (
    <SectionWrapper id="contact" className="py-24 md:py-40">
      <div ref={ref} className="flex flex-col items-center text-center gap-12">
        <FATLogo className="reveal" />

        <SectionHeading as="h2" className="max-w-4xl">
          Join the Legacy
        </SectionHeading>

        <HorizontalRule variant="accent" />

        <p className="reveal font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          Be the brand that powers tomorrow&apos;s visionaries. Partner with FAT
          to position Toronto as a global fashion capital and align with 20 years
          of creativity, diversity, and innovation.
        </p>

        {/* Contact details */}
        <div className="reveal flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-1 items-center">
            <div className="mb-4 w-36 h-36 md:w-44 md:h-44 relative overflow-hidden rounded-full">
              <Image
                src="/vanja-vasic-portrait.png"
                alt="Portrait of Vanja Vasic"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-foreground text-2xl md:text-3xl">
              Vanja Vasic
            </span>
            <span className="font-sans text-muted-foreground text-sm tracking-widest uppercase">
              Director
            </span>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <a
              href="mailto:vanja@fashionarttoronto.ca"
              className="font-sans text-foreground text-sm md:text-base hover:text-primary transition-colors duration-300 flex items-center gap-3 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-primary" />
              vanja@fashionarttoronto.ca
            </a>
            <a
              href="https://fashionarttoronto.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-foreground text-sm md:text-base hover:text-primary transition-colors duration-300 flex items-center gap-3 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-primary" />
              fashionarttoronto.ca
            </a>
            <a
              href="https://instagram.com/fashionarttoronto"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-foreground text-sm md:text-base hover:text-primary transition-colors duration-300 flex items-center gap-3 cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-primary" />
              @fashionarttoronto
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

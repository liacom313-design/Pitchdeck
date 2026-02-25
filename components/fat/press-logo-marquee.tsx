"use client"

const pressPartners = [
  { name: "Vogue", width: 140 },
  { name: "Toronto Star", width: 180 },
  { name: "blogTO", width: 120 },
  { name: "Style Canada", width: 160 },
  { name: "Global News", width: 170 },
  { name: "View the Vibe", width: 150 },
]

interface LogoItemProps {
  name: string
  width: number
}

function LogoItem({ name, width }: LogoItemProps) {
  return (
    <div
      className="press-logo-item flex items-center justify-center px-8 md:px-12 transition-all duration-300"
      style={{ minWidth: `${width}px` }}
    >
      <span
        className="font-serif text-white text-2xl md:text-3xl whitespace-nowrap tracking-tight"
        style={{ transition: "color 0.3s ease" }}
      >
        {name}
      </span>
    </div>
  )
}

export function PressLogoMarquee() {
  // Duplicate the logos to create seamless infinite scroll
  const duplicatedLogos = [...pressPartners, ...pressPartners, ...pressPartners]

  return (
    <div className="w-full overflow-hidden py-8 relative bg-black">
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="press-marquee-container flex w-max">
        <div className="press-marquee-track flex items-center gap-0">
          {duplicatedLogos.map((partner, index) => (
            <LogoItem key={`${partner.name}-${index}`} name={partner.name} width={partner.width} />
          ))}
        </div>
        {/* Second track for seamless loop */}
        <div className="press-marquee-track flex items-center gap-0" aria-hidden="true">
          {duplicatedLogos.map((partner, index) => (
            <LogoItem key={`${partner.name}-duplicate-${index}`} name={partner.name} width={partner.width} />
          ))}
        </div>
      </div>
    </div>
  )
}

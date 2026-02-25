import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3"
  className?: string
  accent?: boolean
}

export function SectionHeading({
  children,
  as: Tag = "h2",
  className,
  accent = false,
}: SectionHeadingProps) {
  const sizes = {
    h1: "text-5xl md:text-7xl lg:text-[96px]",
    h2: "text-3xl md:text-5xl lg:text-6xl",
    h3: "text-xl md:text-2xl lg:text-3xl",
  }

  return (
    <Tag
      className={cn(
        "font-sans text-balance",
        sizes[Tag],
        Tag === "h1"
          ? "tracking-[-0.035em] leading-[1.05] display-breakout"
          : Tag === "h2"
            ? "tracking-[-0.025em] leading-[1.08]"
            : "tracking-[-0.015em] leading-[1.12]",
        accent ? "text-primary" : "text-foreground",
        "reveal",
        className
      )}
    >
      {children}
    </Tag>
  )
}

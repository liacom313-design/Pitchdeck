import Image from "next/image"
import { cn } from "@/lib/utils"

interface FATLogoProps {
  className?: string
  /** Smaller variant for nav/sidebar */
  variant?: "default" | "compact"
}

export function FATLogo({ className, variant = "default" }: FATLogoProps) {
  const isCompact = variant === "compact"

  return (
    <div className={cn("flex flex-col items-start", className)}>
      <Image
        src="/fat-logo.png"
        alt="Fashion Art Toronto"
        width={isCompact ? 140 : 280}
        height={isCompact ? 120 : 240}
        className={cn(
          "h-auto object-contain object-left",
          isCompact ? "w-[140px]" : "w-full max-w-[280px]"
        )}
        priority={!isCompact}
      />
    </div>
  )
}

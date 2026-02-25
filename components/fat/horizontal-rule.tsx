import { cn } from "@/lib/utils"

interface HorizontalRuleProps {
  variant?: "default" | "accent"
  className?: string
}

export function HorizontalRule({ variant = "default", className }: HorizontalRuleProps) {
  return (
    <hr
      className={cn(
        variant === "default" ? "editorial-hr w-full" : "editorial-hr-accent",
        className
      )}
    />
  )
}

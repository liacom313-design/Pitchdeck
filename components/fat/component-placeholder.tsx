import { cn } from "@/lib/utils"

interface ComponentPlaceholderProps {
  name: string
  description?: string
  className?: string
  minHeight?: string
}

/**
 * Temporary placeholder for heavy interactive components.
 * These will be replaced with full implementations by other developers.
 */
export function ComponentPlaceholder({
  name,
  description,
  className,
  minHeight = "200px",
}: ComponentPlaceholderProps) {
  return (
    <div
      className={cn(
        "reveal border border-dashed border-[#333333] flex flex-col items-center justify-center gap-3 px-8 py-12",
        className
      )}
      style={{ minHeight }}
    >
      <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">
        Component
      </span>
      <span className="text-foreground font-serif text-lg text-center">
        {name}
      </span>
      {description && (
        <span className="text-muted-foreground font-sans text-sm text-center max-w-md">
          {description}
        </span>
      )}
    </div>
  )
}

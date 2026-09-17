"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  mode?: "single" | "range" | "multiple"
  selected?: unknown
  onSelect?: (date: unknown) => void
  showOutsideDays?: boolean
  initialFocus?: boolean
}

function Calendar({
  className,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("p-3", className)} {...props}>
      {/* Calendar placeholder */}
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

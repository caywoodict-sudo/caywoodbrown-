import React from "react"

interface OrganicDividerProps {
  fillColor?: string
  className?: string
  flip?: boolean
  variant?: "wave" | "curve" | "slope"
}

export default function OrganicDivider({
  fillColor = "#FAF7F0",
  className = "",
  flip = false,
  variant = "wave",
}: OrganicDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none ${
        flip ? "rotate-180 -mb-1" : "-mt-1"
      } ${className}`}
      aria-hidden="true"
    >
      {variant === "wave" && (
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 block"
        >
          <path
            d="M0,24 C240,60 480,0 720,32 C960,64 1200,8 1440,28 L1440,64 L0,64 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === "curve" && (
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-10 md:h-14 block"
        >
          <path
            d="M0,0 C380,56 1060,56 1440,0 L1440,56 L0,56 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === "slope" && (
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-10 md:h-12 block"
        >
          <path
            d="M0,48 L1440,8 L1440,48 Z"
            fill={fillColor}
          />
        </svg>
      )}
    </div>
  )
}

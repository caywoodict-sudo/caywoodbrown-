import React from "react"

interface BotanicalGraphicProps {
  className?: string
  variant?: "leaves" | "sprouts" | "stamp" | "topography"
  color?: string
  opacity?: number
}

export default function BotanicalGraphic({
  className = "",
  variant = "leaves",
  color = "#00521A",
  opacity = 0.08,
}: BotanicalGraphicProps) {
  if (variant === "stamp") {
    return (
      <div
        className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 160 160"
          className="w-28 h-28 sm:w-36 sm:h-36 animate-[spin_40s_linear_infinite]"
          style={{ color }}
        >
          <path
            id="stamp-circle"
            d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            fill="none"
          />
          <text className="text-[9px] font-bold uppercase tracking-[0.28em] fill-current">
            <textPath href="#stamp-circle" startOffset="0%">
              • CAYWOOD BROWN FOUNDATION • DRIVING IMPACT SINCE 2006
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-black text-sm"
            style={{ color, backgroundColor: `${color}15` }}
          >
            20y
          </div>
        </div>
      </div>
    )
  }

  if (variant === "sprouts") {
    return (
      <div
        className={`absolute pointer-events-none overflow-hidden select-none ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={color}>
            <path d="M200 400 C190 320, 150 250, 100 200 C160 210, 210 250, 200 400 Z" />
            <path d="M200 350 C210 270, 260 220, 320 180 C260 180, 210 230, 200 350 Z" />
            <path d="M200 280 C180 200, 120 150, 60 120 C120 110, 180 160, 200 280 Z" />
            <path d="M200 220 C220 150, 270 110, 340 80 C280 80, 220 120, 200 220 Z" />
            <path d="M200 160 C190 100, 160 50, 120 20 C170 30, 200 70, 200 160 Z" />
            <circle cx="200" cy="50" r="14" />
          </g>
        </svg>
      </div>
    )
  }

  if (variant === "topography") {
    return (
      <div
        className={`absolute pointer-events-none overflow-hidden select-none ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke={color} strokeWidth="1.5" strokeDasharray="4 4" fill="none">
            <ellipse cx="300" cy="300" rx="270" ry="240" />
            <ellipse cx="300" cy="300" rx="220" ry="190" />
            <ellipse cx="300" cy="300" rx="170" ry="140" />
            <ellipse cx="300" cy="300" rx="120" ry="90" />
            <ellipse cx="300" cy="300" rx="70" ry="50" />
          </g>
        </svg>
      </div>
    )
  }

  // Default: Organic Leaf foliage cluster
  return (
    <div
      className={`absolute pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          <path d="M60 120 C90 40, 180 50, 220 110 C260 170, 200 250, 120 220 C60 195, 30 170, 60 120 Z" />
          <path d="M260 60 C310 10, 400 30, 410 100 C420 170, 330 220, 270 170 C220 130, 230 100, 260 60 Z" />
          <path d="M120 340 C170 260, 280 290, 290 380 C300 470, 190 510, 130 460 C70 410, 80 380, 120 340 Z" />
          <path d="M340 280 C380 220, 460 250, 470 320 C480 390, 410 440, 350 400 C300 360, 310 320, 340 280 Z" />
        </g>
      </svg>
    </div>
  )
}

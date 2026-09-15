"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

interface ThematicRow {
  id: string
  title: string
  description: string
  hoverBg: string
  hoverTextColor: string
  hoverDescColor: string
  circleColor: string
  hoverCircleBg: string
  hoverArrowFill: string
  href: string
}

const thematicRows: ThematicRow[] = [
  {
    id: "computer",
    title: "Computer Appreciation Program",
    description: "Free, beginner-friendly computing and office suite literacy introducing participants to essential workplace tools and the digital economy.",
    hoverBg: "bg-[#F47E28]", // Flame
    hoverTextColor: "group-hover:text-white",
    hoverDescColor: "text-white/95",
    circleColor: "fill-[#F47E28] stroke-[#F47E28]",
    hoverCircleBg: "group-hover:fill-white group-hover:stroke-white",
    hoverArrowFill: "group-hover:fill-[#F47E28]",
    href: "/programs/computer-appreciation",
  },
  {
    id: "music",
    title: "Music Equipment Training Program",
    description: "Hands-on instruction in drums, keyboard, chord progressions, timing, and stage presence, unlocking creative income-generating careers.",
    hoverBg: "bg-[#F6CE40]", // Sunshine
    hoverTextColor: "group-hover:text-[#142118]",
    hoverDescColor: "text-[#142118]/85",
    circleColor: "fill-[#F6CE40] stroke-[#F6CE40]",
    hoverCircleBg: "group-hover:fill-white group-hover:stroke-white",
    hoverArrowFill: "group-hover:fill-[#142118]",
    href: "/programs/music-training",
  },
  {
    id: "rehabilitation",
    title: "Youth Rehabilitation & Empowerment Program",
    description: "Compassionate substance abuse counseling, psychosocial care, life skills reorientation, and supported community reintegration.",
    hoverBg: "bg-[#4CB9D1]", // Sky
    hoverTextColor: "group-hover:text-[#142118]",
    hoverDescColor: "text-[#142118]/85",
    circleColor: "fill-[#4CB9D1] stroke-[#4CB9D1]",
    hoverCircleBg: "group-hover:fill-white group-hover:stroke-white",
    hoverArrowFill: "group-hover:fill-[#142118]",
    href: "/programs/youth-rehabilitation",
  },
  {
    id: "volunteerism",
    title: "Graduate Internship & Volunteerism Academy",
    description: "Structured 6-month corporate placements with NLNG, Rivers State Govt, and PHCCIMA, delivering an 80%+ full-time employment retention rate.",
    hoverBg: "bg-[#F47E28]", // Flame
    hoverTextColor: "group-hover:text-white",
    hoverDescColor: "text-white/95",
    circleColor: "fill-[#F47E28] stroke-[#F47E28]",
    hoverCircleBg: "group-hover:fill-white group-hover:stroke-white",
    hoverArrowFill: "group-hover:fill-[#F47E28]",
    href: "/programs/volunteerism-academy",
  },
  {
    id: "health",
    title: "Youth Health Awareness Program",
    description: "Secondary school education campaigns on personal hygiene, nutrition, emotional resilience, mental health, and values-driven abstinence.",
    hoverBg: "bg-[#4BAE44]", // Field
    hoverTextColor: "group-hover:text-white",
    hoverDescColor: "text-white/95",
    circleColor: "fill-[#4BAE44] stroke-[#4BAE44]",
    hoverCircleBg: "group-hover:fill-white group-hover:stroke-white",
    hoverArrowFill: "group-hover:fill-[#4BAE44]",
    href: "/programs/youth-health-awareness",
  },
  {
    id: "advocacy",
    title: "Her Voice, Her Power: Girl Child Advocacy",
    description: "Empowering girls through leadership workshops, education retention scholarships, mentorship, and free menstrual dignity kits.",
    hoverBg: "bg-[#C7ED9F]", // Mint
    hoverTextColor: "group-hover:text-[#00521A]",
    hoverDescColor: "text-[#00521A]/85",
    circleColor: "fill-[#C7ED9F] stroke-[#C7ED9F]",
    hoverCircleBg: "group-hover:fill-white group-hover:stroke-white",
    hoverArrowFill: "group-hover:fill-[#00521A]",
    href: "/programs/girl-child-advocacy",
  },
]

export default function ThematicPillars() {
  return (
    <section
      id="thematic-pillars"
      data-name="what-we-do"
      className="relative pt-24 md:pt-36 pb-0 overflow-hidden bg-[#142118]"
    >
      {/* Background Image with Farm Africa Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
          alt="Students learning together in computer lab"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#142118] via-[#142118]/85 to-[#142118] pointer-events-none" />

      {/* Farm Africa Giant Sunshine Yellow Title */}
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-20 text-center">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-extrabold text-[#F6CE40] tracking-tight">
          What we do
        </h2>
        <p className="mt-4 text-[#F2EBD9]/80 text-base sm:text-lg max-w-2xl mx-auto">
          Hover over each programmatic pillar to explore how we equip youth from vulnerability to self-sustaining leadership.
        </p>
      </div>

      {/* 100% Full-Bleed Horizontal Accordion Stripes */}
      <div className="relative z-20 w-full border-b border-[#E4DCCA]/20">
        {thematicRows.map((row) => (
          <div
            key={row.id}
            className="group relative w-full border-t border-[#E4DCCA]/20 overflow-hidden cursor-pointer"
          >
            {/* Slide-Up Color Fill with fluid ease curve */}
            <div
              className={`absolute inset-0 ${row.hoverBg} transition-transform duration-500 ease-fa translate-y-full group-hover:translate-y-0 z-10`}
            />

            {/* Link click target */}
            <Link
              href={row.href}
              className="absolute inset-0 z-30"
              aria-label={row.title}
            />

            {/* Inner Content Row */}
            <div className="relative w-full z-20 pointer-events-none">
              <div className="container max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex justify-between items-center py-7 sm:py-10 transition-all duration-500">
                  
                  {/* Left Side: Single Stable Title + Fluid Revealing Description */}
                  <div className="relative w-full max-w-4xl pr-8 flex flex-col justify-center">
                    <h3 className={`text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-bold text-white transition-colors duration-500 ease-fa ${row.hoverTextColor} leading-tight`}>
                      {row.title}
                    </h3>

                    {/* Smooth expanding description without layout flicker */}
                    <div className="overflow-hidden transition-all duration-500 ease-fa max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2.5">
                      <p className={`text-xs sm:text-base md:text-lg font-medium leading-relaxed ${row.hoverDescColor} max-w-3xl`}>
                        {row.description}
                      </p>
                    </div>
                  </div>

                  {/* Circular Transforming Arrow (Farm Africa Signature Scale Effect) */}
                  <div className="flex relative shrink-0 transition-transform duration-500 ease-fa origin-center group-hover:scale-125">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-500 ease-fa"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="11.5"
                        className={`transition-colors duration-500 ease-fa ${row.circleColor} ${row.hoverCircleBg}`}
                        strokeWidth="0.5"
                      />
                      <path
                        d="M15.8045 12.0048C15.8665 12.0698 15.9156 12.147 15.9492 12.232C15.9827 12.3169 16 12.408 16 12.5C16 12.592 15.9827 12.6831 15.9492 12.768C15.9156 12.853 15.8665 12.9302 15.8045 12.9952L13.138 15.7949C13.0129 15.9262 12.8433 16 12.6664 16C12.4895 16 12.3198 15.9262 12.1947 15.7949C12.0696 15.6635 11.9994 15.4854 11.9994 15.2997C11.9994 15.114 12.0696 14.9358 12.1947 14.8045L13.7238 13.1999H8.66662C8.48982 13.1999 8.32027 13.1262 8.19525 12.9949C8.07023 12.8637 8 12.6856 8 12.5C8 12.3144 8.07023 12.1363 8.19525 12.0051C8.32027 11.8738 8.48982 11.8001 8.66662 11.8001H13.7238L12.1947 10.1955C12.0696 10.0642 11.9994 9.88605 11.9994 9.70031C11.9994 9.51458 12.0696 9.33645 12.1947 9.20512C12.3198 9.07378 12.4895 9 12.6664 9C12.4895 9 13.0129 9.07378 13.138 9.20512L15.8045 12.0048Z"
                        fill="white"
                        className={`transition-colors duration-500 ease-fa ${row.hoverArrowFill}`}
                      />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

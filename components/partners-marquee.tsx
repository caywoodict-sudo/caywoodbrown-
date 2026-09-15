"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Handshake } from "lucide-react"

interface Partner {
  id: string
  name: string
  logo: string
  width: number
  height: number
  description?: string
}

const PARTNERS: Partner[] = [
  {
    id: "medwhole",
    name: "MedWHOLE ALLIANCE",
    logo: "/images/partners/partner-1.png",
    width: 240,
    height: 133,
    description: "Healthcare and community wellbeing alliance",
  },
  {
    id: "ndlink",
    name: "NDlink",
    logo: "/images/partners/partner-2.png",
    width: 240,
    height: 133,
    description: "Linking Partners for Niger Delta Development",
  },
  {
    id: "partner-3",
    name: "Development Partner Alliance",
    logo: "/images/partners/partner-3.png",
    width: 240,
    height: 133,
    description: "Community education and youth empowerment",
  },
  {
    id: "partner-4",
    name: "Youth Skills Initiative",
    logo: "/images/partners/partner-4.png",
    width: 240,
    height: 133,
    description: "Vocational skills and livelihood development",
  },
  {
    id: "partner-5",
    name: "Niger Delta Civil Society Network",
    logo: "/images/partners/partner-5.png",
    width: 240,
    height: 133,
    description: "Grassroots civic action and community resilience",
  },
  {
    id: "partner-6",
    name: "Regional Tech and Enterprise Hub",
    logo: "/images/partners/partner-6.png",
    width: 240,
    height: 133,
    description: "Digital innovation and social entrepreneurship",
  },
]

export default function PartnersMarquee() {
  // Duplicate array 3 times to ensure infinite smooth scrolling without visible seam
  const tickerItems = [...PARTNERS, ...PARTNERS, ...PARTNERS]

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#FAF7F0] border-t border-b border-[#00521A]/10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 mb-10 text-center">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8D6] text-[#00521A] text-xs font-bold uppercase tracking-widest mb-4">
          <Handshake className="w-3.5 h-3.5 text-[#4BAE44]" />
          <span>Our Partners & Allies</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00521A] tracking-tight leading-tight max-w-3xl mx-auto">
          Collaborating for Lasting Community Impact
        </h2>

        <p className="text-base sm:text-lg text-[#142118]/75 max-w-2xl mx-auto mt-3">
          We proudly collaborate with government agencies, civil society coalitions, and private sector leaders to expand youth rehabilitation, digital training, and grassroots development.
        </p>
      </div>

      {/* Marquee Ticker Container with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Edge Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF7F0] to-transparent z-10" />

        {/* Right Gradient Edge Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF7F0] to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="animate-marquee-loop flex items-center gap-6 sm:gap-8 py-4">
          {tickerItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group relative flex-shrink-0 flex items-center justify-center bg-white rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border border-[#00521A]/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 min-w-[200px] sm:min-w-[240px] h-24 sm:h-28"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-16 sm:max-h-20 max-w-[160px] sm:max-w-[190px] w-auto h-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#142118] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md whitespace-nowrap z-20 shadow-lg">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer link */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 mt-10 text-center">
        <p className="text-xs sm:text-sm text-[#142118]/70 inline-flex items-center gap-2">
          <span>Interested in partnering with Caywood Brown Foundation?</span>
          <Link
            href="/contact"
            className="text-[#00521A] font-bold hover:underline inline-flex items-center gap-1 group"
          >
            <span>Get in touch with our team</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </p>
      </div>
    </section>
  )
}

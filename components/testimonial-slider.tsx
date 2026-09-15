"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I never thought I’d see the day where I feel truly capable and valued at work. Tasks that seemed simple left me overwhelmed, but the free computer training gave me that chance and my boss promoted me. I'm forever grateful.",
    author: "Mrs. A",
    role: "Office Assistant & Promotion Beneficiary",
    pillar: "Computer Appreciation",
    image: "/placeholder.svg?height=100&width=100&text=MA",
  },
  {
    quote:
      "Before joining the Computer Appreciation Program, I couldn't even operate a laptop without help. Within weeks, I was using Word, Excel, and sending emails. Today, I work in a local firm and can support my family.",
    author: "Blessing E., 22",
    role: "Computer Appreciation Graduate",
    pillar: "Digital Literacy",
    image: "/placeholder.svg?height=100&width=100&text=BE",
  },
  {
    quote:
      "Before joining the Music Equipment Training Program, I was unemployed and frustrated. Learning the drums gave me a skill I earn from. Now I play for events and church programs here in Port Harcourt. They gave me dignity.",
    author: "Peterson Tochukwu",
    role: "Session Drummer & Music Graduate",
    pillar: "Creative Arts",
    image: "/placeholder.svg?height=100&width=100&text=PT",
  },
  {
    quote:
      "Before I joined this program, I felt like my life was ruined by drugs. The team didn't judge me; they helped me heal through counseling and mentorship. Today, I am sober, learning a skill, and rebuilding my life.",
    author: "Rio P.",
    role: "Youth Rehabilitation Alumnus",
    pillar: "Youth Rehabilitation",
    image: "/placeholder.svg?height=100&width=100&text=RP",
  },
  {
    quote:
      "When I joined the Caywood Brown Foundation as a volunteer, I was confused about my career path. The structured mentorship helped me find my strengths. Today, I have clarity and work in a multinational company.",
    author: "Hope S.",
    role: "Volunteerism Academy Alumna",
    pillar: "Career Mentorship",
    image: "/placeholder.svg?height=100&width=100&text=HS",
  },
  {
    quote:
      "Before the program came to our school, I was always afraid to speak up in class. The leadership workshop helped me believe that my ideas matter. I now volunteer to lead group discussions and ran for class prefect.",
    author: "Mercy P.",
    role: "Her Voice, Her Power Participant",
    pillar: "Girl Child Advocacy",
    image: "/placeholder.svg?height=100&width=100&text=MP",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div
      className="relative max-w-4xl mx-auto px-2"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className="border border-[#00521A]/15 bg-[#FAF7F0] shadow-sm rounded-3xl overflow-hidden">
                <CardContent className="p-8 sm:p-12 md:p-14">
                  <div className="flex flex-col items-center text-center">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-[11px] font-bold uppercase tracking-widest mb-6">
                      {testimonial.pillar}
                    </span>

                    <div className="mb-6 text-[#F47E28]">
                      <Quote className="h-10 w-10 sm:h-12 sm:w-12 rotate-180" />
                    </div>

                    <blockquote className="mb-8 font-serif text-lg sm:text-xl md:text-2xl text-[#142118] italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full mb-3 border-2 border-[#00521A]/20 bg-[#C7ED9F]/30">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-serif font-bold text-base sm:text-lg text-[#142118]">
                          {testimonial.author}
                        </div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-[#00521A]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Nav Controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={prev}
          aria-label="Previous story"
          className="w-11 h-11 rounded-full bg-white border border-[#00521A]/20 flex items-center justify-center text-[#00521A] hover:bg-[#00521A] hover:text-white transition-colors shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#F47E28] w-8" : "bg-[#00521A]/20 w-2.5 hover:bg-[#00521A]/40"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next story"
          className="w-11 h-11 rounded-full bg-white border border-[#00521A]/20 flex items-center justify-center text-[#00521A] hover:bg-[#00521A] hover:text-white transition-colors shadow-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

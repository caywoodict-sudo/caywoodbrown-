"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The educational support program provided by the Caywood Brown Foundation changed my daughter's life. She now has opportunities we never thought possible.",
    author: "Sarah Johnson",
    role: "Parent",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    quote:
      "As a community partner, we've seen firsthand the incredible impact the foundation has made in our neighborhood. Their dedication to service is unmatched.",
    author: "Michael Rodriguez",
    role: "Community Leader",
    image: "/placeholder.svg?height=100&width=100&text=MR",
  },
  {
    quote:
      "The health initiative program helped me access critical medical care when I needed it most. I'm forever grateful for their support during a difficult time.",
    author: "Tanya Williams",
    role: "Program Beneficiary",
    image: "/placeholder.svg?height=100&width=100&text=TW",
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
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 text-amber-500">
                      <Quote className="h-10 w-10" />
                    </div>
                    <blockquote className="mb-8 text-lg md:text-xl text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full mb-4 border-2 border-amber-100">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${index === current ? "bg-amber-500 w-6" : "bg-gray-300"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-amber-600 transition-colors"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-amber-600 transition-colors"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

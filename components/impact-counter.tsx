"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface ImpactCounterProps {
  label: string
  endValue: number
  suffix?: string
  duration?: number
}

export default function ImpactCounter({ label, endValue, suffix = "", duration = 2000 }: ImpactCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const startTime = useRef<number | null>(null)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = timestamp - startTime.current

      const percentage = Math.min(progress / duration, 1)
      const easedPercentage = easeOutQuart(percentage)

      setCount(Math.floor(easedPercentage * endValue))

      if (progress < duration) {
        animationFrameId.current = requestAnimationFrame(animate)
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [inView, endValue, duration])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

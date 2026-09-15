"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Heart } from "lucide-react"

// Farm Africa Authentic Botanical Tone-on-Tone Foliage Silhouettes
function BotanicalSilhouettes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#F2EBD9">
          <path d="M120 180 C140 120, 200 130, 240 170 C280 210, 240 280, 180 260 C130 240, 100 220, 120 180 Z" />
          <path d="M40 80 C80 50, 130 90, 110 140 C90 190, 30 160, 20 120 C10 90, 20 100, 40 80 Z" />
          <path d="M280 40 C310 10, 370 30, 360 80 C350 130, 290 120, 270 90 C250 60, 260 50, 280 40 Z" />
          <path d="M1240 100 C1280 50, 1360 70, 1370 130 C1380 190, 1300 220, 1250 180 C1200 140, 1210 130, 1240 100 Z" />
          <path d="M1360 260 C1410 220, 1460 250, 1450 310 C1440 370, 1370 380, 1330 330 C1300 290, 1320 280, 1360 260 Z" />
          <path d="M80 720 C120 650, 200 680, 210 750 C220 820, 140 860, 90 820 C50 780, 60 760, 80 720 Z" />
          <path d="M240 810 C270 760, 340 780, 350 830 C360 880, 290 910, 250 880 C220 850, 220 830, 240 810 Z" />
          <path d="M1280 700 C1330 640, 1420 660, 1430 730 C1440 800, 1350 850, 1290 810 C1240 770, 1250 740, 1280 700 Z" />
          <path d="M1120 800 C1160 750, 1230 770, 1240 820 C1250 870, 1180 910, 1130 870 C1090 840, 1100 820, 1120 800 Z" />
          <path d="M720 120 C740 80, 780 90, 790 130 C800 170, 750 190, 730 170 C710 150, 710 140, 720 120 Z" />
          <path d="M600 680 C630 620, 700 640, 710 700 C720 760, 650 790, 610 760 C580 730, 580 700, 600 680 Z" opacity="0.7" />
          <path d="M900 50 C920 20, 960 30, 970 70 C980 110, 930 130, 910 100 C890 80, 890 60, 900 50 Z" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}

const rotatingSolutions = [
  { word: "solution", color: "text-[#F47E28]" },
  { word: "opportunity", color: "text-[#F6CE40]" },
  { word: "education", color: "text-[#C7ED9F]" },
  { word: "mentorship", color: "text-[#4CB9D1]" },
  { word: "rehabilitation", color: "text-[#F47E28]" },
]

const impactStats = [
  "15,000+ Youths & Families Reached",
  "48 Communities Served Across Rivers & Niger Delta",
  "3,000+ Digital Cohort Graduates",
  "20 Years of Community Transformation",
  "80% Career & Internship Placement Rate",
  "6 Flagship Empowerment Pillars",
]

export default function HeroNarrative() {
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % rotatingSolutions.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full text-[#142118] overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 1: FULL-SCREEN DARK HOOK (Farm Africa Signature Dark Hook)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen bg-[#142118] text-[#F2EBD9] flex flex-col justify-between items-center px-4 sm:px-8 py-24 sm:py-32 text-center overflow-hidden">
        {/* Background Tone-on-tone SVG foliage */}
        <BotanicalSilhouettes />

        {/* Subtle vignetted lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none z-[1]" />

        {/* Top Eyebrow Tag */}
        <div className="relative z-10 pt-4 sm:pt-8">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#00521A]/90 border border-[#C7ED9F]/40 text-[#C7ED9F] text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-lg"
          >
            The Caywood Brown Foundation • Established 2006 • RC: 0022482
          </motion.span>
        </div>

        {/* Central Provocative Hook Headline */}
        <div className="relative z-10 max-w-5xl mx-auto py-12 sm:py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.1] text-[#F2EBD9] tracking-tight"
          >
            What if there was a{" "}
            <span className="inline-block relative min-w-[220px] sm:min-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIdx}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`inline-block font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl ${rotatingSolutions[currentIdx].color} underline decoration-[#F47E28]/40 underline-offset-8`}
                >
                  {rotatingSolutions[currentIdx].word}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            to youth unemployment, poverty and community hardship?
          </motion.h1>
        </div>

        {/* Bottom Circular Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative z-10 pb-4"
        >
          <Link
            href="#banner-manifesto"
            aria-label="Scroll to discover our mission"
            className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-[#F2EBD9] flex items-center justify-center shadow-2xl group-hover:bg-[#F6CE40] transition-colors"
            >
              <ChevronDown className="w-7 h-7 text-[#F47E28]" />
            </motion.div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#F2EBD9]/80 font-bold">
              Scroll to explore
            </span>
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARQUEE STATS TICKER BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full bg-[#00521A] py-3.5 overflow-hidden border-b-4 border-[#F6CE40]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...impactStats, ...impactStats, ...impactStats].map((stat, i) => (
            <span key={i} className="mx-8 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#C7ED9F] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F6CE40] shrink-0" />
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 2: BANNER MANIFESTO & HALF-WIDTH CARD (Farm Africa Style)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="banner-manifesto" className="relative w-full bg-[#FAF7F0] py-20 lg:py-32 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Manifesto Headline & Action */}
          <div className="max-w-4xl mb-16 lg:mb-24 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              WHAT WE'RE DOING
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#142118] leading-[1.08]"
            >
              Empowering Communities, <br />
              <span className="text-[#F6CE40] drop-shadow-sm">Building Futures</span>
            </motion.h2>

            <p className="text-lg sm:text-xl text-[#142118]/85 leading-relaxed font-normal pt-2 max-w-3xl">
              At Caywood Brown Foundation (CBF), we have been driving transformation since 2006 — empowering youths and strengthening communities through structured mentorship, vocational training, digital education, and creative development.
            </p>

            <div className="pt-4">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-10 py-6 h-auto shadow-md hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/about">About Our Foundation</Link>
              </Button>
            </div>
          </div>

          {/* Farm Africa Signature Half-Width Feature Card */}
          <div className="mb-16 rounded-3xl bg-[#F2EBD9] border border-[#00521A]/15 shadow-xl overflow-hidden grid md:grid-cols-12 items-stretch">
            <div className="p-8 sm:p-12 lg:p-16 md:col-span-7 flex flex-col justify-center space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest w-fit">
                Sustainable Human Opportunity
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                Preparing Leaders of Tomorrow
              </h3>

              <p className="text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                Over the years, we’ve helped rehabilitate young people from drug addiction and supported their reintegration into society. Through our Volunteerism Academy, we provide unemployed graduates with hands-on experience that often leads to full-time employment. We've trained youths in digital marketing through our partnership with Google, and we continue to expand our reach through computer appreciation and music training — equipping young people with the tools they need to thrive in a fast-changing world.
              </p>

              <div className="pt-2">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#142118] hover:bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto transition-transform hover:scale-105 shadow-md"
                  asChild
                >
                  <Link href="/about">Read Our Full Story</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Authentic Photography */}
            <div className="md:col-span-5 relative min-h-[360px] md:min-h-full overflow-hidden">
              <Image
                src="/images/programs/computer-lab.jpg"
                alt="Caywood Brown Foundation students participating in hands-on computer training"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Farm Africa Signature Evidence Callout Box */}
          <div className="rounded-3xl bg-[#00521A] text-white p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Tone-on-tone sprout silhouette overlay */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-10 pointer-events-none">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g fill="#C7ED9F">
                  <path d="M200 400 C190 320, 150 250, 100 200 C160 210, 210 250, 200 400 Z" />
                  <path d="M200 350 C210 270, 260 220, 320 180 C260 180, 210 230, 200 350 Z" />
                  <path d="M200 280 C180 200, 120 150, 60 120 C120 110, 180 160, 200 280 Z" />
                </g>
              </svg>
            </div>

            <div className="max-w-4xl space-y-6 relative z-10">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#F2EBD9]">
                Evidence shows that our programmes lead to{" "}
                <span className="text-[#F6CE40] font-bold">
                  higher employability, self-sufficiency, gainful tech careers, and restored dignity.
                </span>{" "}
                This transformation is sustained long after our cohorts graduate.
              </p>

              {/* Animated Circle Expand Link */}
              <div className="pt-4">
                <Link
                  href="#thematic-pillars"
                  className="group inline-flex items-center gap-4 text-sm sm:text-base font-bold uppercase tracking-wider text-[#C7ED9F] hover:text-[#F6CE40] transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#C7ED9F] text-[#00521A] flex items-center justify-center group-hover:bg-[#F6CE40] group-hover:scale-110 transition-all duration-300 shadow-md">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <span>Explore our programmes</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

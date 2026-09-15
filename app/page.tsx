"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Heart,
  Calendar,
  Sparkles,
  GraduationCap,
  Code,
  Laptop,
  Music,
  ShieldCheck,
  Briefcase,
  Activity,
  Globe,
  Quote,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Users,
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react"
import HeroNarrative from "@/components/hero-narrative"
import ThematicPillars from "@/components/thematic-pillars"
import BotanicalGraphic from "@/components/botanical-graphic"
import PartnersMarquee from "@/components/partners-marquee"
import { motion, useInView } from "framer-motion"

/* ─── Animated Counter Hook ─── */
function useAnimatedCounter(target: number, duration: number = 2000, inView: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, inView])
  return count
}

/* ─── Animated Stat Card ─── */
function StatCard({ value, suffix = "", label, color }: { value: number; suffix?: string; label: string; color: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useAnimatedCounter(value, 2000, isInView)
  
  return (
    <div ref={ref} className="bg-white p-5 sm:p-6 rounded-2xl border border-[#00521A]/10 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`font-serif text-3xl sm:text-4xl font-extrabold ${color}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-semibold text-[#142118]/70 mt-1.5">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#142118] overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          1. FARM AFRICA HERO & BANNER LAYER
      ═══════════════════════════════════════════════════════════════════════ */}
      <HeroNarrative />

      {/* ═══════════════════════════════════════════════════════════════════════
          2. SIGNATURE MINT GREEN IMPACT & DONATION SECTION (Farm Africa bg-mint)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#C7ED9F] text-[#142118] pt-24 md:pt-32 pb-24 overflow-hidden">
        {/* Multiply Organic Wave Backdrop */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 mix-blend-multiply overflow-hidden">
          <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M-100 0 C300 200, 800 -100, 1540 100 L1540 600 L-100 600 Z" fill="#00521A" />
          </svg>
        </div>

        {/* Botanical Foliage Corner Flourish */}
        <div className="absolute top-0 right-0 pointer-events-none w-80 h-80 opacity-15">
          <BotanicalGraphic variant="leaves" color="#00521A" className="w-full h-full" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16 mb-20">
            
            {/* Left Column: Heading & Dual Action CTA Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Direct Human Transformation
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00521A] leading-[1.08] tracking-tight">
                You have the power to make a difference
              </h2>

              <p className="text-lg sm:text-xl text-[#142118]/85 leading-relaxed max-w-xl">
                Help make real, lasting change to the lives of vulnerable youths and struggling families by donating today. Every contribution directly funds computer lab workstations, rehabilitation counseling, and apprentice toolkits.
              </p>

              {/* Farm Africa Dual High-Contrast Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-[#4BAE44] hover:bg-[#3d9137] text-white rounded-full py-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="/donate#single">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Make a single donation</span>
                  </Link>
                </Button>

                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-[#F47E28] hover:bg-[#dc6d1c] text-white rounded-full py-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="/donate#monthly">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Make a monthly donation</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: 20 Years Impact Card with Double Border */}
            <div className="lg:col-span-5 bg-[#FAF7F0] p-8 sm:p-10 rounded-3xl border-2 border-[#00521A] shadow-2xl relative overflow-hidden">
              <div className="text-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F47E28] block mb-1">
                  Established 2006 • RC: 0022482
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00521A]">
                  20 Years of Community Impact
                </h3>
              </div>

              {/* 4 Animated Stat Cards */}
              <div className="grid grid-cols-2 gap-4">
                <StatCard value={15000} suffix="+" label="People Directly Helped" color="text-[#00521A]" />
                <StatCard value={48} suffix="+" label="Communities Served" color="text-[#F47E28]" />
                <StatCard value={489} suffix="+" label="Graduates Trained" color="text-[#00521A]" />
                <StatCard value={80} suffix="%" label="Intern Retention Rate" color="text-[#F47E28]" />
              </div>

              <div className="mt-6 pt-5 border-t border-[#00521A]/15 text-center">
                <p className="text-xs text-[#142118]/80 leading-relaxed font-medium">
                  "Equipping youths to pursue their dreams, explore their talents, and develop their communities one business innovation at a time."
                </p>
              </div>
            </div>

          </div>

          {/* Farm Africa Signature "Did you know?" Centered Callout Box */}
          <div className="relative pt-12 pb-10 px-6 sm:px-14 rounded-3xl border-2 border-[#00521A] bg-transparent">
            {/* Overlapping Badge Centered Exactly Like Farm Africa */}
            <div className="absolute -top-5 left-8 sm:left-1/2 sm:-translate-x-1/2 bg-[#C7ED9F] px-6 py-1.5 border-2 border-[#00521A] rounded-full">
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#00521A] whitespace-nowrap">
                Did you know?
              </h3>
            </div>

            {/* 3 Impact Tiers */}
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12 pt-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A] shrink-0 leading-none">
                  ₦15k
                </span>
                <p className="text-sm text-[#142118]/85 leading-relaxed">
                  could provide educational textbooks, beginner computing materials, and digital lab access for one student.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A] shrink-0 leading-none">
                  ₦50k
                </span>
                <p className="text-sm text-[#142118]/85 leading-relaxed">
                  could fund hands-on vocational training in creative media, coding logic, or music sound production.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A] shrink-0 leading-none">
                  ₦150k
                </span>
                <p className="text-sm text-[#142118]/85 leading-relaxed">
                  could provide comprehensive rehabilitation counseling, family reintegration, and post-recovery job placement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. "WHAT WE DO" THEMATIC PILLARS ACCORDION (Full Bleed Stripes)
      ═══════════════════════════════════════════════════════════════════════ */}
      <ThematicPillars />

      {/* ═══════════════════════════════════════════════════════════════════════
          4. "LATEST FROM CAYWOOD BROWN" (Editorial Asymmetric Grid on bg-forest)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section data-name="latest-news" className="relative w-full bg-[#00521A] text-white py-20 lg:py-32 overflow-hidden">
        {/* Parallax Tone-on-tone SVG Florets */}
        <div className="absolute top-10 left-10 w-96 h-96 opacity-10 pointer-events-none">
          <BotanicalGraphic variant="leaves" color="#C7ED9F" className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-96 h-96 opacity-10 pointer-events-none">
          <BotanicalGraphic variant="sprouts" color="#F6CE40" className="w-full h-full" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Huge Headline + Button + Main Feature Story */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C7ED9F] bg-white/10 px-4 py-1.5 rounded-full inline-block">
                  STORIES OF IMPACT & OUTREACHES
                </span>
                <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F2EBD9] leading-[1.05]">
                  Latest Outreaches & <br /> Field Stories
                </h2>
                <Button
                  variant="faFlame"
                  size="lg"
                  className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto shadow-md hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/events">Explore All Outreaches</Link>
                </Button>
              </div>

              {/* Story Card 1 (World Immunization Day 2025) */}
              <div className="group relative block rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#C7ED9F]/40 transition-all duration-300">
                <Link href="/events" className="block">
                  <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                    <Image
                      src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
                      alt="World Immunization Day healthcare outreach"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges: Category & Location */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-wider shadow-md">
                        Health Campaign
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md">
                        <MapPin className="w-3.5 h-3.5 text-[#F47E28]" />
                        <span>Abuja Outreach &bull; 10 Nov 2025</span>
                      </div>
                    </div>

                    {/* Farm Africa Hover Arrow */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#4BAE44] group-hover:bg-[#F6CE40] text-white group-hover:text-[#00521A] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2EBD9] group-hover:text-[#F6CE40] transition-colors leading-tight">
                      World Immunization Day 2025: Immunization Made Possible For All (IMPA)
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      Mobilizing grassroots parents, healthcare workers, and community leaders in Abuja to ensure complete immunization coverage and free medical screenings for infants and mothers.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C7ED9F] uppercase tracking-wider pt-2">
                      <Activity className="w-4 h-4 text-[#F6CE40]" />
                      <span>Community Healthcare & Mother-Child Well-Being</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column: Two Stacked Feature Cards */}
            <div className="lg:col-span-6 space-y-8 lg:mt-12">
              
              {/* Story Card 2: Christmas Charity Outreach at Durumi IDP Camp */}
              <div className="group relative block rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#C7ED9F]/40 transition-all duration-300">
                <Link href="/events" className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <Image
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                      alt="Christmas charity outreach at Durumi IDP camp"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#F47E28] text-white text-xs font-bold uppercase tracking-wider">
                        Humanitarian Relief
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md">
                        <MapPin className="w-3.5 h-3.5 text-[#F47E28]" />
                        <span>Durumi IDP Camp, Abuja</span>
                      </div>
                    </div>

                    <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#4BAE44] group-hover:bg-[#F6CE40] text-white group-hover:text-[#00521A] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F2EBD9] group-hover:text-[#F6CE40] transition-colors leading-tight">
                      Christmas Charity Outreach: Bringing Hope & Dignity to Displaced Families
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Delivering essential food staples, wrapped Christmas presents, dignity hygiene kits, and warm fellowship to children and displaced mothers.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C7ED9F] uppercase tracking-wider pt-1">
                      <Heart className="w-4 h-4 text-[#F47E28]" />
                      <span>Humanitarian Aid & Community Care</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Story Card 3: Summer Holiday Skills Development Programme */}
              <div className="group relative block rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#C7ED9F]/40 transition-all duration-300">
                <Link href="/events" className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <Image
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                      alt="Summer holiday skills programme students"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#F6CE40] text-[#142118] text-xs font-bold uppercase tracking-wider">
                        Skills Programme
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md">
                        <MapPin className="w-3.5 h-3.5 text-[#F47E28]" />
                        <span>Port Harcourt Hub</span>
                      </div>
                    </div>

                    <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#4BAE44] group-hover:bg-[#F6CE40] text-white group-hover:text-[#00521A] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F2EBD9] group-hover:text-[#F6CE40] transition-colors leading-tight">
                      Summer Holiday Skills Development: Computer Keyboard & Drum Camp
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Turning school breaks into a season of practical mastery — teaching primary and secondary students computer typing and live drum kit coordination.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C7ED9F] uppercase tracking-wider pt-1">
                      <Music className="w-4 h-4 text-[#F6CE40]" />
                      <span>Digital & Musical Arts Education</span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. VOICES OF TRANSFORMATION (Farm Africa Lucia Quote Layout)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 lg:py-28 bg-[#FAF7F0] overflow-hidden">
        <BotanicalGraphic variant="leaves" color="#00521A" opacity={0.06} className="top-0 right-0 w-96 h-96" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Big Quotation */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Voices of Transformation
              </span>

              <blockquote className="space-y-4">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#142118] font-medium leading-relaxed italic">
                  "Before joining the Caywood Brown Foundation computer training cohort, I didn't even know how to boot a PC. Today, I build websites and earn a steady living as a junior developer. My future is secure and my family is proud."
                </p>
              </blockquote>

              <div className="pt-2">
                <p className="font-serif text-2xl font-bold text-[#F47E28]">
                  Blessing Okon
                </p>
                <p className="text-sm font-semibold text-[#142118]/70">
                  Alumna & Junior Web Developer, Rivers State
                </p>
              </div>
            </div>

            {/* Right Column: Masked Portrait Image with Organic Backdrop */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Blessing Okon smiling portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Rotating 20y Stamp */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block">
                <BotanicalGraphic
                  variant="stamp"
                  color="#00521A"
                  className="w-32 h-32 bg-[#FAF7F0] rounded-full p-1 shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          6. "OUR 20 YEARS IN NUMBERS" (Farm Africa Half-Width Feature Card)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="flex flex-col md:flex-row relative bg-[#4BAE44] text-[#FAF7F0] rounded-3xl overflow-hidden shadow-xl">
          <div className="flex-auto px-8 sm:px-12 lg:px-16 py-10 lg:py-16 flex flex-col justify-center items-start">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
              Two Decades of Dedicated Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Our 20 years in numbers
            </h2>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed max-w-xl mb-8">
              Since 2006 (RC: 0022482), the Caywood Brown Foundation has empowered over 15,000 individuals across 48 communities. We help young people overcome addiction, learn vital digital and music skills, and secure career placements that transform entire families.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-[#142118] hover:bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto transition-transform hover:scale-105"
              asChild
            >
              <Link href="/about">Read Our Story & Impact</Link>
            </Button>
          </div>

          <div className="hidden md:block shrink-0 relative w-[320px] lg:w-[420px] min-h-[340px]">
            <Image
              src="/images/community/field-visit.jpg"
              alt="Caywood Brown Foundation community empowerment and outreach visit"
              fill
              className="object-cover"
              sizes="420px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4BAE44]/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          7. STRATEGIC ALLIANCE: GOOGLE DIGITAL SKILLS PARTNERSHIP
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 lg:py-28 bg-[#F2EBD9] border-t border-b border-[#00521A]/10 overflow-hidden">
        <BotanicalGraphic variant="sprouts" color="#00521A" opacity={0.06} className="bottom-0 left-0 w-96 h-96" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Image Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/programs/google-digital.png"
                  alt="Caywood Brown Foundation Google Digital Skills Partnership"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right: Partnership Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
                Strategic Alliance
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                Bridging the Digital Divide with Google
              </h2>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                In our commitment to equipping young people with relevant skills, we proudly partnered with Google to deliver comprehensive digital skills training to youth in underserved communities. This flagship initiative empowers youth with the technical know-how and confidence needed to thrive in today's digital economy.
              </p>

              {/* 4 Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-2xl p-5 border border-[#00521A]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#E8F8D6] text-[#00521A] flex items-center justify-center font-bold">
                      <Code className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Coding Logic</h4>
                  </div>
                  <p className="text-xs text-[#142118]/70">Programming foundations and web development building blocks.</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#00521A]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#F6CE40]/30 text-[#00521A] flex items-center justify-center font-bold">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Digital Marketing</h4>
                  </div>
                  <p className="text-xs text-[#142118]/70">Online visibility, social campaigns, and audience analytics.</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#00521A]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#C7ED9F]/40 text-[#00521A] flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Certification</h4>
                  </div>
                  <p className="text-xs text-[#142118]/70">Recognized certifications that boost employability.</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#00521A]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#F47E28]/20 text-[#F47E28] flex items-center justify-center font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Mentorship</h4>
                  </div>
                  <p className="text-xs text-[#142118]/70">Industry leaders who guide learning and shape career paths.</p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="faFlame"
                  size="lg"
                  className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto shadow-md hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/programs/google-training">Explore the Google Partnership</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          8. TRUSTED PARTNERS & ALLIES (Infinite Scrolling Marquee Ticker)
      ═══════════════════════════════════════════════════════════════════════ */}
      <PartnersMarquee />

      {/* ═══════════════════════════════════════════════════════════════════════
          9. "WHERE WE WORK" (Regional Footprint in Niger Delta)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 lg:py-28 bg-[#142118] text-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Map Pin Graphic */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#00521A] rounded-3xl p-10 sm:p-14 aspect-square flex items-center justify-center border border-[#C7ED9F]/20 shadow-2xl">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-36 h-36 text-[#C7ED9F]/15" />
                  </div>
                  {[
                    { top: "30%", left: "48%", label: "Port Harcourt HQ" },
                    { top: "45%", left: "60%", label: "Rivers State Hubs" },
                    { top: "60%", left: "42%", label: "Bayelsa Outreaches" },
                    { top: "25%", left: "65%", label: "Regional Centers" },
                  ].map((pin, i) => (
                    <div key={i} className="absolute group" style={{ top: pin.top, left: pin.left }}>
                      <div className="w-4 h-4 rounded-full bg-[#F6CE40] border-2 border-white shadow-lg animate-pulse" />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-[#C7ED9F] opacity-0 group-hover:opacity-100 transition-opacity">
                        {pin.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Locations */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#C7ED9F]/20 text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
                  Where We Work
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
                  Reaching communities across the Niger Delta
                </h2>
                <p className="text-[#F2EBD9]/75 text-base sm:text-lg leading-relaxed">
                  From our central training labs in Port Harcourt, we extend our programmes into schools, community centers, and grassroots hubs across Rivers State and neighbouring states.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { location: "Port Harcourt", detail: "Main Digital Lab & Tech Hub", type: "Headquarters" },
                  { location: "Rivers State", detail: "Community Outreach & Wellness Clinics", type: "Regional Hub" },
                  { location: "Bayelsa State", detail: "Mobile Digital Literacy Programme", type: "Mobile Unit" },
                  { location: "Niger Delta", detail: "Girl Child Advocacy & Rehabilitation", type: "Field Mission" },
                ].map((loc, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#C7ED9F]/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#F47E28]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F6CE40]">{loc.type}</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#F2EBD9]">{loc.location}</h4>
                    <p className="text-xs text-white/60 mt-1">{loc.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          9. "WHERE NEXT?" (Farm Africa Signature Pre-Footer 3-Column Section)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section data-name="where-next" className="relative bg-[#142118] text-[#F2EBD9] py-20 lg:py-28 border-t border-white/10 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Col 1: Where next links with slide-in arrows */}
            <div className="md:col-span-6 lg:col-span-4 space-y-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F2EBD9]">
                Where next?
              </h2>
              
              <div className="divide-y divide-white/10">
                <div className="group relative py-6">
                  <Link href="/about" className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#F6CE40] group-hover:text-white transition-colors">
                        Why Caywood Brown?
                      </h3>
                      <p className="text-sm text-white/70 mt-2 leading-relaxed max-w-sm">
                        We work with youth to unlock digital mastery and self-sufficiency for their families.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#F6CE40] text-[#C7ED9F] group-hover:text-[#00521A] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </div>

                <div className="group relative py-6">
                  <Link href="/#thematic-pillars" className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#4CB9D1] group-hover:text-white transition-colors">
                        What we do
                      </h3>
                      <p className="text-sm text-white/70 mt-2 leading-relaxed max-w-sm">
                        CBF reduces poverty by training youth in high-demand technology, creative arts, and wellness.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#4CB9D1] text-[#4CB9D1] group-hover:text-[#142118] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </div>

                <div className="group relative py-6">
                  <Link href="/volunteer" className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#4BAE44] group-hover:text-white transition-colors">
                        How you can make change
                      </h3>
                      <p className="text-sm text-white/70 mt-2 leading-relaxed max-w-sm">
                        Our work is only possible thanks to people who take action. Mentor or sponsor today.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#4BAE44] text-[#4BAE44] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Col 2: Two Stacked Feature Image Cards */}
            <div className="md:col-span-6 lg:col-span-4 grid grid-rows-2 gap-6 min-h-[480px]">
              <Link href="/blog" className="group relative block rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/images/gallery/workshop-1.jpg"
                  alt="News and stories from recent Caywood Brown cohorts"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#F6CE40] transition-colors">
                    News & Updates
                  </h3>
                </div>
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#4BAE44] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>

              <Link href="/faq" className="group relative block rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/images/programs/volunteer-academy.jpg"
                  alt="Frequently Asked Questions about our programmes and volunteering"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#F6CE40] transition-colors">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#4BAE44] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>

            {/* Col 3: Sign Up for Updates Form Card (Double Border) */}
            <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-[#F2EBD9] p-3 rounded-3xl border-2 border-[#00521A]">
              <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-2xl border border-[#00521A]/20 flex flex-col justify-between h-full text-[#142118]">
                <div className="text-center space-y-2 mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00521A]">
                    Sign up for updates
                  </h3>
                  <p className="text-xs sm:text-sm text-[#142118]/70">
                    Subscribe to our newsletter to stay up to date with cohorts, graduations, and stories.
                  </p>
                </div>

                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    className="w-full bg-[#4BAE44] hover:bg-[#3d9137] text-white py-5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md"
                  >
                    Subscribe
                  </Button>
                </form>

                <p className="text-[11px] text-center text-[#142118]/60 mt-4">
                  By subscribing you agree to our Privacy Policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          10. PRE-FOOTER CTA BAND (Farm Africa Support Band on bg-mint)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Support Caywood Brown Foundation
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Help make real change to the lives of youth and struggling families by donating today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Button
              variant="default"
              size="lg"
              className="bg-[#4BAE44] hover:bg-[#3d9137] text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              asChild
            >
              <Link href="/donate#single">
                <Heart className="w-4 h-4 fill-white" />
                <span>Make a single donation</span>
              </Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-[#F47E28] hover:bg-[#dc6d1c] text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              asChild
            >
              <Link href="/donate#monthly">
                <Heart className="w-4 h-4 fill-white" />
                <span>Make a monthly donation</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

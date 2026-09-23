"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, HeartPulse, GraduationCap, Briefcase, ChevronRight, Sparkles } from "lucide-react"

const pillars = [
  {
    id: "healthcare",
    title: "Healthcare Development",
    shortTitle: "Healthcare",
    icon: HeartPulse,
    tagline: "Preventive Care & Health Access",
    stat: "15,000+",
    statLabel: "People Reached",
    accentColor: "#c7ed9f",
    badgeBg: "bg-[#c7ed9f] text-[#173421]",
    pillBg: "bg-[#c7ed9f]/20 text-[#c7ed9f]",
    image: "/images/events/impa-volunteers.jpg",
    alt: "Medical outreach and community health volunteers at Caywood Brown Foundation",
    description: "Strengthening community healthcare systems through adolescent wellness assemblies, routine childhood immunization drives, and compassionate substance recovery support.",
    programs: [
      {
        name: "Youth Health Awareness & Routine Immunization",
        desc: "School-based adolescent wellness, reproductive health education, and routine vaccination drives.",
        href: "/programs/youth-health-awareness",
      },
      {
        name: "Youth Rehabilitation & Social Reintegration",
        desc: "Holistic recovery, psychosocial counseling, and medical outreach for youth affected by addiction.",
        href: "/programs/youth-rehabilitation",
      },
    ],
    ctaHref: "/programs/youth-health-awareness",
  },
  {
    id: "education",
    title: "Education & Human Development",
    shortTitle: "Education",
    icon: GraduationCap,
    tagline: "Digital Literacy & Youth Leadership",
    stat: "3,000+",
    statLabel: "Students Certified",
    accentColor: "#f6ce40",
    badgeBg: "bg-[#f6ce40] text-[#173421]",
    pillBg: "bg-[#f6ce40]/20 text-[#f6ce40]",
    image: "/images/programs/computer-lab.jpg",
    alt: "Students learning computer applications in Port Harcourt",
    description: "Bridging the digital divide and championing education through tuition-free computer labs, girl-child retention scholarships, and leadership development programs.",
    programs: [
      {
        name: "Computer Appreciation & IT Literacy",
        desc: "100% free hands-on digital training in Microsoft Office, typing dexterity, and workplace computing.",
        href: "/programs/computer-appreciation",
      },
      {
        name: "Her Voice, Her Power (Girl Child Advocacy)",
        desc: "Secondary school retention scholarships, leadership bootcamps, and menstrual hygiene dignity kits.",
        href: "/programs/girl-child-advocacy",
      },
    ],
    ctaHref: "/programs/computer-appreciation",
  },
  {
    id: "economic",
    title: "SMEs & Economic Empowerment",
    shortTitle: "SMEs & Economy",
    icon: Briefcase,
    tagline: "Vocational Skills & Employment",
    stat: "80%",
    statLabel: "Job Retention Rate",
    accentColor: "#f5a246",
    badgeBg: "bg-[#f5a246] text-[#173421]",
    pillBg: "bg-[#f5a246]/20 text-[#f5a246]",
    image: "/images/programs/volunteer-academy.jpg",
    alt: "Graduates participating in the Caywood Brown corporate internship academy",
    description: "Equipping young adults for economic self-reliance through 6-month corporate internships, creative arts & music studio training, and micro-enterprise incubation.",
    programs: [
      {
        name: "Graduate Internship & Career Academy",
        desc: "6-month corporate placements with top industrial employers, workplace mentoring, and career networks.",
        href: "/programs/volunteerism-academy",
      },
      {
        name: "Creative Arts, Drumming & Music Training",
        desc: "Hands-on studio instruction in drum kit, keyboards, and audio, converting talent into sustainable income.",
        href: "/programs/music-training",
      },
    ],
    ctaHref: "/programs/volunteerism-academy",
  },
]

export default function ThematicPillars() {
  const [activeTab, setActiveTab] = useState(0)
  const currentPillar = pillars[activeTab]

  return (
    <section id="thematic-pillars" suppressHydrationWarning className="bg-[#173421] text-[#faf7f0] py-16 sm:py-24 px-5 sm:px-8 border-b border-[#c7ed9f]/15 relative overflow-hidden" aria-labelledby="programmes-title">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c7ed9f]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#f6ce40]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c7ed9f]/15 text-[#c7ed9f] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Core Areas of Intervention</span>
            </div>
            <h2 id="programmes-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf7f0] tracking-tight leading-tight">
              Impact Across <span className="text-[#c7ed9f]">Three Core Pillars.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#faf7f0]/80 leading-relaxed">
              Targeting sustainable community transformation through structured, high-impact initiatives in healthcare, education, and economic self-reliance.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c7ed9f] hover:text-white transition-colors group shrink-0"
          >
            <span>Explore all programs</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ─── MOBILE VIEW (< 1024px): COMPACT INTERACTIVE TABS (ZERO LONG SCROLL) ─── */}
        <div className="lg:hidden">
          {/* Segmented Pill Navigation */}
          <div className="flex rounded-xl bg-[#0f2316] p-1.5 border border-white/10 gap-1.5 mb-6 overflow-x-auto scrollbar-none">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              const isActive = activeTab === idx
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    isActive
                      ? `${pillar.badgeBg} shadow-md`
                      : "text-[#faf7f0]/70 hover:text-white hover:bg-white/5"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{pillar.shortTitle}</span>
                </button>
              )
            })}
          </div>

          {/* Active Pillar Card (Single Screen Height, Fast & Engaging) */}
          <div className="bg-[#12281a] rounded-2xl border border-white/10 overflow-hidden shadow-xl">
            {/* Visual Header */}
            <div className="relative aspect-[16/9] w-full bg-[#0a180f]">
              <Image
                src={currentPillar.image}
                alt={currentPillar.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12281a] via-[#12281a]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${currentPillar.pillBg} backdrop-blur-md`}>
                  {currentPillar.tagline}
                </span>
                <div className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-right">
                  <span className="text-xs font-bold text-white block leading-none">{currentPillar.stat}</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/70 block">{currentPillar.statLabel}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                  <span>{currentPillar.title}</span>
                </h3>
              </div>
            </div>

            {/* Content & Initiatives */}
            <div className="p-5 sm:p-6 space-y-5">
              <p className="text-sm text-[#faf7f0]/85 leading-relaxed">
                {currentPillar.description}
              </p>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#c7ed9f]/80 mb-3">
                  Flagship Initiatives
                </p>
                <div className="space-y-2.5">
                  {currentPillar.programs.map((program) => (
                    <Link
                      key={program.name}
                      href={program.href}
                      className="group block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-white group-hover:text-[#c7ed9f] transition-colors">
                          {program.name}
                        </h4>
                        <ChevronRight className="h-4 w-4 text-white/50 group-hover:text-[#c7ed9f] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="mt-1 text-xs text-[#faf7f0]/70 line-clamp-2 leading-relaxed">
                        {program.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={currentPillar.ctaHref}
                  className="w-full py-3 px-4 rounded-xl bg-[#c7ed9f] text-[#173421] hover:bg-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Explore {currentPillar.shortTitle} Programs</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── DESKTOP VIEW (>= 1024px): 3-COLUMN BALANCED PILLAR CARDS ─── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="group rounded-2xl bg-[#12281a] border border-white/10 hover:border-[#c7ed9f]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative aspect-[16/10] w-full bg-[#0a180f] overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12281a] via-[#12281a]/30 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${pillar.pillBg} backdrop-blur-md`}>
                        {pillar.tagline}
                      </span>
                      <div className="bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-0.5 rounded-full text-right">
                        <span className="text-xs font-bold text-white leading-none">{pillar.stat}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3.5 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
                        <Icon className="h-4 w-4" style={{ color: pillar.accentColor }} />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-5">
                    <p className="text-sm text-[#faf7f0]/80 leading-relaxed min-h-[4rem]">
                      {pillar.description}
                    </p>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#c7ed9f]/80 mb-2.5">
                        Key Programs
                      </p>
                      <div className="space-y-2">
                        {pillar.programs.map((program) => (
                          <Link
                            key={program.name}
                            href={program.href}
                            className="group/item flex items-start justify-between gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all"
                          >
                            <div>
                              <p className="text-xs font-semibold text-white group-hover/item:text-[#c7ed9f] transition-colors leading-tight">
                                {program.name}
                              </p>
                              <p className="text-[11px] text-[#faf7f0]/65 line-clamp-1 mt-0.5">
                                {program.desc}
                              </p>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-white/40 group-hover/item:text-[#c7ed9f] group-hover/item:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={pillar.ctaHref}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#c7ed9f]/30 hover:border-[#c7ed9f] bg-[#c7ed9f]/10 hover:bg-[#c7ed9f] text-[#c7ed9f] hover:text-[#173421] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View {pillar.shortTitle}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Catalog Link */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#faf7f0]/70">
            Looking for detailed program schedules, curriculum, or cohort registration?{" "}
            <Link href="/programs" className="text-[#c7ed9f] font-semibold underline underline-offset-4 hover:text-white transition-colors">
              Explore the full programs directory →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, Laptop, Music, LifeBuoy, GraduationCap, HeartPulse, Sparkles, CheckCircle2, ChevronRight } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

const programmes = [
  {
    id: "computer-appreciation",
    title: "Computer Appreciation & Office Productivity",
    pillar: "Digital Inclusion",
    description: "Free, beginner-friendly training equipping young people with computing fundamentals, typing dexterity, Microsoft Office competency, and internet research skills.",
    image: "/images/programs/computer-lab.jpg",
    href: "/programs/computer-appreciation",
    highlights: ["12-Week Practical Lab Cohorts", "100% Tuition-Free Workstations", "Office Software Certification"],
    icon: Laptop,
  },
  {
    id: "music-training",
    title: "Creative Arts, Drumming & Music Training",
    pillar: "Creative Expression",
    description: "Hands-on studio music training nurturing young talent in drum kit mastery, keyboard chord progressions, vocal control, and digital audio mixing.",
    image: "/images/hero/website-banner.png",
    href: "/programs/music-training",
    highlights: ["Live Performance Skills", "Digital Audio Workstation Intro", "Mentorship with Musicians"],
    icon: Music,
  },
  {
    id: "youth-rehabilitation",
    title: "Youth Rehabilitation & Social Reintegration",
    pillar: "Dignity & Recovery",
    description: "Comprehensive recovery support for youth battling substance abuse, offering confidential cognitive behavioral counseling, peer therapy, and family reconciliation.",
    image: "/images/community/field-visit-2.jpg",
    href: "/programs/youth-rehabilitation",
    highlights: ["Clinical Psychosocial Therapy", "Relapse Prevention Support", "Dignified Community Reintegration"],
    icon: LifeBuoy,
  },
  {
    id: "volunteerism-academy",
    title: "Volunteerism Academy & Corporate Internships",
    pillar: "Workforce Readiness",
    description: "Structured career development pairing university graduates with 6-month corporate internships across leading industrial partners including NLNG and PHCCIMA.",
    image: "/images/programs/volunteer-academy.jpg",
    href: "/programs/volunteerism-academy",
    highlights: ["6-Month Paid Corporate Placements", "ATS Resume & Interview Coaching", "80%+ Direct Employment Transition"],
    icon: GraduationCap,
  },
  {
    id: "youth-health-awareness",
    title: "Youth Health, Wellness & Routine Immunization",
    pillar: "Public Health",
    description: "School-based wellness assemblies, menstrual hygiene advocacy, and community road shows promoting childhood immunization under our IMPA initiative.",
    image: "/images/gallery/workshop-2.jpg",
    href: "/programs/youth-health-awareness",
    highlights: ["Routine Vaccine Awareness", "Menstrual Hygiene Kit Distributions", "School Health Club Mentorship"],
    icon: HeartPulse,
  },
  {
    id: "girl-child-advocacy",
    title: "Girl Child Advocacy, STEM & Mentorship",
    pillar: "Gender Equity",
    description: "Empowering young girls through educational retention scholarships, leadership development, STEM mentorship, and advocacy for the Child Rights Act.",
    image: "/images/hero/cbf-banner-2.png",
    href: "/programs/girl-child-advocacy",
    highlights: ["Full School Retention Scholarships", "Assertive Leadership Labs", "Protection Against Early Marriage"],
    icon: Sparkles,
  },
]

export default function ProgramsIndexPage() {
  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO CANOPY ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Thematic Pillars &amp; Work</p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[1.1] tracking-tight">
            Practical skills. <br />
            <span className="text-[#f6ce40]">Lasting human transformation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85 font-normal">
            For nearly two decades across Rivers State, the Caywood Brown Foundation has delivered community-rooted programs bridging digital literacy, creative arts, health, and dignified employment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40]"
            >
              <Heart className="h-4 w-4 fill-[#db1c55] text-[#db1c55]" />
              <span>Sponsor a Trainee</span>
            </Link>
            <Link
              href="/volunteer"
              className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/40 hover:bg-white/10"
            >
              <Users className="h-4 w-4 text-[#c7ed9f]" />
              <span>Volunteer as Instructor</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. ALL PROGRAMMES DIRECTORY ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0]">
        <div className="home-shell">
          <div className="section-heading-row">
            <div>
              <p className="home-label text-[#00521a] mb-2">Core Initiatives</p>
              <h2 className="home-heading">Our Six Thematic Programmes</h2>
            </div>
            <p className="text-sm text-[#173421]/70 max-w-sm hidden md:block">
              Every programme is tuition-free for selected candidates, funded by generous donors, partners, and community allies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programmes.map((prog, idx) => {
              const Icon = prog.icon
              return (
                <article
                  key={prog.id}
                  className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#00521a]/15 shadow-sm hover:shadow-xl hover:border-[#00521a]/35 transition-all duration-300"
                >
                  <div>
                    {/* Program Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#173421]">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#00521a] text-[#faf7f0] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {prog.pillar}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 text-[#00521a] p-2 rounded-xl shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00521a]/70">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-[#173421] group-hover:text-[#00521a] transition-colors leading-snug">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-[#173421]/80 leading-relaxed">
                        {prog.description}
                      </p>

                      {/* Highlights */}
                      <ul className="pt-3 border-t border-[#00521a]/10 space-y-1.5 text-xs text-[#173421]/85">
                        {prog.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00521a] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Link */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-transparent">
                    <Link
                      href={prog.href}
                      className="home-button w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3"
                    >
                      <span>Explore Programme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. STRATEGIC PARTNERSHIP SPOTLIGHT: GOOGLE ─── */}
      <section className="py-20 bg-[#12291b] text-[#faf7f0] border-t border-[#c7ed9f]/20">
        <div className="home-shell">
          <div className="rounded-3xl border border-[#c7ed9f]/30 bg-[#173421] p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c7ed9f]/15 text-[#c7ed9f] text-xs font-bold uppercase tracking-wider border border-[#c7ed9f]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#f6ce40]" />
                  <span>Flagship Technology Alliance</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#faf7f0] font-medium leading-tight">
                  Google Digital Skills <br />
                  <span className="text-[#f6ce40]">for Africa Program.</span>
                </h2>

                <p className="text-[#faf7f0]/85 text-base leading-relaxed max-w-xl">
                  Through our verified training alliance, young people gain industry-recognized credentials in Digital Marketing, Data Analytics, and Web Development — connecting directly into freelance networks and corporate employment.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/programs/google-training"
                    className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40] text-xs uppercase tracking-wider font-bold py-3.5 px-7"
                  >
                    <span>Learn About Google Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/40 hover:bg-white/10 text-xs uppercase tracking-wider font-bold py-3.5 px-7"
                  >
                    <span>Apply for Next Cohort</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <Image
                    src="/images/programs/google-training.png"
                    alt="Participants at Google Digital Skills training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CLOSING SECTION ─── */}
      <section className="home-section closing-section" aria-labelledby="closing-title">
        <div className="home-shell">
          <div className="closing-heading">
            <h2 id="closing-title" className="home-heading">Be part of<br />what comes next.</h2>
            <p className="home-copy">Every skill taught and trainee supported opens a new chapter of dignity. Partner, sponsor, or volunteer today.</p>
          </div>
          <div className="closing-links">
            {[
              { title: "Sponsor a youth cohort", detail: "Support our programmes", href: "/donate" },
              { title: "Teach or mentor youth", detail: "Volunteer with us", href: "/volunteer" },
              { title: "Partner an institution", detail: "Institutional alliance", href: "/partner" },
            ].map((item) => (
              <Link href={item.href} key={item.href}>
                <span className="home-label">{item.detail}</span>
                <span className="closing-link-title">{item.title}<ArrowRight size={24} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

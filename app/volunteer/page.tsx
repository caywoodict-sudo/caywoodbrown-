"use client"

import React from "react"
import Link from "next/link"
import {
  Users,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  ArrowRight,
  Heart,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

const academyPillars = [
  {
    title: "Civic Leadership & Community Service",
    desc: "Cultivating ethics, civic responsibility, and active volunteerism in grassroots development projects across Rivers State.",
    badge: "Module 01",
    color: "#f47e28",
  },
  {
    title: "Workplace Readiness & Professionalism",
    desc: "Business communication, workplace ethics, resume crafting, and technical interview preparation.",
    badge: "Module 02",
    color: "#f6ce40",
  },
  {
    title: "Internship Transition Pipeline",
    desc: "Matching certified academy graduates with corporate partners, creative studios, and technology hubs.",
    badge: "Module 03",
    color: "#00521a",
  },
  {
    title: "Alumni Mentorship Network",
    desc: "Continuous peer mentorship and career acceleration that sustains an 80% professional placement rate.",
    badge: "Module 04",
    color: "#f47e28",
  },
]

const mentorOpportunities = [
  {
    title: "Software Engineering & Tech Mentor",
    commitment: "2–4 hours / week",
    format: "In-Person or Virtual",
    desc: "Guide students in our Google Digital Skills cohorts through code reviews, project architecture, and debugging.",
  },
  {
    title: "Music Production & Sound Mentor",
    commitment: "3 hours / week",
    format: "In-Person (Port Harcourt Studio)",
    desc: "Teach instrument techniques, digital audio workstations (DAWs), audio mixing, and recording studio operations.",
  },
  {
    title: "Career Coach & Resume Mentor",
    commitment: "Flexible / 2 hours weekly",
    format: "Hybrid",
    desc: "Conduct mock interviews, review graduate CVs, and help youth transition smoothly into corporate internships.",
  },
]

export default function VolunteerPage() {
  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION (Botanical Canopy) ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Empowerment & Transition</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-tight">
            Volunteerism Academy & <br />
            <span className="text-[#f6ce40]">Career Internships.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85 font-normal">
            Bridging the gap between skills training and economic independence — empowering young changemakers through community service and placing 80% into career-launching professional internships.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#mentors"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Become a Mentor</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#academy"
              className="home-button-outline inline-flex items-center gap-2"
            >
              <span>Explore the Academy</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. VOLUNTEERISM ACADEMY PILLARS ─── */}
      <section id="academy" className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">The Academy Model</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              How the Academy Works
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              We believe volunteerism instills humility, leadership, and emotional maturity before students enter the professional workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyPillars.map((p, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-[#00521a]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.badge}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#173421]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#173421]/75 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#00521a] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. VOLUNTEER MENTOR OPPORTUNITIES ─── */}
      <section id="mentors" className="py-20 lg:py-28 bg-[#f2ebd9]/50 relative overflow-hidden">
        <div className="home-shell relative z-10">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">Lend Your Skills</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Mentor with Us
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              Are you a professional in tech, music production, law, medicine, or business? Volunteer your experience to empower youth in Rivers State.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorOpportunities.map((m, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-[#00521a]/15 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="p-7 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00521a]">
                      <span>{m.commitment}</span>
                      <span>•</span>
                      <span>{m.format}</span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#173421]">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#173421]/75 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Mentor Application: ${m.title}`)}`}
                    className="home-button inline-flex items-center justify-center gap-2 w-full text-center text-xs"
                  >
                    <span>Apply as Mentor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. PRE-FOOTER CLOSING PATHWAYS ─── */}
      <section className="home-section closing-section py-24 sm:py-32">
        <div className="home-shell text-center">
          <p className="home-label text-[#00521a]">Support the Academy</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173421] tracking-tight mt-3">
            Sponsor Youth Internships
          </h2>
          <p className="home-copy text-[#173421]/90 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Sponsor transport stipends, professional wardrobe, and tech tools for graduates entering career internships across the Niger Delta.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Support Internships</span>
              <Heart className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="/contact"
              className="home-button-outline inline-flex items-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white"
            >
              <span>Partner with Academy</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

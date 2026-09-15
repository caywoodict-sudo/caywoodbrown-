"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  Sparkles
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

const academyPillars = [
  {
    title: "Civic Leadership & Community Service",
    desc: "Cultivating ethics, civic responsibility, and active volunteerism in grassroots development projects.",
    badge: "Module 01",
    color: "#F47E28"
  },
  {
    title: "Workplace Readiness & Professionalism",
    desc: "Business communication, workplace ethics, resume crafting, and technical interview preparation.",
    badge: "Module 02",
    color: "#F6CE40"
  },
  {
    title: "Internship Transition Pipeline",
    desc: "Matching certified academy graduates with corporate partners, creative studios, and technology hubs.",
    badge: "Module 03",
    color: "#4CB9D1"
  },
  {
    title: "Alumni Mentorship Network",
    desc: "Continuous peer mentorship and career acceleration that sustains an 80% professional placement rate.",
    badge: "Module 04",
    color: "#4BAE44"
  },
]

const mentorOpportunities = [
  {
    title: "Software Engineering & Tech Mentor",
    commitment: "2–4 hours / week",
    format: "In-Person or Virtual",
    desc: "Guide students in our Google Digital Skills cohorts through code reviews, project architecture, and debugging.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Music Production & Sound Mentor",
    commitment: "3 hours / week",
    format: "In-Person (Port Harcourt Studio)",
    desc: "Teach instrument techniques, digital audio workstations (DAWs), audio mixing, and recording studio operations.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Career Coach & Resume Mentor",
    commitment: "Flexible / 2 hours weekly",
    format: "Hybrid",
    desc: "Conduct mock interviews, review graduate CVs, and help youth transition smoothly into corporate internships.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
]

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#142118]">
      {/* ─── 1. HERO SECTION (Farm Africa Forest Green #00521A) ─── */}
      <section className="relative w-full py-24 md:py-32 bg-[#00521A] text-white overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#C7ED9F"
          opacity={0.08}
          className="top-0 right-0 w-[550px] h-[550px]"
        />
        <BotanicalGraphic
          variant="sprouts"
          color="#F6CE40"
          opacity={0.06}
          className="-bottom-16 -left-16 w-80 h-80"
        />

        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C7ED9F]/20 border border-[#C7ED9F]/30 text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              Empowerment & Transition
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Volunteerism Academy & <br />
              <span className="text-[#F6CE40]">Career Internships</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed">
              Bridging the gap between skills training and economic independence — empowering young changemakers through community service and placing 80% into career-launching professional internships.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto shadow-md hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#mentors">Become a Mentor</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#academy">Join the Academy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. VOLUNTEERISM ACADEMY PILLARS ─── */}
      <section id="academy" className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
              The Academy Model
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118]">
              How the Academy Works
            </h2>
            <p className="text-[#142118]/80 text-base sm:text-lg">
              We believe volunteerism instills humility, leadership, and emotional maturity before students enter the professional workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyPillars.map((p, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-[#00521A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: p.color }}>
                    {p.badge}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#142118]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#142118]/75 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#00521A] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. VOLUNTEER MENTOR OPPORTUNITIES ─── */}
      <section id="mentors" className="w-full py-20 lg:py-28 bg-[#F2EBD9] relative overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#00521A"
          opacity={0.06}
          className="bottom-0 right-0 w-[500px] h-[500px]"
        />

        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              Lend Your Skills
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#142118]">
              Mentor with Us
            </h2>
            <p className="text-[#142118]/80 text-base sm:text-lg">
              Are you a professional in tech, music, law, medicine, or business? Volunteer your time to empower the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorOpportunities.map((m, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#00521A]/15 shadow-md overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#00521A]/5">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00521A]">
                      <span>{m.commitment}</span>
                      <span>•</span>
                      <span>{m.format}</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#142118]">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#142118]/75 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    variant="faForest"
                    className="w-full text-xs font-bold uppercase tracking-wider py-5"
                    asChild
                  >
                    <Link href="/contact">Sign Up as Mentor</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. PRE-FOOTER CTA BAND ─── */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Support Youth Internships
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Sponsor transport stipends, professional wardrobe, and tech tools for graduates entering internships.
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

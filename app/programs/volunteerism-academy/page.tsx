"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Briefcase,
  Building2,
  Award,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Building
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function VolunteerismAcademyPage() {
  const partners = [
    {
      name: "Nigeria LNG (NLNG)",
      role: "Formal Placement Partner",
      description: "Providing world-class industrial, engineering, and administrative internship opportunities for shortlisted graduates."
    },
    {
      name: "Office of the Deputy Governor, Rivers State",
      role: "Formal Governance Partner",
      description: "Supporting public administration mentorship, youth policy engagement, and state-wide development initiatives."
    },
    {
      name: "PHCCIMA",
      role: "Program Executive Partner",
      description: "Port Harcourt Chamber of Commerce, Industry, Mines and Agriculture connecting interns across hundreds of private sector employers."
    }
  ]

  const features = [
    {
      title: "Career Readiness Training & Mentorship",
      icon: Compass,
      badge: "Stage 01",
      description: "Participants receive guided sessions on CV writing, interview techniques, professional communication, goal setting, and workplace behavior. Each intern is paired with a senior corporate mentor who provides ongoing career guidance and motivation.",
      points: [
        "Modern CV and ATS-compliant resume drafting workshops",
        "Mock interviews and business etiquette masterclasses",
        "Executive presentation and business correspondence skills",
        "1-on-1 mentorship with seasoned industry professionals"
      ]
    },
    {
      title: "Structured 6-Month Internship Placement",
      icon: Briefcase,
      badge: "Stage 02",
      description: "Graduates are matched with leading corporate, industrial, and public organizations based on their interests and field of study, offering them consistent, meaningful work experience over a six-month period to sharpen their skills in a real office environment.",
      points: [
        "Curated placement matching degree specialization",
        "Direct participation in ongoing corporate projects",
        "Hands-on departmental rotations (finance, HR, ops, IT)",
        "Consistent supervisory feedback and skill assessments"
      ]
    },
    {
      title: "Real-World Professional Environments",
      icon: Building2,
      badge: "Stage 03",
      description: "Interns gain firsthand understanding of how businesses operate, learning to collaborate in teams, follow procedures, and meet performance expectations in diverse professional settings.",
      points: [
        "Exposure to enterprise ERP tools and office workflows",
        "Cross-functional team collaboration and meeting participation",
        "Navigating corporate culture and organizational hierarchies",
        "Handling client requests and professional deliverables"
      ]
    },
    {
      title: "Workplace Ethics & Leadership Discipline",
      icon: Award,
      badge: "Stage 04",
      description: "The program emphasizes punctuality, accountability, respect, integrity, and initiative — critical soft skills that define long-term success in the workplace and in leadership roles.",
      points: [
        "Strict adherence to professional integrity and deadlines",
        "Emotional intelligence and conflict management at work",
        "Leadership initiative and proactive problem-solving",
        "Accountability and reporting to executive management"
      ]
    },
    {
      title: "Continuous Evaluation & Foundation Check-Ins",
      icon: FileCheck,
      badge: "Stage 05",
      description: "Intern progress is monitored regularly through monthly feedback from host organizations and one-on-one check-ins. The Foundation provides pastoral support, resolves issues, and ensures growth throughout the internship.",
      points: [
        "Monthly performance evaluations from corporate supervisors",
        "Bi-weekly progress check-ins with CBF Academy coordinators",
        "Mid-term review and milestone tracking",
        "Dedicated conflict mediation and mental wellness support"
      ]
    },
    {
      title: "Transition Support into Paid Employment",
      icon: TrendingUp,
      badge: "Stage 06",
      description: "Upon completion, participants receive support with job search, professional networking, and even guidance for launching small businesses. Over 80% of past cohort interns received confirmations for continuous employment.",
      points: [
        "Over 80% retention rate for continuous corporate employment",
        "Letters of recommendation and certified experience credentials",
        "Alumni referral network across Nigerian industries",
        "Venture incubation for graduates pursuing enterprise"
      ]
    }
  ]

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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F6CE40] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-[#F6CE40]" />
              <span>Flagship Initiative &bull; Career Acceleration</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Graduate Internship & <br />
              <span className="text-[#F6CE40]">Volunteerism Academy</span>
            </h1>

            <p className="text-[#F2EBD9]/90 text-lg sm:text-xl leading-relaxed">
              From Classroom to Career — Your Future Starts Here. Empowering unemployed graduates to take the lead with hands-on training, structured 6-month corporate internships, and permanent career transition support.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#features">Explore Academy Features</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">Host an Intern at Your Firm</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. KEY STATS BANNER ─── */}
      <section className="w-full bg-[#142118] text-white py-12 border-b border-[#C7ED9F]/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">80%+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Retention Rate</div>
              <p className="text-xs text-[#F2EBD9]/70">Retained for full-time employment</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">6 Months</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Structured Placement</div>
              <p className="text-xs text-[#F2EBD9]/70">In active partner firms</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">100%</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Mentorship Coverage</div>
              <p className="text-xs text-[#F2EBD9]/70">Paired with seasoned executives</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">Since 2017</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Proven Track Record</div>
              <p className="text-xs text-[#F2EBD9]/70">Successful batches placed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OVERVIEW (Authentic DB text) ─── */}
      <section className="w-full py-20 bg-[#FAF7F0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
                FROM CLASSROOM TO CAREER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                About The Volunteerism Academy
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                <p>
                  Through our flagship <strong>Volunteerism Academy</strong>, we mentor and support unemployed graduates by offering a structured six-month internship program designed to build workplace experience, character, and confidence. Participants are placed in partnering firms where they gain hands-on exposure, build networks, and develop the soft and technical skills needed to transition into full-time employment.
                </p>
                <p>
                  The Volunteerism Academy fosters a mindset of service, leadership, and responsibility. Many of our alumni have moved on to thrive in meaningful careers — with the majority retained directly by the corporate organizations they volunteered with.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00521A] text-[#F6CE40] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Rigorous Candidate Screening</h4>
                    <p className="text-xs text-[#142118]/70">High-caliber graduate talent</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F47E28] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Corporate Partner Network</h4>
                    <p className="text-xs text-[#142118]/70">Vetted business environments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F2EBD9] p-8 sm:p-10 rounded-3xl border border-[#00521A]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7ED9F]/30 rounded-bl-full pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold text-[#00521A] mb-4">
                Institutional Alliances
              </h3>
              <p className="text-xs text-[#142118]/70 mb-6">
                Our formal partners that make high-impact corporate placements possible:
              </p>
              <div className="space-y-4">
                {partners.map((p, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#00521A]/10 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-[#00521A]">{p.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F6CE40]/30 text-[#142118] px-2 py-0.5 rounded">
                        {p.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#142118]/80 mt-1.5">{p.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#00521A]/10">
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-2 text-[#00521A] font-bold hover:text-[#F47E28] transition-colors text-sm"
                >
                  <span>Become a corporate placement partner</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PROGRAM FEATURES (6 Stages) ─── */}
      <section id="features" className="w-full py-24 bg-white border-y border-[#00521A]/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              THE ACADEMY ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Key Features of the Program
            </h2>
            <p className="text-[#142118]/75 text-base sm:text-lg">
              A comprehensive 6-stage lifecycle taking graduates from university halls to respected professionals in leading organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, idx) => {
              const Icon = f.icon
              return (
                <div
                  key={idx}
                  className="bg-[#FAF7F0] p-8 rounded-2xl border border-[#00521A]/10 hover:border-[#00521A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00521A] text-[#F6CE40] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-[#F47E28] bg-[#F47E28]/10 px-3 py-1 rounded-full uppercase">
                        {f.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#142118] mb-3 group-hover:text-[#00521A] transition-colors">
                      {f.title}
                    </h3>

                    <p className="text-sm text-[#142118]/80 leading-relaxed mb-6">
                      {f.description}
                    </p>
                  </div>

                  <div className="border-t border-[#00521A]/10 pt-4 space-y-2">
                    {f.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#142118]/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00521A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. CALL TO ACTION ─── */}
      <section className="w-full py-20 bg-[#00521A] text-white text-center relative overflow-hidden">
        <BotanicalGraphic
          variant="sprouts"
          color="#F6CE40"
          opacity={0.08}
          className="-top-12 -right-12 w-64 h-64"
        />
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6CE40]">
            BUILDING THE NEXT GENERATION OF EXECUTIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
            Apply to the Volunteerism Academy or Partner as an Employer
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg max-w-2xl mx-auto">
            Are you a motivated graduate looking to launch your career, or a corporation seeking pre-vetted, disciplined talent? Connect with us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="faGold"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/volunteer">Apply as a Graduate</Link>
            </Button>
            <Button
              variant="faWhiteOutline"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/partner">Partner as Employer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

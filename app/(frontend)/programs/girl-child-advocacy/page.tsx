"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Heart,
  BookOpen,
  Users,
  Shield,
  MessageCircle,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function GirlChildAdvocacyPage() {
  const components = [
    {
      title: "Girl-Centered Leadership & Self-Esteem Workshops",
      icon: Award,
      badge: "Pillar 01",
      description: "Interactive sessions designed to build confidence, communication, and decision-making skills in girls. These workshops nurture leadership potential, helping girls recognize their value and empowering them to take charge of their futures.",
      points: [
        "Public speaking, negotiation, and assertive communication masterclasses",
        "Overcoming imposter syndrome and building unbreakable self-worth",
        "Goal setting, time management, and academic excellence planning",
        "Peer-group team building and collaborative problem-solving exercises"
      ]
    },
    {
      title: "School Outreach & Community Sensitization",
      icon: Users,
      badge: "Pillar 02",
      description: "Strategic programs that engage schools, families, and local leaders to challenge harmful gender norms and promote the rights and education of the girl child. These campaigns foster inclusive, girl-friendly environments in classrooms and communities.",
      points: [
        "Community dialogues with traditional rulers and parent associations",
        "Challenging child marriage norms and child labor practices",
        "Sensitization on the Child Rights Act and legal protections",
        "Fostering girl-friendly learning environments with head teachers"
      ]
    },
    {
      title: "Education Advocacy & Scholarship Support",
      icon: GraduationCap,
      badge: "Pillar 03",
      description: "Focused efforts to ensure girls stay in school and succeed. This includes providing scholarships, learning materials, and advocating for policies that reduce barriers to girls’ education such as early marriage, gender-based violence, and financial hardship.",
      points: [
        "Tuition assistance and exam fees for vulnerable girls",
        "Provision of backpacks, textbooks, notebooks, and writing materials",
        "Retention tracking to ensure girls transition from primary to secondary school",
        "Advocacy against economic exclusion of young girls in rural areas"
      ]
    },
    {
      title: "Menstrual Hygiene & Reproductive Health Education",
      icon: Heart,
      badge: "Pillar 04",
      description: "Culturally sensitive education that equips girls with accurate information about their bodies, menstruation, and reproductive health. The program also supports access to menstrual hygiene products and helps dismantle stigma around periods.",
      points: [
        "Accurate puberty education dismantling fear and cultural taboos",
        "Free distribution of sanitary pads and menstrual dignity kits",
        "WASH (Water, Sanitation & Hygiene) advocacy in rural schools",
        "Preventing school absenteeism caused by period poverty"
      ]
    },
    {
      title: "Mentorship from Female Role Models",
      icon: Sparkles,
      badge: "Pillar 05",
      description: "Girls are connected with inspiring women from diverse backgrounds who serve as mentors. Through ongoing guidance and real-life storytelling, mentors help girls envision greater possibilities and navigate their personal and academic journeys.",
      points: [
        "Pairing girls with female doctors, engineers, lawyers, and entrepreneurs",
        "Monthly mentorship circles and career aspiration chats",
        "Real-life storytelling demonstrating triumph over adversity",
        "Personal accountability, academic tutoring, and emotional support"
      ]
    },
    {
      title: "Safe Space Dialogues & Storytelling Initiatives",
      icon: MessageCircle,
      badge: "Pillar 06",
      description: "Confidential, supportive forums where girls can speak freely about their experiences, challenges, and aspirations. These spaces encourage healing, peer support, and the power of voice through storytelling, expression, and shared understanding.",
      points: [
        "Confidential reporting channels for gender-based abuse and bullying",
        "Creative expression through poetry, creative writing, and drama",
        "Peer-to-peer solidarity circles where girls support each other",
        "Direct connection to certified child psychologists and legal advocates"
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
              <Sparkles className="w-4 h-4 text-[#F6CE40]" />
              <span>Flagship Movement &bull; Her Voice, Her Power</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Her Voice, Her Power: <br />
              <span className="text-[#F6CE40]">Girl Child Advocacy</span>
            </h1>

            <p className="text-[#F2EBD9]/90 text-lg sm:text-xl leading-relaxed">
              Every girl deserves the chance to dream, speak, and lead. Uplifting, protecting, and empowering girls to rise above limitations and claim their rightful place in society.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#pillars">Explore Core Components</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/donate">Sponsor a Girl Child</Link>
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
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">2,500+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Girls Mentored</div>
              <p className="text-xs text-[#F2EBD9]/70">Leadership & self-esteem</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">15,000+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Sanitary Kits Distributed</div>
              <p className="text-xs text-[#F2EBD9]/70">Ending period poverty in schools</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">350+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Scholarships Awarded</div>
              <p className="text-xs text-[#F2EBD9]/70">Keeping girls in classrooms</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">35+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Communities Reached</div>
              <p className="text-xs text-[#F2EBD9]/70">Across Rivers State & Niger Delta</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OVERVIEW (Authentic DB copy) ─── */}
      <section className="w-full py-20 bg-[#FAF7F0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
                OUR MISSION & MOVEMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                Her Voice, Her Power
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                <p>
                  At <strong>Caywood Brown Foundation</strong>, we recognize the immense power and potential within every girl child. <em>Her Voice, Her Power</em> is more than a program — it’s a movement to uplift, protect, and empower girls to rise above limitations and claim their rightful place in society.
                </p>
                <p>
                  We believe that educating, empowering, and protecting girls transforms not just their lives — but entire communities. Through this initiative, we address the cultural, social, and economic barriers that hinder girls' growth. By providing hands-on support, bold advocacy, and skills-based empowerment, we create safe, inclusive environments where girls are encouraged to rise, speak, and lead.
                </p>
                <p>
                  We work closely with schools, parents, and community leaders to foster a generation of confident, capable young women who are not just seen — but heard, respected, and equipped to lead.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00521A] text-[#F6CE40] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Safe Space Guarantees</h4>
                    <p className="text-xs text-[#142118]/70">Strict confidentiality & protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F47E28] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Female Mentorship Network</h4>
                    <p className="text-xs text-[#142118]/70">Over 50 corporate professional mentors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F2EBD9] p-8 sm:p-10 rounded-3xl border border-[#00521A]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F6CE40]/20 rounded-bl-full pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold text-[#00521A] mb-4">
                Pillars of Transformation
              </h3>
              <ul className="space-y-3.5 text-sm text-[#142118]/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Confidence:</strong> Equipping girls to voice their opinions without fear</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Education:</strong> Preventing school dropout due to economic distress</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Dignity:</strong> Ensuring no girl misses class during menstruation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Safety:</strong> Reporting channels and legal protection against gender abuse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Leadership:</strong> Preparing girls for civic and corporate governance</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#00521A]/10">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 text-[#00521A] font-bold hover:text-[#F47E28] transition-colors text-sm"
                >
                  <span>Become a female mentor in this program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CORE COMPONENTS (6 Cards) ─── */}
      <section id="pillars" className="w-full py-24 bg-white border-y border-[#00521A]/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              WHAT WE DO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Core Components of the Program
            </h2>
            <p className="text-[#142118]/75 text-base sm:text-lg">
              A holistic framework designed to protect, nurture, and accelerate young women into leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((c, idx) => {
              const Icon = c.icon
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
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#142118] mb-3 group-hover:text-[#00521A] transition-colors">
                      {c.title}
                    </h3>

                    <p className="text-sm text-[#142118]/80 leading-relaxed mb-6">
                      {c.description}
                    </p>
                  </div>

                  <div className="border-t border-[#00521A]/10 pt-4 space-y-2">
                    {c.points.map((pt, pIdx) => (
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
            EQUIPPING GIRLS TO RISE, SPEAK, AND LEAD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
            Sponsor Dignity Kits or Support a Girl Child's Education
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg max-w-2xl mx-auto">
            Your donation keeps a young girl in school, provides sanitary hygiene kits, and pairs her with an inspiring professional female mentor.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="faGold"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/donate">Sponsor a Girl Child</Link>
            </Button>
            <Button
              variant="faWhiteOutline"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/volunteer">Volunteer as Female Mentor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

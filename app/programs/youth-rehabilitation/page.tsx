"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HeartHandshake,
  Shield,
  Users,
  Compass,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Activity,
  Heart
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function YouthRehabilitationPage() {
  const components = [
    {
      title: "Community-Based Outreach & Case Finding",
      icon: Users,
      badge: "Pillar 01",
      description: "Actively identifying and engaging at-risk youth through grassroots outreach efforts, in collaboration with local leaders, families, and community-based networks across vulnerable neighborhoods.",
      highlights: [
        "Street outreach and trust-building in at-risk communities",
        "Partnership with community elders and youth leaders",
        "Safe, non-judgmental initial assessment and referral",
        "Family counseling and home visitation support"
      ]
    },
    {
      title: "Counseling & Psychosocial Support",
      icon: HeartHandshake,
      badge: "Pillar 02",
      description: "Individual and group counseling sessions led by trained professionals to address trauma, mental health, and emotional resilience during the rehabilitation process.",
      highlights: [
        "One-on-one confidential trauma-informed therapy",
        "Structured peer support group recovery circles",
        "Cognitive Behavioral Therapy (CBT) techniques",
        "Emotional self-regulation and relapse prevention plans"
      ]
    },
    {
      title: "Substance Abuse Education & Behavioral Therapy",
      icon: Activity,
      badge: "Pillar 03",
      description: "Structured learning and therapy modules that help participants understand the biological and psychological nature of addiction, develop healthy coping strategies, and adopt lasting behavioral patterns.",
      highlights: [
        "Understanding triggers, brain chemistry, and addiction patterns",
        "Managing cravings and building personal resilience",
        "Developing positive routines and healthy physical lifestyle habits",
        "Peer accountability partnerships"
      ]
    },
    {
      title: "Life Skills & Values Reorientation",
      icon: Compass,
      badge: "Pillar 04",
      description: "Training in essential life skills such as communication, self-discipline, goal setting, and personal responsibility — helping participants rediscover self-worth, spiritual grounding, and clear direction.",
      highlights: [
        "Personal responsibility, integrity, and self-worth workshops",
        "Time management, financial literacy, and personal budgeting",
        "Conflict resolution and peaceful communication",
        "Long-term goal setting and action planning"
      ]
    },
    {
      title: "Vocational & Digital Skills Training",
      icon: Briefcase,
      badge: "Pillar 05",
      description: "Hands-on training in trades or digital tools to equip participants with income-generating skills and improve their employability post-rehabilitation, ensuring economic independence.",
      highlights: [
        "Direct transition into Computer Appreciation or Music training",
        "Hands-on technical and artisan trade apprenticeships",
        "Micro-business management and entrepreneurship fundamentals",
        "Financial independence mentoring to prevent economic relapse"
      ]
    },
    {
      title: "Post-Rehabilitation Mentorship & Reintegration",
      icon: Shield,
      badge: "Pillar 06",
      description: "Ongoing mentorship, community reintegration assistance, and follow-up support to ensure sustained recovery, personal development, and social acceptance back into society.",
      highlights: [
        "Dedicated mentor assigned for minimum 12 months follow-up",
        "Reintegration mediation with family and community members",
        "Alumni recovery network and regular reunion check-ins",
        "Emergency crisis support line and continuous monitoring"
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
              <Shield className="w-4 h-4 text-[#F6CE40]" />
              <span>Social Welfare &bull; Recovery &bull; Reintegration</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Youth Rehabilitation & <br />
              <span className="text-[#F6CE40]">Empowerment Program</span>
            </h1>

            <p className="text-[#F2EBD9]/90 text-lg sm:text-xl leading-relaxed">
              Restoring hope, rebuilding lives — empowering young people to rise above addiction and reclaim their future with purpose, dignity, and strength.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#approach">Our Approach</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">Refer a Youth in Need</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. IMPACT BANNER ─── */}
      <section className="w-full bg-[#142118] text-white py-12 border-b border-[#C7ED9F]/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">1,200+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Youths Supported</div>
              <p className="text-xs text-[#F2EBD9]/70">Addiction recovery & counseling</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">80%+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Sustained Sobriety</div>
              <p className="text-xs text-[#F2EBD9]/70">With 12-month mentorship follow-up</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">48+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Communities Reached</div>
              <p className="text-xs text-[#F2EBD9]/70">Across Rivers State & Niger Delta</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">100%</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Compassionate & Free</div>
              <p className="text-xs text-[#F2EBD9]/70">Zero stigma, full dignity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT THE PROGRAM (Authentic DB text) ─── */}
      <section className="w-full py-20 bg-[#FAF7F0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
                SECOND CHANCES &bull; LASTING CHANGE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                Guiding the Next Generation from Struggle to Strength
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                <p>
                  At <strong>Caywood Brown Foundation</strong>, we are passionate about giving young people a second chance — an opportunity to rise above their past and create a brighter future. The <strong>Youth Rehabilitation & Empowerment Program</strong> is designed to support young individuals struggling with drug addiction, guiding them through a structured journey of <strong>recovery, transformation, and reintegration</strong>.
                </p>
                <p>
                  This initiative takes a <strong>holistic, compassionate approach</strong> — combining professional counseling, mentorship, life skills development, and hands-on training to help participants heal, rebuild, and re-engage with their communities in meaningful ways.
                </p>
                <p>
                  More than just a recovery program, it’s a pathway to purpose, dignity, and lasting change.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00521A] text-[#F6CE40] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Confidential & Safe</h4>
                    <p className="text-xs text-[#142118]/70">Strict privacy & medical ethics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F47E28] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Full Reintegration</h4>
                    <p className="text-xs text-[#142118]/70">Skills & economic enablement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F2EBD9] p-8 sm:p-10 rounded-3xl border border-[#00521A]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F47E28]/15 rounded-bl-full pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold text-[#00521A] mb-4">
                The Recovery Pathway
              </h3>
              <ul className="space-y-3.5 text-sm text-[#142118]/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Assessment:</strong> Medical and psychosocial evaluation in a safe space</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Therapy:</strong> Individual trauma counseling and behavioral coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Re-skilling:</strong> Enrollment in computer or music equipment training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Restoration:</strong> Reconciliation with family and community leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span><strong>Independence:</strong> Sustainable employment or small business launch</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#00521A]/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00521A] font-bold hover:text-[#F47E28] transition-colors text-sm"
                >
                  <span>Connect with a counselor today</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CORE COMPONENTS (Grid) ─── */}
      <section id="approach" className="w-full py-24 bg-white border-y border-[#00521A]/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              STRUCTURED INTERVENTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Core Components of the Program
            </h2>
            <p className="text-[#142118]/75 text-base sm:text-lg">
              A balanced 6-pillar framework addressing biological, emotional, and social dimensions of recovery.
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
                    {c.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#142118]/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00521A] shrink-0 mt-0.5" />
                        <span>{h}</span>
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
            STAND WITH US IN SAVING LIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
            Help Us Give a Young Person a Second Chance
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg max-w-2xl mx-auto">
            Your support provides counseling materials, vocational toolkits, and medical evaluation for youths fighting addiction.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="faGold"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/donate">Sponsor Rehabilitation Kit</Link>
            </Button>
            <Button
              variant="faWhiteOutline"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/volunteer">Volunteer as Counselor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

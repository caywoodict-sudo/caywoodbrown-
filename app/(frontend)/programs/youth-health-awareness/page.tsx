"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HeartPulse,
  Apple,
  ShieldCheck,
  Brain,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function YouthHealthAwarenessPage() {
  const highlights = [
    {
      title: "Interactive School-Based Health Education",
      icon: BookOpen,
      badge: "Highlight 01",
      description: "Engaging activities, assemblies, and discussions that simplify complex health topics, encourage student participation, and promote active peer-led learning in secondary schools.",
      points: [
        "Dynamic multimedia assemblies and participatory workshops",
        "Age-appropriate biological science and anatomy education",
        "Interactive games, role-play scenarios, and myth-busting sessions",
        "Student feedback and customized school health club formation"
      ]
    },
    {
      title: "Hygiene, Nutrition & Daily Wellness",
      icon: Apple,
      badge: "Highlight 02",
      description: "Emphasis on everyday habits such as personal hygiene, balanced nutrition, hydration, sleep hygiene, and physical exercise to support long-term physical well-being.",
      points: [
        "Handwashing, dental hygiene, and infectious disease prevention",
        "Locally available, affordable nutritional meal planning",
        "The impact of adequate sleep on academic cognitive function",
        "Active sports participation and cardiovascular health"
      ]
    },
    {
      title: "Values-Driven Sexual Health & Abstinence",
      icon: ShieldCheck,
      badge: "Highlight 03",
      description: "Age-appropriate and values-driven content that encourages abstinence while fostering mutual respect, personal safety, body autonomy, and informed decision-making.",
      points: [
        "Clear, accurate sexual anatomy and puberty guidance",
        "Focus on abstinence as the safest, most empowering adolescent choice",
        "Recognizing, resisting, and reporting sexual harassment and abuse",
        "Fostering healthy boundaries and mutual respect between genders"
      ]
    },
    {
      title: "Mental Health & Emotional Resilience",
      icon: Brain,
      badge: "Highlight 04",
      description: "Workshops that address adolescent self-awareness, emotional regulation, peer pressure resistance, anxiety management, and positive coping strategies to strengthen mental well-being.",
      points: [
        "Managing exam stress, depression, and adolescent mood changes",
        "Standing firm against negative peer pressure and gang influence",
        "Building self-esteem and positive self-talk routines",
        "Recognizing warning signs in peers and seeking trusted adult help"
      ]
    },
    {
      title: "Peer-Led Conversations & Q&A Forums",
      icon: MessageCircle,
      badge: "Highlight 05",
      description: "Safe spaces where students engage in open dialogue, ask questions freely without fear of judgment, and support each other under the gentle guidance of trained facilitators.",
      points: [
        "Anonymous question boxes allowing adolescents to ask sensitive questions",
        "Facilitated breakout circles categorized by age groups",
        "Peer educator training to foster champions in every classroom",
        "Empathetic listening and confidential crisis guidance"
      ]
    },
    {
      title: "Educational Materials & School Follow-Ups",
      icon: HeartPulse,
      badge: "Highlight 06",
      description: "Distribution of illustrated take-home health booklets, wellness kits, and ongoing school follow-ups to reinforce learning and sustain health awareness far beyond the classroom.",
      points: [
        "Illustrated, youth-friendly health guides distributed to all attendees",
        "Establishment and support of CBF Health Clubs in partner schools",
        "Termly follow-up visits and teacher training workshops",
        "Free first aid and wellness supplies donated to school sick bays"
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
              <HeartPulse className="w-4 h-4 text-[#F6CE40]" />
              <span>Adolescent Health &bull; School Campaigns</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Youth Health <br />
              <span className="text-[#F6CE40]">Awareness Program</span>
            </h1>

            <p className="text-[#F2EBD9]/90 text-lg sm:text-xl leading-relaxed">
              Empowering young minds with the knowledge, values, and confidence to lead healthier, more responsible lives across secondary schools and community centers.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#highlights">Explore Program Highlights</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">Invite Us to Your School</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. STATS BANNER ─── */}
      <section className="w-full bg-[#142118] text-white py-12 border-b border-[#C7ED9F]/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">5,000+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Students Reached</div>
              <p className="text-xs text-[#F2EBD9]/70">Secondary school sessions</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">40+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Schools Visited</div>
              <p className="text-xs text-[#F2EBD9]/70">Public & private schools</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">100%</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Safe & Confidential</div>
              <p className="text-xs text-[#F2EBD9]/70">Zero-judgment Q&A spaces</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">10,000+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Health Guides Given</div>
              <p className="text-xs text-[#F2EBD9]/70">Take-home educational books</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT SECTION (Authentic DB text) ─── */}
      <section className="w-full py-20 bg-[#FAF7F0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
                INFORMED CHOICES &bull; EMPOWERED LIVES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                Shaping Informed Minds, Building Healthier Futures
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                <p>
                  At <strong>Caywood Brown Foundation</strong>, we believe that <strong>informed choices create empowered lives</strong>. Our <strong>Youth Health Awareness Program</strong> is designed to equip secondary school students with the knowledge, values, and confidence they need to take control of their health and well-being.
                </p>
                <p>
                  Through targeted health campaigns and interactive sessions, we educate students on the importance of making responsible decisions, maintaining healthy habits, and caring for their physical, emotional, and social health. The program provides a safe and engaging environment where young people can ask questions, share concerns, and learn life-saving information.
                </p>
                <p>
                  Our goal is to ensure that adolescents are not only informed but also inspired to live intentionally and responsibly.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00521A] text-[#F6CE40] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Values-Based Guidance</h4>
                    <p className="text-xs text-[#142118]/70">Culturally sensitive & ethical</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F47E28] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Medical Volunteer Network</h4>
                    <p className="text-xs text-[#142118]/70">Doctors & certified nurses</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F2EBD9] p-8 sm:p-10 rounded-3xl border border-[#00521A]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7ED9F]/30 rounded-bl-full pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold text-[#00521A] mb-4">
                What Students Learn
              </h3>
              <ul className="space-y-3.5 text-sm text-[#142118]/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>How to resist destructive peer pressure with confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Scientific facts regarding drug abuse and addiction triggers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>The benefits of abstinence and self-control during teenage years</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Managing emotional turbulence, stress, and anxiety in school</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Hygiene routines that protect against preventable infections</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#00521A]/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00521A] font-bold hover:text-[#F47E28] transition-colors text-sm"
                >
                  <span>Book a health awareness outreach for your school</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PROGRAM HIGHLIGHTS (6 Cards) ─── */}
      <section id="highlights" className="w-full py-24 bg-white border-y border-[#00521A]/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              CAMPAIGN PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Program Highlights
            </h2>
            <p className="text-[#142118]/75 text-base sm:text-lg">
              Structured modules delivered by experienced educators and healthcare practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h, idx) => {
              const Icon = h.icon
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
                        {h.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#142118] mb-3 group-hover:text-[#00521A] transition-colors">
                      {h.title}
                    </h3>

                    <p className="text-sm text-[#142118]/80 leading-relaxed mb-6">
                      {h.description}
                    </p>
                  </div>

                  <div className="border-t border-[#00521A]/10 pt-4 space-y-2">
                    {h.points.map((pt, pIdx) => (
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
            PROTECTING ADOLESCENT LIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
            Sponsor Health Booklets or Volunteer with our Medical Team
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg max-w-2xl mx-auto">
            Your support finances printed educational materials and first-aid supplies donated directly to secondary schools.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="faGold"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/donate">Sponsor School Kits</Link>
            </Button>
            <Button
              variant="faWhiteOutline"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/volunteer">Volunteer as Health Worker</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

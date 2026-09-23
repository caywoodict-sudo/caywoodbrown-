"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Music,
  Disc,
  Volume2,
  Sliders,
  Radio,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Clock,
  Sparkles,
  Heart
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function MusicTrainingPage() {
  const modules = [
    {
      id: "drums",
      title: "Basic to Intermediate Drum Techniques",
      icon: Disc,
      duration: "Weeks 1 - 4",
      badge: "Module 01",
      description: "Participants learn foundational drumming skills — including stick control, rudiments, rhythm patterns, and coordination — progressing to more complex beats and fills that build confidence and versatility behind the kit.",
      points: [
        "Matched and traditional stick grip, hand posture, and wrist flexibility",
        "Essential rudiments: single stroke, double stroke, paradiddles, and flams",
        "Bass drum pedal technique, hi-hat control, and limb independence",
        "Grooves across Highlife, Afrobeat, Gospel, Reggae, and Contemporary Pop"
      ]
    },
    {
      id: "keyboard",
      title: "Keyboard Fundamentals & Chord Progressions",
      icon: Music,
      duration: "Weeks 5 - 8",
      badge: "Module 02",
      description: "This module introduces learners to the keyboard, covering note identification, hand positioning, and basic scales. Students also explore common chord progressions, helping them play songs, accompany vocalists, and develop their musicality.",
      points: [
        "Keyboard geography, sharp and flat accidentals, and octave navigation",
        "Major and minor triad construction, inversions, and 7th chords",
        "Classic progression drills: I-IV-V-I, ii-V-I, and contemporary worship progressions",
        "Left-hand bassline accompaniment and right-hand harmonic voicings"
      ]
    },
    {
      id: "rhythm-ear",
      title: "Rhythm, Timing & Ear Training",
      icon: Sliders,
      duration: "Weeks 9 - 10",
      badge: "Module 03",
      description: "Essential exercises focus on internalizing rhythm, maintaining steady timing, and developing the ear to recognize pitch, intervals, and harmonies. These skills enhance overall musical sensitivity and performance accuracy.",
      points: [
        "Metronome discipline, tempo consistency, and syncopation feel",
        "Pitch recognition drills and melodic transcription by ear",
        "Identifying chord quality (major, minor, dominant) spontaneously",
        "Call-and-response rhythmic training with fellow instrumentalists"
      ]
    },
    {
      id: "music-theory",
      title: "Music Theory Essentials",
      icon: Radio,
      duration: "Week 11",
      badge: "Module 04",
      description: "A practical approach to understanding the language of music — covering scales, key signatures, intervals, time signatures, and notation — providing learners with the tools to read, write, and analyze music effectively.",
      points: [
        "Staff notation, treble and bass clef literacy, and note values",
        "Circle of Fifths and understanding key signatures",
        "Number systems (Nashville Number System) for fast on-stage transposition",
        "Chord chart and lead sheet interpretation"
      ]
    },
    {
      id: "stage-presence",
      title: "Performance, Stage Presence & Delivery",
      icon: Sparkles,
      duration: "Week 12",
      badge: "Module 05",
      description: "Students receive training in how to perform with confidence, connect with audiences, and present themselves on stage. This includes managing performance anxiety, body language, and expressive delivery.",
      points: [
        "Overcoming stage fright and building performance stamina",
        "Body language, stage communication, and cues between musicians",
        "Sound check procedures, monitor mixing etiquette, and gear care",
        "Dynamic control and playing sensitively to vocalists and conductors"
      ]
    },
    {
      id: "live-practice",
      title: "Live Band Collaboration & Showcases",
      icon: Volume2,
      duration: "Ongoing / Capstone",
      badge: "Module 06",
      description: "The program includes regular jam sessions, ensemble work, and mini showcases, allowing students to apply what they’ve learned in real-time, collaborate with peers, and gain hands-on performance experience.",
      points: [
        "Full ensemble rehearsals combining drums, keys, bass, and vocals",
        "Quarterly community showcase concerts in Port Harcourt",
        "Recording studio exposure and session musicianship basics",
        "Audition preparation for band, church, and commercial studio work"
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
              <Music className="w-4 h-4 text-[#F6CE40]" />
              <span>Creative Arts &bull; Livelihood Program</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Music Equipment <br />
              <span className="text-[#F6CE40]">Training Program</span>
            </h1>

            <p className="text-[#F2EBD9]/90 text-lg sm:text-xl leading-relaxed">
              We recognize music as both a form of expression and a viable career path. Hands-on instruction in playing musical instruments — specifically the <strong>drums</strong> and <strong>keyboard</strong> — designed to build technical skill, spark creativity, and unlock income-generating opportunities.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#syllabus">View Instruments Taught</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/volunteer">Volunteer as Musician</Link>
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
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">200+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Instrumentalists Trained</div>
              <p className="text-xs text-[#F2EBD9]/70">Drummers & keyboard players</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">2 Instruments</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Core Focus</div>
              <p className="text-xs text-[#F2EBD9]/70">Drums & Keyboard mastery</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">100%</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Practical Studio Hours</div>
              <p className="text-xs text-[#F2EBD9]/70">Real instrument lab rehearsals</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">70%+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Session & Band Roles</div>
              <p className="text-xs text-[#F2EBD9]/70">Church, band & commercial work</p>
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
                PROGRAM OVERVIEW
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                About Our Music Equipment Training Program
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                <p>
                  We recognize music as both a form of expression and a viable career path. Through our <strong>Music Equipment Training Program</strong>, participants receive hands-on instruction in playing musical instruments — specifically the <strong>drums</strong> and <strong>keyboard</strong>. This program is designed not only to build technical skill but also to spark creativity and open up income-generating opportunities.
                </p>
                <p>
                  Our approach blends structured lessons with practice-based learning, allowing trainees to grow in confidence and competence. Many graduates now play in bands, serve in churches, or work as professional session instrumentalists across Rivers State and beyond.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00521A] text-[#F6CE40] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Acoustic & Digital Kits</h4>
                    <p className="text-xs text-[#142118]/70">Fully equipped rehearsal labs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F47E28] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Live Ensemble Experience</h4>
                    <p className="text-xs text-[#142118]/70">Real band stage showcases</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F2EBD9] p-8 sm:p-10 rounded-3xl border border-[#00521A]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F6CE40]/20 rounded-bl-full pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold text-[#00521A] mb-4">
                Career Pathways in Music
              </h3>
              <ul className="space-y-3.5 text-sm text-[#142118]/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Church music director and primary service instrumentalist</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Paid session drummer or keyboardist for live concert bands</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Private music tutor for schools and beginners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Studio recording instrumentalist and song arranger</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Event sound engineer and stage production technician</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#00521A]/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00521A] font-bold hover:text-[#F47E28] transition-colors text-sm"
                >
                  <span>Apply for next music cohort audition</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CORE MODULES (Syllabus) ─── */}
      <section id="syllabus" className="w-full py-24 bg-white border-y border-[#00521A]/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              CURRICULUM BREAKDOWN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Core Components Taught
            </h2>
            <p className="text-[#142118]/75 text-base sm:text-lg">
              A comprehensive curriculum designed to take aspiring musicians from fundamental rudiments to high-level stage confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.id}
                  className="bg-[#FAF7F0] p-8 rounded-2xl border border-[#00521A]/10 hover:border-[#00521A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00521A] text-[#F6CE40] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-[#F47E28] bg-[#F47E28]/10 px-3 py-1 rounded-full uppercase">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#142118] mb-3 group-hover:text-[#00521A] transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-sm text-[#142118]/80 leading-relaxed mb-6">
                      {m.description}
                    </p>
                  </div>

                  <div className="border-t border-[#00521A]/10 pt-4 space-y-2">
                    {m.points.map((pt, pIdx) => (
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

      {/* ─── 5. CALL TO ACTION PRE-FOOTER ─── */}
      <section className="w-full py-20 bg-[#00521A] text-white text-center relative overflow-hidden">
        <BotanicalGraphic
          variant="sprouts"
          color="#F6CE40"
          opacity={0.08}
          className="-top-12 -right-12 w-64 h-64"
        />
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6CE40]">
            UNLOCK YOUR CREATIVE CALLING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
            Sponsor an Instrument or Register for Music Training
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg max-w-2xl mx-auto">
            You can donate a drum kit or electronic keyboard, volunteer to teach music theory, or join our upcoming class of musical talents.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="faGold"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">Register for Audition</Link>
            </Button>
            <Button
              variant="faWhiteOutline"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/donate">Donate Musical Equipment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

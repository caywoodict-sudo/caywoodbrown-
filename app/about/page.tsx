"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Heart,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Download,
  Users,
  Compass,
  Award
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#142118]">
      {/* 1. HERO SECTION (Farm Africa Forest Green #00521A with Foliage SVGs) */}
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C7ED9F]/20 border border-[#C7ED9F]/30 text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              <span>About Caywood Brown Foundation</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Transforming lives, <br />
              <span className="text-[#F6CE40]">igniting youth potential</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed font-normal">
              Founded in 2005 by Dr. Ipalibo Harry Banigo in memory of her late father Caywood Brown, we work across Rivers State and the Niger Delta to equip young people with the technical skills, emotional resilience, and career pathways needed to build flourishing futures.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto shadow-md hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/donate">Support Our Mission</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#our-story">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & FOUNDER'S LEGACY */}
      <section id="our-story" className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Our Origins & Heritage
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                How We Started: <br />
                <span className="text-[#F47E28]">A Living Legacy of Service</span>
              </h2>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                The Caywood Brown Foundation was established in 2005 by Dr. Ipalibo Harry Banigo, in honor of her late father, Caywood Brown, whose life of compassion, discipline, and community leadership continues to guide every initiative we undertake.
              </p>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                Driven by a deep conviction that youth neglect is community stagnation, Dr. Banigo created the foundation as a platform to offer real opportunities, technological training, and psychological rehabilitation to youth in Rivers State and across the Niger Delta.
              </p>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                What began as grassroots volunteer counseling has evolved into an accredited regional institution delivering industry-certified Google digital skills, music and creative production laboratories, girl-child empowerment clubs, and substance rehabilitation programs.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div className="border-l-4 border-[#00521A] pl-4">
                  <p className="font-serif italic text-lg text-[#00521A] font-bold">
                    "When you give a young person tools, respect, and a community that believes in them, you don't just change a life — you restore a generation."
                  </p>
                  <span className="block text-xs uppercase tracking-wider text-[#142118]/60 mt-1 font-sans">
                    — Dr. Ipalibo Harry Banigo, Founder
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Ipalibo Harry Banigo mentor and leadership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Stamp */}
              <div className="absolute -bottom-8 -left-8 hidden sm:block">
                <BotanicalGraphic
                  variant="stamp"
                  color="#00521A"
                  className="w-32 h-32 bg-[#F2EBD9] rounded-full shadow-lg p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & CORE PILLARS */}
      <section className="w-full py-20 lg:py-28 bg-[#F2EBD9] relative overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#00521A"
          opacity={0.06}
          className="bottom-0 right-0 w-[500px] h-[500px]"
        />

        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#142118]">
              Mission & Core Values
            </h2>
            <p className="text-[#142118]/80 text-base sm:text-lg">
              Our principles define how we work alongside youth, partners, and local stakeholders to create lasting community-driven impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Mission */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-[#00521A]/10 flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-transform duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F47E28]/15 flex items-center justify-center text-[#F47E28]">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142118]">
                  Our Mission
                </h3>
                <p className="text-[#142118]/80 text-sm sm:text-base leading-relaxed">
                  To equip young people to pursue their dreams, explore their innate talents and passions, and develop their communities — one innovation at a time — through education, mentorship, and sustainable developmental programs.
                </p>
              </div>
              <div className="pt-2 border-t border-[#00521A]/10 text-xs font-bold uppercase tracking-wider text-[#F47E28]">
                Action-Oriented Impact
              </div>
            </div>

            {/* Card 2: Vision */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-[#00521A]/10 flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-transform duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00521A]/15 flex items-center justify-center text-[#00521A]">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142118]">
                  Our Vision
                </h3>
                <p className="text-[#142118]/80 text-sm sm:text-base leading-relaxed">
                  To ensure all youth within our reach become self-reliant, inspired to lead with integrity, equipped as technological innovators, and transformed into employers of labor across Nigeria and beyond.
                </p>
              </div>
              <div className="pt-2 border-t border-[#00521A]/10 text-xs font-bold uppercase tracking-wider text-[#00521A]">
                Long-Term Independence
              </div>
            </div>

            {/* Card 3: Values */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-[#00521A]/10 flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-transform duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F6CE40]/25 flex items-center justify-center text-[#B88E00]">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142118]">
                  Our Values
                </h3>
                <p className="text-[#142118]/80 text-sm sm:text-base leading-relaxed">
                  Rooted in compassion, integrity, inclusivity, excellence, and community accountability. We measure our success not by headlines, but by the tangible stability and self-respect restored to young people.
                </p>
              </div>
              <div className="pt-2 border-t border-[#00521A]/10 text-xs font-bold uppercase tracking-wider text-[#B88E00]">
                Integrity & Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR METHOD & APPROACH */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                  alt="Youth group collaboration in computer lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
                  alt="Student coding and digital literacy training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Approach Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Our Methodology
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                Sustainable, community-centered transformation
              </h2>

              <p className="text-[#142118]/80 text-base sm:text-lg leading-relaxed">
                Rather than short-term relief, we design 360-degree pathways that empower individuals from initial contact through to economic autonomy.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Community-Anchored",
                    desc: "We work directly with grassroots leaders and families in Port Harcourt and across Niger Delta communities to understand local realities."
                  },
                  {
                    title: "Holistic Rehabilitation",
                    desc: "We pair technical skills with psychological recovery, emotional counseling, and substance addiction support."
                  },
                  {
                    title: "Industry Partnerships",
                    desc: "Collaborations with industry leaders like Google Digital Skills equip students with verified credentials recognized worldwide."
                  },
                  {
                    title: "Career Transition & Placement",
                    desc: "Through our Volunteerism Academy, 80% of our graduates transition into paid internships or launch self-sustaining enterprises."
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#00521A]/10 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#00521A] text-[#C7ED9F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#142118]">{step.title}</h4>
                      <p className="text-sm text-[#142118]/75 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 20 YEARS OF MILESTONES */}
      <section className="w-full py-20 lg:py-28 bg-[#142118] text-[#F2EBD9] relative overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#C7ED9F"
          opacity={0.06}
          className="top-0 left-0 w-[500px] h-[500px]"
        />

        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C7ED9F]/20 text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              Two Decades of Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F2EBD9]">
              Key Milestones in Our Journey
            </h2>
            <p className="text-[#F2EBD9]/80 text-base sm:text-lg">
              From our founding in 2005 to over 15,000 lives impacted across 48 communities today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2005",
                title: "Foundation Inception",
                desc: "Dr. Ipalibo Harry Banigo establishes the foundation in Port Harcourt in loving memory of Caywood Brown."
              },
              {
                year: "2011",
                title: "Tech & Music Labs",
                desc: "Launched dedicated computer appreciation labs and creative sound studios for youth talent cultivation."
              },
              {
                year: "2018",
                title: "Google Partnership",
                desc: "Joined forces with Google Digital Skills for Africa, expanding certified training to thousands."
              },
              {
                year: "2025+",
                title: "20 Years & Beyond",
                desc: "Over 15,000 beneficiaries trained, 80% internship placement rate, and scaling regional hubs."
              },
            ].map((milestone, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4 hover:bg-white/10 transition-colors">
                <div>
                  <span className="font-serif font-black text-3xl text-[#F6CE40] block mb-2">
                    {milestone.year}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-[#F2EBD9]/75 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#F47E28] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ANNUAL REPORTS & IMPACT BRIEFS */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
              Accountability & Evidence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118]">
              Impact Reports & Publications
            </h2>
            <p className="text-[#142118]/80 text-base sm:text-lg">
              Download our comprehensive cohort outcomes, program evaluations, and strategic summaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: "2024", title: "Youth Digital Transformation Report", pages: "38 pages • PDF" },
              { year: "2023", title: "Two Decades of Community Empowerment", pages: "44 pages • PDF" },
              { year: "2022", title: "Regional Vocational & Skills Audit", pages: "32 pages • PDF" },
            ].map((report, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-[#00521A]/15 shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F6CE40]/30 text-[#142118] text-xs font-bold">
                    {report.year} Publication
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#142118]">
                    {report.title}
                  </h3>
                  <p className="text-xs text-[#142118]/60">
                    {report.pages}
                  </p>
                </div>

                <Button
                  variant="default"
                  className="w-full bg-[#00521A] hover:bg-[#003d13] text-white rounded-full text-xs font-bold uppercase tracking-wider py-5 flex items-center justify-center gap-2"
                  asChild
                >
                  <Link href="/contact">
                    <Download className="w-4 h-4" />
                    <span>Request Report</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER CTA SUPPORT BAND */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Support Caywood Brown Foundation
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Your donation funds computing gear, creative arts labs, and recovery counseling for vulnerable youth.
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

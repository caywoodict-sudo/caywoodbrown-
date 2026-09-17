"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Heart,
  Target,
  Eye,
  Award,
  Download,
  CheckCircle2,
} from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function AboutPage() {
  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION (Botanical Canopy) ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">About Caywood Brown Foundation</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-tight">
            Transforming lives, <br />
            <span className="text-[#f6ce40]">igniting youth potential.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85 font-normal">
            Founded in 2006 by Dr. Ipalibo Harry Banigo in memory of her late father Caywood Brown, we equip young people across Rivers State and the Niger Delta with industry-certified digital skills, creative studio production, and holistic recovery pathways.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Support Our Mission</span>
              <Heart className="h-4 w-4 text-[#173421]" />
            </Link>
            <Link
              href="#our-story"
              className="home-button-outline inline-flex items-center gap-2"
            >
              <span>Read Our Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY & FOUNDER'S LEGACY ─── */}
      <section id="our-story" className="py-20 lg:py-28 bg-[#faf7f0] relative overflow-hidden">
        <div className="home-shell">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="home-label">Our Origins & Heritage</p>

              <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421] leading-tight">
                How We Started: <br />
                <span className="text-[#f47e28]">A Living Legacy of Service</span>
              </h2>

              <p className="home-copy text-lg text-[#173421]/85 leading-relaxed">
                The Caywood Brown Foundation was established in 2006 by Dr. Ipalibo Harry Banigo, in honor of her late father, Caywood Brown, whose life of compassion, discipline, and community leadership continues to guide every initiative we undertake.
              </p>

              <p className="home-copy text-lg text-[#173421]/85 leading-relaxed">
                Driven by a deep conviction that youth neglect is community stagnation, Dr. Banigo created the foundation as a platform to offer real opportunities, technological training, and psychological rehabilitation to youth in Rivers State and across the Niger Delta.
              </p>

              <p className="home-copy text-lg text-[#173421]/85 leading-relaxed">
                What began as grassroots volunteer counseling has evolved into an accredited regional institution delivering industry-certified Google digital skills, music and creative production laboratories, girl-child empowerment clubs, and substance rehabilitation programs.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div className="border-l-4 border-[#00521a] pl-5 py-1">
                  <p className="font-serif italic text-xl text-[#00521a] font-medium leading-snug">
                    "When you give a young person tools, respect, and a community that believes in them, you don't just change a life — you restore a generation."
                  </p>
                  <span className="block text-xs uppercase tracking-wider text-[#173421]/60 mt-2 font-sans font-semibold">
                    — Senator Dr. Ipalibo Harry Banigo, Founder
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                <Image
                  src="/images/about/senator-scaled.jpg"
                  alt="Senator Dr. Ipalibo Harry Banigo, founder of Caywood Brown Foundation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Stamp */}
              <div className="absolute -bottom-8 -left-8 hidden sm:block">
                <BotanicalGraphic
                  variant="stamp"
                  color="#00521a"
                  className="w-32 h-32 bg-[#faf7f0] rounded-full shadow-lg p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MISSION, VISION & CORE PILLARS ─── */}
      <section className="py-20 lg:py-28 bg-[#f2ebd9]/60 relative overflow-hidden">
        <div className="home-shell">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">Guiding Principles</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Mission & Core Values
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              Our principles define how we work alongside youth, partners, and local stakeholders to create lasting community-driven impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Mission */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-[#00521a]/10 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f47e28]/15 flex items-center justify-center text-[#f47e28]">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173421]">
                  Our Mission
                </h3>
                <p className="text-[#173421]/80 text-sm sm:text-base leading-relaxed">
                  To equip young people to pursue their dreams, explore their innate talents and passions, and develop their communities — one innovation at a time — through education, mentorship, and sustainable developmental programs.
                </p>
              </div>
              <div className="pt-4 border-t border-[#00521a]/10 text-xs font-bold uppercase tracking-wider text-[#f47e28]">
                Action-Oriented Impact
              </div>
            </div>

            {/* Card 2: Vision */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-[#00521a]/10 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00521a]/15 flex items-center justify-center text-[#00521a]">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173421]">
                  Our Vision
                </h3>
                <p className="text-[#173421]/80 text-sm sm:text-base leading-relaxed">
                  To ensure all youth within our reach become self-reliant, inspired to lead with integrity, equipped as technological innovators, and transformed into employers of labor across Nigeria and beyond.
                </p>
              </div>
              <div className="pt-4 border-t border-[#00521a]/10 text-xs font-bold uppercase tracking-wider text-[#00521a]">
                Long-Term Independence
              </div>
            </div>

            {/* Card 3: Values */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-[#00521a]/10 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f6ce40]/30 flex items-center justify-center text-[#996c00]">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173421]">
                  Our Values
                </h3>
                <p className="text-[#173421]/80 text-sm sm:text-base leading-relaxed">
                  Rooted in compassion, integrity, inclusivity, excellence, and community accountability. We measure our success not by headlines, but by the tangible stability and self-respect restored to young people.
                </p>
              </div>
              <div className="pt-4 border-t border-[#00521a]/10 text-xs font-bold uppercase tracking-wider text-[#996c00]">
                Integrity & Accountability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. OUR METHOD & APPROACH ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/programs/google-training.png"
                  alt="Participants at the foundation’s Google digital skills programme"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-8">
                <Image
                  src="/images/programs/computer-lab.jpg"
                  alt="A participant at a Caywood Brown computer workstation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Approach Details */}
            <div className="lg:col-span-7 space-y-6">
              <p className="home-label">Our Methodology</p>

              <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421] leading-tight">
                Sustainable, community-centered transformation
              </h2>

              <p className="home-copy text-lg text-[#173421]/80 leading-relaxed">
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
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#00521a]/10 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#00521a] text-[#c7ed9f] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#173421]">{step.title}</h4>
                      <p className="text-sm text-[#173421]/75 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. 20 YEARS OF MILESTONES ─── */}
      <section className="py-20 lg:py-28 bg-[#12291b] text-[#faf7f0] relative overflow-hidden">
        <div className="home-shell relative z-10">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label text-[#c7ed9f]">Two Decades of Impact</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#faf7f0]">
              Key Milestones in Our Journey
            </h2>
            <p className="text-lg text-[#faf7f0]/80">
              From our founding in 2006 to over 15,000 lives impacted across 48 communities today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2006",
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
                  <span className="font-serif font-black text-3xl text-[#f6ce40] block mb-2">
                    {milestone.year}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-[#faf7f0]/75 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#f47e28] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. ANNUAL REPORTS & IMPACT BRIEFS ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          <div className="max-w-3xl mb-14 space-y-4">
            <p className="home-label">Accountability & Evidence</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Impact Reports & Publications
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              Download our comprehensive cohort outcomes, program evaluations, and strategic summaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: "2024", title: "Youth Digital Transformation Report", pages: "38 pages • PDF" },
              { year: "2023", title: "Two Decades of Community Empowerment", pages: "44 pages • PDF" },
              { year: "2022", title: "Regional Vocational & Skills Audit", pages: "32 pages • PDF" },
            ].map((report, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#f6ce40]/25 text-[#173421] text-xs font-bold">
                    {report.year} Publication
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#173421]">
                    {report.title}
                  </h3>
                  <p className="text-xs text-[#173421]/60">
                    {report.pages}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="home-button inline-flex items-center justify-center gap-2 text-center text-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Report</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. PRE-FOOTER CLOSING PATHWAYS ─── */}
      <section className="home-section closing-section py-24 sm:py-32">
        <div className="home-shell text-center">
          <p className="home-label text-[#00521a]">Take Action Today</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173421] tracking-tight mt-3">
            Join Our Mission of Transformation
          </h2>
          <p className="home-copy text-[#173421]/90 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Your support directly equips community computer labs, funds addiction recovery counseling, and trains youth leaders across the Niger Delta.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Make a Donation</span>
              <Heart className="h-4 w-4 text-[#f6ce40]" />
            </Link>
            <Link
              href="/team"
              className="home-button-outline inline-flex items-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white"
            >
              <span>Meet Our Leadership</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

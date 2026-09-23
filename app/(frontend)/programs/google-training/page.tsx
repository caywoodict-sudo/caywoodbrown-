"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Code,
  Laptop,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Heart,
  Clock,
  Briefcase,
  ChevronRight,
  Quote
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function GoogleTrainingPage() {
  const [activeTab, setActiveTab] = useState("marketing")

  const courses = [
    {
      id: "marketing",
      title: "Digital Marketing & Growth",
      badge: "Track 01",
      duration: "12 Weeks",
      level: "Beginner to Intermediate",
      description: "Master search engine optimization, content strategy, paid campaign management, and digital analytics to help businesses grow online.",
      topics: ["SEO & SEM Foundations", "Social Media Marketing", "Content Creation & Copywriting", "Campaign Budgeting & ROI Analysis"],
      outcome: "Google Digital Marketing Certification + Internship Placement Opportunity",
      color: "#F47E28"
    },
    {
      id: "analytics",
      title: "Data Analytics & Insights",
      badge: "Track 02",
      duration: "14 Weeks",
      level: "Intermediate",
      description: "Transform raw data into strategic business insights using spreadsheets, SQL, Google Looker Studio, and Python fundamentals.",
      topics: ["Spreadsheet & Google Sheets Mastery", "Database Querying with SQL", "Data Visualization & Dashboards", "Statistical Decision Making"],
      outcome: "Certified Google Data Analyst Credential + Portfolio Projects",
      color: "#F6CE40"
    },
    {
      id: "coding",
      title: "Web Development & Frontend",
      badge: "Track 03",
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      description: "Build interactive, responsive websites and web applications utilizing modern HTML5, CSS3, JavaScript, and modern frameworks.",
      topics: ["Responsive Web Architecture", "Modern JavaScript (ES6+)", "Git & Collaborative Version Control", "API Integration & Deployment"],
      outcome: "Full Frontend Portfolio + Guaranteed Tech Internship Matching",
      color: "#4CB9D1"
    },
    {
      id: "it-support",
      title: "IT Support & Cloud Basics",
      badge: "Track 04",
      duration: "10 Weeks",
      level: "Beginner",
      description: "Learn computer hardware troubleshooting, network configuration, security fundamentals, and Google Workspace cloud administration.",
      topics: ["Hardware Assembly & Diagnostics", "TCP/IP & Network Protocols", "System Security & Backup", "Customer Service & Helpdesk Systems"],
      outcome: "Google IT Support Professional Certificate",
      color: "#4BAE44"
    }
  ]

  const activeCourse = courses.find((c) => c.id === activeTab) || courses[0]

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
              <Award className="w-4 h-4 text-[#F6CE40]" />
              <span>Google Strategic Alliance • Rivers State Hub</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Google Digital Skills <br />
              <span className="text-[#F6CE40]">for Africa Partnership</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed">
              Equipping underserved youth in Port Harcourt and the Niger Delta with industry-certified digital competence, software engineering skills, and direct pathways to remote internships and tech careers.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#tracks">Explore Training Tracks</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">Apply for Next Cohort</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. PARTNERSHIP IMPACT METRICS ─── */}
      <section className="w-full bg-[#142118] text-[#F2EBD9] py-12 border-y border-white/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#F6CE40] block">
                3,000+
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F2EBD9]/70 font-semibold mt-1 block">
                Students Certified
              </span>
            </div>
            <div>
              <span className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#C7ED9F] block">
                80%
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F2EBD9]/70 font-semibold mt-1 block">
                Internship Placement
              </span>
            </div>
            <div>
              <span className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#F47E28] block">
                100%
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F2EBD9]/70 font-semibold mt-1 block">
                Tuition-Free for Youth
              </span>
            </div>
            <div>
              <span className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#4CB9D1] block">
                48
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F2EBD9]/70 font-semibold mt-1 block">
                Communities Reached
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT THE PROGRAM & METHODOLOGY ─── */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Real Skills, Real Careers
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                Closing the digital divide <br />
                <span className="text-[#F47E28]">through hands-on mastery</span>
              </h2>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                In today’s global digital economy, access to computing hardware and structured mentorship makes the difference between marginalization and economic self-determination.
              </p>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                Through our partnership with Google, students receive certified curricula, daily access to CBF’s high-speed computer labs in Port Harcourt, personalized mentoring from seasoned software engineers, and guaranteed transition support into real work environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Official Google Certifications",
                  "Free Access to High-Speed Labs",
                  "1-on-1 Senior Developer Mentorship",
                  "CV & Technical Interview Prep",
                  "Internship Placement Pipeline",
                  "Lifetime Alumni Network",
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-bold text-[#00521A]">
                    <CheckCircle2 className="w-4 h-4 text-[#4BAE44] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                <Image
                  src="/images/programs/google-training.png"
                  alt="Participants at a Google digital skills programme"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. TRAINING TRACKS (Interactive Tabbed Showcase) ─── */}
      <section id="tracks" className="w-full py-20 lg:py-28 bg-[#F2EBD9] relative overflow-hidden">
        <BotanicalGraphic
          variant="leaves"
          color="#00521A"
          opacity={0.06}
          className="bottom-0 right-0 w-[500px] h-[500px]"
        />

        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A] text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              Curriculum Tracks
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#142118]">
              Choose Your Specialization
            </h2>
            <p className="text-[#142118]/80 text-base sm:text-lg">
              Each track combines theoretical fundamentals with portfolio projects and industry certification.
            </p>
          </div>

          {/* Track Selection Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {courses.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === c.id
                    ? "bg-[#00521A] text-[#F2EBD9] shadow-lg scale-105"
                    : "bg-white text-[#142118] hover:bg-[#C7ED9F]/40 border border-[#00521A]/10"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Active Course Detail Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-[#00521A]/10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: activeCourse.color }}>
                  {activeCourse.badge}
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-[#142118]/60 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeCourse.duration}
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-[#142118]/60 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {activeCourse.level}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#142118]">
                {activeCourse.title}
              </h3>

              <p className="text-[#142118]/80 text-base sm:text-lg leading-relaxed">
                {activeCourse.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00521A]">
                  Core Curriculum Modules:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeCourse.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#142118]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F47E28]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#C7ED9F]/30 border border-[#00521A]/15 text-[#00521A] text-sm font-bold flex items-center gap-2">
                <Award className="w-5 h-5 shrink-0" />
                <span>Certification: {activeCourse.outcome}</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF7F0] p-8 rounded-2xl border border-[#00521A]/10 text-center space-y-5">
              <h4 className="font-serif font-bold text-xl text-[#142118]">
                Next Cohort Application
              </h4>
              <p className="text-xs text-[#142118]/70">
                Tuition is 100% covered by Caywood Brown Foundation scholarships for qualified youth aged 16–30.
              </p>
              <Button
                variant="faFlame"
                className="w-full py-5 text-xs font-bold uppercase tracking-wider"
                asChild
              >
                <Link href="/contact">Apply For This Track</Link>
              </Button>
              <p className="text-[11px] text-[#142118]/50">
                Limited seats available per cohort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. ALUMNI TRANSFORMATION STORY ─── */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-5xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-[#142118] text-[#F2EBD9] p-8 sm:p-14 shadow-2xl relative overflow-hidden grid md:grid-cols-12 gap-8 items-center">
            <BotanicalGraphic
              variant="topography"
              color="#C7ED9F"
              opacity={0.08}
              className="top-0 right-0 w-96 h-96"
            />

            <div className="md:col-span-12 space-y-4 relative z-10">
              <Quote className="w-10 h-10 text-[#F6CE40] opacity-60" />
              <p className="font-serif text-lg sm:text-2xl leading-relaxed text-[#F2EBD9]">
                "Before joining the Google Digital Skills cohort at Caywood Brown, I had never written a single line of code. Today, I work as an accredited frontend developer and earn an independent income supporting my family."
              </p>
              <div>
                <h5 className="font-serif font-bold text-lg text-[#F6CE40]">
                  Blessing Okon
                </h5>
                <p className="text-xs uppercase tracking-wider text-[#C7ED9F]">
                  2023 Cohort Graduate • Now Frontend Associate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PRE-FOOTER CTA BAND ─── */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Sponsor a Student's Tech Journey
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Your support pays for computers, internet connectivity, and mentor stipends for young people in Rivers State.
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

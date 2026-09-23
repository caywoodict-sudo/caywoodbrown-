"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Laptop,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Clock,
  Briefcase,
  Monitor,
  FileText,
  Database,
  Mail,
  Cloud,
  ShieldCheck,
  ChevronRight,
  Quote
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function ComputerAppreciationPage() {
  const [activeModule, setActiveModule] = useState(0)

  const modules = [
    {
      id: "operations",
      title: "Basic Computer Operations & Navigation",
      icon: Monitor,
      duration: "Weeks 1 - 2",
      badge: "Module 01",
      description: "Learners are introduced to the foundational skills needed to operate a computer efficiently. This includes understanding hardware components, using a mouse and keyboard, managing desktops, and navigating operating systems like Windows.",
      points: [
        "Hardware components identification and workstation setup",
        "Mastery of mouse control, keyboard dexterity, and typing fundamentals",
        "Windows OS desktop navigation, window management, and shortcuts",
        "System settings, basic troubleshooting, and device management"
      ]
    },
    {
      id: "office-suite",
      title: "Microsoft Word, Excel & PowerPoint",
      icon: FileText,
      duration: "Weeks 3 - 5",
      badge: "Module 02",
      description: "Participants gain hands-on experience with the Microsoft Office Suite. They learn to create and format documents in Word, manage data and perform calculations in Excel, and design impactful presentations using PowerPoint.",
      points: [
        "Microsoft Word: Document drafting, styling, formatting, and report preparation",
        "Microsoft Excel: Worksheets, data entry, fundamental formulas, and sum/average functions",
        "Microsoft PowerPoint: Slide creation, formatting visuals, and effective business presentation design",
        "Exporting and printing standard office documentation"
      ]
    },
    {
      id: "file-data",
      title: "File Management & Data Entry",
      icon: Database,
      duration: "Weeks 6 - 7",
      badge: "Module 03",
      description: "Training covers the proper organization of files and folders, saving and retrieving documents, and accurately entering, editing, and maintaining data using spreadsheets and databases.",
      points: [
        "Logical folder structures, naming conventions, and disk drive organization",
        "Data entry accuracy, verification methods, and error checking",
        "Archiving, USB drive transfers, and backup safety routines",
        "Searching, indexing, and swift retrieval of official files"
      ]
    },
    {
      id: "internet-email",
      title: "Internet Use & Professional Email Communication",
      icon: Mail,
      duration: "Weeks 8 - 9",
      badge: "Module 04",
      description: "Students learn to browse the web safely, conduct effective online research, and use web-based tools. They are also trained in creating, managing, and sending professional emails, including attachments and proper email etiquette.",
      points: [
        "Secure web browsing, safe search techniques, and evaluating online information",
        "Professional email address setup, inbox management, and drafting etiquette",
        "Handling file attachments, compressing documents, and avoiding phishing scams",
        "Digital communication etiquette in formal workplace contexts"
      ]
    },
    {
      id: "productivity-tools",
      title: "Introductory Office Productivity & Cloud Tools",
      icon: Cloud,
      duration: "Week 10",
      badge: "Module 05",
      description: "This includes exposure to additional tools like PDF readers, calendar and scheduling software, cloud storage (e.g., Google Drive), and collaborative platforms to enhance workplace efficiency.",
      points: [
        "Working with PDF readers, document signing, and fillable forms",
        "Google Drive cloud storage, sharing permissions, and online document editing",
        "Digital calendar scheduling, meeting reminders, and task planning",
        "Introductory collaboration on shared digital workspaces"
      ]
    },
    {
      id: "etiquette",
      title: "Workplace Digital Etiquette & Ethics",
      icon: ShieldCheck,
      duration: "Weeks 11 - 12",
      badge: "Module 06",
      description: "Emphasis is placed on appropriate behavior when using digital tools at work. This includes understanding professional communication, respecting privacy and confidentiality, and maintaining a positive online presence.",
      points: [
        "Client and organizational confidentiality and data privacy protection",
        "Respectful and professional digital communication standards",
        "Social media responsibility and personal brand awareness",
        "Workplace computer usage policies and cybersecurity basics"
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
              <Laptop className="w-4 h-4 text-[#F6CE40]" />
              <span>Digital Inclusion &bull; Foundation Program</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Computer Appreciation <br />
              <span className="text-[#F6CE40]">Program</span>
            </h1>

            <p className="text-[#F2EBD9]/90 text-lg sm:text-xl leading-relaxed">
              We believe digital literacy is the new baseline for opportunity. Free, beginner-friendly training equipping young people with the essential computing skills, office software competence, and confidence needed for entry-level roles and the digital economy.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#modules">Explore Core Skills</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/volunteer">Volunteer as Tutor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. KEY PROGRAM IMPACT METRICS ─── */}
      <section className="w-full bg-[#142118] text-white py-12 border-b border-[#C7ED9F]/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">489+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Students Trained</div>
              <p className="text-xs text-[#F2EBD9]/70">In basic & office computing</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">100%</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Tuition-Free</div>
              <p className="text-xs text-[#F2EBD9]/70">Zero cost to participants</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">12 Weeks</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Cohort Duration</div>
              <p className="text-xs text-[#F2EBD9]/70">Hands-on practical lab hours</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F6CE40]">85%+</div>
              <div className="text-xs uppercase tracking-widest text-[#C7ED9F] font-bold">Job Placement / Freelance</div>
              <p className="text-xs text-[#F2EBD9]/70">Office assistant & service roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT THE PROGRAM (Authentic DB copy) ─── */}
      <section className="w-full py-20 bg-[#FAF7F0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
                PROGRAM OVERVIEW
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118] leading-tight">
                About Our Computer Program
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#142118]/80 leading-relaxed">
                <p>
                  We believe digital literacy is the new baseline for opportunity. Through our <strong>Computer Appreciation Program</strong>, we offer free, beginner-friendly training that introduces participants to the essential use of computers in everyday office environments. From understanding basic software to navigating the digital workspace with ease, we equip individuals with the confidence and competence needed for entry-level roles.
                </p>
                <p>
                  Graduates of this program have gone on to secure office assistant positions, freelance administrative work, and even start small-scale computer service businesses — proving that with the right tools, anyone can take the first step into the digital economy.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00521A] text-[#F6CE40] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">No Prior Experience Needed</h4>
                    <p className="text-xs text-[#142118]/70">Beginner-friendly curriculum</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F47E28] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142118]">Accredited Certificate</h4>
                    <p className="text-xs text-[#142118]/70">Awarded upon project completion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F2EBD9] p-8 sm:p-10 rounded-3xl border border-[#00521A]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7ED9F]/30 rounded-bl-full pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold text-[#00521A] mb-4">
                What Participants Achieve
              </h3>
              <ul className="space-y-3.5 text-sm text-[#142118]/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Mastery of keyboard typing speed and mouse precision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Ability to produce professional letters, spreadsheets, and presentations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Confidence conducting business correspondence via professional email</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Practical understanding of cloud storage and collaborative tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00521A] shrink-0 mt-0.5" />
                  <span>Readiness for administrative, front desk, and clerk employment</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#00521A]/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00521A] font-bold hover:text-[#F47E28] transition-colors text-sm"
                >
                  <span>Inquire about the next cohort enrollment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CORE SKILLS TAUGHT (Interactive Modules) ─── */}
      <section id="modules" className="w-full py-24 bg-white border-y border-[#00521A]/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521A] bg-[#C7ED9F]/60 px-4 py-1.5 rounded-full inline-block">
              WHAT WE OFFER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142118]">
              Core Skills Taught
            </h2>
            <p className="text-[#142118]/75 text-base sm:text-lg">
              A comprehensive 6-pillar syllabus engineered to transition absolute beginners into confident, workplace-ready computer users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, idx) => {
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
            TAKE THE FIRST STEP INTO THE DIGITAL ECONOMY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2EBD9] leading-tight">
            Ready to Enroll or Support our Computer Lab?
          </h2>
          <p className="text-[#F2EBD9]/85 text-base sm:text-lg max-w-2xl mx-auto">
            Whether you want to sponsor a workstation, volunteer as an instructor, or enroll in our upcoming cohort, your involvement changes lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="faGold"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contact">Register for Cohort</Link>
            </Button>
            <Button
              variant="faWhiteOutline"
              size="lg"
              className="text-xs font-bold uppercase tracking-wider px-9 py-6 h-auto hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/donate">Donate a Computer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

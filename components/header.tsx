"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  Heart,
  Search,
  X,
  ChevronRight,
  ArrowRight,
  Globe,
  Users,
  Briefcase,
  BookOpen,
  Sparkles,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>("about")
  const [searchQuery, setSearchQuery] = useState("")

  // Prevent background scroll when full-screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const menuSections = [
    {
      id: "about",
      title: "About us",
      links: [
        { title: "Our Purpose & Vision", href: "/about#mission", desc: "Equipping young people to lead, innovate, and thrive" },
        { title: "Our Story & Founder (Senator Banigo)", href: "/about#history", desc: "Driving transformation since 2006 (RC: 0022482)" },
        { title: "Leadership & Team", href: "/team", desc: "Senator Ipalibo Banigo, Dr. Bokumo Orukari, Lucy Evelyn" },
        { title: "Official Accreditation", href: "/about#accreditation", desc: "Government NGO Accreditation Certificate DHPRS-2026_54" },
      ],
    },
    {
      id: "what-we-do",
      title: "What we do",
      links: [
        { title: "Computer Appreciation Program", href: "/programs/computer-appreciation", desc: "Free foundational computing and office suite literacy" },
        { title: "Music Equipment Training Program", href: "/programs/music-training", desc: "Drums and keyboard mastery, ear training & performance" },
        { title: "Youth Rehabilitation & Recovery", href: "/programs/youth-rehabilitation", desc: "Substance abuse counseling, therapy & social reintegration" },
        { title: "Graduate Internship & Volunteerism Academy", href: "/programs/volunteerism-academy", desc: "6-month corporate placements with NLNG, Rivers Govt, PHCCIMA" },
        { title: "Youth Health Awareness Program", href: "/programs/youth-health-awareness", desc: "School campaigns on hygiene, wellness, mental health & abstinence" },
        { title: "Her Voice, Her Power: Girl Child Advocacy", href: "/programs/girl-child-advocacy", desc: "Leadership workshops, rights advocacy & menstrual dignity kits" },
        { title: "Google Digital Skills Partnership", href: "/programs/google-training", desc: "Industry-certified coding, web development & digital marketing" },
      ],
    },
    {
      id: "support",
      title: "Support us",
      links: [
        { title: "Make a Donation", href: "/donate", desc: "Directly sponsor learning materials, computers, and medical kits" },
        { title: "Volunteer with Us", href: "/volunteer", desc: "Lend your professional expertise as a mentor, tutor, or counselor" },
        { title: "Partner With Us", href: "/partner", desc: "Corporate CSR alliances, in-kind support & graduate job placement" },
        { title: "Sponsor a Student or Girl Child", href: "/donate#sponsor", desc: "Provide scholarships and educational learning kits" },
      ],
    },
    {
      id: "news",
      title: "Outreaches & Events",
      links: [
        { title: "World Immunization Day 2025", href: "/events", desc: "IMPA Campaign rallying parents and health workers in Abuja" },
        { title: "Christmas Outreach at Durumi IDP Camp", href: "/events", desc: "Delivering food staples, dignity kits & holiday joy to displaced families" },
        { title: "Summer Holiday Skills Programme", href: "/events", desc: "Computer typing & drum training camp for school pupils" },
        { title: "All Events & Field Stories", href: "/events", desc: "Explore our archive of community outreaches since 2006" },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      links: [
        { title: "Head Office (Port Harcourt)", href: "/contact", desc: "Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt" },
        { title: "Phone Support", href: "tel:+2348038817059", desc: "(+234) 803 881 7059 — Monday to Friday 8am - 5pm" },
        { title: "Official Email", href: "mailto:caywoodbrowndocs@gmail.com", desc: "caywoodbrowndocs@gmail.com" },
      ],
    },
  ]

  return (
    <>
      {/* 1. TOP FLOATING HEADER BAR */}
      <header className="fixed top-0 left-0 right-0 w-full z-40 pointer-events-none px-4 sm:px-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Top-Left: Authentic CBF Brand Logo & Wordmark */}
          <Link
            href="/"
            className="pointer-events-auto flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            aria-label="Caywood Brown Foundation Home"
          >
            <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/60 shadow-lg flex items-center justify-center group-hover:border-[#F6CE40] transition-colors">
              <Image
                src="/images/caywood-logo-nav.png"
                alt="Caywood Brown Foundation Official Logo"
                width={140}
                height={100}
                className="h-9 sm:h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Top-Center: Farm Africa Signature MENU Pill */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group flex items-center gap-3 bg-[#00521A] text-white px-7 py-3 rounded-b-2xl shadow-xl border-x border-b border-[#00521A]/30 hover:bg-[#003d13] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <div className="flex flex-col gap-1.5 w-5 justify-center items-center">
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#F2EBD9] group-hover:text-[#F6CE40] transition-colors">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

          {/* Top-Right: Farm Africa Signature Floating Sunshine DONATE Pill */}
          <div className="fixed top-4 sm:top-6 right-4 sm:right-8 z-40 pointer-events-auto">
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-2.5 bg-[#F6CE40] text-[#142118] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:bg-[#E8BB1D] hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Beating Heart Icon */}
              <motion.span
                animate={{ scale: [1, 1.25, 1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#DB1C55]"
              >
                <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#DB1C55]" />
              </motion.span>
              <span>Donate</span>
            </Link>
          </div>

        </div>
      </header>

      {/* 2. FULL-SCREEN FOREST GREEN MENU DRAWER (Farm Africa Authentic Identity) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#00521A] text-white flex flex-col justify-between overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="w-full px-6 sm:px-12 py-6 border-b border-white/10 flex items-center justify-between">
              {/* Logo in Drawer */}
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 group"
              >
                <div className="bg-white px-3 py-1.5 rounded-2xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/caywood-logo-nav.png"
                    alt="Caywood Brown Foundation Logo"
                    width={130}
                    height={95}
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-[#C7ED9F] group-hover:text-white transition-colors">
                    Caywood Brown Foundation
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#F6CE40]">
                    Established 2006 · RC: 0022482
                  </span>
                </div>
              </Link>

              {/* Close Button Pill */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F2EBD9] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Main Menu Grid Content */}
            <div className="container max-w-7xl mx-auto px-6 sm:px-12 py-10 flex-1 grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left & Middle: Navigation Pillars & Sub-links */}
              <div className="lg:col-span-8 space-y-8">
                {/* Search Bar (Farm Africa Style #004416) */}
                <div className="relative max-w-xl">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search programmes, stories, or reports..."
                    className="w-full bg-[#004416] text-[#C7ED9F] placeholder:text-[#C7ED9F]/60 border border-white/10 text-sm sm:text-base py-3.5 pl-12 pr-6 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C7ED9F]"
                  />
                  <Search className="w-5 h-5 text-[#C7ED9F] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Categories Tabs & Submenu Links */}
                <div className="grid md:grid-cols-12 gap-8 pt-4">
                  {/* Category Headings */}
                  <div className="md:col-span-4 space-y-2 border-r border-white/10 pr-4">
                    {menuSections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => setActiveCategory(sec.id)}
                        className={`w-full text-left px-4 py-3 rounded-2xl text-xl font-serif font-bold transition-all flex items-center justify-between ${
                          activeCategory === sec.id
                            ? "bg-[#C7ED9F] text-[#00521A] shadow-md"
                            : "text-[#F2EBD9] hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span>{sec.title}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === sec.id ? "rotate-90 text-[#00521A]" : "text-white/40"}`} />
                      </button>
                    ))}
                  </div>

                  {/* Submenu Details */}
                  <div className="md:col-span-8 space-y-3">
                    {menuSections
                      .find((sec) => sec.id === activeCategory)
                      ?.links.map((link, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-serif text-lg font-bold text-[#F2EBD9] group-hover:text-[#F6CE40] transition-colors">
                                {link.title}
                              </h4>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#F6CE40] group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-xs text-[#C7ED9F]/80 mt-1">
                              {link.desc}
                            </p>
                          </Link>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Right: Farm Africa Pale Stone Support Box */}
              <div className="lg:col-span-4 bg-[#FAF7F0] text-[#142118] p-8 rounded-3xl border-2 border-[#00521A] shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00521A] text-[#F6CE40] mx-auto flex items-center justify-center font-serif font-bold text-lg">
                    20y
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#00521A] leading-tight">
                    Support the Caywood Brown Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-[#142118]/80 leading-relaxed">
                    Help us transform young lives through free computer appreciation, creative music training, drug rehabilitation, and graduate internships.
                  </p>

                  <div className="pt-2">
                    <Button
                      variant="faSunshine"
                      size="lg"
                      className="w-full text-xs font-bold uppercase tracking-wider py-4 shadow-md hover:scale-105 transition-transform"
                      asChild
                    >
                      <Link
                        href="/donate"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center gap-2"
                      >
                        <Heart className="w-4 h-4 fill-[#142118]" />
                        <span>Donate Today</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

            </div>

            {/* Drawer Footer Bar */}
            <div className="w-full px-6 sm:px-12 py-5 bg-[#004416] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7ED9F]/80">
              <div className="flex items-center gap-6">
                <span>© {new Date().getFullYear()} Caywood Brown Foundation.</span>
                <span className="hidden sm:inline">•</span>
                <span>Registered Non-Profit (RC: 0022482 · Established 2006)</span>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <span className="text-white/60 uppercase tracking-widest text-[10px]">Follow Us:</span>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C7ED9F] hover:text-[#00521A] flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C7ED9F] hover:text-[#00521A] flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C7ED9F] hover:text-[#00521A] flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C7ED9F] hover:text-[#00521A] flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

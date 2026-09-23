"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setHasScrolled(window.scrollY > 40)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const previousFocus = document.activeElement as HTMLElement | null
    const dialog = dialogRef.current
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])') ?? [])
    focusable()[0]?.focus()
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return
      const items = focusable()
      const first = items[0], last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    dialog?.addEventListener("keydown", trapFocus)
    return () => {
      dialog?.removeEventListener("keydown", trapFocus)
      previousFocus?.focus()
    }
  }, [isMenuOpen])
  // Prevent background scroll when menu is open
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  const navSections = [
    {
      title: "About us",
      href: "/about",
      links: [
        { label: "Our purpose & vision", href: "/about" },
        { label: "Founder's letter", href: "/about/founders-message" },
        { label: "Leadership & council", href: "/team" },
        { label: "Frequently asked questions", href: "/faq" },
      ],
    },
    {
      title: "Our work",
      href: "/programs",
      links: [
        { label: "Build digital confidence", href: "/programs/computer-appreciation" },
        { label: "Nurture creative talent", href: "/programs/music-training" },
        { label: "Support a fresh start", href: "/programs/youth-rehabilitation" },
        { label: "Volunteerism Academy", href: "/programs/volunteerism-academy" },
        { label: "Youth health & wellbeing", href: "/programs/youth-health-awareness" },
        { label: "Champion every girl", href: "/programs/girl-child-advocacy" },
        { label: "Google digital skills", href: "/programs/google-training" },
      ],
    },
    {
      title: "Support us",
      href: "/donate",
      links: [
        { label: "Make a donation", href: "/donate" },
        { label: "Become a volunteer", href: "/volunteer" },
        { label: "Partner with us", href: "/partner" },
        { label: "Frequently asked questions", href: "/faq" },
      ],
    },
    {
      title: "Outreaches & Contact",
      href: "/events",
      links: [
        { label: "Campaigns & field outreaches", href: "/events" },
        { label: "World Immunization Day (IMPA)", href: "/events#world-immunization-day-impa" },
        { label: "Contact our team", href: "/contact" },
      ],
    },
  ]

  return (
    <>
      {/* ─── 1. SOLID / FROSTED HEADER BAR (No collision on scroll) ─── */}
      <header
        className={`site-header fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 px-4 sm:px-8 ${
          hasScrolled
            ? "bg-[#12291b] shadow-lg py-2.5 sm:py-3 border-b border-white/10 pointer-events-auto"
            : "bg-transparent py-3 sm:py-4 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Brand Logo: Clean presentation */}
          <Link
            href="/"
            className="pointer-events-auto flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-xl"
            aria-label="Caywood Brown Foundation home"
          >
            <div className="header-logo bg-white/95 px-3 py-1.5 rounded-xl border border-white/60 flex items-center justify-center">
              <Image
                src="/images/caywood-logo-nav.png"
                alt="Caywood Brown Foundation"
                width={130}
                height={85}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
            <span className="header-wordmark">Caywood Brown<span>Foundation</span></span>
          </Link>

          {/* Desktop Primary Nav Links */}
          <nav className="pointer-events-auto hidden lg:flex items-center gap-7">
            <Link href="/about" className="text-sm font-semibold text-[#faf7f0] hover:text-[#f6ce40] transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-sm font-semibold text-[#faf7f0] hover:text-[#f6ce40] transition-colors">
              Programmes
            </Link>
            <Link href="/events" className="text-sm font-semibold text-[#faf7f0] hover:text-[#f6ce40] transition-colors">
              Campaigns
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-[#faf7f0] hover:text-[#f6ce40] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Center Menu Pill (Compact & balanced Farm Africa style) */}
          <div className="pointer-events-auto hidden sm:block">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group flex items-center gap-2.5 bg-[#00521a] hover:bg-[#006822] text-[#faf7f0] px-6 py-2 rounded-full shadow-md border border-white/20 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-1 w-4 justify-center items-center" aria-hidden="true">
                <span className={`block h-0.5 w-full bg-[#faf7f0] transition-transform duration-200 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-full bg-[#faf7f0] transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-[#faf7f0] transition-transform duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#faf7f0]">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

          {/* Mobile Actions: Menu + Donate */}
          <div className="sm:hidden pointer-events-auto flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-[#00521a] text-[#faf7f0] px-3.5 py-2 rounded-full shadow-sm text-xs font-bold uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-1 w-3.5" aria-hidden="true">
                <span className={`block h-0.5 w-full bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-full bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
              <span>{isMenuOpen ? "Close" : "Menu"}</span>
            </button>

            <Link
              href="/donate"
              className="flex items-center justify-center bg-[#f6ce40] hover:bg-[#e5bf32] text-[#142118] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-transform active:scale-95"
            >
              <span>Donate</span>
            </Link>
          </div>

          {/* Desktop Donate Pill */}
          <div className="hidden sm:block pointer-events-auto">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-[#f6ce40] hover:bg-[#e5bf32] text-[#142118] px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
            >
              <span>Donate</span>
            </Link>
          </div>

        </div>
      </header>

      {/* ─── 2. COMPACT & SIMPLE FARM AFRICA MENU DRAWER ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#00521a] text-[#faf7f0] flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            {/* Top Bar inside Drawer */}
            <div className="sticky top-0 z-10 bg-[#00521a]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-12 py-4 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="bg-white px-3 py-1 rounded-xl shadow-sm">
                  <Image
                    src="/images/caywood-logo-nav.png"
                    alt="Caywood Brown Foundation"
                    width={110}
                    height={70}
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="font-serif text-sm font-bold text-[#faf7f0]">Caywood Brown Foundation</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#c7ed9f]">Est. 2006 · RC: 0022482</span>
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#faf7f0] text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Main Menu Grid: Clean, Compact, High-Contrast */}
            <div className="container max-w-6xl mx-auto px-6 sm:px-12 py-10 sm:py-14 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                {navSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    {section.href ? (
                      <Link
                        href={section.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl font-medium text-[#c7ed9f] hover:text-[#f6ce40] transition-colors"
                      >
                        <span>{section.title}</span>
                        <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ) : (
                      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#c7ed9f]">
                        {section.title}
                      </h2>
                    )}

                    <ul className="space-y-2.5 pt-1 border-t border-white/10">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm sm:text-base text-[#faf7f0]/85 hover:text-white hover:underline underline-offset-4 transition-colors block py-0.5"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Direct Contact & Action Bar in Drawer */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-[#faf7f0]/80">
                <div className="flex flex-wrap items-center gap-6">
                  <span>Port Harcourt (HQ) &amp; Abuja</span>
                  <span>•</span>
                  <a href="tel:+2348038817059" className="hover:text-white underline-offset-4 hover:underline">
                    (+234) 803 881 7059
                  </a>
                  <span>•</span>
                  <a href="mailto:caywoodbrowndocs@gmail.com" className="inline-flex items-center gap-1.5 hover:text-white underline-offset-4 hover:underline">
                    <span>caywoodbrowndocs@gmail.com</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <Link
                  href="/donate#donate-now"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f6ce40] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#142118] hover:bg-[#e5bf32] transition-colors"
                >
                  <span>Support our mission</span>
                </Link>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 px-6 sm:px-12 py-4 text-xs text-[#faf7f0]/60 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>© {new Date().getFullYear()} Caywood Brown Foundation. All rights reserved.</p>
              <p>Registered Non-Profit · RC: 0022482</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

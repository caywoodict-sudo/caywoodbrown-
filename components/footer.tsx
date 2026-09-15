"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUp, Mail, Phone, MapPin, CheckCircle2, Heart } from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full relative overflow-hidden">
      {/* ─── MAIN FOOTER DIRECTORY (Farm Africa Authentic Forest Green) ─── */}
      <div className="relative w-full bg-[#00521A] text-white pt-16 pb-12 px-4 md:px-8 border-t border-[#003d13]">
        <BotanicalGraphic
          variant="leaves"
          color="#C7ED9F"
          opacity={0.05}
          className="bottom-0 right-0 w-[500px] h-[500px]"
        />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3.5 py-2 rounded-2xl shadow-md border border-[#C7ED9F]/40 shrink-0">
                <Image
                  src="/images/caywood-logo.png"
                  alt="Caywood Brown Foundation Logo"
                  width={160}
                  height={116}
                  className="h-11 w-auto object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#F2EBD9] leading-tight">
                  Caywood Brown Foundation
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#C7ED9F]">
                  Established 2006 • RC: 0022482
                </p>
              </div>
            </div>

            <p className="text-sm text-[#F2EBD9]/80 leading-relaxed">
              Established in 2006 by Senator Dr. Ipalibo Harry Banigo in loving memory of Caywood Brown. We equip youth with digital literacy, creative music mastery, addiction recovery, and corporate internships.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-[#F2EBD9]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F6CE40] shrink-0 mt-1" />
                <span>Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F6CE40] shrink-0" />
                <a href="mailto:caywoodbrowndocs@gmail.com" className="hover:text-white transition-colors">
                  caywoodbrowndocs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F6CE40] shrink-0" />
                <a href="tel:+2348038817059" className="hover:text-white transition-colors">
                  (+234) 803 881 7059
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Facebook", href: "#", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { name: "X / Twitter", href: "#", icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
                { name: "Instagram", href: "#", icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> },
                { name: "LinkedIn", href: "#", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#C7ED9F] hover:bg-[#C7ED9F] hover:text-[#00521A] transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2: What We Do */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6CE40] border-b border-white/10 pb-2">
              What We Do
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F2EBD9]/85">
              {[
                { label: "Computer Appreciation", href: "/programs/computer-appreciation" },
                { label: "Music Equipment Training", href: "/programs/music-training" },
                { label: "Youth Rehabilitation & Recovery", href: "/programs/youth-rehabilitation" },
                { label: "Volunteerism Academy", href: "/programs/volunteerism-academy" },
                { label: "Youth Health Awareness", href: "/programs/youth-health-awareness" },
                { label: "Her Voice, Her Power (Girl Child)", href: "/programs/girl-child-advocacy" },
                { label: "Google Digital Skills", href: "/programs/google-training" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#C7ED9F] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-[#F47E28] transition-transform group-hover:translate-x-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6CE40] border-b border-white/10 pb-2">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F2EBD9]/85">
              {[
                { label: "Make a Donation", href: "/donate" },
                { label: "Become a Monthly Sponsor", href: "/donate#monthly" },
                { label: "Volunteer with Us", href: "/volunteer" },
                { label: "Partner With Us", href: "/partner" },
                { label: "Official Accreditation", href: "/about#accreditation" },
                { label: "Upcoming Events & Outreaches", href: "/events" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#C7ED9F] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-[#F47E28] transition-transform group-hover:translate-x-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links + Stamp */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6CE40] border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F2EBD9]/85">
              {[
                { label: "About CBF", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Founder Story", href: "/about#history" },
                { label: "Events & Outreaches", href: "/events" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQs", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#C7ED9F] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 text-[#F47E28] transition-transform group-hover:translate-x-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex justify-center lg:justify-start">
              <BotanicalGraphic
                variant="stamp"
                color="#F6CE40"
                className="w-28 h-28"
              />
            </div>
          </div>
        </div>

        {/* ─── 4. LEGAL BAR ─── */}
        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F2EBD9]/60">
          <p>
            © {new Date().getFullYear()} Caywood Brown Foundation. A registered charitable non-profit organization. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>

      {/* ─── BACK TO TOP ─── */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#00521A] text-white shadow-xl flex items-center justify-center hover:bg-[#003d13] hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

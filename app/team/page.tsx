"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, ArrowRight, Heart } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

const boardMembers = [
  {
    name: "Senator Dr. Ipalibo Harry Banigo",
    role: "Founder & Chairperson",
    bio: "Visionary public health leader and philanthropist who established the Caywood Brown Foundation in 2006 in memory of her late father, Caywood Brown. Dedicated to empowering youth across the Niger Delta.",
    image: "/images/about/senator-scaled.jpg",
    email: "caywoodbrowndocs@gmail.com",
  },
  {
    name: "Dr. Emeka Obi",
    role: "Executive Coordinator",
    bio: "Oversees daily operations and strategic partnerships across the Niger Delta region.",
    image: "",
    email: "emeka.obi@caywoodbrown.org",
  },
  {
    name: "Grace Nwosu",
    role: "Head of Digital Programs",
    bio: "Leads the Google Digital Skills training and computer lab operations.",
    image: "",
    email: "grace.nwosu@caywoodbrown.org",
  },
  {
    name: "Pastor James Okoro",
    role: "Community Health Lead",
    bio: "Coordinates vaccination campaigns, IMPA outreaches, and youth wellness programs.",
    image: "",
    email: "james.okoro@caywoodbrown.org",
  },
  {
    name: "Blessing Amaeshi",
    role: "Creative Arts Director",
    bio: "Directs music production training, drumming workshops, and studio mentorship.",
    image: "",
    email: "blessing.amaeshi@caywoodbrown.org",
  }
]

export default function TeamPage() {
  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION (Botanical Canopy) ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Leadership & Governance</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-tight">
            Guided by purpose, <span className="text-[#f6ce40]">driven by community.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85">
            Meet the founder of Caywood Brown Foundation and learn about her commitment to young people and families across the Niger Delta.
          </p>
        </div>
      </section>

      {/* ─── 2. LEADERSHIP TEAM GRID ─── */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="home-shell">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">Our Founder</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Meet our founder
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              Senator Dr. Ipalibo Harry Banigo founded Caywood Brown Foundation to expand opportunities for young people and support communities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-[#00521a]/15 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#00521a]/5 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 576px"
                      />
                    ) : (
                      <div className="bg-[#00521a] text-white rounded-full w-24 h-24 flex items-center justify-center text-2xl font-bold">
                        {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f47e28] block">
                      {member.role}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#173421] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#173421]/75 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-6 pt-4 border-t border-[#00521a]/10 flex items-center justify-between text-xs text-[#173421]/70">
                  <a
                    href={`mailto:${member.email}?subject=${encodeURIComponent(`Inquiry for ${member.name} - Caywood Brown Foundation`)}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#00521a] hover:text-[#f47e28] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Office</span>
                  </a>
                  <span className="text-[11px] uppercase tracking-wider text-[#173421]/40 font-medium">Rivers State, NG</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. PRE-FOOTER CLOSING PATHWAYS ─── */}
      <section className="home-section closing-section py-24 sm:py-32">
        <div className="home-shell text-center">
          <p className="home-label text-[#00521a]">Collaborate With Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173421] tracking-tight mt-3">
            Partner with Our Leadership
          </h2>
          <p className="home-copy text-[#173421]/90 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Interested in joining our advisory council, delivering a masterclass, or mentoring youth at the Caywood Brown Foundation?
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/donate"
              className="home-button-outline inline-flex items-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white"
            >
              <span>Support Our Mission</span>
              <Heart className="h-4 w-4 text-[#00521a]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail, Heart, Award, ShieldCheck } from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

const boardMembers = [
  {
    name: "Dr. Ipalibo Harry Banigo",
    role: "Founder & Chairperson",
    bio: "Visionary public health leader and philanthropist who established the Caywood Brown Foundation in 2005 in memory of her late father, Caywood Brown. Dedicated to empowering youth across the Niger Delta.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    email: "info@caywoodbrownfoundation.org",
  },
  {
    name: "Engr. Tamuno Briggs",
    role: "Director of Technology & Innovation",
    bio: "Senior software architect overseeing the Google Digital Skills strategic partnership and computer appreciation laboratories across Rivers State.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    email: "info@caywoodbrownfoundation.org",
  },
  {
    name: "Barr. (Mrs.) Ibimina Douglas",
    role: "Head of Legal & Girl Child Advocacy",
    bio: "Human rights legal practitioner spearheading CBF's legal defense, menstrual hygiene campaigns, and protection policies for young girls and women.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    email: "info@caywoodbrownfoundation.org",
  },
  {
    name: "Dr. Kenneth Warmate",
    role: "Head of Youth Rehabilitation & Recovery",
    bio: "Clinical psychologist specializing in substance addiction recovery, trauma counseling, and emotional resilience programs for vulnerable youth.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    email: "info@caywoodbrownfoundation.org",
  },
  {
    name: "Mrs. Nkechi Amadi",
    role: "Director of Programs & Volunteerism",
    bio: "Leading the Volunteerism Academy, community town halls, and career internship transitions that place 80% of our graduates into professional roles.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    email: "info@caywoodbrownfoundation.org",
  },
  {
    name: "Tonye George",
    role: "Head of Creative Arts & Studio Production",
    bio: "Music producer and sound engineer directing the music training labs, youth studio production masterclasses, and creative arts mentorship.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    email: "info@caywoodbrownfoundation.org",
  },
]

export default function TeamPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C7ED9F]/20 border border-[#C7ED9F]/30 text-[#C7ED9F] text-xs font-bold uppercase tracking-widest">
              Leadership & Governance
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Guided by purpose, <br />
              <span className="text-[#F6CE40]">driven by community</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed">
              Meet the directors, mentors, clinicians, and program leads guiding the Caywood Brown Foundation’s 20-year legacy of youth transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. LEADERSHIP TEAM GRID ─── */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
              Board & Management
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118]">
              Leadership Council
            </h2>
            <p className="text-[#142118]/80 text-base sm:text-lg">
              Our leadership unites experts in public health, software development, clinical psychology, creative industries, and human rights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#00521A]/15 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#00521A]/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F47E28] block">
                      {member.role}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#142118]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#142118]/75 leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#00521A]/10 flex items-center justify-between text-xs text-[#142118]/60">
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-[#00521A] flex items-center gap-1 font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#00521A] flex items-center gap-1 font-semibold transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. PRE-FOOTER CTA BAND ─── */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Partner with Our Leadership
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Interested in joining our advisory council or mentoring the next cohort of youth leaders?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Button
              variant="default"
              size="lg"
              className="bg-[#00521A] hover:bg-[#003d13] text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-wider shadow-md"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-[#F47E28] hover:bg-[#dc6d1c] text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-wider shadow-md"
              asChild
            >
              <Link href="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

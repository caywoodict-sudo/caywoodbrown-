"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Laptop,
  Music,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Heart,
  Headphones,
  BookOpen,
  Sparkles
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function EducationProgramPage() {
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
              Core Thematic Pillar
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Computer Appreciation & <br />
              <span className="text-[#F6CE40]">Creative Studio Arts</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed">
              Equipping young people in Port Harcourt with computer literacy, office software mastery, sound engineering, and creative media production to foster sustainable vocational self-reliance.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto shadow-md hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#tracks">Explore Facilities</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">Enroll in Next Cohort</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. TWO CORE TRACKS (Computer Lab vs Music Studio) ─── */}
      <section id="tracks" className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 space-y-20">
          
          {/* Feature 1: Computer Appreciation */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Track 01 • Digital Literacy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                Modern Computer <br />
                <span className="text-[#F47E28]">Appreciation Laboratories</span>
              </h2>
              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                For many youth in disadvantaged communities, lack of computer access is the first barrier to formal employment. Our high-spec workstation labs provide free daily access and structured modules.
              </p>
              <ul className="space-y-3 text-sm text-[#142118]/80">
                {[
                  "Operating systems & file system management",
                  "Microsoft 365, Google Workspace & productivity suites",
                  "Internet research ethics, cybersecurity & cloud drives",
                  "Professional typing proficiency & document drafting",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4BAE44] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button variant="faForest" asChild className="text-xs font-bold uppercase tracking-wider">
                  <Link href="/contact">Join Computer Lab Cohort</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Students practicing typing and software in computer lab"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Feature 2: Music & Creative Sound Arts */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=80"
                alt="Music studio recording equipment and mixer console"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Track 02 • Creative Sound Engineering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                Professional Music & <br />
                <span className="text-[#F6CE40]">Studio Production</span>
              </h2>
              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                Creative arts and music production offer vibrant economic avenues for passionate youth. Our studio facility in Port Harcourt offers hands-on instrument training, digital audio workstations (DAWs), live recording, and sound design.
              </p>
              <ul className="space-y-3 text-sm text-[#142118]/80">
                {[
                  "Keyboards, bass guitar, acoustic instruments & drum kits",
                  "Digital audio workstations (DAW), mixing & audio mastering",
                  "Studio acoustic engineering & microphone techniques",
                  "Music entrepreneurship, copyrights & streaming distribution",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4BAE44] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button variant="faFlame" asChild className="text-xs font-bold uppercase tracking-wider">
                  <Link href="/contact">Apply for Music Cohort</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 3. PRE-FOOTER CTA BAND ─── */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Support Practical Learning
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Donate to provide new computer monitors, software licenses, and music instruments for students in need.
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

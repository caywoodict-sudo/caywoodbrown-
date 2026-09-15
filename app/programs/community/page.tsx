"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  HandHeart,
  LifeBuoy,
  Sparkles
} from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"

export default function CommunityOutreachPage() {
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
              Restoration & Dignity
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              Youth Rehabilitation & <br />
              <span className="text-[#F6CE40]">Community Recovery</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed">
              Providing compassionate substance addiction recovery, clinical psychological support, family reconciliation, and social reintegration for vulnerable young people across Rivers State.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="faFlame"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto shadow-md hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">Refer Someone in Need</Link>
              </Button>
              <Button
                variant="faWhiteOutline"
                size="lg"
                className="text-xs font-bold uppercase tracking-wider px-8 py-5 h-auto hover:scale-105 transition-transform"
                asChild
              >
                <Link href="#initiatives">Our Recovery Framework</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. REHABILITATION FRAMEWORK ─── */}
      <section id="initiatives" className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                Compassion Without Stigma
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142118] leading-tight">
                Restoring wholeness, <br />
                <span className="text-[#F47E28]">rebuilding futures</span>
              </h2>

              <p className="text-[#142118]/85 text-base sm:text-lg leading-relaxed">
                Addiction and depression often stem from economic helplessness, trauma, and lack of guidance. At Caywood Brown Foundation, we treat youth not as delinquents, but as valuable individuals capable of complete redemption.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Confidential Clinical Counseling",
                    desc: "Licensed psychotherapists and trauma counselors provide 1-on-1 and group therapy sessions."
                  },
                  {
                    title: "Addiction Recovery Support Groups",
                    desc: "Peer-led 12-step recovery programs that build lasting accountability without judgment."
                  },
                  {
                    title: "Vocational Skill Re-engagement",
                    desc: "Recovering youth transition immediately into computer literacy, music production, or vocational crafts."
                  },
                  {
                    title: "Family Reconciliation & Mediation",
                    desc: "Reconnecting alienated youth with parents and guardians to rebuild secure domestic support systems."
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#00521A]/10 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#00521A] text-[#C7ED9F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#142118]">{item.title}</h4>
                      <p className="text-sm text-[#142118]/75 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                  alt="Young people supporting each other in a circle"
                  fill
                  className="object-cover"
                />
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
              Support Youth Rehabilitation
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Your contribution funds psychological counseling sessions, medical detox support, and living stipends for recovering youth.
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

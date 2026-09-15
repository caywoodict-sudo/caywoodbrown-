"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheck, Heart, ArrowRight, CheckCircle2, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TangibleTier {
  usd: number
  ngn: number
  title: string
  delivers: string
  impactArea: string
  recommended?: boolean
}

const tangibleTiers: TangibleTier[] = [
  {
    usd: 15,
    ngn: 15000,
    title: "Digital Starter Pack",
    delivers: "Supplies one student with computer lab access, learning manual, and digital certificate materials for an entire cohort.",
    impactArea: "Computer Appreciation",
  },
  {
    usd: 35,
    ngn: 35000,
    title: "Dignity & Retention Kit",
    delivers: "Provides comprehensive menstrual hygiene kits and leadership mentorship to 5 adolescent girls for an academic term.",
    impactArea: "Girl Child Advocacy",
  },
  {
    usd: 75,
    ngn: 75000,
    title: "Vocational Apprentice Seat",
    delivers: "Funds hands-on instrument & audio gear instruction plus professional stagecraft coaching for a talented youth.",
    impactArea: "Creative Arts",
    recommended: true,
  },
  {
    usd: 150,
    ngn: 150000,
    title: "Youth Recovery & Reintegration",
    delivers: "Covers a full month of intensive substance recovery counseling, trauma mentorship, and family mediation.",
    impactArea: "Rehabilitation",
  },
  {
    usd: 300,
    ngn: 300000,
    title: "Career Internship Stipend",
    delivers: "Underwrites internship logistics and career transition support for a graduate through the Volunteerism Academy.",
    impactArea: "Employment",
  },
]

export default function FinancialTransparency({ embedded = false }: { embedded?: boolean }) {
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")
  const [selectedTier, setSelectedTier] = useState<number>(75)

  return (
    <section
      id="transparency"
      className={`w-full ${
        embedded ? "py-8" : "py-16 md:py-24 bg-stone-900 text-white"
      }`}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Header & Accountability Statement */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Radical Transparency & Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Where Your Money Goes
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            We hold ourselves to the highest global standards of non-profit governance. Every dollar and naira entrusted to Caywood Brown Foundation is maximized to drive measurable grassroots transformation.
          </p>
        </div>

        {/* The Farm Africa Financial Split Visualization */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-stone-950/80 p-6 sm:p-10 rounded-3xl border border-stone-800 shadow-2xl mb-16">
          {/* Visual Percentage Breakdown Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Audited Allocation of Every $1 / ₦1,000 Donated:
            </h3>

            {/* 85% Programs Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-amber-400 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  Direct Youth Empowerment & Community Programs
                </span>
                <span className="font-mono font-bold text-lg text-white">85% (85¢ / ₦850)</span>
              </div>
              <div className="w-full h-3.5 bg-stone-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                />
              </div>
              <p className="text-xs text-stone-400">
                Direct funding for training materials, trainers, stipends, rehab support, and educational kits.
              </p>
            </div>

            {/* 10% Operations Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-sky-400 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sky-400 inline-block" />
                  Program Monitoring, Safety & Facilities
                </span>
                <span className="font-mono font-bold text-lg text-white">10% (10¢ / ₦100)</span>
              </div>
              <div className="w-full h-3.5 bg-stone-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "10%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-sky-500 rounded-full"
                />
              </div>
              <p className="text-xs text-stone-400">
                Maintains secure learning spaces, equipment maintenance, and rigorous impact auditing.
              </p>
            </div>

            {/* 5% Outreach Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-emerald-400 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  Outreach, Volunteer Mobilization & Future Sustainability
                </span>
                <span className="font-mono font-bold text-lg text-white">5% (5¢ / ₦50)</span>
              </div>
              <div className="w-full h-3.5 bg-stone-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "5%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </div>
              <p className="text-xs text-stone-400">
                Drives donor reporting, volunteer recruitment drives, and community outreach.
              </p>
            </div>
          </div>

          {/* Quick Pillar Badge Callout */}
          <div className="lg:col-span-5 bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-800 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Our Promise To Donors
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Zero Waste, High-Accountability Giving
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                We believe trust is earned through verifiable outcomes. We publish regular impact dispatches and invite partner reviews to ensure every contribution translates directly into altered life trajectories.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800 mt-6 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Audited Non-Profit Standard
              </span>
              <span>Registered 2005</span>
            </div>
          </div>
        </div>

        {/* Concrete Tangible Giving Anchors (Farm Africa Pattern) */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Tangible Impact: See What Your Gift Achieves
              </h3>
              <p className="text-sm text-stone-400 mt-1">
                Select an impact tier below or enter a custom contribution
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="inline-flex rounded-xl bg-stone-950 p-1 border border-stone-800">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  currency === "USD"
                    ? "bg-amber-500 text-stone-950 shadow"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("NGN")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  currency === "NGN"
                    ? "bg-amber-500 text-stone-950 shadow"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                NGN (₦)
              </button>
            </div>
          </div>

          {/* Interactive Tier Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tangibleTiers.map((tier) => {
              const isSelected = selectedTier === tier.usd
              const amountLabel =
                currency === "USD"
                  ? `$${tier.usd}`
                  : `₦${tier.ngn.toLocaleString()}`

              return (
                <div
                  key={tier.usd}
                  onClick={() => setSelectedTier(tier.usd)}
                  className={`relative cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-stone-800/90 border-amber-400 shadow-xl shadow-amber-500/10 scale-102"
                      : "bg-stone-950/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-stone-950">
                      Popular Gift
                    </span>
                  )}

                  <div>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                      {tier.impactArea}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {amountLabel}
                    </div>
                    <div className="text-sm font-bold text-stone-200 mt-2">
                      {tier.title}
                    </div>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                      {tier.delivers}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-stone-300">
                      {isSelected ? "Selected" : "Choose this gift"}
                    </span>
                    <Heart
                      className={`w-4 h-4 ${
                        isSelected ? "text-amber-400 fill-amber-400" : "text-stone-600"
                      }`}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Direct Link to Donate with Pre-Selected Tier (Farm Africa Pill Style) */}
          <div className="mt-10 text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="faFlame"
              className="text-base font-bold uppercase tracking-wider px-10 py-6 h-auto transition-transform hover:scale-105"
              asChild
            >
              <Link href={`/donate?amount=${selectedTier}&currency=${currency}`}>
                <span>Donate {currency === "USD" ? `$${selectedTier}` : `₦${(selectedTier * 1000).toLocaleString()}`} Now</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="faWhiteOutline"
              className="text-base font-bold uppercase tracking-wider px-8 py-6 h-auto transition-transform hover:scale-105"
              asChild
            >
              <Link href="/donate#monthly-giving">
                Become a Monthly Sustainer
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

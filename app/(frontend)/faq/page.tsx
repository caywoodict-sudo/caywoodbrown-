"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search, MessageSquare, Heart, ArrowRight, HelpCircle, Mail, Phone } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

const faqCategories = [
  {
    id: "general",
    name: "About the Foundation",
    questions: [
      {
        id: "what-is",
        question: "What is the Caywood Brown Foundation?",
        answer: "The Caywood Brown Foundation is an accredited non-profit organization (CAC RC: 0022482) established in 2006 by Senator Dr. Ipalibo Harry Banigo in memory of her late father, Caywood Brown. We are dedicated to youth empowerment, technology education, creative arts training, and community rehabilitation across the Niger Delta."
      },
      {
        id: "where-located",
        question: "Where is the foundation located and which areas do you serve?",
        answer: "Our main headquarters, computer appreciation labs, and creative sound studios are located at Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt, Rivers State. Our outreach programs and cohort beneficiaries span communities throughout Rivers State and the broader Niger Delta region."
      },
      {
        id: "legal-status",
        question: "What is the foundation's official legal and registration status?",
        answer: "The Caywood Brown Foundation is officially registered and incorporated under the Companies and Allied Matters Act by the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria with Registration No. RC: 0022482."
      },
      {
        id: "transparency",
        question: "How do you ensure transparency and governance accountability?",
        answer: "Our operations are overseen by a multidisciplinary Leadership Council comprising medical clinicians, legal professionals, and software engineers. We publish documented cohort outcomes and annual program reviews, ensuring that 100% of designated philanthropic funds directly benefit students, labs, and recovery outreach."
      }
    ]
  },
  {
    id: "programs",
    name: "Programs & Youth Training",
    questions: [
      {
        id: "tech-training",
        question: "What digital skills and technology programs do you provide?",
        answer: "Through our strategic collaboration with Google Digital Skills for Africa, we deliver certified courses in digital marketing, web fundamentals, cloud tools, and workplace productivity. We also operate year-round hands-on computer appreciation laboratories for beginners."
      },
      {
        id: "creative-labs",
        question: "What creative arts and sound production facilities are available?",
        answer: "Our Port Harcourt creative sound labs teach instrumental music, digital audio workstations (DAWs), audio engineering, and live studio production, providing youth with vocational pathways into Nigeria's flourishing creative industry."
      },
      {
        id: "rehabilitation",
        question: "How does the foundation support youth struggling with substance recovery?",
        answer: "Our rehabilitation initiative is led by licensed clinical psychologists offering confidential trauma counseling, group peer support, and family reunification for young individuals recovering from substance addiction and emotional distress."
      },
      {
        id: "internship-rate",
        question: "How does the Volunteerism Academy achieve an 80% internship placement rate?",
        answer: "Students participate in civic service, professional workplace readiness, and resume masterclasses before being matched with corporate and creative partner organizations across Port Harcourt for structured 3- to 6-month internships."
      }
    ]
  },
  {
    id: "giving",
    name: "Donations & Financial Support",
    questions: [
      {
        id: "how-to-give",
        question: "How can individuals or corporate donors contribute?",
        answer: "Donations can be made by direct bank transfer to our verified non-profit account: Union Bank, Account Name: CAYWOOD BROWN FOUNDATION, Account Number: 0056692414. For receipt confirmation or wire inquiries, please email caywoodbrowndocs@gmail.com or call (+234) 803 881 7059."
      },
      {
        id: "where-money-goes",
        question: "How are donated funds utilized?",
        answer: "Donations directly purchase student computing workstations, lab software licenses, recording studio equipment, student transport stipends, and medical hygiene supplies for community town hall outreaches."
      },
      {
        id: "equipment-donations",
        question: "Do you accept in-kind donations of computers or studio gear?",
        answer: "Yes! We welcome desktop computers, laptops, monitors, musical instruments, sound monitors, and audio interfaces in working condition for our community laboratories."
      }
    ]
  },
  {
    id: "volunteering",
    name: "Mentorship & Volunteerism",
    questions: [
      {
        id: "how-volunteer",
        question: "How can I volunteer or mentor students at the foundation?",
        answer: "We welcome software engineers, musicians, producers, healthcare workers, and career coaches. You can apply via our Volunteerism page or directly email our team at caywoodbrowndocs@gmail.com with your CV and area of interest."
      },
      {
        id: "remote-mentoring",
        question: "Can I mentor students remotely if I live outside Port Harcourt?",
        answer: "Yes, our Google Digital Skills cohorts include virtual guest masterclasses and remote code review sessions where diaspora and international professionals mentor Nigerian youth."
      },
      {
        id: "volunteer-locations",
        question: "Where do volunteer programs take place?",
        answer: "Most on-site mentoring happens at our community labs and training centers located at Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt. We also organize field outreaches across Rivers State."
      }
    ]
  },
  {
    id: "governance",
    name: "Accountability & Structure",
    questions: [
      {
        id: "tax-status",
        question: "Is the Caywood Brown Foundation an officially registered non-profit?",
        answer: "Yes. The Caywood Brown Foundation is a fully incorporated non-governmental organization with the Corporate Affairs Commission of Nigeria (CAC Registration: 0022482), established in 2006."
      },
      {
        id: "governance-reports",
        question: "Can donors inspect annual cohort impact reports?",
        answer: "Absolutely. We maintain strict financial governance and produce documented cohort impact audits for our institutional allies, corporate sponsors, and philanthropic partners."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "mission-cbf": true,
    "how-to-give": true,
  })

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // Filter questions based on search query
  const filteredCategories = faqCategories.map(cat => {
    const filteredQuestions = cat.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return { ...cat, questions: filteredQuestions }
  }).filter(cat => cat.questions.length > 0)

  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Answers & Clarity</p>
          <h1 className="home-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Frequently Asked Questions
          </h1>
          <p className="home-copy text-[#f7f2e7]/80 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
            Everything you need to know about our youth digital training, music labs, addiction rehabilitation, volunteer opportunities, and governance.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#173421]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. computer lab, donation, volunteer)..."
              className="w-full bg-white text-[#173421] placeholder:text-[#173421]/50 pl-12 pr-4 py-3.5 rounded-2xl border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-[#f6ce40] text-sm sm:text-base"
            />
          </div>
        </div>
      </section>

      {/* ─── 2. FAQ ACCORDION SECTIONS ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0]">
        <div className="home-shell max-w-4xl mx-auto">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-[#173421]/70">No questions found matching &ldquo;{searchQuery}&rdquo;</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm font-semibold text-[#00521a] underline"
              >
                Clear search filter
              </button>
            </div>
          ) : (
            <div className="space-y-14">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-6">
                  <div className="border-b border-[#00521a]/15 pb-3">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#173421]">
                      {category.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq) => {
                      const isOpen = !!openItems[faq.id]
                      return (
                        <div
                          key={faq.id}
                          className="rounded-2xl border border-[#00521a]/10 bg-white transition-shadow hover:shadow-sm overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00521a]"
                            aria-expanded={isOpen}
                          >
                            <span className="font-serif font-bold text-base sm:text-lg text-[#173421]">
                              {faq.question}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-[#faf7f0] flex items-center justify-center shrink-0 text-[#00521a]">
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#173421]/80 leading-relaxed border-t border-[#00521a]/5">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── 3. STILL HAVE QUESTIONS BANNER ─── */}
      <section className="py-16 bg-white border-y border-[#00521a]/10">
        <div className="home-shell max-w-4xl text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173421]">
            Can&rsquo;t find what you&rsquo;re looking for?
          </h3>
          <p className="text-base text-[#173421]/75 max-w-xl mx-auto">
            Our team is always available to assist with questions about cohort enrollment, institutional partnerships, or donations.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00521a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#173421] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Support</span>
            </Link>
            <a
              href="mailto:caywoodbrowndocs@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#00521a]/30 text-[#00521a] text-xs font-bold uppercase tracking-wider hover:bg-[#00521a] hover:text-white transition-colors"
            >
              <span>Email Our Directors</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 4. CLOSING PATHWAYS (Fixed Contrast & Generous Padding) ─── */}
      <section className="home-section closing-section py-24 sm:py-32">
        <div className="home-shell text-center">
          <p className="home-label text-[#00521a]">Take the Next Step</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173421] tracking-tight mt-3">
            Support Our Mission in Rivers State
          </h2>
          <p className="home-copy text-[#173421]/90 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Whether through a tax-efficient contribution or volunteering as a mentor, your support transforms youth potential into leadership.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Make a Donation</span>
              <Heart className="h-4 w-4 text-[#f6ce40]" />
            </Link>
            <Link
              href="/about"
              className="home-button-outline inline-flex items-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white"
            >
              <span>About the Founder</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

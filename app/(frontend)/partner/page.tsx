"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Globe, Users, CheckCircle2, Mail, Phone, MapPin, Heart, Send, Award, Laptop } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION (Botanical Canopy) ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Institutional Alliances</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-tight">
            Partner with us for <br />
            <span className="text-[#f6ce40]">scalable youth impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85 font-normal">
            Align your organization with our 20-year grassroots presence in Rivers State. Together, we deliver industry-certified technology education, sound engineering labs, and youth recovery pathways across the Niger Delta.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#inquiry"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Explore Alliances</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="home-button-outline inline-flex items-center gap-2"
            >
              <span>Our 20-Year Track Record</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. WHY PARTNER WITH US ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">Strategic Value</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Why Partner With Caywood Brown Foundation?
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              We provide institutional credibility, grassroots community reach, and transparent program governance rooted in 20 years of continuous service in Rivers State.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/10 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#00521a]/10 text-[#00521a] flex items-center justify-center">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#173421]">
                Grassroots Legitimacy
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Deep community trust across 48 Niger Delta localities, with certified training facilities and active neighborhood town halls in Port Harcourt.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/10 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#f47e28]/15 text-[#f47e28] flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#173421]">
                Verified Outcomes
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Over 15,000 individuals trained, 80% professional internship placement rate, and strategic alignment with global curricula like Google Digital Skills.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/10 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#f6ce40]/30 text-[#996c00] flex items-center justify-center">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#173421]">
                ESG & CSR Transparency
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Rigorous accountability, documented cohort impact audits, and tangible community milestones that elevate corporate social responsibility portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ─── 3. STRATEGIC ALLIANCES ─── */}
      <section className="py-20 lg:py-28 bg-[#f2ebd9]/50 relative overflow-hidden">
        <div className="home-shell">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">Collaborative Ecosystem</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Our Strategic Alliances
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              We collaborate with global corporations, regional healthcare organizations, and grassroots networks to expand certified opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                Technology Education
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#173421]">
                Google Digital Skills for Africa
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Strategic curriculum collaboration delivering certified digital marketing, cloud computing, and workplace IT training to thousands of Niger Delta youth.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f47e28] block">
                Adolescent Health
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#173421]">
                MedWHOLE Outreach Initiative
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Community medical missions, menstrual hygiene kit distribution, and adolescent preventive healthcare outreaches in remote riverine communities.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#996c00] block">
                Creative Industry & Career
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#173421]">
                Port Harcourt Studio Network
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Alliances with commercial sound recording studios, media agencies, and local tech hubs providing 80% internship placement for Academy graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PARTNERSHIP PATHWAYS ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="home-label">How to Engage</p>
            <h2 className="home-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173421]">
              Partnership Pathways
            </h2>
            <p className="home-copy text-lg text-[#173421]/80">
              Customized engagement models tailored to corporate social responsibility, philanthropic foundations, and academic institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white p-8 border border-[#00521a]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00521a]/10 text-[#00521a] flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#173421]">
                Lab Hardware & Equipment
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Donate computers, audio recording gear, and network infrastructure to upgrade our Port Harcourt computer appreciation and music studios.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-[#00521a]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f47e28]/15 text-[#f47e28] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#173421]">
                Internship Placement Host
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Accept pre-screened graduates of our Volunteerism Academy into your organization for 3- to 6-month paid professional internships.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-[#00521a]/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f6ce40]/30 text-[#996c00] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#173421]">
                Recovery & Counseling Sponsor
              </h3>
              <p className="text-sm text-[#173421]/75 leading-relaxed">
                Underwrite clinical psychologists and social workers delivering addiction recovery and trauma counseling to at-risk adolescents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. PARTNER INQUIRY FORM ─── */}
      <section id="inquiry" className="py-20 lg:py-28 bg-[#f2ebd9]/40 relative">
        <div className="home-shell">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <p className="home-label mb-2">Institutional Proposal</p>
                    <h3 className="home-heading text-2xl sm:text-3xl font-bold text-[#173421]">
                      Initiate a Partnership
                    </h3>
                    <p className="text-sm text-[#173421]/75 mt-1">
                      Share your organization’s objectives and our leadership council will get in touch within 48 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-6 rounded-2xl bg-[#c7ed9f]/30 border border-[#00521a]/20 flex items-start gap-4 text-[#00521a]">
                      <CheckCircle2 className="w-7 h-7 text-[#00521a] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-lg">Partnership Proposal Received</h4>
                        <p className="text-sm text-[#173421]/85 mt-1">
                          Thank you for reaching out. Our programs director will review your proposal and respond promptly.
                        </p>
                        <button
                          type="button"
                          className="mt-4 home-button text-xs py-2 px-5 inline-block"
                          onClick={() => setSubmitted(false)}
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Organization Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Acme Technologies Ltd"
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Contact Person *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full name & title"
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Official Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="partnerships@company.com"
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Partnership Focus *
                          </label>
                          <select
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          >
                            <option value="tech-lab">Tech & Computer Lab Sponsorship</option>
                            <option value="internship-host">Internship Placement Host</option>
                            <option value="google-cohort">Digital Skills Cohort Sponsorship</option>
                            <option value="health-outreach">Health & Hygiene Outreach</option>
                            <option value="recovery">Substance Recovery Counseling</option>
                            <option value="other">Other Strategic Alignment</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                          Partnership Objectives *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Briefly describe your objectives or resources you would like to collaborate on..."
                          className="w-full p-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full home-button inline-flex items-center justify-center gap-2 text-center"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Partnership Inquiry</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <p className="home-label">Partnership Secretariat</p>
                <h3 className="font-serif font-bold text-2xl text-[#173421]">
                  Direct Office Contact
                </h3>
                <p className="text-sm text-[#173421]/75 leading-relaxed">
                  For formal letters of intent, memorandum of understanding (MoU) requests, or site visit scheduling:
                </p>

                <div className="space-y-3 pt-2 text-sm text-[#173421]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00521a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#173421]">Port Harcourt (HQ &amp; Labs):</strong><br />
                      Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt, Rivers State
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00521a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#173421]">Abuja (Liaison Office):</strong><br />
                      888 Olu Awotesu Street, Jabi, Abuja, FCT
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#f47e28] shrink-0" />
                    <a href="mailto:caywoodbrowndocs@gmail.com" className="hover:text-[#00521a] font-semibold underline">
                      caywoodbrowndocs@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#996c00] shrink-0" />
                    <a href="tel:+2348038817059" className="hover:text-[#00521a] font-semibold">
                      (+234) 803 881 7059
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#12291b] text-[#faf7f0] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c7ed9f] block">
                  Registration & Governance
                </span>
                <h4 className="font-serif text-xl font-bold text-white">
                  Accredited Non-Profit Entity
                </h4>
                <p className="text-sm text-[#faf7f0]/80 leading-relaxed">
                  The Caywood Brown Foundation is officially registered with the Corporate Affairs Commission (CAC) of Nigeria under Registration No. <strong>RC: 0022482</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PRE-FOOTER CLOSING PATHWAYS ─── */}
      <section className="home-section closing-section py-24 sm:py-32">
        <div className="home-shell text-center">
          <p className="home-label text-[#00521a]">Institutional Giving</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173421] tracking-tight mt-3">
            Power the Next Generation of Innovators
          </h2>
          <p className="home-copy text-[#173421]/90 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Co-invest in community labs, sound production facilities, and youth rehabilitation counseling across Rivers State.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="home-button inline-flex items-center gap-2"
            >
              <span>Make a Donation</span>
              <Heart className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="/contact"
              className="home-button-outline inline-flex items-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white"
            >
              <span>Speak to Our Directors</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

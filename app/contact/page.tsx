"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Clock, CheckCircle2, Heart, Send, ArrowRight } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({
      submitted: true,
      message: "Thank you for reaching out! A member of our team will respond within 24–48 hours.",
    })
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" })
  }

  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION (Botanical Canopy) ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Get in Touch</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-tight">
            We’d love to <br />
            <span className="text-[#f6ce40]">hear from you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85 font-normal">
            Whether you are inquiring about our Google Digital Skills cohorts, looking to volunteer or mentor, exploring a strategic partnership, or supporting youth across the Niger Delta, our doors in Port Harcourt are open.
          </p>
        </div>
      </section>

      {/* ─── 2. CONTACT DETAILS & INQUIRY FORM ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <p className="home-label">Our Headquarters</p>
                <h2 className="home-heading text-3xl sm:text-4xl font-bold text-[#173421]">
                  Reach Our Team
                </h2>
                <p className="home-copy text-base text-[#173421]/80 leading-relaxed">
                  The Caywood Brown Foundation operates community labs, digital hubs, and youth rehabilitation counseling centers in Port Harcourt, Rivers State.
                </p>
              </div>

              <div className="space-y-4">
                {/* Location: Port Harcourt */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521a]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00521a]/10 text-[#00521a] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#173421]">Port Harcourt Headquarters & Labs</h4>
                    <p className="text-sm text-[#173421]/75 mt-1 leading-relaxed">
                      Close B, 1 IPIC Estate, off Akpajo Elelenwo,<br />
                      Port Harcourt, Rivers State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Location: Abuja Liaison */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521a]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00521a]/10 text-[#00521a] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#173421]">Abuja National Office</h4>
                    <p className="text-sm text-[#173421]/75 mt-1 leading-relaxed">
                      883 Olu Awotesu Street, Jabi,<br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521a]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f47e28]/15 text-[#f47e28] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-lg text-[#173421]">Email Communications</h4>
                    <p className="text-sm">
                      <a href="mailto:caywoodbrowndocs@gmail.com" className="hover:text-[#00521a] font-semibold underline text-[#173421]">
                        caywoodbrowndocs@gmail.com
                      </a>
                    </p>
                    <p className="text-sm">
                      <a href="mailto:caywoodbrownfoundation@gmail.com" className="hover:text-[#00521a] font-medium text-[#173421]/80">
                        caywoodbrownfoundation@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-[#173421]/60 pt-0.5">Administration, cohorts & public relations</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521a]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f6ce40]/30 text-[#996c00] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#173421]">Direct Helpline</h4>
                    <p className="text-sm font-semibold text-[#173421] mt-1">
                      <a href="tel:+2348038817059" className="hover:text-[#00521a] transition-colors">
                        (+234) 803 881 7059
                      </a>
                    </p>
                    <p className="text-xs text-[#173421]/60 mt-0.5">Mon–Fri: 8:00am – 5:00pm WAT</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521a]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00521a]/10 text-[#00521a] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#173421]">Training Lab Hours</h4>
                    <p className="text-sm text-[#173421]/75 mt-1 leading-relaxed">
                      Monday to Saturday: 9:00am – 6:00pm<br />
                      Sunday: Closed (Community Outreach Sessions)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <p className="home-label mb-2">Direct Message</p>
                    <h3 className="home-heading text-2xl sm:text-3xl font-bold text-[#173421]">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-[#173421]/75 mt-1">
                      Please fill out the form below. We will direct your request to the appropriate team.
                    </p>
                  </div>

                  {formStatus.submitted ? (
                    <div className="p-6 rounded-2xl bg-[#c7ed9f]/30 border border-[#00521a]/20 flex items-start gap-4 text-[#00521a]">
                      <CheckCircle2 className="w-7 h-7 text-[#00521a] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-lg">Message Sent Successfully!</h4>
                        <p className="text-sm text-[#173421]/85 mt-1">{formStatus.message}</p>
                        <button
                          type="button"
                          className="mt-4 home-button text-xs py-2 px-5 inline-block"
                          onClick={() => setFormStatus({ submitted: false, message: "" })}
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Chinedu Okafor"
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="chinedu@example.com"
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 800 000 0000"
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                            Topic / Area of Interest *
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Google Digital Skills">Google Digital Skills Training</option>
                            <option value="Computer Appreciation">Computer Appreciation & Music Labs</option>
                            <option value="Youth Rehabilitation">Youth Rehabilitation Counseling</option>
                            <option value="Volunteerism Academy">Volunteerism Academy & Internships</option>
                            <option value="Donations & Sponsorships">Donations & Sponsorships</option>
                            <option value="Media & Press">Media & Press</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#173421]/80 block">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="How can we assist you?"
                          className="w-full p-4 rounded-xl bg-[#faf7f0] border border-[#00521a]/20 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00521a]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full home-button inline-flex items-center justify-center gap-2 text-center"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>

                      <p className="text-[11px] text-center text-[#173421]/60 mt-2">
                        We respect your privacy. Inquiries are handled in accordance with our community protection policy.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. PRE-FOOTER CLOSING PATHWAYS ─── */}
      <section className="home-section closing-section py-24 sm:py-32">
        <div className="home-shell text-center">
          <p className="home-label text-[#00521a]">Collaborate With Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173421] tracking-tight mt-3">
            Support Youth in the Niger Delta
          </h2>
          <p className="home-copy text-[#173421]/90 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Every contribution directly powers student lab equipment, certified mentors, and recovery counseling for youth in Rivers State.
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
              href="/about"
              className="home-button-outline inline-flex items-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Clock, CheckCircle2, Heart, Send } from "lucide-react"
import BotanicalGraphic from "@/components/botanical-graphic"
import { motion } from "framer-motion"

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
    <div className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#142118]">
      {/* ─── 1. HERO SECTION (Farm Africa Forest Green #00521A with Foliage SVGs) ─── */}
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
              Get in Touch
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2EBD9] leading-[1.08]">
              We'd love to <br />
              <span className="text-[#F6CE40]">hear from you</span>
            </h1>

            <p className="text-[#F2EBD9]/85 text-lg sm:text-xl leading-relaxed">
              Whether you're inquiring about our Google Digital Skills cohorts, interested in mentoring or volunteering, exploring a corporate partnership, or looking to support our mission — our doors are always open.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. CONTACT DETAILS & INQUIRY FORM ─── */}
      <section className="w-full py-20 lg:py-28 bg-[#FAF7F0] relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#00521A]/10 text-[#00521A] text-xs font-bold uppercase tracking-widest">
                  Our Headquarters
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142118]">
                  Reach Our Team
                </h2>
                <p className="text-[#142118]/80 text-base leading-relaxed">
                  The Caywood Brown Foundation operates community labs, digital hubs, and youth rehabilitation counseling centers in Port Harcourt, Rivers State.
                </p>
              </div>

              <div className="space-y-4">
                {/* Location */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521A]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00521A]/10 text-[#00521A] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Main Office & Labs</h4>
                    <p className="text-sm text-[#142118]/75 mt-1">
                      Close B, 1 IPIC Estate, off Akpajo Elelenwo,<br />
                      Port Harcourt, Rivers State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521A]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F47E28]/15 text-[#F47E28] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Email Communications</h4>
                    <p className="text-sm text-[#142118]/75 mt-1">
                      <a href="mailto:caywoodbrowndocs@gmail.com" className="hover:text-[#00521A] font-semibold underline">
                        caywoodbrowndocs@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-[#142118]/60 mt-0.5">General inquiries, cohorts & partnerships</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521A]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6CE40]/30 text-[#B88E00] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Direct Helpline</h4>
                    <p className="text-sm font-semibold text-[#142118] mt-1">
                      <a href="tel:+2348038817059" className="hover:text-[#00521A] transition-colors">
                        (+234) 803 881 7059
                      </a>
                    </p>
                    <p className="text-xs text-[#142118]/60 mt-0.5">Mon–Fri: 8:00am – 5:00pm WAT</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-6 rounded-3xl bg-white border border-[#00521A]/10 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4CB9D1]/20 text-[#0284A6] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#142118]">Training Lab Hours</h4>
                    <p className="text-sm text-[#142118]/75 mt-1">
                      Monday to Saturday: 9:00am – 6:00pm<br />
                      Sunday: Closed (Community Outreach Sessions)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Farm Africa Style Message Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#F2EBD9] border border-[#00521A]/15 shadow-xl relative overflow-hidden">
                <BotanicalGraphic
                  variant="sprouts"
                  color="#00521A"
                  opacity={0.05}
                  className="bottom-0 right-0 w-80 h-80"
                />

                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142118]">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-[#142118]/75 mt-1">
                      Please fill out the form below. We'll direct your request to the appropriate department.
                    </p>
                  </div>

                  {formStatus.submitted ? (
                    <div className="p-6 rounded-2xl bg-[#C7ED9F]/60 border border-[#00521A]/20 flex items-start gap-4 text-[#00521A]">
                      <CheckCircle2 className="w-7 h-7 text-[#00521A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-lg">Message Sent Successfully!</h4>
                        <p className="text-sm text-[#00521A]/85 mt-1">{formStatus.message}</p>
                        <Button
                          variant="faForest"
                          size="sm"
                          className="mt-4 text-xs font-bold uppercase tracking-wider"
                          onClick={() => setFormStatus({ submitted: false, message: "" })}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#142118]/80 block">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Chinedu Okafor"
                            className="w-full h-13 px-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#142118]/80 block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="chinedu@example.com"
                            className="w-full h-13 px-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#142118]/80 block">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 800 000 0000"
                            className="w-full h-13 px-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#142118]/80 block">
                            Topic / Area of Interest *
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full h-13 px-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
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
                        <label className="text-xs font-bold uppercase tracking-wider text-[#142118]/80 block">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="How can we assist you?"
                          className="w-full p-4 rounded-xl bg-white border border-[#00521A]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00521A]"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="faFlame"
                        size="lg"
                        className="w-full py-6 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </Button>

                      <p className="text-[11px] text-center text-[#142118]/60 mt-2">
                        We respect your privacy. Your information is never sold or shared with third parties.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. PRE-FOOTER CTA SUPPORT BAND (Farm Africa Mint Band) ─── */}
      <div className="relative w-full bg-[#C7ED9F] text-[#142118] py-16 px-4 sm:px-8 border-t border-[#00521A]/15 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#00521A]">
              Support Caywood Brown Foundation
            </h3>
            <p className="text-sm sm:text-base text-[#142118]/80 max-w-lg">
              Help make real change in the lives of vulnerable youth and communities across the Niger Delta.
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

"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Heart,
  Users,
  CheckCircle2,
  Sparkles,
  Share2,
  ExternalLink,
  ChevronRight,
  X,
  ChevronLeft,
  FileText,
  Award,
  ShieldCheck,
  Building2,
  Scale
} from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"
import photosData from "@/lib/ssb-event-photos.json"

interface PhotoItem {
  name: string
  localPath: string
  cloudinaryUrl: string
  caption: string
  tag: string
  isCover?: boolean
  isVIP?: boolean
}

const photos: PhotoItem[] = photosData

const filterTags = [
  "All Photos",
  "Keynote",
  "Leadership",
  "Plenary",
  "Deliberation",
  "Dialogue",
]

export default function SSBEventRecapPage() {
  const [activeFilter, setActiveFilter] = useState("All Photos")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredPhotos = activeFilter === "All Photos"
    ? photos
    : photos.filter((p) => p.tag === activeFilter || (activeFilter === "Leadership" && p.isVIP))

  const currentLightboxPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1))
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0))
    }
  }

  return (
    <div className="home-page min-h-screen bg-[#faf7f0]">
      {/* ─── 1. HERO CANOPY ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-20 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-28">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c7ed9f] hover:text-[#f6ce40] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Outreaches &amp; Events</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f6ce40] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Event Recap · September 2026</span>
          </div>

          <h1 className="font-serif text-[clamp(2.3rem,4.5vw,4.4rem)] font-medium leading-[1.12] text-[#faf7f0] max-w-4xl">
            EVENT RECAP | SSB TAX BREAKFAST TECHNICAL SESSION <span className="inline-block">🇳🇬</span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#f6ce40] font-semibold max-w-3xl leading-relaxed">
            Co-Hosted by Caywood Brown Foundation (CBF) &amp; Corporate Accountability and Public Participation Africa (CAPPA)
          </p>

          {/* Metadata badges */}
          <div className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#faf7f0]/85 border-t border-white/15 pt-6">
            <span className="flex items-center gap-2 text-[#c7ed9f] font-semibold">
              <Calendar className="w-4 h-4 text-[#f6ce40]" />
              <span>September 2026</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f6ce40]" />
              <span>AATC Onomo Allure Hotels, Abuja</span>
            </span>
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#f6ce40]" />
              <span>SB.713 — Customs &amp; Excise Tariff Act Amendment</span>
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. EXECUTIVE RECAP & MAIN FEATURE ─── */}
      <section className="py-16 sm:py-20">
        <div className="home-shell max-w-5xl mx-auto">
          {/* VIP Seated Feature Photo */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-[#00521a]/15 bg-[#12291b] mb-12">
            <Image
              src="https://res.cloudinary.com/oudx4ztm/image/upload/v1790167110/caywood-brown/events/ssb-tax-breakfast/ssb-vip-dignitaries-seated.jpg"
              alt="VIP Dignitaries including Senator Banigo, CAPPA leadership, and National Assembly stakeholders"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f6ce40] block mb-1">
                Distinguished Presiding Dignitaries
              </span>
              <p className="text-sm sm:text-base text-[#faf7f0]/95 max-w-3xl">
                Senator Dr. Ipalibo Harry Banigo (Chairman, Senate Committee on Health &amp; Founder, CBF), alongside CAPPA leadership, 10th National Assembly representatives, and civil society conveners at Onomo Allure Hotel, Abuja.
              </p>
            </div>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Narrative Body */}
            <div className="lg:col-span-8 space-y-6 text-[#173421] text-base sm:text-lg leading-relaxed">
              <div className="p-6 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block">
                  Official Joint Communiqué
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#00521a] leading-snug font-medium">
                  The Caywood Brown Foundation (CBF) and Corporate Accountability and Public Participation Africa (CAPPA) co-hosted a Breakfast Technical Session on the finalisation of the Sugar-Sweetened Beverages (SSB) Legislation.
                </p>
              </div>

              <p className="text-[#173421]/90">
                The session brought together key stakeholders to deliberate on the legislative pathway, strengthen consensus, and advance a public-health approach to SSB taxation that can contribute to sustainable domestic health financing and the prevention of non-communicable diseases.
              </p>

              <div className="p-6 rounded-2xl bg-[#c7ed9f]/15 border border-[#00521a]/20 space-y-3">
                <div className="flex items-center gap-2 text-[#00521a] font-bold text-sm uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#df6827]" />
                  <span>Commendation of Legislative Leadership</span>
                </div>
                <p className="text-sm sm:text-base text-[#173421] italic font-medium leading-relaxed">
                  &ldquo;We commend the sponsor of SB.713 — Customs, Excise Tariff, etc. (Consolidation) Act (Amendment) Bill — and the 10th National Assembly for their leadership and commitment to advancing stronger health financing and public-health legislation.&rdquo;
                </p>
              </div>

              <p className="text-[#173421]/90">
                As co-organisers, CBF and CAPPA remain committed to promoting evidence-based policies, meaningful stakeholder engagement, and stronger accountability in public health governance.
              </p>

              <p className="text-[#173421]/90 font-medium">
                Together, we can advance policies that protect health, strengthen our health system, and build healthier communities across Nigeria.
              </p>

              {/* Bold Foundation Callout */}
              <div className="p-6 rounded-2xl bg-[#00521a] text-white space-y-2 shadow-md">
                <p className="font-serif text-2xl font-bold text-[#f6ce40]">
                  Stronger policies. Better health. A healthier Nigeria.
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c7ed9f]">
                  Caywood Brown Foundation · Corporate Accountability and Public Participation Africa
                </p>
              </div>
            </div>

            {/* Sidebar Key Points */}
            <div className="lg:col-span-4 space-y-6">
              {/* Senator Banigo Keynote Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#12291b]">
                  <Image
                    src="https://res.cloudinary.com/oudx4ztm/image/upload/v1790167109/caywood-brown/events/ssb-tax-breakfast/ssb-banigo-keynote-podium.jpg"
                    alt="Senator Dr. Ipalibo Harry Banigo keynote address"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#00521a] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Keynote Address
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173421]">
                    Senator Dr. Ipalibo Harry Banigo
                  </h3>
                  <p className="text-xs text-[#00521a] font-semibold mt-0.5">
                    Chairman, Senate Committee on Health &amp; Founder, CBF
                  </p>
                  <p className="text-xs text-[#173421]/75 mt-3 leading-relaxed">
                    Advocating for fiscal health measures that channel revenue directly into Nigeria&apos;s primary healthcare systems and curb non-communicable diseases.
                  </p>
                </div>
              </div>

              {/* Core Pillars Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00521a]">
                  Technical Session Pillars
                </h4>
                <div className="space-y-3">
                  {[
                    "Domestic Health Financing Expansion",
                    "Prevention of NCDs (Diabetes, Hypertension)",
                    "Finalisation of Senate Bill SB.713",
                    "Multi-Stakeholder Accountability Coalition",
                    "Protection of Vulnerable Demographics",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#173421]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#00521a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. INTERACTIVE PHOTO GALLERY (43 PHOTOS) ─── */}
      <section className="py-16 bg-[#f3ede0]/70 border-t border-[#00521a]/10">
        <div className="home-shell max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521a] block mb-2">
              Photo Documentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173421] font-medium">
              Inside the Breakfast Technical Session
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#173421]/75">
              Browse all 43 high-resolution event photographs capturing keynote addresses, legislative reviews, and stakeholder deliberations at Onomo Allure Hotels, Abuja.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                    activeFilter === tag
                      ? "bg-[#00521a] text-white shadow-md scale-105"
                      : "bg-white text-[#173421]/80 hover:bg-[#00521a]/10 border border-[#00521a]/15"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.name}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#12291b] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#00521a]/15"
              >
                <Image
                  src={photo.cloudinaryUrl}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f6ce40] text-[#142118] self-start mb-1.5">
                    {photo.tag}
                  </span>
                  <p className="text-xs text-white line-clamp-2 leading-relaxed font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#173421]/60">
            Showing {filteredPhotos.length} of {photos.length} session photographs · Click any photo to view full size
          </div>
        </div>
      </section>

      {/* ─── 4. LIGHTBOX MODAL ─── */}
      {lightboxIndex !== null && currentLightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:block"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:block"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
              <Image
                src={currentLightboxPhoto.cloudinaryUrl}
                alt={currentLightboxPhoto.caption}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white px-4 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-[#f6ce40] block mb-1">
                {currentLightboxPhoto.tag} · Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <p className="text-sm text-white/90">
                {currentLightboxPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ─── 5. PRE-FOOTER CTA ─── */}
      <section className="py-20 bg-[#00521a] text-white text-center relative overflow-hidden">
        <div className="home-shell max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f6ce40]">
            Policy · Advocacy · Community Health
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf7f0] leading-tight">
            Advancing Evidence-Based Public Health in Nigeria
          </h2>
          <p className="text-[#faf7f0]/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with the Caywood Brown Foundation and our coalition partners to promote stronger legislation, sustainable health financing, and healthier communities across the country.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/partner"
              className="home-button home-button-gold"
            >
              Partner with Policy Desk
            </Link>
            <Link
              href="/events"
              className="home-button home-button-light-outline"
            >
              All Events &amp; Campaigns
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

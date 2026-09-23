"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Users,
  CheckCircle2,
  Sparkles,
  Award,
  Scale,
  Video,
  Play,
  FileText,
  Building2,
  ChevronRight,
  ChevronLeft,
  X,
  ExternalLink,
  ShieldCheck,
  HeartPulse,
  Landmark,
  Share2
} from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"
import photosData from "@/lib/national-convergence-photos.json"

interface PhotoItem {
  name: string
  localPath: string
  cloudinaryUrl: string
  caption: string
  tag: string
  isCover?: boolean
  isVIP?: boolean
  width?: number
  height?: number
}

const photos: PhotoItem[] = photosData

const filterTags = [
  "All Photos",
  "Keynote & Leadership",
  "Senate & Executive",
  "Panel & Deliberations",
  "Delegates & Coalition",
  "Arrivals & Media",
  "Backdrop & Venue",
]

export default function NationalConvergencePage() {
  const [activeFilter, setActiveFilter] = useState("All Photos")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const filteredPhotos = activeFilter === "All Photos"
    ? photos
    : photos.filter((p) => p.tag === activeFilter)

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

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f6ce40] text-xs font-bold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>National Landmark Convergence · 17 September 2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#df6827]/20 text-[#ffb076] text-xs font-bold uppercase tracking-wider border border-[#df6827]/40">
              <Video className="w-3.5 h-3.5" />
              <span>NTA News 24 Special Broadcast</span>
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.1rem,4.2vw,4.2rem)] font-medium leading-[1.14] text-[#faf7f0] max-w-4xl">
            National Convergence on Nigeria’s Health Financing Reform Bills: BHCPF (SB.886) &amp; SSB (SB.713) <span className="inline-block">🇳🇬</span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-[#f6ce40] font-semibold max-w-3xl leading-relaxed">
            Strengthening Sustainable Domestic Health Financing for Universal Health Coverage: Leveraging the Sugar-Sweetened Beverages (SSB) Tax and the Basic Health Care Provision Fund (BHCPF)
          </p>

          <p className="mt-3 text-sm sm:text-base text-[#faf7f0]/85 max-w-3xl">
            Convened by the <strong className="text-white">Caywood Brown Foundation (CBF)</strong> through the <strong className="text-white">Office of the Chairman, Senate Committee on Health (Secondary and Tertiary)</strong>, Senator Dr. Ipalibo Harry Banigo.
          </p>

          {/* Metadata badges */}
          <div className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#faf7f0]/85 border-t border-white/15 pt-6">
            <span className="flex items-center gap-2 text-[#c7ed9f] font-semibold">
              <Calendar className="w-4 h-4 text-[#f6ce40]" />
              <span>Thursday, 17 September 2026</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f6ce40]" />
              <span>Banquet Hall, Onomo Allure Abuja</span>
            </span>
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#f6ce40]" />
              <span>Senate Bills: SB.886 &amp; SB.713</span>
            </span>
            <span className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#f6ce40]" />
              <span>10th National Assembly of Nigeria</span>
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. BROADCAST VIDEO SPOTLIGHT & LEAD FEATURE ─── */}
      <section className="py-12 sm:py-16 -mt-8 sm:-mt-12 relative z-20">
        <div className="home-shell max-w-5xl mx-auto">
          {/* Authentic Video Player Card */}
          <div className="bg-[#12291b] rounded-3xl overflow-hidden shadow-2xl border border-[#00521a]/20">
            <div className="p-4 sm:p-6 bg-[#00521a] text-white flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f6ce40] text-[#12291b] flex items-center justify-center font-bold">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f6ce40]">
                      NTA News 24 Exclusive Broadcast
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-white">
                    Special Television Report: National Convergence on Health Financing
                  </h3>
                </div>
              </div>
              <a
                href="https://res.cloudinary.com/oudx4ztm/video/upload/v1790171087/caywood-brown/videos/national-convergence-health-financing.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#c7ed9f] hover:text-[#f6ce40] inline-flex items-center gap-1 font-semibold transition-colors"
              >
                <span>HD Direct Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative aspect-video bg-black w-full overflow-hidden">
              <video
                controls
                playsInline
                preload="metadata"
                poster="https://res.cloudinary.com/oudx4ztm/image/upload/v1790171050/caywood-brown/events/national-convergence/NAT_2910.jpg"
                className="w-full h-full object-contain"
                onPlay={() => setIsVideoPlaying(true)}
              >
                <source
                  src="/videos/national-convergence-health-financing.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://res.cloudinary.com/oudx4ztm/video/upload/v1790171087/caywood-brown/videos/national-convergence-health-financing.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-4 sm:p-6 bg-[#173421] text-white/90 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f6ce40] shrink-0" />
                <span>
                  National Television Authority (NTA) broadcast covering ministerial addresses, Senate committee deliberations, and civil society resolutions.
                </span>
              </p>
              <span className="text-[#c7ed9f] font-mono shrink-0">
                Duration: 30.5 MB Broadcast Feature
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. STRATEGIC NARRATIVE & CONVERGENCE DOSSIER ─── */}
      <section className="py-10 sm:py-16">
        <div className="home-shell max-w-5xl mx-auto">
          {/* Keynote Banner Image */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-[#00521a]/15 bg-[#12291b] mb-12">
            <Image
              src="https://res.cloudinary.com/oudx4ztm/image/upload/v1790171050/caywood-brown/events/national-convergence/NAT_2910.jpg"
              alt="Senator Dr. Ipalibo Harry Banigo and Caywood Brown Foundation leadership arriving at Onomo Allure Abuja"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f6ce40] block mb-1">
                Convener &amp; Senate Leadership
              </span>
              <p className="text-sm sm:text-base text-[#faf7f0]/95 max-w-3xl">
                Senator Dr. Ipalibo Harry Banigo, Chairman of the Senate Committee on Health (Secondary and Tertiary) and Founder of Caywood Brown Foundation, arriving at the National Convergence with foundation delegates and parliamentary aides.
              </p>
            </div>
          </div>

          {/* Grid Layout: Main Narrative + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-8 text-[#173421] text-base sm:text-lg leading-relaxed">
              {/* Executive Summary Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] flex items-center gap-2">
                  <Landmark className="w-4 h-4" />
                  <span>Executive Convocation Summary</span>
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-[#00521a] leading-snug font-medium">
                  Strengthening sustainable domestic health financing to achieve Universal Health Coverage for 220+ million Nigerians.
                </p>
                <p className="text-base text-[#173421]/90 leading-relaxed pt-2 border-t border-[#00521a]/10">
                  On Thursday, 17 September 2026, stakeholders across Nigeria’s health and public finance ecosystem gathered in the Banquet Hall of Onomo Allure Abuja. Convened by the Caywood Brown Foundation through the Office of the Chairman, Senate Committee on Health, the assembly tackled the decisive questions surrounding two historic health financing reform bills passed by the Senate: <strong>SB.886</strong> and <strong>SB.713</strong>.
                </p>
              </div>

              {/* Thematic Focus: The Two Bills */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00521a]">
                  The Legislative Imperatives: SB.886 &amp; SB.713
                </h2>
                <p className="text-[#173421]/90">
                  As international development assistance and foreign donor health support transition away from middle-income nations, Nigeria faces an urgent imperative to generate robust, predictable, and transparent domestic revenues to fund its healthcare system.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-white border-l-4 border-l-[#00521a] border border-[#00521a]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00521a]">
                      Senate Bill SB.886
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#173421]">
                      Doubling the BHCPF (1% to 2% CRF)
                    </h3>
                    <p className="text-xs text-[#173421]/80 leading-relaxed">
                      Statutorily increases allocation to the Basic Health Care Provision Fund from 1% to 2% of Nigeria&apos;s Consolidated Revenue Fund, directly financing primary health centers, emergency medical services, and essential health benefits packages.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border-l-4 border-l-[#df6827] border border-[#df6827]/20 shadow-sm space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#df6827]">
                      Senate Bill SB.713
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#173421]">
                      Sugar-Sweetened Beverages Tax
                    </h3>
                    <p className="text-xs text-[#173421]/80 leading-relaxed">
                      Reforms excise duties on sugar-sweetened beverages through the Customs &amp; Excise Tariff Act, reducing non-communicable diseases (diabetes, cardiovascular disease) while earmarking tax yields for public health promotion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Stakeholder Voices */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00521a]">
                  Voices from the National Convergence
                </h2>

                {/* Minister Pate */}
                <div className="p-6 rounded-2xl bg-[#c7ed9f]/15 border border-[#00521a]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#00521a]" />
                      <span className="text-sm font-bold text-[#00521a]">Prof. Muhammad Ali Pate</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#00521a]/70 uppercase tracking-wider">
                      Coordinating Minister of Health &amp; Social Welfare
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#173421] italic font-medium leading-relaxed">
                    &ldquo;Health financing reform is the cornerstone of our Sector-Wide Approach (SWAp). The passage of SB.886 and SB.713 marks a historic shift towards sustainable, domestically mobilized healthcare that guarantees quality services for every Nigerian mother and child.&rdquo;
                  </p>
                </div>

                {/* Special Adviser Dr. Salma Anas */}
                <div className="p-6 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-[#df6827]" />
                      <span className="text-sm font-bold text-[#173421]">Dr. Salma Ibrahim Anas</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#173421]/70 uppercase tracking-wider">
                      Special Adviser to the President on Health
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#173421] italic font-medium leading-relaxed">
                    &ldquo;The Presidency recognizes health as an investment in human capital. Aligning the BHCPF expansion with fiscal health measures on sugar consumption demonstrates Nigeria&apos;s commitment to preventive medicine and universal coverage.&rdquo;
                  </p>
                </div>

                {/* Senator Banigo */}
                <div className="p-6 rounded-2xl bg-[#00521a] text-white space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Landmark className="w-5 h-5 text-[#f6ce40]" />
                      <span className="text-sm font-bold text-[#f6ce40]">Senator Dr. Ipalibo Harry Banigo</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#c7ed9f] uppercase tracking-wider">
                      Chairman, Senate Health Committee &amp; Founder, CBF
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#faf7f0] italic leading-relaxed">
                    &ldquo;Our mission in the 10th Senate is not merely to legislate, but to safeguard the health and well-being of the Nigerian people. SB.886 and SB.713 are transformative tools to guarantee that our hospitals have medicines, our primary care centers have skilled personnel, and our families are shielded from ruinous health expenditures.&rdquo;
                  </p>
                </div>
              </div>

              {/* ─── 4. THE 7-POINT COMMUNIQUÉ ─── */}
              <div className="space-y-4 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>National Accord</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00521a]">
                  7-Point Communiqué: Commitments for Action
                </h2>
                <p className="text-sm sm:text-base text-[#173421]/80">
                  Unanimously adopted by government ministries, parliamentary committees, international development partners, and civil society organizations at the close of proceedings:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      num: "01",
                      title: "Expedited House of Representatives Concurrence",
                      desc: "Mobilize parliamentary synergy to secure immediate concurrence by the House of Representatives on SB.886 and SB.713 for prompt transmission to President Bola Ahmed Tinubu for assent."
                    },
                    {
                      num: "02",
                      title: "Statutory Ring-Fencing of SSB Tax Yields",
                      desc: "Mandate the earmarking and direct transmission of Sugar-Sweetened Beverages excise revenues into the Basic Health Care Provision Fund to guarantee dedicated financing for non-communicable disease prevention."
                    },
                    {
                      num: "03",
                      title: "Fiscal Transparency & Social Accountability",
                      desc: "Institute rigid digital auditing, community monitoring dashboards, and CSO oversight mechanisms to track every naira disbursed under the expanded 2% BHCPF."
                    },
                    {
                      num: "04",
                      title: "Revitalization of Primary Health Centers (PHCs)",
                      desc: "Direct increased funds to upgrade 8,800+ Primary Health Care centers across all 774 Local Government Areas with solar cold chains, clean water, diagnostic tools, and skilled birth attendants."
                    },
                    {
                      num: "05",
                      title: "Financial Protection for Vulnerable Populations",
                      desc: "Expand the Vulnerable Group Fund administered through the National Health Insurance Authority (NHIA) to protect indigent pregnant women, children under five, elderly citizens, and persons with disabilities."
                    },
                    {
                      num: "06",
                      title: "Tripartite Executive-Legislative-CSO Coalition",
                      desc: "Institutionalize the National Convergence as a recurring accountability forum uniting legislators, ministry officials, and civil society advocates to review health financing milestones quarterly."
                    },
                    {
                      num: "07",
                      title: "Grassroots Public Health & Nutrition Advocacy",
                      desc: "Launch widespread public awareness campaigns led by Caywood Brown Foundation and partners to educate consumers on nutritional labeling and the severe clinical hazards of excessive sugar consumption."
                    }
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="p-5 rounded-2xl bg-white border border-[#00521a]/15 shadow-sm flex items-start gap-4"
                    >
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#df6827] shrink-0 w-8">
                        {item.num}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-serif text-base font-bold text-[#00521a]">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#173421]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Official Backdrop Photo */}
              <div className="p-6 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#12291b]">
                  <Image
                    src="https://res.cloudinary.com/oudx4ztm/image/upload/v1790170847/caywood-brown/events/national-convergence/NAT_2847.jpg"
                    alt="Official Backdrop Banner of the National Convergence at Onomo Allure Abuja"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#00521a] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Official Venue
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#173421]">
                    Banquet Hall, Onomo Allure Abuja
                  </h3>
                  <p className="text-xs text-[#00521a] font-semibold mt-0.5">
                    Convergence Secretariat &amp; Plenary
                  </p>
                  <p className="text-xs text-[#173421]/75 mt-2 leading-relaxed">
                    Hosting 150+ high-level policy leaders, international health financiers, legislative experts, and development partners.
                  </p>
                </div>
              </div>

              {/* Participating Institutions */}
              <div className="p-6 rounded-3xl bg-white border border-[#00521a]/15 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00521a] flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Key Stakeholder Institutions</span>
                </h4>
                <div className="space-y-2.5 text-xs text-[#173421]/85">
                  {[
                    "Senate Committee on Health (Secondary & Tertiary)",
                    "House Committee on Healthcare Services",
                    "Federal Ministry of Health and Social Welfare",
                    "Special Adviser to the President on Health",
                    "Nigeria Centre for Disease Control (NCDC)",
                    "National Health Insurance Authority (NHIA)",
                    "National Primary Health Care Dev. Agency (NPHCDA)",
                    "World Health Organization (WHO)",
                    "Global Health Advocacy Incubator (GHAI)",
                    "Vaccine Network for Disease Control (VNDC)",
                    "Clinton Health Access Initiative (CHAI)",
                    "SCIDaR (Solina Centre for International Dev.)",
                    "Corporate Accountability & Public Participation Africa",
                    "Caywood Brown Foundation (CBF)",
                  ].map((inst, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00521a] shrink-0 mt-0.5" />
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast Fact Box */}
              <div className="p-6 rounded-3xl bg-[#12291b] text-[#faf7f0] space-y-3 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f6ce40] block">
                  Impact Metric
                </span>
                <p className="font-serif text-3xl font-bold text-[#c7ed9f]">
                  2% of CRF
                </p>
                <p className="text-xs text-[#faf7f0]/80 leading-relaxed">
                  Passing SB.886 doubles the statutory basic healthcare provision fund, unlocking tens of billions of naira annually for primary healthcare clinics across all 36 States and the FCT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. INTERACTIVE 50-PHOTO GALLERY ─── */}
      <section className="py-16 bg-[#f3ede0]/70 border-t border-[#00521a]/10">
        <div className="home-shell max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00521a] block mb-2">
              Visual Documentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173421] font-medium">
              National Convergence Photo Gallery (50 Photos)
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#173421]/75">
              Explore 50 high-resolution photographs documenting plenary debates, ministerial keynotes, partner deliberations, and communiqué adoption at Onomo Allure Abuja.
            </p>

            {/* Filter Buttons */}
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
            Showing {filteredPhotos.length} of {photos.length} event photographs · Click any photo to expand in high-definition lightbox
          </div>
        </div>
      </section>

      {/* ─── 6. LIGHTBOX MODAL ─── */}
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

      {/* ─── 7. UNIFIED CALL TO ACTION ─── */}
      <section className="py-20 bg-[#00521a] text-white text-center relative overflow-hidden">
        <div className="home-shell max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f6ce40]">
            Advocacy · Legislative Action · Universal Health Coverage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf7f0] leading-tight">
            Partner with the Caywood Brown Health Policy Desk
          </h2>
          <p className="text-[#faf7f0]/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Support our ongoing advocacy with the National Assembly, federal ministries, and civil society partners to ensure sustainable health financing reaches every Nigerian community.
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

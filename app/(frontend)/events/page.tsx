"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ArrowRight, Heart, Users, ShieldCheck, Filter, Sparkles, CheckCircle2, Phone, Video } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

interface FoundationEvent {
  id: string
  title: string
  subtitle?: string
  category: "Health & Immunization" | "Humanitarian Relief" | "Community Outreaches" | "Public Health Policy & Advocacy"
  date: string
  location: string
  lead: string
  image: string
  secondaryImage?: string
  badgeText: string
  collaborators?: string[]
  keyActivities: string[]
  isHeroSpotlight?: boolean
}

const verifiedEvents: FoundationEvent[] = [
  {
    id: "national-convergence-health-financing-reform",
    title: "National Convergence on Nigeria’s Health Financing Reform Bills: BHCPF (SB.886) & SSB (SB.713) 🇳🇬",
    subtitle: "Strengthening Sustainable Domestic Health Financing for Universal Health Coverage: Leveraging the SSB Tax and the BHCPF",
    category: "Public Health Policy & Advocacy",
    date: "17th September 2026",
    location: "Banquet Hall, Onomo Allure Abuja",
    lead: "Convened by the Caywood Brown Foundation through the Office of the Chairman, Senate Committee on Health (Secondary and Tertiary), bringing together the Coordinating Minister of Health, Special Adviser to the President on Health, NCDC, National Assembly, and leading global health partners to champion sustainable domestic health financing.",
    image: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790171050/caywood-brown/events/national-convergence/NAT_2910.jpg",
    secondaryImage: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790170847/caywood-brown/events/national-convergence/NAT_2847.jpg",
    badgeText: "National Landmark Convergence · NTA Broadcast",
    collaborators: [
      "Senate Committee on Health (10th National Assembly)",
      "Federal Ministry of Health & Social Welfare (Prof. Muhammad Ali Pate)",
      "Special Adviser to the President on Health (Dr. Salma Ibrahim Anas)",
      "Nigeria Centre for Disease Control (NCDC, Dr. Jide Idris)",
      "House Committee on Healthcare Services (Hon. Amos Magaji)",
      "Global Health Advocacy Incubator (GHAI, Prof. Emmanuel Alhassan)",
      "Vaccine Network for Disease Control (VNDC, Chika Offor)",
      "World Health Organization (WHO) & Clinton Health Access Initiative (CHAI)",
    ],
    keyActivities: [
      "Keynote addresses on sustainable domestic health financing and the Sector-Wide Approach (SWAp)",
      "Strategic roadmap formulation for House concurrence on SB.886 (BHCPF 1% to 2%) and SB.713 (SSB Tax)",
      "Full NTA News 24 special television broadcast and press conference",
      "Unanimous adoption of the 7-Point Communiqué: Commitments for Action",
    ],
    isHeroSpotlight: true,
  },
  {
    id: "ssb-tax-breakfast-technical-session",
    title: "EVENT RECAP | SSB TAX BREAKFAST TECHNICAL SESSION 🇳🇬",
    subtitle: "Sugar-Sweetened Beverages Legislation, Domestic Health Financing & NCD Prevention",
    category: "Public Health Policy & Advocacy",
    date: "September 2026",
    location: "AATC Onomo Allure Hotels, Abuja",
    lead: "The Caywood Brown Foundation (CBF) and Corporate Accountability and Public Participation Africa (CAPPA) co-hosted a Breakfast Technical Session on the finalisation of the Sugar-Sweetened Beverages (SSB) Legislation.",
    image: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790167110/caywood-brown/events/ssb-tax-breakfast/ssb-vip-dignitaries-seated.jpg",
    secondaryImage: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790167109/caywood-brown/events/ssb-tax-breakfast/ssb-banigo-keynote-podium.jpg",
    badgeText: "High-Level Policy Recap",
    collaborators: [
      "Corporate Accountability and Public Participation Africa (CAPPA)",
      "Senate Committee on Health (10th National Assembly)",
      "Sponsor of SB.713 (Customs & Excise Tariff Amendment Bill)",
      "Civil Society Health Advocates & Technical Experts",
    ],
    keyActivities: [
      "Keynote legislative address by Founder Senator Dr. Ipalibo Harry Banigo (Chairman, Senate Committee on Health)",
      "Multi-stakeholder technical deliberations on SB.713 legislative pathways",
      "Consensus-building on domestic revenue earmarks for non-communicable disease prevention",
      "Issuance of joint CBF & CAPPA policy communiqué to the 10th National Assembly",
    ],
  },
  {
    id: "world-immunization-day-impa",
    title: "World Immunization Day 2025: Integrated Vaccination Campaign & Road Show",
    subtitle: "IMPA: Immunization Made Possible for All • \"Immunization For All Is Humanly Possible\"",
    category: "Health & Immunization",
    date: "10th November 2025",
    location: "Primary Health Centres, Road Shows & Community Hubs, Rivers State",
    lead: "In collaboration with the Senate Committee on Health and leading international global health allies, the Caywood Brown Foundation conducts comprehensive immunization outreaches to ensure every child receives life-saving vaccines.",
    image: "/images/hero/impa-banner.jpg",
    secondaryImage: "/images/programs/impa-volunteers.jpg",
    badgeText: "Flagship Health Campaign",
    collaborators: [
      "Nigerian Senate Committee on Health",
      "Vaccine Network for Disease Control (VNDC)",
      "Gavi, The Vaccine Alliance",
      "NPHCDA (National Primary Health Care)",
      "Sydani Group",
    ],
    keyActivities: [
      "Oral polio vaccine administration personally administered by Founder Senator Dr. Ipalibo Harry Banigo",
      "Infant & child vaccination badging (\"I AM VACCINATED\") and immunization card verification",
      "High-energy community road show sensitizing mothers and families on preventative healthcare",
      "Youth volunteer mobilization and on-site public health counseling across local council wards",
    ],
    isHeroSpotlight: true,
  },
  {
    id: "christmas-with-her-excellency",
    title: "Annual \"Christmas With Her Excellency\" Community Outreach",
    subtitle: "Holiday Welfare, Food Security & Community Praise Gathering",
    category: "Community Outreaches",
    date: "25th December 2025 (Annual)",
    location: "Port Harcourt & Obio/Akpor Communities, Rivers State",
    lead: "Hosted by Her Excellency Senator Dr. Mrs. Ipalibo Harry Banigo, this annual holiday outreach brings festive relief, community meals, nutritional food baskets, and joyful gospel praise to hundreds of vulnerable households.",
    image: "/images/gallery/event-2.jpg",
    secondaryImage: "/images/gallery/event-4.jpg",
    badgeText: "Annual Festive Outreach",
    collaborators: [
      "Caywood Brown Foundation Leadership Council",
      "Rivers Community Women Associations",
      "Local Volunteer Corps",
    ],
    keyActivities: [
      "Festive food hamper distributions containing rice, cooking essentials, and protein provisions",
      "Live community praise, musical performances, and spiritual encouragement",
      "Empowerment address and personal interactions with Senator Dr. Ipalibo Harry Banigo",
      "Clothing and holiday gifts presented to orphans and elderly community members",
    ],
  },
  {
    id: "buni-yadi-idp-relief",
    title: "Buni Yadi Humanitarian Relief & IDP Support Mission",
    subtitle: "Emergency Family Care, Nutrition & Maternal Psychosocial Support",
    category: "Humanitarian Relief",
    date: "Humanitarian Field Mission",
    location: "Buni Yadi Settlements & Host Communities",
    lead: "Deploying rapid field relief to internally displaced persons and vulnerable families enduring hardship, providing essential food rations, medical triage, and dignified relief under outdoor community field canopies.",
    image: "/images/gallery/event-1.jpg",
    secondaryImage: "/images/gallery/event-3.jpg",
    badgeText: "Crisis Relief Mission",
    collaborators: [
      "Buni Yadi Community Leaders",
      "Field Relief Volunteer Teams",
      "Emergency Health Volunteers",
    ],
    keyActivities: [
      "Nutritional food distribution for displaced mothers, children, and village elders",
      "Safe shelter support, blankets, clean water containers, and hygiene care kits",
      "Maternal psychosocial support circles and trauma-informed counselling",
      "First-aid and immediate primary health checks conducted in field tents",
    ],
  },
  {
    id: "world-malaria-day-outreach",
    title: "World Malaria Day & Adolescent Health Road Show",
    subtitle: "#ZeroMalariaStartsWithMe • Invest in Prevention, Invest in Treatment",
    category: "Health & Immunization",
    date: "Annual Public Health Drive",
    location: "Port Harcourt Waterfronts & Rural Primary Schools, Rivers State",
    lead: "Combining high-visibility awareness walks with door-to-door preventative supplies to curb malaria morbidity among pregnant mothers and school-age adolescents.",
    image: "/images/gallery/workshop-1.jpg",
    secondaryImage: "/images/gallery/workshop-2.jpg",
    badgeText: "Preventative Health Drive",
    collaborators: [
      "MedWHOLE Health Network",
      "Adolescent School Health Ambassadors",
      "Primary Healthcare Centers",
    ],
    keyActivities: [
      "Distribution of long-lasting insecticide-treated mosquito bed nets (LLINs)",
      "Free rapid malaria diagnostic testing (RDT) and preventative medication",
      "Menstrual hygiene kit distribution and sanitation education for schoolgirls",
      "Community clean-up and gutter-desilting demonstrations to eliminate mosquito breeding grounds",
    ],
  },
]

const categories = ["All Events", "Public Health Policy & Advocacy", "Health & Immunization", "Humanitarian Relief", "Community Outreaches"]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events")
  const [eventsList, setEventsList] = useState<FoundationEvent[]>(verifiedEvents)
  const [isFromDb, setIsFromDb] = useState(false)

  useEffect(() => {
    let active = true
    async function loadDbEvents() {
      try {
        const res = await fetch('/api/events')
        if (res.ok) {
          const data = await res.json()
          if (active && data.docs && data.docs.length > 0) {
            setEventsList(data.docs)
            setIsFromDb(true)
          }
        }
      } catch (e) {
        console.warn('Events fallback used:', e)
      }
    }
    loadDbEvents()
    return () => { active = false }
  }, [])

  const spotlight = eventsList.find((e) => e.isHeroSpotlight) || eventsList[0]
  const filteredEvents = selectedCategory === "All Events"
    ? eventsList
    : eventsList.filter((e) => e.category === selectedCategory)

  return (
    <div className="home-page min-h-screen">
      {/* ─── 1. HERO SECTION (Botanical Canopy) ─── */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">Official Campaigns & Outreaches</p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[1.1] tracking-tight">
            Life-saving campaigns, <br />
            <span className="text-[#f6ce40]">standing with communities.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85 font-normal">
            Explore our signature field operations — from statewide polio and childhood immunization drives under the IMPA campaign, to crisis relief for displaced families and annual holiday community celebrations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#impa-spotlight"
              className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40]"
            >
              <span>Explore IMPA Campaign</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/volunteer"
              className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/40 hover:bg-white/10"
            >
              <Users className="h-4 w-4 text-[#c7ed9f]" />
              <span>Sign Up as Event Volunteer</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. SPOTLIGHT: WORLD IMMUNIZATION DAY / IMPA ─── */}
      <section id="impa-spotlight" className="py-20 lg:py-24 bg-[#0d2318] text-[#faf7f0] border-b border-[#00521a]/40">
        <div className="home-shell">
          <div className="rounded-3xl border border-[#c7ed9f]/30 bg-[#122b1c] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Official Poster & Field Action */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/30">
                  <Image
                    src={spotlight.image}
                    alt={spotlight.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-[#00521a] text-[#c7ed9f] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-[#c7ed9f]/30">
                    {spotlight.badgeText}
                  </div>
                </div>

                {/* Secondary verification photo */}
                {spotlight.secondaryImage && (
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-white/10 hidden sm:block">
                    <Image
                      src={spotlight.secondaryImage}
                      alt="IMPA Volunteers in action"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-[#faf7f0]/90">
                      Caywood Brown Foundation volunteer mobilization for IMPA campaign
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Campaign Details & Verified Partners */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c7ed9f]/15 text-[#c7ed9f] text-xs font-bold uppercase tracking-wider border border-[#c7ed9f]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#f6ce40]" />
                  <span>National Health Initiative</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#faf7f0] font-medium leading-[1.18]">
                  {spotlight.title}
                </h2>

                {spotlight.subtitle && (
                  <p className="text-[#f6ce40] text-sm sm:text-base font-semibold italic">
                    {spotlight.subtitle}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#faf7f0]/80 border-y border-white/10 py-3.5">
                  <span className="flex items-center gap-2 text-[#c7ed9f] font-semibold">
                    <Calendar className="w-4 h-4 text-[#f6ce40]" />
                    <span>{spotlight.date}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#f6ce40]" />
                    <span>{spotlight.location}</span>
                  </span>
                </div>

                <p className="text-[#faf7f0]/85 text-base leading-relaxed">
                  {spotlight.lead}
                </p>

                {/* Collaborators List */}
                {spotlight.collaborators && (
                  <div className="space-y-2">
                    <p className="home-label text-[#c7ed9f]">In Strategic Collaboration With:</p>
                    <div className="flex flex-wrap gap-2">
                      {spotlight.collaborators.map((c) => (
                        <span
                          key={c}
                          className="text-xs bg-white/10 hover:bg-white/15 text-[#faf7f0] px-3 py-1 rounded-full border border-white/15 font-medium transition-colors"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Activities */}
                <div className="space-y-2.5 pt-2">
                  <p className="home-label text-[#c7ed9f]">Core Field Activities:</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#faf7f0]/90">
                    {spotlight.keyActivities.map((act) => (
                      <li key={act} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#f6ce40] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-3">
                  {spotlight.id === "national-convergence-health-financing-reform" ? (
                    <>
                      <Link
                        href="/events/national-convergence-health-financing-reform"
                        className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40]"
                      >
                        <Video className="w-4 h-4" />
                        <span>Watch NTA Broadcast &amp; 50 Photos</span>
                      </Link>
                      <Link
                        href="/partner"
                        className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/30 hover:bg-white/10"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#c7ed9f]" />
                        <span>Partner with Policy Desk</span>
                      </Link>
                    </>
                  ) : spotlight.id === "ssb-tax-breakfast-technical-session" ? (
                    <>
                      <Link
                        href="/events/ssb-tax-breakfast-technical-session"
                        className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40]"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>Read Event Recap &amp; 43 Photos</span>
                      </Link>
                      <Link
                        href="/partner"
                        className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/30 hover:bg-white/10"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#c7ed9f]" />
                        <span>Partner with Us</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/volunteer"
                        className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40]"
                      >
                        <Users className="w-4 h-4" />
                        <span>Volunteer for IMPA</span>
                      </Link>
                      <Link
                        href="/donate"
                        className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/30 hover:bg-white/10"
                      >
                        <Heart className="w-4 h-4 text-[#f6ce40]" />
                        <span>Sponsor Vaccines</span>
                      </Link>
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ALL VERIFIED EVENTS & CAMPAIGNS ─── */}
      <section className="py-20 lg:py-28 bg-[#faf7f0] relative">
        <div className="home-shell">
          
          <div className="section-heading-row">
            <div>
              <p className="home-label text-[#00521a] mb-2">Campaign Directory</p>
              <h2 className="home-heading">All Major Events & Field Outreaches</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-4 sm:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#173421]/60 mr-2 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {categories.map((cat) => {
                const active = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                      active
                        ? "bg-[#00521a] text-white shadow-sm"
                        : "bg-white text-[#173421] border border-[#00521a]/20 hover:border-[#00521a]"
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-10">
            {filteredEvents.map((evt) => (
              <article
                key={evt.id}
                id={evt.id}
                className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#00521a]/15 shadow-sm hover:shadow-xl hover:border-[#00521a]/30 transition-all duration-300"
              >
                <div>
                  {/* Event Imagery */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#173421]">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#00521a] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {evt.badgeText}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#00521a] font-bold uppercase tracking-wider">
                      <span className="bg-[#c7ed9f]/50 px-2.5 py-1 rounded-md">{evt.category}</span>
                      <span className="flex items-center gap-1 text-[#173421]/70">
                        <Calendar className="w-3.5 h-3.5 text-[#00521a]" />
                        <span>{evt.date}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-[26px] font-medium text-[#173421] leading-snug group-hover:text-[#00521a] transition-colors">
                      {evt.title}
                    </h3>

                    {evt.subtitle && (
                      <p className="text-xs text-[#d97706] font-semibold">
                        {evt.subtitle}
                      </p>
                    )}

                    <div className="flex items-start gap-1.5 text-xs text-[#173421]/70 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#00521a] shrink-0 mt-0.5" />
                      <span>{evt.location}</span>
                    </div>

                    <p className="text-sm text-[#173421]/80 leading-relaxed pt-1">
                      {evt.lead}
                    </p>

                    {/* Key Activities bulleted */}
                    <div className="pt-2 border-t border-[#00521a]/10 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#00521a]">Outreach Highlights:</p>
                      <ul className="space-y-1 text-xs text-[#173421]/85">
                        {evt.keyActivities.slice(0, 3).map((act) => (
                          <li key={act} className="flex items-start gap-2">
                            <span className="text-[#00521a] font-bold">&bull;</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 sm:p-8 pt-0 border-t border-transparent flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={
                      evt.id === "national-convergence-health-financing-reform"
                        ? "/events/national-convergence-health-financing-reform"
                        : evt.id === "ssb-tax-breakfast-technical-session"
                        ? "/events/ssb-tax-breakfast-technical-session"
                        : `/events/${evt.id}`
                    }
                    className="text-xs font-bold uppercase tracking-wider text-[#00521a] hover:text-[#173421] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>
                      {evt.id === "national-convergence-health-financing-reform"
                        ? "Watch NTA Broadcast & 50 Photos"
                        : evt.id === "ssb-tax-breakfast-technical-session"
                        ? "Read Event Recap & 43 Photos"
                        : "View Full Campaign Details"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/volunteer"
                      className="text-xs font-medium text-[#173421]/70 hover:text-[#00521a] transition-colors"
                    >
                      Volunteer
                    </Link>
                    <Link
                      href="/donate"
                      className="p-2 rounded-full bg-[#faf7f0] hover:bg-[#c7ed9f] text-[#00521a] transition-colors"
                      aria-label={`Support ${evt.title}`}
                    >
                      <Heart className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. IMPACT / PARTNERSHIP BANNER ─── */}
      <section className="py-16 bg-[#173421] text-[#faf7f0] border-t border-white/10">
        <div className="home-shell text-center max-w-3xl space-y-5">
          <p className="home-label text-[#c7ed9f]">Official Health & Relief Allies</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf7f0] font-medium leading-tight">
            Partnering with global health and national leaders to protect families.
          </h2>
          <p className="text-sm sm:text-base text-[#faf7f0]/80 leading-relaxed">
            Our outreaches are carried out in full compliance with National Primary Health Care Development Agency guidelines, in close alignment with the Senate Committee on Health, Gavi, and local community leadership.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/partner"
              className="home-button inline-flex items-center gap-2 bg-[#f6ce40] text-[#142118] hover:bg-[#e5bf32] border-[#f6ce40]"
            >
              <span>Partner On Our Next Outreach</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+2348038817059"
              className="home-button-outline inline-flex items-center gap-2 text-[#faf7f0] border-white/40 hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[#c7ed9f]" />
              <span>Inquiries: +234 803 881 7059</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 5. CLOSING SECTION ─── */}
      <section className="home-section closing-section" aria-labelledby="closing-title">
        <div className="home-shell">
          <div className="closing-heading">
            <h2 id="closing-title" className="home-heading">Be there when<br />it matters most.</h2>
            <p className="home-copy">Support our field vaccines, sponsor health workers, or volunteer directly in upcoming community outreaches across Rivers State.</p>
          </div>
          <div className="closing-links">
            {[
              { title: "Sponsor field vaccines & kits", detail: "Support life-saving outreaches", href: "/donate" },
              { title: "Join our health & relief corps", detail: "Volunteer with us", href: "/volunteer" },
              { title: "Host an outreach in your community", detail: "Get in touch", href: "/contact" },
            ].map((item) => (
              <Link href={item.href} key={item.href}>
                <span className="home-label">{item.detail}</span>
                <span className="closing-link-title">{item.title}<ArrowRight size={24} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

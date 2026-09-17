import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, MapPin, ArrowLeft, Heart, Users, CheckCircle2, Phone, ArrowRight, Sparkles } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

interface EventData {
  title: string
  subtitle: string
  category: string
  date: string
  location: string
  image: string
  secondaryImage?: string
  badgeText: string
  lead: string
  collaborators: string[]
  keyActivities: string[]
  narrative: string[]
}

const eventDetails: Record<string, EventData> = {
  "world-immunization-day-impa": {
    title: "World Immunization Day: Integrated Vaccination Campaign & Road Show (IMPA)",
    subtitle: "Immunization Made Possible for All • \"Immunization For All Is Humanly Possible\"",
    category: "Health Campaign & Immunization",
    date: "10th November 2025",
    location: "Primary Health Centres, Road Shows & Community Hubs, Rivers State",
    image: "/images/hero/impa-banner.jpg",
    secondaryImage: "/images/programs/impa-volunteers.jpg",
    badgeText: "Flagship Health Campaign",
    lead: "In strategic collaboration with the Senate Committee on Health, Gavi, NPHCDA, VNDC, and Sydani Group, the Caywood Brown Foundation leads statewide immunization road shows and infant vaccine delivery.",
    collaborators: [
      "Nigerian Senate Committee on Health",
      "Vaccine Network for Disease Control (VNDC)",
      "Gavi, The Vaccine Alliance",
      "National Primary Health Care Development Agency (NPHCDA)",
      "Sydani Group",
    ],
    keyActivities: [
      "Oral polio vaccine administration personally delivered by Founder Senator Dr. Ipalibo Harry Banigo",
      "Infant & child vaccination badging (\"I AM VACCINATED\") and official immunization record verification",
      "Community road show sensitizing mothers and caregivers on routine immunization schedules",
      "Mobilization of youth health volunteers across Rivers State local government areas",
    ],
    narrative: [
      "No child in Nigeria should suffer from vaccine-preventable illnesses. The Immunization Made Possible for All (IMPA) initiative is a direct response to routine immunization gaps in underserved rural and peri-urban riverine settlements.",
      "Spearheaded by our founder, Senator Dr. Ipalibo Harry Banigo (Chairman of the Senate Committee on Health), the campaign mobilizes frontline healthcare workers, community leaders, and trained youth volunteers to ensure cold-chain vaccines reach every corner.",
      "Through door-to-door community engagement, town-crier advocacy, and festive road shows, IMPA has demystified vaccine hesitancy and ensured hundreds of infants receive their vital childhood immunizations free of charge.",
    ],
  },
  "christmas-with-her-excellency": {
    title: "Annual \"Christmas With Her Excellency\" Community Outreach",
    subtitle: "Festive Welfare, Nutritional Hamper Distribution & Community Praise",
    category: "Community Outreaches",
    date: "25th December 2025 (Annual)",
    location: "Port Harcourt & Obio/Akpor Communities, Rivers State",
    image: "/images/gallery/event-2.jpg",
    secondaryImage: "/images/gallery/event-4.jpg",
    badgeText: "Annual Festive Outreach",
    lead: "An annual holiday celebration hosted by Her Excellency Senator Dr. Mrs. Ipalibo Harry Banigo, gathering hundreds of vulnerable widows, mothers, and young people for holiday fellowship and food relief.",
    collaborators: [
      "Caywood Brown Foundation Leadership Council",
      "Rivers Community Women Associations",
      "Local Volunteer Corps",
    ],
    keyActivities: [
      "Distribution of festive food hampers containing bags of rice, cooking oils, and provisions",
      "Live gospel choir ministrations, praise, and community prayer circles",
      "Personal address and direct interactive listening session with Senator Banigo",
      "Special holiday gift presentations and clothing support for orphans and the elderly",
    ],
    narrative: [
      "For over a decade, Christmas with Her Excellency has been a source of warmth and dignified celebration for families who might otherwise go without during the festive season.",
      "The gathering brings together mothers, market women, youth, and elders across Port Harcourt to share meals, celebrate community resilience, and receive substantial nutritional hampers to take home to their households.",
    ],
  },
  "buni-yadi-idp-relief": {
    title: "Buni Yadi Humanitarian Relief & IDP Support Mission",
    subtitle: "Emergency Family Welfare, Clean Water & Psychosocial Support",
    category: "Humanitarian Relief",
    date: "Humanitarian Field Mission",
    location: "Buni Yadi Settlements & Host Communities",
    image: "/images/gallery/event-1.jpg",
    secondaryImage: "/images/gallery/event-3.jpg",
    badgeText: "Crisis Relief Mission",
    lead: "Deploying emergency field support to internally displaced persons (IDPs) and vulnerable families enduring hardship, providing food supplies, hygiene packs, and maternal counseling under outdoor canopies.",
    collaborators: [
      "Buni Yadi Community Elders",
      "Emergency Relief Volunteer Teams",
      "Frontline Healthcare Volunteers",
    ],
    keyActivities: [
      "Distribution of high-protein food rations and clean drinking water containers",
      "Hygiene packs, blankets, and essential household items for displaced mothers",
      "Maternal and trauma-informed psychosocial counseling circles",
      "Immediate first-aid, triage, and preventative health checks in field canopies",
    ],
    narrative: [
      "Displaced families face unique challenges of nutrition, shelter, and trauma. The Caywood Brown Foundation deployed relief teams to Buni Yadi settlements to directly assist displaced mothers, children, and village elders.",
      "Working closely with local community heads under field canopies, the foundation ensured aid was distributed transparently, equitably, and with deep respect for the dignity of every recipient.",
    ],
  },
  "world-malaria-day-outreach": {
    title: "World Malaria Day & Adolescent Health Road Show",
    subtitle: "#ZeroMalariaStartsWithMe • Invest in Prevention, Invest in Treatment",
    category: "Health & Immunization",
    date: "Annual Public Health Drive",
    location: "Port Harcourt Waterfronts & Rural Primary Schools, Rivers State",
    image: "/images/gallery/workshop-1.jpg",
    secondaryImage: "/images/gallery/workshop-2.jpg",
    badgeText: "Preventative Health Drive",
    lead: "Combining high-visibility awareness walks with door-to-door preventative supplies to curb malaria morbidity among pregnant mothers and school-age adolescents.",
    collaborators: [
      "MedWHOLE Health Network",
      "Adolescent School Health Ambassadors",
      "Primary Healthcare Centers",
    ],
    keyActivities: [
      "Distribution of long-lasting insecticide-treated mosquito bed nets (LLINs)",
      "Free rapid malaria diagnostic testing (RDT) and preventative treatments",
      "Menstrual hygiene kit distribution and sanitation education for adolescent girls",
      "Gutter-desilting and environmental sanitation demonstrations",
    ],
    narrative: [
      "Malaria remains one of the leading causes of school absenteeism and child vulnerability across the Niger Delta. Our annual World Malaria Day road show mobilizes healthcare volunteers and school ambassadors to take prevention directly into waterfront and rural communities.",
    ],
  },
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = eventDetails[id]

  if (!event) {
    notFound()
  }

  return (
    <div className="home-page min-h-screen">
      {/* Hero canopy */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-20 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-28">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c7ed9f] hover:text-[#f6ce40] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all outreaches</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f6ce40] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{event.badgeText}</span>
          </div>

          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,4.2rem)] font-medium leading-[1.12] text-[#faf7f0] max-w-4xl">
            {event.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#f6ce40] font-semibold max-w-2xl">
            {event.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#faf7f0]/80 border-t border-white/15 pt-6">
            <span className="flex items-center gap-2 text-[#c7ed9f] font-semibold">
              <Calendar className="w-4 h-4 text-[#f6ce40]" />
              <span>{event.date}</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f6ce40]" />
              <span>{event.location}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 bg-[#faf7f0]">
        <div className="home-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Main Banner Photo */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-[#00521a]/15 bg-black">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Lead & Narrative */}
              <div className="space-y-6 text-[#173421] text-base sm:text-lg leading-relaxed">
                <p className="font-medium text-xl text-[#00521a] leading-relaxed">
                  {event.lead}
                </p>
                {event.narrative.map((p, idx) => (
                  <p key={idx} className="text-[#173421]/85">
                    {p}
                  </p>
                ))}
              </div>

              {/* Secondary Photo */}
              {event.secondaryImage && (
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-[#00521a]/15">
                  <Image
                    src={event.secondaryImage}
                    alt={`${event.title} field activities`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Key Activities */}
              <div className="bg-white rounded-3xl p-8 border border-[#00521a]/15 shadow-sm space-y-4">
                <h3 className="font-serif text-2xl text-[#173421]">Core Outreach Highlights</h3>
                <ul className="space-y-3">
                  {event.keyActivities.map((act) => (
                    <li key={act} className="flex items-start gap-3 text-sm sm:text-base text-[#173421]/90">
                      <CheckCircle2 className="w-5 h-5 text-[#00521a] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Sidebar: Strategic Allies & Actions */}
            <div className="lg:col-span-4 space-y-8 sticky top-28">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#00521a]/15 shadow-sm space-y-6">
                <h3 className="home-label text-[#00521a]">Strategic Collaborators</h3>
                <div className="flex flex-wrap gap-2">
                  {event.collaborators.map((c) => (
                    <span
                      key={c}
                      className="text-xs bg-[#faf7f0] text-[#173421] px-3 py-1.5 rounded-full border border-[#00521a]/15 font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="border-t border-[#00521a]/10 pt-6 space-y-3">
                  <p className="text-xs text-[#173421]/70 leading-relaxed">
                    Interested in participating, sponsoring materials, or volunteering for this campaign?
                  </p>
                  <Link
                    href="/volunteer"
                    className="home-button w-full inline-flex items-center justify-center gap-2 bg-[#00521a] text-white hover:bg-[#173421] text-xs font-bold uppercase tracking-wider py-3"
                  >
                    <Users className="w-4 h-4" />
                    <span>Volunteer with Us</span>
                  </Link>
                  <Link
                    href="/donate"
                    className="home-button-outline w-full inline-flex items-center justify-center gap-2 border-[#00521a] text-[#00521a] hover:bg-[#00521a] hover:text-white text-xs font-bold uppercase tracking-wider py-3"
                  >
                    <Heart className="w-4 h-4" />
                    <span>Support This Drive</span>
                  </Link>
                </div>
              </div>

              <div className="bg-[#173421] text-[#faf7f0] rounded-3xl p-6 sm:p-8 space-y-4">
                <h4 className="font-serif text-xl text-[#faf7f0]">Have questions about this outreach?</h4>
                <p className="text-xs text-[#faf7f0]/80 leading-relaxed">
                  Reach out directly to our field coordinator desk in Port Harcourt.
                </p>
                <a
                  href="tel:+2348038817059"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f6ce40] hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 803 881 7059</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="home-section closing-section" aria-labelledby="closing-title">
        <div className="home-shell">
          <div className="closing-heading">
            <h2 id="closing-title" className="home-heading">Be part of<br />what comes next.</h2>
            <p className="home-copy">Join hands with us to bring life-saving health, education, and community dignity to families across Rivers State.</p>
          </div>
          <div className="closing-links">
            {[
              { title: "Give a young person a chance", detail: "Support our programmes", href: "/donate" },
              { title: "Share your time and skills", detail: "Volunteer with us", href: "/volunteer" },
              { title: "Start a conversation", detail: "Get in touch", href: "/contact" },
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

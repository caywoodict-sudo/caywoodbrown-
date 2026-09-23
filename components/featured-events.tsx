"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Video, Play } from "lucide-react"

const defaultOutreaches = [
  {
    title: "EVENT RECAP | SSB Tax Breakfast Technical Session 🇳🇬",
    category: "Public Health Legislation & SSB Tax",
    date: "Sep 2026",
    location: "Onomo Allure Hotel, Abuja",
    image: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790167110/caywood-brown/events/ssb-tax-breakfast/ssb-vip-dignitaries-seated.jpg",
    alt: "Senator Dr. Ipalibo Harry Banigo, CAPPA leadership and National Assembly stakeholders at SSB session",
    href: "/events/ssb-tax-breakfast-technical-session"
  },
  {
    title: "World Immunization Day 2025: IMPA Campaign & Road Show",
    category: "Health & Immunization",
    date: "Nov 2025",
    location: "Rivers State",
    image: "/images/hero/impa-banner.jpg",
    alt: "IMPA World Immunization Day campaign banner in Rivers State",
    href: "/events#world-immunization-day-impa"
  },
]

export default function FeaturedEvents() {
  const [spotlight, setSpotlight] = useState({
    title: "National Convergence on Nigeria’s Health Financing Reform Bills: BHCPF (SB.886) & SSB (SB.713)",
    summary: "Convened in Abuja under the Office of the Chairman, Senate Committee on Health, uniting the Federal Ministry of Health, National Assembly, NCDC, and civil society partners to advance sustainable domestic health financing and universal health coverage.",
    image: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790171050/caywood-brown/events/national-convergence/NAT_2910.jpg",
    slug: "national-convergence-health-financing-reform",
    label: "National Landmark Convergence · NTA Broadcast",
    isVideo: true,
  })
  const [outreaches, setOutreaches] = useState(defaultOutreaches)

  useEffect(() => {
    let active = true
    async function loadDbEvents() {
      try {
        const res = await fetch("/api/events")
        if (res.ok) {
          const data = await res.json()
          if (active && data.docs && data.docs.length > 0) {
            const lead = data.docs.find((d: any) => d.slug === "national-convergence-health-financing-reform") || data.docs.find((d: any) => d.isHeroSpotlight) || data.docs[0]
            if (lead) {
              setSpotlight({
                title: lead.title,
                summary: lead.summary || lead.lead,
                image: lead.image || "https://res.cloudinary.com/oudx4ztm/image/upload/v1790171050/caywood-brown/events/national-convergence/NAT_2910.jpg",
                slug: lead.slug,
                label: lead.badgeText || "National Landmark Convergence · NTA Broadcast",
                isVideo: Boolean(lead.videoUrl || lead.slug === "national-convergence-health-financing-reform"),
              })
            }
            const others = data.docs
              .filter((d: any) => d.slug !== lead?.slug)
              .slice(0, 2)
              .map((d: any) => ({
                title: d.title,
                category: d.category || "Community Outreach",
                date: d.date || "Upcoming",
                location: d.location || "Rivers State",
                image: d.image || "/images/events/senator-outreach.png",
                alt: d.title,
                href: d.slug === "ssb-tax-breakfast-technical-session" ? `/events/${d.slug}` : d.slug === "national-convergence-health-financing-reform" ? `/events/${d.slug}` : `/events#${d.slug}`,
              }))
            if (others.length > 0) {
              setOutreaches(others)
            }
          }
        }
      } catch (err) {
        console.warn("Featured events fallback used:", err)
      }
    }
    loadDbEvents()
    return () => { active = false }
  }, [])

  const spotlightHref = spotlight.slug === "national-convergence-health-financing-reform"
    ? `/events/${spotlight.slug}`
    : `/events#${spotlight.slug}`

  return (
    <section className="home-section field-section" aria-labelledby="events-heading">
      <div className="home-shell">
        <div className="section-heading-row">
          <div>
            <p className="home-label section-kicker">Field Operations &amp; Legislative Advocacy</p>
            <h2 id="events-heading" className="home-heading">Standing With<br />Our Communities.</h2>
          </div>
          <Link href="/events" className="home-link">All events &amp; outreaches <ArrowRight size={18} /></Link>
        </div>
        <article className="field-feature">
          <Link href={spotlightHref} className="field-feature-photo relative group" aria-label={`Read about ${spotlight.title}`}>
            <Image
              src={spotlight.image}
              alt={spotlight.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 700px) 100vw, 60vw"
            />
            <span className="field-photo-label">{spotlight.label}</span>
            {spotlight.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/15 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#f6ce40] text-[#12291b] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
            )}
          </Link>
          <div className="field-feature-copy">
            <p className="home-label flex items-center gap-1.5">
              {spotlight.isVideo && <Video className="w-3.5 h-3.5 text-[#df6827]" />}
              <span>{spotlight.label}</span>
            </p>
            <h3 style={{ whiteSpace: "pre-line" }}>{spotlight.title}</h3>
            <p>{spotlight.summary}</p>
            <Link href={spotlightHref} className="home-link">
              <span>{spotlight.isVideo ? "Watch NTA Broadcast & View 50 Photos" : "Explore the campaign"}</span>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </article>
        <div className="field-secondary">
          {outreaches.map(story => (
            <article key={story.href}>
              <Link href={story.href} className="field-secondary-photo" aria-label={story.title}>
                <Image src={story.image} alt={story.alt} fill className="object-cover" sizes="(max-width: 700px) 100vw, 50vw" />
              </Link>
              <div className="field-story-caption">
                <div>
                  <p className="home-label">{story.category}</p>
                  <h3><Link href={story.href}>{story.title}</Link></h3>
                  {story.date && story.location && (
                    <p className="text-xs mt-1.5 opacity-80 font-medium">
                      {`${story.date} · ${story.location}`}
                    </p>
                  )}
                </div>
                <div className="field-story-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

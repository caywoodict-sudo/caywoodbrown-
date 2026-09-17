"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const defaultOutreaches = [
  {
    title: "Annual Christmas with Her Excellency",
    category: "Community Welfare & Praise Gathering",
    image: "/images/events/senator-outreach.png",
    alt: "Senator Dr. Ipalibo Harry Banigo engaging with community members during Christmas outreach",
    href: "/events#christmas-with-her-excellency"
  },
  {
    title: "Buni Yadi Humanitarian Relief & IDP Mission",
    category: "Crisis Relief & Family Care",
    image: "/images/events/muslim-women-outreach.png",
    alt: "Families and mothers receiving essential care and food relief",
    href: "/events#buni-yadi-idp-relief"
  },
]

export default function FeaturedEvents() {
  const [spotlight, setSpotlight] = useState({
    title: "World Immunization Day:\nProtection For Every Child.",
    summary: "Under the IMPA initiative, in collaboration with the Senate Committee on Health and international health partners, we mobilize youth volunteers and medical teams to deliver life-saving vaccines to children across Rivers State.",
    image: "/images/events/impa-banner.jpg",
    slug: "world-immunization-day-impa",
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
            const impa = data.docs.find((d: any) => d.slug === "world-immunization-day-impa" || d.isHeroSpotlight)
            if (impa) {
              setSpotlight({
                title: "World Immunization Day:\nProtection For Every Child.",
                summary: impa.summary || impa.lead,
                image: impa.image || "/images/events/impa-banner.jpg",
                slug: impa.slug,
              })
            }
            const others = data.docs
              .filter((d: any) => d.slug !== (impa?.slug || "world-immunization-day-impa"))
              .slice(0, 2)
              .map((d: any) => ({
                title: d.title,
                category: d.category || "Community Outreach",
                image: d.image || "/images/events/senator-outreach.png",
                alt: d.title,
                href: `/events#${d.slug}`,
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

  return (
    <section className="home-section field-section" aria-labelledby="events-heading">
      <div className="home-shell">
        <div className="section-heading-row">
          <div>
            <p className="home-label section-kicker">Field Operations &amp; Campaigns</p>
            <h2 id="events-heading" className="home-heading">Standing With<br />Our Communities.</h2>
          </div>
          <Link href="/events" className="home-link">All events &amp; outreaches <ArrowRight size={18} /></Link>
        </div>
        <article className="field-feature">
          <Link href={`/events#${spotlight.slug}`} className="field-feature-photo" aria-label="Read about World Immunization Day">
            <Image
              src={spotlight.image}
              alt="IMPA World Immunization Day campaign banner in Rivers State"
              fill
              className="object-cover"
              sizes="(max-width: 700px) 100vw, 60vw"
            />
            <span className="field-photo-label">Flagship Health Campaign</span>
          </Link>
          <div className="field-feature-copy">
            <p className="home-label">Campaign Spotlight · IMPA</p>
            <h3 style={{ whiteSpace: "pre-line" }}>{spotlight.title}</h3>
            <p>{spotlight.summary}</p>
            <Link href={`/events#${spotlight.slug}`} className="home-link">Explore the campaign <ArrowUpRight size={19} /></Link>
          </div>
        </article>
        <div className="field-secondary">
          {outreaches.map(story => (
            <article key={story.href}>
              <Link href={story.href} className="field-secondary-photo" aria-label={story.title}>
                <Image src={story.image} alt={story.alt} fill className="object-cover" sizes="(max-width: 700px) 100vw, 50vw" />
              </Link>
              <div className="field-story-caption">
                <div><p className="home-label">{story.category}</p><h3><Link href={story.href}>{story.title}</Link></h3></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { getCloudinaryUrl } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

const fallbackPrograms = [
  {
    id: "computer-appreciation",
    slug: "computer-appreciation",
    title: "Computer Appreciation & Office Productivity",
    pillar: "Digital Inclusion",
    thematicPillar: "digital-economy",
    status: "active",
    partner: "Google & Tech Allies",
    description: "Free, beginner-friendly training equipping young people with computing fundamentals, typing dexterity, Microsoft Office competency, and internet research skills.",
    summary: "Free, beginner-friendly training equipping young people with computing fundamentals, typing dexterity, Microsoft Office competency, and internet research skills.",
    image: "/images/programs/computer-lab.jpg",
    href: "/programs/computer-appreciation",
    highlights: ["12-Week Practical Lab Cohorts", "100% Tuition-Free Workstations", "Office Software Certification"],
  },
  {
    id: "music-training",
    slug: "music-training",
    title: "Creative Arts, Drumming & Music Training",
    pillar: "Creative Expression",
    thematicPillar: "music",
    status: "active",
    partner: "Rivers State Creative Guild",
    description: "Hands-on studio music training nurturing young talent in drum kit mastery, keyboard chord progressions, vocal control, and digital audio mixing.",
    summary: "Hands-on studio music training nurturing young talent in drum kit mastery, keyboard chord progressions, vocal control, and digital audio mixing.",
    image: "/images/hero/website-banner.png",
    href: "/programs/music-training",
    highlights: ["Live Performance Skills", "Digital Audio Workstation Intro", "Mentorship with Musicians"],
  },
  {
    id: "youth-rehabilitation",
    slug: "youth-rehabilitation",
    title: "Youth Rehabilitation & Social Reintegration",
    pillar: "Dignity & Recovery",
    thematicPillar: "rehabilitation",
    status: "active",
    partner: "National Drug Law Enforcement & Health Specialists",
    description: "Comprehensive recovery support for youth battling substance abuse, offering confidential cognitive behavioral counseling, peer therapy, and family reconciliation.",
    summary: "Comprehensive recovery support for youth battling substance abuse, offering confidential cognitive behavioral counseling, peer therapy, and family reconciliation.",
    image: "/images/community/field-visit-2.jpg",
    href: "/programs/youth-rehabilitation",
    highlights: ["Clinical Psychosocial Therapy", "Relapse Prevention Support", "Dignified Community Reintegration"],
  },
  {
    id: "volunteerism-academy",
    slug: "volunteerism-academy",
    title: "Volunteerism Academy & Corporate Internships",
    pillar: "Workforce Readiness",
    thematicPillar: "volunteerism",
    status: "active",
    partner: "Rivers State Private Sector Forum & Corporate Partners",
    description: "Structured career development pairing university graduates with 6-month corporate internships across leading industrial partners.",
    summary: "Structured career development pairing university graduates with 6-month corporate internships across leading industrial partners.",
    image: "/images/programs/volunteer-academy.jpg",
    href: "/programs/volunteerism-academy",
    highlights: ["6-Month Paid Corporate Placements", "ATS Resume & Interview Coaching", "80%+ Direct Employment Transition"],
  },
  {
    id: "youth-health-awareness",
    slug: "youth-health-awareness",
    title: "Youth Health, Wellness & Routine Immunization",
    pillar: "Public Health",
    thematicPillar: "health",
    status: "active",
    partner: "Senate Committee on Health & Rivers State Ministry of Health",
    description: "School-based wellness assemblies, menstrual hygiene advocacy, and community road shows promoting childhood immunization under our IMPA initiative.",
    summary: "School-based wellness assemblies, menstrual hygiene advocacy, and community road shows promoting childhood immunization under our IMPA initiative.",
    image: "/images/gallery/workshop-2.jpg",
    href: "/programs/youth-health-awareness",
    highlights: ["Routine Vaccine Awareness", "Menstrual Hygiene Kit Distributions", "School Health Club Mentorship"],
  },
  {
    id: "girl-child-advocacy",
    slug: "girl-child-advocacy",
    title: "Girl Child Advocacy, STEM & Mentorship",
    pillar: "Gender Equity",
    thematicPillar: "advocacy",
    status: "active",
    partner: "Women in Leadership Alliance",
    description: "Empowering young girls through educational retention scholarships, leadership development, STEM mentorship, and advocacy for the Child Rights Act.",
    summary: "Empowering young girls through educational retention scholarships, leadership development, STEM mentorship, and advocacy for the Child Rights Act.",
    image: "/images/hero/cbf-banner-2.png",
    href: "/programs/girl-child-advocacy",
    highlights: ["Full School Retention Scholarships", "Assertive Leadership Labs", "Protection Against Early Marriage"],
  },
]

export async function GET() {
  try {
    const payload = await getPayloadClient()
    if (!payload) {
      return NextResponse.json({
        success: true,
        source: 'static_fallback',
        docs: fallbackPrograms,
      })
    }

    const { docs } = await payload.find({
      collection: 'programs',
      limit: 50,
    })

    if (!docs || docs.length === 0) {
      return NextResponse.json({
        success: true,
        source: 'fallback_empty_db',
        docs: fallbackPrograms,
      })
    }

    const formattedDocs = docs.map((doc: any) => {
      const matching = fallbackPrograms.find((p) => p.slug === doc.slug) || {}
      return {
        id: doc.slug || String(doc.id),
        slug: doc.slug || String(doc.id),
        title: doc.title,
        pillar: matching.pillar || 'Empowerment',
        thematicPillar: doc.thematicPillar || matching.thematicPillar,
        status: doc.status || 'active',
        partner: doc.partner || matching.partner,
        description: doc.summary || matching.description,
        summary: doc.summary || matching.summary,
        image: typeof doc.heroImage === 'object' && doc.heroImage?.url ? doc.heroImage.url : getCloudinaryUrl(matching.image || '/images/programs/computer-lab.jpg'),
        href: `/programs/${doc.slug}`,
        highlights: matching.highlights || ['Practical Hands-On Learning', 'Certified Mentorship', 'Community-Centered'],
      }
    })

    return NextResponse.json({
      success: true,
      source: 'database',
      docs: formattedDocs,
    })
  } catch (error: any) {
    console.error('API /programs error:', error)
    return NextResponse.json({
      success: true,
      source: 'fallback_on_error',
      docs: fallbackPrograms,
    })
  }
}

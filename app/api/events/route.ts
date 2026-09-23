import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { getCloudinaryUrl } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

const fallbackEvents = [
  {
    id: "world-immunization-day-impa",
    slug: "world-immunization-day-impa",
    title: "World Immunization Day 2025: Integrated Vaccination Campaign & Road Show",
    subtitle: "IMPA: Immunization Made Possible for All • \"Immunization For All Is Humanly Possible\"",
    category: "Health & Immunization",
    date: "10th November 2025",
    eventDate: "2025-11-10T09:00:00.000Z",
    location: "Primary Health Centres, Road Shows & Community Hubs, Rivers State",
    lead: "In collaboration with the Senate Committee on Health and leading international global health allies, the Caywood Brown Foundation conducts comprehensive immunization outreaches to ensure every child receives life-saving vaccines.",
    summary: "In collaboration with the Senate Committee on Health and leading international global health allies, the Caywood Brown Foundation conducts comprehensive immunization outreaches to ensure every child receives life-saving vaccines.",
    image: "/images/events/impa-banner.jpg",
    secondaryImage: "/images/events/impa-volunteers.jpg",
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
    featuredOnHome: true,
  },
  {
    id: "christmas-with-her-excellency",
    slug: "christmas-with-her-excellency",
    title: "Annual \"Christmas With Her Excellency\" Community Outreach",
    subtitle: "Holiday Welfare, Food Security & Community Praise Gathering",
    category: "Community Outreaches",
    date: "25th December 2025 (Annual)",
    eventDate: "2025-12-25T10:00:00.000Z",
    location: "Port Harcourt & Obio/Akpor Communities, Rivers State",
    lead: "Hosted by Her Excellency Senator Dr. Mrs. Ipalibo Harry Banigo, this annual holiday outreach brings festive relief, community meals, nutritional food baskets, and joyful gospel praise to hundreds of vulnerable households.",
    summary: "Hosted by Her Excellency Senator Dr. Mrs. Ipalibo Harry Banigo, this annual holiday outreach brings festive relief, community meals, nutritional food baskets, and joyful gospel praise to hundreds of vulnerable households.",
    image: "/images/events/senator-outreach.png",
    secondaryImage: "/images/events/cbf-visit.jpg",
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
    featuredOnHome: true,
  },
  {
    id: "buni-yadi-idp-relief",
    slug: "buni-yadi-idp-relief",
    title: "Buni Yadi Humanitarian Relief & IDP Support Mission",
    subtitle: "Emergency Family Care, Nutrition & Maternal Psychosocial Support",
    category: "Humanitarian Relief",
    date: "Humanitarian Field Mission",
    eventDate: "2025-08-15T09:00:00.000Z",
    location: "Buni Yadi Settlements & Host Communities",
    lead: "Deploying rapid field relief to internally displaced persons and vulnerable families enduring hardship, providing essential food rations, medical triage, and dignified relief under outdoor community field canopies.",
    summary: "Deploying rapid field relief to internally displaced persons and vulnerable families enduring hardship, providing essential food rations, medical triage, and dignified relief under outdoor community field canopies.",
    image: "/images/events/muslim-women-outreach.png",
    secondaryImage: "/images/events/community-medical-1.jpg",
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
    featuredOnHome: true,
  },
  {
    id: "digital-skills-bootcamp",
    slug: "digital-skills-bootcamp",
    title: "Niger Delta Youth Digital Skills Bootcamp & ICT Lab Launch",
    subtitle: "Tuition-Free Computer Literacy & Google Skills Cohort",
    category: "Skills Camp & Bootcamps",
    date: "20th September 2025",
    eventDate: "2025-09-20T09:00:00.000Z",
    location: "Caywood Brown Foundation HQ & Tech Lab, Port Harcourt",
    lead: "Tuition-free intensive training cohort equipping 100+ youth with practical computer appreciation, cloud productivity, web development, and digital marketing skills.",
    summary: "Tuition-free intensive training cohort equipping 100+ youth with practical computer appreciation, cloud productivity, web development, and digital marketing skills.",
    image: "/images/programs/computer-lab.jpg",
    secondaryImage: "/images/programs/google-training.png",
    badgeText: "Digital Workforce Cohort",
    collaborators: [
      "Google Digital Skills for Africa",
      "Rivers State ICT Development Guild",
      "Caywood Brown Volunteer Mentors",
    ],
    keyActivities: [
      "Full workstation onboarding with Microsoft Office & Google Workspace",
      "Coding fundamentals and web design masterclasses",
      "Resume refinement and digital freelancing portfolio setup",
      "Direct placement in Volunteerism Academy internship pool",
    ],
    featuredOnHome: true,
  },
]

export async function GET() {
  try {
    const payload = await getPayloadClient()
    if (!payload) {
      return NextResponse.json({
        success: true,
        source: 'static_fallback',
        docs: fallbackEvents,
      })
    }

    const { docs } = await payload.find({
      collection: 'events',
      limit: 50,
    })

    if (!docs || docs.length === 0) {
      // Auto-seed into DB if empty
      for (const evt of fallbackEvents) {
        try {
          await payload.create({
            collection: 'events',
            data: {
              title: evt.title,
              slug: evt.slug,
              category: evt.category.includes('Health') ? 'health' : evt.category.includes('Relief') ? 'relief' : evt.category.includes('Skills') ? 'skills' : 'outreach',
              eventDate: evt.eventDate,
              location: evt.location,
              summary: evt.summary,
              featuredOnHome: evt.featuredOnHome,
            },
          })
        } catch {
          // ignore duplicate insert errors
        }
      }

      return NextResponse.json({
        success: true,
        source: 'database_seeded',
        docs: fallbackEvents,
      })
    }

    // Map payload docs into format expected by UI
    const formattedDocs = docs.map((doc: any) => {
      const matchingFallback = fallbackEvents.find((f) => f.slug === doc.slug) || {}
      return {
        id: doc.slug || String(doc.id),
        slug: doc.slug || String(doc.id),
        title: doc.title,
        subtitle: matchingFallback.subtitle || `Official Campaign • ${doc.location}`,
        category: doc.category === 'health' ? 'Health & Immunization' : doc.category === 'relief' ? 'Humanitarian Relief' : doc.category === 'skills' ? 'Skills Camp & Bootcamps' : 'Community Outreaches',
        date: doc.eventDate ? new Date(doc.eventDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : matchingFallback.date || 'Upcoming',
        eventDate: doc.eventDate,
        location: doc.location,
        lead: doc.summary,
        summary: doc.summary,
        image: typeof doc.coverImage === 'object' && doc.coverImage?.url ? doc.coverImage.url : getCloudinaryUrl(matchingFallback.image || '/images/events/impa-banner.jpg'),
        secondaryImage: getCloudinaryUrl(matchingFallback.secondaryImage || '/images/events/impa-volunteers.jpg'),
        badgeText: matchingFallback.badgeText || 'Official Foundation Event',
        collaborators: matchingFallback.collaborators || ['Caywood Brown Foundation Leadership', 'Community Partners'],
        keyActivities: matchingFallback.keyActivities || ['Community engagement and youth mobilization', 'Direct beneficiary support and resources'],
        isHeroSpotlight: doc.slug === 'world-immunization-day-impa' || matchingFallback.isHeroSpotlight || false,
        featuredOnHome: doc.featuredOnHome ?? matchingFallback.featuredOnHome ?? true,
      }
    })

    return NextResponse.json({
      success: true,
      source: 'database',
      docs: formattedDocs,
    })
  } catch (error: any) {
    console.error('API /events error:', error)
    return NextResponse.json({
      success: true,
      source: 'fallback_on_error',
      docs: fallbackEvents,
    })
  }
}

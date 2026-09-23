import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { getCloudinaryUrl } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

const fallbackEvents = [
  {
    id: "national-convergence-health-financing-reform",
    slug: "national-convergence-health-financing-reform",
    title: "National Convergence on Nigeria’s Health Financing Reform Bills: BHCPF (SB.886) & SSB (SB.713)",
    subtitle: "Strengthening Sustainable Domestic Health Financing for Universal Health Coverage: Leveraging the SSB Tax and the BHCPF",
    category: "Public Health Policy & Advocacy",
    date: "17th September 2026",
    eventDate: "2026-09-17T09:00:00.000Z",
    location: "Banquet Hall, Onomo Allure Abuja",
    lead: "Organised by the Caywood Brown Foundation through the Office of the Chairman, Senate Committee on Health (Secondary and Tertiary), bringing together the Coordinating Minister of Health, Special Adviser to the President on Health, NCDC, National Assembly leaders, and health finance ecosystem stakeholders.",
    summary: "Stakeholders across Nigeria’s health and public finance ecosystem converged in Abuja on Thursday, 17 September 2026, for the National Convergence on Nigeria’s Health Financing Reform Bills (SB.886 and SB.713) to advance sustainable domestic health financing and universal health coverage.",
    image: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790171050/caywood-brown/events/national-convergence/NAT_2910.jpg",
    secondaryImage: "https://res.cloudinary.com/oudx4ztm/image/upload/v1790170847/caywood-brown/events/national-convergence/NAT_2847.jpg",
    videoUrl: "https://res.cloudinary.com/oudx4ztm/video/upload/v1790171087/caywood-brown/videos/national-convergence-health-financing.mp4",
    badgeText: "National Landmark Convergence · NTA Broadcast",
    collaborators: [
      "Office of the Chairman, Senate Committee on Health (Secondary & Tertiary)",
      "Federal Ministry of Health and Social Welfare (Prof. Muhammad Ali Pate)",
      "Special Adviser to the President on Health (Dr. Salma Ibrahim Anas)",
      "Nigeria Centre for Disease Control (NCDC, Dr. Jide Idris)",
      "House Committee on Healthcare Services (Hon. Amos Magaji)",
      "Vaccine Network for Disease Control (Chika Offor)",
      "Global Health Advocacy Incubator (GHAI, Prof. Emmanuel Alhassan)",
      "World Health Organization (WHO)",
      "SCIDaR & Clinton Health Access Initiative (CHAI)",
    ],
    keyActivities: [
      "Keynote addresses by Minister of Health Prof. Muhammad Ali Pate and Special Adviser Dr. Salma Ibrahim Anas",
      "Parliamentary address by Senate Committee on Health Chairman Senator Dr. Ipalibo Harry Banigo",
      "Strategic roadmap formulation for House concurrence on SB.886 (BHCPF from 1% to 2%) and SB.713 (SSB Tax)",
      "Full NTA News 24 special broadcast coverage of convergence proceedings",
      "Adoption of the 7-Point Communiqué Commitments for Action",
    ],
    isHeroSpotlight: true,
    featuredOnHome: true,
  },
  {
    id: "ssb-tax-breakfast-technical-session",
    slug: "ssb-tax-breakfast-technical-session",
    title: "EVENT RECAP | SSB TAX BREAKFAST TECHNICAL SESSION 🇳🇬",
    subtitle: "Advancing Public-Health Approaches to SSB Taxation & Sustainable Domestic Health Financing",
    category: "Public Health Policy & Advocacy",
    date: "September 2026",
    eventDate: "2026-09-23T08:30:00.000Z",
    location: "AATC Onomo Allure Hotels, Abuja",
    lead: "The Caywood Brown Foundation (CBF) and Corporate Accountability and Public Participation Africa (CAPPA) co-hosted a Breakfast Technical Session on the finalisation of the Sugar-Sweetened Beverages (SSB) Legislation (SB.713).",
    summary: "The Caywood Brown Foundation (CBF) and Corporate Accountability and Public Participation Africa (CAPPA) co-hosted a Breakfast Technical Session on the finalisation of the Sugar-Sweetened Beverages (SSB) Legislation to deliberate on legislative pathways, strengthen consensus, and advance a public-health approach to SSB taxation for non-communicable disease prevention and sustainable health financing.",
    image: "/images/events/ssb-tax-breakfast/ssb-vip-dignitaries-seated.jpg",
    secondaryImage: "/images/events/ssb-tax-breakfast/ssb-banigo-keynote-podium.jpg",
    badgeText: "High-Level Policy Recap",
    collaborators: [
      "Corporate Accountability and Public Participation Africa (CAPPA)",
      "Senate Committee on Health (10th National Assembly)",
      "Sponsor of SB.713 (Customs & Excise Tariff Amendment Bill)",
      "Civil Society Health Advocates & Technical Experts",
    ],
    keyActivities: [
      "Keynote legislative address delivered by Founder Senator Dr. Ipalibo Harry Banigo",
      "Multi-stakeholder technical deliberations on SB.713 legislative pathways",
      "Consensus-building on domestic revenue earmarks for non-communicable disease prevention",
      "Issuance of joint CBF & CAPPA policy communiqué to the 10th National Assembly",
    ],
    isHeroSpotlight: false,
    featuredOnHome: true,
  },
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

    // Auto-seed any missing fallback events into Payload DB
    const existingSlugs = new Set((docs || []).map((d: any) => d.slug))
    for (const evt of fallbackEvents) {
      if (!existingSlugs.has(evt.slug)) {
        try {
          await payload.create({
            collection: 'events',
            data: {
              title: evt.title,
              slug: evt.slug,
              category: evt.category.includes('Policy') || evt.category.includes('Advocacy') ? 'advocacy' : evt.category.includes('Health') ? 'health' : evt.category.includes('Relief') ? 'relief' : evt.category.includes('Skills') ? 'skills' : 'outreach',
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
    }

    // Refresh docs after ensuring all exist
    const { docs: allDocs } = await payload.find({
      collection: 'events',
      limit: 50,
    })

    const finalDocsList = allDocs && allDocs.length > 0 ? allDocs : docs

    // Map payload docs into format expected by UI
    const formattedDocs = (finalDocsList || []).map((doc: any) => {
      const matchingFallback = fallbackEvents.find((f) => f.slug === doc.slug) || {}
      return {
        id: doc.slug || String(doc.id),
        slug: doc.slug || String(doc.id),
        title: doc.title,
        subtitle: matchingFallback.subtitle || `Official Campaign • ${doc.location}`,
        category: doc.category === 'advocacy' ? 'Public Health Policy & Advocacy' : doc.category === 'health' ? 'Health & Immunization' : doc.category === 'relief' ? 'Humanitarian Relief' : doc.category === 'skills' ? 'Skills Camp & Bootcamps' : 'Community Outreaches',
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

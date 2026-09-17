import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return handleSeed()
}

export async function POST() {
  return handleSeed()
}

async function handleSeed() {
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@/payload.config')).default
    const payload = await getPayload({ config })
    const results: Record<string, any> = {
      adminUser: null,
      eventsSeeded: 0,
      programsSeeded: 0,
    }

    // 1. Seed or Verify Admin User
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.totalDocs === 0) {
      const adminUser = await payload.create({
        collection: 'users',
        data: {
          name: 'Foundation Administrator',
          email: 'caywoodbrowndocs@gmail.com',
          password: 'CaywoodBrown2006!',
          role: 'admin',
        },
      })
      results.adminUser = {
        created: true,
        email: adminUser.email,
        note: 'Default password set to: CaywoodBrown2006! (Please change after first login)',
      }
    } else {
      results.adminUser = {
        created: false,
        message: 'Admin user already exists in database',
        totalUsers: existingUsers.totalDocs,
      }
    }

    // 2. Seed Official Foundation Events
    const eventsToSeed = [
      {
        title: 'World Immunization Day 2025: Integrated Vaccination Campaign & Road Show',
        slug: 'world-immunization-day-impa',
        category: 'health' as const,
        eventDate: '2025-11-10T09:00:00.000Z',
        location: 'Primary Health Centres, Road Shows & Community Hubs, Rivers State',
        summary: 'In collaboration with the Senate Committee on Health and international health allies, the Caywood Brown Foundation conducts comprehensive immunization outreaches ensuring every child receives life-saving vaccines under the IMPA initiative.',
        featuredOnHome: true,
      },
      {
        title: 'Annual "Christmas With Her Excellency" Community Outreach',
        slug: 'christmas-with-her-excellency',
        category: 'outreach' as const,
        eventDate: '2025-12-25T10:00:00.000Z',
        location: 'Port Harcourt & Obio/Akpor Communities, Rivers State',
        summary: 'Annual festive outreach bringing holiday welfare, nutritional food baskets, community meals, and joyful praise gatherings to hundreds of vulnerable households.',
        featuredOnHome: true,
      },
      {
        title: 'Buni Yadi Humanitarian Relief & IDP Support Mission',
        slug: 'buni-yadi-idp-relief',
        category: 'relief' as const,
        eventDate: '2025-08-15T09:00:00.000Z',
        location: 'Buni Yadi Settlements & Host Communities',
        summary: 'Rapid emergency field relief providing essential food rations, medical triage, hygiene packs, and maternal psychosocial counselling to displaced families.',
        featuredOnHome: true,
      },
      {
        title: 'Niger Delta Youth Digital Skills Bootcamp & ICT Lab Launch',
        slug: 'digital-skills-bootcamp',
        category: 'skills' as const,
        eventDate: '2025-09-20T09:00:00.000Z',
        location: 'Caywood Brown Foundation HQ & Tech Lab, Port Harcourt',
        summary: 'Tuition-free intensive training cohort equipping youth with practical computer appreciation, cloud productivity, web development, and digital marketing skills.',
        featuredOnHome: true,
      },
    ]

    for (const evt of eventsToSeed) {
      const existing = await payload.find({
        collection: 'events',
        where: {
          slug: {
            equals: evt.slug,
          },
        },
      })

      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'events',
          data: evt,
        })
        results.eventsSeeded++
      }
    }

    // 3. Seed 6 Core Programs
    const programsToSeed = [
      {
        title: 'Computer Appreciation & Digital Economy Training',
        slug: 'computer-appreciation',
        thematicPillar: 'digital-economy' as const,
        status: 'active' as const,
        summary: 'Equipping youth with practical computer literacy, office suite proficiency, data entry, coding fundamentals, and freelancing skills.',
        partner: 'Google & Tech Allies',
        modules: [
          {
            moduleNumber: 'Module 01',
            title: 'Foundations of Computing & Digital Literacy',
            duration: 'Weeks 1 - 2',
            description: 'Core computer architecture, operating systems, file structures, and Internet fundamentals.',
          },
          {
            moduleNumber: 'Module 02',
            title: 'Productivity Suites & Cloud Collaboration',
            duration: 'Weeks 3 - 4',
            description: 'Word processing, spreadsheets, data analysis, presentations, and Google Workspace.',
          },
          {
            moduleNumber: 'Module 03',
            title: 'Modern Digital Workplace & Career Readiness',
            duration: 'Weeks 5 - 6',
            description: 'Remote collaboration tools, portfolio creation, freelance platforms, and online ethics.',
          },
        ],
      },
      {
        title: 'Creative Arts & Music Production Academy',
        slug: 'music-training',
        thematicPillar: 'music' as const,
        status: 'active' as const,
        summary: 'Practical instrumental training (piano, drums, guitar, saxophone) and professional sound engineering in our Port Harcourt creative studio.',
        partner: 'Rivers State Creative Guild',
        modules: [
          {
            moduleNumber: 'Module 01',
            title: 'Music Theory & Ear Training',
            duration: 'Weeks 1 - 2',
            description: 'Scales, chord progressions, notation reading, and rhythm.',
          },
          {
            moduleNumber: 'Module 02',
            title: 'Applied Instrument Masterclasses',
            duration: 'Weeks 3 - 6',
            description: 'Intensive daily practice on chosen instrument with studio mentors.',
          },
        ],
      },
      {
        title: 'Youth Rehabilitation, Guidance & Counseling',
        slug: 'youth-rehabilitation',
        thematicPillar: 'rehabilitation' as const,
        status: 'active' as const,
        summary: 'Compassionate, confidential psychosocial support, substance abuse counseling, and vocational reintegration for at-risk youth.',
        partner: 'National Drug Law Enforcement & Health Specialists',
      },
      {
        title: 'Youth Health Awareness & Preventive Care',
        slug: 'youth-health-awareness',
        thematicPillar: 'health' as const,
        status: 'active' as const,
        summary: 'Community and school outreaches on adolescent sexual health, hygiene, mental wellbeing, and disease prevention.',
        partner: 'Senate Committee on Health & Rivers State Ministry of Health',
      },
      {
        title: 'Her Voice, Her Power (Girl-Child Advocacy)',
        slug: 'girl-child-advocacy',
        thematicPillar: 'advocacy' as const,
        status: 'active' as const,
        summary: 'Empowering young women through mentorship, STEM education, hygiene kits, reproductive rights education, and leadership camps.',
        partner: 'Women in Leadership Alliance',
      },
      {
        title: 'Volunteerism & Civic Leadership Academy',
        slug: 'volunteerism-academy',
        thematicPillar: 'volunteerism' as const,
        status: 'active' as const,
        summary: 'Structured leadership curriculum, community outreach corps, and 6-month graduate career internship placements.',
        partner: 'Rivers State Private Sector Forum',
      },
    ]

    for (const prog of programsToSeed) {
      const existing = await payload.find({
        collection: 'programs',
        where: {
          slug: {
            equals: prog.slug,
          },
        },
      })

      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'programs',
          data: prog,
        })
        results.programsSeeded++
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully with official Caywood Brown Foundation records!',
      results,
    })
  } catch (error: any) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to seed database',
      },
      { status: 500 }
    )
  }
}

const path = require('path');
const crypto = require('crypto');
const { Pool } = require(path.resolve(__dirname, '../node_modules/.pnpm/pg@8.20.0/node_modules/pg'));

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_ZHkfXNM4jys2@ep-mute-math-b4n1z651-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

function hashPassword(password) {
  const salt = crypto.randomBytes(32).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 25000, 512, 'sha256').toString('hex');
  return { salt, hash };
}

async function seed() {
  console.log('=== SEEDING CAYWOOD BROWN FOUNDATION DATABASE ===\n');
  const now = new Date().toISOString();

  try {
    // 1. ADMIN USER
    console.log('1. Checking Admin User...');
    const userCheck = await pool.query("SELECT id, email FROM users WHERE email = 'caywoodbrowndocs@gmail.com'");
    if (userCheck.rows.length === 0) {
      const { salt, hash } = hashPassword('CaywoodBrown2006!');
      const userRes = await pool.query(`
        INSERT INTO users (name, role, email, salt, hash, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, email
      `, ['Foundation Administrator', 'admin', 'caywoodbrowndocs@gmail.com', salt, hash, now, now]);
      console.log(`-> Created Admin User: ${userRes.rows[0].email} (ID: ${userRes.rows[0].id})`);
      console.log('   Password: CaywoodBrown2006!\n');
    } else {
      console.log(`-> Admin User already exists: ${userCheck.rows[0].email} (ID: ${userCheck.rows[0].id})\n`);
    }

    // 2. MEDIA RECORDS
    console.log('2. Inserting Media Assets & Pictures...');
    const mediaFiles = [
      {
        alt: 'World Immunization Day IMPA Banner',
        caption: 'Flagship World Immunization Day campaign banner in Rivers State',
        url: '/images/events/impa-banner.jpg',
        filename: 'impa-banner.jpg',
        mime_type: 'image/jpeg',
      },
      {
        alt: 'IMPA Healthcare Volunteers and Workers',
        caption: 'Volunteer healthcare workers during immunization outreach',
        url: '/images/events/impa-volunteers.jpg',
        filename: 'impa-volunteers.jpg',
        mime_type: 'image/jpeg',
      },
      {
        alt: 'IMPA Official Campaign Flyer',
        caption: 'Immunization Made Possible for All community notice',
        url: '/images/events/impa-flyer.jpg',
        filename: 'impa-flyer.jpg',
        mime_type: 'image/jpeg',
      },
      {
        alt: 'Caywood Brown Computer Training Lab',
        caption: 'Students practicing in our tuition-free digital literacy laboratory',
        url: '/images/programs/computer-lab.jpg',
        filename: 'computer-lab.jpg',
        mime_type: 'image/jpeg',
      },
      {
        alt: 'Volunteerism Academy Cohort',
        caption: 'Youth leaders undergoing field and career development training',
        url: '/images/programs/volunteer-academy.jpg',
        filename: 'volunteer-academy.jpg',
        mime_type: 'image/jpeg',
      },
      {
        alt: 'Community Outreach Delegation',
        caption: 'Partnership and community visit at foundation headquarters',
        url: '/images/events/cbf-visit.jpg',
        filename: 'cbf-visit.jpg',
        mime_type: 'image/jpeg',
      },
      {
        alt: 'Founder Senator Dr. Ipalibo Harry Banigo Field Outreach',
        caption: 'Senator Dr. Ipalibo Banigo engaging directly with community mothers',
        url: '/images/events/senator-outreach.png',
        filename: 'senator-outreach.png',
        mime_type: 'image/png',
      },
      {
        alt: 'Inclusive Community Outreach for Mothers',
        caption: 'Empowering mothers and families during festive community relief',
        url: '/images/events/muslim-women-outreach.png',
        filename: 'muslim-women-outreach.png',
        mime_type: 'image/png',
      },
      {
        alt: 'Community Medical Outreach & Examination',
        caption: 'Free health checks and basic medical assistance in Rivers State',
        url: '/images/events/community-medical-1.jpg',
        filename: 'community-medical-1.jpg',
        mime_type: 'image/jpeg',
      },
    ];

    const mediaMap = {};
    for (const m of mediaFiles) {
      const existing = await pool.query('SELECT id FROM media WHERE filename = $1', [m.filename]);
      if (existing.rows.length === 0) {
        const res = await pool.query(`
          INSERT INTO media (alt, caption, url, filename, mime_type, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING id, filename
        `, [m.alt, m.caption, m.url, m.filename, m.mime_type, now, now]);
        mediaMap[m.filename] = res.rows[0].id;
        console.log(`-> Added Media: ${m.filename} (ID: ${res.rows[0].id})`);
      } else {
        mediaMap[m.filename] = existing.rows[0].id;
        console.log(`-> Media exists: ${m.filename} (ID: ${existing.rows[0].id})`);
      }
    }
    console.log('');

    // 3. EVENTS
    console.log('3. Inserting Official Foundation Events...');
    const events = [
      {
        title: 'World Immunization Day: Integrated Vaccination Campaign & Road Show',
        slug: 'world-immunization-day-impa',
        category: 'health',
        event_date: '2025-11-10T09:00:00.000Z',
        location: 'Primary Health Centres, Road Shows & Community Hubs, Rivers State',
        summary: 'In collaboration with the Senate Committee on Health and leading international global health allies, the Caywood Brown Foundation conducts comprehensive immunization outreaches ensuring every child receives life-saving vaccines under the IMPA initiative.',
        cover_image_id: mediaMap['impa-banner.jpg'] || null,
        featured_on_home: true,
      },
      {
        title: 'Annual "Christmas With Her Excellency" Community Outreach',
        slug: 'christmas-with-her-excellency',
        category: 'outreach',
        event_date: '2025-12-25T10:00:00.000Z',
        location: 'Port Harcourt & Obio/Akpor Communities, Rivers State',
        summary: 'Annual festive outreach hosted by Senator Dr. Ipalibo Harry Banigo bringing holiday welfare, nutritional food baskets, community meals, and joyful praise gatherings to hundreds of vulnerable households.',
        cover_image_id: mediaMap['senator-outreach.png'] || null,
        featured_on_home: true,
      },
      {
        title: 'Buni Yadi Humanitarian Relief & IDP Support Mission',
        slug: 'buni-yadi-idp-relief',
        category: 'relief',
        event_date: '2025-08-15T09:00:00.000Z',
        location: 'Buni Yadi Settlements & Host Communities',
        summary: 'Rapid emergency field relief deploying essential food rations, medical triage, hygiene care packs, and maternal psychosocial counselling to displaced families.',
        cover_image_id: mediaMap['muslim-women-outreach.png'] || null,
        featured_on_home: true,
      },
      {
        title: 'Niger Delta Youth Digital Skills Bootcamp & ICT Lab Launch',
        slug: 'digital-skills-bootcamp',
        category: 'skills',
        event_date: '2025-09-20T09:00:00.000Z',
        location: 'Caywood Brown Foundation HQ & Tech Lab, Port Harcourt',
        summary: 'Tuition-free intensive training cohort equipping 100+ youth with practical computer appreciation, cloud productivity, web development, and digital marketing skills.',
        cover_image_id: mediaMap['computer-lab.jpg'] || null,
        featured_on_home: true,
      },
    ];

    for (const evt of events) {
      const existing = await pool.query('SELECT id FROM events WHERE slug = $1', [evt.slug]);
      if (existing.rows.length === 0) {
        const res = await pool.query(`
          INSERT INTO events (title, slug, category, event_date, location, summary, cover_image_id, featured_on_home, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING id, title
        `, [evt.title, evt.slug, evt.category, evt.event_date, evt.location, evt.summary, evt.cover_image_id, evt.featured_on_home, now, now]);
        console.log(`-> Added Event: ${res.rows[0].title} (ID: ${res.rows[0].id})`);
      } else {
        console.log(`-> Event already exists: ${evt.slug} (ID: ${existing.rows[0].id})`);
      }
    }
    console.log('');

    // 4. PROGRAMS
    console.log('4. Inserting 6 Core Foundation Programs...');
    const programs = [
      {
        title: 'Computer Appreciation & Digital Economy Training',
        slug: 'computer-appreciation',
        thematic_pillar: 'digital-economy',
        status: 'active',
        summary: 'Tuition-free computer literacy and digital workforce development. Youth master operating systems, Microsoft Office, Google Workspace, internet research, and freelancing skills.',
        partner: 'Google & Tech Industry Partners',
        hero_image_id: mediaMap['computer-lab.jpg'] || null,
      },
      {
        title: 'Creative Arts & Music Production Academy',
        slug: 'music-training',
        thematic_pillar: 'music',
        status: 'active',
        summary: 'Hands-on instrumental and studio engineering training. Trainees master piano, drums, guitar, saxophone, and digital audio workstation (DAW) mixing in our Port Harcourt studio.',
        partner: 'Rivers State Creative Guild',
        hero_image_id: null,
      },
      {
        title: 'Youth Rehabilitation, Guidance & Counseling',
        slug: 'youth-rehabilitation',
        thematic_pillar: 'rehabilitation',
        status: 'active',
        summary: 'Confidential, compassionate recovery pathways for youth battling substance abuse, trauma, or emotional hardship. Certified therapists provide individual counselling and life rebuild coaching.',
        partner: 'National Healthcare & Substance Recovery Specialists',
        hero_image_id: null,
      },
      {
        title: 'Youth Health Awareness & Preventive Care',
        slug: 'youth-health-awareness',
        thematic_pillar: 'health',
        status: 'active',
        summary: 'Preventive healthcare education, adolescent wellbeing seminars, disease screening, and community health camps across primary healthcare centers in Rivers State.',
        partner: 'Senate Committee on Health & Rivers State Primary Health Care',
        hero_image_id: mediaMap['impa-volunteers.jpg'] || null,
      },
      {
        title: 'Her Voice, Her Power (Girl-Child Advocacy)',
        slug: 'girl-child-advocacy',
        thematic_pillar: 'advocacy',
        status: 'active',
        summary: 'Championing the girl-child through formal education retention, menstrual hygiene support, STEM literacy masterclasses, and anti-GBV community protection networks.',
        partner: 'Women in Leadership Coalition',
        hero_image_id: mediaMap['senator-outreach.png'] || null,
      },
      {
        title: 'Volunteerism & Civic Leadership Academy',
        slug: 'volunteerism-academy',
        thematic_pillar: 'volunteerism',
        status: 'active',
        summary: 'Cultivating civic leaders through community mobilization training, emergency response corps, and 6-month structured internship placements with private sector employers.',
        partner: 'Rivers State Private Sector Forum',
        hero_image_id: mediaMap['volunteer-academy.jpg'] || null,
      },
    ];

    for (const prog of programs) {
      const existing = await pool.query('SELECT id FROM programs WHERE slug = $1', [prog.slug]);
      if (existing.rows.length === 0) {
        const res = await pool.query(`
          INSERT INTO programs (title, slug, thematic_pillar, status, summary, partner, hero_image_id, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          RETURNING id, title
        `, [prog.title, prog.slug, prog.thematic_pillar, prog.status, prog.summary, prog.partner, prog.hero_image_id, now, now]);
        console.log(`-> Added Program: ${res.rows[0].title} (ID: ${res.rows[0].id})`);
      } else {
        console.log(`-> Program already exists: ${prog.slug} (ID: ${existing.rows[0].id})`);
      }
    }

    console.log('\n=== SEEDING COMPLETED SUCCESSFULLY! ===\n');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await pool.end();
  }
}

seed();

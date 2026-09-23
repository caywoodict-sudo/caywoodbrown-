import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const programmes = [
  {
    title: "Computer Appreciation Program",
    pillar: "Digital Inclusion",
    stat: "3,000+ Certified",
    description: "Free, beginner-friendly training equipping young people with computer operations, typing dexterity, Microsoft Office competency, and file management for entry-level workplace roles.",
    skills: ["Keyboard Dexterity & Typing", "MS Word, Excel & PowerPoint", "Workplace Digital Etiquette"],
    href: "/programs/computer-appreciation"
  },
  {
    title: "Music Equipment Training Program",
    pillar: "Creative Economy",
    stat: "Studio Placements",
    description: "Hands-on instruction in drum kit rudiments, keyboard chord progressions, rhythm, ear training, and live performance, turning creative talent into sustainable income.",
    skills: ["Drum Kit Rudiments & Grooves", "Keyboard & Chord Progressions", "Live Studio Performance"],
    href: "/programs/music-training"
  },
  {
    title: "Youth Rehabilitation & Empowerment",
    pillar: "Addiction Recovery",
    stat: "Holistic Pathway",
    description: "Compassionate, structured recovery for youth affected by substance addiction — combining medical outreach, psychosocial counseling, behavioral therapy, and trade re-skilling.",
    skills: ["Psychosocial Counseling", "Substance Abuse Therapy", "Peer Mentor Reintegration"],
    href: "/programs/youth-rehabilitation"
  },
  {
    title: "Graduate Internship & Career Readiness",
    pillar: "Volunteerism Academy",
    stat: "80% Job Retention",
    description: "Mentoring unemployed graduates through 6-month corporate volunteer internships across Rivers State and Abuja, building workplace ethics and career breakthrough networks.",
    skills: ["Corporate Internship Placements", "Work Ethic & Communication", "Full-Time Job Retention"],
    href: "/programs/volunteerism-academy"
  },
  {
    title: "Youth Health Awareness Program",
    pillar: "Preventive Health",
    stat: "School Assemblies",
    description: "Interactive secondary school wellness assemblies, adolescent reproductive health education, mental wellness workshops, and community routine immunization drives.",
    skills: ["Adolescent Wellness & Hygiene", "Emotional Resilience & Coping", "Routine Child Immunization"],
    href: "/programs/youth-health-awareness"
  },
  {
    title: "Her Voice, Her Power: Girl Child Advocacy",
    pillar: "Gender Equity & STEM",
    stat: "Scholarship Grants",
    description: "Dismantling socio-economic barriers through leadership bootcamps, school retention scholarships, menstrual hygiene provisions, and Child Rights protection advocacy.",
    skills: ["Leadership & Self-Esteem", "Menstrual Health & Dignity Kits", "Safe Space Dialogues"],
    href: "/programs/girl-child-advocacy"
  },
]

export default function ThematicPillars() {
  return (
    <section id="thematic-pillars" className="programmes-section home-section" aria-labelledby="programmes-title">
      <div className="home-shell programme-layout">
        <div className="programme-intro">
          <p className="home-label section-kicker">Our Core Initiatives</p>
          <h2 id="programmes-title" className="home-heading">How We Make<br />An Impact.</h2>
          <p className="programme-intro-copy">
            Six structured, holistic programmes meeting young people where they are — grounded in compassion, practical vocational mastery, and verifiable outcomes across the Niger Delta.
          </p>
          <figure className="programme-portrait lg:sticky lg:top-24">
            <Image
              src="/images/programs/computer-lab.jpg"
              alt="A young woman learning at a Caywood Brown computer workstation"
              fill
              className="object-cover"
              sizes="(max-width: 700px) 100vw, 35vw"
            />
            <figcaption>Learning in action, Port Harcourt HQ</figcaption>
          </figure>
        </div>
        <div className="programme-rows">
          <div className="programme-content">
            {programmes.map((programme, index) => (
              <Link href={programme.href} className="programme-row" key={programme.href}>
                <div className="programme-row-inner">
                  <span className="programme-number" aria-hidden="true">0{index + 1}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#c7ed9f]/20 text-[#c7ed9f]">
                        {programme.pillar}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-[#f6ce40]">
                        {programme.stat}
                      </span>
                    </div>
                    <h3>{programme.title}</h3>
                  </div>
                  <div>
                    <p>{programme.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {programme.skills.map((skill) => (
                        <span key={skill} className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#faf7f0]/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="programme-arrow"><ArrowRight size={21} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

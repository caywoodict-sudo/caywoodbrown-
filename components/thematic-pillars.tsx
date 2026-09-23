import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const programmes = [
  {
    title: "Computer Appreciation Program",
    description: "Free, beginner-friendly training equipping young people with computing fundamentals, Microsoft Office, and office productivity skills.",
    href: "/programs/computer-appreciation"
  },
  {
    title: "Music Equipment Training Program",
    description: "Hands-on instruction in drums, keyboard chord progressions, rhythm, and live performance, turning creative talent into income.",
    href: "/programs/music-training"
  },
  {
    title: "Youth Rehabilitation & Empowerment",
    description: "Holistic recovery combining counseling, substance abuse education, behavioral therapy, and community reintegration for youth overcoming addiction.",
    href: "/programs/youth-rehabilitation"
  },
  {
    title: "Graduate Internship & Career Readiness",
    description: "Volunteerism Academy: mentoring unemployed graduates through 6-month corporate internships, transitioning 80%+ into paid employment.",
    href: "/programs/volunteerism-academy"
  },
  {
    title: "Youth Health Awareness Program",
    description: "School-based wellness assemblies, adolescent health education, hygiene, and childhood immunization under our IMPA initiative.",
    href: "/programs/youth-health-awareness"
  },
  {
    title: "Her Voice, Her Power: Girl Child Advocacy",
    description: "Empowering young girls through educational retention scholarships, leadership development, safe space dialogues, and Child Rights advocacy.",
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
        <p className="programme-intro-copy">Six structured programmes meeting youth where they are — grounded in compassion and driven by lasting results.</p>
        <figure className="programme-portrait lg:sticky lg:top-24">
          <Image src="/images/programs/computer-lab.jpg" alt="A young woman learning at a Caywood Brown computer workstation" fill className="object-cover" sizes="(max-width: 700px) 100vw, 35vw" />
          <figcaption>Learning in action, Port Harcourt</figcaption>
        </figure>
      </div>
      <div className="programme-rows">
        <div className="programme-content">
          {programmes.map((programme,index) => (
            <Link href={programme.href} className="programme-row" key={programme.href}>
              <div className="programme-row-inner">
                <span className="programme-number" aria-hidden="true">0{index + 1}</span>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
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

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

export default function FoundersMessagePage() {
  return (
    <div className="home-page min-h-screen">
      {/* Hero Section with Botanical Canopy */}
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="home-label text-[#c7ed9f] mb-4">A letter from our founder</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-tight">
            A Vision for Change
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85">
            Reflections from Senator Dr. Ipalibo Harry Banigo on 20 years of empowering youth and transforming communities across the Niger Delta.
          </p>
        </div>
      </section>

      {/* Founder's Letter & Portrait */}
      <section className="home-section" style={{ background: "var(--cream)" }}>
        <div className="home-shell">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <span className="home-label text-[#00521a]">From Dr. Ipalibo Harry Banigo</span>
              <h2 className="home-heading text-[#173421]">
                Dear Friends, Supporters, and Community Champions,
              </h2>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#173421]/85 font-sans">
                <p>
                  When I founded the Caywood Brown Foundation in 2006 in loving memory of my late father, Caywood Brown, my conviction was simple: no young person should be left behind due to lack of opportunity, guidance, or belief.
                </p>
                <p>
                  Throughout my years of medical practice and public service, I have seen both the painful struggles facing our young people — from educational gaps and youth unemployment to substance addiction — and the extraordinary potential that blooms when they are given real tools and mentorship.
                </p>
                <p>
                  The Caywood Brown Foundation was born to bridge that divide. From our free computer appreciation labs and Google digital skills cohorts to our creative music academy and compassionate youth recovery counseling, we build sustainable pathways from vulnerability into independence.
                </p>
                <p>
                  As we look to the future, our commitment to Rivers State and the Niger Delta remains unshakable. I invite you to walk this path with us — as mentors, partners, and supporters — ensuring every young person has the opportunity to thrive.
                </p>
                <div className="pt-6 border-t border-[#00521a]/15">
                  <p className="font-serif text-2xl font-bold text-[#00521a]">Senator Dr. Ipalibo Harry Banigo</p>
                  <p className="text-sm font-semibold text-[#173421]/70">Founder & Chairperson, Caywood Brown Foundation</p>
                  <p className="text-xs text-[#173421]/50 mt-1">Medical Doctor · Former Deputy Governor of Rivers State · Distinguished Senator</p>
                </div>
              </div>
            </div>

            <div className="sticky top-28 space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white bg-[#006f62]">
                <Image
                  src="/images/about/senator-scaled.jpg"
                  alt="Senator Dr. Ipalibo Harry Banigo"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
              </div>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#00521a]">
                Senator Dr. Ipalibo Harry Banigo · Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Milestones */}
      <section className="home-section" style={{ background: "#173421", color: "#faf7f0" }}>
        <div className="home-shell">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="home-label text-[#c7ed9f]">Our Journey</span>
            <h2 className="home-heading text-[#faf7f0]">Foundation Milestones</h2>
            <p className="text-sm sm:text-base text-[#faf7f0]/80">
              Key moments that have shaped our mission, partnerships, and impact across the Niger Delta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2006", title: "Foundation Established", desc: "Officially registered (RC: 0022482) in Port Harcourt in loving memory of Caywood Brown, focusing on education and community care." },
              { year: "2011", title: "Music & Computing Labs", desc: "Opened free computer appreciation labs and creative music training studios to equip youth with modern vocational skills." },
              { year: "2018", title: "Google Partnership", desc: "Formed strategic alliance with Google Digital Skills for Africa, training thousands of youth in digital marketing and programming." },
              { year: "2025+", title: "Two Decades of Impact", desc: "Over 15,000 lives impacted across 48 communities, with an 80% internship and employment transition rate." },
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-serif text-3xl font-bold text-[#f6ce40] block">{m.year}</span>
                <h3 className="font-serif text-lg font-bold text-[#faf7f0]">{m.title}</h3>
                <p className="text-xs text-[#faf7f0]/75 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Paths */}
      <section className="home-section closing-section">
        <div className="home-shell">
          <div className="closing-heading">
            <h2 className="home-heading">Be part of what comes next.</h2>
            <p className="home-copy">Join hands with Senator Banigo and our team to empower the next generation.</p>
          </div>
          <div className="closing-links">
            <Link href="/donate">
              <span className="home-label">Support our work</span>
              <span className="closing-link-title">Make a donation <ArrowRight size={24} /></span>
            </Link>
            <Link href="/volunteer">
              <span className="home-label">Get involved</span>
              <span className="closing-link-title">Volunteer with us <ArrowRight size={24} /></span>
            </Link>
            <Link href="/contact">
              <span className="home-label">Reach out</span>
              <span className="closing-link-title">Contact our team <ArrowRight size={24} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroNarrative from "@/components/hero-narrative"
import ThematicPillars from "@/components/thematic-pillars"
import FeaturedEvents from "@/components/featured-events"
import PartnersMarquee from "@/components/partners-marquee"
import CopyAccountButton from "@/components/copy-account-button"

export default function Home() {
  return (
    <div className="home-page">
      <HeroNarrative />

      {/* ─── IMPACT STATISTICS (FROM OFFICIAL DATABASE) ─── */}
      <section className="bg-[#173421] text-[#faf7f0] py-14 px-6 border-y border-[#c7ed9f]/20" aria-label="Key Impact Statistics">
        <div className="home-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ce40] block">15,000+</span>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#c7ed9f]/90 font-medium">People Helped</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ce40] block">48</span>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#c7ed9f]/90 font-medium">Communities Served</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ce40] block">19+</span>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#c7ed9f]/90 font-medium">Years of Service (Since 2006)</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ce40] block">3,000+</span>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#c7ed9f]/90 font-medium">Students Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THEMATIC PILLARS ─── */}
      <ThematicPillars />

      {/* ─── FEATURED PARTNERSHIP: GOOGLE DIGITAL SKILLS ─── */}
      <section className="home-section learning-section" aria-labelledby="learning-title">
        <div className="home-shell learning-layout">
          <figure className="learning-photo">
            <Image
              src="/images/programs/google-training.png"
              alt="Participants at the Google digital skills programme in Port Harcourt"
              fill
              className="object-cover"
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </figure>
          <div className="learning-copy">
            <p className="home-label">Featured Strategic Partnership</p>
            <h2 id="learning-title" className="home-heading">
              Google Digital Skills<br />for Africa
            </h2>
            <p className="home-copy">
              In our commitment to equipping young people with future-forward skills, we proudly partner with Google to deliver comprehensive digital skills training to students in underserved communities across Rivers State. This flagship initiative bridges the digital divide and empowers youth with the technical know-how and confidence needed to thrive in today’s competitive economy.
            </p>
            <ul className="learning-topics" aria-label="Training topics">
              <li>Coding Fundamentals</li>
              <li>Digital Marketing</li>
              <li>Career Certification</li>
              <li>Industry Mentorship</li>
            </ul>
            <p className="text-xs text-[#173421]/75 italic mb-4">
              Over 200+ young people have completed this flagship cohort, securing meaningful jobs, freelance roles, or launching entrepreneurial ventures.
            </p>
            <Link href="/programs/google-training" className="home-link">
              Explore the Google partnership <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED EVENTS & OUTREACHES ─── */}
      <FeaturedEvents />

      {/* ─── STORIES OF IMPACT (AUTHENTIC DATABASE TESTIMONIALS) ─── */}
      <section className="home-section voice-section" aria-labelledby="testimonials-heading">
        <div className="home-shell space-y-12">
          <div className="max-w-2xl">
            <p className="home-label">Real People · Meaningful Change</p>
            <h2 id="testimonials-heading" className="home-heading text-[#173421]">
              Stories of Transformation
            </h2>
            <p className="home-copy mt-2">
              Every program we run leaves behind a trail of transformation. Hear beneficiaries and alumni share firsthand how the Caywood Brown Foundation has restored hope and opened doors.
            </p>
          </div>

          {/* Featured Long-Form Impact Story */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#00521a]/15 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#df6827] block">
              Featured Alumna Story · Computer Appreciation Program
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#173421] font-bold leading-tight">
              &ldquo;Free Computer Training Turned My Job Outputs Around&rdquo;
            </h3>
            <blockquote className="text-base sm:text-lg text-[#173421]/85 leading-relaxed italic">
              &ldquo;For years, I was a full-time young housewife. When I eventually stepped into the workforce as an office assistant, I quickly realized that my lack of computer skills was holding me back. The cost of commercial classes was out of reach on my modest salary. Just when I was about to give up, a concerned friend told me about the free computer appreciation training at Caywood Brown Foundation. With hesitation and hope, I walked through their doors in Port Harcourt. What I found was not just a training program, but a lifeline. Today, my work output has dramatically improved, my confidence soared, my boss took notice — and I was recently promoted!&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-[#00521a] pt-2 border-t border-[#00521a]/10">
              <cite className="not-italic">— Mrs. A., Office Assistant &amp; Small Business Administrator, Port Harcourt</cite>
            </p>
          </div>

          {/* 3 Authentic Beneficiary Cards from Database */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf7f0] border border-[#00521a]/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00521a]">Digital Literacy</span>
              <blockquote className="text-sm text-[#173421]/85 italic leading-relaxed">
                &ldquo;Learning the basics changed my entire career path. From having zero confidence on a keyboard to mastering Microsoft Office and data entry, I am now gainfully employed.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#00521a]/10 text-xs flex items-center gap-3 mt-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#00521a]/10">
                  <Image src="/images/testimonials/madam-1.png" alt="Blessing E." fill className="object-cover" />
                </div>
                <div>
                  <cite className="text-[#173421] block font-bold not-italic">Blessing E., 22</cite>
                  <span className="text-[#173421]/60">Office Assistant, Rivers State</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f0] border border-[#00521a]/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#df6827]">Music Academy</span>
              <blockquote className="text-sm text-[#173421]/85 italic leading-relaxed">
                &ldquo;A skill that now pays my bills. The practical drum kit and live performance sessions took my raw interest and turned it into a viable career as a session instrumentalist.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#00521a]/10 text-xs flex items-center gap-3 mt-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#df6827]/10">
                  <Image src="/images/testimonials/madam-2.png" alt="Peterson Tochukwu" fill className="object-cover" />
                </div>
                <div>
                  <cite className="text-[#173421] block font-bold not-italic">Peterson Tochukwu</cite>
                  <span className="text-[#173421]/60">Session Drummer, Port Harcourt</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f0] border border-[#00521a]/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00521a]">Youth Rehabilitation</span>
              <blockquote className="text-sm text-[#173421]/85 italic leading-relaxed">
                &ldquo;When substance addiction almost destroyed my future, the foundation gave me a structured path to recovery, psychosocial counseling, and a true second chance at life.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#00521a]/10 text-xs flex items-center gap-3 mt-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#00521a]/10">
                  <Image src="/images/testimonials/madam-4.png" alt="Rio P." fill className="object-cover" />
                </div>
                <div>
                  <cite className="text-[#173421] block font-bold not-italic">Rio P.</cite>
                  <span className="text-[#173421]/60">Rehabilitation Graduate &amp; Peer Mentor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GIVING SECTION (POSITIONED AFTER IMPACT & OUTREACH) ─── */}
      <section className="home-section giving-section" aria-labelledby="giving-title">
        <div className="home-shell giving-layout">
          <div>
            <span className="home-label text-[#00521a]">Support Our Mission</span>
            <h2 id="giving-title" className="home-heading mt-2">
              A little support.<br />A world of possibility.
            </h2>
            <p className="home-copy">
              Help a young person learn a skill, find their confidence, and take the next step. Every donation directly funds tuition-free computing labs, music equipment, clinical recovery therapy, and childhood immunization drives.
            </p>
            <div className="home-actions mt-6">
              <Link className="home-button" href="/donate#donate-now">Make a donation</Link>
              <Link className="home-button home-button-outline" href="/donate#monthly-giving">
                Monthly giving <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="giving-purpose">
            <p className="home-label">Your support directly funds</p>
            {[
              "Tuition-free computer lab workstations & software",
              "Studio music equipment and masterclass instructors",
              "Substance addiction counseling & psychosocial therapy",
              "Childhood immunization supplies & community health road shows",
            ].map((item, index) => (
              <div className="giving-item" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
            <div className="pt-4 mt-6">
              <div className="p-4 rounded-xl bg-white border border-[#00521a]/15 shadow-sm flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-bold block text-[#00521a] mb-1">Direct Bank Transfer</span>
                  <div className="text-[#173421]">
                    <span className="block text-sm">Union Bank · <strong className="font-mono text-base">0056692414</strong></span>
                    <span className="text-xs text-[#173421]/70">CAYWOOD BROWN FOUNDATION</span>
                  </div>
                </div>
                <CopyAccountButton accountNumber="0056692414" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROOTED IN COMMUNITY & MARQUEE ─── */}
      <section className="home-section community-section" aria-labelledby="community-title">
        <div className="home-shell community-layout">
          <div>
            <p className="home-label">Rooted in Community</p>
            <h2 id="community-title" className="home-heading">
              Here for the<br />Niger Delta.
            </h2>
          </div>
          <div>
            <p className="home-copy">
              From our headquarters and laboratories at Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt, and our Abuja liaison office, our work reaches young people, schools, and families across Rivers State and neighbouring communities.
            </p>
            <Link href="/about" className="home-link">
              Get to know the foundation <ArrowRight size={19} />
            </Link>
          </div>
        </div>
        <PartnersMarquee />
      </section>

      {/* ─── CLOSING PATHWAYS ─── */}
      <section className="home-section closing-section" aria-labelledby="closing-title">
        <div className="home-shell">
          <div className="closing-heading">
            <h2 id="closing-title" className="home-heading">
              Be part of<br />what comes next.
            </h2>
            <p className="home-copy">
              A skill shared. A gift given. A life transformed.<br />There’s an important place for you in this work.
            </p>
          </div>
          <div className="closing-links">
            {[
              { title: "Give a young person a chance", detail: "Support our programmes", href: "/donate" },
              { title: "Share your time and skills", detail: "Volunteer with us", href: "/volunteer" },
              { title: "Explore institutional partnership", detail: "Partner with us", href: "/partner" },
              { title: "Reach out to our secretariat", detail: "Get in touch", href: "/contact" },
            ].map((item) => (
              <Link href={item.href} key={item.href}>
                <span className="home-label">{item.detail}</span>
                <span className="closing-link-title flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight size={16} className="shrink-0 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

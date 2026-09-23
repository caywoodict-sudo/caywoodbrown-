import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"

export default function HeroNarrative() {
  return (
    <div className="overflow-hidden">
      <section className="opening-hero relative flex min-h-[100svh] items-center justify-center bg-[#12291b] px-6 pb-16 sm:pb-28 pt-28 text-center text-[#f7f2e7]">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c7ed9f] sm:text-sm">
            Preparing Leaders of Tomorrow · Est. 2006
          </p>
          <h1 className="opening-title">
            Empowering Communities. <br />
            <span className="text-[#f5a246]">Building Futures.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#f7f2e7]/90 sm:text-lg">
            At Caywood Brown Foundation (CBF), we have been driving transformation since 2006 — empowering youths and strengthening communities across Rivers State through structured mentorship, vocational training, Google digital skills, creative music education, and youth rehabilitation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="home-button home-button-gold"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="home-button home-button-flame"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/partner"
              className="home-button home-button-light-outline"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <a
          href="#our-origins"
          className="absolute bottom-20 sm:bottom-8 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-[#f7f2e7]/80 hover:text-[#f5a246] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Our Story &amp; Founder <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <section id="our-origins" className="founder-section relative isolate overflow-hidden bg-[#fbf8f2] text-[#173421]">
        <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-14 w-full fill-[#12291b] sm:h-20">
          <path d="M0 0H1440V24C1120 4 956 84 704 58 404 27 214 105 0 59V0Z" />
        </svg>
        <div className="home-shell founder-layout">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#00521a]">How We Started</p>
            <h2 className="home-heading founder-heading">
              A living legacy of <span className="text-[#df6827]">service &amp; compassion.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#173421]/90 sm:text-lg">
              The Caywood Brown Foundation was established in 2006 by Dr. Ipalibo Harry Banigo in honor of her late father, Caywood Brown, whose life of compassion, discipline, and community service continues to guide every initiative we undertake. What began as small volunteer-led community tutoring and medical outreaches in Port Harcourt has grown into an enduring institutional force, empowering over 15,000 individuals across 48 communities.
            </p>
            
            <div className="mt-6 rounded-2xl bg-white/85 p-6 border border-[#00521a]/15 backdrop-blur-sm space-y-4 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00521a] block mb-1">Our Vision</span>
                <p className="text-sm font-medium text-[#173421] leading-relaxed">
                  To help all youths within our reach become self-secure, encouraged to pursue their dreams as leaders, and inspired to become innovators and employers of labor.
                </p>
              </div>
              <div className="pt-3 border-t border-[#00521a]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#df6827] block mb-1">Our Mission</span>
                <p className="text-sm text-[#173421]/85 leading-relaxed">
                  To equip youths to pursue their dreams and explore their talents and passions, in order to develop their community, one business innovation at a time, through education, advocacy, and sustainable developmental programs.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about" className="home-button">
                Read our full history <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about/founders-message" className="home-button home-button-outline">
                Founder&apos;s Message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <figure className="founder-figure">
            <div className="founder-portrait relative aspect-[3/4] overflow-hidden bg-[#006f62]">
              <Image
                src="/images/about/senator-scaled.jpg"
                alt="Senator Dr. Ipalibo Harry Banigo, founder of Caywood Brown Foundation"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) min(100vw - 48px, 430px), 430px"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm font-medium text-[#173421]">
              Senator Dr. Ipalibo Harry Banigo · Founder
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  )
}

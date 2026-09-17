import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="home-shell footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Caywood Brown Foundation home"><Image src="/images/caywood-logo.png" alt="Caywood Brown Foundation" width={160} height={116} /></Link>
          <p>Opening doors for young people.<br />Strengthening our communities.</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Explore</h2>
          <Link href="/about">Our story</Link>
          <Link href="/about/founders-message">Founder's message</Link>
          <Link href="/programs">What we do</Link>
          <Link href="/events">Events &amp; outreaches</Link>
          <Link href="/faq">Your questions</Link>
        </nav>
        <nav aria-label="Get involved">
          <h2>Get involved</h2>
          <Link href="/donate">Make a donation</Link>
          <Link href="/volunteer">Become a volunteer</Link>
          <Link href="/partner">Partner with us</Link>
          <Link href="/contact">Contact the team</Link>
        </nav>
        <div className="footer-contact">
          <h2>Let’s stay connected</h2>
          <div className="space-y-3 mb-4 text-sm text-[#faf7f0bb] leading-relaxed">
            <div>
              <span className="block font-semibold text-[#c7ed9f] text-xs uppercase tracking-wider">Port Harcourt (HQ)</span>
              Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt, Rivers State
            </div>
            <div>
              <span className="block font-semibold text-[#c7ed9f] text-xs uppercase tracking-wider">Abuja (Liaison)</span>
              888 Olu Awotesu St, Jabi, Abuja, FCT
            </div>
          </div>
          <div className="space-y-1.5">
            <a href="tel:+2348038817059" className="block text-sm text-[#faf7f0dd] hover:text-[#c7ed9f] transition-colors">
              (+234) 803 881 7059
            </a>
            <a className="footer-email inline-flex items-center gap-1.5 text-sm text-[#faf7f0dd] hover:text-[#c7ed9f] transition-colors" href="mailto:caywoodbrowndocs@gmail.com">
              caywoodbrowndocs@gmail.com <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="home-shell footer-bottom pb-24 sm:pb-6">
        <p>© {new Date().getFullYear()} Caywood Brown Foundation</p>
        <p>Established 2006 · RC: 0022482</p>
      </div>
    </footer>
  )
}

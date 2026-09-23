import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const partners = [
  { name: "MedWHOLE Alliance", logo: "/images/partners/partner-1.png" },
  { name: "NDlink", logo: "/images/partners/partner-2.png" },
  { name: "Port Harcourt Chamber of Commerce, Industry, Mines & Agriculture", logo: "/images/partners/partner-3.png" },
  { name: "Nigeria LNG Limited", logo: "/images/partners/partner-4.png" },
  { name: "Sydani Group", logo: "/images/partners/partner-5.png" },
  { name: "VNDC", logo: "/images/partners/partner-6.png" },
]

export default function PartnersMarquee() {
  return (
    <div className="home-shell partner-strip" aria-label="Partners and collaborators">
      <div className="partner-heading">
        <p className="home-label">Working together</p>
        <p>For lasting change.</p>
      </div>
      <div className="partner-viewport">
        <div className="partner-track">
          <div className="partner-track-set" role="list">
            {partners.map((partner) => (
              <div className="partner-logo" role="listitem" key={partner.name}>
                <Image src={partner.logo} alt={partner.name} width={220} height={122} sizes="180px" />
              </div>
            ))}
          </div>
          <div className="partner-track-set partner-track-copy" aria-hidden="true">
            {partners.map((partner) => (
              <div className="partner-logo" key={`${partner.name}-copy1`}>
                <Image src={partner.logo} alt="" width={220} height={122} sizes="180px" />
              </div>
            ))}
          </div>
          <div className="partner-track-set partner-track-copy" aria-hidden="true">
            {partners.map((partner) => (
              <div className="partner-logo" key={`${partner.name}-copy2`}>
                <Image src={partner.logo} alt="" width={220} height={122} sizes="180px" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link href="/partner" className="home-link partner-link">Partner with us <ArrowRight size={19} /></Link>
    </div>
  )
}

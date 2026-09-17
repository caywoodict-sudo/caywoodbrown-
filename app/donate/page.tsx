import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Building2, ShieldCheck, CheckCircle2 } from "lucide-react"
import HeroFoliage from "@/components/hero-foliage"
import CopyAccountButton from "@/components/copy-account-button"

const programmes = [
  {
    title: "Digital skills",
    description: "Learning spaces and practical computer training for young people.",
    image: "/images/programs/computer-lab.jpg",
  },
  {
    title: "Creative learning",
    description: "Music and creative opportunities that help young people develop their talents.",
    image: "/images/programs/women-empowerment.png",
  },
  {
    title: "Community support",
    description: "Mentorship and outreach shaped around the needs of local families.",
    image: "/images/community/field-visit.jpg",
  },
]

export default function DonatePage() {
  return (
    <div className="bg-[#faf7f0] text-[#142118]">
      <section className="relative overflow-hidden bg-[#12291b] px-6 pb-24 pt-36 text-[#f7f2e7] sm:px-8 sm:pb-32">
        <HeroFoliage />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#c7ed9f]">Support our work</p>
          <h1 className="max-w-3xl font-serif text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[1.08] tracking-tight">
            Help young people build brighter futures.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#f7f2e7]/85">
            Your support helps Caywood Brown Foundation deliver education, creative learning, and community programmes across the Niger Delta.
          </p>
          <a href="#donate-now" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f47e28] px-7 py-4 text-sm font-semibold text-white hover:bg-[#df6817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            How to give <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-2xl font-serif text-[clamp(2.5rem,4vw,4rem)] leading-tight text-[#00521a]">What your support makes possible</h2>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {programmes.map((programme) => (
            <article key={programme.title} className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={programme.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-[#00521a]">{programme.title}</h3>
                <p className="mt-3 leading-relaxed text-[#142118]/75">{programme.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="donate-now" className="bg-[#c7ed9f] px-6 py-20 sm:px-8 lg:py-28">
        <span id="single" className="sr-only">Single giving</span>
        <div className="mx-auto max-w-6xl space-y-12">
          <div>
            <span className="home-label text-[#00521a]">Official Donation Pathways</span>
            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.2rem)] leading-tight text-[#00521a] mt-2">
              Make a Direct Contribution
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#173421]/85">
              Contributions directly fund youth computer labs, music masterclasses, addiction counseling, and free health outreaches across Rivers State. Every naira is deployed transparently.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Direct Bank Transfer Card */}
            <div className="rounded-3xl border border-[#00521a]/20 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#00521a] mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00521a]/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#00521a]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#173421] font-bold">Direct Bank Transfer</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#00521a]">Verified Corporate Account</p>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl bg-[#faf7f0] p-6 border border-[#00521a]/10 text-[#173421]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#173421]/60 block">Bank Name</span>
                    <span className="text-lg font-bold text-[#00521a]">Union Bank</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#173421]/60 block">Account Name</span>
                    <span className="text-base font-bold text-[#173421] tracking-wide">CAYWOOD BROWN FOUNDATION</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#173421]/60 block">Account Number (NUBAN)</span>
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
                      <span className="font-mono text-2xl font-bold tracking-widest text-[#00521a]">0056692414</span>
                      <CopyAccountButton accountNumber="0056692414" />
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-[#173421]/70 leading-relaxed">
                  After initiating a transfer, kindly email your payment confirmation or teller reference to <a href="mailto:caywoodbrowndocs@gmail.com" className="font-semibold text-[#00521a] underline">caywoodbrowndocs@gmail.com</a> for an official tax receipt.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#00521a]/10 flex flex-wrap gap-4">
                <a
                  href="mailto:caywoodbrowndocs@gmail.com?subject=Donation%20Receipt%20Notification%20-%200056692414"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00521a] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#173421] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Notify Transfer</span>
                </a>
                <a
                  href="tel:+2348038817059"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00521a]/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#00521a] hover:bg-[#00521a] hover:text-white transition-colors"
                >
                  <span>Helpline: (+234) 803 881 7059</span>
                </a>
              </div>
            </div>

            {/* Monthly Supporter & Cheque Donations */}
            <div id="monthly-giving" className="rounded-3xl border border-[#00521a]/20 bg-[#faf7f0] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <span id="monthly" className="sr-only">Monthly giving</span>
                <div className="flex items-center gap-3 text-[#00521a] mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00521a]/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#00521a]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#173421] font-bold">Monthly & Institutional Gifts</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00521a]">Sustained Impact</p>
                  </div>
                </div>

                <p className="text-[#173421]/80 text-sm leading-relaxed mb-6">
                  Recurring giving provides the stable foundation needed to schedule 6-month graduate internship cohorts and keep computer labs open for youth across Rivers State.
                </p>

                <div className="rounded-2xl bg-white p-6 border border-[#00521a]/10 text-xs text-[#173421]/80 space-y-3">
                  <p className="font-bold text-sm text-[#00521a]">Donations by Cheque</p>
                  <p className="leading-relaxed">
                    Make cheques payable to: <strong className="text-[#173421]">Caywood Brown Foundation</strong><br />
                    Mail or deliver to: <strong>888 Olu Awotesu Street, Jabi, Abuja, FCT, Nigeria</strong> or <strong>Close B, 1 IPIC Estate, off Akpajo Elelenwo, Port Harcourt</strong>.
                  </p>
                  <p className="text-[#173421]/60">
                    Kindly state your name, phone number, and intended program on the back of the cheque.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#00521a]/10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00521a] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#173421] transition-colors"
                >
                  <span>Speak with Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00521a]/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#00521a] hover:bg-[#00521a] hover:text-white transition-colors"
                >
                  <span>Corporate Partnership</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

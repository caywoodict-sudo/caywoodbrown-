import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Team members working together"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About Us</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            Learn about our history, mission, and the people behind the Caywood Brown Foundation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How We Started</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Caywood Brown Foundation was established in 2005 by a group of community leaders who recognized the
                need for comprehensive support services in underserved areas. Named after its founders, the foundation
                began with a simple mission: to empower individuals and strengthen communities through education,
                healthcare, and social support.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                What started as a small initiative with local volunteers has grown into a respected organization with
                national reach. Over the years, we've expanded our programs, built partnerships with other
                organizations, and touched the lives of thousands of individuals and families.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Despite our growth, we remain committed to our founding principles of compassion, integrity, and
                community-centered service. Every decision we make is guided by our dedication to creating lasting
                positive change in the communities we serve.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Foundation founders"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">Mission & Values</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Our mission and values guide everything we do at the Caywood Brown Foundation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-amber-600"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals and strengthen communities through education, healthcare, and social support
                    programs that address critical needs and create opportunities for sustainable development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-amber-600"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where all individuals have access to the resources, support, and opportunities they need to
                    reach their full potential and contribute to thriving communities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-amber-600"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Our Values</h3>
                  <p className="text-gray-600">
                    We are guided by our commitment to compassion, integrity, inclusivity, innovation, and
                    accountability. These values shape our approach to service and our relationships with the
                    communities we serve.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  {[
                    "Community-centered: We work closely with communities to understand their unique needs and develop tailored solutions.",
                    "Holistic: We address the interconnected challenges facing individuals and communities through comprehensive programs.",
                    "Collaborative: We partner with other organizations, institutions, and community leaders to maximize our impact.",
                    "Sustainable: We focus on creating long-term solutions that empower communities to thrive independently.",
                    "Evidence-based: We use research and data to inform our programs and continuously improve our services.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Impact</h3>
                <ul className="space-y-3">
                  {[
                    "Provided educational support to over 5,000 students through scholarships, mentoring, and resources.",
                    "Organized health screenings and wellness programs for more than 10,000 individuals in underserved communities.",
                    "Trained and empowered 2,500 community leaders to address local challenges and drive positive change.",
                    "Distributed over $2 million in direct assistance to families facing economic hardship.",
                    "Built partnerships with 48 communities across the country to implement sustainable development initiatives.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Transparency
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Annual Reports</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              We are committed to transparency and accountability. Our annual reports provide detailed information about
              our programs, impact, and financial stewardship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[2023, 2022, 2021].map((year) => (
              <Card key={year} className="border border-gray-100 hover:border-amber-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-3xl font-bold text-amber-600">{year}</div>
                    <h3 className="text-xl font-bold">Annual Report</h3>
                    <p className="text-gray-600">
                      A comprehensive overview of our programs, impact, and financial information for the year {year}.
                    </p>
                    <Button variant="outline" className="mt-4" asChild>
                      <Link href={`/reports/${year}`}>
                        Download Report <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Mission</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg mb-6">
              There are many ways to get involved with the Caywood Brown Foundation. Whether you want to donate,
              volunteer, or partner with us, your support makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/volunteer">Volunteer With Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

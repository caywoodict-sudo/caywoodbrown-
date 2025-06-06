import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FoundersMessagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Senator Banigo - Founder of Caywood Brown Foundation"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Founder's Message</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            A letter from Senator Banigo about the foundation's vision and goals
          </p>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                From Our Founder
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A Vision for Change</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Dear Friends and Supporters,
                </p>
                <p>
                  When I founded the Caywood Brown Foundation, my vision was clear: to create an organization that would serve as a catalyst for positive change in our communities, especially for those who have been historically underserved or marginalized.
                </p>
                <p>
                  Throughout my years of public service, I have witnessed firsthand the challenges facing our communities – from limited educational opportunities to healthcare disparities and environmental concerns. But I have also seen the incredible resilience, talent, and potential that exists within these same communities.
                </p>
                <p>
                  The Caywood Brown Foundation was born from the belief that with the right support, resources, and advocacy, we can transform challenges into opportunities. Our mission extends beyond providing immediate relief; we are committed to creating sustainable solutions that address the root causes of inequality and build pathways to prosperity for all.
                </p>
                <p>
                  Our focus on youth empowerment, advocacy for the girl child, health awareness, and sustainability projects reflects our comprehensive approach to community development. We believe that when young people are equipped with education and skills, when girls and women are empowered, when communities have access to health information and resources, and when environmental sustainability is prioritized, we create the conditions for lasting positive change.
                </p>
                <p>
                  As we continue this journey, I invite you to join us. Whether through volunteering, partnership, donation, or simply spreading awareness, your involvement makes our work possible. Together, we can build a future where every individual has the opportunity to thrive.
                </p>
                <p>
                  With gratitude and hope,
                </p>
                <div className="pt-4">
                  <p className="font-bold text-gray-800">Senator Banigo</p>
                  <p className="text-gray-600">Founder, Caywood Brown Foundation</p>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="group" asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Our Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Senator+Banigo"
                  alt="Senator Banigo, Founder of the Caywood Brown Foundation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Community+Event"
                    alt="The founder at a community event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Foundation+Launch"
                    alt="The founder at the foundation's launch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Milestones */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Foundation Milestones</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Key moments in our history that have shaped our work and impact
            </p>
          </div>
          
          <div className="relative mx-auto max-w-3xl">
            {/* Timeline container */}
            <div className="absolute h-full w-1 bg-amber-200 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Milestone 1 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>
              <div className="relative left-0 md:left-auto md:right-1/2 md:pr-8 md:w-1/2 md:text-right transition-all">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="text-amber-600 font-bold">2005</span>
                  <h3 className="text-xl font-bold mt-1">Foundation Established</h3>
                  <p className="text-gray-600 mt-2">
                    The Caywood Brown Foundation was officially founded by Senator Banigo with an initial focus on education in underserved communities.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Milestone 2 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>
              <div className="relative right-0 md:right-auto md:left-1/2 md:pl-8 md:w-1/2 transition-all">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="text-amber-600 font-bold">2010</span>
                  <h3 className="text-xl font-bold mt-1">Expanded Health Initiatives</h3>
                  <p className="text-gray-600 mt-2">
                    Launched our first community health programs, providing preventative care and health education to over 5,000 individuals.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Milestone 3 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>
              <div className="relative left-0 md:left-auto md:right-1/2 md:pr-8 md:w-1/2 md:text-right transition-all">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="text-amber-600 font-bold">2015</span>
                  <h3 className="text-xl font-bold mt-1">Girl Child Advocacy Program</h3>
                  <p className="text-gray-600 mt-2">
                    Created dedicated programs for girl child education and empowerment, establishing scholarships and mentorship opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Milestone 4 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>
              <div className="relative right-0 md:right-auto md:left-1/2 md:pl-8 md:w-1/2 transition-all">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="text-amber-600 font-bold">2020</span>
                  <h3 className="text-xl font-bold mt-1">Digital Skills Partnership</h3>
                  <p className="text-gray-600 mt-2">
                    Launched partnership with Google to provide digital skills training, reaching over 10,000 young people across multiple communities.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Milestone 5 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>
              <div className="relative left-0 md:left-auto md:right-1/2 md:pr-8 md:w-1/2 md:text-right transition-all">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="text-amber-600 font-bold">2023</span>
                  <h3 className="text-xl font-bold mt-1">Sustainability Initiative</h3>
                  <p className="text-gray-600 mt-2">
                    Introduced environmental sustainability programs focusing on renewable energy and sustainable agriculture in rural communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-24 bg-amber-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Mission</h2>
              <p className="text-white/90 text-lg">
                Continue the journey with us as we work to create sustainable change and empower communities. 
                Your support makes our founder's vision possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-amber-600 hover:bg-gray-100" size="lg" asChild>
                  <Link href="/donate">Make a Donation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg" asChild>
                  <Link href="/volunteer">Volunteer With Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Join+Our+Cause"
                alt="Join the Caywood Brown Foundation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

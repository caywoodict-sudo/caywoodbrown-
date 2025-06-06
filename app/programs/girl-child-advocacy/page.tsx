import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, BookOpen, Award, Sparkles } from "lucide-react"

export default function GirlChildAdvocacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Girls empowerment session"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="inline-block rounded-full bg-pink-500/20 px-4 py-1.5 text-sm font-medium text-pink-100 backdrop-blur-sm mb-4">
            Girl Child Advocacy
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Empowering Girls, Transforming Communities
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Dedicated to breaking barriers, providing opportunities, and advocating for the rights and education of girls around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#initiatives">Our Initiatives</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#impact">Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section id="initiatives" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-800">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Breaking Barriers for Girls</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Caywood Brown Foundation's Girl Child Advocacy program focuses on addressing the unique challenges faced by girls in underserved communities. We believe that when girls are educated, healthy, and empowered, entire communities benefit.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Education First</h3>
                    <p className="text-gray-600">Providing scholarships, educational resources, and safe learning environments for girls to thrive academically.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Mentorship Programs</h3>
                    <p className="text-gray-600">Connecting girls with successful women role models who provide guidance, support, and inspiration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Leadership Development</h3>
                    <p className="text-gray-600">Cultivating leadership skills through workshops, conferences, and practical opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Health and Safety</h3>
                    <p className="text-gray-600">Ensuring girls have access to health education, services, and safe spaces to grow and learn.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="group" asChild>
                  <Link href="/volunteer" className="flex items-center gap-2">
                    Get Involved
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Girls+in+STEM"
                    alt="Girls participating in STEM activities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Girls+Leadership"
                    alt="Girls leadership workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Mentorship+Session"
                    alt="Mentorship session with young girls"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Girls+Empowerment"
                    alt="Girls empowerment program"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-800">
              Key Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Girl Child Initiatives</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Explore our signature programs designed to empower and uplift girls in various communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Program 1 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=STEM+for+Girls"
                  alt="STEM for Girls program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-pink-500" />
                  <h3 className="font-bold text-xl">STEM for Girls</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  An immersive program introducing girls to science, technology, engineering, and mathematics through hands-on activities, field trips, and mentorships with women in STEM fields.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Workshops & lab experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Industry field trips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Coding & robotics classes</span>
                  </li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="/programs/girl-child-advocacy/stem">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Program 2 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Girl+Leaders"
                  alt="Girl Leaders program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-pink-500" />
                  <h3 className="font-bold text-xl">Girl Leaders</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  A comprehensive leadership development program that equips girls with essential skills such as public speaking, decision-making, project management, and civic engagement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Leadership workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Community project planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Public speaking training</span>
                  </li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="/programs/girl-child-advocacy/leadership">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Program 3 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Scholarship+Program"
                  alt="Girl Scholar program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-pink-500" />
                  <h3 className="font-bold text-xl">Girl Scholar</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive scholarships that cover tuition, books, uniforms, and mentoring support to ensure girls can complete their education without financial barriers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Full educational scholarships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Academic mentoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Career guidance</span>
                  </li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="/programs/girl-child-advocacy/scholarships">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-800">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Impact & Testimonials</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Real stories of transformation from girls whose lives have been changed through our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Story 1 */}
            <Card className="border-gray-200 shadow overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Amina"
                    alt="Amina's story"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 md:w-3/5">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl">Amina's Journey</h3>
                      <p className="text-gray-500">STEM Scholarship Recipient</p>
                    </div>
                    <p className="text-gray-600 italic">
                      "The scholarship and mentorship provided by the Foundation changed my life. I am now studying computer engineering and inspiring other girls in my community to pursue STEM careers."
                    </p>
                    <p className="text-gray-600">
                      Amina was the first in her family to attend university. Through our Girl Scholar program, she received a full scholarship and is now excelling in her studies.
                    </p>
                    <Button variant="outline" className="group" asChild>
                      <Link href="/success-stories" className="flex items-center gap-2">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
            
            {/* Story 2 */}
            <Card className="border-gray-200 shadow overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Sarah"
                    alt="Sarah's story"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 md:w-3/5">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl">Sarah's Transformation</h3>
                      <p className="text-gray-500">Girl Leaders Program Graduate</p>
                    </div>
                    <p className="text-gray-600 italic">
                      "The leadership skills I gained through the Girl Leaders program gave me the confidence to start a community project that now helps dozens of young girls in my village."
                    </p>
                    <p className="text-gray-600">
                      After completing our leadership program, Sarah started a weekend literacy program in her community that has helped over 50 girls improve their reading skills.
                    </p>
                    <Button variant="outline" className="group" asChild>
                      <Link href="/success-stories" className="flex items-center gap-2">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          
          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-pink-600">5,000+</h3>
                  <p className="text-gray-600">Girls Supported</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-pink-600">1,200+</h3>
                  <p className="text-gray-600">Scholarships Awarded</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-pink-600">98%</h3>
                  <p className="text-gray-600">Program Completion Rate</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-pink-600">25+</h3>
                  <p className="text-gray-600">Communities Impacted</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="w-full py-16 md:py-24 bg-pink-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Help Us Empower More Girls</h2>
              <p className="text-white/90 text-lg">
                Join our mission to empower girls through education, leadership training, and advocacy. 
                Your support can help break barriers and create opportunities for girls around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-pink-600 hover:bg-gray-100" size="lg" asChild>
                  <Link href="/donate">Make a Donation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg" asChild>
                  <Link href="/volunteer">Volunteer With Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Support+Girl+Child+Advocacy"
                alt="Support our Girl Child Advocacy program"
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

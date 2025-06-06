import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Users, Heart, Award } from "lucide-react"

export default function CommunityOutreachPage() {
  return (
    <div className="container max-w-6xl px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200&text=Community+Outreach"
          alt="Community Outreach Programs"
          width={1200}
          height={500}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Outreach Programs</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Building stronger communities through engagement, support, and sustainable development initiatives.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Neighborhood Development</Badge>
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Youth Mentorship</Badge>
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Food Security</Badge>
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Community Events</Badge>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Community Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The Caywood Brown Foundation is committed to strengthening communities through targeted outreach programs that
          address local needs, foster collaboration, and create sustainable positive change. We believe that thriving
          communities are built on strong relationships, shared resources, and collective action.
        </p>
      </div>

      {/* Key Programs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Key Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Neighborhood Support Network</CardTitle>
              <CardDescription>Connecting neighbors to build stronger communities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our neighborhood support networks bring together local residents to address community needs, share
                resources, and develop solutions to common challenges.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Community clean-up initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Neighborhood watch programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Resource sharing networks</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Youth Mentorship Program</CardTitle>
              <CardDescription>Guiding the next generation of community leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our mentorship program pairs young people with experienced mentors who provide guidance, support, and
                opportunities for personal and professional growth.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>One-on-one mentoring relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Group workshops and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Leadership development opportunities</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Community Food Security</CardTitle>
              <CardDescription>Ensuring access to nutritious food for all</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our food security initiatives work to eliminate hunger and improve access to healthy, affordable food
                options in underserved communities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Community garden programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Food distribution networks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Nutrition education workshops</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-amber-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Community Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
            <p className="text-gray-700">Community partnerships</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">1,200+</div>
            <p className="text-gray-700">Volunteer hours</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">15</div>
            <p className="text-gray-700">Neighborhood projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">5,000+</div>
            <p className="text-gray-700">Community members served</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Community Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Community Clean-up</Badge>
              <h3 className="text-xl font-bold mb-2">Spring Neighborhood Beautification</h3>
              <p className="text-gray-700 mb-4">
                Join us for a day of community service as we clean up local parks and public spaces.
              </p>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>June 15, 2024 • 9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Centennial Park</span>
              </div>
              <Button className="w-full">Register to Volunteer</Button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Workshop</Badge>
              <h3 className="text-xl font-bold mb-2">Community Leadership Workshop</h3>
              <p className="text-gray-700 mb-4">
                Learn essential leadership skills to make a positive impact in your community.
              </p>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>July 8, 2024 • 6:00 PM - 8:00 PM</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Community Center, Room 204</span>
              </div>
              <Button className="w-full">Register Now</Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/events">
              View All Community Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved in Your Community</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          There are many ways to make a difference in your community. Whether you want to volunteer, donate, or partner
          with us, your contribution matters.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" asChild>
            <Link href="/volunteer">Volunteer With Us</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/#donate">Make a Donation</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/partner">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

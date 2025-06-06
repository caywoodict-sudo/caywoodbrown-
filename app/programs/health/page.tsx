import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Heart, Activity, Utensils, Users } from "lucide-react"

export default function HealthInitiativesPage() {
  return (
    <div className="container max-w-6xl px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200&text=Health+Initiatives"
          alt="Health Initiatives"
          width={1200}
          height={500}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Initiatives</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Promoting wellness, preventive care, and health education to build healthier communities.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Wellness Programs</Badge>
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Health Screenings</Badge>
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Nutrition Education</Badge>
            <Badge className="bg-white text-amber-700 hover:bg-white/90 text-sm py-1.5">Mental Health Support</Badge>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Health Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The Caywood Brown Foundation is dedicated to improving health outcomes in underserved communities through
          education, prevention, and access to care. We believe that good health is fundamental to individual and
          community wellbeing, and we work to address health disparities through targeted programs and partnerships.
        </p>
      </div>

      {/* Key Programs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Health Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Community Health Screenings</CardTitle>
              <CardDescription>Early detection for better health outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our mobile health screening program brings preventive care directly to communities, offering free
                screenings for common health conditions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Blood pressure checks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Diabetes screenings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Vision and hearing tests</span>
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
                <Utensils className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Nutrition & Healthy Eating</CardTitle>
              <CardDescription>Building healthy habits for life</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our nutrition programs provide education and resources to help families make healthier food choices and
                develop sustainable eating habits.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Cooking demonstrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Grocery shopping workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Meal planning assistance</span>
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
                <Activity className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Mental Health Support</CardTitle>
              <CardDescription>Promoting emotional wellbeing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our mental health initiatives aim to reduce stigma, increase awareness, and improve access to mental
                health resources and support.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Support groups</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Mental health first aid training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Resource navigation assistance</span>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Our Health Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">3,500+</div>
            <p className="text-gray-700">Health screenings provided</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">1,200+</div>
            <p className="text-gray-700">Nutrition workshop participants</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <p className="text-gray-700">Mental health resources distributed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">15</div>
            <p className="text-gray-700">Healthcare partnerships</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Community Voices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold">Maria Johnson</h4>
                <p className="text-gray-500 text-sm">Program Participant</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The nutrition workshops changed how my family eats. We've learned how to prepare healthy meals on a
              budget, and my children are now excited about trying new vegetables. Our health has improved
              significantly."
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold">James Wilson</h4>
                <p className="text-gray-500 text-sm">Community Health Volunteer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Volunteering with the health screening program has been incredibly rewarding. We've identified several
              cases of high blood pressure and diabetes that might have gone undetected, potentially saving lives."
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Health Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Health Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Health Fair</Badge>
              <h3 className="text-xl font-bold mb-2">Community Health & Wellness Fair</h3>
              <p className="text-gray-700 mb-4">
                Free health screenings, wellness information, and activities for the whole family.
              </p>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>July 22, 2024 • 10:00 AM - 3:00 PM</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Community Center</span>
              </div>
              <Button className="w-full">Learn More</Button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Workshop</Badge>
              <h3 className="text-xl font-bold mb-2">Mental Health First Aid Training</h3>
              <p className="text-gray-700 mb-4">
                Learn how to identify, understand and respond to signs of mental health challenges.
              </p>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>August 5, 2024 • 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Public Library, Conference Room A</span>
              </div>
              <Button className="w-full">Register Now</Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/events">
              View All Health Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Partners */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Health Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((partner) => (
            <div
              key={partner}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center"
            >
              <Image
                src={`/placeholder.svg?height=80&width=160&text=Partner+${partner}`}
                alt={`Health Partner ${partner}`}
                width={160}
                height={80}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Support Our Health Initiatives</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Your support helps us provide essential health services and education to those who need it most. Join us in
          building healthier communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" asChild>
            <Link href="/volunteer">Volunteer</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/#donate">Donate</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/partner">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

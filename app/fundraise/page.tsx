import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Gift, Trophy, Heart, DollarSign } from "lucide-react"

export default function FundraisePage() {
  return (
    <div className="container max-w-6xl px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200&text=Fundraise+For+Us"
          alt="Fundraise For Us"
          width={1200}
          height={500}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fundraise For Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Turn your passion into purpose by organizing a fundraiser to support the Caywood Brown Foundation's mission.
          </p>
          <Button size="lg" variant="secondary" className="w-fit">
            Start Your Fundraiser
          </Button>
        </div>
      </div>

      {/* Why Fundraise */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Fundraise for Us?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          When you fundraise for the Caywood Brown Foundation, you're directly supporting programs that empower
          communities, provide educational opportunities, and improve health outcomes for those who need it most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Make a Difference</h3>
            <p className="text-gray-700">
              Your fundraising efforts directly support our programs and the communities we serve.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Build Community</h3>
            <p className="text-gray-700">
              Bring people together around a shared cause and create meaningful connections.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Develop Skills</h3>
            <p className="text-gray-700">Gain valuable experience in event planning, marketing, and leadership.</p>
          </div>
        </div>
      </div>

      {/* Fundraising Ideas */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Fundraising Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Host an Event</CardTitle>
              <CardDescription>Bring people together for a cause</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Organize an event where attendees can learn about our mission while enjoying themselves.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Charity dinner or gala</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Benefit concert or performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Trivia night or game tournament</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Art show or auction</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Personal Campaigns</CardTitle>
              <CardDescription>Leverage your personal milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Turn your special occasions into opportunities to support our cause.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Birthday fundraisers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Wedding or anniversary donations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Memorial or tribute gifts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Holiday giving campaigns</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Challenge Fundraisers</CardTitle>
              <CardDescription>Set a goal and inspire others</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Challenge yourself and others to achieve a goal while raising funds.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Athletic events (runs, walks, rides)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Read-a-thons or other skill challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>30-day challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <span>Matching gift campaigns</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Fundraiser Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Community+Run"
                alt="Community Run Fundraiser"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200">Athletic Event</Badge>
              <h3 className="text-xl font-bold mb-2">Community 5K Run</h3>
              <p className="text-gray-700 mb-4">
                Sarah organized a community 5K run that brought together 200 participants and raised over $15,000 for
                our educational programs. The event included a family-friendly festival with food, music, and
                activities.
              </p>
              <div className="flex items-center text-amber-600 font-medium">
                <DollarSign className="h-5 w-5 mr-1" />
                <span>$15,000 raised</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Benefit+Concert"
                alt="Benefit Concert Fundraiser"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200">Cultural Event</Badge>
              <h3 className="text-xl font-bold mb-2">Local Artists Benefit Concert</h3>
              <p className="text-gray-700 mb-4">
                Marcus coordinated a benefit concert featuring local musicians that attracted 350 attendees and raised
                $12,500 for our community health initiatives. The event showcased diverse musical talents and included
                information about our programs.
              </p>
              <div className="flex items-center text-amber-600 font-medium">
                <DollarSign className="h-5 w-5 mr-1" />
                <span>$12,500 raised</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24">
            {/* Step 1 */}
            <div className="md:pr-12 md:text-right relative">
              <div className="md:absolute md:right-0 md:translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mb-4 md:mb-0 z-10">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Fundraiser</h3>
              <p className="text-gray-700">
                Decide what type of fundraiser you want to organize based on your interests and resources.
              </p>
            </div>
            <div className="md:hidden"></div>

            {/* Step 2 */}
            <div className="md:hidden"></div>
            <div className="md:pl-12 relative">
              <div className="md:absolute md:left-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mb-4 md:mb-0 z-10">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Register Your Fundraiser</h3>
              <p className="text-gray-700">
                Complete our online registration form to let us know about your plans and how we can support you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="md:pr-12 md:text-right relative">
              <div className="md:absolute md:right-0 md:translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mb-4 md:mb-0 z-10">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Plan and Promote</h3>
              <p className="text-gray-700">
                Use our fundraising toolkit to plan your event and promote it to your network.
              </p>
            </div>
            <div className="md:hidden"></div>

            {/* Step 4 */}
            <div className="md:hidden"></div>
            <div className="md:pl-12 relative">
              <div className="md:absolute md:left-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mb-4 md:mb-0 z-10">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Host Your Fundraiser</h3>
              <p className="text-gray-700">
                Execute your fundraiser with our support and collect donations for the foundation.
              </p>
            </div>

            {/* Step 5 */}
            <div className="md:pr-12 md:text-right relative">
              <div className="md:absolute md:right-0 md:translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mb-4 md:mb-0 z-10">
                5
              </div>
              <h3 className="text-xl font-bold mb-2">Celebrate and Share</h3>
              <p className="text-gray-700">
                Share your success story with us and celebrate the impact you've made on our mission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Fundraising Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader>
              <CardTitle>Fundraising Toolkit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Download our comprehensive toolkit with planning guides, templates, and promotional materials.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download Toolkit
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader>
              <CardTitle>Online Fundraising Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Create your personalized online fundraising page to collect donations and track your progress.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Create Your Page
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-amber-200 hover:border-amber-400 transition-colors">
            <CardHeader>
              <CardTitle>Fundraising Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Connect with our fundraising team for personalized guidance and support for your initiative.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Can I fundraise for a specific program?</h3>
            <p className="text-gray-700">
              Yes! You can designate your fundraiser to support a specific program or initiative within the foundation.
              Just let us know your preference when you register your fundraiser.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Will the foundation help promote my fundraiser?</h3>
            <p className="text-gray-700">
              We're happy to help promote your fundraiser through our social media channels and email newsletters. We
              can also provide you with promotional materials and messaging to help you reach your network.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Can I use the foundation's logo for my fundraiser?</h3>
            <p className="text-gray-700">
              Yes, registered fundraisers can use our logo according to our brand guidelines. We'll provide you with
              approved logo files and usage instructions when you register your fundraiser.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Are donations to my fundraiser tax-deductible?</h3>
            <p className="text-gray-700">
              Yes, donations made directly to the Caywood Brown Foundation through your fundraiser are tax-deductible to
              the extent allowed by law. We'll provide tax receipts to donors who contribute through our official
              channels.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Start your fundraiser today and join our community of passionate supporters making a real impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary">
            Register Your Fundraiser
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  )
}

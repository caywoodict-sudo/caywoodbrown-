import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Leaf, Droplets, Sun } from "lucide-react"

export default function SustainabilityProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Sustainability projects by Caywood Brown Foundation"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-medium text-green-100 backdrop-blur-sm mb-4">
            Sustainability Projects
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Building a Sustainable Future
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Empowering communities through environmental conservation, sustainable agriculture, and renewable energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-6 text-lg h-auto"
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
              <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Sustainable Development Solutions</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Caywood Brown Foundation's Sustainability Projects focus on empowering communities to meet their needs while preserving natural resources for future generations. We believe that sustainable development is key to creating lasting positive change.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Community-Led Solutions</h3>
                    <p className="text-gray-600">Working directly with communities to develop sustainable solutions that address their specific environmental challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Training & Education</h3>
                    <p className="text-gray-600">Providing training in sustainable farming techniques, water conservation, and renewable energy adoption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Resource Provision</h3>
                    <p className="text-gray-600">Supplying tools, equipment, and resources necessary for implementing sustainable projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Long-term Monitoring</h3>
                    <p className="text-gray-600">Ensuring the ongoing success of projects through regular monitoring, evaluation, and support.</p>
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
                    src="/placeholder.svg?height=800&width=600&text=Sustainable+Farming"
                    alt="Sustainable farming project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Water+Conservation"
                    alt="Water conservation project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Solar+Energy"
                    alt="Solar energy installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Community+Garden"
                    alt="Community garden project"
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
            <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
              Key Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Sustainability Initiatives</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Explore our signature programs designed to promote environmental sustainability and empower communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Program 1 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Green+Farming"
                  alt="Green Farming Initiative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold text-xl">Green Farming Initiative</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Teaching sustainable farming techniques that increase crop yields while preserving soil health and biodiversity. Includes training in organic farming, crop rotation, and natural pest management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Organic farming techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Seed banks & diversification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Market access support</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/programs/sustainability/farming">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Program 2 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Clean+Water"
                  alt="Clean Water Solutions program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold text-xl">Clean Water Solutions</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Providing communities with access to clean water through sustainable water management systems, rainwater harvesting, and water purification technologies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Rainwater collection systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Water purification techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Well rehabilitation</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/programs/sustainability/water">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Program 3 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Renewable+Energy"
                  alt="Renewable Energy Access program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold text-xl">Renewable Energy Access</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Bringing clean, renewable energy to communities through solar installations, micro-hydro systems, and training in maintenance and usage of renewable energy technologies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Solar panel installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Technical training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Micro-grid development</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/programs/sustainability/energy">Learn More</Link>
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
            <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Community Impact</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Real stories of transformation from communities benefiting from our sustainability programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Story 1 */}
            <Card className="border-gray-200 shadow overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Green+Valley"
                    alt="Green Valley Cooperative story"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 md:w-3/5">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl">Green Valley Cooperative</h3>
                      <p className="text-gray-500">Sustainable Farming Program</p>
                    </div>
                    <p className="text-gray-600 italic">
                      "The sustainable farming techniques we learned have increased our crop yields by 40% while using less water and fewer chemical inputs. Our community is now more food secure than ever."
                    </p>
                    <p className="text-gray-600">
                      The Green Valley Cooperative includes 45 farmers who transitioned to sustainable agriculture practices. They now produce higher-value organic crops and have established a successful farmer's market.
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
                    src="/placeholder.svg?height=600&width=400&text=Riverside"
                    alt="Riverside Village story"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 md:w-3/5">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl">Riverside Village Transformation</h3>
                      <p className="text-gray-500">Clean Water & Solar Energy Project</p>
                    </div>
                    <p className="text-gray-600 italic">
                      "Access to clean water and solar electricity has transformed our village. Children can now study at night, and water-borne illnesses have decreased dramatically."
                    </p>
                    <p className="text-gray-600">
                      Riverside Village implemented both our Clean Water Solutions and Renewable Energy Access programs. The 120 households now have reliable access to clean water and solar electricity.
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
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-green-600">50+</h3>
                  <p className="text-gray-600">Communities Supported</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Leaf className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-green-600">2,500+</h3>
                  <p className="text-gray-600">Acres Sustainably Farmed</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Sun className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-green-600">3,000+</h3>
                  <p className="text-gray-600">Solar Installations</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 text-center p-6">
              <CardContent className="p-0 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Droplets className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-green-600">100+</h3>
                  <p className="text-gray-600">Water Projects Completed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="w-full py-16 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Help Us Build a Sustainable Future</h2>
              <p className="text-white/90 text-lg">
                Join our mission to create sustainable solutions that empower communities and protect our environment. 
                Your support can help implement projects that have lasting positive impacts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-green-600 hover:bg-gray-100" size="lg" asChild>
                  <Link href="/donate">Make a Donation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg" asChild>
                  <Link href="/volunteer">Volunteer With Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Support+Sustainability+Projects"
                alt="Support our Sustainability Projects"
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

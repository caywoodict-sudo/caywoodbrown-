import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building, Handshake, Globe, Users, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function PartnerPage() {
  return (
    <div className="container max-w-6xl px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200&text=Partner+With+Us"
          alt="Partner With Us"
          width={1200}
          height={500}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Join forces with the Caywood Brown Foundation to create meaningful impact and drive positive change in our
            communities.
          </p>
          <Button size="lg" variant="secondary" className="w-fit">
            Become a Partner Today
          </Button>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Partnering with the Caywood Brown Foundation offers a unique opportunity to align your organization with
          impactful community initiatives while achieving your corporate social responsibility goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expand Your Impact</h3>
            <p className="text-gray-700">
              Leverage our established community presence to extend your reach and create meaningful change.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Engage Your Team</h3>
            <p className="text-gray-700">
              Provide meaningful volunteer opportunities that build skills and boost employee satisfaction.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Enhance Your Brand</h3>
            <p className="text-gray-700">
              Demonstrate your commitment to social responsibility and community development.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Partnership Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Partnership Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-amber-200 hover:border-amber-400 transition-colors h-full">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Corporate Partnerships</CardTitle>
              <CardDescription>Strategic alliances for business impact</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Tailored partnerships that align with your business objectives while creating meaningful community impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Financial Support:</span> Annual sponsorships from $5,000 to $50,000+
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">In-Kind Donations:</span> Contribute products, services, or expertise
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Employee Engagement:</span> Volunteer programs and matching gifts
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-amber-700 mb-2">Partner Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <span>Brand visibility on website and materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <span>Recognition at foundation events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <span>Social media recognition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <span>CSR impact reporting</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:border-green-400 transition-colors h-full">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Nonprofit & NGO Partnerships</CardTitle>
              <CardDescription>Collaborative impact initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Join forces with us to extend our collective impact through shared resources and expertise.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Resource Sharing:</span> Collaborative program development and implementation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Joint Fundraising:</span> Collaborative grant applications and campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Knowledge Exchange:</span> Sharing best practices and lessons learned
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-green-700 mb-2">Partner Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>Extended reach and impact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>Shared resources and cost savings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>Cross-promotion opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>Collaborative funding opportunities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:border-blue-400 transition-colors h-full">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Academic Partnerships</CardTitle>
              <CardDescription>Research and education collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Partner with us on research initiatives, student internships, and educational program development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Research Collaboration:</span> Data collection, analysis, and publication
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Student Opportunities:</span> Internships, service learning, and field experience
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Curriculum Development:</span> Co-creating educational materials and programs
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-blue-700 mb-2">Partner Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span>Real-world application for research</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span>Student experiential learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span>Joint publication opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span>Community engagement credits</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Partner Inquiry Form */}
      <div className="bg-amber-50 rounded-2xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Become a Partner Today</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Interested in partnering with the Caywood Brown Foundation? Fill out the form below, and our partnership team will contact you to discuss opportunities that align with your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="org-name" className="text-sm font-medium">
                  Organization Name
                </label>
                <input
                  id="org-name"
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="org-type" className="text-sm font-medium">
                  Organization Type
                </label>
                <select id="org-type" className="w-full rounded-md border border-gray-300 p-2 text-sm" required>
                  <option value="">Please select</option>
                  <option value="corporate">Corporate/Business</option>
                  <option value="nonprofit">Nonprofit/NGO</option>
                  <option value="academic">Academic Institution</option>
                  <option value="government">Government Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Contact Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-title" className="text-sm font-medium">
                  Job Title
                </label>
                <input
                  id="contact-title"
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="partnership-interest" className="text-sm font-medium">
                Partnership Type of Interest
              </label>
              <select id="partnership-interest" className="w-full rounded-md border border-gray-300 p-2 text-sm" required>
                <option value="">Please select</option>
                <option value="corporate">Corporate Partnership</option>
                <option value="nonprofit">Nonprofit/NGO Partnership</option>
                <option value="academic">Academic Partnership</option>
                <option value="sponsorship">Event Sponsorship</option>
                <option value="in-kind">In-Kind Donation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="partnership-goals" className="text-sm font-medium">
                Partnership Goals & Objectives
              </label>
              <textarea
                id="partnership-goals"
                rows={4}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Please describe what you hope to achieve through this partnership"
                required
              ></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="additional-info" className="text-sm font-medium">
                Additional Information (Optional)
              </label>
              <textarea
                id="additional-info"
                rows={4}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Any other information that would be helpful for us to know"
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600">
              Submit Partnership Inquiry
            </Button>
          </form>

          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold mb-4">Partnership Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold shrink-0 mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Initial Inquiry</h4>
                    <p className="text-sm text-gray-600">Submit your partnership inquiry form</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold shrink-0 mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Exploratory Meeting</h4>
                    <p className="text-sm text-gray-600">Discuss potential partnership opportunities and alignment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold shrink-0 mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Partnership Proposal</h4>
                    <p className="text-sm text-gray-600">Development of a customized partnership agreement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold shrink-0 mr-3">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Implementation</h4>
                    <p className="text-sm text-gray-600">Launch and execution of partnership initiatives</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold shrink-0 mr-3">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Evaluation & Growth</h4>
                    <p className="text-sm text-gray-600">Regular assessment and exploring opportunities for expansion</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Contact Our Partnership Team</h3>
              <p className="text-gray-600 mb-4">
                For immediate assistance or to discuss partnership opportunities directly:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-500 mr-3" />
                  <a href="mailto:partnerships@caywoodbrown.org" className="text-amber-600 hover:underline">
                    partnerships@caywoodbrown.org
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-500 mr-3" />
                  <span>(555) 123-4567 ext. 3</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1" />
                  <span>123 Main Street, Suite 200<br />Anytown, USA 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

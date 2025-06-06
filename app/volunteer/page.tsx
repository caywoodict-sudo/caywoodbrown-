import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  AlertCircle
} from "lucide-react"

// Define dummy data for volunteer page
const volunteerRoles = [
  {
    id: "education-mentor",
    title: "Education Mentor",
    description: "Provide academic support and mentorship to students in our educational programs.",
    timeCommitment: "2-4 hours per week",
    schedule: "Weekdays or weekends",
    icon: <Users className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Education+Mentor",
  },
  {
    id: "event-volunteer",
    title: "Event Volunteer",
    description: "Assist with planning, setup, and execution of foundation events and fundraisers.",
    timeCommitment: "Varies by event",
    schedule: "As needed for events",
    icon: <Calendar className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Event+Volunteer",
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    description: "Support our outreach efforts in local communities through various programs and initiatives.",
    timeCommitment: "4-6 hours per week",
    schedule: "Flexible",
    icon: <Users className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Community+Outreach",
  },
]

const volunteerStories = [
  {
    name: "Sarah Johnson",
    role: "Education Mentor",
    quote: "Volunteering with the foundation has been incredibly rewarding. Seeing the students grow and develop their skills is what keeps me coming back week after week.",
    since: "2019",
    image: "/placeholder.svg?height=400&width=400&text=Sarah",
  },
  {
    name: "Michael Chen",
    role: "Event Coordinator",
    quote: "I've gained valuable leadership experience while making a difference in the community. The team is supportive, and every event we organize creates real impact.",
    since: "2020",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
  },
]

const faqs = [
  {
    question: "What skills or qualifications do I need to volunteer?",
    answer: "We welcome volunteers with a variety of skills and experience levels. Most important is your commitment, reliability, and passion for our mission. Specific roles may require certain skills or background checks, which will be discussed during the application process."
  },
  {
    question: "How much time do I need to commit?",
    answer: "We offer flexible volunteering opportunities ranging from one-time events to regular weekly commitments. You can choose opportunities that fit your schedule and availability."
  },
  {
    question: "Can I volunteer as part of a group or team?",
    answer: "Yes, we welcome group volunteering from companies, schools, community organizations, and other groups. Please contact us directly to discuss group volunteer opportunities."
  },
  {
    question: "Will I receive training?",
    answer: "Yes, all volunteers receive an orientation to our organization and specific training related to their volunteer role. We want to ensure you feel prepared and confident in your volunteer activities."
  },
]

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Volunteers working together"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-100 backdrop-blur-sm mb-4">
            Get Involved
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Volunteer With Us</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Share your time, skills, and passion to make a meaningful difference in the lives of those we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#opportunities">View Opportunities</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Why Volunteer
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Make a Meaningful Impact</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Volunteering with the Caywood Brown Foundation is a rewarding experience that allows you to contribute
                to positive change in your community. Our volunteers are essential partners in our mission to empower
                individuals and strengthen communities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you can commit to a regular schedule or prefer one-time opportunities, whether you're skilled in
                a specific area or simply eager to help, we have volunteer roles that match your interests and
                availability.
              </p>
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold">Benefits of Volunteering</h3>
                <ul className="space-y-2">
                  {[
                    "Make a tangible difference in people's lives",
                    "Develop new skills and gain valuable experience",
                    "Connect with like-minded individuals in your community",
                    "Share your expertise and knowledge with others",
                    "Be part of a supportive and dedicated team",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Volunteers working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="w-full py-16 md:py-24 bg-gray-50" id="opportunities">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Opportunities
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Volunteer Roles</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Explore the various ways you can contribute your time and talents to support our mission.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={role.image || "/placeholder.svg"}
                    alt={role.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Time Commitment: {role.timeCommitment}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Schedule: {role.schedule}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/volunteer/${role.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Volunteer Stories</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Hear from our volunteers about their experiences and the impact of their service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {volunteerStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <p className="text-amber-600 font-medium mb-4">{story.role}</p>
                    <p className="text-gray-600 mb-4">"{story.quote}"</p>
                    <p className="text-gray-600 italic">Volunteering since {story.since}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-16 md:py-24 bg-amber-50" id="apply">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How to Become a Volunteer</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Joining our volunteer team is a simple process. We'll guide you through each step to ensure you find
                a role that matches your skills, interests, and availability.
              </p>

              <ol className="space-y-6 mt-8">
                <li className="flex">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-amber-600 font-bold">
                    1
                  </div>
                  <div className="ml-4 space-y-2">
                    <h3 className="text-lg font-bold">Complete the application</h3>
                    <p className="text-gray-600">
                      Fill out our volunteer application form with your contact information, interests, and availability.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-amber-600 font-bold">
                    2
                  </div>
                  <div className="ml-4 space-y-2">
                    <h3 className="text-lg font-bold">Attend orientation</h3>
                    <p className="text-gray-600">
                      Join a virtual or in-person orientation session to learn about our mission, programs, and
                      volunteer policies.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-amber-600 font-bold">
                    3
                  </div>
                  <div className="ml-4 space-y-2">
                    <h3 className="text-lg font-bold">Background check</h3>
                    <p className="text-gray-600">
                      Complete a background check process, which is required for all volunteers working with children
                      or vulnerable populations.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-amber-600 font-bold">
                    4
                  </div>
                  <div className="ml-4 space-y-2">
                    <h3 className="text-lg font-bold">Start making an impact</h3>
                    <p className="text-gray-600">
                      Begin your volunteer assignment and make a meaningful difference in our community.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Volunteer Application Form - Enhanced Section */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Volunteer Application Form</h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form below to express your interest in volunteering with us. Required fields are marked with an asterisk (*).
                </p>
                
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <textarea
                        id="address"
                        rows={2}
                        className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm"
                        placeholder="Street address, city, state, zip code"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Areas of Interest *
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        'Education Programs',
                        'Community Outreach',
                        'Administrative Support',
                        'Event Planning',
                        'Fundraising',
                        'Marketing & Communication',
                        'Mentoring',
                        'IT & Technical Support'
                      ].map((area) => (
                        <div key={area} className="flex items-center">
                          <input
                            type="checkbox"
                            id={area.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                            className="h-4 w-4 text-amber-600 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={area.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Availability *
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        'Weekdays - Morning',
                        'Weekdays - Afternoon',
                        'Weekdays - Evening',
                        'Weekends - Morning',
                        'Weekends - Afternoon',
                        'Weekends - Evening',
                        'One-time Events',
                        'Remote/Virtual'
                      ].map((time) => (
                        <div key={time} className="flex items-center">
                          <input
                            type="checkbox"
                            id={time.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                            className="h-4 w-4 text-amber-600 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={time.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {time}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="skills" className="text-sm font-medium text-gray-700">
                      Skills & Experience
                    </label>
                    <textarea
                      id="skills"
                      rows={3}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      placeholder="Tell us about any relevant skills, experience, or certifications you have"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                      Why do you want to volunteer with us? *
                    </label>
                    <textarea
                      id="motivation"
                      rows={3}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      placeholder="Share what motivated you to volunteer with the Caywood Brown Foundation"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-amber-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-700">
                        I understand that a background check may be required and I consent to the collection and processing of my personal information for volunteer registration purposes. *
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <p><strong>What happens next?</strong></p>
                      <p>After submitting your application, you'll receive a confirmation email within 1-2 business days with details about upcoming orientation sessions.</p>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Sign-Up Form */}
      <section id="apply" className="w-full py-16 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Join Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Volunteer Application</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
              Fill out the form below to express your interest in volunteering with us. We'll contact you to discuss opportunities that match your skills and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <textarea
                        id="address"
                        rows={3}
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      ></textarea>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold">Volunteer Interests</h3>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium mb-2">I'm interested in volunteering for (select all that apply):</p>
                      
                      <div className="space-y-2">
                        {[
                          "Educational Programs",
                          "Community Outreach",
                          "Health Initiatives",
                          "Fundraising Events",
                          "Administrative Support",
                          "Marketing & Communications",
                          "Sustainability Projects",
                        ].map((area, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              id={`interest-${index}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                            />
                            <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-gray-700">
                              {area}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="skills" className="text-sm font-medium">
                        Skills & Qualifications
                      </label>
                      <textarea
                        id="skills"
                        rows={3}
                        placeholder="Please list any relevant skills, qualifications, or experience you have."
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      ></textarea>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold">Availability</h3>
                    
                    <div className="space-y-2">
                      <label htmlFor="frequency" className="text-sm font-medium">
                        How often are you available to volunteer?
                      </label>
                      <select
                        id="frequency"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      >
                        <option value="">Please select</option>
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="occasionally">Occasionally / Special Events</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium mb-2">Days available (select all that apply):</p>
                      
                      <div className="grid grid-cols-4 gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                          (day, index) => (
                            <div key={index} className="flex items-center">
                              <input
                                id={`day-${index}`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                              />
                              <label htmlFor={`day-${index}`} className="ml-2 text-sm text-gray-700">
                                {day}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium mb-2">Time of day preference:</p>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {["Morning", "Afternoon", "Evening"].map((time, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              id={`time-${index}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                            />
                            <label htmlFor={`time-${index}`} className="ml-2 text-sm text-gray-700">
                              {time}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <label htmlFor="additionalInfo" className="text-sm font-medium">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="additionalInfo"
                      rows={3}
                      placeholder="Is there anything else you'd like us to know about you or your interest in volunteering?"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 h-auto">
                      Submit Application
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      By submitting this form, you agree to be contacted by the Caywood Brown Foundation regarding volunteer opportunities.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <span className="font-medium">Application Review:</span> We'll review your application within 5 business days.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <span className="font-medium">Initial Call:</span> Our volunteer coordinator will contact you to discuss your interests and availability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <span className="font-medium">Orientation:</span> You'll be invited to attend a volunteer orientation session.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <span className="font-medium">Background Check:</span> For certain roles, a background check may be required (at no cost to you).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      <span className="font-medium">Placement:</span> We'll match you with opportunities that align with your skills and interests.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Volunteer Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Recognition in our annual report and volunteer appreciation events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Letter of recommendation for dedicated volunteers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Skills development and training opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Networking with like-minded individuals and professionals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Questions?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about volunteering with us, please contact our volunteer coordinator:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-amber-500 mr-2" />
                    <a href="mailto:volunteer@caywoodbrown.org" className="text-amber-600 hover:underline">
                      volunteer@caywoodbrown.org
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-500 mr-2" />
                    <span>(555) 123-4567 ext. 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Find answers to common questions about volunteering with the Caywood Brown Foundation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions about volunteering? Our volunteer coordinator is here to help.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-amber-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Ready to Make a Difference?</h2>
          <p className="mx-auto max-w-[800px] text-white/90 text-lg mb-8">
            Join our community of dedicated volunteers and help us create positive change. Your time and talents can
            transform lives and strengthen communities.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-white/90 font-medium px-8 py-6 text-lg h-auto"
            asChild
          >
            <Link href="/volunteer/apply">Apply to Volunteer Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

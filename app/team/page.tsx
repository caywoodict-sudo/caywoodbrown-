import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Team members collaborating"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Our Team</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            Meet the dedicated individuals who lead the Caywood Brown Foundation and drive our mission forward.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Leadership
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Board of Directors</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Our board members bring diverse expertise and a shared commitment to our mission.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        className="text-gray-500 hover:text-amber-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.twitter && (
                      <Link
                        href={member.twitter}
                        className="text-gray-500 hover:text-amber-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    )}
                    <Link
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-amber-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Our Staff
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Executive Team</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Meet the dedicated professionals who manage our day-to-day operations and programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {staffMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <Link
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-amber-600 transition-colors inline-flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    <span className="text-sm">Contact</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Advisory Council
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Our Advisors</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Our advisory council provides strategic guidance and expertise to help us maximize our impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{advisor.name}</h3>
                      <p className="text-gray-600 text-sm">{advisor.expertise}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="w-full py-16 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800">
                Careers
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Team</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're always looking for passionate individuals who share our commitment to making a difference. Explore
                current opportunities to join our team and contribute to our mission.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <Link href="/careers">View Open Positions</Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Team members collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const boardMembers = [
  {
    name: "Dr. James Caywood",
    role: "Chairperson",
    bio: "Dr. Caywood is a renowned educator with over 30 years of experience in community development. He co-founded the Caywood Brown Foundation to address educational disparities in underserved communities.",
    image: "/placeholder.svg?height=400&width=300&text=Dr.+James",
    email: "james.caywood@example.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Patricia Brown",
    role: "Vice Chairperson",
    bio: "With a background in public health, Patricia has dedicated her career to improving healthcare access for vulnerable populations. She brings valuable expertise in health program development and implementation.",
    image: "/placeholder.svg?height=400&width=300&text=Patricia",
    email: "patricia.brown@example.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Michael Johnson",
    role: "Treasurer",
    bio: "Michael is a financial executive with expertise in nonprofit management. He ensures the foundation's resources are managed effectively to maximize our impact in the communities we serve.",
    image: "/placeholder.svg?height=400&width=300&text=Michael",
    email: "michael.johnson@example.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Dr. Sarah Rodriguez",
    role: "Secretary",
    bio: "Dr. Rodriguez is a sociologist specializing in community development. Her research on effective intervention strategies informs our program design and implementation.",
    image: "/placeholder.svg?height=400&width=300&text=Dr.+Sarah",
    email: "sarah.rodriguez@example.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Robert Chen",
    role: "Board Member",
    bio: "Robert brings extensive experience in corporate partnerships and fundraising. He helps the foundation build sustainable relationships with donors and corporate sponsors.",
    image: "/placeholder.svg?height=400&width=300&text=Robert",
    email: "robert.chen@example.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Amara Washington",
    role: "Board Member",
    bio: "As a community organizer and advocate, Amara ensures our programs remain responsive to community needs and incorporate the voices of those we serve.",
    image: "/placeholder.svg?height=400&width=300&text=Amara",
    email: "amara.washington@example.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
]

const staffMembers = [
  {
    name: "Jennifer Martinez",
    role: "Executive Director",
    bio: "Jennifer oversees all operations and strategic initiatives, bringing 15 years of nonprofit leadership experience to the foundation.",
    image: "/placeholder.svg?height=400&width=300&text=Jennifer",
    email: "jennifer.martinez@example.org",
  },
  {
    name: "David Thompson",
    role: "Program Director",
    bio: "David manages our educational and community development programs, ensuring they deliver meaningful impact.",
    image: "/placeholder.svg?height=400&width=300&text=David",
    email: "david.thompson@example.org",
  },
  {
    name: "Lisa Patel",
    role: "Development Director",
    bio: "Lisa leads our fundraising efforts and donor relations, building sustainable support for our mission.",
    image: "/placeholder.svg?height=400&width=300&text=Lisa",
    email: "lisa.patel@example.org",
  },
  {
    name: "Marcus Williams",
    role: "Communications Director",
    bio: "Marcus manages our communications strategy, sharing the stories of our impact and engaging our community.",
    image: "/placeholder.svg?height=400&width=300&text=Marcus",
    email: "marcus.williams@example.org",
  },
  {
    name: "Sophia Lee",
    role: "Health Programs Manager",
    bio: "Sophia coordinates our health initiatives, working with healthcare partners to improve access and outcomes.",
    image: "/placeholder.svg?height=400&width=300&text=Sophia",
    email: "sophia.lee@example.org",
  },
  {
    name: "Carlos Mendez",
    role: "Education Programs Manager",
    bio: "Carlos develops and implements our educational support programs, from scholarships to mentoring initiatives.",
    image: "/placeholder.svg?height=400&width=300&text=Carlos",
    email: "carlos.mendez@example.org",
  },
  {
    name: "Aisha Johnson",
    role: "Volunteer Coordinator",
    bio: "Aisha recruits, trains, and manages our volunteer network, maximizing their impact in our programs.",
    image: "/placeholder.svg?height=400&width=300&text=Aisha",
    email: "aisha.johnson@example.org",
  },
  {
    name: "Thomas Wilson",
    role: "Finance Manager",
    bio: "Thomas ensures financial accountability and transparency in all our operations and program expenditures.",
    image: "/placeholder.svg?height=400&width=300&text=Thomas",
    email: "thomas.wilson@example.org",
  },
]

const advisors = [
  {
    name: "Dr. Eleanor Hughes",
    expertise: "Education Policy",
    image: "/placeholder.svg?height=100&width=100&text=Dr.+E",
  },
  {
    name: "Raymond Foster",
    expertise: "Public Health",
    image: "/placeholder.svg?height=100&width=100&text=RF",
  },
  {
    name: "Maria Gonzalez",
    expertise: "Community Organizing",
    image: "/placeholder.svg?height=100&width=100&text=MG",
  },
  {
    name: "Dr. Kevin Park",
    expertise: "Research & Evaluation",
    image: "/placeholder.svg?height=100&width=100&text=Dr.+K",
  },
  {
    name: "Jasmine Taylor",
    expertise: "Youth Development",
    image: "/placeholder.svg?height=100&width=100&text=JT",
  },
  {
    name: "William Brooks",
    expertise: "Corporate Partnerships",
    image: "/placeholder.svg?height=100&width=100&text=WB",
  },
]

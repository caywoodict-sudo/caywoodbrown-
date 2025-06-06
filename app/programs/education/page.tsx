import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, GraduationCap, BookOpen } from "lucide-react"

export default function EducationProgramPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Students in a classroom setting"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-100 backdrop-blur-sm mb-4">
            Educational Support Program
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Empowering Through Education
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Providing scholarships, mentoring, and educational resources to help students achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#apply">Apply for Support</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#volunteer">Volunteer as a Mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Program Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Our Education Program</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Educational Support Program at the Caywood Brown Foundation is designed to address barriers to
                education and create pathways to success for students from underserved communities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through scholarships, mentoring, tutoring, and educational resources, we help students at all
                levels—from elementary school through college—achieve their academic goals and prepare for future
                success.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach is holistic, addressing not only academic needs but also the social, emotional, and
                practical challenges that can impact educational achievement.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Students receiving educational support"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Program Components</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Our Educational Support Program includes several key components designed to provide comprehensive support
              to students at various stages of their educational journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programComponents.map((component, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={component.image || "/placeholder.svg"}
                    alt={component.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      {component.icon}
                    </div>
                    <h3 className="text-xl font-bold">{component.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2 mb-4">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={component.link}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Impact Stories</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Meet some of the students whose lives have been transformed through our Educational Support Program.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {impactStories.map((story, index) => (
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
                    <p className="text-amber-600 font-medium mb-4">{story.program}</p>
                    <p className="text-gray-600 mb-4">{story.quote}</p>
                    <p className="text-gray-600 italic">— {story.outcome}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/stories">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="w-full py-16 md:py-24 bg-amber-50" id="apply">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800">
                Get Support
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Apply for Educational Support</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                If you or someone you know could benefit from our Educational Support Program, we encourage you to
                apply. Our application process is designed to be straightforward and accessible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Review Eligibility</h3>
                    <p className="text-gray-600">
                      Check our eligibility criteria to ensure the program is a good fit for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Complete Application</h3>
                    <p className="text-gray-600">
                      Fill out our online application form, providing information about your educational background and
                      needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Interview Process</h3>
                    <p className="text-gray-600">
                      Selected applicants will be invited for an interview to discuss their goals and how we can best
                      support them.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Enrollment</h3>
                    <p className="text-gray-600">
                      Accepted applicants will be enrolled in the appropriate program components based on their needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                  <Link href="/apply">Start Application</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Student filling out application"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="w-full py-16 md:py-24 bg-white" id="volunteer">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-2xl order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Volunteer mentoring a student"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Get Involved
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Volunteer as a Mentor</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mentors play a crucial role in the success of our Educational Support Program. By sharing your
                knowledge, experience, and time, you can make a significant difference in a student's life.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We welcome volunteers from diverse backgrounds and professions. Whether you're a professional in a
                specific field, a college student, or a retiree with valuable life experience, you have something
                valuable to offer our students.
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">As a mentor, you can:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Provide academic tutoring in your area of expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Offer career guidance and insights about your professional field
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Support students in developing life skills and confidence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Serve as a positive role model and source of encouragement</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                  <Link href="/volunteer">Become a Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Find answers to common questions about our Educational Support Program.
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
              Don't see your question here? Contact us for more information about our Educational Support Program.
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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Support Our Educational Programs</h2>
          <p className="mx-auto max-w-[800px] text-white/90 text-lg mb-8">
            Your donation helps us provide scholarships, mentoring, and educational resources to students in need. Every
            contribution makes a difference in a student's educational journey.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-white/90 font-medium px-8 py-6 text-lg h-auto"
            asChild
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const programComponents = [
  {
    title: "Scholarships",
    description: "Financial support for students pursuing higher education or specialized training programs.",
    features: [
      "Need-based scholarships for college and vocational programs",
      "Merit-based awards for outstanding academic achievement",
      "Emergency financial assistance for educational expenses",
    ],
    icon: <GraduationCap className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Scholarships",
    link: "/programs/education/scholarships",
  },
  {
    title: "Mentoring",
    description: "One-on-one guidance and support from experienced mentors in various fields.",
    features: [
      "Academic mentoring for improved school performance",
      "Career mentoring for professional development",
      "Life skills mentoring for personal growth",
    ],
    icon: <Users className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Mentoring",
    link: "/programs/education/mentoring",
  },
  {
    title: "Learning Resources",
    description: "Access to educational materials, technology, and learning environments.",
    features: [
      "Textbooks and educational supplies",
      "Computer and internet access",
      "Study spaces and learning centers",
    ],
    icon: <BookOpen className="h-6 w-6 text-amber-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Resources",
    link: "/programs/education/resources",
  },
]

const impactStories = [
  {
    name: "Maya Johnson",
    program: "Scholarship Recipient",
    quote:
      "The scholarship from the Caywood Brown Foundation made it possible for me to attend college—something I never thought would be possible for me. Beyond the financial support, the mentoring I received helped me navigate the challenges of higher education.",
    outcome: "Now a first-generation college graduate with a degree in nursing",
    image: "/placeholder.svg?height=600&width=400&text=Maya",
  },
  {
    name: "Carlos Rodriguez",
    program: "Mentoring Program",
    quote:
      "My mentor didn't just help me with homework—he helped me see possibilities for my future that I hadn't considered. Having someone who believed in me and pushed me to excel made all the difference in my educational journey.",
    outcome: "Currently pursuing a degree in computer science with a full scholarship",
    image: "/placeholder.svg?height=600&width=400&text=Carlos",
  },
]

const faqs = [
  {
    question: "Who is eligible for the Educational Support Program?",
    answer:
      "Our program primarily serves students from underserved communities who demonstrate financial need and a commitment to their education. Specific eligibility criteria vary by program component, but we generally work with students from elementary school through college.",
  },
  {
    question: "How are scholarship recipients selected?",
    answer:
      "Scholarship recipients are selected based on a combination of financial need, academic potential, personal circumstances, and commitment to education. We consider the whole person, not just grades or test scores, in our selection process.",
  },
  {
    question: "What is the time commitment for mentors?",
    answer:
      "Mentors typically commit to at least 4 hours per month for a minimum of one academic year. This includes regular meetings with their mentee and occasional check-ins with program staff. We work with volunteers to find a schedule that works for them.",
  },
  {
    question: "Can I apply for multiple program components?",
    answer:
      "Yes, students can apply for and participate in multiple components of our Educational Support Program. In fact, we find that students often benefit most when they receive comprehensive support across different areas.",
  },
  {
    question: "Is there a cost to participate in the program?",
    answer:
      "No, all of our educational support services are provided at no cost to participants. Our programs are funded through donations, grants, and partnerships with other organizations.",
  },
  {
    question: "How can I support the Educational Support Program?",
    answer:
      "There are many ways to support our work, including making a donation, volunteering as a mentor, providing internship opportunities for our students, or partnering with us as an organization. Contact us to learn more about how you can get involved.",
  },
]

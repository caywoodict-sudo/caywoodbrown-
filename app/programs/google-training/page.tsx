import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Clock, Code, GraduationCap } from "lucide-react"

export default function GoogleTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Google+Digital+Skills"
            alt="Students in a Google training session"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm mb-4">
            Google Partnership Program
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Google Digital Skills Training
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Empowering students with the digital skills needed for today's technology-driven world through our
            partnership with Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#apply">Apply for Training</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link href="#courses">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                Program Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Our Google Partnership</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Caywood Brown Foundation has partnered with Google to provide comprehensive digital skills training
                to students in underserved communities. This initiative is designed to bridge the digital divide and
                create pathways to careers in technology and digital marketing.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through this partnership, we offer Google-developed curriculum, hands-on workshops, certification
                programs, and mentorship opportunities with Google professionals. Our goal is to equip students with the
                skills and knowledge needed to succeed in today's digital economy.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since launching this program in 2023, we have trained over 3,000 students, with 85% reporting improved
                job prospects and digital literacy.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Google+Partnership"
                alt="Students receiving Google digital skills training"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="w-full py-16 md:py-24 bg-gray-50" id="courses">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Training Courses</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Our Google Digital Skills program includes several key components designed to provide comprehensive
              training in various aspects of digital technology and marketing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-bold">{course.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Skill Level: {course.level}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    asChild
                  >
                    <Link href={`/programs/google-training/${course.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Student Achievements</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Meet some of the students whose lives have been transformed through our Google Digital Skills Training
              program.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {successStories.map((story, index) => (
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
                    <p className="text-blue-600 font-medium mb-4">{story.course}</p>
                    <p className="text-gray-600 mb-4">"{story.quote}"</p>
                    <p className="text-gray-600 italic">— {story.outcome}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-16 md:py-24 bg-blue-50" id="apply">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-blue-200 px-4 py-1.5 text-sm font-medium text-blue-800">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How to Apply</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our application process is designed to be straightforward and accessible. We welcome students from all
                backgrounds who are interested in developing their digital skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Complete Application</h3>
                    <p className="text-gray-600">
                      Fill out our online application form, providing information about your educational background and
                      interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Assessment</h3>
                    <p className="text-gray-600">
                      Complete a brief assessment to help us understand your current skill level and place you in the
                      appropriate course.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Interview</h3>
                    <p className="text-gray-600">
                      Selected applicants will be invited for a brief interview to discuss their goals and expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Enrollment</h3>
                    <p className="text-gray-600">
                      Accepted students will be enrolled in the appropriate course and receive all necessary materials
                      and access.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/programs/google-training/apply">Start Application</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=800&width=800&text=Apply+Now"
                alt="Student applying for Google training program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 mb-4">
              Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-lg">
              Find answers to common questions about our Google Digital Skills Training program.
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
              Have more questions about our Google Digital Skills Training program? Our team is here to help.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Start Your Digital Journey Today</h2>
          <p className="mx-auto max-w-[800px] text-white/90 text-lg mb-8">
            Join our Google Digital Skills Training program and gain the knowledge and skills needed to thrive in
            today's digital world. Whether you're looking to start a career in technology or enhance your digital
            literacy, we have a course for you.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 font-medium px-8 py-6 text-lg h-auto"
            asChild
          >
            <Link href="/programs/google-training/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const courses = [
  {
    id: "fundamentals",
    title: "Digital Fundamentals",
    description:
      "An introductory course covering the basics of digital literacy, online safety, and essential computer skills.",
    duration: "4 weeks",
    level: "Beginner",
    topics: [
      "Computer basics and internet navigation",
      "Email and online communication",
      "Online safety and privacy",
      "Introduction to productivity tools",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    image: "/placeholder.svg?height=400&width=600&text=Digital+Fundamentals",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript, to build interactive websites.",
    duration: "8 weeks",
    level: "Intermediate",
    topics: [
      "HTML structure and semantics",
      "CSS styling and responsive design",
      "JavaScript basics and DOM manipulation",
      "Building simple web applications",
    ],
    icon: <Code className="h-6 w-6 text-blue-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Web+Development",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Master the strategies and tools for effective online marketing, including SEO, social media, and analytics.",
    duration: "6 weeks",
    level: "All Levels",
    topics: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Email marketing campaigns",
      "Google Analytics and data interpretation",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Develop skills in data analysis using Google tools to extract insights and make data-driven decisions.",
    duration: "10 weeks",
    level: "Intermediate to Advanced",
    topics: [
      "Data collection and preparation",
      "Google Analytics and Data Studio",
      "Data visualization techniques",
      "Interpreting and presenting data insights",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    image: "/placeholder.svg?height=400&width=600&text=Data+Analytics",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Explore cloud technologies with Google Cloud Platform, learning about storage, computing, and deployment.",
    duration: "8 weeks",
    level: "Intermediate to Advanced",
    topics: [
      "Introduction to cloud concepts",
      "Google Cloud Platform basics",
      "Cloud storage and databases",
      "Deploying applications to the cloud",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    image: "/placeholder.svg?height=400&width=600&text=Cloud+Computing",
  },
  {
    id: "certification-prep",
    title: "Google Certification Prep",
    description: "Prepare for Google's professional certifications with comprehensive training and practice exams.",
    duration: "12 weeks",
    level: "Advanced",
    topics: [
      "Google Ads certification preparation",
      "Google Analytics certification preparation",
      "Digital Marketing certification preparation",
      "IT Support certification preparation",
    ],
    icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    image: "/placeholder.svg?height=400&width=600&text=Certification",
  },
]

const successStories = [
  {
    name: "James Wilson",
    course: "Web Development",
    quote:
      "Before joining the Google Digital Skills program, I had no coding experience. Now, I've built several websites and landed a job as a junior web developer at a local tech company.",
    outcome: "Now working as a Web Developer at TechSolutions Inc.",
    image: "/placeholder.svg?height=600&width=400&text=James",
  },
  {
    name: "Sophia Chen",
    course: "Digital Marketing",
    quote:
      "The digital marketing course gave me practical skills that I could immediately apply. The Google certification I earned helped me stand out to employers and launch my career in marketing.",
    outcome: "Recently promoted to Digital Marketing Manager",
    image: "/placeholder.svg?height=600&width=400&text=Sophia",
  },
]

const faqs = [
  {
    question: "Is this program free for students?",
    answer:
      "Yes, thanks to our partnership with Google, we are able to offer these training programs at no cost to eligible students. Our goal is to make digital skills training accessible to everyone, regardless of financial circumstances.",
  },
  {
    question: "Do I need prior experience in technology?",
    answer:
      "No prior experience is required for our beginner-level courses. We have programs designed for all skill levels, from complete beginners to those with some technology experience looking to advance their skills.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, students who successfully complete their course will receive a certificate of completion. Additionally, many of our courses prepare students for Google's professional certifications, which are recognized by employers worldwide.",
  },
  {
    question: "How much time do I need to commit to the program?",
    answer:
      "The time commitment varies by course, but most require 5-10 hours per week. We offer flexible scheduling options, including evening and weekend sessions, to accommodate students with work or school commitments.",
  },
  {
    question: "Are there age requirements for participation?",
    answer:
      "Our programs are primarily designed for students aged 16 and older. However, we do offer special programs for younger students (ages 13-15) with parental consent. Please contact us for more information about youth programs.",
  },
  {
    question: "Can I take multiple courses?",
    answer:
      "Yes, students are welcome to enroll in multiple courses, either concurrently or sequentially, depending on their availability and learning goals. We encourage students to build a comprehensive skill set across different digital domains.",
  },
]

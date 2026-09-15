"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQPage() {
  // FAQ Categories and Questions
  const faqCategories = [
    {
      id: "general",
      name: "General Information",
      questions: [
        {
          id: "what-is",
          question: "What is the Caywood Brown Foundation?",
          answer: "The Caywood Brown Foundation is a non-profit organization dedicated to creating lasting positive change through education, youth empowerment, health awareness, and sustainability initiatives. Founded by Senator Banigo, our foundation works to address the root causes of inequality and build pathways to prosperity for all."
        },
        {
          id: "mission",
          question: "What is your mission and vision?",
          answer: "Our mission is to empower underserved communities through educational opportunities, health services, and sustainable development programs. Our vision is a world where every individual has the resources and support needed to reach their full potential, regardless of their background or circumstances."
        },
        {
          id: "areas",
          question: "What geographic areas do you serve?",
          answer: "While we have a global vision, our current programs are primarily focused in [specific regions/countries]. We prioritize communities with the greatest need and where our resources can make the most significant impact."
        },
        {
          id: "transparency",
          question: "How do you ensure transparency and accountability?",
          answer: "We are committed to full transparency in our operations. We publish annual reports detailing our financial activities, program outcomes, and impact metrics. Our finances are audited by independent third parties, and we maintain strict governance policies to ensure all resources are used efficiently and ethically."
        }
      ]
    },
    {
      id: "donations",
      name: "Donations & Funding",
      questions: [
        {
          id: "how-donate",
          question: "How can I make a donation?",
          answer: "You can make a donation through our website using our secure payment system, which accepts credit cards and digital payment methods. You can also donate via bank transfer, check, or through donor-advised funds. For larger gifts or specific program support, please contact our development team directly."
        },
        {
          id: "tax-deductible",
          question: "Are donations tax-deductible?",
          answer: "Yes, the Caywood Brown Foundation is a registered 501(c)(3) non-profit organization in the United States. All donations from U.S. taxpayers are tax-deductible to the extent allowed by law. We provide tax receipts for all donations."
        },
        {
          id: "fund-allocation",
          question: "How are donations allocated?",
          answer: "We allocate donations based on our strategic priorities and where funds are most needed. Typically, at least 80% of all donations go directly to our programs and services, with the remainder covering essential administrative and fundraising costs. Donors can also designate their gifts to specific programs or initiatives."
        },
        {
          id: "corporate-matching",
          question: "Does the foundation accept corporate matching gifts?",
          answer: "Yes, we gladly accept corporate matching gifts, which can double or even triple your donation's impact. Many employers offer matching gift programs - check with your HR department to see if your company participates, and we'll help facilitate the process."
        }
      ]
    },
    {
      id: "volunteer",
      name: "Volunteering & Participation",
      questions: [
        {
          id: "how-volunteer",
          question: "How can I volunteer with the foundation?",
          answer: "You can volunteer by completing our volunteer application form on our website. We offer various opportunities ranging from event support to skilled volunteering in areas like teaching, healthcare, marketing, and technology. We match volunteers with roles based on their skills, interests, and our current needs."
        },
        {
          id: "time-commitment",
          question: "What is the time commitment for volunteers?",
          answer: "Volunteer commitments vary widely depending on the role. We offer one-time event opportunities, regular weekly or monthly positions, and project-based roles. We work with each volunteer to find a commitment level that fits their schedule while still making a meaningful contribution."
        },
        {
          id: "virtual-volunteer",
          question: "Do you offer virtual volunteering opportunities?",
          answer: "Yes, we offer various virtual volunteering opportunities including content creation, social media support, research, mentoring, and specialized professional services. These remote options allow people to contribute their skills regardless of their location."
        },
        {
          id: "group-volunteer",
          question: "Can organizations or companies volunteer as a group?",
          answer: "Absolutely! We welcome corporate and community group volunteering. We can arrange special project days or ongoing partnerships that align with your organization's interests and our needs. These experiences provide excellent team-building opportunities while supporting our mission."
        }
      ]
    },
    {
      id: "programs",
      name: "Programs & Impact",
      questions: [
        {
          id: "evaluate-impact",
          question: "How do you evaluate the impact of your programs?",
          answer: "We use a comprehensive monitoring and evaluation framework that includes both quantitative metrics and qualitative assessments. For each program, we establish specific, measurable outcomes and regularly track progress. We conduct pre- and post-program assessments, collect participant feedback, and perform longer-term follow-up studies to measure sustained impact."
        },
        {
          id: "success-stories",
          question: "Where can I read success stories from your programs?",
          answer: "You can find success stories in the 'Impact Stories' section of our website, in our annual reports, and on our social media channels. These stories highlight individual beneficiaries, communities, and programs that demonstrate the tangible results of our work."
        },
        {
          id: "partner",
          question: "How can my organization partner with the foundation?",
          answer: "We welcome partnerships with other NGOs, companies, government agencies, and academic institutions. To explore partnership opportunities, please contact our partnerships team through our website. We look for partners who share our values and can contribute complementary resources, expertise, or networks to amplify our impact."
        },
        {
          id: "apply-program",
          question: "How can individuals apply for your programs?",
          answer: "Application processes vary by program. Information about eligibility criteria and application procedures for each program can be found on the specific program pages of our website. For most programs, we have open application periods announced on our website and social media channels."
        }
      ]
    }
  ]

  // State for tracking open questions
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({})

  // Toggle question open/closed
  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Frequently Asked Questions - Caywood Brown Foundation"
            fill
            priority
            className="object-cover brightness-[0.7]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            Find answers to common questions about our foundation, programs, and how you can get involved.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-16">
            {faqCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4">
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <Card 
                      key={item.id} 
                      className="border-gray-100 shadow-sm"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleQuestion(item.id)}
                          className="flex items-center justify-between w-full p-6 text-left"
                        >
                          <h3 className="text-lg font-medium">{item.question}</h3>
                          <ChevronDown 
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              openQuestions[item.id] ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {openQuestions[item.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Still Have Questions?</h2>
            <p className="text-lg text-gray-600">
              If you couldn't find the information you're looking for, please reach out to us directly. 
              Our team is happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-600" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:info@caywoodbrownfoundation.org">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Donation Information</h3>
                  <p className="text-gray-600 mb-6">Learn about how your contribution makes a difference.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Volunteer Opportunities</h3>
                  <p className="text-gray-600 mb-6">Discover how you can contribute your time and skills.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/volunteer">Volunteer</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Our Programs</h3>
                  <p className="text-gray-600 mb-6">Explore the initiatives that drive our mission forward.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/programs">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, Users, DollarSign, Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function HostEventPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Host+An+Event"
            alt="Host an event with the Caywood Brown Foundation"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 px-4 md:px-6 text-center text-white"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Host an Event</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Partner with the Caywood Brown Foundation to organize impactful events that support our mission and make a
            difference in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-lg h-auto"
                asChild
              >
                <a href="#get-started">Get Started</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
                asChild
              >
                <a href="#event-types">Event Types</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Back to Events Link */}
      <section className="w-full py-6 bg-white">
        <div className="container px-4 md:px-6">
          <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-amber-600" asChild>
            <Link href="/events">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
        </div>
      </section>

      {/* Success Message */}
      {formSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mx-auto max-w-3xl mt-8 container"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium">Form submitted successfully!</h3>
              <div className="mt-2 text-sm">
                <p>
                  Thank you for your interest in hosting an event with the Caywood Brown Foundation. Our events team
                  will contact you within 2 business days to discuss your event proposal.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Why Host Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Why Host With Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Make a Meaningful Impact</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hosting an event with the Caywood Brown Foundation allows you to contribute directly to our mission of
                empowering communities through education and support. Your event can help raise awareness, funds, or
                provide valuable resources to those we serve.
              </p>
              <ul className="space-y-2">
                {[
                  "Access to our network of supporters and community partners",
                  "Professional guidance from our experienced events team",
                  "Marketing support through our channels and platforms",
                  "Potential for matching funds and sponsorships",
                  "Tax benefits for qualifying charitable events",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Community+Impact"
                alt="Community impact through events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types Section */}
      <section id="event-types" className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Event Types
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ways to Get Involved</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              There are many ways you can support our mission through events. Here are some popular options that have
              made a significant impact.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <DollarSign className="h-4 w-4 mr-2 text-amber-500" />
                    <span>{type.fundraisingPotential}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Users className="h-4 w-4 mr-2 text-amber-500" />
                    <span>{type.typicalAttendees}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-amber-500" />
                    <span>{type.planningTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              The Process
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've made it easy to host an event with the Caywood Brown Foundation. Follow these simple steps to get
              started.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Submit Your Proposal",
                description:
                  "Fill out our event proposal form with your ideas, goals, and preferred dates. Our team will review your submission and contact you within 2 business days.",
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
                    className="h-10 w-10 text-amber-500"
                  >
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                    <line x1="9" y1="9" x2="10" y2="9" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Planning & Preparation",
                description:
                  "Work with our events team to refine your event plan, set goals, and establish a timeline. We'll provide resources, guidance, and support throughout the process.",
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
                    className="h-10 w-10 text-amber-500"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Host Your Event",
                description:
                  "Execute your event with our support. We'll help promote it, provide materials, and ensure everything runs smoothly. After the event, we'll help evaluate its success and impact.",
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
                    className="h-10 w-10 text-amber-500"
                  >
                    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 right-0 w-full h-0.5 bg-amber-200 z-0 translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-amber-500">
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
                        className="h-6 w-6"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-amber-50 rounded-full p-4 mb-4">{step.icon}</div>
                    <div className="inline-block rounded-full bg-amber-500 px-4 py-1 text-sm font-medium text-white mb-4">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Support Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Resources
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Support for Event Hosts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to ensure your event is successful. Here are some of the resources
              available to event hosts.
            </p>
          </motion.div>

          <Tabs defaultValue="planning" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="planning">Planning</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="execution">Execution</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="planning" className="mt-0">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Planning Resources</h3>
                      <p className="text-gray-600 mb-6">
                        We provide comprehensive planning tools and templates to help you organize a successful event.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Event planning checklist and timeline",
                          "Budget templates and financial planning tools",
                          "Venue selection guidance and preferred vendor list",
                          "Risk assessment and management plans",
                          "Volunteer recruitment and management resources",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 bg-amber-500 hover:bg-amber-600" asChild>
                        <Link href="/resources/event-planning">Access Planning Resources</Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video md:aspect-auto overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Event+Planning"
                        alt="Event planning resources"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Marketing Support</h3>
                      <p className="text-gray-600 mb-6">
                        We help promote your event through our channels and provide marketing materials to ensure strong
                        attendance.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Promotion through our website, social media, and email newsletters",
                          "Customizable event flyers, posters, and digital graphics",
                          "Press release templates and media contact lists",
                          "Social media toolkit with sample posts and hashtags",
                          "Guidance on targeting and reaching your ideal audience",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 bg-amber-500 hover:bg-amber-600" asChild>
                        <Link href="/resources/event-marketing">Access Marketing Resources</Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video md:aspect-auto overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Event+Marketing"
                        alt="Event marketing resources"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="execution" className="mt-0">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Event Execution</h3>
                      <p className="text-gray-600 mb-6">
                        We provide day-of support and resources to ensure your event runs smoothly from start to finish.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Event day checklist and timeline",
                          "Foundation branded materials and signage",
                          "Registration and check-in systems",
                          "Volunteer coordination and management",
                          "Post-event evaluation tools and impact measurement",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 bg-amber-500 hover:bg-amber-600" asChild>
                        <Link href="/resources/event-execution">Access Execution Resources</Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video md:aspect-auto overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Event+Execution"
                        alt="Event execution resources"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about hosting events with the Caywood Brown Foundation.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What types of events can I host?",
                  answer:
                    "You can host a variety of events including fundraisers, workshops, community gatherings, awareness campaigns, and educational seminars. We're open to creative ideas that align with our mission and values.",
                },
                {
                  question: "Is there a minimum fundraising requirement?",
                  answer:
                    "While we don't have a strict minimum requirement, we recommend setting a fundraising goal that justifies the time and resources invested. Our team can help you determine an appropriate target based on your event type and scale.",
                },
                {
                  question: "Can the Foundation provide staff or volunteers for my event?",
                  answer:
                    "Depending on the nature and scale of your event, we may be able to provide staff support or connect you with volunteers. This is evaluated on a case-by-case basis and should be discussed during the planning phase.",
                },
                {
                  question: "How far in advance should I plan my event?",
                  answer:
                    "We recommend starting the planning process at least 3-6 months before your target date for medium to large events, and 1-2 months for smaller events. This allows adequate time for planning, promotion, and coordination.",
                },
                {
                  question: "Can I use the Foundation's logo and branding materials?",
                  answer:
                    "Yes, approved event hosts can use our logo and branding materials according to our brand guidelines. We'll provide you with the appropriate files and guidance on proper usage once your event is approved.",
                },
                {
                  question: "What happens to the funds raised at my event?",
                  answer:
                    "All funds raised go directly to supporting the Caywood Brown Foundation's programs and initiatives. We can work with you to designate funds to specific programs if you have a particular area of interest.",
                },
                {
                  question: "Are donations tax-deductible?",
                  answer:
                    "Yes, donations made to the Caywood Brown Foundation are tax-deductible to the extent allowed by law. We can provide tax receipts to donors who contribute to your event.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Submit Your Event Proposal</h2>
              <p className="text-gray-600">
                Fill out the form below to submit your event idea. Our team will review your proposal and contact you
                within 2 business days.
              </p>
            </div>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium leading-none">
                      Organization (if applicable)
                    </label>
                    <input
                      id="organization"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="event-type" className="text-sm font-medium leading-none">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select an event type</option>
                      <option value="fundraiser">Fundraiser</option>
                      <option value="workshop">Workshop or Training</option>
                      <option value="community">Community Gathering</option>
                      <option value="awareness">Awareness Campaign</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="event-date" className="text-sm font-medium leading-none">
                        Proposed Date
                      </label>
                      <input
                        id="event-date"
                        type="date"
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="event-location" className="text-sm font-medium leading-none">
                        Proposed Location
                      </label>
                      <input
                        id="event-location"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        placeholder="City, venue, or virtual"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="event-description" className="text-sm font-medium leading-none">
                      Event Description
                    </label>
                    <textarea
                      id="event-description"
                      className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      placeholder="Please describe your event idea, goals, and any specific details."
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="fundraising-goal" className="text-sm font-medium leading-none">
                      Fundraising Goal (if applicable)
                    </label>
                    <input
                      id="fundraising-goal"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      placeholder="$"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="support-needed" className="text-sm font-medium leading-none">
                      Support Needed
                    </label>
                    <textarea
                      id="support-needed"
                      className="flex min-h-[100px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      placeholder="What kind of support do you need from the Foundation? (e.g., marketing, volunteers, materials)"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 mt-1 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I understand that submitting this form does not guarantee approval of my event. The Caywood Brown
                      Foundation will review my proposal and contact me to discuss next steps.
                    </label>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Submit Proposal
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Host Spotlights</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn from the experiences of others who have successfully hosted events with the Caywood Brown
              Foundation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                title: "Community Volunteer",
                event: "Annual Charity Run",
                image: "/placeholder.svg?height=400&width=400&text=Sarah+J",
                quote:
                  "Organizing the charity run was a rewarding experience. The Foundation provided incredible support, from planning to execution, and we exceeded our fundraising goal by 30%!",
                raised: "$15,000",
                attendees: "250+",
              },
              {
                name: "Marcus Chen",
                title: "Local Business Owner",
                event: "Tech Skills Workshop",
                image: "/placeholder.svg?height=400&width=400&text=Marcus+C",
                quote:
                  "As a business owner, I wanted to give back to the community. The Foundation helped me organize a workshop that taught valuable skills to 50 young adults, many of whom have since found employment.",
                raised: "N/A",
                attendees: "50",
              },
              {
                name: "Priya Patel",
                title: "School Teacher",
                event: "Back-to-School Drive",
                image: "/placeholder.svg?height=400&width=400&text=Priya+P",
                quote:
                  "Our school partnered with the Foundation to host a supply drive. The resources and guidance they provided were invaluable, and we were able to provide supplies to over 300 students in need.",
                raised: "$8,500",
                attendees: "175",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{story.name}</h3>
                      <p className="text-gray-600 text-sm">{story.title}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 mb-2">
                      {story.event}
                    </div>
                    <blockquote className="text-gray-600 italic mb-4">"{story.quote}"</blockquote>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-amber-500" />
                      <span>Raised: {story.raised}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-amber-500" />
                      <span>Attendees: {story.attendees}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Have Questions?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our events team is here to help. Contact us directly with any questions about hosting an event.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            <Card className="flex-1 border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 rounded-full p-4 mb-4">
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
                    className="h-6 w-6 text-amber-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email with your questions or ideas, and we'll respond within 24 hours.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:events@caywoodbrownfoundation.org">events@caywoodbrownfoundation.org</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex-1 border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 rounded-full p-4 mb-4">
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
                    className="h-6 w-6 text-amber-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our events team during business hours (9am-5pm, Monday-Friday).
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample event types data
const eventTypes = [
  {
    title: "Fundraising Gala",
    description: "Formal events featuring dinner, entertainment, and auctions to raise significant funds.",
    image: "/placeholder.svg?height=400&width=600&text=Fundraising+Gala",
    fundraisingPotential: "High ($10,000+)",
    typicalAttendees: "100-300 guests",
    planningTime: "4-6 months",
  },
  {
    title: "Community Workshop",
    description: "Educational sessions that provide valuable skills and knowledge to community members.",
    image: "/placeholder.svg?height=400&width=600&text=Community+Workshop",
    fundraisingPotential: "Low to Medium",
    typicalAttendees: "20-50 participants",
    planningTime: "1-2 months",
  },
  {
    title: "Charity Run/Walk",
    description:
      "Athletic events that engage the community while raising funds through registrations and sponsorships.",
    image: "/placeholder.svg?height=400&width=600&text=Charity+Run",
    fundraisingPotential: "Medium to High",
    typicalAttendees: "100-500 participants",
    planningTime: "3-4 months",
  },
  {
    title: "Awareness Campaign",
    description: "Multi-channel initiatives to raise awareness about important issues and the Foundation's work.",
    image: "/placeholder.svg?height=400&width=600&text=Awareness+Campaign",
    fundraisingPotential: "Varies",
    typicalAttendees: "N/A (broad reach)",
    planningTime: "2-3 months",
  },
]

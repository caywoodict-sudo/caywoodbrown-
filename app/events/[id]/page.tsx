"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ChevronLeft, Share2, Users, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false)

  // In a real implementation, you would fetch the event data based on the ID
  // For this example, we'll find the event in our mock data
  const event = allEvents.find((event) => event.id === params.id) || {
    id: "not-found",
    title: "Event Not Found",
    description: "The event you're looking for could not be found.",
    date: "2025-01-01",
    time: "12:00 PM",
    location: "Unknown",
    category: "unknown",
    image: "/placeholder.svg?height=400&width=600&text=Event+Not+Found",
    featured: false,
  }

  const isPastEvent = new Date() > parseISO(event.date)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would submit the form data to your backend
    setRegistrationSubmitted(true)
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Find related events (same category, excluding current event)
  const relatedEvents = allEvents.filter((e) => e.category === event.category && e.id !== event.id).slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
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
          <div className="flex justify-center gap-2 mb-4">
            <Badge className="bg-amber-500 hover:bg-amber-600">
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </Badge>
            {event.featured && <Badge className="bg-blue-500 hover:bg-blue-600">Featured</Badge>}
            {isPastEvent && <Badge className="bg-gray-500 hover:bg-gray-600">Past Event</Badge>}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {format(parseISO(event.date), "EEEE, MMMM d, yyyy")}
            </span>
            <span className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {event.time}
            </span>
            <span className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {event.location}
            </span>
          </div>
        </motion.div>
      </section>

      {/* Registration Success Message */}
      {registrationSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mx-auto max-w-3xl mt-8"
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
              <h3 className="text-sm font-medium">Registration successful!</h3>
              <div className="mt-2 text-sm">
                <p>
                  Thank you for registering for {event.title}. We've sent a confirmation email with all the details.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Back to Events Link */}
              <div className="mb-8">
                <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-amber-600" asChild>
                  <Link href="/events">
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Back to All Events
                  </Link>
                </Button>
              </div>

              {/* Event Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-gray-600">{event.description}</p>

                <h3 className="text-xl font-bold mt-8 mb-4">What to Expect</h3>
                <p className="text-gray-600">
                  Join us for an engaging and impactful event that brings together community members, supporters, and
                  beneficiaries of the Caywood Brown Foundation. This {event.category} event is designed to{" "}
                  {getEventPurpose(event.category)}.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Who Should Attend</h3>
                <ul className="space-y-2 text-gray-600">
                  {getAttendeesList(event.category).map((item, index) => (
                    <li key={index} className="flex items-start">
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
                        className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Additional details based on event type */}
                {event.category === "workshop" && (
                  <>
                    <h3 className="text-xl font-bold mt-8 mb-4">Workshop Agenda</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">10:00 AM - 10:30 AM:</span>
                        <span>Registration and Welcome</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">10:30 AM - 12:00 PM:</span>
                        <span>Morning Session - Fundamentals and Core Concepts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">12:00 PM - 1:00 PM:</span>
                        <span>Lunch Break (provided)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">1:00 PM - 2:30 PM:</span>
                        <span>Afternoon Session - Practical Applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">2:30 PM - 3:00 PM:</span>
                        <span>Q&A and Closing Remarks</span>
                      </li>
                    </ul>
                  </>
                )}

                {event.category === "fundraiser" && (
                  <>
                    <h3 className="text-xl font-bold mt-8 mb-4">Event Highlights</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
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
                          className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Gourmet dinner prepared by renowned local chefs</span>
                      </li>
                      <li className="flex items-start">
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
                          className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Silent auction featuring unique items and experiences</span>
                      </li>
                      <li className="flex items-start">
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
                          className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Inspiring presentations from program beneficiaries</span>
                      </li>
                      <li className="flex items-start">
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
                          className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Live entertainment and networking opportunities</span>
                      </li>
                    </ul>
                  </>
                )}

                {/* Share Section */}
                <div className="mt-12 pt-6 border-t">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share This Event
                  </h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="rounded-full">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
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
                        className="h-4 w-4 mr-2"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Event Details Card */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Date</h4>
                        <p className="text-gray-600">{format(parseISO(event.date), "EEEE, MMMM d, yyyy")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Time</h4>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-gray-600">{event.location}</p>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(event.location)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-700 text-sm inline-flex items-center mt-1"
                        >
                          View on map
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
                            className="h-3 w-3 ml-1"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Capacity</h4>
                        <p className="text-gray-600">{getEventCapacity(event.category)}</p>
                      </div>
                    </div>
                  </div>

                  {!isPastEvent && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 mt-6" asChild>
                        <a href="#register">Register Now</a>
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Organizer Card */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Organizer</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=CBF"
                        alt="Caywood Brown Foundation"
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Caywood Brown Foundation</h4>
                      <p className="text-gray-600 text-sm">Event Organizer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    For questions about this event, please contact our events team:
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>Email: events@caywoodbrownfoundation.org</p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              {/* Add to Calendar Card */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Add to Calendar</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
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
                        className="h-5 w-5 mr-2 text-blue-500"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      Google Calendar
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
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
                        className="h-5 w-5 mr-2 text-blue-600"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      Outlook Calendar
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
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
                        className="h-5 w-5 mr-2 text-gray-500"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      Apple Calendar
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
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
                        className="h-5 w-5 mr-2 text-gray-500"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Download .ics File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      {!isPastEvent && !registrationSubmitted && (
        <section id="register" className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Register for This Event</h2>
                <p className="text-gray-600">
                  Complete the form below to secure your spot at {event.title}. Registration is required for all
                  attendees.
                </p>
              </div>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none">
                          First Name
                        </label>
                        <input
                          id="first-name"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                          required
                        />
                      </div>
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

                    {event.category === "workshop" && (
                      <div className="space-y-2">
                        <label htmlFor="experience" className="text-sm font-medium leading-none">
                          Experience Level
                        </label>
                        <select
                          id="experience"
                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        >
                          <option value="beginner">Beginner - No prior experience</option>
                          <option value="intermediate">Intermediate - Some experience</option>
                          <option value="advanced">Advanced - Experienced</option>
                        </select>
                      </div>
                    )}

                    {event.category === "fundraiser" && (
                      <div className="space-y-2">
                        <label htmlFor="guests" className="text-sm font-medium leading-none">
                          Number of Guests
                        </label>
                        <select
                          id="guests"
                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        >
                          <option value="1">1 (Just me)</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="table">Table of 8</option>
                        </select>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="dietary" className="text-sm font-medium leading-none">
                        Dietary Restrictions (if any)
                      </label>
                      <input
                        id="dietary"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        placeholder="Vegetarian, gluten-free, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="questions" className="text-sm font-medium leading-none">
                        Questions or Comments
                      </label>
                      <textarea
                        id="questions"
                        className="flex min-h-[100px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
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
                        I agree to receive communications about this event and future events from the Caywood Brown
                        Foundation.
                      </label>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <p className="text-sm text-gray-600">
                        Registration closes 24 hours before the event or when capacity is reached.
                      </p>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                        Complete Registration
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
        <section className="w-full py-12 md:py-16 bg-white border-t">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Related Events</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover more {event.category} events from the Caywood Brown Foundation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedEvents.map((relEvent, index) => (
                <motion.div key={index} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden border-0 shadow-md rounded-xl h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={relEvent.image || "/placeholder.svg"}
                        alt={relEvent.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-700">
                          <span className="text-lg font-bold">{format(parseISO(relEvent.date), "dd")}</span>
                          <span className="text-xs uppercase">{format(parseISO(relEvent.date), "MMM")}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{relEvent.title}</h3>
                          <Badge variant="outline" className="mt-1">
                            {relEvent.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relEvent.description}</p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600" asChild>
                          <Link href={`/events/${relEvent.id}`}>View Event</Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

// Helper function to get event purpose based on category
function getEventPurpose(category) {
  switch (category) {
    case "workshop":
      return "provide hands-on learning and skill development in a collaborative environment"
    case "fundraiser":
      return "raise critical funds for our programs while celebrating our mission and impact"
    case "community":
      return "bring together community members to build connections and address local needs"
    case "training":
      return "equip participants with valuable skills and knowledge for personal and professional growth"
    default:
      return "support our mission of empowering communities through education and support"
  }
}

// Helper function to get attendee list based on category
function getAttendeesList(category) {
  switch (category) {
    case "workshop":
      return [
        "Individuals interested in developing new skills",
        "Students seeking to enhance their knowledge",
        "Professionals looking to expand their expertise",
        "Community members curious about the topic",
      ]
    case "fundraiser":
      return [
        "Current and potential donors",
        "Community supporters and advocates",
        "Corporate partners and sponsors",
        "Anyone interested in supporting our mission",
      ]
    case "community":
      return [
        "Local residents and families",
        "Community leaders and organizers",
        "Volunteers and service providers",
        "Anyone interested in community development",
      ]
    case "training":
      return [
        "Students and young professionals",
        "Job seekers looking to enhance their skills",
        "Educators and mentors",
        "Anyone interested in professional development",
      ]
    default:
      return [
        "Supporters of the Caywood Brown Foundation",
        "Community members interested in our mission",
        "Individuals looking to get involved",
        "Anyone curious about our programs and initiatives",
      ]
  }
}

// Helper function to get event capacity based on category
function getEventCapacity(category) {
  switch (category) {
    case "workshop":
      return "Limited to 30 participants"
    case "fundraiser":
      return "200 guests"
    case "community":
      return "Open to all (approximately 100-150 attendees expected)"
    case "training":
      return "Limited to 25 participants"
    default:
      return "Varies based on venue capacity"
  }
}

// Sample event data
const allEvents = [
  {
    id: "annual-gala-2025",
    title: "Annual Fundraising Gala",
    description: "Join us for an evening of celebration and support for our educational initiatives.",
    date: "2025-06-15",
    time: "6:00 PM",
    location: "Grand Hotel Ballroom",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600&text=Fundraising+Gala",
    featured: true,
  },
  {
    id: "google-workshop-jun",
    title: "Google Digital Skills Workshop",
    description: "Learn essential digital marketing skills from Google-certified trainers in this hands-on workshop.",
    date: "2025-06-10",
    time: "10:00 AM - 3:00 PM",
    location: "Tech Hub Center",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600&text=Google+Workshop",
    featured: true,
  },
  {
    id: "health-fair-2025",
    title: "Community Health Fair",
    description: "Free health screenings and wellness information for the whole family.",
    date: "2025-07-22",
    time: "10:00 AM - 2:00 PM",
    location: "City Park",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Health+Fair",
    featured: true,
  },
  {
    id: "back-to-school-2025",
    title: "Back to School Drive",
    description: "Help us provide school supplies to children in need for the upcoming school year.",
    date: "2025-08-05",
    time: "9:00 AM - 12:00 PM",
    location: "Community Center",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=School+Drive",
  },
  {
    id: "coding-bootcamp-jun",
    title: "Youth Coding Bootcamp",
    description: "A week-long intensive coding program for high school students interested in technology careers.",
    date: "2025-06-20",
    time: "9:00 AM - 3:00 PM",
    location: "Tech Education Center",
    category: "training",
    image: "/placeholder.svg?height=400&width=600&text=Coding+Bootcamp",
  },
]

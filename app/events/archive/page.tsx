"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO, isBefore } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function EventsArchivePage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 6

  // Filter past events based on active filter and search query
  const today = new Date()
  const pastEvents = allEvents
    .filter((event) => {
      const eventDate = parseISO(event.date)
      return isBefore(eventDate, today)
    })
    .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime())

  const filteredEvents = pastEvents.filter((event) => {
    const matchesFilter = activeFilter === "all" || event.category === activeFilter
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Past+Events"
            alt="Past foundation events"
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Past Events Archive</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            Browse our history of events, workshops, fundraisers, and community gatherings.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-16 z-30 w-full py-4 bg-white border-b shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button variant="ghost" className="mr-auto pl-0 hover:bg-transparent hover:text-amber-600" asChild>
              <Link href="/events">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to Upcoming Events
              </Link>
            </Button>
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search past events..."
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Filter:</span>
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Badge
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </Badge>
                <Badge
                  variant={activeFilter === "workshop" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("workshop")}
                >
                  Workshops
                </Badge>
                <Badge
                  variant={activeFilter === "fundraiser" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("fundraiser")}
                >
                  Fundraisers
                </Badge>
                <Badge
                  variant={activeFilter === "community" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("community")}
                >
                  Community
                </Badge>
                <Badge
                  variant={activeFilter === "training" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("training")}
                >
                  Training
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Past Events</h2>
            <p className="text-gray-600 mt-2">
              Explore our archive of {filteredEvents.length} past events and activities.
            </p>
          </motion.div>

          {currentEvents.length > 0 ? (
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentEvents.map((event, index) => (
                <motion.div key={index} variants={itemFade} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="relative h-48 w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-gray-100 p-3 text-gray-700">
                          <span className="text-lg font-bold">{format(parseISO(event.date), "dd")}</span>
                          <span className="text-xs uppercase">{format(parseISO(event.date), "MMM")}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{event.title}</h3>
                          <Badge variant="outline" className="mt-1">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No past events match your search criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <Button
                    key={number}
                    variant="outline"
                    size="sm"
                    className={currentPage === number ? "bg-amber-50" : ""}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Button>
                ))}

                <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Year in Review Section */}
      <section className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800">
                Year in Review
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Impact in 2024</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                In 2024, the Caywood Brown Foundation hosted over 30 events, reaching more than 5,000 community members
                and raising $250,000 for our programs.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-2xl font-bold mb-2 text-amber-600">30+</h3>
                  <p className="text-gray-600">Events Hosted</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-2xl font-bold mb-2 text-amber-600">5,000+</h3>
                  <p className="text-gray-600">Attendees</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-2xl font-bold mb-2 text-amber-600">$250K</h3>
                  <p className="text-gray-600">Funds Raised</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-2xl font-bold mb-2 text-amber-600">12</h3>
                  <p className="text-gray-600">Communities Served</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="mt-4 bg-amber-500 hover:bg-amber-600" asChild>
                  <Link href="/impact">View Our Impact Report</Link>
                </Button>
              </motion.div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=720&width=1280&text=2024+Impact"
                alt="2024 Foundation Impact"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Galleries Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Event Galleries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse photos and memories from our past events. Relive the moments and see the impact of our work.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventGalleries.map((gallery, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Link href={gallery.link} className="block group">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-xl" />
                    <Image
                      src={gallery.image || "/placeholder.svg"}
                      alt={gallery.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                      <h3 className="text-xl font-bold mb-1">{gallery.title}</h3>
                      <p className="text-sm text-white/80">{gallery.count} photos</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/galleries">View All Event Galleries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Never Miss an Event</h2>
            <p className="text-gray-600 text-lg mb-8">
              Subscribe to our newsletter to stay updated on upcoming events and activities.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                required
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="h-12 bg-amber-500 hover:bg-amber-600 text-white">
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Sample event data for past events
const allEvents = [
  {
    id: "spring-fundraiser-2025",
    title: "Spring Fundraising Dinner",
    description: "A delightful evening of fine dining and fundraising for our educational programs.",
    date: "2025-04-10",
    time: "6:30 PM - 10:00 PM",
    location: "Riverside Restaurant",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600&text=Spring+Fundraiser",
  },
  {
    id: "tech-workshop-may",
    title: "Technology Skills Workshop",
    description: "Basic computer skills training for adults seeking to improve their employability.",
    date: "2025-05-05",
    time: "10:00 AM - 2:00 PM",
    location: "Public Library",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600&text=Tech+Workshop",
  },
  {
    id: "youth-mentoring-apr",
    title: "Youth Mentoring Program Kickoff",
    description: "Launch event for our new youth mentoring initiative connecting students with professionals.",
    date: "2025-04-22",
    time: "4:00 PM - 6:00 PM",
    location: "Community College",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Youth+Mentoring",
  },
  {
    id: "health-seminar-mar",
    title: "Community Health Seminar",
    description: "Educational seminar on preventive healthcare and wellness strategies.",
    date: "2025-03-15",
    time: "11:00 AM - 1:00 PM",
    location: "Health Center",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Health+Seminar",
  },
  {
    id: "winter-gala-2024",
    title: "Winter Charity Gala",
    description: "An elegant evening of dining and entertainment to support our winter programs.",
    date: "2024-12-10",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600&text=Winter+Gala",
  },
  {
    id: "coding-workshop-feb",
    title: "Intro to Coding Workshop",
    description: "A beginner-friendly workshop teaching the basics of computer programming.",
    date: "2025-02-18",
    time: "1:00 PM - 4:00 PM",
    location: "Tech Center",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600&text=Coding+Workshop",
  },
  {
    id: "leadership-training-jan",
    title: "Youth Leadership Training",
    description: "A comprehensive training program for developing leadership skills in young adults.",
    date: "2025-01-25",
    time: "9:00 AM - 3:00 PM",
    location: "Community Center",
    category: "training",
    image: "/placeholder.svg?height=400&width=600&text=Leadership+Training",
  },
  {
    id: "holiday-drive-dec",
    title: "Holiday Gift Drive",
    description: "Collection of gifts and essential items for families in need during the holiday season.",
    date: "2024-12-05",
    time: "10:00 AM - 4:00 PM",
    location: "Multiple Locations",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Holiday+Drive",
  },
  {
    id: "digital-marketing-nov",
    title: "Digital Marketing Seminar",
    description: "Learn effective digital marketing strategies for small businesses and nonprofits.",
    date: "2024-11-12",
    time: "9:00 AM - 12:00 PM",
    location: "Business Center",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing",
  },
  {
    id: "fall-fundraiser-oct",
    title: "Fall Harvest Fundraiser",
    description: "A seasonal celebration featuring local food, entertainment, and fundraising activities.",
    date: "2024-10-18",
    time: "5:00 PM - 9:00 PM",
    location: "Community Farm",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600&text=Fall+Fundraiser",
  },
  {
    id: "career-fair-sep",
    title: "Community Career Fair",
    description: "Connecting job seekers with local employers and providing career development resources.",
    date: "2024-09-22",
    time: "10:00 AM - 3:00 PM",
    location: "Convention Center",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Career+Fair",
  },
  {
    id: "teacher-training-aug",
    title: "Teacher Professional Development",
    description: "Training workshop for educators on innovative teaching methods and classroom technologies.",
    date: "2024-08-15",
    time: "8:30 AM - 4:30 PM",
    location: "Education Center",
    category: "training",
    image: "/placeholder.svg?height=400&width=600&text=Teacher+Training",
  },
]

// Sample event galleries
const eventGalleries = [
  {
    title: "Annual Gala 2024",
    count: 45,
    image: "/placeholder.svg?height=400&width=600&text=Gala+2024",
    link: "/galleries/annual-gala-2024",
  },
  {
    title: "Community Health Fair",
    count: 32,
    image: "/placeholder.svg?height=400&width=600&text=Health+Fair",
    link: "/galleries/health-fair-2024",
  },
  {
    title: "Youth Coding Camp",
    count: 28,
    image: "/placeholder.svg?height=400&width=600&text=Coding+Camp",
    link: "/galleries/coding-camp-2024",
  },
]

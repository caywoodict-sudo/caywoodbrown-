"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO, isAfter, isBefore, isToday, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Clock, MapPin, Search, Filter, CalendarIcon, List, ChevronLeft, ChevronRight, User, Mail, Phone, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

// Define event type
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image?: string;
}

// Define form state type
interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  attendees: string;
  specialRequests: string;
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [registrationForm, setRegistrationForm] = useState<RegistrationForm>({
    name: "",
    email: "",
    phone: "",
    attendees: "1",
    specialRequests: "",
  })
  const [registrationComplete, setRegistrationComplete] = useState(false)
  
  const sectionRefs = {
    featured: useRef<HTMLDivElement>(null),
    upcoming: useRef<HTMLDivElement>(null),
    calendar: useRef<HTMLDivElement>(null),
    past: useRef<HTMLDivElement>(null),
  }

  // Generate days for the calendar view
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })
  
  // Calculate calendar grid (including days from previous/next months)
  const startDay = getDay(monthStart)
  
  // Fill the start with days from previous month
  const daysInGrid = [...Array(startDay).fill(null), ...monthDays]
  
  // Ensure we have complete weeks (7 days each)
  while (daysInGrid.length % 7 !== 0) {
    daysInGrid.push(null)
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

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

  // Filter events based on active filter and search query
  const filteredEvents = allEvents.filter((event) => {
    const matchesFilter = activeFilter === "all" || event.category === activeFilter
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Separate events into upcoming and past
  const today = new Date()
  const upcomingEvents = filteredEvents
    .filter((event) => {
      const eventDate = parseISO(event.date)
      return isAfter(eventDate, today) || isToday(eventDate)
    })
    .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())

  const pastEvents = filteredEvents
    .filter((event) => {
      const eventDate = parseISO(event.date)
      return isBefore(eventDate, today) && !isToday(eventDate)
    })
    .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime())

  // Featured events (first 3 upcoming events)
  const featuredEvents = upcomingEvents.slice(0, 3)

  // Calendar view events for current month
  const calendarEvents = filteredEvents.filter((event) => {
    const eventDate = parseISO(event.date)
    return eventDate.getMonth() === currentMonth.getMonth() && eventDate.getFullYear() === currentMonth.getFullYear()
  })

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1))
  }

  // Handle form changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setRegistrationForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle registration submission
  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate submission process
    setTimeout(() => {
      setRegistrationComplete(true)
    }, 1000)
  }
  
  // Reset registration form when dialog closes
  const handleDialogChange = (open: boolean) => {
    if (!open) {
      setRegistrationComplete(false)
      setRegistrationForm({
        name: "",
        email: "",
        phone: "",
        attendees: "1",
        specialRequests: "",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Events"
            alt="Foundation events"
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Events & Programs</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100 mb-8">
            Join us for workshops, fundraisers, community gatherings, and more. Discover how you can get involved with
            the Caywood Brown Foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-lg h-auto"
                asChild
              >
                <a href="#upcoming">View Upcoming Events</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
                asChild
              >
                <a href="#calendar">Calendar View</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-16 z-30 w-full py-4 bg-white border-b shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-auto md:min-w-[300px] flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
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

      {/* Featured Events Section */}
      {featuredEvents.length > 0 && (
        <section
          id="featured"
          ref={sectionRefs.featured}
          className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-amber-50"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={isVisible.featured ? "visible" : "hidden"}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Featured Events
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Don't Miss These Opportunities</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
                Join us for these upcoming special events and make a difference in your community.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={isVisible.featured ? "visible" : "hidden"}
              className="grid gap-8 md:grid-cols-3"
            >
              {featuredEvents.map((event, index) => (
                <motion.div key={index} variants={itemFade} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]" />
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-700">
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
                      <p className="text-gray-600 mb-4">{event.description}</p>
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
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600" asChild>
                          <Link href={`/events/${event.id}`}>Register Now</Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Tabs for List/Calendar View */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="list" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  List View
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Calendar View
                </TabsTrigger>
              </TabsList>
            </div>

            {/* List View */}
            <TabsContent value="list" className="mt-0">
              {/* Upcoming Events Section */}
              <section id="upcoming" ref={sectionRefs.upcoming} className="w-full py-8">
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate={isVisible.upcoming ? "visible" : "hidden"}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
                >
                  <div>
                    <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                      Coming Up
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Upcoming Events</h2>
                  </div>
                </motion.div>

                {upcomingEvents.length > 0 ? (
                  <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    animate={isVisible.upcoming ? "visible" : "hidden"}
                    className="grid gap-6"
                  >
                    {upcomingEvents.map((event, index) => (
                      <motion.div key={index} variants={itemFade} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                        <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="md:col-span-1 relative h-40 md:h-full min-h-[160px]">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 25vw"
                              />
                            </div>
                            <div className="md:col-span-3 p-6">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                  <div className="flex flex-wrap gap-2 mb-2">
                                    <Badge variant="outline">{event.category}</Badge>
                                    {event.featured && <Badge className="bg-amber-500">Featured</Badge>}
                                  </div>
                                </div>
                                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-700">
                                  <span className="text-lg font-bold">{format(parseISO(event.date), "dd")}</span>
                                  <span className="text-xs uppercase">{format(parseISO(event.date), "MMM")}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">{event.description}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>{event.location}</span>
                                  </div>
                                </div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button className="bg-amber-500 hover:bg-amber-600" asChild>
                                    <Link href={`/events/${event.id}`}>Register</Link>
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No upcoming events match your search criteria.</p>
                  </div>
                )}
              </section>

              {/* Past Events Section */}
              {pastEvents.length > 0 && (
                <section id="past" ref={sectionRefs.past} className="w-full py-8 border-t border-gray-100">
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={isVisible.past ? "visible" : "hidden"}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
                  >
                    <div>
                      <div className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 mb-4">
                        Previous
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Past Events</h2>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    animate={isVisible.past ? "visible" : "hidden"}
                    className="grid gap-6"
                  >
                    {pastEvents.slice(0, 3).map((event, index) => (
                      <motion.div key={index} variants={itemFade}>
                        <Card className="overflow-hidden border border-gray-100 opacity-75 hover:opacity-100 transition-opacity">
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="md:col-span-1 relative h-40 md:h-full min-h-[160px] grayscale">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 25vw"
                              />
                            </div>
                            <div className="md:col-span-3 p-6">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                  <div className="flex flex-wrap gap-2 mb-2">
                                    <Badge variant="outline">{event.category}</Badge>
                                    <Badge variant="outline" className="bg-gray-100">
                                      Past
                                    </Badge>
                                  </div>
                                </div>
                                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-gray-100 p-3 text-gray-700 shrink-0">
                                  <span className="text-lg font-bold">{format(parseISO(event.date), "dd")}</span>
                                  <span className="text-xs uppercase">{format(parseISO(event.date), "MMM")}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">{event.description}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>{event.location}</span>
                                  </div>
                                </div>
                                <Button variant="outline" asChild>
                                  <Link href={`/events/${event.id}`}>View Details</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>

                  {pastEvents.length > 3 && (
                    <div className="flex justify-center mt-8">
                      <Button variant="outline" asChild>
                        <Link href="/events/archive">View All Past Events</Link>
                      </Button>
                    </div>
                  )}
                </section>
              )}
            </TabsContent>

            {/* Calendar View */}
            <TabsContent value="calendar" className="mt-0">
              <section id="calendar" ref={sectionRefs.calendar} className="w-full py-16 md:py-24 bg-white border-t">
                <div className="container px-4 md:px-6">
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={isVisible.calendar ? "visible" : "hidden"}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                  >
                    <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                      Calendar View
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Events Calendar</h2>
                    <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
                      Browse our events by date to find opportunities that fit your schedule.
                    </p>
                  </motion.div>

                  <div className="mb-8 flex justify-between items-center">
                    <div className="text-2xl font-bold">
                      {format(currentMonth, "MMMM yyyy")}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevMonth}
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextMonth}
                        aria-label="Next month"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border shadow overflow-hidden">
                    <div className="grid grid-cols-7 gap-px bg-gray-200">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="bg-gray-50 text-center py-2 font-medium text-gray-500">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-px bg-gray-200">
                      {daysInGrid.map((day, i) => {
                        // For days in the current month
                        if (day) {
                          const isCurrentMonth = isSameMonth(day, currentMonth)
                          const isToday = isSameDay(day, new Date())
                          
                          // Find events for this day
                          const eventsOnDay = calendarEvents.filter(event => {
                            const eventDate = parseISO(event.date)
                            return isSameDay(eventDate, day)
                          })
                          
                          return (
                            <div
                              key={i}
                              className={`min-h-24 p-2 bg-white ${
                                isToday ? "bg-amber-50" : ""
                              } ${!isCurrentMonth ? "text-gray-400" : ""}`}
                            >
                              <div className="font-medium mb-1">{format(day, "d")}</div>
                              <div className="space-y-1">
                                {eventsOnDay.slice(0, 3).map((event, idx) => (
                                  <div
                                    key={idx}
                                    className="text-xs p-1 rounded truncate cursor-pointer hover:bg-amber-100 transition-colors"
                                    onClick={() => {
                                      setSelectedEvent(event)
                                      setRegistrationOpen(true)
                                    }}
                                  >
                                    <div className="flex items-center gap-1">
                                      <div className={`w-2 h-2 rounded-full bg-amber-500`}></div>
                                      <span>{event.title}</span>
                                    </div>
                                  </div>
                                ))}
                                {eventsOnDay.length > 3 && (
                                  <div className="text-xs text-gray-500">+{eventsOnDay.length - 3} more</div>
                                )}
                              </div>
                            </div>
                          )
                        }
                        
                        // Empty cell for days outside current month
                        return <div key={i} className="min-h-24 p-2 bg-gray-50"></div>
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Stay Updated on Events</h2>
            <p className="text-gray-600 text-lg mb-8">
              Subscribe to our newsletter to receive notifications about upcoming events, workshops, and community
              gatherings.
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

      {/* Host Your Own Event Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Host+An+Event"
                alt="People organizing a community event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Get Involved
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Host Your Own Event</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Want to organize a fundraiser, workshop, or community gathering to support the Caywood Brown Foundation?
                We provide resources, guidance, and support to help make your event a success.
              </p>
              <ul className="space-y-2">
                {[
                  "Fundraising events to support our programs",
                  "Awareness workshops about community issues",
                  "Volunteer recruitment gatherings",
                  "Educational sessions about our mission",
                ].map((item, index) => (
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
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="mt-4 bg-amber-500 hover:bg-amber-600" asChild>
                  <Link href="/events/host">Learn How to Host an Event</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar View Section */}
      <section id="calendar" ref={sectionRefs.calendar} className="w-full py-16 md:py-24 bg-white border-t">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.calendar ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Calendar View
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Events Calendar</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
              Browse our events by date to find opportunities that fit your schedule.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-between items-center">
            <div className="text-2xl font-bold">
              {format(currentMonth, "MMMM yyyy")}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevMonth}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextMonth}
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-lg border shadow overflow-hidden">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="bg-gray-50 text-center py-2 font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {daysInGrid.map((day, i) => {
                // For days in the current month
                if (day) {
                  const isCurrentMonth = isSameMonth(day, currentMonth)
                  const isToday = isSameDay(day, new Date())
                  
                  // Find events for this day
                  const eventsOnDay = calendarEvents.filter(event => {
                    const eventDate = parseISO(event.date)
                    return isSameDay(eventDate, day)
                  })
                  
                  return (
                    <div
                      key={i}
                      className={`min-h-24 p-2 bg-white ${
                        isToday ? "bg-amber-50" : ""
                      } ${!isCurrentMonth ? "text-gray-400" : ""}`}
                    >
                      <div className="font-medium mb-1">{format(day, "d")}</div>
                      <div className="space-y-1">
                        {eventsOnDay.slice(0, 3).map((event, idx) => (
                          <div
                            key={idx}
                            className="text-xs p-1 rounded truncate cursor-pointer hover:bg-amber-100 transition-colors"
                            onClick={() => {
                              setSelectedEvent(event)
                              setRegistrationOpen(true)
                            }}
                          >
                            <div className="flex items-center gap-1">
                              <div className={`w-2 h-2 rounded-full bg-amber-500`}></div>
                              <span>{event.title}</span>
                            </div>
                          </div>
                        ))}
                        {eventsOnDay.length > 3 && (
                          <div className="text-xs text-gray-500">+{eventsOnDay.length - 3} more</div>
                        )}
                      </div>
                    </div>
                  )
                }
                
                // Empty cell for days outside current month
                return <div key={i} className="min-h-24 p-2 bg-gray-50"></div>
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration Dialog */}
      <Dialog open={registrationOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="sm:max-w-[500px]">
          {!registrationComplete ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedEvent?.title}</DialogTitle>
                <DialogDescription>
                  {selectedEvent?.date && format(parseISO(selectedEvent.date), "EEEE, MMMM d, yyyy")} at {selectedEvent?.time}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleRegistration} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                      value={registrationForm.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                      value={registrationForm.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                      value={registrationForm.phone}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="attendees" className="text-sm font-medium">
                    Number of Attendees
                  </label>
                  <select
                    id="attendees"
                    name="attendees"
                    className="py-2 px-3 w-full border border-gray-300 rounded-md"
                    value={registrationForm.attendees}
                    onChange={handleFormChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                    <option value="more">More than 10</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="text-sm font-medium">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    placeholder="Any accessibility requirements, dietary restrictions, etc."
                    className="px-3 py-2 w-full border border-gray-300 rounded-md"
                    value={registrationForm.specialRequests}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                
                <DialogFooter>
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                    Register Now
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="p-4 text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Registration Complete!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for registering for {selectedEvent?.title}. We've sent a confirmation to your email with all the details.
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600" onClick={() => setRegistrationOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Helper function to generate calendar days for a month
function generateCalendarDays(month: Date) {
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const today = new Date()

  // First day of the month
  const firstDay = new Date(year, monthIndex, 1)
  // Last day of the month
  const lastDay = new Date(year, monthIndex + 1, 0)

  // Day of the week for the first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDay.getDay()

  // Total days in the month
  const daysInMonth = lastDay.getDate()

  // Days from previous month to show
  const daysFromPrevMonth = firstDayOfWeek

  // Days from next month to show (to complete the grid)
  const daysFromNextMonth = 42 - (daysFromPrevMonth + daysInMonth) // 42 = 6 rows * 7 days

  const days = []

  // Add days from previous month
  const prevMonth = new Date(year, monthIndex - 1, 1)
  const daysInPrevMonth = new Date(year, monthIndex, 0).getDate()

  for (let i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {
    days.push({
      date: i,
      month: prevMonth.getMonth(),
      year: prevMonth.getFullYear(),
      isCurrentMonth: false,
      isToday: false,
    })
  }

  // Add days from current month
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === today.getDate() && monthIndex === today.getMonth() && year === today.getFullYear()

    days.push({
      date: i,
      month: monthIndex,
      year: year,
      isCurrentMonth: true,
      isToday: isToday,
    })
  }

  // Add days from next month
  const nextMonth = new Date(year, monthIndex + 1, 1)

  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push({
      date: i,
      month: nextMonth.getMonth(),
      year: nextMonth.getFullYear(),
      isCurrentMonth: false,
      isToday: false,
    })
  }

  return days
}

// Helper function to get color based on category
function getCategoryColor(category: string) {
  switch (category) {
    case "fundraiser":
      return "bg-amber-500"
    case "workshop":
      return "bg-blue-500"
    case "community":
      return "bg-green-500"
    case "training":
      return "bg-purple-500"
    default:
      return "bg-gray-500"
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
  {
    id: "volunteer-orientation-jul",
    title: "Volunteer Orientation",
    description: "Learn about volunteer opportunities and how you can contribute to our mission.",
    date: "2025-07-08",
    time: "6:30 PM - 8:00 PM",
    location: "Foundation Headquarters",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Volunteer+Orientation",
  },
  {
    id: "leadership-workshop-jul",
    title: "Community Leadership Workshop",
    description: "Develop leadership skills to make a positive impact in your community.",
    date: "2025-07-15",
    time: "1:00 PM - 5:00 PM",
    location: "Civic Center",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600&text=Leadership+Workshop",
  },
  {
    id: "digital-marketing-aug",
    title: "Digital Marketing Certification Course",
    description: "A comprehensive 3-day course covering SEO, social media marketing, and analytics.",
    date: "2025-08-12",
    time: "9:00 AM - 4:00 PM",
    location: "Business Innovation Center",
    category: "training",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing",
  },
  {
    id: "community-cleanup-jun",
    title: "Neighborhood Cleanup Day",
    description: "Join us in beautifying local neighborhoods and parks through community service.",
    date: "2025-06-28",
    time: "8:00 AM - 12:00 PM",
    location: "Various Locations",
    category: "community",
    image: "/placeholder.svg?height=400&width=600&text=Cleanup+Day",
  },
  {
    id: "donor-appreciation-sep",
    title: "Donor Appreciation Reception",
    description: "A special evening to thank our generous donors and share the impact of their support.",
    date: "2025-09-18",
    time: "7:00 PM - 9:00 PM",
    location: "Art Museum Atrium",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600&text=Donor+Reception",
  },
  // Past events
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
]

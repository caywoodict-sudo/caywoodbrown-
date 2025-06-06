"use client"

import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Calendar, ArrowUpRight, Sparkles, GraduationCap, Code } from "lucide-react"
import ImpactCounter from "@/components/impact-counter"
import TestimonialSlider from "@/components/testimonial-slider"
import { motion } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const sectionRefs = {
    impact: useRef<HTMLDivElement>(null),
    mission: useRef<HTMLDivElement>(null),
    programs: useRef<HTMLDivElement>(null),
    partnership: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
    donate: useRef<HTMLDivElement>(null),
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Children smiling in a classroom setting"
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Empowering Communities
            <br />
            Building Futures
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl mb-8 text-gray-100">
            The Caywood Brown Foundation is dedicated to creating lasting positive change through education, 
            youth empowerment, advocacy, and sustainable community development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-lg h-auto"
              >
                <Link href="/donate" className="flex items-center">Donate Now <Heart className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              >
                <Link href="/volunteer" className="flex items-center">Volunteer <Users className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
              >
                <Link href="/partner" className="flex items-center">Partner With Us <ArrowUpRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact" ref={sectionRefs.impact} className="w-full py-12 bg-white border-b">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isVisible.impact ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={itemFade}>
              <ImpactCounter label="People Helped" endValue={15000} suffix="+" />
            </motion.div>
            <motion.div variants={itemFade}>
              <ImpactCounter label="Communities Served" endValue={48} />
            </motion.div>
            <motion.div variants={itemFade}>
              <ImpactCounter label="Years of Service" endValue={18} />
            </motion.div>
            <motion.div variants={itemFade}>
              <ImpactCounter label="Students Trained" endValue={3000} suffix="+" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Google Partnership Section */}
      <section
        id="partnership"
        ref={sectionRefs.partnership}
        className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-amber-50"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.partnership ? "visible" : "hidden"}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-amber-500/20 z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Google+Partnership"
                alt="Students in Google training program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                  Featured Partnership
                </div>
                <Sparkles className="h-5 w-5 text-amber-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Google Digital Skills Training
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We've partnered with Google to provide comprehensive digital skills training to students in underserved
                communities. This initiative equips young people with the technical knowledge and practical skills
                needed for today's digital economy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold">Coding Fundamentals</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Introduction to programming concepts, web development, and app creation.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
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
                        className="h-5 w-5 text-blue-600"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Digital Marketing</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Search engine optimization, social media marketing, and analytics.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold">Career Certification</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Google-recognized certifications that boost employability and career prospects.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
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
                        className="h-5 w-5 text-blue-600"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Mentorship</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    One-on-one guidance from Google professionals and industry experts.
                  </p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 group" asChild>
                  <Link href="/programs/google-training" className="flex items-center gap-2">
                    Learn more about our Google partnership
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" ref={sectionRefs.mission} className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.mission ? "visible" : "hidden"}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Foundation volunteers working with community members"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Creating Lasting Change</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Caywood Brown Foundation is dedicated to improving lives through community-focused initiatives,
                educational programs, and support services that create lasting positive change. We believe in empowering
                individuals to reach their full potential and building stronger communities together.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach focuses on sustainable development, education, and health initiatives that address the root
                causes of challenges faced by underserved communities.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="group" asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    Learn more about our story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        ref={sectionRefs.programs}
        className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.programs ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Our Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">How We Make An Impact</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
              Through our diverse programs, we address critical needs and create opportunities for sustainable
              development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isVisible.programs ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div key={index} variants={itemFade} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-0 shadow-lg rounded-xl transition-all duration-200 hover:shadow-xl h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Link
                      href={program.link}
                      className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                    >
                      Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={sectionRefs.testimonials}
        className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-amber-50"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.testimonials ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-medium text-amber-800">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Stories of Impact</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
              Hear from the people whose lives have been transformed through our programs.
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" ref={sectionRefs.events} className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.events ? "visible" : "hidden"}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          >
            <div>
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                Events
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Upcoming Events</h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link href="/events">View all events</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isVisible.events ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div key={index} variants={itemFade} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center justify-center rounded-lg bg-amber-100 p-3 text-amber-700 min-w-[60px]">
                        <span className="text-lg font-bold">{event.date.day}</span>
                        <span className="text-xs uppercase">{event.date.month}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.time} • {event.location}
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={event.link}>Register</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        id="donate"
        ref={sectionRefs.donate}
        className="w-full py-16 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isVisible.donate ? "visible" : "hidden"}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                Support Our Cause
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Make a Difference Today</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Your contribution helps us continue our mission of service and support to those in need. Every donation,
                no matter the size, makes a meaningful difference in the lives of the people we serve.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">$25</h3>
                    <p className="text-white/80">Provides educational materials for one student</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">$50</h3>
                    <p className="text-white/80">Sponsors a health screening for a family</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">$100</h3>
                    <p className="text-white/80">Funds a workshop for community development</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">$250</h3>
                    <p className="text-white/80">Provides a scholarship for a student</p>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-amber-600 hover:bg-white/90 font-medium px-8 py-6 text-lg h-auto"
                  >
                    Donate Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg h-auto"
                  >
                    Become a Monthly Donor
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-transparent z-10 rounded-2xl" />
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="A child smiling after receiving educational support"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join our newsletter to receive updates on our programs, events, and the impact we're making together.
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

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-start"
          >
            <div>
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions or want to get involved? We'd love to hear from you. Reach out to us using the contact
                information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
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
                      className="h-6 w-6 text-amber-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
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
                      className="h-6 w-6 text-amber-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">info@caywoodbrownfoundation.org</p>
                    <p className="text-gray-500 text-sm">We aim to respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
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
                      className="h-6 w-6 text-amber-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">123 Main Street, Suite 200</p>
                    <p className="text-gray-600">Anytown, USA 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Name
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
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    required
                  ></textarea>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50 border-t border-gray-100">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <motion.div
                whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src="/placeholder.svg?height=60&width=180&text=Google"
                  alt="Google"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=60&width=180&text=Partner+${i}`}
                    alt={`Partner ${i}`}
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-16 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Caywood Brown Foundation</h3>
              <p className="text-gray-400">
                Empowering communities through education, support, and opportunity since 2005.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#mission" className="hover:text-white transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="hover:text-white transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#donate" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/fundraise" className="hover:text-white transition-colors">
                    Fundraise
                  </Link>
                </li>
                <li>
                  <Link href="/partner" className="hover:text-white transition-colors">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-gray-400">
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
                    className="h-5 w-5 mr-2 text-gray-500 shrink-0 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    123 Main Street, Suite 200
                    <br />
                    Anytown, USA 12345
                  </span>
                </li>
                <li className="flex items-center">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@caywoodbrownfoundation.org</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Caywood Brown Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const programs = [
  {
    title: "Educational Support",
    description:
      "Providing scholarships, mentoring, and educational resources to students in need to help them achieve their full potential.",
    icon: <Book className="h-6 w-6 text-amber-600" />,
    link: "/programs/education",
    image: "/placeholder.svg?height=400&width=600&text=Education",
  },
  {
    title: "Google Digital Skills",
    description:
      "In partnership with Google, we offer comprehensive digital skills training to prepare students for careers in technology and digital marketing.",
    icon: <Code className="h-6 w-6 text-amber-600" />,
    link: "/programs/google-training",
    image: "/placeholder.svg?height=400&width=600&text=Google+Training",
  },
  {
    title: "Community Outreach",
    description:
      "Organizing events and programs that strengthen community bonds and provide essential services to underserved populations.",
    icon: <Users className="h-6 w-6 text-amber-600" />,
    link: "/programs/community",
    image: "/placeholder.svg?height=400&width=600&text=Community",
  },
  {
    title: "Health Initiatives",
    description:
      "Promoting wellness through health education, screenings, and improving access to quality healthcare services.",
    icon: <Heart className="h-6 w-6 text-amber-600" />,
    link: "/programs/health",
    image: "/placeholder.svg?height=400&width=600&text=Health",
  },
]

const events = [
  {
    title: "Google Digital Skills Workshop",
    description: "Learn essential digital marketing skills from Google-certified trainers in this hands-on workshop.",
    date: { day: "10", month: "Jun" },
    time: "10:00 AM - 3:00 PM",
    location: "Tech Hub Center",
    link: "/events/google-workshop",
  },
  {
    title: "Annual Fundraising Gala",
    description: "Join us for an evening of celebration and support for our educational initiatives.",
    date: { day: "15", month: "Jun" },
    time: "6:00 PM",
    location: "Grand Hotel Ballroom",
    link: "/events/gala",
  },
  {
    title: "Community Health Fair",
    description: "Free health screenings and wellness information for the whole family.",
    date: { day: "22", month: "Jul" },
    time: "10:00 AM - 2:00 PM",
    location: "City Park",
    link: "/events/health-fair",
  },
]

function Book(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

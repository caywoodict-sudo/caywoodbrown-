"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // In a real implementation, you would send this data to your server/API
      console.log("Form submitted:", formData)
      
      // Simulate a successful submission
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for your message. We'll get back to you soon!"
      })
      
      // Clear the form
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "There was an error submitting your message. Please try again."
      })
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Contact us - Caywood Brown Foundation"
            fill
            priority
            className="object-cover brightness-[0.7]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            We're here to answer your questions and welcome your feedback. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions about our programs, donations, or how to get involved? 
                  Our team is ready to help. Reach out to us through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                        <Phone className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-500 text-sm">Monday-Friday: 9am-5pm EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                        <Mail className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-600">info@caywoodbrownfoundation.org</p>
                        <p className="text-gray-500 text-sm">We'll respond as quickly as possible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                        <MapPin className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p className="text-gray-600">123 Main Street, Suite 200</p>
                        <p className="text-gray-600">Anytown, USA 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-600">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-600">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-600">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://youtube.com" className="hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-600">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8"
            >
              <Card className="border-gray-100 shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold">Send Us a Message</h2>
                      <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>
                    
                    {formStatus.submitted && (
                      <div className="bg-green-50 border border-green-100 text-green-700 px-4 py-3 rounded-md">
                        {formStatus.message}
                      </div>
                    )}
                    
                    {formStatus.error && (
                      <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-md">
                        {formStatus.message}
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is your message regarding?"
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          type="submit"
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12"
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Google Maps Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Location</h2>
            <p className="text-gray-600 text-lg mx-auto max-w-[700px]">
              Visit our office in person. We're located in a convenient location with plenty of parking.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {/* Placeholder for Google Maps integration */}
            <div className="aspect-[16/9] bg-gray-100 relative">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Google+Map+Integration"
                alt="Map of our office location"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600 text-lg font-medium">Google Maps will be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

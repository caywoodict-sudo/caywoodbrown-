"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Quote, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  // Success stories data
  const featuredStories = [
    {
      id: "story1",
      title: "From Education to Entrepreneurship",
      name: "Amina Johnson",
      image: "/placeholder.svg?height=600&width=800&text=Amina",
      video: "video-id-1",
      videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Amina's+Story",
      quote: "The youth entrepreneurship program changed my life. I started my own business at 19 and now employ three people from my community.",
      story: "Growing up in an underserved community, Amina faced numerous barriers to education and employment. After joining our Youth Empowerment Program in 2018, she gained access to digital skills training, entrepreneurship mentoring, and seed funding. Today, she runs a successful online business selling handcrafted jewelry and conducts workshops to help other young people in her community develop their entrepreneurial skills.",
      category: "youth-empowerment"
    },
    {
      id: "story2",
      title: "Breaking Barriers in STEM",
      name: "Sophia Chen",
      image: "/placeholder.svg?height=600&width=800&text=Sophia",
      video: "video-id-2",
      videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Sophia's+Story",
      quote: "The foundation's STEM program for girls gave me the confidence to pursue engineering. Now I'm the first woman in my family to earn a college degree.",
      story: "Sophia always excelled in math and science but lacked role models and support to pursue these interests. Through our Girl Child Advocacy Program, she participated in STEM workshops, received mentoring from women engineers, and earned a scholarship to study computer engineering. She recently graduated at the top of her class and has become a mentor for younger girls in the program, creating a powerful cycle of inspiration and empowerment.",
      category: "girl-child-advocacy"
    },
    {
      id: "story3",
      title: "Community Health Champions",
      name: "The Riverside Community",
      image: "/placeholder.svg?height=600&width=800&text=Riverside",
      video: "video-id-3",
      videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Riverside+Story",
      quote: "The health awareness program helped us create lasting change. Our community now has better health outcomes and a sustainable approach to wellness.",
      story: "The Riverside community faced numerous health challenges including limited access to healthcare information and preventative services. Through our Health Awareness Initiative, we trained 15 community health workers, established a regular health screening program, and implemented a nutrition education series for families. Two years later, the community has seen a 40% increase in preventative health check-ups and significant improvements in maternal and child health outcomes.",
      category: "health-awareness"
    },
    {
      id: "story4",
      title: "Sustainable Farming Revolution",
      name: "The Green Valley Cooperative",
      image: "/placeholder.svg?height=600&width=800&text=Green+Valley",
      video: "video-id-4",
      videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Green+Valley+Story",
      quote: "The foundation helped our farmers adopt sustainable practices. Our crop yields have increased while protecting the environment.",
      story: "Facing the challenges of climate change and depleted soil, farmers in Green Valley were struggling to maintain their livelihoods. Through our Sustainability Project, we introduced regenerative farming techniques, water conservation methods, and helped establish a cooperative that enables farmers to share resources and access better markets. The result has been a 35% increase in crop yields, improved soil health, and greater economic stability for farming families in the region.",
      category: "sustainability"
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial1",
      quote: "The foundation's scholarship program allowed me to become the first in my family to attend university. I'm now working as a teacher and giving back to my community.",
      name: "Marcus Williams",
      role: "Program Beneficiary",
      image: "/placeholder.svg?height=100&width=100&text=MW",
      category: "education"
    },
    {
      id: "testimonial2",
      quote: "Working with the foundation as a healthcare partner has multiplied our impact. Together, we've been able to bring essential health services to communities that previously had no access.",
      name: "Dr. Sarah Johnson",
      role: "Healthcare Partner",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
      category: "health"
    },
    {
      id: "testimonial3",
      quote: "The digital skills training provided by the foundation transformed my employability. I went from being unemployed to working as a web developer within six months.",
      name: "David Chen",
      role: "Program Graduate",
      image: "/placeholder.svg?height=100&width=100&text=DC",
      category: "youth-empowerment"
    },
    {
      id: "testimonial4",
      quote: "As a corporate donor, we've been impressed by the foundation's transparency and the measurable impact of our contributions. Our partnership has become a cornerstone of our CSR strategy.",
      name: "Maria Rodriguez",
      role: "Corporate Partner",
      image: "/placeholder.svg?height=100&width=100&text=MR",
      category: "partnerships"
    },
    {
      id: "testimonial5",
      quote: "The foundation's environmental program helped our village implement sustainable water management practices. We now have clean water year-round and our agricultural output has increased.",
      name: "Joseph Okafor",
      role: "Community Leader",
      image: "/placeholder.svg?height=100&width=100&text=JO",
      category: "sustainability"
    },
    {
      id: "testimonial6",
      quote: "The mentorship program for girls changed my daughter's trajectory. She's now confident, ambitious, and planning for a career in science – something she never considered possible before.",
      name: "Patricia Nguyen",
      role: "Parent",
      image: "/placeholder.svg?height=100&width=100&text=PN",
      category: "girl-child-advocacy"
    }
  ]

  // Photo gallery data
  const galleryImages = [
    {
      id: "img1",
      src: "/placeholder.svg?height=600&width=800&text=Event+1",
      alt: "Youth workshop in progress",
      category: "events"
    },
    {
      id: "img2",
      src: "/placeholder.svg?height=600&width=800&text=Health+Camp",
      alt: "Community health camp",
      category: "health"
    },
    {
      id: "img3",
      src: "/placeholder.svg?height=600&width=800&text=Girls+STEM",
      alt: "Girls participating in STEM activities",
      category: "education"
    },
    {
      id: "img4",
      src: "/placeholder.svg?height=600&width=800&text=Sustainable+Farm",
      alt: "Sustainable farming project",
      category: "sustainability"
    },
    {
      id: "img5",
      src: "/placeholder.svg?height=600&width=800&text=Digital+Training",
      alt: "Digital skills training session",
      category: "youth-empowerment"
    },
    {
      id: "img6",
      src: "/placeholder.svg?height=600&width=800&text=Community+Meeting",
      alt: "Community planning meeting",
      category: "community"
    },
    {
      id: "img7",
      src: "/placeholder.svg?height=600&width=800&text=Donation+Drive",
      alt: "Resource distribution event",
      category: "events"
    },
    {
      id: "img8",
      src: "/placeholder.svg?height=600&width=800&text=Mentorship",
      alt: "Mentorship program session",
      category: "education"
    }
  ]

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
            src="/placeholder.svg?height=1080&width=1920"
            alt="Success Stories and Testimonials"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Success Stories & Impact
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            Discover how our programs are transforming lives and communities through the stories of those we serve.
          </p>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Featured Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Transformative Journeys</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Real stories of individuals and communities whose lives have been changed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={story.videoThumbnail}
                    alt={`Video thumbnail for ${story.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-amber-600 transition-colors"
                      onClick={() => setActiveVideoId(story.video)}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-3">
                    {story.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </div>
                  <h3 className="text-2xl font-bold">{story.title}</h3>
                  <p className="text-gray-600 mt-1">{story.name}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <Quote className="h-8 w-8 text-amber-500 mb-2" />
                  <p className="italic text-gray-600">{story.quote}</p>
                </div>
                <p className="text-gray-600">{story.story}</p>
                <Button variant="outline" className="group" asChild>
                  <Link href={`#full-story-${story.id}`} className="flex items-center gap-2">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal - In a real implementation, you would use a proper modal component */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-2 rounded-lg max-w-4xl w-full">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <p>Video player would be implemented here with ID: {activeVideoId}</p>
            </div>
            <div className="flex justify-end p-2">
              <Button variant="outline" onClick={() => setActiveVideoId(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Voices of Impact</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Hear directly from beneficiaries, partners, and community members about their experiences with our foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-amber-500" />
                      <p className="italic text-gray-600">{item.quote}</p>
                      <div className="flex items-center pt-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Photo Gallery
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Moments of Change</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              A visual journey through our programs, events, and the communities we serve.
            </p>
          </div>

          <Tabs defaultValue="all" className="mt-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image) => (
                  <motion.div
                    key={image.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-square overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            {/* Category-specific tabs */}
            {["events", "education", "health", "sustainability", "community", "youth-empowerment"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryImages
                    .filter((image) => image.category === category)
                    .map((image) => (
                      <motion.div
                        key={image.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="relative aspect-square overflow-hidden rounded-lg shadow-md"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Impact Reports Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              Impact Reports
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Measuring Our Impact</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Detailed reports on our programs, outcomes, and the difference we're making in communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Annual Report Card */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">2023 Annual Report</h3>
                  <p className="text-gray-600">
                    A comprehensive overview of our programs, impact metrics, financial statements, and strategic objectives for the year.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Download PDF (3.2 MB)</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Impact Assessment Card */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Impact Assessment Study</h3>
                  <p className="text-gray-600">
                    An independent evaluation of our education initiatives, measuring outcomes and long-term impact on communities.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Download PDF (2.8 MB)</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sustainability Report Card */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-500">
                      <path d="M2 22a8 8 0 0 1 8-8h12" />
                      <path d="M17 11V3h4" />
                      <path d="m12 8 5 5 5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Sustainability Report</h3>
                  <p className="text-gray-600">
                    A detailed look at our environmental initiatives, sustainable practices, and community-based conservation efforts.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Download PDF (4.1 MB)</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="w-full py-16 md:py-24 bg-amber-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Share Your Story</h2>
              <p className="text-white/90 text-lg">
                Have you been impacted by our programs? We'd love to hear your story and possibly feature it to inspire others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-amber-600 hover:bg-gray-100" size="lg" asChild>
                  <Link href="/contact">Submit Your Story</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Share+Your+Story"
                alt="Share your success story with us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

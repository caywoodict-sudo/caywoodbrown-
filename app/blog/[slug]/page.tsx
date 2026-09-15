import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // In a real implementation, you would fetch the blog post data based on the slug
  // For this example, we'll use a mock post
  const post = {
    title: "Educational Support Program Reaches 5,000 Students Milestone",
    date: "May 5, 2025",
    readTime: "5 min read",
    author: {
      name: "Jennifer Martinez",
      role: "Executive Director",
      image: "/placeholder.svg?height=100&width=100&text=JM",
    },
    categories: ["Impact Stories", "Education"],
    image: "/placeholder.svg?height=720&width=1280&text=Featured",
    content: `
      <p class="text-lg leading-relaxed mb-6">The Caywood Brown Foundation is proud to announce that our flagship Educational Support Program has now reached over 5,000 students across the country. This milestone represents a significant achievement in our mission to empower individuals and strengthen communities through education.</p>
      
      <p class="text-lg leading-relaxed mb-6">Since its inception in 2010, the Educational Support Program has provided scholarships, mentoring, and educational resources to students from underserved communities. What began as a small initiative serving 50 students in one community has grown into a comprehensive program with national reach.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Impact by the Numbers</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>5,000+ students served through various program components</li>
        <li>$2.5 million in scholarships awarded</li>
        <li>350 volunteer mentors engaged</li>
        <li>48 communities reached across 15 states</li>
        <li>92% high school graduation rate among program participants</li>
        <li>85% college enrollment rate for scholarship recipients</li>
      </ul>
      
      <p class="text-lg leading-relaxed mb-6">These numbers tell an important part of the story, but the true impact of the program is best understood through the experiences of the students whose lives have been transformed.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Student Success Stories</h2>
      
      <p class="text-lg leading-relaxed mb-6">Maya Johnson joined our program as a high school sophomore struggling with math and uncertain about her future. Through tutoring and mentoring, she not only improved her grades but discovered a passion for engineering. Today, she's a junior at State University studying civil engineering on a full scholarship.</p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic my-6 text-gray-600">
        "The Educational Support Program didn't just help me with homework—it opened doors I didn't know existed. My mentor showed me possibilities I had never considered and believed in me when I didn't believe in myself." — Maya Johnson
      </blockquote>
      
      <p class="text-lg leading-relaxed mb-6">Carlos Rodriguez, another program participant, became the first in his family to attend college. With the help of a foundation scholarship and ongoing support from his mentor, he navigated the challenges of higher education and is now preparing to graduate with a degree in business administration.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Looking to the Future</h2>
      
      <p class="text-lg leading-relaxed mb-6">While we celebrate this milestone, we recognize that there is still much work to be done. Educational disparities persist in many communities, and the need for support continues to grow.</p>
      
      <p class="text-lg leading-relaxed mb-6">With this in mind, we are expanding the Educational Support Program with the goal of reaching 10,000 students by 2030. This expansion includes:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Increasing scholarship funding by 50%</li>
        <li>Expanding to 20 additional communities</li>
        <li>Developing new program components focused on STEM education and digital literacy</li>
        <li>Enhancing support services for first-generation college students</li>
        <li>Strengthening partnerships with schools, universities, and employers</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How You Can Help</h2>
      
      <p class="text-lg leading-relaxed mb-6">The success of the Educational Support Program depends on the generosity and involvement of our supporters. Here are ways you can contribute to the next phase of this important work:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Donate to support scholarships and program expansion</li>
        <li>Volunteer as a mentor or tutor</li>
        <li>Provide internship or job opportunities for program participants</li>
        <li>Spread the word about our work in your networks</li>
        <li>Partner with us as an organization or business</li>
      </ul>
      
      <p class="text-lg leading-relaxed mb-6">Together, we can continue to break down barriers to education and create opportunities for students to reach their full potential.</p>
      
      <p class="text-lg leading-relaxed">We extend our heartfelt gratitude to all the donors, volunteers, partners, and staff who have contributed to this milestone. Your support has made a lasting difference in the lives of 5,000 students and counting.</p>
    `,
  }

  // Mock related posts
  const relatedPosts = [
    {
      title: "Scholarship Program Expands to Include Vocational Training",
      excerpt:
        "Our scholarship program now includes support for students pursuing vocational and technical training programs.",
      date: "April 12, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Vocational+Training",
      link: "/blog/scholarship-vocational-training",
    },
    {
      title: "New Mentoring Approach Shows Promising Results",
      excerpt:
        "Our revised mentoring curriculum is showing significant improvements in student engagement and outcomes.",
      date: "March 28, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Mentoring",
      link: "/blog/new-mentoring-approach",
    },
    {
      title: "Partnership with Tech Companies Creates Digital Learning Opportunities",
      excerpt:
        "A new partnership is providing students with access to digital learning resources and technology skills training.",
      date: "February 15, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Learning",
      link: "/blog/tech-partnership-digital-learning",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="flex justify-center gap-2 mb-4">
            {post.categories.map((category, index) => (
              <Badge key={index} className="bg-amber-500 hover:bg-amber-600">
                {category}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-200">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              By {post.author.name}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Back to Blog Link */}
              <div className="mb-8">
                <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-amber-600" asChild>
                  <Link href="/blog">
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Back to All Stories
                  </Link>
                </Button>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share This Story
                </h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Facebook">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Twitter">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share via Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Author Card */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full mb-4">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{post.author.name}</h3>
                    <p className="text-gray-600 mb-4">{post.author.role}</p>
                    <p className="text-gray-600 text-sm">
                      Jennifer leads the Caywood Brown Foundation's programs and initiatives, bringing 15 years of
                      nonprofit leadership experience to her role.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    All
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Impact Stories
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Program Updates
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Events
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Press Releases
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Education
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Health
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    Community Development
                  </Badge>
                </div>
              </div>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-md bg-amber-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with the latest news, stories, and updates from the Caywood Brown Foundation.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      required
                    />
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Donate CTA */}
              <Card className="border-0 shadow-md bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Support Our Mission</h3>
                  <p className="mb-4">
                    Your donation helps us continue our work of empowering communities through education, support, and
                    opportunity.
                  </p>
                  <Button className="w-full bg-white text-amber-600 hover:bg-white/90" asChild>
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Related Stories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Get Involved</h2>
          <p className="mx-auto max-w-[800px] text-gray-600 text-lg mb-8">
            There are many ways to support our Educational Support Program and help us reach even more students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/volunteer">Volunteer With Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronRight, Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="People reading foundation news"
            fill
            priority
            className="object-cover brightness-[0.6]"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">News & Stories</h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-100">
            Stay updated with the latest news, impact stories, and updates from the Caywood Brown Foundation.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Featured"
                alt="Children in a classroom with new educational materials"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  May 5, 2025
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />5 min read
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Educational Support Program Reaches 5,000 Students Milestone
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our flagship Educational Support Program has now helped over 5,000 students access quality education and
                resources. Learn about the impact this program has had on communities across the country and the stories
                of students whose lives have been transformed.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Impact Stories</Badge>
                <Badge variant="outline">Education</Badge>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 mt-2" asChild>
                <Link href="/blog/educational-support-program-milestone">
                  Read Full Story <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                Latest Updates
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Recent Stories</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category, idx) => (
                      <Badge key={idx} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
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

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog/archive">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Impact Stories</h2>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/blog/category/impact-stories">View All Impact Stories</Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {impactStories.map((story, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-full min-h-[250px]">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.excerpt}</p>
                    <Link
                      href={story.link}
                      className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                    >
                      Read Full Story <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-lg mb-8">
              Subscribe to our newsletter to receive the latest news, stories, and updates from the Caywood Brown
              Foundation directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                required
              />
              <Button type="submit" className="h-12 bg-amber-500 hover:bg-amber-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const recentPosts = [
  {
    title: "New Community Center Opens in Riverside",
    excerpt:
      "The Caywood Brown Foundation celebrated the opening of a new community center that will serve as a hub for educational programs, health services, and community events.",
    date: "April 28, 2025",
    readTime: "3 min read",
    categories: ["Program Updates", "Community Development"],
    image: "/placeholder.svg?height=400&width=600&text=Community+Center",
    link: "/blog/new-community-center-riverside",
    featured: false,
  },
  {
    title: "Annual Fundraising Gala Raises Record $1.2 Million",
    excerpt:
      "Our annual gala brought together supporters, partners, and community members for an evening of celebration and generosity, raising funds for our educational initiatives.",
    date: "April 15, 2025",
    readTime: "4 min read",
    categories: ["Events", "Fundraising"],
    image: "/placeholder.svg?height=400&width=600&text=Fundraising+Gala",
    link: "/blog/annual-fundraising-gala-2025",
    featured: false,
  },
  {
    title: "Partnership with Local Businesses Creates Job Opportunities",
    excerpt:
      "A new partnership program with local businesses is creating internship and job opportunities for graduates of our workforce development program.",
    date: "April 3, 2025",
    readTime: "5 min read",
    categories: ["Partnerships", "Workforce Development"],
    image: "/placeholder.svg?height=400&width=600&text=Job+Opportunities",
    link: "/blog/business-partnership-job-opportunities",
    featured: false,
  },
  {
    title: "Health Initiative Expands to Five New Communities",
    excerpt:
      "Our health screening and wellness education program is expanding to five additional communities, bringing essential health services to underserved populations.",
    date: "March 22, 2025",
    readTime: "3 min read",
    categories: ["Program Updates", "Health"],
    image: "/placeholder.svg?height=400&width=600&text=Health+Initiative",
    link: "/blog/health-initiative-expansion",
    featured: false,
  },
  {
    title: "Volunteer Spotlight: Meet Our Dedicated Mentors",
    excerpt:
      "Get to know some of the amazing volunteer mentors who are making a difference in students' lives through our educational support program.",
    date: "March 10, 2025",
    readTime: "6 min read",
    categories: ["Volunteer Stories", "Education"],
    image: "/placeholder.svg?height=400&width=600&text=Volunteer+Mentors",
    link: "/blog/volunteer-spotlight-mentors",
    featured: false,
  },
  {
    title: "Foundation Receives Excellence in Nonprofit Management Award",
    excerpt:
      "The Caywood Brown Foundation has been recognized for its outstanding leadership, transparency, and impact with a prestigious nonprofit sector award.",
    date: "February 28, 2025",
    readTime: "2 min read",
    categories: ["Press Releases", "Awards"],
    image: "/placeholder.svg?height=400&width=600&text=Award+Ceremony",
    link: "/blog/nonprofit-management-award",
    featured: false,
  },
]

const impactStories = [
  {
    title: "Maria's Journey: From Scholarship Recipient to Community Leader",
    excerpt:
      "Maria received a scholarship from our foundation 10 years ago. Today, she's a community leader who's giving back by mentoring the next generation of students.",
    date: "April 20, 2025",
    image: "/placeholder.svg?height=400&width=300&text=Maria",
    link: "/blog/marias-journey",
  },
  {
    title: "How a Health Screening Saved James's Life",
    excerpt:
      "When James attended one of our community health fairs, a routine screening detected a serious health issue early enough for successful treatment.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=400&width=300&text=James",
    link: "/blog/james-health-screening-story",
  },
]

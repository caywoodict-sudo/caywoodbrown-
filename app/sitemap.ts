import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caywoodbrownfoundation.org'
  const currentDate = new Date().toISOString()

  const routes = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/about/founders-message`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/programs`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/programs/youth-health-awareness`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/computer-appreciation`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/volunteerism-academy`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/youth-rehabilitation`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/girl-child-advocacy`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/music-training`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/google-training`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/programs/health`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/programs/education`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/programs/community`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/programs/sustainability`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/events`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/events/national-convergence-health-financing-reform`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/events/ssb-tax-breakfast-technical-session`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/events/archive`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/events/host`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/volunteer`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/donate`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/partner`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog/archive`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/success-stories`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/fundraise`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  return routes
}

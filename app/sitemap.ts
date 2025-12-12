import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tarotromania.com"
  const currentDate = new Date().toISOString()

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Main user flow pages
    {
      url: `${baseUrl}/intake`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reading-result`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Blog articles - Article 1
    {
      url: `${baseUrl}/blog/love-tarot-2025`,
      lastModified: "2025-01-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/will-he-come-back-tarot`,
      lastModified: "2025-01-15",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/the-lovers-tarot-meaning`,
      lastModified: "2025-01-18",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/high-priestess-love-meaning`,
      lastModified: "2025-01-20",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Legal/info pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]
}

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
    // Blog articles - EN
    {
      url: `${baseUrl}/blog/love-tarot-2025/en`,
      lastModified: "2025-01-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog articles - RO
    {
      url: `${baseUrl}/blog/love-tarot-2025/ro`,
      lastModified: "2025-01-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog articles - ZH
    {
      url: `${baseUrl}/blog/love-tarot-2025/zh`,
      lastModified: "2025-01-10",
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

import type { MetadataRoute } from "next"
import { articles } from "@/lib/blog/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tarotromania.com"
  const currentDate = new Date().toISOString()

  // Static routes with their metadata
  const staticRoutes: MetadataRoute.Sitemap = [
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

  // Each article slug maps to /blog/{slug}
  // Uses publishedAt for lastModified since updatedAt doesn't exist in the Article interface
  const blogRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.publishedAt, // ISO date string from article metadata
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Combine static and dynamic routes
  return [...staticRoutes, ...blogRoutes]
}

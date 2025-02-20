// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getProjectSlugs } from '@/sanity/schemas/sanity-utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://miebi.space' // replace with your domain
  
  // Get all project slugs
  const projects = await getProjectSlugs()
  
  // Create project URLs
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Add static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    // Add other static routes as needed
  ]

  // Combine and return all routes
  return [...staticRoutes, ...projectUrls]
}
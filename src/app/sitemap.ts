import type { MetadataRoute } from 'next'
import { siteUrl } from './site'

const sitemap = (): MetadataRoute.Sitemap => [
  { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
]

export default sitemap

export default async function sitemap() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const ALL_PAGE_BLOG = Array.from({ length: 10 }, (_, i) => ({
    url: `${SITE_URL}/blog-sitemap/${i + 1}/blogs.xml`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/case-studies`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog-sitemap/all-services.xml`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...ALL_PAGE_BLOG,
  ];
}

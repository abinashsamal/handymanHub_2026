const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly", lastModified: "2025-12-01" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/plumbing", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/painting", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/electrical", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/furniture", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/carpentry", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/home-maintenance", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/lighting", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/bathroom-renovations", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/flooring", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/services/welding", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/services/other-services", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-02-01" },
  { path: "/testimonials", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-02-01" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly", lastModified: "2025-06-01" },
  { path: "/quote", priority: 0.9, changeFrequency: "monthly", lastModified: "2025-06-01" },
];

export default function sitemap() {
  return routes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/plumbing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/painting", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/electrical", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/furniture", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/carpentry", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/home-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/lighting", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/bathroom-renovations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/flooring", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/quote", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap() {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

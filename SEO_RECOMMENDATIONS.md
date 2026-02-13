# SEO Recommendations for London Handyman Hub

## ✅ Already Implemented (Good!)
- ✅ Metadata on all pages
- ✅ Sitemap.xml
- ✅ LocalBusiness structured data
- ✅ Open Graph tags
- ✅ Image alt attributes
- ✅ Skip to main content link
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ Mobile-responsive design
- ✅ Clean URL structure

---

## 🔴 High Priority Improvements

### 1. **robots.txt File**
**Location:** `public/robots.txt`
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://londonhandymanhub.com/sitemap.xml
```

### 2. **FAQ Schema Markup**
**File:** `src/app/faq/page.js`
Add FAQPage schema to improve rich snippets:
```javascript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
```

### 3. **Review/Rating Schema**
**File:** `src/app/testimonials/page.js`
Add AggregateRating schema if you have Google reviews:
```javascript
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8", // Update with actual rating
    "reviewCount": "50" // Update with actual count
  }
};
```

### 4. **Canonical URLs on All Pages**
Ensure every page has a canonical URL in metadata:
```javascript
export const metadata = {
  // ... existing metadata
  alternates: {
    canonical: `${siteUrl}/services/plumbing`
  }
};
```

### 5. **Breadcrumb Schema**
Add breadcrumbs to service pages for better navigation:
```javascript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteUrl
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": `${siteUrl}/services`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Plumbing Services",
      "item": `${siteUrl}/services/plumbing`
    }
  ]
};
```

---

## 🟡 Medium Priority Improvements

### 6. **Enhanced Image Optimization**
- Ensure all images use Next.js `<Image>` component (already doing this ✅)
- Add `loading="lazy"` for below-fold images
- Use WebP format where possible
- Add `width` and `height` attributes to prevent layout shift
- Consider adding `priority` only for above-fold hero images

### 7. **Internal Linking Strategy**
- Add "Related Services" links in footer
- Cross-link between related service pages (e.g., Plumbing ↔ Bathroom Renovations)
- Add contextual links within content (e.g., "See our plumbing services" when mentioning plumbing)

### 8. **Meta Keywords Enhancement**
Add more location-specific keywords:
```javascript
keywords: [
  "handyman London Ontario",
  "handyman London ON",
  "handyman near me",
  "London handyman services",
  "emergency handyman London",
  "affordable handyman London",
  // Add service-specific + location combinations
  "plumber London ON",
  "electrician London Ontario",
  "furniture assembly London",
  // Add neighborhood-specific
  "handyman St. Thomas",
  "handyman Woodstock",
  "handyman Tillsonburg"
]
```

### 9. **Page-Specific Open Graph Images**
Add OG images for each service page:
```javascript
openGraph: {
  images: [
    {
      url: `${siteUrl}/og-images/plumbing-services.jpg`,
      width: 1200,
      height: 630,
      alt: "Plumbing Services in London, ON"
    }
  ]
}
```

### 10. **Structured Data for Services**
Add Service schema to each service page:
```javascript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Plumbing Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "London Handyman Hub"
  },
  "areaServed": {
    "@type": "City",
    "name": "London, ON"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Leaky Faucet Repair"
        }
      }
      // ... more services
    ]
  }
};
```

---

## 🟢 Low Priority / Nice-to-Have

### 11. **Blog/Content Section**
Create a blog for:
- "How to" guides (e.g., "How to Fix a Leaky Faucet")
- Seasonal maintenance tips
- Before/after project showcases
- Local area content (e.g., "Handyman Services in St. Thomas")

### 12. **Google Business Profile Integration**
- Embed Google Reviews widget
- Add Google Maps embed on contact page
- Link to Google Business Profile prominently

### 13. **Performance Optimizations**
- Enable Next.js Image Optimization
- Add `next.config.mjs` optimizations:
```javascript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  compress: true,
};
```

### 14. **Social Media Meta Tags**
Ensure complete Twitter Card and Facebook OG tags:
```javascript
twitter: {
  card: "summary_large_image",
  site: "@YourTwitterHandle", // Add if you have one
  creator: "@YourTwitterHandle"
}
```

### 15. **Local SEO Enhancements**
- Add address schema to contact page
- Include "Service Area" schema
- Add geo-coordinates if you have a physical location
- Create location-specific landing pages (e.g., `/services/st-thomas`)

### 16. **Accessibility Improvements** (SEO Factor)
- Ensure all interactive elements are keyboard accessible
- Add ARIA labels where needed
- Test with screen readers
- Ensure color contrast meets WCAG AA standards

### 17. **Schema Markup for How-To Content**
If you add blog posts with tutorials:
```javascript
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix a Leaky Faucet",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Turn off water supply"
    }
    // ... more steps
  ]
};
```

### 18. **Video Schema** (if you add videos)
```javascript
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Plumbing Repair Tutorial",
  "description": "...",
  "thumbnailUrl": "...",
  "uploadDate": "..."
};
```

---

## 📊 Technical SEO Checklist

- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Verify site ownership in Search Console
- [ ] Check mobile-friendliness in Google's Mobile-Friendly Test
- [ ] Test page speed with PageSpeed Insights
- [ ] Ensure HTTPS is enabled (if not already)
- [ ] Set up 404 error page
- [ ] Add XML sitemap to robots.txt
- [ ] Check for broken internal links
- [ ] Ensure all external links use `rel="noopener noreferrer"`

---

## 🎯 Content SEO Recommendations

### Title Tag Best Practices
- Keep under 60 characters
- Include primary keyword + location
- Make it compelling and unique per page
- Example: "Plumbing Repair London ON | Fast & Affordable | Free Quotes"

### Meta Description Best Practices
- Keep under 160 characters
- Include call-to-action
- Include location
- Example: "Expert plumbing repair in London, ON. Fast, reliable service. Free quotes. Call 416 561 4736. Serving London, St. Thomas & area."

### Heading Structure
- One H1 per page (already doing ✅)
- Use H2 for main sections
- Use H3 for subsections
- Include keywords naturally

### Content Recommendations
- Add 300+ words of unique content per service page
- Include location mentions naturally
- Add FAQ sections to service pages
- Include customer testimonials on service pages
- Add "Why Choose Us" sections with unique value propositions

---

## 🔍 Keyword Research Suggestions

### Primary Keywords
- handyman London Ontario
- handyman London ON
- handyman near me London
- home repair London
- handyman services London

### Service-Specific Keywords
- plumbing repair London
- electrical repair London
- furniture assembly London
- painting services London
- carpentry London
- bathroom renovation London
- flooring installation London

### Long-Tail Keywords
- affordable handyman London Ontario
- emergency handyman London
- handyman for small jobs London
- IKEA furniture assembly London
- TV mounting service London
- deck repair London Ontario

### Location-Specific Keywords
- handyman St. Thomas
- handyman Woodstock
- handyman Tillsonburg
- handyman Strathroy
- handyman Komoka

---

## 📈 Monitoring & Tracking

1. **Google Search Console**
   - Monitor search performance
   - Track keyword rankings
   - Identify crawl errors
   - Monitor mobile usability

2. **Google Analytics 4**
   - Track user behavior
   - Monitor conversion rates
   - Track quote form submissions
   - Monitor appointment bookings

3. **Rank Tracking Tools**
   - Track keyword positions
   - Monitor competitor rankings
   - Track local pack rankings

---

## 🚀 Quick Wins (Can Implement Today)

1. ✅ Create `robots.txt` file
2. ✅ Add FAQ schema to FAQ page
3. ✅ Add canonical URLs to all pages
4. ✅ Enhance meta descriptions with CTAs
5. ✅ Add breadcrumb schema to service pages
6. ✅ Submit sitemap to Google Search Console
7. ✅ Add more location-specific keywords
8. ✅ Cross-link related service pages

---

## 📝 Notes

- Focus on local SEO since this is a location-based business
- Google Business Profile optimization is crucial
- Reviews and ratings significantly impact local rankings
- Regular content updates help maintain freshness
- Mobile optimization is critical (already responsive ✅)

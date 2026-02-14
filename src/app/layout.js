import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-1XNPKZ4DKE";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "London Handyman Hub | Professional Handyman Services in London, ON",
    template: "%s | London Handyman Hub",
  },
  description:
    "Quality handyman services in London and area: plumbing, electrical, carpentry, painting, furniture assembly, and home maintenance. Free quotes. Call 416 561 4736.",
  keywords: [
    "handyman London Ontario",
    "handyman London ON",
    "home repairs London",
    "plumbing repair London",
    "electrical repair London",
    "furniture assembly London",
    "painting and drywall London",
    "carpentry London",
    "home maintenance London",
  ],
  authors: [{ name: "London Handyman Hub", url: siteUrl }],
  creator: "London Handyman Hub",
  publisher: "London Handyman Hub",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "London Handyman Hub",
    title: "London Handyman Hub | Professional Handyman Services in London, ON",
    description:
      "Quality handyman services in London and area. Plumbing, electrical, carpentry, painting, furniture assembly. Free quotes.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "London Handyman Hub | Handyman Services London, ON",
    description: "Quality handyman services in London and area. Free quotes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    // Add when you have them: google: 'your-google-verification-code', yandex: '...', bing: '...'
  },
  alternates: { canonical: siteUrl },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "London Handyman Hub",
  description:
    "Professional handyman services in London and area: plumbing, electrical, carpentry, painting, furniture assembly, and home maintenance.",
  url: siteUrl,
  telephone: "+1-416-561-4736",
  email: "LondonHandymanHub@gmail.com",
  areaServed: [
    "London, ON",
    "St. Thomas",
    "Tillsonburg",
    "Strathroy",
    "Woodstock",
    "Komoka",
    "Dorchester",
    "Ingersoll",
    "Lucan",
    "Mount Brydges",
    "Parkhill",
    "Port Stanley",
    "St. Marys",
    "Exeter",
    "Ilderton",
    "Aylmer",
    "Stratford",
    "Tavistock",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "18:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col`} suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#e53935] focus:text-white focus:rounded-md">
          Skip to main content
        </a>
        <Header />
        <main className="flex-grow" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

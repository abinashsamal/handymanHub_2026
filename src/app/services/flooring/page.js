import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Flooring Services | Laminate, Vinyl, Hardwood Repair, Tile, Baseboard | London, ON",
  description:
    "Flooring in London and area: laminate and vinyl installation, hardwood and tile repair, baseboard installation, floor leveling, subfloor repair. Free quotes.",
  openGraph: { title: "Flooring Services | London Handyman Hub", url: "/services/flooring" },
  alternates: {
    canonical: `${siteUrl}/services/flooring`,
  },
};

const flooringServices = [
  "Laminate flooring installation",
  "Vinyl flooring installation",
  "Hardwood floor repair",
  "Tile repair",
  "Baseboard installation",
  "Floor leveling",
  "Subfloor repair",
  "Engineered wood installation",
  "Luxury vinyl plank (LVP) installation",
  "Transition strips and trim",
  "Underlayment installation",
  "Floor preparation",
];

const whyChooseUs = [
  "Professional installation and repair for laminate, vinyl, hardwood, and tile",
  "Free quotes so you know the cost before we start",
  "Proper preparation and leveling for a long-lasting finish",
  "Baseboard and trim work to complete the look",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Carpentry Services", path: "/services/carpentry" },
  { label: "Bathroom Renovations", path: "/services/bathroom-renovations" },
  { label: "Painting & Drywall", path: "/services/painting" },
  { label: "Home Maintenance", path: "/services/home-maintenance" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function FlooringServicesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";
  
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
        "name": "Flooring Services",
        "item": `${siteUrl}/services/flooring`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Flooring Services</h1>
          <p className="text-lg max-w-3xl">
            We install and repair various types of flooring to enhance your home's look and feel. From laminate and vinyl installation to hardwood and tile repair, baseboard installation, and floor leveling—we handle it in London and area.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Flooring in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers flooring installation and repair for residential and commercial properties in London and nearby areas. Whether you want new laminate or vinyl flooring, hardwood or tile repairs, or baseboard and subfloor work, we prepare the surface properly and install or fix your floors so they look great and last.
              </p>
              <p className="text-gray-700">
                We handle floor leveling and subfloor repair when needed so your new or existing flooring sits flat and stable. We also install baseboards and transition strips for a finished look.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Our flooring services cover installation of laminate and vinyl, repair of hardwood and tile, baseboard installation, and floor preparation.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {flooringServices.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#e53935] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Laminate, vinyl, hardwood, tile & more</h2>
              <p className="text-gray-700 mb-4">
                <strong>Laminate flooring installation:</strong> We install laminate flooring with proper underlayment and expansion gaps. We work around obstacles, install transition strips, and ensure a clean, professional finish.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Vinyl flooring installation:</strong> We install sheet vinyl, vinyl tile, and luxury vinyl plank (LVP). We prepare the subfloor, apply adhesive or use click-lock systems where appropriate, and trim and seal edges.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Hardwood floor repair:</strong> We fix squeaky boards, replace damaged planks, sand and refinish specific areas when possible, and repair gaps or cupping. We help extend the life of your hardwood floors.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Tile repair:</strong> We replace cracked or loose tiles, repair grout, and fix lippage or hollow spots. We match existing tile when possible and ensure a flush, secure result.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Baseboard installation:</strong> We install baseboards and shoe molding along walls to cover the floor-to-wall joint and give rooms a finished look. We can match existing profiles or install new trim throughout.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Floor leveling:</strong> We level uneven subfloors using self-leveling compound or plywood overlays so laminate, vinyl, or tile installations don't telegraph bumps or fail prematurely.
              </p>
              <p className="text-gray-700">
                <strong>Subfloor repair:</strong> We repair or replace damaged subfloor sections, fix soft spots, and ensure a solid base before new flooring goes down. We address moisture or structural issues where needed.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our flooring services</h2>
              <ul className="space-y-3">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-[#e53935] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Our service area</h2>
              <p className="text-gray-700">
                We serve London, St. Thomas, Tillsonburg, Strathroy, Woodstock, Stratford, Dorchester, and surrounding areas. Contact us to confirm we cover your location and to get a quote.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Other services we offer</h2>
              <ul className="flex flex-wrap gap-3">
                {relatedServices.map(({ label, path }) => (
                  <li key={label}>
                    <Link href={path} className="text-[#e53935] hover:text-red-700 font-medium">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[#e53935] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need flooring installed or repaired? Get a free quote</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Call us or fill out our quote form. We'll get back to you and schedule a time that works for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:4165614736" className="bg-white text-[#e53935] px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                  Call 416 561 4736
                </a>
                <Link href="/quote" className="bg-[#1a237e] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900">
                  Get a free quote
                </Link>
                <a
                  href="https://calendar.app.google/kiRFHo8EPAMyrvxk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1D3557] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 border border-[#1D3557]"
                >
                  Book Appointment
                </a>
              </div>
            </section>
          </div>

          {/* Right: image only */}
          <div className="md:sticky md:top-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/flooringServices.png"
                alt="Flooring services in London, ON - laminate, vinyl, hardwood, tile, baseboard"
                width={600}
                height={360}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

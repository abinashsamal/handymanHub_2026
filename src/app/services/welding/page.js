import Image from 'next/image';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Welding Services | Metal Fabrication & Repair | London, ON",
  description:
    "Professional welding services in London and area: steel and metal fabrication, structural repairs, gate and fence welding, custom metalwork, MIG and TIG welding. Free quotes.",
  openGraph: {
    title: "Welding Services | London Handyman Hub",
    description: "Welding and metal fabrication in London, ON: structural repairs, gate and fence welding, custom metalwork, MIG and TIG welding. Free quotes.",
    url: `${siteUrl}/services/welding`,
  },
  alternates: {
    canonical: `${siteUrl}/services/welding`,
  },
};

const weldingServices = [
  "MIG welding",
  "TIG welding",
  "Stick (arc) welding",
  "Steel and metal fabrication",
  "Structural steel repairs",
  "Gate and fence welding",
  "Railing and handrail fabrication",
  "Custom metalwork and brackets",
  "Trailer and vehicle frame repairs",
  "Metal furniture repair",
  "Pipe welding and repair",
  "On-site and mobile welding",
];

const signsNeedWelding = [
  "Cracked or broken metal structures",
  "Damaged gates, fences, or railings",
  "Rusted-through metal that needs patching",
  "Broken trailer hitches or frames",
  "Loose or failing welds on equipment",
  "Custom metalwork required for a project",
  "Structural steel in need of repair",
];

const whyChooseUs = [
  "Experienced welders for residential, commercial, and industrial work",
  "Free quotes so you know the cost before we start",
  "MIG, TIG, and stick welding for all metal types and thicknesses",
  "Mobile welding available — we come to your location",
  "Quality workmanship backed by our satisfaction guarantee",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Carpentry Services", path: "/services/carpentry" },
  { label: "Home Maintenance", path: "/services/home-maintenance" },
  { label: "Flooring Services", path: "/services/flooring" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function WeldingServices() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Welding Services",
        item: `${siteUrl}/services/welding`,
      },
    ],
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
          <h1 className="text-4xl font-bold mb-4">Welding Services in London, ON</h1>
          <p className="text-lg max-w-3xl">
            From structural steel repairs to custom metalwork and gate fabrication, London Handyman Hub provides professional welding services across London and surrounding areas. Mobile welding available — we come to you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Professional welding in London, ON and nearby areas</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers welding and metal fabrication services for homeowners, businesses, and contractors in London, ON and the surrounding region. Whether you need a broken gate repaired, a custom railing fabricated, or structural metalwork done on-site, our experienced welders get the job done right.
              </p>
              <p className="text-gray-700">
                We use MIG, TIG, and stick welding techniques to handle a wide range of metals and project types. Our mobile welding service means we can come directly to your home, job site, or business — no hauling required.
              </p>
            </section>

            {/* Services list */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Welding services we offer</h2>
              <p className="text-gray-700 mb-6">
                Whatever metal repair or fabrication you need, we have the tools and expertise to handle it. Here's what we offer:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {weldingServices.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#e53935] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Signs you need welding */}
            <section className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Signs you need a professional welder</h2>
              <p className="text-gray-700 mb-4">
                Don't ignore damaged metalwork — small cracks and weak welds can become safety hazards. Call us if you notice:
              </p>
              <ul className="space-y-2">
                {signsNeedWelding.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-[#e53935] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Why choose us */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our welding services in London</h2>
              <p className="text-gray-700 mb-6">
                London Handyman Hub brings the same quality and reliability to welding that we bring to all our trades. Here's what sets us apart:
              </p>
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

            {/* Related services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Other services we offer in London, ON</h2>
              <p className="text-gray-700 mb-4">
                We also handle carpentry, home maintenance, flooring, painting, plumbing, and more.
              </p>
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

            {/* CTA */}
            <section className="bg-[#e53935] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need welding work? Get a free quote</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Call us or fill out our quote form and we'll get back to you quickly. Mobile welding available throughout London and the surrounding area.
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

          {/* Right: image */}
          <div className="md:sticky md:top-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/weldingServices.png"
                alt="Professional welding services in London, ON – metal fabrication and repair"
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

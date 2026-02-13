import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Furniture Assembly | IKEA, Wayfair, Structube, Cabinets & Wardrobes | London, ON",
  description:
    "Furniture assembly in London and area: IKEA, Wayfair, Structube assembly, cabinet making, wardrobe installation, bed frames, shelving. Fast, professional. Free quotes.",
  openGraph: { title: "Furniture Assembly | London Handyman Hub", url: "/services/furniture" },
};

const furnitureServices = [
  "IKEA furniture assembly",
  "Wayfair furniture assembly",
  "Structube furniture assembly",
  "Bed frame assembly",
  "Wardrobe installation",
  "Cabinet making and installation",
  "Kitchen cabinet installation",
  "Desk and office furniture",
  "Shelving units",
  "Tables and chairs",
  "Entertainment centers",
  "Bookcases and storage units",
];

const whyChooseUs = [
  "Professional assembly so your furniture is stable and built to last",
  "Free quotes – we'll give you a clear price before we start",
  "Experience with IKEA, Wayfair, Structube and flat-pack brands",
  "Cabinet and wardrobe work for closets, kitchens, and storage",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Painting & Drywall", path: "/services/painting" },
  { label: "Electrical Services", path: "/services/electrical" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function FurnitureAssemblyPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Furniture Assembly</h1>
          <p className="text-lg max-w-3xl">
            Skip the hassle of flat-pack assembly. We put together IKEA, Wayfair, Structube and other furniture—and handle cabinet making, wardrobe installation, and more across London and area.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Furniture assembly in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers furniture assembly and installation for homes and businesses in London and nearby areas. Whether it's a single IKEA bookcase or a full room of Wayfair or Structube furniture, we assemble it correctly and efficiently.
              </p>
              <p className="text-gray-700">
                We also build and install cabinets, wardrobes, and custom storage so your space is organized and finished to a high standard.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                From flat-pack assembly to cabinet and wardrobe work, we handle a wide range of furniture and storage projects.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {furnitureServices.map((item, i) => (
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">IKEA, Wayfair, Structube & more</h2>
              <p className="text-gray-700 mb-4">
                <strong>IKEA, Wayfair & Structube assembly:</strong> We're used to flat-pack instructions and hardware. We assemble beds, dressers, bookshelves, desks, TV stands, and dining sets so everything is level, secure, and ready to use.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Cabinet making & installation:</strong> We build and install cabinets for kitchens, bathrooms, laundry rooms, and garages. We can work with your existing layout or help you plan storage and counter space.
              </p>
              <p className="text-gray-700">
                <strong>Wardrobe installation:</strong> From built-in wardrobes to closet systems and shelving, we install storage that fits your space and keeps clothes and gear organized.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our furniture assembly services</h2>
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
              <h2 className="text-2xl font-bold mb-4">Need furniture assembled? Get a free quote</h2>
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
              </div>
            </section>
          </div>

          {/* Right: image only */}
          <div className="md:sticky md:top-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/furnitureServices.png"
                alt="Furniture assembly in London, ON - IKEA, Wayfair, Structube, cabinets, wardrobes"
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

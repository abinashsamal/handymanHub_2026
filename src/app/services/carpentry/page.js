import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Carpentry Services | Cabinets, Shelving, Doors, Trim, Decks, Stairs | London, ON",
  description:
    "Carpentry in London and area: cabinet installation and repair, custom shelving, door installation, trim and molding, deck and fence repairs, staircase and wood floor repairs. Free quotes.",
  openGraph: { title: "Carpentry Services | London Handyman Hub", url: "/services/carpentry" },
};

const carpentryServices = [
  "Cabinet installation and repair",
  "Custom shelving",
  "Door installation and repair",
  "Trim and molding installation",
  "Deck and fence repairs",
  "Staircase repairs",
  "Wood floor repairs",
  "Baseboard and crown molding",
  "Closet and storage solutions",
  "Window trim and casing",
  "Handrail and baluster repair",
];

const whyChooseUs = [
  "Skilled carpentry for cabinets, doors, trim, and structural repairs",
  "Free quotes so you know the cost before we start",
  "Quality materials and workmanship that lasts",
  "Decks, fences, stairs, and wood floors repaired and upgraded",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Painting & Drywall", path: "/services/painting" },
  { label: "Electrical Services", path: "/services/electrical" },
  { label: "Furniture Assembly", path: "/services/furniture" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function CarpentryServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Carpentry Services</h1>
          <p className="text-lg max-w-3xl">
            From cabinet installation and custom shelving to doors, trim, decks, and wood floor repairs—we handle a full range of carpentry work for homes and businesses in London and area.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Carpentry in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers carpentry services for residential and commercial properties in London and nearby areas. Whether you need cabinets installed or repaired, custom shelving built, or doors, trim, decks, and stairs fixed, we have the skills and experience to get it done right.
              </p>
              <p className="text-gray-700">
                We work on interior and exterior woodwork—from baseboards and crown molding to deck and fence repairs and wood floor repairs—so your property looks great and functions well.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Our carpentry services cover cabinets, shelving, doors, trim, decks, fences, stairs, and wood floors.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {carpentryServices.map((item, i) => (
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Cabinet, shelving, doors & trim</h2>
              <p className="text-gray-700 mb-4">
                <strong>Cabinet installation and repair:</strong> We install new kitchen, bathroom, and utility cabinets and repair or adjust existing ones. We ensure doors and drawers are aligned and hardware works smoothly.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Custom shelving:</strong> We build and install shelving for closets, garages, pantries, and living spaces. We can match your existing trim and finish for a cohesive look.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Door installation and repair:</strong> We hang interior and exterior doors, fix sticking or sagging doors, and replace or repair frames and hardware.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Trim and molding installation:</strong> We install and repair baseboards, crown molding, window and door casing, and other trim to give your rooms a finished, professional appearance.
              </p>
              <p className="text-gray-700">
                <strong>Deck and fence repairs, staircase repairs, wood floor repairs:</strong> We repair loose or damaged deck boards and railings, fix fence posts and panels, tighten or replace stair treads and handrails, and address squeaks, gaps, and damage in wood floors.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our carpentry services</h2>
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
              <h2 className="text-2xl font-bold mb-4">Need carpentry work? Get a free quote</h2>
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
                src="/carpentryServices.png"
                alt="Carpentry services in London, ON - cabinets, shelving, doors, trim, decks, stairs"
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

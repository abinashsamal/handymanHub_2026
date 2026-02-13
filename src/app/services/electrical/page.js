import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Electrical Services | Light Fixtures, Outlets, TV Mounting | London, ON",
  description:
    "Electrical services in London and area: light fixture and chandelier installation, new outlets, TV mounting, ceiling fans, switch replacement. Safe, reliable. Free quotes.",
  openGraph: { title: "Electrical Services | London Handyman Hub", url: "/services/electrical" },
};

const electricalServices = [
  "Light fixture installation",
  "Chandelier installation",
  "New outlet installation",
  "Outlet and switch replacement",
  "TV mounting and wiring",
  "Ceiling fan installation",
  "Recessed and track lighting",
  "Circuit breaker replacement",
  "Wiring repair",
  "Electrical panel upgrades",
  "Smart home device installation",
  "Doorbell and door chime installation",
];

const whyChooseUs = [
  "Safe, reliable electrical work for your home or business",
  "Free quotes so you know the cost before we start",
  "Experienced with fixtures, outlets, and AV setup",
  "Flexible scheduling and prompt service",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Painting & Drywall", path: "/services/painting" },
  { label: "Home Maintenance", path: "/services" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function ElectricalServices() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Electrical Services</h1>
          <p className="text-lg max-w-3xl">
            From light fixtures and chandeliers to new outlets and TV mounting, we handle a wide range of electrical repairs and installations in London and area. Safe, reliable, and done right.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Electrical services in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers electrical services for residential and commercial properties in London and nearby areas. Whether you need a new light fixture, an extra outlet, or a TV mounted and wired, we can help.
              </p>
              <p className="text-gray-700">
                We install chandeliers, ceiling fans, recessed and track lighting, and can add or replace outlets and switches. We also mount TVs and run wiring for a clean, professional look.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Our electrical services include everything from simple fixture swaps to new circuits and TV mounting. We work safely and leave your space tidy.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {electricalServices.map((item, i) => (
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Light fixtures, chandeliers & TV mounting</h2>
              <p className="text-gray-700 mb-4">
                <strong>Light fixture & chandelier installation:</strong> We hang ceiling lights, chandeliers, and wall sconces securely and wire them correctly. We can also install dimmer switches for the right ambiance.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>New outlets:</strong> Need an outlet in a new location? We can add outlets where you need them and replace old or faulty ones. We also install USB outlets for charging devices.
              </p>
              <p className="text-gray-700">
                <strong>TV mounting:</strong> We mount TVs on walls, hide cables, and connect to power and AV equipment so you get a clean setup without dangling wires.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our electrical services</h2>
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
                We serve London, St. Thomas, Tillsonburg, Strathroy, Woodstock, Stratford, Dorchester, and surrounding areas. Contact us to confirm we cover your location.
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
              <h2 className="text-2xl font-bold mb-4">Need electrical work? Get a free quote</h2>
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
                src="/electricalServices.png"
                alt="Electrical services in London, ON - light fixtures, outlets, TV mounting"
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

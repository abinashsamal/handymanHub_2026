import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Lighting Installation | Chandeliers, Recessed, Track, Outdoor, Smart Lighting | London, ON",
  description:
    "Lighting installation in London and area: chandeliers, recessed lighting, under-cabinet, track lighting, outdoor lighting, motion sensor lights, smart lighting systems. Free quotes.",
  openGraph: { title: "Lighting Installation | London Handyman Hub", url: "/services/lighting" },
};

const lightingServices = [
  "Chandelier installation",
  "Recessed lighting",
  "Under-cabinet lighting",
  "Track lighting",
  "Outdoor lighting",
  "Motion sensor lights",
  "Smart lighting systems",
  "Ceiling fixture installation",
  "Wall sconces and pendant lights",
  "Dimmer switch installation",
  "Landscape and path lighting",
  "Security and flood lighting",
];

const whyChooseUs = [
  "Professional installation so your fixtures are secure and wired correctly",
  "Free quotes so you know the cost before we start",
  "Experience with chandeliers, recessed cans, track lights, and smart systems",
  "Indoor and outdoor lighting for homes and businesses",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Electrical Services", path: "/services/electrical" },
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Painting & Drywall", path: "/services/painting" },
  { label: "Carpentry Services", path: "/services/carpentry" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function LightingInstallationPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Lighting Installation</h1>
          <p className="text-lg max-w-3xl">
            Brighten your space with professional lighting installation. From chandeliers and recessed lights to track lighting, outdoor fixtures, and smart systems—we install it right in London and area.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Lighting installation in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers lighting installation for residential and commercial properties in London and nearby areas. Whether you want a statement chandelier, clean recessed lighting, under-cabinet task lights, or outdoor and smart lighting, we handle the wiring and mounting so everything works safely and looks great.
              </p>
              <p className="text-gray-700">
                We install dimmers, motion sensors, and smart bulbs or switches so you can control ambiance and energy use. Indoor and outdoor projects welcome.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Our lighting services cover chandeliers, recessed and track lighting, under-cabinet and outdoor lights, motion sensors, and smart systems.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {lightingServices.map((item, i) => (
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Chandeliers, recessed, track & smart lighting</h2>
              <p className="text-gray-700 mb-4">
                <strong>Chandelier installation:</strong> We hang chandeliers and ceiling fixtures securely, wire them correctly, and can add or replace dimmer switches so you get the right look and ambiance in dining rooms, foyers, and bedrooms.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Recessed lighting:</strong> We install can lights and LED recessed fixtures in ceilings for a clean, modern look. We can layout spacing, cut openings, and wire to existing or new circuits.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Under-cabinet lighting:</strong> We install LED strips or puck lights under kitchen and bathroom cabinets for task lighting. Hardwired or plug-in options, with switches or dimmers as needed.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Track lighting:</strong> We mount and wire track systems so you can aim lights where you need them. Ideal for galleries, kitchens, and flexible room layouts.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Outdoor lighting:</strong> We install wall lights, path and landscape lighting, and security or flood lights. We use weatherproof fixtures and proper wiring for safe, reliable outdoor use.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Motion sensor lights:</strong> We install motion-activated fixtures and switches for porches, garages, and walkways so lights turn on when you need them and save energy when you don't.
              </p>
              <p className="text-gray-700">
                <strong>Smart lighting systems:</strong> We install smart bulbs, switches, and dimmers that work with Alexa, Google Home, or other hubs. We can set up schedules, scenes, and voice control so your lighting fits your routine.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our lighting installation services</h2>
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
              <h2 className="text-2xl font-bold mb-4">Ready to brighten your space? Get a free quote</h2>
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
                src="/lightingServices.png"
                alt="Lighting installation in London, ON - chandeliers, recessed, track, outdoor, smart lighting"
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

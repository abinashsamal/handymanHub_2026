import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Bathroom Renovations | Toilet, Shower, Vanity, Tile, Fixtures | London, ON",
  description:
    "Bathroom renovation in London and area: toilet replacement, shower installation, vanity installation, tile repair and installation, fixture upgrades, caulking, bathroom hardware. Free quotes.",
  openGraph: { title: "Bathroom Renovations | London Handyman Hub", url: "/services/bathroom-renovations" },
};

const bathroomServices = [
  "Toilet replacement",
  "Shower installation",
  "Vanity installation",
  "Tile repair and installation",
  "Fixture upgrades",
  "Caulking and sealing",
  "Bathroom hardware installation",
  "Tub and shower surround installation",
  "Faucet and tap replacement",
  "Mirror and medicine cabinet",
  "Exhaust fan installation",
  "Bathroom lighting",
];

const whyChooseUs = [
  "Experienced team handling plumbing, tiling, and finishing so your bathroom is built to last",
  "Free consultation and detailed estimate with no hidden fees",
  "Full-service renovations: we coordinate plumbing, electrical, tiling, and finishing so you don't need multiple contractors",
  "Custom solutions to match your style and budget—from simple refreshes to complete transformations",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const processSteps = [
  { title: "Consultation & estimate", text: "We start with a free consultation to understand your vision and needs, then provide a detailed estimate breaking down costs upfront." },
  { title: "Design & planning", text: "We work with you to plan every detail—from tile and fixture choices to layout—so the design fits your style and budget." },
  { title: "Renovation & installation", text: "Our team handles plumbing, electrical, tiling, and finishing while keeping disruption to your home to a minimum." },
  { title: "Final inspection", text: "We walk you through the finished bathroom to ensure you're fully satisfied before we consider the job complete." },
];

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Electrical Services", path: "/services/electrical" },
  { label: "Lighting Installation", path: "/services/lighting" },
  { label: "Carpentry Services", path: "/services/carpentry" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function BathroomRenovationsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Bathroom Renovations</h1>
          <p className="text-lg max-w-3xl">
            Transform your bathroom with expert installation and renovation. From toilet and shower installation to vanity, tile, fixtures, and finishing—we deliver quality work tailored to your needs in London and area.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Bathroom renovation in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers bathroom renovation and installation services for residential and commercial properties in London and nearby areas. Whether you want a simple refresh—new toilet, vanity, or fixtures—or a full transformation with shower installation, tile work, and new plumbing, we handle it with care and craftsmanship.
              </p>
              <p className="text-gray-700">
                We coordinate plumbing, tiling, caulking, and hardware so your bathroom is functional, durable, and finished to a high standard. A well-done bathroom renovation also adds value to your home.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Our bathroom services include toilet and shower installation, vanities, tile work, fixture upgrades, caulking, and hardware.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {bathroomServices.map((item, i) => (
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Toilet, shower, vanity, tile & fixtures</h2>
              <p className="text-gray-700 mb-4">
                <strong>Toilet replacement:</strong> We remove old toilets and install new ones, including proper wax ring or gasket, supply line, and flange checks. We ensure a secure, leak-free fit.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Shower installation:</strong> We install new shower bases, surrounds, and glass doors or curtains. We handle plumbing for shower valves and heads and can work with prefab or tiled enclosures.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Vanity installation:</strong> We install bathroom vanities and countertops, connect faucets and drains, and ensure everything is level and plumb. We can also install mirrors and medicine cabinets above.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Tile repair and installation:</strong> We repair cracked or loose tiles and install new floor and wall tile in bathrooms. We use appropriate underlayment and waterproofing where needed and match existing tile when possible.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Fixture upgrades:</strong> We replace faucets, taps, showerheads, and other fixtures. We upgrade to water-efficient or modern designs and ensure connections are leak-free.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Caulking and sealing:</strong> We remove old caulk and apply new silicone or acrylic caulk around tubs, showers, sinks, and joints to prevent water damage and keep the bathroom looking clean.
              </p>
              <p className="text-gray-700">
                <strong>Bathroom hardware installation:</strong> We install towel bars, toilet paper holders, robe hooks, and other hardware. We mount them securely and align them for a polished finish.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our bathroom renovation services</h2>
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Our bathroom renovation process</h2>
              <p className="text-gray-700 mb-6">
                We keep the process clear so you know what to expect from start to finish.
              </p>
              <ul className="space-y-6">
                {processSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e53935] text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#1a237e] mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why invest in a bathroom renovation</h2>
              <p className="text-gray-700">
                A well-done bathroom renovation improves daily comfort and can increase the value of your home. Whether you're updating for yourself or preparing to sell, we help you get a functional, attractive, and durable bathroom without the stress of coordinating multiple trades.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Our service area</h2>
              <p className="text-gray-700">
                We serve London, St. Thomas, Tillsonburg, Strathroy, Woodstock, Stratford, Dorchester, and surrounding areas. Contact us to confirm we cover your location and to get a free estimate.
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
              <h2 className="text-2xl font-bold mb-4">Ready to transform your bathroom? Get a free quote</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Call us or fill out our quote form. We'll get back to you and schedule a consultation at a time that works for you.
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
                src="/bathroomRenovationServices.png"
                alt="Bathroom renovation in London, ON - toilet, shower, vanity, tile, fixtures"
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

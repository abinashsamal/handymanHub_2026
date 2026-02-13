import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Home Maintenance | Gutter Cleaning, Windows, Pressure Washing, Seasonal Packages | London, ON",
  description:
    "Home maintenance in London and area: gutter cleaning, window repairs, pressure washing, weather stripping, lock replacement, smoke detector installation, seasonal maintenance packages. Free quotes.",
  openGraph: { title: "Home Maintenance | London Handyman Hub", url: "/services/home-maintenance" },
};

const maintenanceServices = [
  "Gutter cleaning",
  "Window repairs",
  "Pressure washing",
  "Weather stripping",
  "Lock replacement",
  "Smoke detector installation",
  "Seasonal maintenance packages",
  "Eavestrough and downspout cleaning",
  "Screen repair and replacement",
  "Door adjustment and hardware",
  "Carbon monoxide detector installation",
  "Exterior and driveway cleaning",
];

const whyChooseUs = [
  "Experienced team focused on keeping your home in top condition",
  "Free consultation and quotes so you know the cost before we start",
  "Quick, efficient service that minimizes disruption to your routine",
  "Custom solutions and seasonal packages to fit your needs and budget",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const processSteps = [
  { title: "Initial consultation", text: "We begin with a free consultation to assess your needs and provide an estimate." },
  { title: "Planning & scheduling", text: "Once we've agreed on the scope, we schedule the work at a convenient time for you." },
  { title: "Maintenance & completion", text: "Our team works efficiently to complete the job, keeping you informed along the way." },
  { title: "Final walkthrough", text: "We ensure everything meets your standards before we consider the job complete." },
];

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Painting & Drywall", path: "/services/painting" },
  { label: "Electrical Services", path: "/services/electrical" },
  { label: "Carpentry Services", path: "/services/carpentry" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function HomeMaintenancePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Home Maintenance</h1>
          <p className="text-lg max-w-3xl">
            Keep your home in top condition with our regular maintenance services. From gutter cleaning and window repairs to pressure washing, weather stripping, and seasonal packages—we help you maintain comfort, safety, and value.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Home maintenance in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers home maintenance services for residential and commercial properties in London and nearby areas. Regular upkeep—like gutter cleaning, window repairs, and weather stripping—helps protect your investment and avoid bigger repairs later.
              </p>
              <p className="text-gray-700">
                We provide one-off jobs and seasonal maintenance packages so you can keep your home safe, efficient, and looking its best without the stress of coordinating multiple contractors.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Our home maintenance services cover the essentials: gutters, windows, exterior cleaning, weatherproofing, locks, and safety devices.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {maintenanceServices.map((item, i) => (
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Gutter cleaning, windows, pressure washing & more</h2>
              <p className="text-gray-700 mb-4">
                <strong>Gutter cleaning:</strong> We clear leaves, debris, and blockages from gutters and downspouts so water flows properly and your roof and foundation stay protected. We can also inspect and repair eavestroughs as needed.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Window repairs:</strong> We fix stuck or damaged windows, replace broken seals, repair screens, and adjust hardware so your windows open and close smoothly and keep the weather out.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Pressure washing:</strong> We clean driveways, walkways, decks, siding, and other exterior surfaces to remove dirt, mould, and stains and restore a fresh look.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Weather stripping & lock replacement:</strong> We install or replace weather stripping around doors and windows to reduce drafts and improve energy efficiency. We also replace or rekey locks and fix door hardware for security and ease of use.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Smoke and carbon monoxide detector installation:</strong> We install, replace, and test smoke and CO detectors so your family is protected and you meet local safety requirements.
              </p>
              <p className="text-gray-700">
                <strong>Seasonal maintenance packages:</strong> We offer bundled services for spring and fall—such as gutter cleaning, window checks, weather stripping, and exterior cleanup—so you can schedule once and have multiple tasks done in one visit.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our home maintenance services</h2>
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Our process</h2>
              <p className="text-gray-700 mb-6">
                We keep things simple so you know what to expect from start to finish.
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
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Our service area</h2>
              <p className="text-gray-700">
                We serve London, St. Thomas, Tillsonburg, Strathroy, Woodstock, Stratford, Dorchester, and surrounding areas. Contact us to confirm we cover your location and to get a quote or schedule a seasonal package.
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
              <h2 className="text-2xl font-bold mb-4">Keep your home in top condition — get a free quote</h2>
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
                src="/homeMaintenanceServices.png"
                alt="Home maintenance in London, ON - gutter cleaning, windows, pressure washing, seasonal packages"
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

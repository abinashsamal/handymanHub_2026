import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Plumbing Repairs & Services | London, ON",
  description:
    "Professional plumbing repair services in London and area: leaky faucets, clogged drains, toilet repair, sink and shower installation. Fast, reliable handyman plumbing. Free quotes.",
  openGraph: { title: "Plumbing Services | London Handyman Hub", url: "/services/plumbing" },
};

const plumbingRepairs = [
  "Leaky faucet repair",
  "Clogged drains and tubs",
  "Sink repair and installation",
  "Water leaks",
  "Toilet repair and installation",
  "Shower valves",
  "Vanities",
  "Obstructed toilets",
  "Leaking toilet bases",
  "Unclogging toilets",
  "Laundry hoses",
  "Bathtub repair",
  "Pipe installation and repair",
  "Garbage disposal installation",
  "and more",
];

const signsNeedRepair = [
  "Persistent low water pressure",
  "Slow-draining sinks or tubs",
  "Unpleasant odors",
  "Constant dripping faucets",
  "Water leaks",
  "Water discoloration",
  "High water bills",
  "No hot water",
];

const whenToHire = [
  "You're not familiar with DIY plumbing – we ensure the job is done right and prevent future issues.",
  "Complex repairs or you're unsure of the cause – our team has the expertise and tools to diagnose and fix it.",
  "Emergencies – sudden leaks or overflows need immediate attention; we respond promptly when possible.",
  "Compliance – we work to local standards so repairs and installations are up to code.",
  "Long-term solutions – we fix the root cause so you don't face recurring problems.",
];

const whyChooseUs = [
  "Quality plumbing repair and installation at fair, transparent pricing",
  "Free quotes so you know the cost before we start",
  "Skilled, experienced handyman and plumbing work",
  "Flexible scheduling and prompt service",
  "Serving London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas",
];

const relatedServices = [
  { label: "Bathroom Renovations", path: "/services" },
  { label: "Electrical Services", path: "/services" },
  { label: "Home Maintenance", path: "/services" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function PlumbingServices() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Plumbing Repairs & Services</h1>
          <p className="text-lg max-w-3xl">
            Don't let plumbing problems disrupt your routine. We handle leaky faucets, clogged drains, toilet and sink repairs, and more across London and surrounding areas—prompt, reliable, and affordable.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Plumbing repairs in London, ON and nearby areas</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                From leaky faucets to clogged toilets, London Handyman Hub offers a range of plumbing repair services in London, ON, and nearby areas. We respond quickly so your water and drains are back to normal as soon as possible.
              </p>
              <p className="text-gray-700">
                Skip the guesswork of DIY fixes. Our team has the right tools and experience for lasting solutions. Whether it's a small leak or a bigger job, we'll get it fixed reliably.
              </p>
            </section>

            {/* How we can help */}
            <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">How we can help you with your plumbing repairs</h2>
          <p className="text-gray-700 mb-6">
            Whatever it is, we will fix it for you. With our reliable service, you can stop stressing about plumbing problems. London Handyman Hub is your go-to for fast, effective plumbing repairs in London.
          </p>
          <h3 className="text-xl font-semibold text-[#1a237e] mb-3">Plumbing repairs we offer:</h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {plumbingRepairs.map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#e53935] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
            </section>

            {/* Signs you need a plumbing repair */}
            <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Signs you need a plumbing repair</h2>
          <p className="text-gray-700 mb-4">
            Catching problems early helps avoid bigger damage and cost. Here are common signs it's time to call for a plumbing repair in London, ON:
          </p>
          <ul className="space-y-2">
            {signsNeedRepair.map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <span className="text-[#e53935] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
            </section>

            {/* When to hire a plumber */}
            <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">When to hire a plumber in London, Ontario</h2>
          <p className="text-gray-700 mb-4">
            Some issues need a professional. Here’s when it makes sense to call us:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {whenToHire.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
            </section>

            {/* Why choose our plumbing services */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Why choose our London plumbing repair services</h2>
          <p className="text-gray-700 mb-6">
            London Handyman Hub provides quality plumbing and handyman services across London and the surrounding area. Here’s what you can expect:
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
            We also handle electrical work, painting, carpentry, bathroom renovations, and general home maintenance.
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
              <h2 className="text-2xl font-bold mb-4">Need a plumbing repair? Get a free quote</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Call us or fill out our quote form. We'll get back to you quickly and get your plumbing back on track.
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
                src="/plumbingServices.png"
                alt="Plumbing repair and installation services in London, ON"
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

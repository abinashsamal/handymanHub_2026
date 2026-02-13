import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Interior & Exterior Painting Services | London, ON",
  description:
    "Professional painting and drywall services in London and area. Interior and exterior painting, drywall repair, texture, wallpaper removal. Quality paints, free quotes.",
  openGraph: { title: "Painting & Drywall Services | London Handyman Hub", url: "/services/painting" },
};

const benefits = [
  "Enhanced curb appeal – exterior painting makes your property more attractive and inviting.",
  "Protection against the elements – exterior paint helps protect against rain, snow, and UV rays.",
  "Improved indoor air quality – we can use low-VOC or no-VOC paints for a healthier space.",
  "Increased property value – a fresh coat of paint can boost your property's value.",
];

const paintingServices = [
  "Interior painting",
  "Exterior painting",
  "Drywall repair and installation",
  "Texture application",
  "Wallpaper removal",
  "Popcorn ceiling removal",
  "Color consultation",
  "Residential and commercial",
];

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Electrical Services", path: "/services" },
  { label: "Carpentry", path: "/services" },
  { label: "Contact / Quote", path: "/contact" },
];

export default function PaintingServices() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Interior and Exterior Painting</h1>
          <p className="text-lg max-w-3xl">
            A fresh coat of paint is one of the best ways to improve the look and value of your property. Whether you want to refresh your home or update a commercial space, our professional painting services in London, Ontario deliver great results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: all content */}
          <div>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Painting services in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                At London Handyman Hub, we offer painting and drywall services for both residential and commercial properties in London, Ontario. We use quality paints and materials so your property looks its best and stays protected for years to come.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">The benefits of painting services</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {benefits.map((item, i) => (
                  <li key={i} className="pl-2">{item}</li>
                ))}
              </ol>
            </section>

            <section className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">What we offer</h2>
              <p className="text-gray-700 mb-6">
                Whether you need interior or exterior painting in London, we can help. From color advice to paint selection, we work with you to get the look you want. We also handle drywall repair, texture, and wallpaper removal.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {paintingServices.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#e53935] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                We serve London, Strathroy, St. Thomas, Woodstock, Stratford, Dorchester, Tillsonburg, and surrounding areas. Wherever you are in the region, we're committed to delivering top-quality painting and drywall work.
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
              <h2 className="text-2xl font-bold mb-4">Ready to refresh your space? Get a free quote</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Call us or fill out our quote form. We'll get back to you and help you plan your painting or drywall project.
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
                src="/paintingServices.png"
                alt="Professional painting services in London, ON"
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

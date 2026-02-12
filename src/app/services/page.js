import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Our Services | Plumbing, Electrical, Carpentry & More",
  description:
    "Handyman services in London: plumbing, electrical, furniture assembly, painting & drywall, carpentry, home maintenance, lighting, bathroom renovations, flooring. Transparent pricing.",
  openGraph: { title: "Handyman Services in London, ON", url: "/services" },
};

const ServiceCard = ({ icon, title, description, services }) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
        <span className="text-[#e53935]">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-[#1a237e]">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    
    <div className="border-t pt-6">
      <h4 className="font-semibold text-gray-700 mb-4">Services Include:</h4>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-[#e53935] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
      <div className="w-10 h-10 bg-[#e53935] rounded-full flex items-center justify-center text-white text-xl font-bold">
        {number}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-[#1a237e] mt-4 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Plumbing Services",
      description: "We handle all types of plumbing repairs and installations to keep your water flowing smoothly.",
      services: [
        "Leaky faucet repair",
        "Pipe installation and repair",
        "Drain cleaning",
        "Toilet installation and repair",
        "Sink installation",
        "Shower and bathtub installation",
        "Garbage disposal installation"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Electrical Services",
      description: "Our certified electricians can handle a wide range of electrical repairs and installations.",
      services: [
        "Light fixture installation",
        "Outlet and switch replacement",
        "Ceiling fan installation",
        "Circuit breaker replacement",
        "Wiring repair",
        "Electrical panel upgrades",
        "Smart home device installation"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814l-4.419-2.944-4.419 2.944A1 1 0 014 16V4zm7 0a1 1 0 00-2 0v8a1 1 0 002 0V4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Furniture Assembly",
      description: "Skip the hassle of putting together your furniture – we'll assemble it quickly and correctly.",
      services: [
        "IKEA furniture assembly",
        "Bed frame assembly",
        "Wardrobe assembly",
        "Desk and office furniture",
        "Shelving units",
        "Tables and chairs",
        "Entertainment centers"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V3zm-2 13H4V4h12v12z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Painting & Drywall",
      description: "Transform your space with our professional painting and drywall services.",
      services: [
        "Interior painting",
        "Exterior painting",
        "Drywall repair",
        "Drywall installation",
        "Texture application",
        "Wallpaper removal",
        "Popcorn ceiling removal"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Carpentry Services",
      description: "From basic repairs to custom woodworking, our carpentry services cover all your needs.",
      services: [
        "Cabinet installation and repair",
        "Custom shelving",
        "Door installation and repair",
        "Trim and molding installation",
        "Deck and fence repairs",
        "Staircase repairs",
        "Wood floor repairs"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 11a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1-3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Home Maintenance",
      description: "Keep your home in top condition with our regular maintenance services.",
      services: [
        "Gutter cleaning",
        "Window repairs",
        "Pressure washing",
        "Weather stripping",
        "Lock replacement",
        "Smoke detector installation",
        "Seasonal maintenance packages"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" clipRule="evenodd"/>
          <path d="M10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
        </svg>
      ),
      title: "Lighting Installation",
      description: "Brighten your space with our professional lighting installation services.",
      services: [
        "Chandelier installation",
        "Recessed lighting",
        "Under-cabinet lighting",
        "Track lighting",
        "Outdoor lighting",
        "Motion sensor lights",
        "Smart lighting systems"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Bathroom Renovations",
      description: "Upgrade your bathroom with our range of installation and renovation services.",
      services: [
        "Toilet replacement",
        "Shower installation",
        "Vanity installation",
        "Tile repair and installation",
        "Fixture upgrades",
        "Caulking and sealing",
        "Bathroom hardware installation"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4zm3 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Flooring Services",
      description: "We install and repair various types of flooring to enhance your home's look and feel.",
      services: [
        "Laminate flooring installation",
        "Vinyl flooring installation",
        "Hardwood floor repair",
        "Tile repair",
        "Baseboard installation",
        "Floor leveling",
        "Subfloor repair"
      ]
    }
  ];

  const serviceAreas = [
    "London",
    "St. Thomas",
    "Tillsonburg",
    "Strathroy",
    "Komoka",
    "Woodstock",
    "Dorchester",
    "Ingersoll",
    "Lucan",
    "Mount Brydges",
    "Parkhill",
    "Port Stanley",
    "St. Marys",
    "Exeter",
    "Ilderton",
    "Aylmer",
    "Stratford",
    "Tavistock",
    "And more..."
  ];

  const faqs = [
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free quotes for all services. For smaller jobs, we can often provide a quote over the phone. For larger projects, we may need to schedule a visit to assess the work required."
    },
    {
      question: "Are you insured?",
      answer: "Yes, we are fully insured with liability insurance and worker's compensation to protect both our clients and our workers."
    },
    {
      question: "How quickly can you start?",
      answer: "For most jobs, we can schedule service within 1-3 business days. For emergencies, we offer same-day service when possible."
    },
    {
      question: "Do I need to provide materials?",
      answer: "We can supply all necessary materials for your project, which will be itemized on your invoice. If you prefer to purchase your own materials, we're happy to work with what you provide."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#1a237e] mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Simple steps to get your projects done right</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <StepCard 
            number="1"
            title="Contact Us"
            description="Call us or fill out our online form to describe your project and request a quote."
          />
          <StepCard 
            number="2"
            title="Get a Quote"
            description="We'll provide you with a detailed quote and schedule a convenient appointment time."
          />
          <StepCard 
            number="3"
            title="Job Complete"
            description="Our skilled professionals will arrive on time, complete the work, and clean up when done."
          />
        </div>
      </div>

      {/* Service Area Section */}
      <div className="bg-gray-50 rounded-lg p-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Our Service Area</h2>
          <div className="w-20 h-1 bg-[#e53935] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Serving London and surrounding areas</p>
        </div>
        
        <p className="text-gray-700 mb-8 text-center">
          We provide our handyman services throughout Greater London, including the following areas:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <svg 
                className="w-5 h-5 text-[#e53935] mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {area}
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-center">
          Not sure if we service your area? <a href="/contact" className="text-[#e53935] hover:text-red-700">Contact us</a> to find out!
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Our Pricing</h2>
          <div className="w-20 h-1 bg-[#e53935] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Transparent, fair pricing for all our services</p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#1a237e] mb-3">Hourly Rate</h3>
            <p className="text-gray-700">
              Our standard hourly rate is $60/hour for most handyman services. There is a one-hour minimum charge, and after the first hour, we bill in 30-minute increments.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1a237e] mb-3">Half-Day Rate</h3>
            <p className="text-gray-700">
              For projects requiring 4 hours, we offer a half-day rate of $220, saving you $20 off the hourly rate.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1a237e] mb-3">Full-Day Rate</h3>
            <p className="text-gray-700">
              For projects requiring 8 hours, our full-day rate is $420, saving you $60 off the hourly rate.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1a237e] mb-3">Project-Based Pricing</h3>
            <p className="text-gray-700">
              For larger projects, we offer fixed-price quotes after assessing the scope of work. This gives you price certainty and peace of mind.
            </p>
          </div>

          <div className="border-t pt-6 mt-8">
            <p className="text-gray-600 italic">
              Please note: Some specialized services may have different rates. Materials are charged separately unless otherwise specified in your quote.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/quote" 
            className="bg-[#e53935] text-white px-8 py-3 rounded-md hover:bg-red-700 inline-block text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#e53935] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Common questions about our services</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#1a237e] mb-4">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/faq" 
            className="text-[#1a237e] font-semibold hover:text-[#e53935]"
          >
            View All FAQs
          </Link>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="bg-[#e53935] text-white py-16 px-4 mt-24 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today to discuss your project, schedule service, or get a free estimate. We're here to help with all your handyman needs!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            href="/contact" 
            className="bg-white text-[#e53935] px-8 py-3 rounded-md hover:bg-gray-100 inline-block text-lg font-semibold"
          >
            Contact Us
          </Link>
          <Link 
            href="/quote" 
            className="bg-[#1a237e] text-white px-8 py-3 rounded-md hover:bg-blue-900 inline-block text-lg font-semibold"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 
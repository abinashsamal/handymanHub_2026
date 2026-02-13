import React from 'react';
import Link from 'next/link';

const MainContent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1D3557] text-white">   
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Hero content */}
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Professional Handyman Services in London
            </h1>
            <p className="text-xl mb-8">
              Quality repairs, installations, and maintenance for your home or business. 
              Fast, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/quote" 
                className="bg-[#e53935] text-white px-8 py-3 rounded-md hover:bg-red-700 inline-block text-lg"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="/services" 
                className="bg-white text-[#1D3557] px-8 py-3 rounded-md hover:bg-gray-100 inline-block text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

     {/* Top 3 Handyman Section */}
     <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <a
              href="https://threebestrated.ca/handyman-in-london-on"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:ring-offset-2 rounded-lg"
              aria-label="View our listing on Three Best Rated"
            >
              <img
                src="/three-best-rated-badge.png"
                alt="Three Best Rated 2023 Award - Best Handyman in London - Top 3 Choices"
                className="w-40 h-auto md:w-48"
              />
            </a>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-3">
                We are among the top 3 Handyman Service providers in London
              </h2>
              <p className="text-gray-600 mb-4">
                Recognized by Three Best Rated® for our quality, reputation, and customer satisfaction. See our profile and reviews.
              </p>
              <a
                href="https://threebestrated.ca/handyman-in-london-on"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#e53935] font-semibold hover:text-red-700"
              >
                View on Three Best Rated
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fast Response Time Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1D3557] mb-3">Fast Response Time</h3>
            <p className="text-gray-600">
              Most jobs can be scheduled within 24-48 hours of your call.
            </p>
          </div>

          {/* Quality Guaranteed Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1D3557] mb-3">Quality Guaranteed</h3>
            <p className="text-gray-600">
              All our work comes with a satisfaction guarantee and warranty.
            </p>
          </div>

          {/* Fair Pricing Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1D3557] mb-3">Fair Pricing</h3>
            <p className="text-gray-600">
              Transparent quotes with no hidden fees or surprise charges.
            </p>
          </div>
        </div>
      </div>

 

      {/* Our Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1D3557] mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-[#e53935] mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Professional handyman services for all your home repair and maintenance needs</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Plumbing Repairs */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-[#e53935] mb-4">
            <svg className="w-12 h-12 mx-auto" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1D3557] mb-3">Plumbing Repairs</h3>
          <p className="text-gray-600 mb-4">From leaky faucets to pipe installations, we handle all your plumbing needs efficiently.</p>
          <Link href="/services" className="text-[#e53935] hover:text-red-700 font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Electrical Fixes */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-[#e53935] mb-4">
            <svg className="w-12 h-12 mx-auto" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1D3557] mb-3">Electrical Fixes</h3>
          <p className="text-gray-600 mb-4">Safe and reliable electrical repairs, installations and troubleshooting services.</p>
          <Link href="/services" className="text-[#e53935] hover:text-red-700 font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Furniture Assembly */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-[#e53935] mb-4">
            <svg className="w-12 h-12 mx-auto" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1D3557] mb-3">Furniture Assembly</h3>
          <p className="text-gray-600 mb-4">Quick and professional assembly of all types of furniture for your home or office.</p>
          <Link href="/services" className="text-[#e53935] hover:text-red-700 font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Painting & Drywall */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-[#e53935] mb-4">
            <svg className="w-12 h-12 mx-auto" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1D3557] mb-3">Painting & Drywall</h3>
          <p className="text-gray-600 mb-4">Transform your space with our expert painting and drywall repair services.</p>
          <Link href="/services" className="text-[#e53935] hover:text-red-700 font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Carpentry Work */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-[#e53935] mb-4">
            <svg className="w-12 h-12 mx-auto" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1D3557] mb-3">Carpentry Work</h3>
          <p className="text-gray-600 mb-4">Custom carpentry solutions from shelving to custom built-ins and furniture repairs.</p>
          <Link href="/services" className="text-[#e53935] hover:text-red-700 font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Home Maintenance */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-[#e53935] mb-4">
            <svg className="w-12 h-12 mx-auto" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1D3557] mb-3">Home Maintenance</h3>
          <p className="text-gray-600 mb-4">Regular maintenance services to keep your home in perfect working condition.</p>
          <Link href="/services" className="text-[#e53935] hover:text-red-700 font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="bg-[#1D3557] text-white px-8 py-3 rounded-md hover:bg-blue-900 inline-block text-lg font-semibold"
        >
          View All Services
        </Link>
      </div>
      <div className="text-center mt-12"></div>
    </>
  );
};

export default MainContent; 
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Get in touch with our team to discuss your project or request a quote. We're here to help with all your handyman needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
            <p className="text-gray-600 mb-8">We're ready to help with your handyman needs</p>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1D3557] mb-1">Phone</h3>
                <p className="text-gray-600">+1 416 561 4736</p>
                <p className="text-gray-500 text-sm">Mon-Sat: 8am - 6pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start mb-6">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1D3557] mb-1">Email</h3>
                <p className="text-gray-600">Londonhandymanhub@gmail.com</p>
                <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start mb-6">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1D3557] mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-600">Saturday: 8am - 4pm</p>
                <p className="text-gray-600">Sunday: Closed (Emergency service available)</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e53935] text-white py-3 rounded-md hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About Us | Quality Handyman Services in London",
  description:
    "Learn about London Handyman Hub. Quality work, fair prices, and reliable service for London and surrounding areas. Experienced, insured, and committed to your satisfaction.",
  openGraph: { title: "About London Handyman Hub", url: "/about" },
};

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Quality",
      description: "We never compromise on the quality of our work. Every job, big or small, receives our full attention and expertise."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Integrity",
      description: "Honesty and transparency in all our dealings. We provide upfront pricing and never add hidden fees."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
      title: "Reliability",
      description: "When we make a commitment, we keep it. You can count on us to show up on time and complete the job as promised."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#e53935]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
        </svg>
      ),
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen to your needs and work to exceed your expectations."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn about our journey, our commitment to quality, and the team behind London's most trusted handyman service.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1D3557] mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
            <h3 className="text-gray-600 mb-6">How London Handyman Hub came to be</h3>

            <div className="space-y-4">
              <p className="text-gray-700">
                Founded in 2017, London Handyman Hub began with a simple mission: to provide reliable, high-quality handyman services to homeowners and businesses throughout London.
              </p>

             

              <p className="text-gray-700">
                What started as a one-man operation has grown into a team of dedicated professionals, each bringing specialized skills to cover all aspects of home repair and maintenance.
              </p>

              <p className="text-gray-700">
                Today, we pride ourselves on our reputation for excellence, attention to detail, and our commitment to customer satisfaction. We've helped thousands of London residents solve their home repair challenges and beautify their living spaces.
              </p>


              <p className="text-gray-700">
              London-Handyman-Hub Services is your trusted solution for reliable, high-quality home repair and maintenance. Serving both homeowners and businesses, our experienced team delivers expert craftsmanship across a wide range of services—including plumbing, electrical work, painting, carpentry, and general repairs. We are located in London Ontario.
              </p>

              <p className="text-gray-700">
              We pride ourselves on attention to detail, prompt response times, and transparent pricing, ensuring every project is completed to the highest standards. Whether it's a small fix or a larger renovation, you can count on us for dependable, professional service that puts your needs first.
              </p>


            </div>
          </div>

          <div className="relative">
            <Image
              src="/gallery/AboutUs.png"
              alt="Team workspace with laptops and office supplies"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#e53935] text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">2017</div>
              <div className="text-sm">Established</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1D3557] mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-[#e53935] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">The principles that guide our work every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1D3557] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Experience CTA Section */}
      <div className="bg-[#e53935] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule your service or request a quote.
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
              className="bg-[#1D3557] text-white px-8 py-3 rounded-md hover:bg-blue-900 inline-block text-lg font-semibold"
            >
              Get a Quote
            </Link>
            <a
              href="https://calendar.app.google/kiRFHo8EPAMyrvxk8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1D3557] px-8 py-3 rounded-md hover:bg-gray-100 inline-block text-lg font-semibold border border-[#1D3557]"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
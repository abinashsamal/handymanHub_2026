'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-[#1D3557]">{question}</span>
        <svg
          className={`w-6 h-6 text-[#e53935] transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  // Flatten all FAQs for schema markup
  const allFaqs = [
    {
      title: "Services & Pricing",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive range of handyman services including plumbing repairs, electrical fixes, furniture assembly, painting and drywall, carpentry work, home maintenance, lighting installation, bathroom renovations, flooring services, and much more. If you have a specific project in mind that isn't listed, please contact us to discuss your needs."
        },
        {
          question: "How do you charge for your services?",
          answer: "We offer several pricing options: hourly rate ($60/hour with a one-hour minimum), half-day rate ($220 for 4 hours), full-day rate ($420 for 8 hours), and project-based pricing for larger jobs. Materials are charged separately unless otherwise specified in your quote."
        },
        {
          question: "Do you provide free quotes?",
          answer: "Yes, we provide free quotes for all services. For smaller jobs, we can often provide a quote over the phone. For larger projects, we may need to schedule a site visit to assess the work required and provide an accurate estimate."
        },
        {
          question: "Is there a minimum charge?",
          answer: "Yes, we have a one-hour minimum charge for service calls. After the first hour, we bill in 30-minute increments."
        },
        {
          question: "Do I need to provide materials?",
          answer: "We can supply all necessary materials for your project, which will be itemized on your invoice. If you prefer to purchase your own materials, we're happy to work with what you provide."
        }
      ]
    },
    {
      title: "Scheduling & Availability",
      questions: [
        {
          question: "What areas do you serve?",
          answer: "We serve all of Greater London, including Westminster, Kensington & Chelsea, Camden, Islington, Hammersmith & Fulham, Tower Hamlets, Hackney, Lambeth, Southwark, Wandsworth, Greenwich, and surrounding areas. If you're unsure whether we service your area, please contact us."
        },
        {
          question: "How quickly can you start work?",
          answer: "For most jobs, we can schedule service within 1-3 business days. For emergencies, we offer same-day service when possible, depending on our schedule and the nature of the emergency."
        },
        {
          question: "Do you work evenings and weekends?",
          answer: "Our regular hours are Monday through Saturday, 8am to 6pm. We can accommodate evening and Sunday appointments for an additional fee, subject to availability."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We ask for at least 24 hours notice for cancellations. Cancellations with less than 24 hours notice may be subject to a cancellation fee of £50 or 50% of the quoted price, whichever is less."
        },
        {
          question: "How long will my project take?",
          answer: "Project timelines vary based on the scope of work. Small jobs may take as little as an hour, while larger projects could take several days. We provide estimated timeframes when we quote your project and keep you updated on progress throughout."
        }
      ]
    },
    {
      title: "Qualifications & Insurance",
      questions: [
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed to operate in London and carry comprehensive insurance coverage, including public liability insurance and workers' compensation, to protect both our clients and our team."
        },
        {
          question: "What qualifications do your handymen have?",
          answer: "Our team consists of experienced professionals with various qualifications and certifications relevant to their specialties. Many of our handymen have backgrounds in specific trades like electrical, plumbing, or carpentry, and all have extensive practical experience."
        },
        {
          question: "Do you guarantee your work?",
          answer: "Yes, we stand behind our work with a 12-month workmanship guarantee. If any issues arise with our workmanship within this period, we'll return to fix them at no additional cost."
        },
        {
          question: "Are you COVID-safe?",
          answer: "Yes, we follow all current health and safety guidelines. Our team wears appropriate PPE, maintains social distancing when possible, and follows enhanced cleaning procedures before, during, and after jobs."
        }
      ]
    },
    {
      title: "Payment & Policies",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit/debit cards, bank transfers, and mobile payment apps like PayPal and Venmo. For larger projects, we typically require a deposit upfront with the balance due upon completion."
        },
        {
          question: "When is payment due?",
          answer: "For smaller jobs, payment is due upon completion of work. For larger projects, we typically require a 30% deposit before starting work, with the remaining balance due upon completion. For projects lasting more than a week, we may arrange a payment schedule."
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer: "Customer satisfaction is our top priority. If you're not completely satisfied with any aspect of our work, please let us know immediately and we'll make it right."
        },
        {
          question: "Do you offer any discounts?",
          answer: "We offer a 10% discount to seniors, military personnel, and first responders. We also have seasonal promotions and loyalty discounts for repeat customers. Contact us to learn about current offers."
        }
      ]
    }
  ];

  // Flatten FAQs for schema
  const flattenedFaqs = allFaqs.flatMap(section => section.questions);

  // FAQ Schema for SEO
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": flattenedFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove existing FAQ schema if present
    const existingScript = document.querySelector('script[data-faq-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add FAQ schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector('script[data-faq-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg">
            Find answers to commonly asked questions about our services, pricing, policies, and more.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D3557] mb-4">Common Questions</h2>
          <div className="w-20 h-1 bg-[#e53935] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Everything you need to know about our handyman services</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {allFaqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-[#1D3557] mb-6">{section.title}</h3>
              <div className="space-y-2">
                {section.questions.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D3557] mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            If you couldn't find the information you were looking for, or if you have a specific question about your project, we're here to help.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact" 
              className="bg-[#e53935] text-white px-8 py-3 rounded-md hover:bg-red-700 inline-block"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+14165614736" 
              className="bg-[#1D3557] text-white px-8 py-3 rounded-md hover:bg-blue-900 inline-block"
            >
              +1 416 561 4736
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
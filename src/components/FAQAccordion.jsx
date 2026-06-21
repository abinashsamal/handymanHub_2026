'use client';
import { useState } from 'react';
import Link from 'next/link';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-semibold text-[#1D3557]">{question}</span>
      <svg
        className={`w-6 h-6 text-[#e53935] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

export default function FAQAccordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        {sections.map((section, sectionIndex) => (
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
    </>
  );
}

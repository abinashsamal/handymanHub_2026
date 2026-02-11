'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SERVICE_OPTIONS = [
  'Plumbing',
  'Electrical',
  'Furniture Assembly',
  'Painting & Drywall',
  'Carpentry',
  'Home Maintenance',
  'Lighting Installation',
  'Bathroom Renovations',
  'Flooring',
  'Other',
];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    address: '',
    preferredDate: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or call us.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <>
        <div className="relative bg-[#1D3557] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Thank You</h1>
            <p className="text-lg">
              We've received your quote request and will get back to you within 24 hours.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1D3557] mb-2">Request Received</h2>
            <p className="text-gray-600 mb-6">
              We'll review your details and contact you with a free quote. Need to reach us sooner? Call us at <a href="tel:4165614736" className="text-[#e53935] font-semibold">416 561 4736</a>.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#e53935] text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-lg">
            Tell us about your project and we'll get back to you with a detailed quote. No obligation—just honest pricing and great service.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">What to Expect</h2>
            <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#e53935] mr-3 mt-1">✓</span>
                <span><strong className="text-[#1D3557]">Free quote</strong> — We'll review your request and provide a clear estimate at no cost.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e53935] mr-3 mt-1">✓</span>
                <span><strong className="text-[#1D3557]">Fast response</strong> — Most quote requests get a reply within 24 hours.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e53935] mr-3 mt-1">✓</span>
                <span><strong className="text-[#1D3557]">Transparent pricing</strong> — Hourly and project-based options with no hidden fees.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e53935] mr-3 mt-1">✓</span>
                <span><strong className="text-[#1D3557]">Serving London & area</strong> — London, St. Thomas, Tillsonburg, Strathroy, and surrounding communities.</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-sm">
                Prefer to talk? Call <a href="tel:4165614736" className="text-[#e53935] font-semibold">416 561 4736</a> or email <a href="mailto:LondonHandymanHub@gmail.com" className="text-[#e53935] font-semibold">LondonHandymanHub@gmail.com</a>.
              </p>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Request Your Quote</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="fullName">
                  Full Name <span className="text-[#e53935]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                  Email <span className="text-[#e53935]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                  Phone <span className="text-[#e53935]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent"
                  placeholder="416 555 1234"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="serviceType">
                  Service Needed <span className="text-[#e53935]">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent bg-white"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="address">
                  Address / Location
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent"
                  placeholder="Street, city or area we'll be working in"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="preferredDate">
                  Preferred Date (optional)
                </label>
                <input
                  type="text"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent"
                  placeholder="e.g. Next week, flexible, ASAP"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="details">
                  Project Details <span className="text-[#e53935]">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e53935] focus:border-transparent"
                  placeholder="Describe the work you need—room, size of job, any specific requirements..."
                />
              </div>

              {error && (
                <p className="mb-4 text-red-600 text-sm bg-red-50 border border-red-200 rounded-md px-4 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#e53935] text-white py-3 rounded-md hover:bg-red-700 transition duration-300 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Request Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

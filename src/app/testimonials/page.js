const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Testimonials | Client Reviews",
  description: "See what our clients say about London Handyman Hub. Reviews and feedback from customers in London and area.",
  openGraph: { title: "Testimonials | London Handyman Hub", url: "/testimonials" },
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
};

export default function Testimonials() {
  return (
    <>
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-lg">See what our clients say about us.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Read our reviews on Google or share your experience to help others find trusted handyman services in London.
          </p>
          <a
            href="https://maps.app.goo.gl/9x3AzJ99mNzrVwac6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e53935] text-white px-8 py-4 rounded-md hover:bg-red-700 font-semibold text-lg transition"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            View & leave a review on Google
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Opens our Google Business profile in a new tab.
          </p>
        </div>
      </div>
    </>
  );
}

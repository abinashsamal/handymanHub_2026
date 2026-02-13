const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Get a Free Quote | Request a Quote",
  description:
    "Request a free handyman quote from London Handyman Hub. Tell us about your project and we'll get back with a detailed estimate. No obligation.",
  openGraph: { title: "Get a Free Quote | London Handyman Hub", url: "/quote" },
  alternates: {
    canonical: `${siteUrl}/quote`,
  },
};

export default function QuoteLayout({ children }) {
  return children;
}

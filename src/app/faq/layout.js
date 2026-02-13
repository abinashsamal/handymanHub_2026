const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "FAQ | Frequently Asked Questions",
  description:
    "Frequently asked questions about London Handyman Hub: services, pricing, scheduling, areas served, and how to get a quote.",
  openGraph: { title: "FAQ | London Handyman Hub", url: "/faq" },
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
};

export default function FAQLayout({ children }) {
  return children;
}

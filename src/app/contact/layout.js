const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Contact London Handyman Hub by phone, email, or form. We're here to help with your handyman needs. Mon–Sat 8am–6pm.",
  openGraph: { title: "Contact London Handyman Hub", url: "/contact" },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return children;
}

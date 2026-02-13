import MainContent from '../components/MainContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Professional Handyman Services in London, ON | Free Quotes",
  description:
    "London Handyman Hub offers quality repairs, installations, and maintenance in London and area. Plumbing, electrical, carpentry, painting, furniture assembly. Fast, reliable, affordable.",
  openGraph: {
    title: "Professional Handyman Services in London, ON",
    description: "Quality repairs, installations, and maintenance. Free quotes. Serving London, St. Thomas, Tillsonburg & more.",
    url: "/",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <MainContent />;
}

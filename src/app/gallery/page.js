import Image from 'next/image';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://londonhandymanhub.com";

export const metadata = {
  title: "Gallery | Our Handyman Work & Projects",
  description: "View our portfolio of handyman projects and past work in London and area.",
  openGraph: { title: "Gallery | London Handyman Hub", url: "/gallery" },
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
};

// Add your image filenames here (they should be in public/gallery/)
// Supported formats: .jpg, .jpeg, .png, .webp
const galleryImages = [
  // Example - replace with your actual image filenames:
 '20251007_155859.jpg',
'20251007_155906.jpg',
'20251007_155949.jpg',
'20251007_155958.jpg',
'20251007_160022.jpg',
'20260117_141327.jpg',
'20260117_141543.jpg',
'20260119_192429.jpg',
'20260119_192438.jpg',
'345242738_5743733849061217_6808699176805646996_n.jpg',
'416831500_7189925784418795_2598444585995883697_n.jpg',
'427725877_7142699769101149_8139974441903283964_n.jpg',
'basementCabinet.jpg',
'BusinessCard_1.jpg',
'cabinetLayout.jpg',
'IMG-20240202-WA0002.jpg',
'IMG-20240202-WA0004.jpg',
'IMG-20240202-WA0005.jpg',
'IMG-20240202-WA0006.jpg',
'IMG-20240202-WA0007.jpg',
'IMG-20240202-WA0008.jpg',
'IMG-20240202-WA0009.jpg',
'IMG-20240202-WA0010.jpg',
'IMG-20240202-WA0011.jpg',
'IMG-20240202-WA0012.jpg',
'IMG-20240202-WA0013.jpg',
'IMG-20240202-WA0014.jpg',
'IMG-20240202-WA0015.jpg',
'IMG-20240202-WA0016.jpg',
'litchenLayoutn.jpg',
'WhatsApp Image 2025-12-29 at 9.09.16 PM.jpeg',
'WhatsApp Image 2026-01-21 at 10.36.38 PM.jpeg',
'WhatsApp Image 2026-01-21 at 10.36.39 PM (1).jpeg',
'WhatsApp Image 2026-01-21 at 10.36.39 PM (2).jpeg',
'WhatsApp Image 2026-01-21 at 10.36.39 PM.jpeg',
'WhatsApp Image 2026-01-21 at 10.38.39 PM.jpeg',
'WhatsApp Image 2026-01-21 at 10.41.20 PM.jpeg',
'WhatsApp Image 2026-01-21 at 10.41.47 PM.jpeg',
'WhatsApp Image 2026-01-21 at 10.41.59 PM.jpeg',
'Ceiling+fan+install.webp',
'Drywall+repair.webp',
'Drywall+repairs.webp',
'New+Facet+Install.webp',
'painting.webp',
'Plumbing+Repair.webp',
'Switch+replacement.webp',
'Toilet+install.webp',
'Wall+mount+a+TV.webp',
'WhatsApp Image 2026-02-12 at 11.25.14 AM.jpeg',
'WhatsApp Image 2026-02-12 at 11.25.15 AM (1).jpeg',
'WhatsApp Image 2026-02-12 at 11.25.15 AM.jpeg',
'WhatsApp Image 2026-02-12 at 11.25.16 AM.jpeg',
'WhatsApp Image 2026-02-12 at 11.25.17 AM.jpeg',
'WhatsApp Image 2026-02-12 at 11.25.21 AM.jpeg',
'WhatsApp Image 2026-02-12 at 11.25.22 AM (1).jpeg',
'WhatsApp Image 2026-02-12 at 11.25.24 AM.jpeg',
'WhatsApp Image 2026-02-12 at 11.25.26 AM (2).jpeg',
'WhatsApp Image 2026-02-12 at 11.25.26 AM.jpeg'
];

export default function Gallery() {
  if (galleryImages.length === 0) {
    return (
      <>
        <div className="relative bg-[#1D3557] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-lg">View our portfolio and past work.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-[#1D3557] mb-4">Gallery Setup</h2>
            <p className="text-gray-600 mb-4">
              To display images:
            </p>
            <ol className="text-left text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="font-semibold mr-2">1.</span>
                <span>Copy your images to <code className="bg-gray-200 px-1 rounded">public/gallery/</code> folder</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">2.</span>
                <span>Update the <code className="bg-gray-200 px-1 rounded">galleryImages</code> array in this file with your image filenames</span>
              </li>
            </ol>
            <p className="text-gray-500 text-sm">
              Supported formats: JPG, PNG, WebP. Images will be automatically optimized by Next.js.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-lg">View our portfolio and past work.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imageName, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <Image
                src={`/gallery/${imageName}`}
                alt={`Handyman project ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

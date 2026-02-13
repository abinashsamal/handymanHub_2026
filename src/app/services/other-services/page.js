import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Other Services | General Repairs, Assembly, Mounting, Plumbing, Electrical & More | London, ON",
  description:
    "Handyman other services in London and area: general repairs, flat-pack assembly, TV and picture hanging, doors and trim, drywall, painting, flooring, plumbing, electrical, appliances, exterior, and more. Free quotes.",
  openGraph: { title: "Other Services | London Handyman Hub", url: "/services/other-services" },
};

const relatedServices = [
  { label: "Plumbing Services", path: "/services/plumbing" },
  { label: "Electrical Services", path: "/services/electrical" },
  { label: "Carpentry Services", path: "/services/carpentry" },
  { label: "Flooring Services", path: "/services/flooring" },
  { label: "Home Maintenance", path: "/services/home-maintenance" },
  { label: "Contact / Quote", path: "/contact" },
];

function Section({ title, items }) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-bold text-[#1a237e] mb-3">{title}</h3>
      <ul className="grid sm:grid-cols-2 gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-gray-700 text-sm">
            <svg className="w-4 h-4 text-[#e53935] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function OtherServicesPage() {
  return (
    <>
      <div className="relative bg-[#1D3557] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Other Services</h1>
          <p className="text-lg max-w-3xl">
            General home repairs, assembly, mounting, doors and trim, drywall, painting, flooring, plumbing, electrical, appliances, exterior work, and more. If it's a handyman job, we can likely help—get in touch for a quote.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Other services in London, ON</h2>
              <div className="w-20 h-1 bg-[#e53935] mb-6"></div>
              <p className="text-gray-700 mb-4">
                London Handyman Hub offers a wide range of handyman and repair services beyond our main service pages. From small patching and caulking to flat-pack assembly, TV mounting, door and trim work, drywall, painting, flooring, plumbing, electrical, and exterior tasks—we handle odd jobs and punch lists so you don't have to coordinate multiple trades.
              </p>
              <p className="text-gray-700">
                Don't see your task listed? Contact us and we'll let you know if we can help. We serve London, St. Thomas, Tillsonburg, Strathroy, Woodstock, and surrounding areas.
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-6">What we offer</h2>
              <p className="text-gray-700 mb-6 text-sm">
                Below is a list of many of the other services we provide. This is not exhaustive—when in doubt, ask.
              </p>

              <Section title="General home repairs" items={[
                "Minor patching and touch-ups",
                "Caulking and re-caulking (bath, kitchen, windows)",
                "Weatherstripping and draft sealing",
                "Small masonry repairs (minor cracks, loose bricks/steps)",
                "Grout repair / re-grouting",
                "Silicone sealing (wet areas)",
                "Childproofing (corner guards, cabinet locks, gates)",
              ]} />

              <Section title="Flat-pack & furniture assembly" items={[
                "Flat-pack assembly (IKEA, Wayfair, etc.)",
                "Bed frames, dressers, wardrobes, desks, tables, chairs",
                "Shelving units, bookcases, TV stands",
                "Outdoor furniture assembly",
                "Disassembly for moving",
                "Re-tightening / repairing wobbly furniture",
              ]} />

              <Section title="Mounting & hanging" items={[
                "TV mounting (fixed / tilt / full-motion)",
                "Soundbar mounting",
                "Mirror hanging",
                "Picture / frame hanging and gallery walls",
                "Curtain rods and tracks",
                "Blinds and shades installation",
                "Shelves and floating shelves",
                "Towel bars, toilet paper holders, robe hooks",
                "Whiteboards, cork boards",
                "Wall-mounted cabinets",
              ]} />

              <Section title="Doors, trim & carpentry" items={[
                "Door trimming / planing",
                "Baseboards / trim / crown molding install",
                "Handrails and banisters",
                "Stair tread repair",
                "Deck repairs (boards, steps, railing sections)",
                "Fence repairs (panels, posts, gates)",
                "Small framing repairs (non-structural)",
                "Built-in shelving",
                "Plywood backing / support panels",
              ]} />

              <Section title="Door & cabinet hardware" items={[
                "Door alignment and hinge adjustments",
                "Replace hinges, handles, knobs",
                "Install deadbolts and smart locks",
                "Latch / strike plate adjustments",
                "Door closers install",
                "Sliding door roller adjustment",
                "Cabinet hardware (pulls / knobs) install",
                "Closet door track repairs",
              ]} />

              <Section title="Drywall" items={[
                "Patch holes (nail pops to larger patches)",
                "Repair cracked joints / tape",
                "Corner bead repair",
                "Texture matching",
                "Touch-up sanding and prep",
                "Replace small drywall sections",
              ]} />

              <Section title="Painting" items={[
                "Interior wall / ceiling painting",
                "Trim, doors, cabinets painting",
                "Stain / varnish touch-ups",
                "Fence / deck staining or painting",
                "Surface prep (patch, sand, prime)",
                "Small exterior touch-ups",
              ]} />

              <Section title="Flooring" items={[
                "Laminate / LVP (click) installation (small / medium jobs)",
                "Vinyl sheet repairs",
                "Transition strips and reducers",
                "Baseboard removal / reinstall",
                "Floor squeak fixes",
                "Tile replacement (individual tiles)",
                "Grout / caulk refresh around tile edges",
                "Carpet re-stretching",
                "Minor subfloor patching",
                "Backsplash tile install",
                "Replace cracked / loose tiles",
                "Re-grout and sealing",
              ]} />

              <Section title="Plumbing" items={[
                "Shower door adjustments",
                "Install bathroom accessories (mirrors, shelves, hooks)",
                "Fix leaky faucets",
                "Replace faucet (kitchen / bath)",
                "Replace showerhead",
                "Replace toilet flapper / fill valve",
                "Toilet seat replacement",
                "Unclog sinks / tubs",
                "Replace P-trap",
                "Garbage disposal replace",
                "Install / replace hose bib spigot",
                "Replace supply lines / shutoff valves",
              ]} />

              <Section title="Electrical" items={[
                "Replace light fixtures",
                "Replace switches / outlets / plates",
                "Install dimmers",
                "Replace bulbs and troubleshoot basic lighting",
                "Install smart switches / thermostats",
                "Install ceiling fans",
                "Install doorbells / video doorbells",
                "Install smoke / CO detectors (battery or wired)",
              ]} />

              <Section title="Appliances" items={[
                "Dishwasher install / replace",
                "Washer / dryer hookups",
                "Range hood install",
                "Replace microwave (OTR / standard mounting)",
                "Minor appliance leveling and anti-tip brackets",
                "Replace refrigerator water filter / line",
              ]} />

              <Section title="Windows" items={[
                "Install / replace window screens",
                "Screen repair / patching",
                "Replace hardware (latches / handles)",
                "Weather sealing around frames",
                "Blind / shade adjustments",
                "Window insulation film install",
              ]} />

              <Section title="Exterior" items={[
                "Fence repairs",
                "Gate latch / hinge repair",
                "Deck board replacement",
                "Power washing (siding, decks, patios, driveways)",
                "Shed assembly",
                "Small exterior caulking and sealing",
                "Address numbers / mailbox install",
                "Minor soffit / fascia patching",
                "Gutter cleaning",
                "Downspout re-attach / realign",
                "Gutter guard install",
                "Minor leak investigation",
              ]} />

              <Section title="Bathroom & kitchen" items={[
                "Install towel bars / vanity mirrors",
                "Replace vanity light",
                "Replace vanity faucet / drain",
                "Install bathroom fans",
                "Install kitchen backsplash (tile)",
                "Replace cabinet hinges / soft-close",
                "Install pull-out organizers (trash, spice racks)",
              ]} />

              <Section title="Closet & storage" items={[
                "Closet shelving systems",
                "Closet rods and brackets",
                "Wall storage rails (garage systems)",
                "Overhead garage racks",
                "Pegboard install",
              ]} />

              <Section title="Tech & safety" items={[
                "Smart doorbells / cameras",
                "Wi-Fi routers / mesh setup",
                "Cable concealment (surface raceways)",
                "Ethernet cable runs",
                "Mount tablets / control panels",
                "Grab bars install",
                "Handrails install / repair",
                "Anti-slip strips",
                "Baby gates install",
                "Furniture anti-tip straps",
                "Smoke / CO detector install",
              ]} />

              <Section title="Moving & punch list" items={[
                "Punch list repairs for sale / rental",
                "Picture / TV take-down and patching",
                "Curtain / blind take-down and reinstall",
                "Furniture disassembly / reassembly",
                "Minor touch-up paint and caulk",
              ]} />

              <Section title="Maintenance & seasonal" items={[
                "Debris removal",
                "Small hauling",
                "Filter changes (HVAC, fridge)",
                "Dryer vent cleaning",
                "Door and window track cleaning / lubrication",
                "Weatherproofing for winter",
                "Install / remove window AC units",
                "Hang holiday lights",
                "Outdoor faucet winterization",
              ]} />
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Our service area</h2>
              <p className="text-gray-700">
                We serve London, St. Thomas, Tillsonburg, Strathroy, Woodstock, Stratford, Dorchester, and surrounding areas. Contact us to confirm we cover your location and to get a quote.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Other services we offer</h2>
              <ul className="flex flex-wrap gap-3">
                {relatedServices.map(({ label, path }) => (
                  <li key={label}>
                    <Link href={path} className="text-[#e53935] hover:text-red-700 font-medium">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[#e53935] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need something not listed? Get a free quote</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Call us or fill out our quote form. We'll get back to you and let you know if we can help with your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:4165614736" className="bg-white text-[#e53935] px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                  Call 416 561 4736
                </a>
                <Link href="/quote" className="bg-[#1a237e] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900">
                  Get a free quote
                </Link>
                <a
                  href="https://calendar.app.google/kiRFHo8EPAMyrvxk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1D3557] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 border border-[#1D3557]"
                >
                  Book Appointment
                </a>
              </div>
            </section>
          </div>

          <div className="md:sticky md:top-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/otherServices.png"
                alt="Other handyman services in London, ON - general repairs, assembly, mounting, and more"
                width={600}
                height={360}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

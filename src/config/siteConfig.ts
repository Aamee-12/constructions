/**
 * Centralised Brand, Content, and Navigation Configuration
 * HM Constructions and Interiors — Luxury Architecture, Interior Design & Construction
 *
 * All client details, contact information, projects, and offerings are easily
 * editable here without touching component layouts.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  location?: string;
  year?: string;
  area?: string;
  image: string;
  beforeImage?: string;
  compositeImage?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export const SITE_CONFIG = {
  brand: {
    name: "HM CONSTRUCTIONS AND INTERIORS",
    legalName: "HM Constructions and Interiors",
    tagline: "Architecture that feels like home.",
    subtagline: "Thoughtfully designed interiors and enduring spaces, brought to life with precision.",
    statement: "We bring architecture, interior design, and construction together to shape spaces that feel considered, functional, and enduring.",
    philosophyTitle: "Designed with intention. Built with care.",
    philosophyPoints: [
      {
        title: "Thoughtful Spatial Planning",
        desc: "Balancing movement, quiet corners, and functional flow tailored to individual lifestyles."
      },
      {
        title: "Natural Light Integration",
        desc: "Sculpting openings and elevations to capture changing daylight patterns throughout the seasons."
      },
      {
        title: "Honest Materiality",
        desc: "Curating tactile stone, blackened timber, patinated bronze, and lime-wash plasters."
      },
      {
        title: "Enduring Detail & Craft",
        desc: "Every joint, shadowline, and transition executed with precision to stand the test of time."
      }
    ]
  },

  // Official Contact Details
  contact: {
    email: "",
    phone: "+91 98868 69147",
    address: "547, 10th main, 2nd Cross Rd, HBR Layout 4th Block, Bengaluru, Karnataka 560043",
    hours: "Monday – Saturday: 09:30 — 19:00",
    notice: "Licensed Architectural Firm & Turnkey Construction Practice"
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#enquiry" }
  ],

  services: [
    {
      id: "residential-construction",
      number: "01",
      title: "Residential Construction",
      headline: "Where your personal home dreams find their flawless blueprint.",
      description: "Tailored residential builds engineered around site conditions, architectural proportion, and your future lifestyle goals. Executed with premium materials and exacting tolerances.",
      image: "/assets/images/service-residential.jpg",
      highlights: ["Custom Villa Architecture", "Bespoke Structural Framing", "High-Performance Facades"]
    },
    {
      id: "rental-residential",
      number: "02",
      title: "Rental + Residential House Construction",
      headline: "Enhancing your rental properties with beautiful, irresistible living spaces.",
      description: "Maximizing asset value and tenant desirability with smart spatial layouts, durable high-grade finishes, and timeless residential design.",
      image: "/assets/images/service-rental.jpg",
      highlights: ["High-Yield Spatial Layouts", "Resilient Luxury Finishes", "Turnkey Rental Readiness"]
    },
    {
      id: "commercial-construction",
      number: "03",
      title: "Commercial Construction",
      headline: "Transforming your office into a strategic asset that supports growth and innovation.",
      description: "Modern commercial spaces and corporate headquarters built to elevate company culture, client confidence, and operational agility.",
      image: "/assets/images/service-commercial.jpg",
      highlights: ["Strategic Office Engineering", "Acoustic & Lighting Design", "Smart Facility Integration"]
    },
    {
      id: "interior-design-construction",
      number: "04",
      title: "Interior + Design Construction",
      headline: "Where your personal home dreams find their flawless blueprint.",
      description: "Comprehensive interior styling and bespoke joinery that marries spatial comfort with tactile architectural elements, lighting, and textures.",
      image: "/assets/images/service-interior-design.jpg",
      highlights: ["Custom Architectural Millwork", "Curated Palette & Lighting", "Full Turnkey Handover"]
    }
  ] as ServiceItem[],

  projects: [
    {
      id: "hotel-citadel",
      title: "Hotel Citadel Commercial Landmark",
      category: "Commercial Architecture",
      description: "Multi-storey commercial hospitality landmark engineered with high-strength structural framing, bespoke exterior cladding, illuminated retail facade, and full turnkey MEP execution.",
      location: "Bengaluru Central",
      year: "2024",
      area: "3,850 m²",
      image: "/assets/projects/project_citadel.jpg",
      featured: true
    },
    {
      id: "commercial-tower",
      title: "The Prism Commercial Tower",
      category: "Commercial Architecture",
      description: "Contemporary high-rise corporate tower featuring precision structural curtain-wall glazing, travertine stone panels, panoramic executive suites, and elevated deck podiums.",
      location: "Business District",
      year: "2025",
      area: "5,200 m²",
      image: "/assets/projects/project_commercial_tower.jpg",
      featured: false
    },
    {
      id: "gabled-stone-villa",
      title: "Gabled Heritage Stone Villa",
      category: "Completed Luxury Residences",
      description: "Complete turnkey structural execution from raw brickwork and scaffolding to final refined living. Featuring dry-stacked stone accents, architectural gables, and safety glass balustrades.",
      location: "Gated Enclave",
      year: "2024",
      area: "420 m²",
      image: "/assets/projects/villa_after.jpg",
      beforeImage: "/assets/projects/villa_before.jpg",
      compositeImage: "/assets/projects/project_villa_gabled.jpg",
      featured: false
    },
    {
      id: "palatial-colonnade-mansion",
      title: "Palatial Colonnade Luxury Mansion",
      category: "Completed Luxury Residences",
      description: "Monumental multi-tier classical villa featuring arched porticos, hand-sculpted stone boundary walls, expansive terraces, and manicured landscaped courtyards.",
      location: "Royal Palms Avenue",
      year: "2025",
      area: "860 m²",
      image: "/assets/projects/mansion_after.jpg",
      beforeImage: "/assets/projects/mansion_before.jpg",
      compositeImage: "/assets/projects/project_luxury_mansion.jpg",
      featured: false
    },
    {
      id: "nocturne-glass-villa",
      title: "Nocturne Architectural Glass Villa",
      category: "Completed Luxury Residences",
      description: "Modernist tri-level residence with floor-to-ceiling panoramic glass, natural cedar soffits with warm architectural downlighting, and cantilevered observation decks.",
      location: "Hillside Enclave",
      year: "2025",
      area: "650 m²",
      image: "/assets/projects/glassvilla_after.jpg",
      beforeImage: "/assets/projects/glassvilla_before.jpg",
      compositeImage: "/assets/projects/project_glass_villa.jpg",
      featured: false
    }
  ] as ProjectItem[],

  process: [
    {
      number: "01",
      title: "Discover",
      summary: "Understand the client's goals, requirements, lifestyle, and site conditions.",
      details: ["Client lifestyle interview", "Topographical & climate study", "Budget & zoning alignment"]
    },
    {
      number: "02",
      title: "Design",
      summary: "Develop concepts, layouts, and material directions.",
      details: ["Volumetric 3D spatial models", "Tactile material moodboards", "Architectural schematic layouts"]
    },
    {
      number: "03",
      title: "Develop",
      summary: "Coordinate approved designs and the relevant technical details.",
      details: ["Engineering & MEP coordination", "Custom joinery specifications", "Contractor & vendor procurement"]
    },
    {
      number: "04",
      title: "Deliver",
      summary: "Execute and review the work according to the agreed scope.",
      details: ["On-site quality supervision", "Turnkey finishing & styling", "Final snagging & handover"]
    }
  ] as ProcessStep[],

  // Enquiry Form Options
  enquiryOptions: {
    projectTypes: [
      { id: "interior", label: "Interior Design" },
      { id: "construction", label: "Construction" },
      { id: "design-construction", label: "Design + Construction" },
      { id: "custom", label: "Custom Project" }
    ],
    propertyTypes: [
      "Private Villa / Mansion",
      "Penthouse / Apartment",
      "Estate / Compound",
      "Commercial / Studio",
      "Other"
    ]
  }
};

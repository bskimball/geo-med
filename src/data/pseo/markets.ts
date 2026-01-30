import type { ImageMetadata } from 'astro:assets';
import luxuryHome from '../../assets/luxury-home.jpg';
import handingOverKeys from '../../assets/handing-over-keys.jpg';
import georgeThumbsUp from '../../assets/george-thumbs-up.jpg';
import delawareRoadMap from '../../assets/delaware-road-map.png';
import dreamHome from '../../assets/dream-home.jpg';
import rentHome from '../../assets/rent-home.jpg';

export interface MarketHighlight {
  title: string;
  description: string;
}

export interface MarketStat {
  label: string;
  value: string;
  detail?: string;
}

export interface MarketFAQ {
  question: string;
  answer: string;
}

export interface MarketGuide {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  summary: string;
  hero: {
    image: ImageMetadata;
    alt: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  meta: {
    keywords: string[];
  };
  highlights: MarketHighlight[];
  stats: MarketStat[];
  neighborhoods: string[];
  lifestyle: string[];
  propertyTypes: string[];
  nearbyAttractions: string[];
  faqs: MarketFAQ[];
  cta: {
    heading: string;
    subheading: string;
    actionText: string;
    actionUrl: string;
  };
}

export const markets: MarketGuide[] = [
  {
    slug: 'rehoboth-beach',
    name: 'Rehoboth Beach',
    tagline: 'Vibrant Coastal Living with Boardwalk Energy',
    description:
      'Rehoboth Beach offers a lively boardwalk, year-round events, and upscale coastal homes ideal for full-time residents and vacation buyers alike.',
    summary:
      'Experience seaside charm, modern amenities, and strong short-term rental demand in Delaware’s most recognizable beach town.',
    hero: {
      image: luxuryHome,
      alt: 'Luxury coastal home near Rehoboth Beach boardwalk at sunset',
    },
    coordinates: {
      latitude: 38.715226,
      longitude: -75.076013,
    },
    meta: {
      keywords: [
        'Rehoboth Beach homes for sale',
        'Rehoboth Beach real estate agent',
        'buy beachfront home Rehoboth',
        'Rehoboth Beach vacation rentals',
        'Delaware beach properties',
      ],
    },
    highlights: [
      {
        title: 'Boardwalk Lifestyle',
        description:
          'Award-winning mile-long boardwalk lined with dining, boutiques, and entertainment draws steady seasonal traffic.',
      },
      {
        title: 'Investment Potential',
        description:
          'High occupancy rates and premium nightly rates make Rehoboth a proven market for short-term rentals.',
      },
      {
        title: 'Dining & Culture',
        description:
          'James Beard recognized restaurants, craft breweries, and art galleries attract foodies and tastemakers year-round.',
      },
    ],
    stats: [
      {
        label: 'Median Home Price',
        value: '$975K',
        detail: 'Single-family homes near oceanfront (12-month rolling)',
      },
      {
        label: 'Rental Occupancy',
        value: '68%',
        detail: 'Average short-term rental occupancy rate (peak season)',
      },
      {
        label: 'Commute to Dover',
        value: '45 mins',
        detail: 'Direct access via DE-1 with scenic coastal drives',
      },
    ],
    neighborhoods: [
      'North Shores',
      'South Rehoboth',
      'Country Club Estates',
      'Rehoboth Yacht & Country Club',
    ],
    lifestyle: [
      'Oceanfront boardwalk',
      'Boutique shopping',
      'Farm-to-table dining',
      'Cycling and nature trails',
    ],
    propertyTypes: [
      'Luxury beachfront estates',
      'Modern townhomes',
      'Condominiums',
      'Income-producing cottages',
    ],
    nearbyAttractions: [
      'Rehoboth Beach Boardwalk',
      'Cape Henlopen State Park',
      'Grove Park Farmers Market',
      'Junction & Breakwater Trail',
    ],
    faqs: [
      {
        question: 'Is Rehoboth Beach friendly for short-term rentals?',
        answer:
          'Yes. Rehoboth Beach has strong short-term rental demand with established management companies and clear licensing guidelines for investors.',
      },
      {
        question: 'What price ranges can I expect in Rehoboth Beach?',
        answer:
          'Primary residences typically begin in the mid $700K range, with oceanfront estates exceeding $2M. Condominiums and cottages offer mid-tier entry points.',
      },
    ],
    cta: {
      heading: 'Ready to tour Rehoboth Beach real estate?',
      subheading:
        'Let George curate a private list of coastal homes that match your lifestyle, budget, and investment goals.',
      actionText: 'Schedule Rehoboth Consultation',
      actionUrl: '/contact',
    },
  },
  {
    slug: 'bethany-beach',
    name: 'Bethany Beach',
    tagline: 'Quiet Resorts with Family-Friendly Appeal',
    description:
      'Bethany Beach combines peaceful coastal neighborhoods with guarded beaches, making it a premier destination for family retreats and second homes.',
    summary:
      'Discover laid-back living with private communities, resort-style amenities, and easy access to Fenwick Island and Ocean View.',
    hero: {
      image: handingOverKeys,
      alt: 'Happy family receiving keys to a home in Bethany Beach, Delaware',
    },
    coordinates: {
      latitude: 38.5393,
      longitude: -75.0558,
    },
    meta: {
      keywords: [
        'Bethany Beach homes for sale',
        'Bethany Beach gated communities',
        'Bethany Beach oceanfront condos',
        'quiet resort homes Delaware',
      ],
    },
    highlights: [
      {
        title: 'Guarded Beaches',
        description:
          'Family-safe beaches with lifeguards, seasonal events, and calm waters perfect for young swimmers.',
      },
      {
        title: 'Private Communities',
        description:
          'Gated neighborhoods offer amenities like clubhouses, shuttle services, and private beach access.',
      },
      {
        title: 'Year-Round Programming',
        description:
          'Farmers markets, concerts, and community gatherings maintain engagement beyond peak season.',
      },
    ],
    stats: [
      {
        label: 'Median Home Price',
        value: '$825K',
        detail: 'Typical detached homes within Bethany and Ocean View',
      },
      {
        label: 'HOA Amenities',
        value: 'Pools & Clubhouses',
        detail:
          'Many communities offer resort pools, tennis, and shuttle service',
      },
      {
        label: 'Average Rental Yield',
        value: '10-12%',
        detail: 'Seasonal weekly rentals in peak summer months',
      },
    ],
    neighborhoods: [
      'Sea Colony',
      'Ocean View Beach Club',
      'Salt Pond',
      'Bear Trap Dunes',
    ],
    lifestyle: [
      'Family-friendly boardwalk',
      'Resort amenities',
      'Golf & tennis clubs',
      'Calm coastal living',
    ],
    propertyTypes: [
      'Oceanfront condominiums',
      'Townhomes',
      'Golf course properties',
      'Resort single-family homes',
    ],
    nearbyAttractions: [
      'Bethany Beach Boardwalk',
      'Bear Trap Dunes Golf Club',
      'Fenwick Island State Park',
      'Assawoman Canal Trail',
    ],
    faqs: [
      {
        question: 'Are Bethany Beach communities good for full-time residents?',
        answer:
          'Yes. Many neighborhoods provide year-round services, clubs, and community programming ideal for primary homeowners.',
      },
      {
        question: 'Can I find VA loan-eligible homes in Bethany Beach?',
        answer:
          'Absolutely. George helps veteran buyers leverage VA loan benefits across Bethany and neighboring Ocean View properties.',
      },
    ],
    cta: {
      heading: 'Tour Bethany Beach communities with a local expert',
      subheading:
        'Explore private neighborhoods, HOA amenities, and the best single-family opportunities in the Quiet Resorts.',
      actionText: 'Book Bethany Discovery Call',
      actionUrl: '/contact',
    },
  },
  {
    slug: 'dewey-beach',
    name: 'Dewey Beach',
    tagline: 'Energetic Strip Between Bay and Ocean',
    description:
      'Dewey Beach delivers high-energy nightlife, dual water access, and investment-ready properties popular with younger buyers and renters.',
    summary:
      'Maximize rental income with bay-to-beach homes, walkable attractions, and strong summer demand from vacationers.',
    hero: {
      image: georgeThumbsUp,
      alt: 'George Medairy highlighting Dewey Beach waterfront listings',
    },
    coordinates: {
      latitude: 38.6929,
      longitude: -75.0769,
    },
    meta: {
      keywords: [
        'Dewey Beach investment properties',
        'Dewey Beach condos for sale',
        'bayfront homes in Dewey',
        'Delaware nightlife real estate',
      ],
    },
    highlights: [
      {
        title: 'Dual Waterfront Access',
        description:
          'Homes sit steps from Rehoboth Bay and the Atlantic Ocean, offering boating and beach days in one location.',
      },
      {
        title: 'Rental-Ready Market',
        description:
          'Seasonal renters and weekend visitors drive consistent occupancy for well-managed properties.',
      },
      {
        title: 'Walkable Entertainment',
        description:
          'Live music venues, dining, and festivals keep Dewey buzzing from spring through fall.',
      },
    ],
    stats: [
      {
        label: 'Median Condo Price',
        value: '$585K',
        detail: 'Updated bayfront condos with rental histories',
      },
      {
        label: 'Peak Weekly Rates',
        value: '$3,200+',
        detail: 'Four-bedroom homes during summer season',
      },
      {
        label: 'Walk Score',
        value: '83',
        detail: 'Highly walkable with dining, nightlife, and beach access',
      },
    ],
    neighborhoods: [
      'Rehoboth by the Sea',
      'Lighthouse Cove',
      'Bayfront at Rehoboth',
      'Bayside Gardens',
    ],
    lifestyle: [
      'Live music nightlife',
      'Paddle boarding on the bay',
      'Sunrise and sunset beach walks',
      'Festivals & events',
    ],
    propertyTypes: [
      'Bayfront cottages',
      'Investment duplexes',
      'Modern condos',
      'Luxury townhomes',
    ],
    nearbyAttractions: [
      'John Waples Memorial Playground',
      'Rehoboth Bay Marina',
      'Bottle & Cork',
      'Delaware Seashore State Park',
    ],
    faqs: [
      {
        question: 'How strong is rental demand in Dewey Beach?',
        answer:
          'Short-term demand is robust from May through September, with investors often booking 12+ weeks in advance.',
      },
      {
        question: 'Are there quiet neighborhoods in Dewey?',
        answer:
          'Yes. Streets near the southern end and bayside enclaves offer quieter residential pockets while remaining walkable.',
      },
    ],
    cta: {
      heading: 'Unlock Dewey Beach investment opportunities',
      subheading:
        'Review income projections, rental histories, and turnkey listings tailored to your goals.',
      actionText: 'Request Dewey Analysis',
      actionUrl: '/contact',
    },
  },
  {
    slug: 'lewes',
    name: 'Lewes',
    tagline: 'Historic Charm Meets Waterfront Access',
    description:
      'Lewes blends maritime heritage with upscale neighborhoods, offering quick ferry access, boutique shopping, and respected school districts.',
    summary:
      'Choose from historic downtown homes, canal-front properties, and newly built communities with resort amenities.',
    hero: {
      image: delawareRoadMap,
      alt: 'Illustrated map highlighting Lewes, Delaware neighborhoods and waterways',
    },
    coordinates: {
      latitude: 38.7746,
      longitude: -75.1393,
    },
    meta: {
      keywords: [
        'Lewes homes for sale',
        'Historic Lewes real estate',
        'Lewes waterfront properties',
        'Lewes Delaware new construction',
      ],
    },
    highlights: [
      {
        title: 'Historic Downtown',
        description:
          'Brick-lined streets, preserved architecture, and boutique storefronts deliver unmatched small-town charm.',
      },
      {
        title: 'Canal & Bay Access',
        description:
          'Cape May-Lewes Ferry, Lewes Beach, and canal-front parks create year-round outdoor recreation.',
      },
      {
        title: 'Top-Rated Schools',
        description:
          'Cape Henlopen School District consistently earns high marks, drawing relocating families.',
      },
    ],
    stats: [
      {
        label: 'Median Home Price',
        value: '$675K',
        detail: 'Includes historic downtown and Canalfront homes',
      },
      {
        label: 'New Construction',
        value: '12+ Communities',
        detail: 'Active developments offering resort-style amenities',
      },
      {
        label: 'Ferry Commute',
        value: '85 mins to Cape May',
        detail: 'Daily ferry service connecting Delaware and New Jersey',
      },
    ],
    neighborhoods: [
      'Historic Downtown Lewes',
      'Cape Shores',
      'The Peninsula',
      'Showfield',
      'Governor’s Reserve',
    ],
    lifestyle: [
      'Boutique dining',
      'History & museums',
      'Bayfront recreation',
      'Resort-style communities',
    ],
    propertyTypes: [
      'Historic single-family homes',
      'Canalfront estates',
      'Townhomes',
      '55+ communities',
    ],
    nearbyAttractions: [
      'Cape Henlopen State Park',
      'Zwaanendael Museum',
      'Lewes Beach',
      'Cape May-Lewes Ferry Terminal',
    ],
    faqs: [
      {
        question: 'Is Lewes suitable for year-round living?',
        answer:
          'Yes. Lewes offers full-time amenities, medical facilities, and a strong local economy supporting year-round residents.',
      },
      {
        question: 'What types of new construction are available?',
        answer:
          'Builders offer luxury single-family homes, townhomes, and 55+ active adult communities with pools, fitness centers, and social programming.',
      },
    ],
    cta: {
      heading: 'Find your home in historic Lewes',
      subheading:
        'Compare established neighborhoods with new-build communities to match your lifestyle and timeline.',
      actionText: 'Start Lewes Home Search',
      actionUrl: '/contact',
    },
  },
  {
    slug: 'millsboro',
    name: 'Millsboro',
    tagline: 'Affordable Inland Living Near Coastal Attractions',
    description:
      'Millsboro offers budget-friendly homes, growing amenities, and quick access to Delaware beaches—ideal for families and commuters seeking value.',
    summary:
      'Discover affordable single-family homes, new construction communities, and a welcoming small-town atmosphere just minutes from Rehoboth Beach.',
    hero: {
      image: dreamHome,
      alt: 'Charming family home in Millsboro, Delaware neighborhood',
    },
    coordinates: {
      latitude: 38.5918,
      longitude: -75.2916,
    },
    meta: {
      keywords: [
        'Millsboro homes for sale',
        'affordable Delaware real estate',
        'Millsboro new construction',
        'Sussex County homes',
        'Millsboro DE communities',
      ],
    },
    highlights: [
      {
        title: 'Affordable Entry Point',
        description:
          'Home prices significantly below coastal averages make Millsboro attractive for first-time buyers and growing families.',
      },
      {
        title: 'Growing Infrastructure',
        description:
          'New retail centers, healthcare facilities, and dining options continue expanding to serve the growing population.',
      },
      {
        title: 'Beach Proximity',
        description:
          'Reach Rehoboth Beach in under 20 minutes while enjoying lower property taxes and larger lot sizes.',
      },
    ],
    stats: [
      {
        label: 'Median Home Price',
        value: '$385K',
        detail: 'Single-family homes including new construction',
      },
      {
        label: 'Drive to Beach',
        value: '18 mins',
        detail: 'Quick access to Rehoboth and Dewey beaches',
      },
      {
        label: 'New Communities',
        value: '8+',
        detail: 'Active builders with available inventory',
      },
    ],
    neighborhoods: [
      'Plantation Lakes',
      'Stockley',
      'Long Neck',
      'Oak Orchard',
      'Angola',
    ],
    lifestyle: [
      'Family-oriented communities',
      'Outdoor recreation',
      'Local dining and shopping',
      'Easy beach access',
    ],
    propertyTypes: [
      'Single-family homes',
      'New construction',
      'Townhomes',
      'Manufactured homes',
    ],
    nearbyAttractions: [
      'Indian River Inlet',
      'Tanger Outlets Rehoboth Beach',
      'James Farm Ecological Preserve',
      'Millsboro Pond',
    ],
    faqs: [
      {
        question: 'Is Millsboro a good place for families?',
        answer:
          'Yes. Millsboro offers affordable housing, good schools in the Indian River School District, and family-friendly neighborhoods with community amenities.',
      },
      {
        question: 'How far is Millsboro from the beach?',
        answer:
          'Millsboro is approximately 15-20 minutes from Rehoboth Beach and Dewey Beach, making it ideal for beach lovers seeking affordable inland housing.',
      },
    ],
    cta: {
      heading: 'Explore Millsboro real estate opportunities',
      subheading:
        'Find affordable homes near Delaware beaches with room to grow. Let George show you the best Millsboro has to offer.',
      actionText: 'Search Millsboro Homes',
      actionUrl: '/contact',
    },
  },
  {
    slug: 'milton',
    name: 'Milton',
    tagline: 'Historic Charm with Small-Town Character',
    description:
      'Milton combines 19th-century architecture, artisan culture, and proximity to Cape Henlopen—perfect for buyers seeking character and community.',
    summary:
      "Experience a walkable downtown, thriving arts scene, and beautifully restored historic homes in one of Delaware's most charming small towns.",
    hero: {
      image: rentHome,
      alt: 'Historic Main Street in Milton, Delaware with local shops',
    },
    coordinates: {
      latitude: 38.7776,
      longitude: -75.3099,
    },
    meta: {
      keywords: [
        'Milton Delaware homes for sale',
        'historic Milton real estate',
        'Milton DE downtown living',
        'Dogfish Head Milton',
        'Cape Henlopen area homes',
      ],
    },
    highlights: [
      {
        title: 'Historic Downtown',
        description:
          'Tree-lined streets, 19th-century architecture, and locally owned shops create a walkable village atmosphere.',
      },
      {
        title: 'Artisan Culture',
        description:
          'Home to Dogfish Head Brewery and a thriving creative community with galleries, studios, and seasonal markets.',
      },
      {
        title: 'Nature Access',
        description:
          'Minutes from Prime Hook National Wildlife Refuge and Cape Henlopen State Park for hiking, birding, and kayaking.',
      },
    ],
    stats: [
      {
        label: 'Median Home Price',
        value: '$425K',
        detail: 'Mix of historic homes and newer construction',
      },
      {
        label: 'Drive to Lewes',
        value: '10 mins',
        detail: 'Quick access to beaches, ferry, and dining',
      },
      {
        label: 'Walk Score',
        value: '72',
        detail: 'Highly walkable downtown core',
      },
    ],
    neighborhoods: [
      'Historic Downtown Milton',
      'Wagamons West Shores',
      'Milton Elks Lodge Area',
      'Broadkill Beach',
    ],
    lifestyle: [
      'Walkable downtown',
      'Craft beer scene',
      'Art galleries and studios',
      'Nature and wildlife',
    ],
    propertyTypes: [
      'Historic single-family homes',
      'Restored Victorians',
      'Waterfront properties',
      'New construction communities',
    ],
    nearbyAttractions: [
      'Dogfish Head Brewery',
      'Prime Hook National Wildlife Refuge',
      'Milton Theatre',
      'Broadkill River kayaking',
    ],
    faqs: [
      {
        question: 'What makes Milton unique compared to beach towns?',
        answer:
          'Milton offers historic charm, lower prices than oceanfront communities, and a tight-knit artistic community while remaining just 10 minutes from Lewes and Cape Henlopen beaches.',
      },
      {
        question: 'Are there new construction options in Milton?',
        answer:
          'Yes. Several developments offer new single-family homes while the historic district features beautifully restored properties with modern updates.',
      },
    ],
    cta: {
      heading: "Discover Milton's historic charm",
      subheading:
        "Find your perfect blend of character, community, and coastal access in one of Delaware's most welcoming small towns.",
      actionText: 'Explore Milton Properties',
      actionUrl: '/contact',
    },
  },
];

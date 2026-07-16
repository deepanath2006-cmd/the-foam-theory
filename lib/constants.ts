export const SITE = {
  name: "THE FOAM THEORY",
  tagline: "Doorstep Premium Car Wash",
  location: "Chennai",
  phone: "8667852706",
  phoneDisplay: "+91 86678 52706",
  whatsapp: "918667852706",
  email: "hello@thefoamtheory.com",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a car wash with THE FOAM THEORY.")}`;

 export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "About Us", href: "#about" },
] as const;

/** Set to true when the pricing section is ready to go live. */
export const SHOW_PRICING_SECTION = false;

export const PRICING_NAV_LINK = {
  label: "Pricing",
  href: "#pricing",
} as const;

export const VEHICLE_TYPES = [
  "Hatchback",
  "Sedan",
  "SUV",
  "MUV / MPV",
  "Luxury Car",
  "Other",
] as const;

export const SERVICES = [
  {
    id: "exterior-wash",
    title: "Exterior Wash",
    description:
      "Hand-finished exterior cleaning with pH-balanced shampoo, wheel detailing, and streak-free glass.",
    icon: "car" as const,
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078edc?w=800&q=80",
  },
  {
    id: "interior-vacuum",
    title: "Interior Vacuum",
    description:
      "Deep vacuum of seats, mats, and boot with dashboard wipe-down for a fresh, dust-free cabin.",
    icon: "sparkles" as const,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  },
  {
    id: "premium-foam",
    title: "Premium Foam Wash",
    description:
      "Thick snow-foam pre-wash, microfiber contact wash, and ceramic-ready gloss protection.",
    icon: "droplets" as const,
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
  },
  {
    id: "monthly-package",
    title: "Monthly Package",
    description:
      "Regular premium care with four washes every month — best value for a consistently spotless car.",
    icon: "calendar" as const,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Exterior Wash",
    price: 199,
    contactUs: false,
  },
  {
    name: "Interior Vacuum",
    price: 299,
    contactUs: false,
  },
  {
    name: "Premium Foam Wash",
    price: 499,
    contactUs: false,
  },
  {
    name: "Monthly Package",
    price: null,
    contactUs: true,
  },
] as const;

export const GALLERY_BEFORE_AFTER = [
  {
    id: 1,
    label: "Exterior Wash",
    before:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    id: 2,
    label: "Premium Foam Wash",
    before:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    id: 3,
    label: "Interior Clean",
    before:
      "https://images.unsplash.com/photo-1489824914137-8910a8452069?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  },
] as const;

export const HERO_IMAGE ="/hero-car.png";

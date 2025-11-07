import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "katalin-nagy",
    name: "Katalin Nagy",
    role: "Pensioner, District VIII",
    quote: "Saved €200 last winter without feeling cold. Finally, technology that works for people like me.",
    avatar: "👵",
    district: "VIII",
  },
  {
    id: "peter-kovacs",
    name: "Péter Kovács",
    role: "Small Business Owner, District V",
    quote: "Cut our overhead by 25% during the energy crisis. LUNARA paid for itself in the first month.",
    avatar: "👨‍💼",
    district: "V",
  },
  {
    id: "anna-szabo",
    name: "Anna Szabó",
    role: "Building Manager, 50+ Apartments",
    quote: "Implemented across all our properties seamlessly. Residents are happier and bills are lower.",
    avatar: "👩‍💼",
  },
] as const;

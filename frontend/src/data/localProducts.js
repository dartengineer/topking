const products = [
  {
    id: "1",
    name: "Imperial Oxford",
    category: "men",
    price: 485,
    originalPrice: 620,
    description: "A masterpiece of cobbling art, the Imperial Oxford is handcrafted from full-grain Italian leather with hand-stitched welting. Each pair takes over 40 hours to complete, ensuring absolute precision in every stitch and contour.",
    material: "Full-grain Italian calf leather, leather sole, brass eyelets",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    ],
    featured: true,
    stock: 12,
    badge: "Bestseller",
    colors: ["Black", "Dark Brown", "Cognac"]
  },
  {
    id: "2",
    name: "Sovereign Derby",
    category: "men",
    price: 420,
    originalPrice: null,
    description: "The Sovereign Derby embodies restrained elegance. Hand-lasted on a classic English last, these shoes feature a double leather sole and a hand-burnished finish that deepens with age and wear.",
    material: "Boxcalf leather, double leather sole, hand-welted construction",
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80"
    ],
    featured: true,
    stock: 8,
    badge: "New",
    colors: ["Mahogany", "Navy", "Black"]
  },
  {
    id: "3",
    name: "Regal Loafer",
    category: "unisex",
    price: 395,
    originalPrice: 450,
    description: "Effortless luxury in loafer form. The Regal Loafer features a hand-sewn penny strap, cushioned insole lined with soft kid leather, and a flexible crepe sole for all-day comfort.",
    material: "Suede upper, kid leather lining, hand-stitched moccasin seam, crepe sole",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
    ],
    featured: true,
    stock: 15,
    badge: "Sale",
    colors: ["Tan", "Burgundy", "Forest Green"]
  },
  {
    id: "4",
    name: "Duchess Heel",
    category: "women",
    price: 520,
    originalPrice: null,
    description: "Sculptural and powerful, the Duchess Heel is handcrafted from the finest patent leather with a stacked wooden heel. A statement of authority and grace in every step.",
    material: "Patent leather, wooden stacked heel, leather insole, rubber tip",
    sizes: [35, 36, 37, 38, 39, 40, 41],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80"
    ],
    featured: true,
    stock: 10,
    badge: "Exclusive",
    colors: ["Noir", "Ivory", "Scarlet"]
  },
  {
    id: "5",
    name: "Crown Brogue",
    category: "men",
    price: 510,
    originalPrice: null,
    description: "The Crown Brogue is our most intricate work — featuring full hand-punched broguing across the entire upper. Crafted by our most senior artisans with decades of experience.",
    material: "Grain leather, Goodyear welt construction, leather sole, brass tacks",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    ],
    featured: false,
    stock: 6,
    badge: null,
    colors: ["Tan", "Antique Brown"]
  },
  {
    id: "6",
    name: "Élite Chelsea Boot",
    category: "unisex",
    price: 580,
    originalPrice: 640,
    description: "A timeless silhouette elevated through uncompromising craftsmanship. Our Chelsea Boot features elastic side panels in matching leather, a Cuban heel, and a hand-stitched pull tab.",
    material: "Calf leather, elastic gusset, leather lining, Cuban heel, rubber sole",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80"
    ],
    featured: false,
    stock: 9,
    badge: "Sale",
    colors: ["Black", "Cognac"]
  },
  {
    id: "7",
    name: "Velvet Mule",
    category: "women",
    price: 340,
    originalPrice: null,
    description: "Pure indulgence — the Velvet Mule is crafted from crushed velvet with hand-embroidered gold detailing at the toe, set on a sculpted leather heel.",
    material: "Crushed velvet, hand-embroidered detail, sculpted leather heel",
    sizes: [35, 36, 37, 38, 39, 40],
    images: [
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80"
    ],
    featured: false,
    stock: 14,
    badge: "New",
    colors: ["Midnight Blue", "Emerald", "Champagne"]
  },
  {
    id: "8",
    name: "Artisan Sneaker",
    category: "unisex",
    price: 380,
    originalPrice: null,
    description: "Where luxury meets casual — our Artisan Sneaker uses hand-cut leather panels sewn over a vulcanized rubber sole. Every pair numbered and signed by the craftsman.",
    material: "Hand-cut full-grain leather, vulcanized rubber sole, cotton laces",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80"
    ],
    featured: false,
    stock: 20,
    badge: null,
    colors: ["White/Gold", "Triple Black", "Cream/Tan"]
  },
  {
    id: "9",
    name: "Crown Brogue",
    category: "men",
    price: 510,
    originalPrice: null,
    description: "The Crown Brogue is our most intricate work — featuring full hand-punched broguing across the entire upper. Crafted by our most senior artisans with decades of experience.",
    material: "Grain leather, Goodyear welt construction, leather sole, brass tacks",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    ],
    featured: false,
    stock: 6,
    badge: null,
    colors: ["Tan", "Antique Brown"]
  },
  {
    id: "10",
    name: "Élite Chelsea Boot",
    category: "unisex",
    price: 580,
    originalPrice: 640,
    description: "A timeless silhouette elevated through uncompromising craftsmanship. Our Chelsea Boot features elastic side panels in matching leather, a Cuban heel, and a hand-stitched pull tab.",
    material: "Calf leather, elastic gusset, leather lining, Cuban heel, rubber sole",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80"
    ],
    featured: false,
    stock: 9,
    badge: "Sale",
    colors: ["Black", "Cognac"]
  },
  {
    id: "11",
    name: "Velvet Mule",
    category: "women",
    price: 340,
    originalPrice: null,
    description: "Pure indulgence — the Velvet Mule is crafted from crushed velvet with hand-embroidered gold detailing at the toe, set on a sculpted leather heel.",
    material: "Crushed velvet, hand-embroidered detail, sculpted leather heel",
    sizes: [35, 36, 37, 38, 39, 40],
    images: [
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80"
    ],
    featured: false,
    stock: 14,
    badge: "New",
    colors: ["Midnight Blue", "Emerald", "Champagne"]
  },
  {
    id: "12",
    name: "Artisan Sneaker",
    category: "unisex",
    price: 380,
    originalPrice: null,
    description: "Where luxury meets casual — our Artisan Sneaker uses hand-cut leather panels sewn over a vulcanized rubber sole. Every pair numbered and signed by the craftsman.",
    material: "Hand-cut full-grain leather, vulcanized rubber sole, cotton laces",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80"
    ],
    featured: false,
    stock: 20,
    badge: null,
    colors: ["White/Gold", "Triple Black", "Cream/Tan"]
  }
];

export default products;

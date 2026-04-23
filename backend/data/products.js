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
      "/public/06-black.png",
      "/public/06-brown.png",
      "/public/06-tan.jpeg",
    ],
    featured: true,
    stock: 12,
    badge: "Bestseller",
    colors: ["Black", "Dark Brown", "Tan"]
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
      "/public/02-black.jpeg",
      "/public/02-brown.png",
      "/public/02-green.png",
    ],
    featured: true,
    stock: 8,
    badge: "New",
    colors: ["Tan", "Green", "Black"]
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
      "/public/03-black.png",
      "/public/03-chocolate.png",
      "/public/03-all.png"
    ],
    featured: true,
    stock: 15,
    badge: "Sale",
    colors: ["Tan", "Black", "Brown"]
  },
  {
    id: "4",
    name: "Duchess Heel",
    category: "men",
    price: 520,
    originalPrice: null,
    description: "Sculptural and powerful, the Duchess Heel is handcrafted from the finest patent leather with a stacked wooden heel. A statement of authority and grace in every step.",
    material: "Patent leather, wooden stacked heel, leather insole, rubber tip",
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "/public/04-black.png",
      "/public/04-chocolate.png",
      "/public/04-grey.jpg"
    ],
    featured: true,
    stock: 10,
    badge: "Exclusive",
    colors: ["Black", "Chocolate", "Grey"]
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
       "/public/05-black.png",
      "/public/05-brown.jpeg",
    ],
    featured: false,
    stock: 6,
    badge: null,
    colors: ["Black", "Antique Brown"]
  },
  {
    id: "6",
    name: "Élite Chelsea Boot",
    category: "men",
    price: 580,
    originalPrice: 640,
    description: "A timeless silhouette elevated through uncompromising craftsmanship. Our Chelsea Boot features elastic side panels in matching leather, a Cuban heel, and a hand-stitched pull tab.",
    material: "Calf leather, elastic gusset, leather lining, Cuban heel, rubber sole",
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
       "/public/01-black.png",
      "/public/01-brown.jpg",
      "/public/01-chocolate.png",
      "/public/01-all.png"
    ],
    featured: false,
    stock: 9,
    badge: "Sale",
    colors: ["Black", "Tan", "Cognac"]
  },
  {
    id: "7",
    name: "Velvet Mule",
    category: "men",
    price: 340,
    originalPrice: null,
    description: "Pure indulgence — the Velvet Mule is crafted from crushed velvet with hand-embroidered gold detailing at the toe, set on a sculpted leather heel.",
    material: "Crushed velvet, hand-embroidered detail, sculpted leather heel",
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "/public/07-black.png",
      "/public/07-brown.jpeg",
    ],
    featured: false,
    stock: 14,
    badge: "New",
    colors: ["Black", "Brown",]
  },
  {
    id: "8",
    name: "Artisan Sneaker",
    category: "men",
    price: 380,
    originalPrice: null,
    description: "Where luxury meets casual — our Artisan Sneaker uses hand-cut leather panels sewn over a vulcanized rubber sole. Every pair numbered and signed by the craftsman.",
    material: "Hand-cut full-grain leather, vulcanized rubber sole, cotton laces",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    images: [
      "/public/012-green.png",
      "/public/012-brown.jpeg",
      "/public/012-tan.png",
    ],
    featured: false,
    stock: 20,
    badge: null,
    colors: ["Green", "Dark Brown", "Tan"]
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
      "/public/08-green.png",
      "/public/08-brown.png",
      "/public/08-tan.jpeg",
    ],
    featured: false,
    stock: 6,
    badge: null,
    colors: ["Tan", "Green", "Antique Brown"]
  },
  {
    id: "10",
    name: "Élite Chelsea Boot",
    category: "men",
    price: 580,
    originalPrice: 640,
    description: "A timeless silhouette elevated through uncompromising craftsmanship. Our Chelsea Boot features elastic side panels in matching leather, a Cuban heel, and a hand-stitched pull tab.",
    material: "Calf leather, elastic gusset, leather lining, Cuban heel, rubber sole",
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "/public/010-black.jpeg",
      "/public/010-tan.png",
      "/public/010-chocolate.png"
    ],
    featured: false,
    stock: 9,
    badge: "Sale",
    colors: ["Black", "Tan", "Cognac"]
  },
  {
    id: "11",
    name: "Velvet Mule",
    category: "men",
    price: 340,
    originalPrice: null,
    description: "Pure indulgence — the Velvet Mule is crafted from crushed velvet with hand-embroidered gold detailing at the toe, set on a sculpted leather heel.",
    material: "Crushed velvet, hand-embroidered detail, sculpted leather heel",
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "/public/011-black.png",
      "/public/011-tan.jpg",
      "/public/011-chocolate.png"
    ],
    featured: false,
    stock: 14,
    badge: "New",
    colors: ["Dark Brown", "Black", "Tan"]
  },
  {
    id: "12",
    name: "Artisan Sneaker",
    category: "men",
    price: 380,
    originalPrice: null,
    description: "Where luxury meets casual — our Artisan Sneaker uses hand-cut leather panels sewn over a vulcanized rubber sole. Every pair numbered and signed by the craftsman.",
    material: "Hand-cut full-grain leather, vulcanized rubber sole, cotton laces",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    images: [
      "/public/09-black.jpeg",
      "/public/09-brown.png",
      "/public/09-green.png"
    ],
    featured: false,
    stock: 20,
    badge: null,
    colors: ["Forest Green", "Triple Black", "Tan"]
  }
];

module.exports = products;

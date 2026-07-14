export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  hue: string;
  accent: string;
};

export const products: Product[] = [
  {
    id: "truffle-gnocchi",
    name: "Truffle Gnocchi",
    description: "Potato pillows, black truffle cream",
    price: "₹449",
    category: "Pasta",
    hue: "#1a2e28",
    accent: "#2ee6a8",
  },
  {
    id: "coastal-biryani",
    name: "Coastal Biryani",
    description: "Seared seafood, saffron basmati",
    price: "₹529",
    category: "Rice",
    hue: "#1e2433",
    accent: "#7dd3fc",
  },
  {
    id: "miso-salmon",
    name: "Miso Glazed Salmon",
    description: "Faroe Islands cut, ginger glaze",
    price: "₹699",
    category: "Seafood",
    hue: "#2a1f1a",
    accent: "#fbbf24",
  },
  {
    id: "wild-mushroom",
    name: "Wild Mushroom Risotto",
    description: "Arborio, porcini, aged parmesan",
    price: "₹479",
    category: "Risotto",
    hue: "#1f2418",
    accent: "#a3e635",
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Tandoor-charred, tomato makhani",
    price: "₹459",
    category: "Curry",
    hue: "#2a1814",
    accent: "#fb923c",
  },
  {
    id: "matcha-mochi",
    name: "Matcha Mochi Bites",
    description: "Ceremonial grade, soft chew",
    price: "₹349",
    category: "Dessert",
    hue: "#14241c",
    accent: "#86efac",
  },
];

export const bentoFeatures = [
  {
    id: "flash-frozen",
    label: "Technology",
    title: "Flash-Frozen at −40°C",
    description:
      "Locked at peak freshness in minutes—not hours. Nutrients, texture, and aroma preserved exactly as the chef intended.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "zero-preservatives",
    label: "Purity",
    title: "Zero Preservatives",
    description: "Cold is the only preservative we trust. Nothing synthetic. Nothing hidden.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "chef-crafted",
    label: "Craft",
    title: "Chef-Crafted Recipes",
    description: "Developed with restaurant kitchens. Perfected for your freezer.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "ready-minutes",
    label: "Convenience",
    title: "Ready in Minutes",
    description: "From frozen to plated in under 12 minutes—gourmet without the wait.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "traceable",
    label: "Sourcing",
    title: "Traceable Ingredients",
    description: "Every protein and produce lot audited from farm and sea to freeze tunnel.",
    span: "lg:col-span-2 lg:row-span-1",
  },
];

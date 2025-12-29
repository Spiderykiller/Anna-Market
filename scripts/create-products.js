// scripts/create-products.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const products = [
  // Furniture
  {
    name: "Furniture 1",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927096/products/furniture/nskpihu5zti2ia2wylmc.jpg",
    description: "Elegant wooden chair perfect for living rooms.",
    price: "Negotiable",
  },
  {
    name: "Furniture 2",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927098/products/furniture/baw1vzpknhcviavdmjrh.jpg",
    description: "Modern sofa designed for comfort and style.",
    price: "Negotiable",
  },
  {
    name: "Furniture 3",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927099/products/furniture/ybrwze4xq5eayaep9eyk.jpg",
    description: "Sturdy dining table suitable for family meals.",
    price: "Negotiable",
  },
  {
    name: "Furniture 4",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927101/products/furniture/g2ajebh3re7tgmnfacxe.jpg",
    description: "Stylish bookshelf with multiple compartments.",
    price: "Negotiable",
  },
  {
    name: "Furniture 5",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927103/products/furniture/v1v2pc2lfmjjc4qiyttz.jpg",
    description: "Compact coffee table with sleek design.",
    price: "Negotiable",
  },
  {
    name: "Furniture 6",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927107/products/furniture/tyd0dmiptgfazqjqyccw.jpg",
    description: "Comfortable recliner chair with soft cushioning.",
    price: "Negotiable",
  },
  {
    name: "Furniture 7",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927112/products/furniture/vzdahyy4cexs4krhyq7a.jpg",
    description: "Vintage-style wooden cabinet with drawers.",
    price: "Negotiable",
  },
  {
    name: "Furniture 8",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927115/products/furniture/wu9wnnz4qx2dyryl7c4w.jpg",
    description: "Durable bed frame suitable for king-size mattresses.",
    price: "Negotiable",
  },
  {
    name: "Furniture 9",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927118/products/furniture/ggekqvgq8gx508a9lymp.jpg",
    description: "Ergonomic office chair for maximum support.",
    price: "Negotiable",
  },
  {
    name: "Furniture 10",
    category: "furniture",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927119/products/furniture/clyj1mtu6kovz4jm9lz4.jpg",
    description: "Minimalist side table with modern appeal.",
    price: "Negotiable",
  },
  // Home Decor
  {
    name: "Home Decor 1",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927155/products/home-decor/pkamhfl3ff9yqsxegd0z.jpg",
    description: "Decorative vase to enhance your living space.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 2",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927166/products/home-decor/neyfebylxsmqv885bw0t.jpg",
    description: "Wall art painting to brighten any room.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 3",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927177/products/home-decor/akay0dllq4xmkwgbqdjb.jpg",
    description: "Decorative table lamp with warm lighting.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 4",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927210/products/home-decor/bcudhjh9rc1ku7plemf7.jpg",
    description: "Ceramic figurine to add charm to your shelves.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 5",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927239/products/home-decor/diwwjml0nni75mpfvitv.jpg",
    description: "Indoor plant pot for a natural look.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 6",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927259/products/home-decor/oih9rltpiftxi2pwhvmo.jpg",
    description: "Decorative wall mirror for modern interiors.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 7",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927272/products/home-decor/cswwbqadnzodwoftormj.jpg",
    description: "Set of scented candles to create a cozy ambiance.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 8",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927306/products/home-decor/k9lqjfeflwpni1r52sqd.jpg",
    description: "Decorative throw pillows for sofas or beds.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 9",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927318/products/home-decor/vxdvfukl1qip5087dlv6.jpg",
    description: "Artistic wall clock for stylish home decor.",
    price: "Negotiable",
  },
  {
    name: "Home Decor 10",
    category: "home-decor",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927323/products/home-decor/qxeellcukj5idqnfp0jn.jpg",
    description: "Decorative rug with elegant patterns.",
    price: "Negotiable",
  },
  // Kitchen
  {
    name: "Kitchen 1",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927326/products/kitchen/gfpuchhjbm1wbfkox4zc.jpg",
    description: "Non-stick frying pan for everyday cooking.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 2",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927327/products/kitchen/zxuhtm8uqgolyzhhe3ll.jpg",
    description: "Set of stainless steel cooking utensils.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 3",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927328/products/kitchen/za6vyjiqskknbndkuwxk.jpg",
    description: "High-quality chef knife for precise cutting.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 4",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927330/products/kitchen/vznyfjm25ngxdtirgddd.jpg",
    description: "Durable chopping board for all your prep needs.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 5",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927331/products/kitchen/kuoflayjl5uobo86lw3z.jpg",
    description: "Set of heat-resistant oven mitts.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 6",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927334/products/kitchen/dmb6j73oh38ysa2vqf8r.jpg",
    description: "Microwave-safe glass containers for storage.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 7",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927336/products/kitchen/ubmqldtkmabq1f6fb28a.jpg",
    description: "Set of ceramic plates with stylish design.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 8",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927338/products/kitchen/wrvzi4jo9hlhhyj8ihfs.jpg",
    description: "Compact kitchen scale for precise measurements.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 9",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927339/products/kitchen/sklmzdasts7y3apwogvx.jpg",
    description: "High-quality blender for smoothies and sauces.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 10",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927344/products/kitchen/etgufwfy7sryjxovatsx.jpg",
    description: "Durable stainless steel saucepan.",
    price: "Negotiable",
  },
  // ...continue for all kitchen images
  // Continuation of the products array

  {
    name: "Kitchen 11",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927346/products/kitchen/xn7ek2a4pcxermevshoc.jpg",
    description: "Set of durable stainless steel spoons and forks.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 12",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927348/products/kitchen/bjo96e4lk7fjsi0nhjjr.jpg",
    description: "Elegant ceramic bowls for serving soups and desserts.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 13",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927350/products/kitchen/xoymccfekeexaj0xsvsd.jpg",
    description: "Durable cutting knives with ergonomic handles.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 14",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927352/products/kitchen/emgrzzozqlvpz0fbw14y.jpg",
    description: "Compact spice rack to organize your spices neatly.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 15",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927353/products/kitchen/tqoztsa3wibtadqqyuqp.jpg",
    description: "High-quality non-slip cutting board for chopping.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 16",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927356/products/kitchen/ebf83hklggroraem3myw.jpg",
    description: "Set of heat-resistant glass measuring cups.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 17",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927357/products/kitchen/mmljdbj7wjnubbuum6bn.jpg",
    description: "Durable silicone spatulas for cooking and baking.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 18",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927358/products/kitchen/cirmemetpvkx5snqhw64.jpg",
    description: "Elegant teapot for brewing tea with style.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 19",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927362/products/kitchen/fubnfzsyix595yle1jwv.jpg",
    description: "Premium stainless steel frying pan for perfect cooking.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 20",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927363/products/kitchen/wdehiqsyf22oonzrf3jb.jpg",
    description: "Set of glass jars for storing dry ingredients.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 21",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927367/products/kitchen/norqjp3thrtuyhvgv4q0.jpg",
    description: "Compact food processor for chopping and mixing.",
    price: "Negotiable",
  },
  {
    name: "Kitchen 22",
    category: "kitchen",
    image: "https://res.cloudinary.com/dwxkxrrcr/image/upload/v1766927370/products/kitchen/enhatsvz3jcv7ilnmrmn.jpg",
    description: "Set of ceramic mugs perfect for hot beverages.",
    price: "Negotiable",
  },


];

async function main() {
  for (const p of products) {
    const created = await prisma.product.create({ data: p });
    console.log("Created product:", created.name);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });



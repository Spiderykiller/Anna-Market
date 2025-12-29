import { prisma } from "../lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Wooden Chair",
        description: "Comfortable wooden chair for living room.",
        price: "Negotiable",
        image: "https://res.cloudinary.com/your-cloud-name/image/upload/chair1.jpg",
        category: "Furniture",
      },
      {
        name: "Ceramic Vase",
        description: "Elegant vase to decorate your home.",
        price: "Negotiable",
        image: "https://res.cloudinary.com/your-cloud-name/image/upload/vase1.jpg",
        category: "Home Decor",
      },
      {
        name: "Stainless Steel Pan",
        description: "Durable pan for kitchen cooking.",
        price: "Negotiable",
        image: "https://res.cloudinary.com/your-cloud-name/image/upload/pan1.jpg",
        category: "Kitchen",
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());

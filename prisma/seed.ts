import { prisma } from "../lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Wooden Chair",
        description: "Comfortable wooden chair for living room.",
        price: 49.99,
        images: ["https://res.cloudinary.com/your-cloud-name/image/upload/chair1.jpg"],
        category: "Furniture",
      },
      {
        name: "Ceramic Vase",
        description: "Elegant vase to decorate your home.",
        price: 29.99,
        images: ["https://res.cloudinary.com/your-cloud-name/image/upload/vase1.jpg"],
        category: "Home Decor",
      },
      {
        name: "Stainless Steel Pan",
        description: "Durable pan for kitchen cooking.",
        price: 24.99,
        images: ["https://res.cloudinary.com/your-cloud-name/image/upload/pan1.jpg"],
        category: "Kitchen",
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());

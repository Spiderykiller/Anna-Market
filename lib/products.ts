import { prisma } from "@/lib/prisma";

export async function getAllProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductsByCategory(category: string) {
  return prisma.product.findMany({
    where: { category },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
  });
}

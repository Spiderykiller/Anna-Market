// app/products/page.tsx
import { prisma } from "@/lib/prisma";
import ProductsGrid from "@/components/Productgrid";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ProductsGrid products={products} />;
}



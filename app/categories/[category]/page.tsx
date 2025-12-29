import { prisma } from "@/lib/prisma";
import CategoryGrid from "@/components/Categorycard";

interface Params {
  params: {
    category: string;
  };
}

export const revalidate = 60;

export default async function CategoryPage({ params }: Params) {
  const { category } = await params; // unwrap

  // Query DB using the exact category slug from URL
  const products = await prisma.product.findMany({
    where: { category }, 
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center capitalize">
        {category.replace(/-/g, " ")} Products
      </h1>

      <CategoryGrid category={category} products={products} />
    </section>
  );
}


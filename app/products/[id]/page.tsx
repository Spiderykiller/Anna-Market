import { prisma } from "@/lib/prisma";
import ProductDetails from "@/components/Productdetails";
import Link from "next/link";

interface Params {
  params: {
    id: string;
  };
}

export const revalidate = 60;

export default async function ProductPage({ params }: Params) {
  const { id } = await params;

  const rawProduct = await prisma.product.findUnique({
    where: { id: String(id) },
  });

  if (!rawProduct) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link href="/categories" className="text-amber-500 mt-4 inline-block">
          Back to Categories
        </Link>
      </section>
    );
  }

  return (
    <ProductDetails
      product={{
        id: rawProduct.id,
        name: rawProduct.name,
        description: rawProduct.description,
        image: rawProduct.image,
        price: rawProduct.price ?? "Negotiable",
        category: rawProduct.category,
      }}
    />
  );
}



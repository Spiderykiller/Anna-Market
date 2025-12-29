"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

export default function CategoryGrid({
  category,
  products,
}: {
  category: string;
  products: Product[];
}) {
  if (products.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold capitalize">
          No Products Found in {category}
        </h1>
        <Link
          href="/categories"
          className="mt-6 inline-block px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
        >
          Back to Collections
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{
              scale: 1.06,
              rotateY: 6,
              boxShadow: "0px 20px 30px rgba(0,0,0,0.25)",
            }}
            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            {product.image ? (
              <div className="relative h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ) : (
              <div className="h-60 bg-gray-200 flex items-center justify-center">
                No Image
              </div>
            )}

            <div className="p-5">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-amber-500 font-semibold">
                  {product.price || "Negotiable"}
                </span>
                <Link
                  href={`/products/${product.id}`}
                  className="text-amber-500 hover:underline"
                >
                  View →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

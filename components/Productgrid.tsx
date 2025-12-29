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

export default function ProductsGrid({ products }: { products: Product[] }) {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Products</h1>

      {categories.map((category) => (
        <div key={category} className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 capitalize">
            {category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === category)
              .map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{
                    scale: 1.06,
                    rotateY: 6,
                    boxShadow: "0px 18px 30px rgba(0,0,0,0.25)",
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

                  <div className="p-4">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>

                    <p className="mt-2 font-semibold text-amber-500">
                      {product.price || "Negotiable"}
                    </p>

                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block mt-4 text-amber-500 font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

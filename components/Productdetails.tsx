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

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      {/* Image */}
      <div className="md:w-1/2">
        {product.image ? (
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-xl">
            No Image Available
          </div>
        )}
      </div>

      {/* Details */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold"
        >
          {product.name}
        </motion.h1>

        <p className="text-gray-700 text-lg">{product.description}</p>

        <p className="text-2xl font-semibold text-amber-500">
          {product.price}
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            href={`/categories/${product.category}`}
            className="px-6 py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition"
          >
            Back to Category
          </Link>

          <Link
            href="/contact"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

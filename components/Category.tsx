"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Furniture",
    image: "/images/categories/furnituress.jpg",
    description: "Premium sofas, tables, beds, and storage solutions crafted for comfort and style",
    slug: "furniture",
  },
  {
    name: "Home Decor",
    image: "/images/categories/home-decor.jpg",
    description: "Elegant vases, artwork, lighting, and accessories to personalize your space",
    slug: "home-decor"
  },
  {
    name: "Kitchen",
    image: "/images/categories/kitchen.jpg",
    description: "Stylish cookware, organizers, and kitchen essentials that blend function with beauty",
    slug: "kitchen",
  },
];

export default function Categories() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Our Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-5">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group perspective-1000"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>

                {/* Description */}
                <p className="text-white text-sm md:text-base">{category.description}</p>

                {/* Button links to category page */}
                <Link
                  href={`/categories/${category.slug}`}
                  className="px-6 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1 hover:shadow-lg mt-2"
                >
                  Explore {category.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

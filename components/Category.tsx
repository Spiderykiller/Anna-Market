"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Furniture",
    image: "/images/categories/furnituress.jpg",
    alt: "Modern furniture for sale in Addis Ababa Ethiopia — sofas, beds, and tables at Anna Market",
    description:
      "Premium sofas, tables, beds, and storage solutions crafted for comfort and style. Shop modern furniture in Addis Ababa.",
    slug: "furniture",
  },
  {
    name: "Home Decor",
    image: "/images/categories/home-decor.jpg",
    alt: "Home decor and interior accessories in Addis Ababa Ethiopia — vases, lighting, and artwork at Anna Market",
    description:
      "Elegant vases, artwork, lighting, and accessories to personalize your space. Curated home decor in Ethiopia.",
    slug: "home-decor",
  },
  {
    name: "Kitchen",
    image: "/images/categories/kitchen.jpg",
    alt: "Kitchen essentials and cookware in Addis Ababa Ethiopia — stylish organizers and utensils at Anna Market",
    description:
      "Stylish cookware, organizers, and kitchen essentials that blend function with beauty. Quality kitchen products in Ethiopia.",
    slug: "kitchen",
  },
];

export default function Categories() {
  return (
    <section className="w-full py-20 bg-gray-50" aria-label="Product Categories">
      <div className="max-w-7xl mx-auto px-4">

        {/* SEO heading — visible and crawlable */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Our Collections
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Explore our curated range of furniture, home decor, and kitchen essentials —
          designed for modern Ethiopian homes in Addis Ababa and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
          {categories.map((category, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group perspective-1000"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.alt}
                width={500}
                height={500}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Visible text below image — always readable by Google */}
              <div className="bg-white px-4 py-3">
                <h3 className="text-gray-800 text-lg font-bold">{category.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{category.description}</p>
              </div>

              {/* Hover overlay — visual effect only, not relied on for SEO */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                <Link
                  href={`/categories/${category.slug}`}
                  className="px-6 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore {category.name}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

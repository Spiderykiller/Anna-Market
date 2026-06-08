"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const aboutItems = [
  {
    title: "Our Mission",
    description:
      "At Anna Market, we curate high-quality furniture, home decor, and kitchen essentials for homes across Addis Ababa and Ethiopia. Our goal is simple — bring modern, affordable style to every Ethiopian home.",
    image: "/images/about/mission.jpg",
    alt: "Anna Market mission — curated furniture and home decor for Ethiopian homes in Addis Ababa",
  },
  {
    title: "Our Story",
    description:
      "Founded in Addis Ababa with a passion for interior design, Anna Market was built to fill a gap in the Ethiopian market — beautiful, functional home products that reflect the warmth and personality of Ethiopian living.",
    image: "/images/about/story.jpg",
    alt: "Anna Market story — furniture and lifestyle brand founded in Addis Ababa Ethiopia",
  },
  {
    title: "Our Vision",
    description:
      "We envision a future where every home in Ethiopia is a reflection of its owner's style. From modern sofas to kitchen organizers, we're here to make quality home living accessible across Addis Ababa and beyond.",
    image: "/images/about/vision.jpg",
    alt: "Anna Market vision — affordable modern home decor and furniture across Ethiopia",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white" aria-label="About Anna Market">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main heading with location keyword */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          About Anna Market
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Addis Ababa&apos;s destination for modern furniture, home decor, and kitchen essentials —
          curated to bring style and comfort to Ethiopian homes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Local trust paragraph — pure SEO signal, clean design */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Serving Customers Across Ethiopia
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Based in Addis Ababa, Anna Market delivers furniture and home lifestyle products
            to customers throughout Ethiopia. Whether you&apos;re furnishing a new apartment,
            upgrading your living room, or refreshing your kitchen — we have the pieces to
            make your space feel like home. Visit us or shop online and get your order
            delivered across Addis Ababa.
          </p>
        </div>

      </div>
    </section>
  );
}

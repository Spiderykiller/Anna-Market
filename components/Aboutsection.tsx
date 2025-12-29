"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aboutItems = [
  {
    title: "Our Mission",
    description:
      "At Anna Market, we curate high-quality furniture, decor, and kitchen essentials to elevate your lifestyle.",
    image: "/images/about/mission.jpg",
  },
  {
    title: "Our Story",
    description:
      "Founded with a passion for design, we bring together timeless pieces that combine style, comfort, and functionality.",
    image: "/images/about/story.jpg",
  },
  {
    title: "Our Vision",
    description:
      "We aim to inspire homes everywhere with curated collections that reflect personality and quality.",
    image: "/images/about/vision.jpg",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          About Anna Market
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our story and what drives us to curate the best collections for your home.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

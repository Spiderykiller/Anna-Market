"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Motion values for rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate mouse position relative to center (-1 to 1)
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Map mouse movement to rotation values
  rotateY.set(mousePos.x * 15); // rotate up to ±15 degrees
  rotateX.set(-mousePos.y * 15);

  const images = [
    { src: "furnitures.jpg", duration: 20 },
    { src: "decor.jpg", duration: 25 },
    { src: "kitchen-beauty.jpg", duration: 30 },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      
      {/* Background 3D images aligned in a row */}
      <div className="absolute inset-0 flex justify-center items-center gap-8 px-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="flex-1 h-96 relative rounded-lg shadow-lg overflow-hidden"
            animate={{ rotateY: i % 2 === 0 ? 360 : -360 }}
            transition={{ repeat: Infinity, duration: img.duration, ease: "linear" }}
            style={{
              rotateY: rotateY,
              rotateX: rotateX,
              z: i, // gives subtle layering
            }}
          >
            <Image
              src={`/images/${img.src}`}
              alt={img.src.split(".")[0]}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fadeIn">
          Transform Your Home With Style
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fadeIn delay-200">
          Furniture, Home Decor & Kitchen Beauty Essentials
        </p>
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-amber-500 text-white font-bold rounded-lg shadow-lg"
          >
            Explore Now
          </motion.button>
        </Link>
      </div>
    </section>
  );
}



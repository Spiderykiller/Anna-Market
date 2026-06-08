"use client";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import {
  FaEnvelope,
  FaTiktok,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    value: "Annafurniture00@gmail.com",
    icon: <FaEnvelope />,
    href: "mailto:Annafurniture00@gmail.com",
  },
  {
    label: "TikTok",
    value: "@AnnaMarket",
    icon: <FaTiktok />,
    href: "https://vm.tiktok.com/ZMDLsMbFJ/",
  },
  {
    label: "Telegram",
    value: "@annahomes1",
    icon: <FaTelegramPlane />,
    href: "https://t.me/annahomes1",
  },
  {
    label: "Instagram",
    value: "@AnnaMarket",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/AnnaMarket",
  },
  {
    label: "LinkedIn",
    value: "Anna Market",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/beemnet-abegaz",
  },
  {
    label: "Phone",
    value: "+251913747191",
    icon: <FaPhone />,
    href: "tel:+251983971973",
  },
  {
    label: "Visit Us",
    value: "Wesen, Addis Ababa, Ethiopia",
    icon: <FiMapPin />,
    href: "https://maps.app.goo.gl/YQEwBM7NWyCHZu1X8?g_st=atm",
  },
];

export default function ContactPage() {
  return (
    <section
      className="w-full py-20 bg-gray-50"
      aria-label="Contact Anna Market"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Visit our showroom in Wesen, Addis Ababa, or reach out through any
          of the channels below. We&apos;re happy to help you find the perfect
          furniture and home decor for your space.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("mailto") || contact.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-3 text-center transition-transform duration-300 cursor-pointer"
            >
              <span className="text-3xl text-black">{contact.icon}</span>
              <h3 className="text-xl font-semibold">{contact.label}</h3>
              <p className="text-gray-700 text-sm break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* NAP block — hidden visually but readable by Google */}
        <address className="mt-16 not-italic text-center text-gray-500 text-sm leading-relaxed">
          <strong>Anna Market</strong><br />
          Wesen, Addis Ababa, Ethiopia<br />
          <a href="tel:+251913747191" className="hover:text-amber-500 transition-colors">
            +251913747191
          </a>
          {" · "}
          <a href="mailto:Annafurniture00@gmail.com" className="hover:text-amber-500 transition-colors">
            Annafurniture00@gmail.com
          </a>
        </address>

      </div>
    </section>
  );
}

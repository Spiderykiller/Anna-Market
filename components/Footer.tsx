import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top row — Logo, Description, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Anna Market logo — furniture and home decor Addis Ababa"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="text-white font-bold text-lg">Anna Market</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Curated furniture, home decor, and kitchen essentials for
              modern Ethiopian homes. Based in Addis Ababa, serving customers
              across Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Products</Link></li>
              <li><Link href="/categories/furniture" className="hover:text-amber-400 transition-colors">Furniture</Link></li>
              <li><Link href="/categories/home-decor" className="hover:text-amber-400 transition-colors">Home Decor</Link></li>
              <li><Link href="/categories/kitchen" className="hover:text-amber-400 transition-colors">Kitchen</Link></li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm flex flex-col gap-2 leading-relaxed">
              <span>Wesen, Addis Ababa, Ethiopia</span>
              <a
                href="tel:+251913747191"
                className="hover:text-amber-400 transition-colors"
              >
                +251913747191
              </a>
              <a
                href="mailto:Annafurniture00@gmail.com"
                className="hover:text-amber-400 transition-colors"
              >
                Annafurniture00@gmail.com
              </a>
            </address>

            {/* Social icons */}
            <div className="flex gap-4 mt-5 text-xl">
              <a
                href="https://t.me/annahomes1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anna Market on Telegram"
                className="hover:text-amber-400 transition-colors"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://www.instagram.com/AnnaMarket"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anna Market on Instagram"
                className="hover:text-amber-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://vm.tiktok.com/ZMDLsMbFJ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anna Market on TikTok"
                className="hover:text-amber-400 transition-colors"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {date} Anna Market. All rights reserved. Addis Ababa, Ethiopia.</p>
          <p>
            Modern furniture &amp; home decor in Ethiopia —{" "}
            <Link href="/products" className="hover:text-amber-400 transition-colors">
              Shop Now
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}

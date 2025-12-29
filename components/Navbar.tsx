"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggleDropdown from "@/components/Themetoggle";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaCouch,
  FaPaintRoller,
  FaProductHunt,
  FaUtensils,
  FaBars,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";

export default function Navbarpage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/products?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <header className="bg-dark text-white border-bottom sticky-top">
      <div className="container-fluid px-2 px-lg-5">

        {/* ================= DESKTOP (LG+) ================= */}
        <div className="d-none d-lg-flex align-items-center justify-content-between py-2 gap-3">

          {/* LEFT */}
          <Link href="/" className="d-flex align-items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Anna Market Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="d-flex flex-column lh-1">
              <span className="fw-bold fs-4">Anna Market</span>
              <span className="fst-italic text-white-50 small">
                Curated for your lifestyle
              </span>
            </div>
          </Link>

          {/* CENTER */}
          <nav className="flex-grow-1">
            <ul className="nav justify-content-center gap-4">
              <NavItem href="/" icon={<FaHome />} label="Home" />
              <NavItem href="/categories/furniture" icon={<FaCouch />} label="Furniture" />
              <NavItem href="/categories/home-decor" icon={<FaPaintRoller />} label="Decor" />
              <NavItem href="/products" icon={<FaProductHunt />} label="Products" />
              <NavItem href="/categories/kitchen" icon={<FaUtensils />} label="Kitchen" />
            </ul>
          </nav>

          {/* RIGHT */}
          <div className="dropdown">
            <button
              className="btn btn-outline-light btn-sm"
              type="button"
              data-bs-toggle="dropdown"
            >
              <FaBars />
            </button>

            <ul className="dropdown-menu dropdown-menu-end shadow">
              <DropdownItem href="/about" icon={<FaInfoCircle />} label="About Us" />
              <DropdownItem href="/contact" icon={<FaPhone />} label="Contact Us" />
              <li><ThemeToggleDropdown /></li>
            </ul>
          </div>
        </div>

        {/* ================= MOBILE (< LG) ================= */}

        {/* ROW 1: LOGO + BRAND */}
        <div className="d-flex d-lg-none align-items-center gap-2 py-2 animate-fade-in">
          <Image
            src="/images/logo.png"
            alt="Anna Market Logo"
            width={28}
            height={28}
            className="object-contain"
          />
          <div className="d-flex flex-column lh-1">
            <span className="fw-bold fs-6">Anna Market</span>
            <span className="fst-italic text-white-50 small">
              Curated for your lifestyle
            </span>
          </div>
        </div>

        {/* ROW 2: NAV LINKS */}
        <nav className="d-lg-none overflow-auto animate-slide-up">
          <ul className="nav gap-3 py-1 flex-nowrap">
            <NavItem href="/" icon={<FaHome />} label="Home" />
            <NavItem href="/categories/furniture" icon={<FaCouch />} label="Furniture" />
            <NavItem href="/categories/home-decor" icon={<FaPaintRoller />} label="Decor" />
            <NavItem href="/products" icon={<FaProductHunt />} label="Products" />
            <NavItem href="/categories/kitchen" icon={<FaUtensils />} label="Kitchen" />
          </ul>
        </nav>

        {/* ROW 3: MENU BUTTON */}
        <div className="d-flex d-lg-none justify-content-end py-2 animate-fade-in">
          <div className="dropdown">
            <button
              className="btn btn-outline-light btn-sm"
              type="button"
              data-bs-toggle="dropdown"
            >
              <FaBars />
            </button>

            <ul className="dropdown-menu dropdown-menu-end shadow">
              <DropdownItem href="/about" icon={<FaInfoCircle />} label="About Us" />
              <DropdownItem href="/contact" icon={<FaPhone />} label="Contact Us" />
              <li><ThemeToggleDropdown /></li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
}

/* ---------- Reusable Components ---------- */

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li className="nav-item text-center flex-shrink-0">
      <Link
        href={href}
        className="nav-link text-white px-2 py-1 d-flex flex-column align-items-center"
      >
        <span className="fs-6">{icon}</span>
        <span className="small fw-semibold">{label}</span>
      </Link>
    </li>
  );
}

function DropdownItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="dropdown-item d-flex align-items-center gap-2"
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}












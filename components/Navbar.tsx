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
      <div className="container-fluid px-4 px-lg-5">
        <div className="d-flex align-items-center justify-content-between py-2 gap-3">

          {/* LEFT: LOGO */}
          <Link
            href="/"
            className="text-decoration-none text-white d-flex align-items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="Puma Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="d-flex flex-column lh-1">
              <span className="fw-bold fs-4">Anna Market</span>
              <span className="fs-6 text-white-50 fst-italic">
                Curated for your lifestyle
              </span>
            </div>
          </Link>

          {/* CENTER: NAV (ALWAYS VISIBLE) */}
          <nav className="flex-grow-1 mx-3">
            <ul className="nav gap-3 align-items-center justify-content-start flex-nowrap overflow-auto overflow-lg-visible navbar-scroll">
              <NavItem href="/" icon={<FaHome />} label="Home" />
              <NavItem href="/categories/furniture" icon={<FaCouch />} label="Furniture" />
              <NavItem href="/categories/home-decor" icon={<FaPaintRoller />} label="Decor" />
              <NavItem href="/products" icon={<FaProductHunt />} label="Products" />
              <NavItem href="/categories/kitchen" icon={<FaUtensils />} label="Kitchen" />
            </ul>
          </nav>

          {/* RIGHT: SEARCH + DROPDOWN */}
          <div className="d-flex align-items-center gap-3">

            {/* SEARCH (DESKTOP) */}
            <form onSubmit={handleSearch} className="d-none d-lg-block">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: 220 }}
              />
            </form>

            {/* DROPDOWN (ABOUT / CONTACT) */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light btn-sm"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaBars />
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow">
                <DropdownItem href="/about" icon={<FaInfoCircle />} label="About Us" />
                <DropdownItem href="/contact" icon={<FaPhone />} label="Contact Us" />
                <li>
                   <ThemeToggleDropdown />
                </li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </div>

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
    <li className="nav-item text-center nav-3d">
      <Link
        href={href}
        className="nav-link text-white px-2 py-1 d-flex flex-column align-items-center"
      >
        <span className="fs-5 mb-1">{icon}</span>
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







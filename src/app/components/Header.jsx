"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "../../../public/webImages/logo.png";

const links = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blog" },
  { name: "Destinations", href: "/destinations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={logo}
              alt="Zieara Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Search Bar (Desktop only) */}
        <div className="hidden md:block flex-1 px-6">
          <div className="relative w-full max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe0000]"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`pb-1 border-b-2 text-sm font-medium transition-all ${
                pathname === link.href
                  ? "border-[#fe0000] text-[#fe0000]"
                  : "border-transparent hover:text-[#fe0000]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 pt-4 pb-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b-2 pb-1 text-base ${
                  pathname === link.href
                    ? "border-[#fe0000] text-[#fe0000]"
                    : "border-transparent hover:text-[#fe0000]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="relative w-full mt-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fe0000]"
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

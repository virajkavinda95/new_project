import React from "react";
import logo from "../../../public/webImages/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000000] mt-20 py-8 text-center text-sm text-[#8D8D8D]">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-6">
          <Image
            src={logo}
            className="object-contain w-100 h-auto"
            alt="footer-logo"
          />
          <span className="text-center capitalize">
            Read more to get more knowledge
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="hover:text-white transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="/destinations"
            className="hover:text-white transition-colors duration-200"
          >
            Destination
          </Link>
          <Link
            href="/destinations"
            className="hover:text-white transition-colors duration-200"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>

          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
        </nav>

        {/* Divider */}
        <hr className="border-[#8D8D8D] mb-4" />

        {/* Copyright */}
        <p className="text-xs">
          &copy; 2025 Zieara Blogger. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

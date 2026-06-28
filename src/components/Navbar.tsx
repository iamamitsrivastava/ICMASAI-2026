"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Committee", href: "/committee" },
    { label: "Scope", href: "/scope" },
    { label: "Topics", href: "/topics" },
    { label: "Call for Papers", href: "/call-for-papers" },
    { label: "Important Dates", href: "/#dates" },
    { label: "Publishing Ethics", href: "/publishing-ethics" },
    { label: "Venue", href: "/venue" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2 sm:py-3 md:py-4" : "bg-transparent py-3 sm:py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="ICMASAI 2026 Conference"
              width={150}
              height={75}
              className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <a
                  href={item.href}
                  className={`inline-flex whitespace-nowrap h-10 xl:h-12 items-center justify-center rounded-md bg-transparent px-2 xl:px-3 py-2 xl:py-3 text-sm xl:text-base font-medium transition-colors text-gray-800 hover:bg-white0 hover:text-black ${
                    pathname === item.href ? "text-red-600 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex lg:flex items-center space-x-1 md:space-x-2 xl:space-x-4">
            <a href="/registration">
              <button className="sketch-button text-xs md:text-sm xl:text-base">
                Register
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-800 hover:bg-white0 hover:text-black transition-colors flex-shrink-0"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 sm:mt-3 py-3 sm:py-4 sketch-border bg-white shadow-sm">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className={`block py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm transition-colors hover:text-red-600 ${
                    pathname === item.href ? "text-red-600 font-semibold" : "text-gray-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </div>
            ))}
            <div className="mt-3 sm:mt-4 px-2 sm:px-3 space-y-1.5 sm:space-y-2">
              <a href="/registration" className="block">
                <button className="sketch-button w-full text-xs sm:text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                  Register
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
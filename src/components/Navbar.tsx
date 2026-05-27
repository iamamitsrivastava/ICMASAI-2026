"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { conferenceConfig } from "@/config/conferenceConfig";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const conferenceSubmenu = [
    { label: "Scope", href: "/scope" },
    { label: "Topics", href: "/topics" },
    { label: "Committee", href: "/committee" },
    { label: "Venue", href: "/venue" },
    { label: "Registration", href: "/registration" },
  ];

  const authorsSubmenu = [
    { label: "Call for Papers", href: "/call-for-papers" },
    { label: "Important Dates", href: "/#dates" },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Conference", hasDropdown: true, submenu: conferenceSubmenu },
    { label: "Authors Information", hasDropdown: true, submenu: authorsSubmenu },
    { label: "Contact", href: "/contact" },
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
              alt="ICQTDBT 2026 Conference"
              width={150}
              height={75}
              className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2" ref={navRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="relative"
                  >
                    <button
                      className={`flex items-center gap-1 bg-transparent hover:bg-gray-100 text-gray-800 hover:text-black text-sm xl:text-base font-medium px-2 xl:px-4 py-2 h-10 xl:h-12 rounded-md transition-colors ${
                        item.submenu?.some(sub => pathname === sub.href) ? "text-red-600 font-semibold" : ""
                      }`}
                    >
                      {item.label}
                      {/* <ChevronDown className="w-4 h-4" /> */}
                    </button>
                    
                    {openDropdown === item.label && (
                      <div className="absolute left-0 top-full pt-2 w-48 z-50">
                        <div className="bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                          <div className="p-2">
                            {item.submenu?.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className={`block rounded-md p-3 text-sm font-medium leading-none transition-colors text-gray-700 hover:bg-red-50 hover:text-red-700 ${
                                  pathname === subItem.href ? "bg-red-100 text-red-700 font-semibold" : ""
                                }`}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href!}
                    className={`inline-flex h-10 xl:h-12 items-center justify-center rounded-md bg-transparent px-3 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-medium transition-colors text-gray-800 hover:bg-gray-100 hover:text-black ${
                      pathname === item.href ? "text-red-600 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex lg:flex items-center space-x-1 md:space-x-2 xl:space-x-4">
            <a href="/registration">
              <button className="border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 px-2 py-1.5 text-xs md:px-3 md:py-2 md:text-sm xl:px-6 xl:text-base font-medium rounded-md transition-all hover:shadow-md">
                Register
              </button>
            </a>
            <a href="/call-for-papers">
              <button className="bg-gradient-to-r from-red-600 to-blue-600 hover:shadow-lg text-white px-2 py-1.5 text-xs md:px-3 md:py-2 md:text-sm xl:px-6 xl:text-base font-medium rounded-md transition-all">
                Submit Paper
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-black transition-colors flex-shrink-0"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 sm:mt-3 py-3 sm:py-4 border-t border-gray-200 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div className="py-1.5 sm:py-2 px-2 sm:px-3">
                    <p className="font-semibold text-gray-800 mb-1.5 sm:mb-2 text-xs sm:text-sm">{item.label}</p>
                    <div className="pl-2 sm:pl-3 space-y-1">
                      {item.submenu?.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-1 text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href!}
                    className="block py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm text-gray-800 hover:text-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-3 sm:mt-4 px-2 sm:px-3 space-y-1.5 sm:space-y-2">
              <a href="/registration" className="block">
                <button className="w-full py-2 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Register
                </button>
              </a>
              <a href="/call-for-papers" className="block">
                <button className="w-full py-2 text-xs sm:text-sm bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-md hover:shadow-lg transition-all">
                  Submit Paper
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
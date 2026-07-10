"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    {
      label: "About",
      href: "#",
      subItems: [
        { label: "About Conference", href: "/#about-conference" },
        { label: "Glimpses of Conference", href: "/about/glimpses" },
        { label: "Previous Conference", href: "/about/previous-conferences" },
      ]
    },
    { label: "Conference Committee", href: "/committee" },
    { label: "Topics", href: "/topics" },
    { label: "Themes", href: "/themes" },
    { label: "Call for Papers", href: "/call-for-papers" },
    { label: "Publishing Ethics", href: "/publishing-ethics" },
    { label: "Important Dates", href: "/#dates" },
    { label: "Keynote Speakers", href: "/#speakers" },
    { label: "Venue", href: "/venue" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800 py-3 md:py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 xl:h-20">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
            <Image
              src="/assets/parul-logo-new.png"
              alt="Parul University NAAC A++"
              width={180}
              height={60}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
            />
            <span className="h-6 sm:h-8 w-[1px] bg-gray-700 self-center" />
            <Image
              src="/assets/aisct-logo-new.png"
              alt="AISCT Logo"
              width={180}
              height={60}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 rounded-full -mt-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className={`inline-flex whitespace-nowrap h-10 2xl:h-12 items-center justify-center rounded-md bg-transparent px-1.5 xl:px-2 2xl:px-3 py-2 2xl:py-3 text-[10px] xl:text-xs 2xl:text-sm transition-all duration-300 text-white hover:text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 ${
                    pathname === item.href || ((item as any).subItems && (item as any).subItems.some((sub: any) => pathname === sub.href))
                      ? "font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] border-b-2 border-white"
                      : "font-medium"
                  }`}
                >
                  {item.label}
                  {(item as any).subItems && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </a>

                {(item as any).subItems && (
                  <div className="absolute left-0 top-full hidden group-hover:block pt-2">
                    <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl overflow-hidden min-w-[320px] flex flex-col py-2">
                      {(item as any).subItems.map((subItem: any) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors block"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-1 md:space-x-2 xl:space-x-4">
            <a href="/registration" className="relative group flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 blur opacity-60 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-black font-bold text-xs md:text-sm xl:text-base px-5 py-2 rounded-none border-2 border-[#FFD700] hover:from-[#FFC107] hover:to-[#FFD700] transition-all duration-300">
                Register
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl bg-[#0f172a]/95 backdrop-blur-xl border border-gray-800 shadow-2xl overflow-hidden origin-top"
            >
              <div className="p-4 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-xl text-base transition-all duration-300 ${
                        pathname === item.href || (item.subItems && item.subItems.some((sub) => pathname === sub.href))
                          ? "bg-yellow-400/10 text-yellow-400 font-bold border border-yellow-400/20 shadow-[inset_0_0_15px_rgba(250,204,21,0.1)]"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={(e) => {
                        if (item.subItems) {
                          e.preventDefault();
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        {item.subItems && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        )}
                      </div>
                    </Link>

                    {item.subItems && (
                      <div className="pl-6 pr-2 py-2 flex flex-col space-y-1 border-l border-gray-800 ml-6 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 pb-2 mt-2 border-t border-gray-800">
                  <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)} className="relative group flex w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-60 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <button className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-black font-bold text-lg hover:from-[#FFC107] hover:to-[#FFD700] transition-all duration-300">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
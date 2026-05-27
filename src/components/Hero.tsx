"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/assets/gate.jpg" 
          alt="ICQTDBT 2026 Conference" 
          fill
          className="object-cover object-center w-full h-full"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/65 to-background/85" />
      </div>
      
      {/* India Today Achievement Badge - Desktop & Tablet Only */}
      <div className="hidden sm:block absolute top-24 md:top-28 lg:top-32 right-2 sm:right-4 z-20 max-w-xs animate-fade-in group" style={{ animationDelay: "0.8s" }}>
        <div className="relative bg-gradient-to-br from-white via-white to-red-50 backdrop-blur-md rounded-xl p-3 shadow-xl border border-red-100 hover:border-red-300 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden">
          
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Achievement Ribbon */}
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl shadow-md">
            <span className="flex items-center gap-1 text-xs">
              🏆 TOP 40
            </span>
          </div>
          
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse" />
              <Image
                src="/assets/india-today-logo.png"
                alt="India Today Logo"
                width={32}
                height={32}
                className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-md" />
            </div>
            <div>
              <h3 className="font-black text-red-600 text-base group-hover:text-red-700 transition-colors duration-300 tracking-tight">
                India Today
              </h3>
              <p className="text-xs text-red-500 font-semibold uppercase tracking-wider">SURVEY 2025</p>
            </div>
          </div>
          
          {/* Achievement Content */}
          <div className="relative z-10">
            <div className="bg-gradient-to-r from-black/5 to-red-600/5 rounded-lg p-2 mb-2 border border-red-100 group-hover:border-red-200 transition-all duration-300">
              <p className="text-xs font-bold text-black mb-1">
                🎓 Parul Institute of Computer Application
              </p>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-0.5">
                    {/* 4 Full Stars */}
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={`star-mobile-${i}`}
                        className="w-3.5 h-3.5 text-yellow-400 fill-current flex-shrink-0"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    
                    {/* Half Star */}
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                    >
                      <defs>
                        <linearGradient id="half-star-mobile">
                          <stop offset="50%" stopColor="#FBBF24" />
                          <stop offset="50%" stopColor="#D1D5DB" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#half-star-mobile)"
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    
                  </div>
                  <span className="text-xs text-gray-600 font-medium whitespace-nowrap">Excellence</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <p className="text-xs font-bold leading-relaxed">
                <span className="text-yellow-200">🏆 RANKED</span> Among the 
                <span className="font-black text-yellow-100 mx-1">TOP 40 BCA COLLEGES</span> 
                across India
              </p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                <span className="text-xs text-red-100">Certified Excellence</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-yellow-200 font-semibold">2025</span>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Elements */}
          <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
              <svg className="w-3 h-3 text-red-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
          </div>
          
        </div>
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-4xl flex flex-col justify-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in text-left">
            <span className="bg-gradient-to-r from-red-700 via-red-800 to-black bg-clip-text text-transparent drop-shadow-lg">ICQTDBT 2026</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 animate-fade-in text-left text-black" style={{ animationDelay: "0.2s" }}>
            International Conference on
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-red-700 via-red-800 to-black bg-clip-text text-transparent animate-fade-in text-left drop-shadow-lg leading-tight pb-2" style={{ animationDelay: "0.3s" }}>
            Quantum Technologies & Digital Business Transformation
          </h2>

          {/* Conference Details */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <span className="text-black font-semibold text-sm sm:text-base">May 4, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 font-bold" />
              <span className="text-black font-semibold text-sm sm:text-base">Parul University, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <span className="font-bold text-black text-sm sm:text-base">500+ Researchers Expected</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link href="/call-for-papers">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-black hover:shadow-glow text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover:from-red-700 hover:to-gray-900 transition-all duration-300">
                Submit Your Paper
              </Button>
            </Link>
            <Link href="/call-for-papers">
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover-lift text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 glass-card border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                View Call for Papers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile India Today Badge Component
const MobileIndiaTodayBadge = () => {
  return (
    <section className="sm:hidden py-4 bg-gradient-to-br from-gray-50 to-red-50/30">
      <div className="container mx-auto px-3">
        <div className="w-full">
          <div className="relative bg-gradient-to-br from-white via-white to-red-50 backdrop-blur-md rounded-lg p-3 shadow-xl border border-red-100 group">
            
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            {/* Achievement Ribbon */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg shadow-md z-10">
              <span className="flex items-center gap-1">
                🏆 TOP 40
              </span>
            </div>
            
            {/* Header Section */}
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20 animate-pulse" />
                <Image
                  src="/assets/india-today-logo.png"
                  alt="India Today Logo"
                  width={28}
                  height={28}
                  className="object-contain relative z-10 drop-shadow-lg"
                />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-md" />
              </div>
              <div>
                <h3 className="font-black text-red-600 text-sm tracking-tight">
                  India Today
                </h3>
                <p className="text-xs text-red-500 font-semibold uppercase tracking-wider">SURVEY 2025</p>
              </div>
            </div>
            
            {/* Achievement Content */}
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-black/5 to-red-600/5 rounded-md p-2 mb-2 border border-red-100">
                <p className="text-xs font-bold text-black mb-1">
                  🎓 Parul Institute of Computer Application
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                      {/* 4 Full Stars */}
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={`star-${i}`}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      
                      {/* Half Star */}
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                      >
                        <defs>
                          <linearGradient id="half-star">
                            <stop offset="50%" stopColor="#FBBF24" />
                            <stop offset="50%" stopColor="#D1D5DB" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#half-star)"
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                  <span className="text-xs text-gray-600 font-medium">Excellence</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-md p-2.5 shadow-lg">
                <p className="text-xs font-bold leading-relaxed">
                  <span className="text-yellow-200">🏆 RANKED</span> Among the 
                  <span className="font-black text-yellow-100 mx-1">TOP 40 BCA COLLEGES</span> 
                  across India
                </p>
                <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-white/20">
                  <span className="text-xs text-red-100">Certified Excellence</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-200 font-semibold">2025</span>
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

// Export both components
const HeroWithMobileBadge = () => {
  return (
    <>
      <Hero />
      <MobileIndiaTodayBadge />
    </>
  );
};

export default HeroWithMobileBadge;
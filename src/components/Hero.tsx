"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">


      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 bg-white">
        <Image 
          src="/assets/sketch-hero.jpg" 
          alt="ICMASAI 2026 Background" 
          fill
          className="object-cover object-center w-full h-full opacity-20"
          priority
        />
        {/* Gradient Overlay for shading from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-4xl flex flex-col justify-center">
          {/* Main Title Area */}
          <div className="border-l-4 border-red-600 pl-5 sm:pl-8 py-2 mb-8 sm:mb-12">
            <h2 className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-bold text-slate-600 mb-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              International Conference on
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-blue-950 mb-4 sm:mb-6 animate-fade-in drop-shadow-sm leading-none" style={{ animationDelay: "0.2s" }}>
              ICMASAI <span className="text-red-600">2026</span>
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 animate-fade-in leading-tight max-w-3xl" style={{ animationDelay: "0.3s" }}>
              Multi-Agent Systems in Artificial Intelligence
            </h3>
          </div>

          {/* Conference Details */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base">May 4, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 font-bold" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base">Parul University, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <span className="font-bold text-slate-800 text-sm sm:text-base">500+ Researchers Expected</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link href="/call-for-papers">
              <button className="sketch-button text-xl">
                Submit Your Paper
              </button>
            </Link>
            <Link href="/call-for-papers">
              <button className="sketch-button text-xl">
                View Call for Papers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
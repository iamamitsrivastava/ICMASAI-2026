"use client";

import { Calendar, MapPin, Users } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <Image 
          src="/assets/main_gate_v3.jpg" 
          alt="AISCT 2026-27 Background" 
          fill
          className="object-cover object-center w-full h-full opacity-60"
          priority
        />
        {/* Dark Gradient Overlay for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <motion.div 
          className="max-w-4xl flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title Area */}
          <motion.div variants={itemVariants} className="border-l-4 border-red-500 pl-5 sm:pl-8 py-2 mb-8 sm:mb-12">
            <h2 className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-bold text-gray-300 drop-shadow-md mb-3">
              International Conference on
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-yellow-100 mb-4 sm:mb-6 drop-shadow-2xl leading-none">
              AISCT <span className="text-red-500 drop-shadow-2xl">2026-27</span>
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 drop-shadow-xl leading-tight max-w-3xl">
              Artificial Intelligence and Sustainable Computing Technologies
            </h3>
          </motion.div>

          {/* Conference Details */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-text-glow">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="text-white font-semibold text-sm sm:text-base">December 4-5 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-text-glow">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 font-bold" />
              <span className="text-white font-semibold text-sm sm:text-base">Parul University, India</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-text-glow">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="font-bold text-white text-sm sm:text-base">500+ Participants Expected</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <Link href="/call-for-papers" className="sketch-button text-xl animate-button-glow">Submit Your Paper</Link>
            <Link href="/call-for-papers" className="sketch-button text-xl animate-button-glow">View Call for Papers</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
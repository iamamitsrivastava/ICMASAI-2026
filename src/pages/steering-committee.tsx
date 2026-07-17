"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Globe } from "lucide-react";
import Image from "next/image";
import { conferenceConfig, CommitteeMember } from "../config/conferenceConfig";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProfileCard = ({ member, roleFallback }: { member: CommitteeMember, roleFallback: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-[320px] w-full">
    <div className="relative w-64 h-64 rounded-full border-[3px] border-yellow-400 overflow-hidden mb-8 shadow-[0_0_20px_rgba(250,204,21,0.2)] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:border-yellow-300">
      {member.image ? (
        <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
      ) : (
        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
          <Globe className="w-16 h-16 text-yellow-500/30" />
        </div>
      )}
    </div>
    <p className="text-yellow-400 font-bold uppercase text-sm tracking-wider mb-2">
      {member.role || roleFallback}
    </p>
    <h3 className="text-yellow-100 text-xl font-bold mb-1 leading-snug">{member.name}</h3>
    <p className="text-gray-400 text-sm leading-snug">
      {member.title}
      {member.organization && `, ${member.organization}`}
    </p>
    {member.email && (
      <div className="flex items-center justify-center mt-3 text-sm text-gray-500">
        <Mail className="w-4 h-4 mr-1" />
        <span className="truncate">{member.email}</span>
      </div>
    )}
  </motion.div>
);

const SteeringCommittee = () => {
  const steering = conferenceConfig.committee.steeringCommittee;

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans flex flex-col">
      <Navbar />
      <section className="pt-40 pb-32 relative overflow-hidden flex-grow flex items-center justify-center">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-100 mb-4 font-serif">
              Steering Committee
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-24">
            {steering && steering.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
                {steering.map((member, i) => (
                  <ProfileCard key={`steering-${i}`} member={member} roleFallback="STEERING MEMBER" />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SteeringCommittee;

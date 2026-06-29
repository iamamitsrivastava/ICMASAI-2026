"use client";

import { Building2, Trophy, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Sponsors = () => {
  const sponsorTiers = {
    platinum: [
      { name: "IEEE", logo: "IEEE" },
      { name: "Springer", logo: "SPR" },
    ],
    gold: [
      { name: "Scopus", logo: "SCO" },
      { name: "IET", logo: "IET" },
      { name: "ACM", logo: "ACM" },
    ],
    silver: [
      { name: "Tech Corp", logo: "TC" },
      { name: "Innovation Labs", logo: "IL" },
      { name: "Data Systems", logo: "DS" },
      { name: "AI Research", logo: "AIR" },
    ],
  };

  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-950">Sponsors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Supported by leading organizations in technology and research
          </p>
        </motion.div>

        {/* Will be annouced soon */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Will be announced soon
        </motion.div>

        {/* Platinum Sponsors */}
        {/* <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-yellow-500" />
            <h3 className="text-xl font-bold">Platinum Sponsors</h3>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsorTiers.platinum.map((sponsor, index) => (
              <div
                key={index}
                className=" p-8 rounded-xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-40 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-950">{sponsor.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Gold Sponsors */}
        {/* <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-4 h-4 text-yellow-600" />
            <h3 className="text-lg font-bold">Gold Sponsors</h3>
            <Star className="w-4 h-4 text-yellow-600" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsorTiers.gold.map((sponsor, index) => (
              <div
                key={index}
                className=" p-6 rounded-xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{sponsor.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Silver Sponsors */}
        {/* <div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-3 h-3 text-gray-400" />
            <h3 className="text-base font-bold">Silver Sponsors</h3>
            <Star className="w-3 h-3 text-gray-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsorTiers.silver.map((sponsor, index) => (
              <div
                key={index}
                className=" p-4 rounded-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-24 h-12 bg-gradient-to-br from-muted to-muted/50 rounded flex items-center justify-center">
                  <span className="text-sm font-bold text-muted-foreground">{sponsor.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Sponsors;
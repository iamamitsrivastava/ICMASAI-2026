"use client";

import { Award, TrendingUp, Building, Globe, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
  const featuredAchievement = {
    icon: TrendingUp,
    title: "India Today Ranking",
    subtitle: "Top 40 BCA Colleges",
    description: "Parul Institute of Computer Application has been ranked among the top 40 BCA colleges across India in a recent survey conducted by India Today",
    highlight: true,
    featured: true
  };

  const partnersDetails = [
    {
      name: "Universitas of Teknokrat",
      logo: "/assets/partners/universitas-teknokra-indonesia-logo.png",
      website: "https://teknokrat.ac.id/",
      type: "International",
      contact: "+62 852-7910-3452"
    },
    {
      name: "SSM Infotech Solutions Pvt. Ltd",
      logo: "/assets/partners/SSM-logo.avif",
      website: "#",
      type: "National",
      contact: "7486022024, 99988816019"
    },
    {
      name: "Arth Consultancy Services",
      logo: "/assets/partners/arth-consultancy-services-logo.webp",
      website: "#",
      type: "National",
      contact: "9377718823"
    },
    {
      name: "EXCELR Edtech Pvt. Ltd.",
      logo: "/assets/partners/excelr.png",
      website: "#",
      type: "National",
      contact: "8010245639"
    },
    {
      name: "Infolink University College, Ethiopia",
      logo: "/assets/partners/inflolink.png",
      website: "#",
      type: "International",
      contact: "251916581753"
    },
    {
      name: "Akash Technolabs",
      logo: "/assets/partners/akash-technolabs.png",
      website: "#",
      type: "National",
      contact: "8000147888"
    },
    {
      name: "NYSHA SOLUTIONS",
      logo: "/assets/partners/LOGO-MAIN.png",
      website: "#",
      type: "National",
      contact: "9727772202"
    },
    {
      name: "MyinfoPie",
      logo: "/assets/partners/myinfopie-white-amd-black.png",
      website: "#",
      type: "National",
      contact: "8401584017"
    },
    {
      name: "Happy Window Skill Services Private Ltd.",
      logo: "/assets/partners/skill.png",
      website: "#",
      type: "National",
      contact: "9967763315"
    },
    {
      name: "Enlighten Infosystem Vadodara,Gujarat",
      logo: "/assets/partners/EnliLogoNewPNG.png",
      website: "#",
      type: "National",
      contact: "7990343306"
    },
    {
      name: "Cybertronix Solution Vadodara,Gujarat",
      logo: "/assets/partners/cybt-logo.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Encoderspro Private Limited Kanpur,UP",
      logo: "/assets/partners/enpro_logo.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Baroda Institute of Technology",
      logo: "/assets/partners/baroda.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Brainybeam Pvt. Lmt.",
      logo: "/assets/partners/brainylogo.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Acciojob",
      logo: "/assets/partners/acciojob-logo-color.png",
      website: "#",
      type: "National",
      contact: ""
    }
  ];

  // Split partners into two rows for different sliding directions
  const firstRowPartners = partnersDetails.slice(0, Math.ceil(partnersDetails.length / 2));
  const secondRowPartners = partnersDetails.slice(Math.ceil(partnersDetails.length / 2));

  // Partner Card Component - Fixed Layout
  const PartnerCard = ({ partner }: { 
    partner: { 
      name: string; 
      logo: string; 
      website: string; 
      type: string; 
      contact: string; 
    } 
  }) => (
    <div className="flex-shrink-0 w-80 mx-3">
      <div className="sketch-card p-4 group cursor-pointer relative overflow-hidden h-32">
        <div className="flex items-center gap-3 h-full">
          {/* Logo Container - Fixed Size */}
          <div className="relative w-24 h-24 sketch-border overflow-hidden transition-all duration-300 flex-shrink-0">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Partner Info - Fixed Layout */}
          <div className="flex-1 min-w-0 h-full flex flex-col justify-center">
            {/* Badge - Fixed Position */}
            <div className="mb-1">
              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                partner.type === 'International' 
                  ? 'bg-white0 text-blue-700' 
                  : 'bg-white0 text-green-700'
              }`}>
                {partner.type}
              </span>
            </div>
            
            {/* Partner Name - Fixed Overflow */}
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors duration-300 leading-tight mb-1 line-clamp-2">
              {partner.name}
            </h3>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
      </div>
    </div>
  );

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 " />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Associated Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations to advance research, innovation, and technological excellence
          </p>
        </motion.div>
        
        {/* Partners Slider - Fixed Animation */}
        <motion.div 
          className="space-y-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* First Row - Sliding Forward */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-forward">
              {/* Duplicate the array for seamless loop */}
              {[...firstRowPartners, ...firstRowPartners, ...firstRowPartners].map((partner, index) => (
                <PartnerCard key={`forward-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* Second Row - Sliding Backward */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-backward">
              {/* Duplicate the array for seamless loop */}
              {[...secondRowPartners, ...secondRowPartners, ...secondRowPartners].map((partner, index) => (
                <PartnerCard key={`backward-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Sections */}
        <motion.div 
          className="mt-12 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* About the Conference Card */}
          <div className="sketch-card p-8 md:p-12 !bg-slate-900/90 border-slate-700 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2">Introduction</h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    About the Conference
                  </h3>
                </div>
                
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  Welcome to the International Conference on Multi-Agent Systems in Artificial Intelligence 2026 (<b className="text-white">ICMASAI</b>). This premier international conference brings together 
                  researchers, academicians, industry professionals, and students to share their knowledge 
                  and experience in emerging technologies. The conference provides a platform for presenting 
                  novel ideas, discussing recent developments, and establishing collaborations.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  With a focus on practical applications and theoretical foundations, the conference covers 
                  a wide range of topics in artificial intelligence and multi-agent systems. All accepted papers 
                  will be published in peer-reviewed proceedings and indexed in major databases.
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 w-full relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700">
                <Image 
                  src="/assets/pu_admin_side.webp" 
                  alt="Conference Venue" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";


import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {

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
          id="about-conference"
          className="mt-12 space-y-8 pt-20 -mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* About the Conference Card */}
          <div className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden">
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
                  Welcome to the International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27). This premier international conference brings together 
                  researchers, academicians, industry professionals, and students to share their knowledge 
                  and experience in emerging technologies. The conference provides a platform for presenting 
                  novel ideas, discussing recent developments, and establishing collaborations.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  With a focus on practical applications and theoretical foundations, the conference covers 
                  a wide range of topics in artificial intelligence and sustainable computing technologies. All accepted papers 
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

          {/* About FITCS Card */}
          <div className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md mt-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2">Introduction</h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    About Faculty of IT And Computer (FITCS)
                  </h3>
                </div>
                
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  Science, Parul University FITCS Department, Parul Institute of Computer Application secured <b className="text-white">48th Rank in INDIA TODAY </b>  Survey out of 1207 BCA Colleges from India. With the ever-growing scope of digitalization and technological innovation in today&apos;s time, the Information Technology and Computer Science experts have taken a role of vital significance.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  The Faculty of IT and Computer Science, endeavors to shape and develop skilled personnel who have the practical knowledge and the fundamental understanding of the various aspects within the digital space which allows them to innovate and develop cutting‑edge solutions in this field. The faculty offers an enriching curriculum which seeks to impart and develop the contemporary understanding of the vast dimensions which are related to this field thereby providing students with an up to date knowledge of these trends.
                </p>
                <p className="text-slate-300 text-lg text-justify leading-relaxed">
                  The faculty is also equipped with state of the art facilities and computer laboratories which go on to provide insightful competencies in coding, web development on various computer languages along with an exposure to the Internet of Things. Our elite league of faculties and experts go on to provide students with the most enriching practical understanding to the trends of the industry, making our IT & Computer Science students the competent human resource for this field. So, take the first step towards a vibrant journey in IT & Computer Science.
                </p>
              </div>

              {/* Image Section - Slideshow */}
              <div className="flex-1 w-full relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700">
                <style>{`
                  @keyframes fadeSlide {
                    0% { opacity: 1; transform: scale(1.05); }
                    25% { opacity: 1; transform: scale(1.05); }
                    33% { opacity: 0; transform: scale(1); }
                    92% { opacity: 0; transform: scale(1); }
                    100% { opacity: 1; transform: scale(1.05); }
                  }
                  .slide-1 { animation: fadeSlide 15s infinite; }
                  .slide-2 { animation: fadeSlide 15s infinite; animation-delay: 5s; opacity: 0; }
                  .slide-3 { animation: fadeSlide 15s infinite; animation-delay: 10s; opacity: 0; }
                `}</style>
                <div className="absolute inset-0 slide-1">
                  <Image 
                    src="/assets/fitcs/fitcs-1.png" 
                    alt="FITCS Lab 1" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="absolute inset-0 slide-2">
                  <Image 
                    src="/assets/fitcs/fitcs-2.png" 
                    alt="FITCS Lab 2" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="absolute inset-0 slide-3">
                  <Image 
                    src="/assets/fitcs/fitcs-3.png" 
                    alt="FITCS Drone 3" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Previous Conferences Card */}
          <div id="previous-conferences" className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md mt-12 overflow-hidden">
            <div>
              <h4 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2">History</h4>
              <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md mb-8">
                Previous Conferences
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-sm uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/4">Conference</th>
                    <th className="py-4 px-6 font-semibold w-7/12">Publication Details</th>
                    <th className="py-4 px-6 font-semibold text-right w-2/12">Proceedings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {[
                    {
                      name: "PICET 2025",
                      detail: "PAPER PRESENTED AT PICET 2025 CONFERENCE SUCCESSFULLY PUBLISHED IN THE IEEE XPLORE.",
                      link: "https://ieeexplore.ieee.org"
                    },
                    {
                      name: "PICET 2025",
                      detail: "PAPER PRESENTED AT PICET 2025 CONFERENCE SUCCESSFULLY PUBLISHED IN THE IET DIGITAL LIBRARY.",
                      link: "https://ietresearch.onlinelibrary.wiley.com"
                    },
                    {
                      name: "PICET 2024",
                      detail: "PAPER PRESENTED AT PICET 2024 CONFERENCE SUCCESSFULLY PUBLISHED IN IEEE XPLORE.",
                      link: "https://ieeexplore.ieee.org"
                    },
                    {
                      name: "PICET 2023",
                      detail: "PAPER PRESENTED AT PICET 2023 CONFERENCE SUCCESSFULLY PUBLISHED IN AIP CONFERENCE PROCEEDINGS. .",
                      link: "https://pubs.aip.org/aip/acp"
                    },
                    {
                      name: "PICET 2022",
                      detail: "PAPER PRESENTED AT PICET 2022 CONFERENCE SUCCESSFULLY PUBLISHED IN AIP CONFERENCE PROCEEDINGS.",
                      link: "https://pubs.aip.org/aip/acp"
                    }
                  ].map((conf, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors duration-300">
                      <td className="py-4 px-6 font-bold text-blue-400 whitespace-nowrap text-base">{conf.name}</td>
                      <td className="py-4 px-6 text-slate-300 text-sm leading-relaxed">
                        <div className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-1.5 flex-shrink-0" />
                          <span>{conf.detail}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a 
                          href={conf.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                          View Proceeding
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
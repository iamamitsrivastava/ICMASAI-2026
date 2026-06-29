"use client";


import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const Speakers = () => {
  const speakers = [
    {
      name: "Dr.Seshathiri Dhanasekaran",
      title: "Researcher",
      organization: "UiT The Arctic University of Norway, Tromso",
      image: "/assets/seshathiri.jpg",
      keynote: "",
    },
    {
      name: "Murugappan MNM",
      title: "Co-Founder and COO",
      organization: "iNextLabs",
      image: "/assets/speaker2.jpeg",
      keynote: "",
    },
    {
      name: "Dr. Wilfred Blessing N.R",
      title: "Professor in Computing and Information Sciences Department",
      organization: "University of Technology and Applied Sciences, Ibri, Government of Oman",
      image: "/assets/wilfred Blessing.png",
      keynote: "",
    },
    {
      name: "Dr. Prateek Agrawal",
      title: "Director - SoCSE & SoIT | Professor - CSE",
      organization: "Research Fellow - INTI International, Malaysia | Ex - AAU, Austria | Ex - LPU, Punjab | Ex - SGTU, Gurugram | Mentored 10K+ Students | AI Researcher | Book Editor | IPR",
      image: "/assets/prateek.jpg",
      keynote: "",
    },
    
  ];

  return (
    <section id="speakers" className="py-20 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Keynote Speakers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Learn from world-renowned experts and industry leaders
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <div className="relative flex justify-center pt-10 pb-6 bg-gradient-to-b from-gray-800/80 to-transparent border-b border-gray-800/50 overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] ring-4 ring-gray-700 bg-gray-800 group-hover:ring-yellow-400/50 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] group-hover:scale-105 transition-all duration-500 z-10">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-colors duration-300">{speaker.name}</h3>
                <p className="text-sm font-semibold text-yellow-500 mb-3 drop-shadow-[0_0_2px_rgba(234,179,8,0.4)]">{speaker.title}</p>
                <div className="w-12 h-1 bg-gray-700 mb-4 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-transparent transition-all duration-500" />
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{speaker.organization}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
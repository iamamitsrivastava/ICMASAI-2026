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
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

const Speakers = () => {
  const speakers = [
    {
      name: "Dr.Seshathiri Dhanasekaran",
      title: "Researcher",
      organization: "UiT The Arctic University of Norway, Tromso",
      image: "/assets/seshathiri.jpg",
      about: "Dr. Seshathiri Dhanasekaran is a distinguished researcher focusing on advanced computational models, artificial intelligence, and their applications in solving complex engineering and scientific problems. He has published extensively in international journals and conferences.",
    },
    {
      name: "Murugappan MNM",
      title: "Co-Founder and COO",
      organization: "iNextLabs",
      image: "/assets/speaker2.jpeg",
      about: "Murugappan MNM drives operational excellence and strategic growth at iNextLabs. With a deep passion for innovation and technology, he has been instrumental in building scalable AI and machine learning solutions that transform businesses and enhance operational efficiency.",
    },
    {
      name: "Dr. Wilfred Blessing N.R",
      title: "Professor in Computing and Information Sciences Department",
      organization: "University of Technology and Applied Sciences, Ibri, Government of Oman",
      image: "/assets/wilfred Blessing.png",
      about: "Dr. Wilfred Blessing N.R is a seasoned academician with expertise spanning across artificial intelligence, data science, and computing technologies. He demonstrates a strong commitment to academic excellence and research in the global technology landscape.",
    },
    {
      name: "Dr. Prateek Agrawal",
      title: "Director - SoCSE & SoIT | Professor - CSE",
      organization: "Research Fellow - INTI International, Malaysia | Ex - AAU, Austria | Ex - LPU, Punjab | Ex - SGTU, Gurugram | Mentored 10K+ Students | AI Researcher | Book Editor | IPR",
      image: "/assets/prateek.jpg",
      about: "An active AI researcher and book editor, Dr. Agrawal serves as a Research Fellow at INTI International, Malaysia. Having previously worked at prominent universities across Austria and India, he has mentored over 10,000 students and holds numerous patents (IPR).",
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
              className="group relative h-[450px] w-full [perspective:1000px] cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-xl">

                {/* Front Side: Photo and Basic Details */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center border-t border-gray-700/50">
                    <h3 className="text-lg font-bold text-white drop-shadow-md text-center leading-tight">{speaker.name}</h3>
                    <p className="text-xs text-gray-300 mt-1 text-center line-clamp-2">{speaker.title}</p>
                  </div>
                </div>

                {/* Back Side: In-depth Info */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-y-auto bg-gray-900 border border-gray-700 p-6 flex flex-col items-center text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  <h3 className="text-xl font-bold mb-2 text-yellow-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{speaker.name}</h3>
                  <p className="text-sm font-semibold text-yellow-500 mb-4 drop-shadow-[0_0_2px_rgba(234,179,8,0.4)]">{speaker.title}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6 shrink-0" />
                  
                  <div className="text-sm text-gray-300 leading-relaxed text-left space-y-4 w-full">
                    <div>
                      <strong className="text-white">Organization:</strong>
                      <p className="mt-1 text-gray-400">{speaker.organization}</p>
                    </div>
                    <div>
                      <strong className="text-white">About:</strong>
                      <p className="mt-1 text-gray-400">{speaker.about}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
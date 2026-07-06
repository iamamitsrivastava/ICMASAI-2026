"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const tracks = [
  {
    number: "TRACK 1",
    emoji: "🧠",
    title: "Artificial Intelligence and Intelligent Systems",
    color: "from-blue-500/20 to-indigo-600/20",
    border: "hover:border-blue-500/60",
    glow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]",
  },
  {
    number: "TRACK 2",
    emoji: "🌱",
    title: "Sustainable Computing and Green Technologies",
    color: "from-green-500/20 to-emerald-600/20",
    border: "hover:border-green-500/60",
    glow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]",
  },
  {
    number: "TRACK 3",
    emoji: "💡",
    title: "Smart Technologies and Intelligent Applications",
    color: "from-purple-500/20 to-violet-600/20",
    border: "hover:border-purple-500/60",
    glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
  },
  {
    number: "TRACK 4",
    emoji: "🛡️",
    title: "Data Science, Cybersecurity and Emerging Technologies",
    color: "from-yellow-500/20 to-amber-600/20",
    border: "hover:border-yellow-500/60",
    glow: "hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]",
  },
  {
    number: "TRACK 5",
    emoji: "🌍",
    title: "AI Applications for Sustainable Development",
    color: "from-cyan-500/20 to-teal-600/20",
    border: "hover:border-cyan-500/60",
    glow: "hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]",
  },
];

const ConferenceTracks = () => {
  return (
    <section id="tracks" className="py-20 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-yellow-400 font-bold mb-3">
            International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27)
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Conference{" "}
            <span className="text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">
              Themes &amp; Tracks
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Submit your research across cutting-edge AI and sustainable computing domains
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative rounded-2xl border border-gray-700/60 bg-gradient-to-br ${track.color} backdrop-blur-sm p-6 transition-all duration-300 ${track.border} ${track.glow} cursor-default w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md`}
            >
              {/* Track number badge */}
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 bg-white/5 px-3 py-1 rounded-full border border-gray-700/40">
                {track.number}
              </span>

              {/* Emoji */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {track.emoji}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white leading-snug group-hover:text-yellow-200 transition-colors duration-300">
                {track.title}
              </h3>

              {/* Hover underline accent */}
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400/70 to-transparent transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConferenceTracks;
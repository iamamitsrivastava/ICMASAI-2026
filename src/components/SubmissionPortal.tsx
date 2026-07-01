"use client";

import { Upload, FileText, CheckCircle, Clock } from "lucide-react";


import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

const SubmissionPortal = () => {
  const submissionSteps = [
    {
      icon: FileText,
      title: "Prepare Your Paper",
      description: "Format your paper according to IEEE guidelines",
    },
    {
      icon: Upload,
      title: "Submit Online",
      description: "Upload through our secure submission portal",
    },
    {
      icon: Clock,
      title: "Review Process",
      description: "Double-blind peer review by experts",
    },
    {
      icon: CheckCircle,
      title: "Notification",
      description: "Receive acceptance decision via email",
    },
  ];



  return (
    <section id="submission" className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Paper <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]">Submission</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Submit your research and join the global academic community
          </p>
        </motion.div>

        {/* Submission Steps */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {submissionSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 sketch-border flex items-center justify-center text-blue-400 bg-slate-900 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-110 transition-transform animate-[pulse_3s_ease-in-out_infinite] z-10 relative">
                  <step.icon className="w-8 h-8 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                </div>
                {index < submissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 z-0">
                    {/* Animated dashed line */}
                    <motion.div 
                      className="w-full h-full border-t-2 border-dashed border-blue-500/50"
                      animate={{ backgroundPositionX: ["100%", "0%"] }}
                      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                      style={{ backgroundImage: "linear-gradient(90deg, transparent 50%, rgba(96,165,250,0.8) 50%)", backgroundSize: "20px 100%" }}
                    />
                  </div>
                )}
              </div>
              <h3 className="font-bold mb-2 text-yellow-100">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SubmissionPortal;
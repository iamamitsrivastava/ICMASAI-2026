"use client";

import { motion, Variants } from "framer-motion";

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

const responsibilities = [
  {
    title: "PROGRAM CHAIR RESPONSIBILITIES",
    points: [
      "Supervise the review process, ensuring each paper undergoes scrutiny by at least two qualified reviewers.",
      "Implement a plagiarism check for all submitted papers.",
      "Oversee the completion of IEEE copyright forms by all authors, mandating conference registration for using the IEEE electronic copyright form.",
      "Ensure all accepted papers are presented at the conference ; un-presented."
    ]
  },
  {
    title: "TECHNICAL COMMITTEE CHAIR RESPONSIBILITIES",
    points: [
      "Coordinate the review of proceedings papers within the committee, ensuring prompt, expert peer reviews and summarizing evaluations within designated deadlines.",
      "Possess the authority to reject papers that don't meet outlined requirements without further review.",
      "Organize technical sessions sponsored by the committee during the meeting.",
      "Allocate tracks to designated experts within the committee."
    ]
  },
  {
    title: "REVIEWER RESPONSIBILITIES",
    points: [
      "Uphold confidentiality regarding both reviewed papers and review content until publication.",
      "Conduct selective, criteria-based reviews as per the conference's review form.",
      "Disclose conflicts of interest encountered during the review process."
    ]
  },
  {
    title: "ORGANIZING COMMITTEE RESPONSIBILITIES",
    points: [
      "Promote the event across various platforms.",
      "Identify potential conference sponsors.",
      "Develop branding material for event promotion.",
      "Manage venue and presentation logistics.",
      "Propose reviewers from reputable academic and industrial institutions.",
      "Recommend keynote speakers and session chairs."
    ]
  }
];

const rejectionReasons = [
  "Plagiarism or recycling well-established ideas without acknowledgment.",
  "Repetition of ideas from previous publications.",
  "Significant errors, poor writing, or unclear presentation.",
  "Commercial focus rather than technical merit."
];

const CommitteeResponsibilities = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-gray-300">
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-blue-400 font-semibold tracking-widest uppercase mb-2">Committee</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-100 mb-6 font-serif">
              Responsibilities
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-blue-200/80 max-w-3xl mx-auto text-sm md:text-base font-medium tracking-wide uppercase bg-blue-950/30 py-3 px-6 rounded-lg border border-blue-900/50">
              EMPOWERING INNOVATIONS : WHERE PRECISION MEETS RIGOR IN CONFERENCE EXCELLENCE
            </p>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {responsibilities.map((section, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-[#162032] p-8 rounded-xl border border-blue-900/50 hover:border-yellow-400/30 transition-all duration-300 shadow-lg">
                <h3 className="text-yellow-400 font-bold uppercase text-sm md:text-base tracking-wider mb-6 text-center border-b border-blue-900/50 pb-4">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <div className="text-center mb-10">
              <h2 className="text-blue-200/80 text-sm md:text-base font-bold tracking-wide uppercase bg-blue-950/30 py-3 px-6 rounded-lg border border-blue-900/50 inline-block">
                ACCEPTANCE CRITERIA & REASON FOR REJECTION
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Acceptance Criteria */}
              <motion.div variants={itemVariants} className="bg-[#162032] p-8 rounded-xl border border-blue-900/50 hover:border-green-400/30 transition-all duration-300 shadow-lg">
                <h3 className="text-green-400 font-bold uppercase text-sm md:text-base tracking-wider mb-6 text-center border-b border-blue-900/50 pb-4">
                  ACCEPTANCE CRITERIA
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Adherence to conference paper format and the 6-page limit.</span>
                  </li>
                  <li className="flex flex-col text-sm leading-relaxed mt-4">
                    <div className="flex items-start mb-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Meeting at least one of the following criteria :</span>
                    </div>
                    <ul className="pl-6 space-y-2 mt-2 border-l-2 border-blue-900/50 ml-1">
                      <li className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                        Importance to conference tracks
                      </li>
                      <li className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                        Originality, design, and framework
                      </li>
                      <li className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                        Clarity in abstract and methods
                      </li>
                      <li className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                        Potential contribution to diversity, equity, inclusion and access
                      </li>
                      <li className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                        Clarity in English language
                      </li>
                    </ul>
                  </li>
                </ul>
              </motion.div>

              {/* Reasons for Rejection */}
              <motion.div variants={itemVariants} className="bg-[#162032] p-8 rounded-xl border border-blue-900/50 hover:border-red-400/30 transition-all duration-300 shadow-lg">
                <h3 className="text-red-400 font-bold uppercase text-sm md:text-base tracking-wider mb-6 text-center border-b border-blue-900/50 pb-4">
                  REASONS FOR REJECTION
                </h3>
                <ul className="space-y-4">
                  {rejectionReasons.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommitteeResponsibilities;

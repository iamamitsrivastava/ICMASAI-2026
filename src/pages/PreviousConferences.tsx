"use client";

import React from "react";
import { motion } from "framer-motion";

const PreviousConferences = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans">
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-100 mb-6 font-serif">
              Previous Conferences
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore the history and publications of our past conferences.
            </p>
          </div>

          <motion.div
            id="previous-conferences"
            className="w-full rounded-2xl border border-slate-700 p-8 md:p-12 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
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
                      link: "https://digital-library.theiet.org/toc/icp/2025/7?__cf_chl_f_tk=G5fPLpuLLwDwMwoG_DgtEYZd8Xqhycliw4r3l9L.PdE-1783314387-1.0.1.1-K7FKFPx1bgowZJ8vSOGj8qE7DJoQ6yGpT6bOlXU5Rnk"
                    },
                    {
                      name: "PICET 2025",
                      detail: "PAPER PRESENTED AT PICET 2025 CONFERENCE SUCCESSFULLY PUBLISHED IN THE IET DIGITAL LIBRARY.",
                      link: "https://digital-library.theiet.org/toc/icp/2025/7?__cf_chl_f_tk=G5fPLpuLLwDwMwoG_DgtEYZd8Xqhycliw4r3l9L.PdE-1783314387-1.0.1.1-K7FKFPx1bgowZJ8vSOGj8qE7DJoQ6yGpT6bOlXU5Rnk"
                    },
                    {
                      name: "PICET 2024",
                      detail: "PAPER PRESENTED AT PICET 2024 CONFERENCE SUCCESSFULLY PUBLISHED IN IEEE XPLORE.",
                      link: "https://ieeexplore.ieee.org/xpl/conhome/10716037/proceeding"
                    },
                    {
                      name: "PICET 2023",
                      detail: "PAPER PRESENTED AT PICET 2023 CONFERENCE SUCCESSFULLY PUBLISHED IN AIP CONFERENCE PROCEEDINGS. .",
                      link: "https://pubs.aip.org/aip/acp/issue/3107/1"
                    },
                    {
                      name: "PICET 2022",
                      detail: "PAPER PRESENTED AT PICET 2022 CONFERENCE SUCCESSFULLY PUBLISHED IN AIP CONFERENCE PROCEEDINGS.",
                      link: "https://pubs.aip.org/aip/acp/issue/2855/1?__cf_chl_f_tk=Y0HIcRxbqkDCjSAWsDATOFvR0z2qTsehKBUtylCenq8-1783314194-1.0.1.1-orgsB96QkMomCOf0tNImQkemBxx7Yt37xh01EWC.TtU"
                    }
                  ].map((conf, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors duration-300">
                      <td className="py-4 px-6 font-bold text-yellow-400 whitespace-nowrap text-base">{conf.name}</td>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PreviousConferences;

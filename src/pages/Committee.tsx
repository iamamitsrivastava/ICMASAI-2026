"use client";

import { Mail, Globe } from "lucide-react";
import { conferenceConfig, CommitteeMember } from "@/config/conferenceConfig";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const ProfileCard = ({ member, roleFallback }: { member: CommitteeMember, roleFallback: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-[280px] w-full">
    <div className="relative w-48 h-48 rounded-full border-[3px] border-yellow-400 overflow-hidden mb-5 shadow-[0_0_20px_rgba(250,204,21,0.2)] group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:border-yellow-300">
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

const TextProfileCard = ({ member, roleFallback }: { member: CommitteeMember, roleFallback: string }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-[#162032] rounded-xl border border-blue-900/50 hover:border-yellow-400/50 hover:bg-[#1a2639] transition-all duration-300 w-full max-w-[300px] hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:-translate-y-1">
    <p className="text-yellow-400 font-bold uppercase text-xs tracking-wider mb-2">
      {member.role || roleFallback}
    </p>
    <h3 className="text-yellow-100 text-lg font-bold mb-1 leading-snug">{member.name}</h3>
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

const Committee = () => {
  const chiefPatron = conferenceConfig.committee.chiefPatrons[0];
  const coChiefPatrons = conferenceConfig.committee.chiefPatrons.slice(1);
  const patrons = conferenceConfig.committee.patrons;
  const organizingChairs = conferenceConfig.committee.organizingChair;
  const advisory = conferenceConfig.committee.advisoryCommittee;
  const internationalAdvisoryCommittee = conferenceConfig.committee.internationalAdvisoryCommittee;
  const technical = conferenceConfig.committee.technicalCommittee;
  const publication = conferenceConfig.committee.publicationCommittee;
  const organization = conferenceConfig.committee.organizationCommittee;
  const promotion = conferenceConfig.committee.promotionCommittee;

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans">
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-100 mb-6 font-serif">
              Conference Committees
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Meet the dedicated team of experts and professionals who are working to make {conferenceConfig.name} {conferenceConfig.year} a premier scientific event.
            </p>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col gap-24">
            
            {/* Chief Patron (Centered) */}
            {chiefPatron && (
              <div className="flex justify-center">
                <ProfileCard member={chiefPatron} roleFallback="CHIEF PATRON" />
              </div>
            )}

            {/* Co-Chief Patrons */}
            {coChiefPatrons && coChiefPatrons.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
                {coChiefPatrons.map((member, i) => (
                  <ProfileCard key={`co-${i}`} member={member} roleFallback="CO-CHIEF PATRON" />
                ))}
              </div>
            )}

            {/* Patrons */}
            {patrons && patrons.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
                {patrons.map((member, i) => (
                  <TextProfileCard
                    key={`p-${i}`}
                    member={member}
                    roleFallback={member.role || (i % 2 === 0 ? "PATRON" : "CO-PATRON")}
                  />
                ))}
              </div>
            )}
            
            {/* Organizing Chairs */}
            {organizingChairs && organizingChairs.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 mt-8">
                <div className="w-full text-center mb-4">
                  <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
                    Organizing Chairs
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
                  </h2>
                </div>
                {organizingChairs.map((member, i) => (
                  <TextProfileCard key={`oc-${i}`} member={member} roleFallback="ORGANIZING CHAIR" />
                ))}
              </div>
            )}

            {/* Advisory Committee */}
            {advisory && advisory.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-8">
                <div className="w-full text-center mb-4">
                  <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
                    National Advisory Committee
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
                  </h2>
                </div>
                {advisory.map((member, i) => (
                  <TextProfileCard key={`ac-${i}`} member={member} roleFallback="ADVISORY MEMBER" />
                ))}
              </div>
            )}

{/* International Advisory Committee */}
{internationalAdvisoryCommittee && internationalAdvisoryCommittee.length > 0 && (
  <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-8">
    <div className="w-full text-center mb-4">
      <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
        International Advisory Committee
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
      </h2>
    </div>
    {internationalAdvisoryCommittee.map((member, i) => (
      <TextProfileCard key={`iac-${i}`} member={member} roleFallback="INTERNATIONAL ADVISORY MEMBER" />
    ))}
  </div>
)}

            {/* Technical Program Committee */}
            {technical && technical.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-8">
                <div className="w-full text-center mb-4">
                  <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
                    Technical Program Committee
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
                  </h2>
                </div>
                {technical.map((member, i) => (
                  <TextProfileCard key={`tc-${i}`} member={member} roleFallback="TECHNICAL MEMBER" />
                ))}
              </div>
            )}

            {/* Publication Committee */}
            {publication && publication.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-8">
                <div className="w-full text-center mb-4">
                  <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
                    Publication Committee
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
                  </h2>
                </div>
                {publication.map((member, i) => (
                  <TextProfileCard key={`pub-${i}`} member={member} roleFallback="PUBLICATION MEMBER" />
                ))}
              </div>
            )}

            {/* Organization Committee */}
            {organization && organization.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-8">
                <div className="w-full text-center mb-4">
                  <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
                    Organization Committee
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
                  </h2>
                </div>
                {organization.map((member, i) => (
                  <TextProfileCard key={`org-${i}`} member={member} roleFallback="ORGANIZATION MEMBER" />
                ))}
              </div>
            )}

            {/* Promotion Committee */}
            {promotion && promotion.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-8">
                <div className="w-full text-center mb-4">
                  <h2 className="text-2xl font-bold text-yellow-100 font-serif relative inline-block">
                    Promotion Committee
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
                  </h2>
                </div>
                {promotion.map((member, i) => (
                  <TextProfileCard key={`pro-${i}`} member={member} roleFallback="PROMOTION MEMBER" />
                ))}
              </div>
            )}

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Committee;
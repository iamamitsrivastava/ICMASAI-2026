import React from "react";
import { Check, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SponsorshipPage() {
  const sponsorshipData = [
    { feature: "Logo on the Conference Website", diamond: true, gold: true, silver: true, inKind: true },
    { feature: "Logo on Event Signage", diamond: true, gold: true, silver: true, inKind: false },
    { feature: "Logo on Conference Publication", diamond: true, gold: true, silver: true, inKind: false },
    { feature: "Display Table", diamond: true, gold: true, silver: true, inKind: false },
    { feature: "Display of Company Pull up at Selected Areas", diamond: true, gold: true, silver: true, inKind: false },
    { feature: "No. Of Complimentary Registration", diamond: "3 Persons", gold: "2 Persons", silver: "2 Persons", inKind: false },
    { feature: "Session/Interaction with Conference Audience", diamond: true, gold: false, silver: false, inKind: false },
    { feature: "Networking Lunch with AISCT Executive Team & Policy Makers", diamond: true, gold: true, silver: false, inKind: false },
    { feature: "Accommodation at Conference Venue", diamond: "3 Persons", gold: "2 Persons", silver: false, inKind: false },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <div className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white leading-tight">
          AISCT 2026 <br className="hidden sm:block" />
          <span className="text-yellow-400">Sponsorship Opportunities</span>
        </h1>

        <div className="bg-slate-900/50 p-6 md:p-10 rounded-2xl border border-slate-800 shadow-xl mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            AISCT 2026 (International Conference on Artificial Intelligence and Sustainable Computing Technologies)
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Faculty of Information Technology & Computer Science, Parul University would like to invite your esteemed organization/Industries to become a sponsor/knowledge partner for AISCT 2026 to 2027 to be held in Feb 06 2027 at Parul University, Vadodara.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-3">Why Sponsor with the AISCT 2026?</h3>
          <p className="text-slate-300 leading-relaxed mb-8">
            AISCT 2026 conference sponsors are exposed to a highly engaged community of researchers, academicians, industry associates and policy making people from the globe.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-3">Sponsoring a AISCT 2026 conference gives you,</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-12">
            <li>Access to Influential Professionals from reputed organizations</li>
            <li>Internal and External Networking opportunities</li>
            <li>Unique Marketing and Brand Exposure</li>
            <li>Interaction with diverse young minds from Engineering and Science fraternity</li>
            <li>Future Collaboration</li>
            <li>Policy Discussion Opportunities</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mb-4 text-center">Sponsorship Packages</h3>
          <p className="text-slate-300 text-center mb-8">
            AISCT 2026 offers flexible sponsorship options to align with the objectives including day, session and event sponsorship packages.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-lg mb-12">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-slate-800 text-yellow-400">
                <tr>
                  <th scope="col" className="px-6 py-4 rounded-tl-xl">Category<br/><span className="text-white normal-case">Amount</span></th>
                  <th scope="col" className="px-6 py-4 text-center">Diamond Sponsorship<br/><span className="text-blue-400 normal-case font-medium">3 Lac or Above</span></th>
                  <th scope="col" className="px-6 py-4 text-center">Gold Sponsorship<br/><span className="text-blue-400 normal-case font-medium">Rs. 2 Lac</span></th>
                  <th scope="col" className="px-6 py-4 text-center">Silver Sponsorship<br/><span className="text-blue-400 normal-case font-medium">Rs. 1 Lac</span></th>
                  <th scope="col" className="px-6 py-4 text-center rounded-tr-xl">In-Kind Sponsorship<br/><span className="text-blue-400 normal-case font-medium">Rs. 50K</span></th>
                </tr>
              </thead>
              <tbody>
                {sponsorshipData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/50 bg-slate-800/20 hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-200">{row.feature}</td>
                    
                    <td className="px-6 py-4 text-center">
                      {typeof row.diamond === 'boolean' ? (row.diamond ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <Minus className="w-5 h-5 mx-auto text-slate-600" />) : <span className="text-slate-300 font-semibold">{row.diamond}</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.gold === 'boolean' ? (row.gold ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <Minus className="w-5 h-5 mx-auto text-slate-600" />) : <span className="text-slate-300 font-semibold">{row.gold}</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.silver === 'boolean' ? (row.silver ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <Minus className="w-5 h-5 mx-auto text-slate-600" />) : <span className="text-slate-300 font-semibold">{row.silver}</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.inKind === 'boolean' ? (row.inKind ? <Check className="w-5 h-5 mx-auto text-green-400" /> : <Minus className="w-5 h-5 mx-auto text-slate-600" />) : <span className="text-slate-300 font-semibold">{row.inKind}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Bank Details */}
            <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 uppercase tracking-wider text-center">Bank Details for Sponsorship</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="font-semibold text-white">Bank Name</span>
                  <span>HDFC Bank</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="font-semibold text-white">Account Name</span>
                  <span>R & D Centre Unit of PU</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="font-semibold text-white">Account No</span>
                  <span className="font-mono">50100269520370</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="font-semibold text-white">Branch</span>
                  <span>Sangam Char Rasta</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="font-semibold text-white">IFSC Code</span>
                  <span className="font-mono">HDFC0009277</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-semibold text-white">MICR Code</span>
                  <span className="font-mono">390240031</span>
                </div>
              </div>
            </div>

            {/* Contact Persons */}
            <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 uppercase tracking-wider text-center">Contact Persons</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white text-lg">Dr. Ramachandran P</h4>
                  <p className="text-slate-400 text-sm">Sponsorship Team, AISCT - 2026</p>
                  <p className="text-slate-300 mt-1">Contact No: <a href="tel:+919384345662" className="text-blue-400 hover:text-blue-300">+91-93843 45662</a></p>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-lg">Dr. Saswati Chatterjee</h4>
                  <p className="text-slate-400 text-sm">Sponsorship Team, AISCT - 2026</p>
                  <p className="text-slate-300 mt-1">Contact No: <a href="tel:+919874410748" className="text-blue-400 hover:text-blue-300">+91-98744 10748</a></p>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-slate-300 mb-2">
                    <span className="font-semibold text-white">Email:</span> <a href="mailto: fitcs.conference@paruluniversity.ac.in" className="text-yellow-400 hover:text-yellow-300">fitcs.conference@paruluniversity.ac.in</a>
                  </p>
                  <p className="text-slate-300">
                    For Sponsorship Brochure, <a href="fitcs.conference@paruluniversity.ac.in" className="text-blue-400 hover:text-blue-300 hover:underline">Click Here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

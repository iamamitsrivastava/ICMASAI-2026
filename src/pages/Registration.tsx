import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Users, Globe, Calendar } from "lucide-react";
import { conferenceConfig } from "@/config/conferenceConfig";
import { formatDateSafe } from "@/lib/date-utils";

const Registration = () => {
  const categories = [
    {
      title: "Student",
      earlyBird: conferenceConfig.registrationFees.earlyBird.student,
      regular: conferenceConfig.registrationFees.regular.student,
      currency: "INR",
      benefits: [
        "Conference kit",
        "Lunch & refreshments",
        "Certificate of participation",
        "Access to all sessions"
      ]
    },
    {
      title: "Academic",
      earlyBird: conferenceConfig.registrationFees.earlyBird.academic,
      regular: conferenceConfig.registrationFees.regular.academic,
      currency: "INR",
      benefits: [
        "Conference kit",
        "Lunch & refreshments",
        "Certificate of participation",
        "Access to all sessions",
        "Conference proceedings"
      ]
    },
    {
      title: "Industry",
      earlyBird: conferenceConfig.registrationFees.earlyBird.industry,
      regular: conferenceConfig.registrationFees.regular.industry,
      currency: "INR",
      benefits: [
        "Conference kit",
        "Lunch & refreshments",
        "Certificate of participation",
        "Access to all sessions",
        "Conference proceedings",
        "Networking dinner"
      ]
    },
    {
      title: "International",
      earlyBird: conferenceConfig.registrationFees.earlyBird.international,
      regular: conferenceConfig.registrationFees.regular.international,
      currency: "USD",
      benefits: [
        "Conference kit",
        "Lunch & refreshments",
        "Certificate of participation",
        "Access to all sessions",
        "Conference proceedings",
        "Networking dinner",
        "Airport pickup"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Registration
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Register now and join us at {conferenceConfig.name} {conferenceConfig.year}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-500 shadow-[0_0_10px_rgba(250,204,21,0.5)] border-none" variant="secondary">Limited Time Offer</Badge>
              <h2 className="text-2xl font-bold text-yellow-100 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Early Bird Registration</h2>
              <p className="text-gray-300">
                Register before {formatDateSafe(conferenceConfig.dates.earlyRegistration, { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })} to avail discounted rates
              </p>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-700">
                    <th className="p-4 font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Category</th>
                    <th className="p-4 font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Early Bird</th>
                    <th className="p-4 font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Regular</th>
                    <th className="p-4 font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Benefits Included</th>
                    <th className="p-4 font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <td className="p-4 font-semibold align-top whitespace-nowrap text-white">
                        <div className="flex items-center gap-2">
                          {category.title === "Student" && <Users className="w-5 h-5 text-gray-300" />}
                          {category.title === "Academic" && <Globe className="w-5 h-5 text-gray-300" />}
                          {category.title === "Industry" && <CreditCard className="w-5 h-5 text-gray-300" />}
                          {category.title === "International" && <Globe className="w-5 h-5 text-gray-300" />}
                          {category.title}
                        </div>
                      </td>
                      <td className="p-4 align-top whitespace-nowrap">
                        <div className="text-green-400 font-bold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">{category.currency} {category.earlyBird}</div>
                      </td>
                      <td className="p-4 align-top whitespace-nowrap">
                        <div className="text-gray-500 line-through">{category.currency} {category.regular}</div>
                      </td>
                      <td className="p-4 align-top">
                        <ul className="space-y-1 text-sm text-gray-300">
                          {category.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 mr-2 flex-shrink-0 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 align-top">
                        <Button className="w-full text-xs whitespace-nowrap bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all">
                          Register
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1 text-white">
              <div className="text-center group">
                <Calendar className="w-12 h-12 text-white mx-auto mb-4 transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h3 className="text-lg font-semibold mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Registration Deadline</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {new Date(conferenceConfig.dates.registration).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1 text-white">
              <div className="text-center group">
                <CreditCard className="w-12 h-12 text-white mx-auto mb-4 transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h3 className="text-lg font-semibold mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Payment Methods</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Bank transfer, Credit/Debit card, UPI
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1 text-white">
              <div className="text-center group">
                <Users className="w-12 h-12 text-white mx-auto mb-4 transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h3 className="text-lg font-semibold mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Group Discount</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  10% off for groups of 5 or more
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
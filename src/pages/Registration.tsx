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
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-950">
            Registration
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Register now and join us at {conferenceConfig.name} {conferenceConfig.year}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 sketch-card mb-12">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="secondary">Limited Time Offer</Badge>
              <h2 className="text-2xl font-bold text-blue-950 mb-2">Early Bird Registration</h2>
              <p className="text-muted-foreground">
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
                  <tr className="border-b-2 border-[#222]">
                    <th className="p-4 font-bold text-blue-950">Category</th>
                    <th className="p-4 font-bold text-blue-950">Early Bird</th>
                    <th className="p-4 font-bold text-blue-950">Regular</th>
                    <th className="p-4 font-bold text-blue-950">Benefits Included</th>
                    <th className="p-4 font-bold text-blue-950">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index} className="border-b border-[#222]/20 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-semibold align-top whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {category.title === "Student" && <Users className="w-5 h-5 text-black" />}
                          {category.title === "Academic" && <Globe className="w-5 h-5 text-black" />}
                          {category.title === "Industry" && <CreditCard className="w-5 h-5 text-black" />}
                          {category.title === "International" && <Globe className="w-5 h-5 text-black" />}
                          {category.title}
                        </div>
                      </td>
                      <td className="p-4 align-top whitespace-nowrap">
                        <div className="text-green-600 font-bold">{category.currency} {category.earlyBird}</div>
                      </td>
                      <td className="p-4 align-top whitespace-nowrap">
                        <div className="text-muted-foreground line-through">{category.currency} {category.regular}</div>
                      </td>
                      <td className="p-4 align-top">
                        <ul className="space-y-1 text-sm">
                          {category.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 align-top">
                        <Button className="w-full sketch-button text-xs whitespace-nowrap text-black" variant="outline">
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
            <Card className="p-6 sketch-card hover-lift">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Registration Deadline</h3>
                <p className="text-muted-foreground">
                  {new Date(conferenceConfig.dates.registration).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </Card>

            <Card className="p-6 sketch-card hover-lift">
              <div className="text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
                <p className="text-muted-foreground">
                  Bank transfer, Credit/Debit card, UPI
                </p>
              </div>
            </Card>

            <Card className="p-6 sketch-card hover-lift">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Group Discount</h3>
                <p className="text-muted-foreground">
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
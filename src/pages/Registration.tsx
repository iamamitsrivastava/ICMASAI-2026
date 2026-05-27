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
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-4 gradient-text">
            Registration
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Register now and join us at {conferenceConfig.name} {conferenceConfig.year}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 glass-card mb-12">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="secondary">Limited Time Offer</Badge>
              <h2 className="text-2xl font-bold gradient-text mb-2">Early Bird Registration</h2>
              <p className="text-muted-foreground">
                Register before {formatDateSafe(conferenceConfig.dates.earlyRegistration, { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })} to avail discounted rates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3">
                      {category.title === "Student" && <Users className="w-6 h-6 text-primary-foreground" />}
                      {category.title === "Academic" && <Globe className="w-6 h-6 text-primary-foreground" />}
                      {category.title === "Industry" && <CreditCard className="w-6 h-6 text-primary-foreground" />}
                      {category.title === "International" && <Globe className="w-6 h-6 text-primary-foreground" />}
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Early Bird</p>
                      <p className="text-2xl font-bold text-green-600">
                        {category.currency} {category.earlyBird}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Regular</p>
                      <p className="text-xl font-semibold text-muted-foreground line-through">
                        {category.currency} {category.regular}
                      </p>
                    </div>

                    <ul className="space-y-2 text-sm">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full" variant="outline">
                      Register Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 glass-card hover-lift">
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

            <Card className="p-6 glass-card hover-lift">
              <div className="text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
                <p className="text-muted-foreground">
                  Bank transfer, Credit/Debit card, UPI
                </p>
              </div>
            </Card>

            <Card className="p-6 glass-card hover-lift">
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
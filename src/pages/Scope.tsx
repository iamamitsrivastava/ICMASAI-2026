import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, Globe } from "lucide-react";
import { conferenceConfig } from "@/config/conferenceConfig";

const Scope = () => {
  const scopeItems = [
    {
      icon: Target,
      title: "Research Excellence",
      description: "Present cutting-edge research in emerging technologies and foster innovation"
    },
    {
      icon: Lightbulb,
      title: "Knowledge Exchange",
      description: "Share breakthrough ideas and methodologies with global research community"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Build networks between academia, industry, and research institutions"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Address real-world challenges through technological solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-950">
            Conference Scope
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of technology and innovation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 sketch-card mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-950">About the Conference</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {conferenceConfig.name} {conferenceConfig.year} is a premier international conference that brings together 
                researchers, academicians, industry professionals, and students to share their knowledge 
                and experience in emerging technologies. The conference provides a platform for presenting 
                novel ideas, discussing recent developments, and establishing collaborations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a focus on practical applications and theoretical foundations, the conference covers 
                a wide range of topics in computer science, engineering, and technology. All accepted papers 
                will be published in peer-reviewed proceedings and indexed in major databases.
              </p>
            </Card>

            <h2 className="text-3xl font-bold mb-8 text-center text-blue-950">Conference Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {scopeItems.map((item, index) => (
                <Card key={index} className="p-6 sketch-card hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg sketch-border bg-white flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 sketch-card">
              <h2 className="text-2xl font-bold mb-4 text-blue-950">Who Should Attend?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Research scholars and students pursuing advanced degrees
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Faculty members and academicians from universities
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Industry professionals and technology practitioners
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Government officials and policy makers
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Entrepreneurs and startup founders
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scope;
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, Globe } from "lucide-react";

const ConferenceObjectives = () => {
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
    <section id="conference-objectives" className="py-16 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="inline-block mb-4"></div>
            <h2 className="text-3xl font-bold text-center text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">Conference Objectives</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {scopeItems.map((item, index) => (
              <Card key={index} className="p-6 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-2 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    <item.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-100 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceObjectives;

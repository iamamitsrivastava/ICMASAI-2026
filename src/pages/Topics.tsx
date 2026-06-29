import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu,
  Zap,
  Brain,
  DollarSign,
  Wifi,
  Leaf
} from "lucide-react";

const Topics = () => {
  const tracks = [
    {
      id: "quantum",
      title: "Quantum Information Processing",
      icon: Cpu,
      topics: [
        "Quantum algorithms & computing models",
        "Quantum communication & cryptography",
        "Quantum simulation & optimization"
      ]
    },
    {
      id: "digital-transform",
      title: "Digital Transformation Strategies",
      icon: Zap,
      topics: [
        "Enterprise digital transformation frameworks",
        "Industry 4.0 / 5.0 adoption",
        "Business process re-engineering",
        "Digital leadership & innovation"
      ]
    },
    {
      id: "ai-analytics",
      title: "AI & Data Analytics in Business",
      icon: Brain,
      topics: [
        "Machine learning for business applications",
        "Predictive & prescriptive analytics",
        "Big data technologies",
        "Business intelligence systems"
      ]
    },
    {
      id: "fintech",
      title: "Smart Finance & FinTech Innovations",
      icon: DollarSign,
      topics: [
        "Blockchain & decentralized finance (DeFi)",
        "Digital payments & banking technologies",
        "Risk analytics & fraud detection",
        "Regulatory technologies (RegTech)"
      ]
    },
    {
      id: "iot",
      title: "IoT and Smart Business Systems",
      icon: Wifi,
      topics: [
        "IoT-enabled enterprise solutions",
        "Smart supply chain & logistics",
        "Cyber-physical systems",
        "Edge computing applications"
      ]
    },
    {
      id: "green-tech",
      title: "Sustainable & Green Technologies",
      icon: Leaf,
      topics: [
        "Green computing & energy-efficient systems",
        "Sustainable IT infrastructure",
        "Smart cities & environmental monitoring",
        "ESG-driven digital transformation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Conference Structure and Thematic Sessions
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Explore diverse research areas across six core thematic tracks and submit your work
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <Card key={track.id} className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-2 group flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                      <IconComponent className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                    <h2 className="text-xl font-bold text-yellow-100 mb-2 group-hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">{track.title}</h2>
                    <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-colors">Track {index + 1}</Badge>
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                      Key Focus Areas:
                    </h3>
                    <ul className="space-y-2">
                      {track.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-white mr-3 mt-1.5 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 transition-colors group-hover:border-gray-500">
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span className="font-semibold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Note:</span> Interdisciplinary and emerging topics within this track are welcome.
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-16 p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-yellow-100 mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">About These Tracks</h2>
            <p className="text-gray-300 mb-6">
              Our conference brings together researchers and professionals across six interconnected thematic areas, 
              all focused on how emerging technologies can drive innovation, efficiency, and sustainability in modern 
              business and organizational contexts.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">Core Pillars</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-2">•</span>
                    <span>Technology-driven innovation</span>
                  </li>
                  <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-2">•</span>
                    <span>Business transformation</span>
                  </li>
                  <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-2">•</span>
                    <span>Digital-first strategies</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">Research Scope</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-2">•</span>
                    <span>Academic research papers</span>
                  </li>
                  <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-2">•</span>
                    <span>Industry case studies</span>
                  </li>
                  <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-2">•</span>
                    <span>Cross-disciplinary work</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Topics;

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
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-4 gradient-text">
            Conference Structure and Thematic Sessions
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
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
                <Card key={track.id} className="p-8 glass-card hover-lift flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold gradient-text mb-2">{track.title}</h2>
                    <Badge variant="secondary" className="mb-4">Track {index + 1}</Badge>
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Key Focus Areas:
                    </h3>
                    <ul className="space-y-2">
                      {track.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Note:</span> Interdisciplinary and emerging topics within this track are welcome.
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-16 p-8 glass-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold gradient-text mb-4">About These Tracks</h2>
            <p className="text-muted-foreground mb-6">
              Our conference brings together researchers and professionals across six interconnected thematic areas, 
              all focused on how emerging technologies can drive innovation, efficiency, and sustainability in modern 
              business and organizational contexts.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Core Pillars</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Technology-driven innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Business transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Digital-first strategies</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Research Scope</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Academic research papers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Industry case studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
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

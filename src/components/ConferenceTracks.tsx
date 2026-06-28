import { Brain, Shield, Database, Sparkles } from "lucide-react";

const ConferenceTracks = () => {
  const tracks = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep learning, neural networks, NLP, computer vision, and intelligent systems",
      color: "from-blue-500 to-indigo-600",
      papers: 0,
    },
    {
      icon: Shield,
      title: "Networking, Cybersecurity & Cognitive Intelligence",
      description: "Network security, blockchain, IoT security, and cognitive computing",
      color: "from-purple-500 to-pink-600",
      papers: 0,
    },
    {
      icon: Database,
      title: "Computing Data Science & Intelligent Systems",
      description: "Big data analytics, cloud computing, edge computing, and distributed systems",
      color: "from-green-500 to-teal-600",
      papers: 0,
    },
    {
      icon: Sparkles,
      title: "Emerging Frontiers & Interdisciplinary Applications",
      description: "Quantum computing, biotechnology, sustainable tech, and innovation",
      color: "from-orange-500 to-red-600",
      papers: 0,
    },
  ];

  return (
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conference <span className="text-blue-950">Tracks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Submit your research in cutting-edge technology domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="sketch-card group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 sketch-border text-${track.color.split('-')[1]}-600 flex-shrink-0`}>
                    <track.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                    <p className="text-muted-foreground mb-4">{track.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {track.papers} papers submitted
                      </span>
                      <button className="text-primary font-medium hover:underline transition-all">
                        View Topics →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;
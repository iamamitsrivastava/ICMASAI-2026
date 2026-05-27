import { GraduationCap } from "lucide-react";
import Image from "next/image";
const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Dragan Pamucar",
      title: "Full Professor",
      organization: "University of Belgrade, Faculty of Organizational Sciences",
      image: "/assets/draganpamugar.jpg",
      keynote: "",
    },
    {
      name: "Murugappan MNM",
      title: "Co-Founder and COO",
      organization: "iNextLabs",
      image: "/assets/speaker2.jpeg",
      keynote: "",
    },
    {
      name: "Prof. Ing. Francesco Benedetto, Ph.D.",
      title: "Associate Professor of Telecommunications",
      organization: "University of Rome",
      image: "/assets/bendetto.jpg",
      keynote: "",
    },
    
  ];

  return (
    <section id="speakers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keynote <span className="gradient-text">Speakers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from world-renowned experts and industry leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-sm text-primary mb-2">{speaker.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{speaker.organization}</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground">Keynote:</p>
                  <p className="text-sm font-semibold">{speaker.keynote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
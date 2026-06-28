import { GraduationCap } from "lucide-react";
import Image from "next/image";
const Speakers = () => {
  const speakers = [
    {
      name: "Dr.Seshathiri Dhanasekaran",
      title: "Researcher",
      organization: "UiT The Arctic University of Norway, Tromso",
      image: "/assets/seshathiri.jpg",
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
      name: "Dr. Wilfred Blessing N.R",
      title: "Professor in Computing and Information Sciences Department",
      organization: "University of Technology and Applied Sciences, Ibri, Government of Oman",
      image: "/assets/wilfred Blessing.png",
      keynote: "",
    },
    {
      name: "Dr. Prateek Agrawal",
      title: "Director - SoCSE & SoIT | Professor - CSE",
      organization: "Research Fellow - INTI International, Malaysia | Ex - AAU, Austria | Ex - LPU, Punjab | Ex - SGTU, Gurugram | Mentored 10K+ Students | AI Researcher | Book Editor | IPR",
      image: "/assets/prateek.jpg",
      keynote: "",
    },
    
  ];

  return (
    <section id="speakers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keynote <span className="text-blue-950">Speakers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from world-renowned experts and industry leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group sketch-card overflow-hidden animate-fade-in p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative flex justify-center pt-8 pb-4 bg-slate-50 border-b border-slate-100/50">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-sm ring-4 ring-white bg-white">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-sm text-primary mb-2">{speaker.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
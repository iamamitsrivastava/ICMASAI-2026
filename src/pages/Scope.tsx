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
    <div className="min-h-screen bg-[#0f172a]">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Conference Scope
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Exploring the frontiers of technology and innovation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
{/* About FITCS Card */}
<Card className="p-8 mb-12 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
  <h2 className="text-2xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">About Faculty of IT And Computer (FITCS)</h2>
  <p className="text-gray-300 leading-relaxed mb-4">
    Science, Parul University FITCS Department, Parul Institute of Computer Application secured <b className="text-white">40th Rank in INDIA TODAY</b> Survey out of 1207 BCA Colleges from India. With the ever-growing scope of digitalization and technological innovation in today&apos;s time, the Information Technology and Computer Science experts have taken a role of vital significance.
  </p>
  <p className="text-gray-300 leading-relaxed mb-4">
    The Faculty of IT and Computer Science, endeavors to shape and develop skilled personnel who have the practical knowledge and the fundamental understanding of the various aspects within the digital space which allows them to innovate and develop cutting‑edge solutions in this field. The faculty offers an enriching curriculum which seeks to impart and develop the contemporary understanding of the vast dimensions which are related to this field thereby providing students with an up to date knowledge of these trends.
  </p>
  <p className="text-gray-300 leading-relaxed">
    The faculty is also equipped with state of the art facilities and computer laboratories which go on to provide insightful competencies in coding, web development on various computer languages along with an exposure to the Internet of Things. Our elite league of faculties and experts go on to provide students with the most enriching practical understanding to the trends of the industry, making our IT & Computer Science students the competent human resource for this field. So, take the first step towards a vibrant journey in IT & Computer Science.
  </p>
</Card>

            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">Conference Objectives</h2>
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

            <Card className="p-8 bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Who Should Attend?</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-3">•</span>
                  Research scholars and students pursuing advanced degrees
                </li>
                <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-3">•</span>
                  Faculty members and academicians from universities
                </li>
                <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-3">•</span>
                  Industry professionals and technology practitioners
                </li>
                <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-3">•</span>
                  Government officials and policy makers
                </li>
                <li className="flex items-start transition-all hover:text-white hover:translate-x-1">
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mr-3">•</span>
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
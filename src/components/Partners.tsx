import { Award, TrendingUp, Building, Globe, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Partners = () => {
  const featuredAchievement = {
    icon: TrendingUp,
    title: "India Today Ranking",
    subtitle: "Top 40 BCA Colleges",
    description: "Parul Institute of Computer Application has been ranked among the top 40 BCA colleges across India in a recent survey conducted by India Today",
    highlight: true,
    featured: true
  };

  const partnersDetails = [
    {
      name: "Universitas of Teknokrat",
      logo: "/assets/partners/universitas-teknokra-indonesia-logo.png",
      website: "https://teknokrat.ac.id/",
      type: "International",
      contact: "+62 852-7910-3452"
    },
    {
      name: "SSM Infotech Solutions Pvt. Ltd",
      logo: "/assets/partners/SSM-logo.avif",
      website: "#",
      type: "National",
      contact: "7486022024, 99988816019"
    },
    {
      name: "Arth Consultancy Services",
      logo: "/assets/partners/arth-consultancy-services-logo.webp",
      website: "#",
      type: "National",
      contact: "9377718823"
    },
    {
      name: "EXCELR Edtech Pvt. Ltd.",
      logo: "/assets/partners/excelr.png",
      website: "#",
      type: "National",
      contact: "8010245639"
    },
    {
      name: "Infolink University College, Ethiopia",
      logo: "/assets/partners/inflolink.png",
      website: "#",
      type: "International",
      contact: "251916581753"
    },
    {
      name: "Akash Technolabs",
      logo: "/assets/partners/akash-technolabs.png",
      website: "#",
      type: "National",
      contact: "8000147888"
    },
    {
      name: "NYSHA SOLUTIONS",
      logo: "/assets/partners/LOGO-MAIN.png",
      website: "#",
      type: "National",
      contact: "9727772202"
    },
    {
      name: "MyinfoPie",
      logo: "/assets/partners/myinfopie-white-amd-black.png",
      website: "#",
      type: "National",
      contact: "8401584017"
    },
    {
      name: "Happy Window Skill Services Private Ltd.",
      logo: "/assets/partners/skill.png",
      website: "#",
      type: "National",
      contact: "9967763315"
    },
    {
      name: "Enlighten Infosystem Vadodara,Gujarat",
      logo: "/assets/partners/EnliLogoNewPNG.png",
      website: "#",
      type: "National",
      contact: "7990343306"
    },
    {
      name: "Cybertronix Solution Vadodara,Gujarat",
      logo: "/assets/partners/cybt-logo.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Encoderspro Private Limited Kanpur,UP",
      logo: "/assets/partners/enpro_logo.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Baroda Institute of Technology",
      logo: "/assets/partners/baroda.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Brainybeam Pvt. Lmt.",
      logo: "/assets/partners/brainylogo.png",
      website: "#",
      type: "National",
      contact: ""
    },
    {
      name: "Acciojob",
      logo: "/assets/partners/acciojob-logo-color.png",
      website: "#",
      type: "National",
      contact: ""
    }
  ];

  // Split partners into two rows for different sliding directions
  const firstRowPartners = partnersDetails.slice(0, Math.ceil(partnersDetails.length / 2));
  const secondRowPartners = partnersDetails.slice(Math.ceil(partnersDetails.length / 2));

  // Partner Card Component - Fixed Layout
  const PartnerCard = ({ partner }: { 
    partner: { 
      name: string; 
      logo: string; 
      website: string; 
      type: string; 
      contact: string; 
    } 
  }) => (
    <div className="flex-shrink-0 w-80 mx-3">
      <Card className="p-4 hover-lift transition-all duration-300 group cursor-pointer relative overflow-hidden glass-card border-red-200 hover:border-red-400 hover:shadow-xl h-32">
        <div className="flex items-center gap-3 h-full">
          {/* Logo Container - Fixed Size */}
          <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Partner Info - Fixed Layout */}
          <div className="flex-1 min-w-0 h-full flex flex-col justify-center">
            {/* Badge - Fixed Position */}
            <div className="mb-1">
              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                partner.type === 'International' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {partner.type}
              </span>
            </div>
            
            {/* Partner Name - Fixed Overflow */}
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors duration-300 leading-tight mb-1 line-clamp-2">
              {partner.name}
            </h3>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-500/5 to-red-600/5" />
      </Card>
    </div>
  );

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-gray-50/30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 via-red-700 to-black bg-clip-text text-transparent">
            Associated Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations to advance research, innovation, and technological excellence
          </p>
        </div>
        
        {/* Partners Slider - Fixed Animation */}
        <div className="space-y-8 mb-12">
          {/* First Row - Sliding Forward */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-forward">
              {/* Duplicate the array for seamless loop */}
              {[...firstRowPartners, ...firstRowPartners, ...firstRowPartners].map((partner, index) => (
                <PartnerCard key={`forward-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* Second Row - Sliding Backward */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-backward">
              {/* Duplicate the array for seamless loop */}
              {[...secondRowPartners, ...secondRowPartners, ...secondRowPartners].map((partner, index) => (
                <PartnerCard key={`backward-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">
              About Faculty of IT And Computer (FITCS)
            </h3>
            <p className="text-gray-600 italic mb-6 text-justify max-w-6xl mx-auto leading-relaxed">
              Science, Parul University FITCS Department, Parul Institute of Computer Application secured <b>40th Rank in INDIA TODAY</b> Survey out of 1207 BCA Colleges from India. With the ever-growing scope of digitalization and technological innovation in today&apos;s time, the Information Technology and Computer Science experts have taken a role of vital significance.
            </p>
            <p className="text-gray-600 italic mb-6 text-justify max-w-6xl mx-auto leading-relaxed">
              The Faculty of IT and Computer Science, endeavors to shape and develop skilled personnel who have the practical knowledge and the fundamental understanding of the various aspects within the digital space which allows them to innovate and develop cutting-edge solutions in this field. The faculty offers an enriching curriculum which seeks to impart and develop the contemporary understanding of the vast dimensions which are related to this field thereby providing students with an up to date knowledge of these trends.
            </p>
            <p className="text-gray-600 italic mb-6 text-justify max-w-6xl mx-auto leading-relaxed">
              The faculty is also equipped with state of the art facilities and computer laboratories which go on to provide insightful competencies in coding, web development on various computer languages along with an exposure to the Internet of Things. Our elite league of faculties and experts go on to provide students with the most enriching practical understanding to the trends of the industry, making our IT and Computer Science students the competent human resource for this field. So, take the first step towards a vibrant journey in IT & Computer Science.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
import { title } from "process";

// Conference Configuration - Easy to update for each year
export const conferenceConfig = {
  year: 2026,
  name: "ICQTDBT",
  fullName: "International Conference on Quantum Technologies and Digital Business Transformation 2026",
  university: "Parul University",
  dates: {
    paperSubmission: "2026-05-4",
    notification: "2025-04-20",
    cameraReady: "2025-05-10",
    earlyRegistration: "2025-05-25",
    registration: "2025-06-10",
    conference: "2025-06-20",
    conferenceEnd: "2025-06-22"
  },
  venue: {
    name: "Parul University",
    address: "PO Limda",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    pincode: "391760",
    description: "State-of-the-art conference facilities with modern auditoriums"
  },
  registrationFees: {
    earlyBird: {
      student: 3000,
      academic: 5000,
      industry: 7000,
      international: 150 // USD
    },
    regular: {
      student: 4000,
      academic: 6000,
      industry: 8000,
      international: 200 // USD
    }
  },
  tracks: [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      topics: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics"
      ]
    },
    {
      id: "iot",
      title: "Internet of Things",
      topics: [
        "Smart Cities",
        "Industrial IoT",
        "Edge Computing",
        "Sensor Networks",
        "IoT Security"
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain & Distributed Systems",
      topics: [
        "Cryptocurrency",
        "Smart Contracts",
        "Consensus Algorithms",
        "DeFi",
        "Web3 Technologies"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      topics: [
        "Network Security",
        "Cryptography",
        "Threat Detection",
        "Privacy Protection",
        "Security Analytics"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      topics: [
        "Cloud Architecture",
        "Serverless Computing",
        "Container Technologies",
        "Multi-cloud Strategies",
        "Cloud Security"
      ]
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      topics: [
        "Big Data",
        "Data Mining",
        "Predictive Analytics",
        "Business Intelligence",
        "Data Visualization"
      ]
    }
  ],
  keynoteSchedule: [
    {
      time: "09:00-10:00",
      date: "2025-06-20",
      speaker: "Dr. Rajesh Kumar",
      title: "Future of AI in Healthcare",
      location: "Main Auditorium"
    },
    {
      time: "14:00-15:00",
      date: "2025-06-20",
      speaker: "Prof. Sarah Johnson",
      title: "Quantum Computing Breakthrough",
      location: "Tech Hall"
    },
    {
      time: "10:00-11:00",
      date: "2025-06-21",
      speaker: "Dr. Chen Wei",
      title: "Sustainable Technology Solutions",
      location: "Main Auditorium"
    }
  ],
  committee: {
    chiefPatrons: [
      {
        name: "Dr. Devanshu Patel",
        title: "President",
        organization: "Parul University",
        image: "/assets/comittiee/Dr-Devanshu.jpg"
      },
      {
        name: "Dr. Parul Patel",
        title: "Vice President (Student Affairs & General Administration) and Chair Admissions Committee",
        organization: "Parul University",
        image: "/assets/comittiee/parul-patel.jpg"
      },
      {
        name: "Dr. Geetika Patel",
        title: "Vice President (Quality, Research & Health Sciences) and Medical Director",
        organization: "Parul University",
        image: "/assets/comittiee/Dr-Geetika-Patel.jpg"
      },
      {
        name: "Dr. Komal Patel",
        title: "Vice President (Medical & Paramedical Health Sciences) & Medical Director",
        organization: "Parul University",
        image: "/assets/comittiee/dr-komal-patel.jpg"
      }
    ],
    patrons: [
      {
        name: "Dr. Amit Ganatra",
        title: "Provost",
        organization: "Parul University",
        image: "/assets/comittiee/Amit-Ganatra.png"
      },
      {
        name: "Prof. Manish Pandya",
        title: "Registrar",
        organization: "Parul University",
        image: "/assets/comittiee/manish-pandya.jpg"
      },
      {
        name: "Dr Pawan Dwivedi",
        title: "Deputy Registrar",
        organization: "Parul University",
        image: "/assets/comittiee/Mr-Pawan-Sir.jpg"
      },
      {
        name: "Dr. PriyaSwaminarayan",
        title: "Dean- ICQTDBT, Director –MCA &Principal – PICA",
        organization: "Parul University",
        image: "/assets/comittiee/dr-priyaswaminarayan.png"
      }
    ],
    organizingChair: [
      {
        name: "Prof. Vivek Dave",
        title: "HOD MCA-Department",
        role: "Conference Chair",
        organization: "Parul University",
        email: null,
        image: "/assets/comittiee/vevek.jpeg"
      },
      {
        name: "Dr. Hina Chokshi",
        title: "HOD, BCA-Department",
        role: "Conference Chair",
        organization: "Parul University",
        email: null,
        image: "/assets/comittiee/hina.jpeg"
      },
      {
        name: "Dr. Abhishek Mehta",
        title: "HoD B.Sc(I.T)-Department",
        role: "Co-Chair",
        organization: "Parul University",
        email: null,
        image: null
      },
      {
        name: "Pajar Kharisma",
        title: "M.Cs. Lecturer, Informatics",
        role: "Co-Chair",
        organization: "Teknokrat Indonesia University",
        email: null,
        image: null
      }
    ],
    technicalCommittee: [
      {
        name: "Dr. R. Elakkiya",
        title: "Assistant Professor, Department of Computer Science",
        organization: "Birla Institute of Technology & Science, Pilani (Dubai Campus)",
        country: "UAE"
      },
      {
        name: "Dr. K. Ramalakshmi",
        title: "Professor",
        organization: "Alliance College of Engineering and Design, Alliance University",
        country: "India"
      },
      {
        name: "Dr. M. Anoop",
        title: "Associate Professor, Department of Computer Science and Engineering",
        organization: "Saveetha School of Engineering SIMATS, Chennai",
        country: "India"
      },
      {
        name: "Dr. S. Umarani",
        title: "Professor",
        organization: "SRM Institute of Science and Technology, Chennai",
        country: "India"
      },
      {
        name: "Dr. Kumar Chadar",
        title: "Professor (Decision Science), School of Business and Management",
        organization: "Christ University",
        country: "India"
      },
      {
        name: "K. Roshini",
        title: "Faculty",
        organization: "Karunya University",
        country: "India"
      },
      {
        name: "Dr. S. Kaliraj",
        title: "Faculty",
        organization: "Manipal University",
        country: "India"
      },
      {
        name: "Rajesh Kumar",
        title: "Faculty",
        organization: "SRM University, Chennai",
        country: "India"
      }
    ],
    advisoryCommittee: [
      {
        name: "Prof. Seshathiri Dhanasekaran",
        title: "Researcher",
        organization: "UiT The Arctic University of Norway",
        country: "Norway"
      },
      {
        name: "Dr. Wilfred Blessing N.R.",
        title: "Faculty",
        organization: "College of Computing and Information Sciences, University of Technology and Applied Science - Ibri",
        country: "Sultanate of Oman"
      },
      {
        name: "Saleem Raja A.",
        title: "Faculty",
        organization: "IT Department, College of Computing and Information Science, University of Technology and Applied Science, Shinas",
        country: "Oman"
      },
      {
        name: "Jayabarabu Ramakrishnan",
        title: "Faculty",
        organization: "Department of Information Technology and Security, College of Computer Science and Information Technology, Jazan University",
        country: "Kingdom of Saudi Arabia"
      },
      {
        name: "Dr. M. Ashok Kumar",
        title: "Controller of Examination & HOD - open labs",
        organization: "Bluecrest University, Monrovia",
        country: "Liberia"
      },
      {
        name: "Dr. M. Selvakumar Samuel",
        title: "Associate Professor",
        organization: "Asia Pacific University of Technology and Innovation",
        country: "Malaysia"
      },
      {
        name: "Dr. Sc. Dedi Darwis",
        title: "Professor",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",
        country: "Indonesia"
      },
      {
        name: "Dyah Ayu Megawaty",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",
        country: "Indonesia"
      },
      {
        name: "Qadhi Jafar Adrian",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat / Indonesian University of Teknokrat",
        country: "Indonesia"
      },
      {
        name: "Dr. Sampurna Dadi Riskiono",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Indonesian University of Teknokrat",
        country: "Indonesia"
      }
    ],
    generalProgramCommittee: [
      {
        name: "SVN Santhosh Kumar",
        title: "Associate Professor, SCORE, VIT (world 2% scientist for 2025)",
        organization: "VIT-Vellore Campus",
        country: "India",
        image: "/assets/svnsanthoshkumar.jpg"
      },
      {
        name: "Prof. (Dr.) Rajesh Kumar Dhanaraj",
        title: "Professor",
        organization: "Symbiosis International (Deemed University)",
        country: "India",
        image: "/assets/rajesh-kumar.jpg"
      },
      {
        name: "Dr. Dragan Pamucar",
        title: "Full Professor",
        organization: "University of Belgrade, Faculty of Organizational Sciences",
        country: "Serbia",
        image: "/assets/draganpamugar.jpg"
      },
      {
        name: "Murugappan",
        title: "Chief Operating Officer",
        organization: "iNextLabs",
        country: "India",
        image: "/assets/speaker2.jpeg"
      },
      {
        name: "Prof. Ing. Francesco Benedetto, Ph.D.",
        title: "Associate Professor of Telecommunications",
        organization: "University of Rome",
        country: "Italy",
        image: "/assets/bendetto.jpg"
      }
    ],
    publicationCommittee: [] as CommitteeMember[],
    organizationCommittee: [] as CommitteeMember[]
  },
  contact: {
    email: "conference@ICQTDBT2026.com",
    phone: "+91 122 323 3230",
    address: "Parul University, PO Limda, Vadodara, Gujarat 391760, India"
  }
};

// TypeScript interfaces for type safety
export interface ConferenceTrack {
  id: string;
  title: string;
  topics: string[];
}

export interface CommitteeMember {
  name: string;
  title: string;
  organization: string;
  country?: string;
  email?: string;
  image?: string | null;
}

export interface KeynoteSession {
  time: string;
  date: string;
  speaker: string;
  title: string;
  location: string;
}

export interface RegistrationFee {
  student: number;
  academic: number;
  industry: number;
  international: number;
}

export type ConferenceConfig = typeof conferenceConfig;
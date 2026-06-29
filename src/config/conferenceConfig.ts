import { title } from "process";

// Conference Configuration - Easy to update for each year
export const conferenceConfig = {
  year: 2026,
  name: "ICMASAI",
  fullName: "International Conference on Multi-Agent Systems in Artificial Intelligence 2026",
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
        title: "Dean- ICMASAI, Director –MCA &Principal – PICA",
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
        title: "Vice Principal, BCA-Department",
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
        name: "Saleem Raja A",
        title: "Faculty",
        organization: "IT Department, College of Computing and Information Science, University of Technology and Applied Science, Shinas Oman."
      },
      {
        name: "Jayabarabu Ramakrishnan",
        title: "Faculty",
        organization: "Department of Information Technology and Security, College of Computer Science and Information Technology, Jazan University Kingdom of Saudi Arabia."
      },
      {
        name: "Dr Feroz Khan A.B",
        title: "Associate Professor",
        organization: "Syed Hameedha College, Alagappa University."
      },
      {
        name: "Dr. M. Ashok Kumar",
        title: "Controller of Examination & HOD",
        organization: "Bluecrest University, Monrovia Liberia."
      },
      {
        name: "Dr. M. Selvakumar Samuel",
        title: "Associate Professor",
        organization: "Asia Pacific University of Technology and Innovation"
      },
      {
        name: "Dr. Sc. Dedi Darwis",
        title: "Professor",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia"
      },
      {
        name: "Dyah Ayu Megawaty",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia."
      },
      {
        name: "Qadhi Jafar Adrian",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat / Indonesian University of Teknokrat"
      },
      {
        name: "Dr. Sampurna Dadi Riskiono",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Indonesian University of Teknokrat"
      },
      {
        name: "Dr. R. Elakkiya",
        title: "Assistant Professor",
        organization: "Department of Computer Science Birla Institute of Technology & Science, Pilani (Dubai Campus)"
      },
      {
        name: "Dr. K. Ramalakshmi",
        title: "Professor",
        organization: "Alliance College of Engineering and Design, Alliance University."
      },
      {
        name: "Dr. S. Umarani",
        title: "Professor",
        organization: "SRM Institute of Science and Technology, Chennai."
      },
      {
        name: "Dr. Kumar Chadar",
        title: "Professor (Decision Science)",
        organization: "School of Business and Management Christ University."
      },
      {
        name: "Dr. Kaliraj S",
        title: "Associate Professor",
        organization: "School of Computer Engineering Manipal University."
      },
      {
        name: "M. Roshni Thanka",
        title: "Assistant Professor of Computer Science",
        organization: "Karunya University."
      }
    ],
    advisoryCommittee: [
      {
        name: "Dr Rajesh Kumar Dhanaraj",
        title: "Professor",
        organization: "SICSR, Symbiosis International (Deemed University), Pune"
      },
      {
        name: "Dragan Pamucar",
        title: "Faculty",
        organization: "University of Belgrade, Faculty of Organizational Sciences, Department of Operations Research and Statistics, Belgrade, Serbia"
      },
      {
        name: "Dr Savithri M",
        title: "Faculty",
        organization: "CHRIST (Deemed to be University), Pune Lavasa"
      },
      {
        name: "Dr. Ruchi Doshi",
        title: "Professor",
        organization: "Universidal Azteca, Mexico."
      },
      {
        name: "Dr. S. Aanjan Kumar",
        title: "Faculty",
        organization: "School of Computing Science and Engineering, VIT Bhopal University"
      },
      {
        name: "SVN Santhosh Kumar",
        title: "Associate Professor (world 2% scientist for 2025)",
        organization: "SCORE, VIT-Vellore Campus"
      },
      {
        name: "Dr. Basant Agarwal",
        title: "Associate Professor, Dean and Head",
        organization: "Central University of Rajasthan"
      },
      {
        name: "Dr. Sonal Jain",
        title: "Professor",
        organization: "PG Department of CS and IT, Sardar Patel University, Vallabh Vidhyanagar Gujarat."
      }
    ],
    publicationCommittee: [
      { name: "Dr. Raj Sinha", title: "Chief Research Officer", organization: "FITCS Parul University" },
      { name: "Dr. Ghanshyam Rathod", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Dr. Ramachandran", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Dr. Praveen Tomar", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Dr. Sumit Soni", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Dr. Ratnesh Namdeo", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Dr. Saswati Chatterji", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Dr. Chetan Gondaliya", title: "Faculty", organization: "FITCS Parul University" }
    ],
    organizationCommittee: [
      { name: "Dr. Abishek Mehta", title: "Faculty", organization: "FITCS Parul University" },
      { name: "Prof. Manishkumar joshi", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vipul Gamit", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Jigar Bhawsar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Sohil Parmar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Arun", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vijaya Tulsani", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Yadagiri Rama Deepak", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Rinkal D. Sarvaiya", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Hardik parmar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Mehulkumar Dalwadi", title: "Faculty", organization: "Parul University" }
    ],
    promotionCommittee: [
      { name: "Prof. Md Faruk Abdulla", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Adarsh Ashok", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Khyati Kariya", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Ronak Mehta", title: "Faculty", organization: "Parul University" },
      { name: "Prof. sathwik Chebrolu", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Ashutosh Solanki", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Lakshya Namdeo", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Rinku Patil", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Nirmit Shah", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Saumil B. Trivedi", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vaishali Shah", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vishakha N Bathwar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Tanmay Shah", title: "Faculty", organization: "Parul University" }
    ]
  },
  contact: {
    email: "conference@ICMASAI2026.com",
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
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  portfolio,
  meta,
  starbucks,
  tesla,
  shopify,
  apple,
  lspace,
  wecode,
  mlt,
  carrent,
  jobit,
  tripguide,
  arcaneledger,
  questlog,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Interactive Web Applications",
    icon: web,
  },
  {
    title: "Creative UI and Design",
    icon: mobile,
  },
  {
    title: "AI and Intelligent Features",
    icon: backend,
  },
  {
    title: "Experimental/Creative Projects",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Career Preparation Fellow",
    company_name: "Management Leadership for Tomorrow",
    icon: mlt, 
    iconBg: "#383E56",
    date: "January 2026 - Present",
    points: [
      "Accepted into a selective 18-month professional development program that accelerates the career growth of emerging leaders through structured coaching, mentorship, and targeted skill-building.",
      "Develop business and technical acumen through hands-on technical assessments, case studies, simulations, and project work designed to strengthen analytical, strategic, and leadership capabilities.",
      "Engage with leading partner organizations (e.g., LinkedIn, Bloomberg, and Deloitte) to gain industry exposure and insight into tech-talent pathways.",
    ],
  },
  {
    title: "Research Lead",
    company_name: "LSPACE NASA Proposal Writing and Evaluation Experience",
    icon: lspace, 
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Dec 2025",
    points: [
      "Led project research for a 10-member team in developing a NASA mission proposal, coordinating 6 deliverables, and maintaining the  project timeline over a 4-month period",
      "Evaluated 3 peer proposals using NASA scoring rubrics, providing structured, detailed feedback that influenced proposal selections",
    ],
  },
  {
    title: "Tech Fellow",
    company_name: "Harvard WECode Tech Conference",
    icon: wecode, 
    iconBg: "#383E56",
    date: "Nov 2025 - Feb 2025",
    points: [
      "Conducted structured outreach through social media, direct messaging, and school networks, engaging clubs, faculty members, and student organizations across multiple campuses",
      "Recruited 5 student attendees and made 20 academic and professional contacts for the conference",
    ],
  },
  {
    title: "Sales Specialist",
    company_name: "Apple",
    icon: apple, 
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Apr 2023",
    points: [
      "Provided technical troubleshooting and product support across hardware, software, and account issues, consistently exceeding service metrics.",
      "Trained users on best practices for device setup, software, and data security.",
      "Collaborated with cross-functional teams to resolve complex technical issues, ensuring customer satisfaction and retention.",],
  },
];

const testimonials = [
  {
    testimonial:
      "Daphne is one of those rare individuals who elevates every team she joins.",
    name: "Sabrina Ornelas",
    designation: "Lead Systems Engineer",
    company: "LSPACE NASA Proposal Team",
    image: "/company/lspace.jpeg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Trend Market Discovery Agent",
    description:
      "An autonomous AI agent that continuously scans online sources to identify emerging market trends and turns raw web data into clear, structured insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
  name: "Personal Portfolio Website",
    description:
      "A 3D interactive developer portfolio featuring animated scenes and a working contact form.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/daphneblum/portfolio",
  },
  {
    name: "Ultrasonic Scanning Sensor with Radar",
    description:
      "A real-time radar-style system that scans its surroundings using ultrasonic sensing and visualizes distance data as a live sweeping display.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Arcane Ledger",
    description:
      "A fantasy-themed calculator that transforms arithmetic into spellcasting.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: arcaneledger,
    source_code_link: "https://github.com/daphneblum/arcane-ledger",
  },
  {
    name: "Quest Log",
    description:
      "A fantasy-themed productivity app that transforms your to-do list into an adventure. Instead of checking off chores, you complete quests.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: questlog,
    source_code_link: "https://github.com/daphneblum/quest-log",
  },
];

export { services, technologies, experiences, testimonials, projects };
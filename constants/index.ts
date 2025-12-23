import {
  Code,
  Smartphone,
  Cloud,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Globe,
} from "lucide-react";
const stats = [
  { label: "Years Experience", value: "1+", icon: Award },
  { label: "Projects Completed", value: "5+", icon: Code },
  // { label: "Mobile Apps", value: "10+", icon: Smartphone },
  // { label: "Cloud Deployments", value: "15+", icon: Cloud },
];

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Next.js"],
  DevOps: ["Docker",],
  Tools: ["Git", "VS Code", "Bitbucket", "Github"],
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "akaltaf610@gmail.com",
    href: "mailto:akaltaf610@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 341 5634031",
    href: "tel:+923415634031",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/codewithkashi",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithkashif/",
    color: "hover:text-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/majestic.kashif/",
    color: "hover:text-blue-400",
  },
];

const projectTypes = [
  "Web Development",
  "Mobile App",
  "DevOps/Cloud",
  "Full Stack Solution",
  "Consultation",
  "Other",
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Future Dev Solutions",
    type: "Full-time",
    icon: "/fds.png",
    location: "Lahore, Pakistan",
    duration: "2024 - Present",
    description:
      "Leading comprehensive full-stack development initiatives spanning web, mobile, and DevOps domains. Architected and deployed high-availability infrastructure solutions while managing cross-functional development teams.",
    achievements: [
      // "Managed a team of 12 developers across multiple projects",
      "Successfully led 5+ major projects from conception to deployment",
      "Built high-availability server infrastructure from scratch with zero downtime",
      // "Implemented DNS failover and load balancing systems handling 10k users per minute",
      "Established comprehensive DevOps pipeline and deployment strategies",
      "Delivered scalable solutions across web and mobile platforms",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "React Native",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "CI/CD",
    ],
    color: "border-primary",
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Independent Contractor",
    type: "Freelance",
    location: "Remote",
    icon: "/upwork.png",
    duration: "Started since 2025 (Freelance)",
    description:
     "I am also ready for working as a freelancer on any project you want to start.",
    achievements: [
      "I will work on your project with my best effort and dedication.",
      "I will deliver the project on time and within the budget.",
      "I will provide the best possible solution for your project.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Shade Components",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "CI/CD",
      "Git",
      "VS Code",
    ],
    color: "border-accent-subtle",
  },
];

const projects = [
  // {
  //   title: "Qi Tech - Incident Reporting Tool",
  //   description:
  //     "Professional incident reporting system currently used by over 700 pharmacies in the UK including Well Pharmacy. NHS certified and production-ready solution for healthcare incident management and compliance.",
  //   image: "/projects/qitech.png",
  //   type: "Full Stack Web",
  //   icon: Globe,
  //   technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
  //   features: [
  //     "NHS Certification",
  //     "700+ Active Pharmacies",
  //     "Incident Tracking",
  //     "Compliance Reports",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   role: "Lead Backend Developer",
  //   duration: "1 year",
  //   category: "web",
  // },
  {
    title: "Future Soul - Dating & Matchmaking App & Website",
    description:
      "Modern dating and matchmaking mobile & web application with comprehensive matching algorithms, real-time chat features, audio and video calling capabilities, and all standard dating app functionalities.",
    image: "/projects/futuresoul.png",
    type: "Mobile & web Application",
    icon: Smartphone,
    technologies: [
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
    ],
    features: [
      "Smart Matching",
      "Real-time Chat",
      "Audio/Video Calls",
      "Profile Management",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "4 months",
    category: "mobile",
  },

  {
    title: "FFC Sports Complex - Event Management",
    description:
      "Comprehensive sports event management mobile application featuring match scheduling, timing management, push notifications, visitor registration, and integrated map services for sports complex operations.",
    image: "/projects/ffc.png",
    type: "Mobile App",
    icon: Smartphone,
    technologies: [
      "React Native",
      "Next.js",
      "PostgreSQL",
      "Firebase",
      "Maps Integration",
    ],
    features: [
      "Match Scheduling",
      "Real-time Notifications",
      "Visitor Registration",
      "Map Integration",
    ],
    github: "#",
    demo: "#",
    role: "Mobile Developer",
    duration: "5 months",
    category: "mobile",
  },
  {
    title: "Orby Display - Digital Signage Control",
    description:
      "Real-time digital signage management system for controlling TV ads and banners. Features screen management, admin web panel for content control, and mobile app for displaying advertisements with live updates.",
    image: "/projects/orbydisplay.png",
    type: "Full Stack Mobile & Web",
    icon: Globe,
    technologies: [
      "React Native",
      "Next.js",
      "Socket.io",
      "PostgreSQL",
      "Real-time Sync",
    ],
    features: [
      "Real-time Control",
      "Screen Management",
      "Admin Panel",
      "Live Updates",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "2 months",
    category: "web",
  },
  {
    title: "Juliet Nails - Salon Management System",
    description:
      "Comprehensive salon management platform with multi-location support featuring turn tracker, payroll management, services and staff management, client registration and reservation system. Includes integrated Stripe payments and printer functionality for complete salon operations.",
    image: "/projects/jtnails.png",
    type: "Full Stack Web & Mobile",
    icon: Globe,
    technologies: [
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Firebase",
      "Stripe",
    ],
    features: [
      "Multi-location Support",
      "Turn Tracker",
      "Payroll Management",
      "Reservation System",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "2 months",
    category: "web",
  },
  {
    title: "Flex Track - Fitness Tracking & Gym Management System",
    description:
      "Comprehensive fitness tracking and gym management platform with multi-location support featuring turn tracker, payroll management, services and staff management, client registration and reservation system. Includes integrated Stripe payments and printer functionality for complete gym operations.",
    image: "/projects/flextrack.jpg",
    type: "Full Stack Web & Mobile",
    icon: Globe,
    technologies: [
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Firebase",
      "Stripe",
    ],
    features: [
      "Multi-location Support",
      "Turn Tracker",
      "Payroll Management",
      "Reservation System",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "2 months",
    category: "web",
  },
];

const skillsData = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: "/icons/react.png",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "/icons/next_js.png",
    color: "from-gray-800 to-gray-600",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "/icons/typescript.png",
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "/icons/javascript.png",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "/icons/tailwind_css.png",
    color: "from-cyan-400 to-teal-400",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "/icons/bootstrap.png",
    color: "from-purple-500 to-purple-700",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "/icons/node_js.png",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Next.js",
    category: "Backend",
    icon: "/icons/next_js.png",
    color: "from-gray-800 to-gray-600",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "/icons/express.png",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: "/icons/firebase.png",
    color: "from-orange-400 to-yellow-500",
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    icon: "/icons/react.png",
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Expo",
    category: "Mobile",
    icon: "/icons/expo.png",
    color: "from-indigo-500 to-blue-500",
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "/icons/postgresql.png",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "/icons/mongodb.png",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Prisma",
    category: "Database",
    icon: "/icons/postgresql.png", // Using PostgreSQL icon as Prisma works with it
    color: "from-indigo-600 to-purple-600",
  },

  // DevOps & Cloud
  {
    name: "Docker",
    category: "DevOps",
    icon: "/icons/docker.png",
    color: "from-blue-500 to-blue-700",
  },
  // {
  //   name: "Kubernetes",
  //   category: "DevOps",
  //   icon: "/icons/kubernetes.png",
  //   color: "from-blue-600 to-indigo-600",
  // },
  // {
  //   name: "AWS",
  //   category: "DevOps",
  //   icon: "/icons/aws.png",
  //   color: "from-orange-500 to-yellow-500",
  // },
  // {
  //   name: "Digital Ocean",
  //   category: "DevOps",
  //   icon: "/icons/digital_ocean.png",
  //   color: "from-blue-500 to-cyan-500",
  // },
  // {
  //   name: "Linux",
  //   category: "DevOps",
  //   icon: "/icons/linux.png",
  //   color: "from-gray-700 to-black",
  // },
  {
    name: "CI/CD",
    category: "DevOps",
    icon: "/icons/ci_cd.png",
    color: "from-green-500 to-green-700",
  },

  // Tools & Others
  {
    name: "Git",
    category: "Tools",
    icon: "/icons/git.png",
    color: "from-orange-600 to-red-600",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "/icons/github.png",
    color: "from-gray-700 to-black",
  },
  {
    name: "Bitbucket",
    category: "Tools",
    icon: "/icons/bitbucket.png",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "/icons/visual_studio_code.png",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Android Studio",
    category: "Tools",
    icon: "/icons/android_studio.png",
    color: "from-green-500 to-green-700",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "DevOps",
  "Tools",
];

export {
  stats,
  techStack,
  contactInfo,
  socialLinks,
  projectTypes,
  experiences,
  projects,
  skillsData,
  categories,
};

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
  { label: "Years Experience", value: "3+", icon: Award },
  { label: "Projects Completed", value: "20+", icon: Code },
  { label: "Mobile Apps", value: "10+", icon: Smartphone },
  { label: "Cloud Deployments", value: "15+", icon: Cloud },
];

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Laravel"],
  DevOps: ["Docker", "Kubernetes", "AWS", "DigitalOcean", "Linux"],
  Tools: ["Git", "VS Code", "Bitbucket", "Gtilab", "Github"],
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "codewithkashif318@gmail.com",
    href: "mailto:codewithkashif318@gmail.com",
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
    duration: "2023 - Present",
    description:
      "Leading comprehensive full-stack development initiatives spanning web, mobile, and DevOps domains. Architected and deployed high-availability infrastructure solutions while managing cross-functional development teams.",
    achievements: [
      "Managed a team of 12 developers across multiple projects",
      "Successfully led 10+ major projects from conception to deployment",
      "Built high-availability server infrastructure from scratch with zero downtime",
      "Implemented DNS failover and load balancing systems handling 10k users per minute",
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
      "Kubernetes",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Linux",
      "CI/CD",
    ],
    color: "border-primary",
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Independent Contractor",
    type: "Freelance",
    location: "Remote",
    icon: "/fiverr.png",
    duration: "2022 - 2023",
    description:
      "Delivered custom web applications for various clients including healthcare and educational sectors. Specialized in creating user-centric solutions with modern web technologies.",
    achievements: [
      "Developed lost/found item tracker system for university management",
      "Built InstaCare platform connecting patients with healthcare providers",
      "Created comprehensive appointment management system for doctors",
      "Implemented online video meeting capabilities for medical consultations",
      "Maintained 100% client satisfaction across all delivered projects",
      "Established strong foundation in modern web development practices",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
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
    title: "Ferd AI - AI Design Generator",
    description:
      "An intelligent design generation platform that collects user requirements and creates custom designs, components, and design tokens using advanced AI algorithms.",
    image: "/projects/ferd.png",
    type: "Full Stack Web",
    icon: Globe,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "OpenAI", "TypeScript"],
    features: [
      "AI-Powered Design",
      "Component Generation",
      "Design Tokens",
      "User Requirements",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "4 months",
    category: "web",
  },
  {
    title: "OrbyPOS - Restaurant Management System",
    description:
      "Comprehensive restaurant POS management system featuring menu management, inventory tracking, stock control, order processing, analytics dashboard, taxation system, multi-role access, and subscription management with payment gateway integration.",
    image: "/projects/orbypos.png",
    type: "Full Stack Web",
    icon: Globe,
    technologies: ["Next.js", "Material UI", "Prisma", "PostgreSQL", "Stripe"],
    features: [
      "Menu Management",
      "Inventory Control",
      "Analytics Dashboard",
      "Multi-role Access",
    ],
    github: "#",
    demo: "#",
    role: "Lead Full Stack Developer",
    duration: "7 months",
    category: "web",
  },
  {
    title: "Future Soul - Dating & Matchmaking App",
    description:
      "Modern dating and matchmaking mobile application with comprehensive matching algorithms, real-time chat features, audio and video calling capabilities, and all standard dating app functionalities.",
    image: "/projects/futuresoul.png",
    type: "Mobile App",
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
    title: "Orby Waiter - POS Waiter Application",
    description:
      "Dedicated waiter application for restaurant POS systems featuring order management, menu browsing, payment processing, printing integration, and real-time notifications for seamless restaurant operations.",
    image: "/projects/waiter.png",
    type: "Mobile App",
    icon: Smartphone,
    technologies: [
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Prisma",
      "Firebase",
    ],
    features: [
      "Order Management",
      "Real-time Notifications",
      "Print Integration",
      "Payment Processing",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "3 months",
    category: "mobile",
  },
  {
    title: "Future Kiosk - Self-Ordering System",
    description:
      "Self-service ordering kiosk system for restaurants with interactive menu display, QR code scanning, order tracking, payment processing, and automatic printing integration for enhanced customer experience.",
    image: "/projects/future-kiosk.png",
    type: "Mobile App",
    icon: Smartphone,
    technologies: [
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Prisma",
      "Firebase",
    ],
    features: [
      "Self-Service Ordering",
      "QR Code Scanning",
      "Order Tracking",
      "Auto Printing",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "4 months",
    category: "mobile",
  },
  {
    title: "Brid St - Stock Management System",
    description:
      "Comprehensive stock management application connecting restaurant and business owners with stock suppliers. Features stock order tracking, menu management, inventory control, and supplier coordination for seamless business operations.",
    image: "/projects/brid-st.png",
    type: "Full Stack Mobile & Web",
    icon: Globe,
    technologies: [
      "React Native",
      "Next.js",
      "PostgreSQL",
      "Firebase",
      "TypeScript",
    ],
    features: [
      "Stock Order Tracking",
      "Menu Management",
      "Supplier Coordination",
      "Inventory Control",
    ],
    github: "#",
    demo: "#",
    role: "Full Stack Developer",
    duration: "3 months",
    category: "web",
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
    title: "Cashpier - Steam Trading Marketplace",
    description:
      "Advanced Steam trading marketplace platform enabling users to login with Steam, list gaming items for sale, and facilitate automated purchases. Features integrated trading bots, automated trade offer initiation, and seamless payment processing.",
    image: "/projects/cashpier.png",
    type: "Full Stack Web",
    icon: Globe,
    technologies: ["Next.js", "PostgreSQL", "Firebase", "Steam API", "Stripe"],
    features: [
      "Steam Integration",
      "Automated Trading Bots",
      "Trade Offer System",
      "Payment Processing",
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
  {
    name: "Laravel",
    category: "Backend",
    icon: "/icons/laravel.png",
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
    name: "MySQL",
    category: "Database",
    icon: "/icons/mysql.png",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "/icons/mongodb.png",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Redis",
    category: "Database",
    icon: "/icons/redis.png",
    color: "from-red-500 to-red-600",
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
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: "/icons/kubernetes.png",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "AWS",
    category: "DevOps",
    icon: "/icons/aws.png",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Digital Ocean",
    category: "DevOps",
    icon: "/icons/digital_ocean.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Linux",
    category: "DevOps",
    icon: "/icons/linux.png",
    color: "from-gray-700 to-black",
  },
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
    name: "GitLab",
    category: "Tools",
    icon: "/icons/gitlab.png",
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

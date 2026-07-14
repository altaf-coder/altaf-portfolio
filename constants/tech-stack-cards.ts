export interface TechDeckSkill {
  name: string;
  icon: string;
}

export interface TechDeckCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accent: string;
  accentSoft: string;
  suit: string;
  suitColor: string;
  skills: TechDeckSkill[];
}

export const techDeckCards: TechDeckCard[] = [
  {
    id: "frontend",
    title: "Frontend",
    tagline: "Interfaces & user experience",
    description:
      "Building fast, accessible, and polished web interfaces with modern React ecosystems.",
    icon: "/icons/react.png",
    accent: "#8b5cf6",
    accentSoft: "rgba(139, 92, 246, 0.18)",
    suit: "♠",
    suitColor: "#c4b5fd",
    skills: [
      { name: "React", icon: "/icons/react.png" },
      { name: "Next.js", icon: "/icons/next_js.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" },
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "Tailwind", icon: "/icons/tailwind_css.png" },
      { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    tagline: "APIs & server logic",
    description:
      "Designing scalable APIs, authentication flows, and reliable server-side architecture.",
    icon: "/icons/node_js.png",
    accent: "#0ea5e9",
    accentSoft: "rgba(14, 165, 233, 0.18)",
    suit: "♣",
    suitColor: "#7dd3fc",
    skills: [
      { name: "Node.js", icon: "/icons/node_js.png" },
      { name: "Next.js", icon: "/icons/next_js.png" },
      { name: "Express", icon: "/icons/express.png" },
      { name: "Firebase", icon: "/icons/firebase.png" },
    ],
  },
  {
    id: "database",
    title: "Database",
    tagline: "Data & persistence",
    description:
      "Modeling data, writing efficient queries, and integrating ORMs for production apps.",
    icon: "/icons/postgresql.png",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.18)",
    suit: "♦",
    suitColor: "#fcd34d",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "Prisma", icon: "/icons/postgresql.png" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    tagline: "Deploy, automate & ship",
    description:
      "Containerizing apps, CI/CD pipelines, and version-control workflows for reliable releases.",
    icon: "/icons/docker.png",
    accent: "#f97316",
    accentSoft: "rgba(249, 115, 22, 0.18)",
    suit: "♥",
    suitColor: "#fdba74",
    skills: [
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "CI/CD", icon: "/icons/ci_cd.png" },
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
      { name: "VS Code", icon: "/icons/visual_studio_code.png" },
    ],
  },
];

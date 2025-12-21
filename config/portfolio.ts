// Portfolio Configuration
// Update this file with your personal information

export const portfolioConfig = {
  // Personal Information
  name: "Your Name",
  title: "Full-Stack Engineer",
  tagline: "Building Scalable Experiences",
  description: "React, Node.js, and the relentless pursuit of performance.",
  
  // About Section
  bio: {
    intro: "A passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in creating seamless user experiences backed by robust, performant architectures.",
    philosophy: "My approach combines modern design principles with cutting-edge technology to deliver solutions that not only look great but perform exceptionally.",
  },
  
  // Metrics
  metrics: {
    yearsExperience: 5,
    projectsCompleted: 20,
    technologiesMastered: 30,
    clientSatisfaction: 98,
    coffeeDrank: 9999,
  },
  
  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
    resume: "/resume.pdf",
    twitter: "https://twitter.com/yourusername",
  },
  
  // Tech Stack
  technologies: [
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "nodedotjs",
    "express",
    "mongodb",
    "postgresql",
    "docker",
    "aws",
    "tailwindcss",
    "python",
    "git",
    "github",
  ],
  
  // Projects
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and an admin dashboard.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Task Management SaaS",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content creation platform that generates blog posts, social media content, and marketing copy using advanced language models.",
      tags: ["Next.js", "OpenAI", "Python", "FastAPI"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "A comprehensive analytics platform with real-time data visualization, custom reporting, and predictive insights.",
      tags: ["React", "D3.js", "GraphQL", "AWS"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Social Media Platform",
      description: "A modern social networking application with user profiles, real-time messaging, content feeds, and media sharing capabilities.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
  ],
  
  // Experience
  experience: [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications, mentoring junior developers, and implementing best practices for CI/CD pipelines.",
      codeExample: {
        before: `// Unoptimized query
const users = await db.users.findMany({
  include: { posts: true, comments: true }
});`,
        after: `// Optimized with pagination & selective loading
const users = await db.users.findMany({
  take: 10,
  skip: page * 10,
  select: { id: true, name: true, email: true }
});`,
      },
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, focusing on React and Node.js ecosystems. Improved application performance by 40%.",
      codeExample: {
        before: `// Blocking synchronous operation
const data = processLargeDataset(input);
res.json(data);`,
        after: `// Non-blocking async operation
const data = await processLargeDatasetAsync(input);
res.json(data);`,
      },
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Contributed to building MVPs for various startups, learned modern development practices, and gained experience with cloud infrastructure.",
      codeExample: {
        before: `// Repeated code
if (user.role === 'admin') {
  // admin logic
} else if (user.role === 'moderator') {
  // moderator logic
}`,
        after: `// Strategy pattern
const roleHandlers = {
  admin: () => handleAdmin(),
  moderator: () => handleModerator()
};
roleHandlers[user.role]?.();`,
      },
    },
  ],
  
  // Blog Posts
  blogPosts: [
    {
      title: "The Power of Server Components",
      description: "Exploring React Server Components and their impact on modern web development",
      date: "Dec 2024",
      tags: ["React", "Next.js", "Performance"],
      url: "#",
    },
    {
      title: "Optimizing PostgreSQL Queries",
      description: "Advanced techniques for database query optimization and indexing strategies",
      date: "Nov 2024",
      tags: ["PostgreSQL", "Database", "Optimization"],
      url: "#",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description: "Best practices for creating maintainable and performant backend services",
      date: "Oct 2024",
      tags: ["Node.js", "API", "Architecture"],
      url: "#",
    },
    {
      title: "Mastering TypeScript Generics",
      description: "A deep dive into type-safe code with advanced TypeScript patterns",
      date: "Sep 2024",
      tags: ["TypeScript", "Programming", "Best Practices"],
      url: "#",
    },
    {
      title: "CI/CD Pipeline Best Practices",
      description: "Automating deployments and ensuring code quality with modern DevOps",
      date: "Aug 2024",
      tags: ["DevOps", "CI/CD", "Automation"],
      url: "#",
    },
  ],
};


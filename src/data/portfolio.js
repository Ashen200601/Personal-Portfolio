// ───────────────────────────────────────────────────────────
// All portfolio content lives here. Replace the demo values
// with your own details — the components read from this file.
// ───────────────────────────────────────────────────────────

export const profile = {
  name: "Alex Morgan",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "React Enthusiast", "UI Craftsman", "Problem Solver"],
  tagline:
    "I build fast, accessible and beautiful web experiences — from pixel-perfect interfaces to scalable back-ends.",
  location: "Remote · Worldwide",
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  resumeUrl: "#",
  avatar: "", // e.g. "/avatar.jpg" (put the image in /public). Empty = initials.
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
  },
};

export const about = {
  paragraphs: [
    "I'm a developer who loves turning ideas into polished products. Over the past few years I've worked on everything from small business websites to large-scale dashboards used by thousands of people.",
    "My focus is on clean architecture, thoughtful design and performance. When I'm not coding, you'll find me exploring new tech, contributing to open source, or sketching UI ideas.",
  ],
  stats: [
    { value: "3+", label: "Years experience" },
    { value: "25+", label: "Projects completed" },
    { value: "15+", label: "Happy clients" },
    { value: "∞", label: "Cups of coffee" },
  ],
};

// Icon keys map to react-icons in src/sections/Skills.jsx
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", level: 90 },
      { name: "JavaScript", icon: "js", level: 90 },
      { name: "TypeScript", icon: "ts", level: 80 },
      { name: "Tailwind CSS", icon: "tailwind", level: 88 },
      { name: "HTML5", icon: "html", level: 95 },
      { name: "CSS3", icon: "css", level: 88 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "node", level: 82 },
      { name: "Express", icon: "express", level: 80 },
      { name: "MongoDB", icon: "mongo", level: 75 },
      { name: "PostgreSQL", icon: "postgres", level: 70 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git", level: 88 },
      { name: "Figma", icon: "figma", level: 75 },
      { name: "Docker", icon: "docker", level: 65 },
      { name: "VS Code", icon: "vscode", level: 92 },
    ],
  },
];

export const projects = [
  {
    title: "ShopSphere",
    description:
      "A full-featured e-commerce platform with cart, payments, admin dashboard and real-time order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full-Stack",
    gradient: "from-indigo-500 to-violet-600",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "TaskFlow",
    description:
      "Kanban-style project management app with drag & drop, team collaboration and dark mode.",
    tags: ["React", "Tailwind", "Firebase"],
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-600",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "WeatherNow",
    description:
      "Beautiful weather dashboard with 7-day forecasts, location search and animated conditions.",
    tags: ["React", "API", "Charts"],
    category: "Frontend",
    gradient: "from-amber-500 to-orange-600",
    live: "#",
    github: "#",
  },
  {
    title: "DevBlog API",
    description:
      "RESTful blogging API with JWT auth, role-based access, pagination and full test coverage.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    category: "Backend",
    gradient: "from-emerald-500 to-teal-600",
    live: "#",
    github: "#",
  },
  {
    title: "ChatWave",
    description:
      "Real-time chat app with rooms, typing indicators, file sharing and message reactions.",
    tags: ["React", "Socket.io", "Node.js"],
    category: "Full-Stack",
    gradient: "from-pink-500 to-rose-600",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio v1",
    description: "My first personal site — a responsive single-page portfolio with smooth animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    gradient: "from-slate-500 to-slate-700",
    live: "#",
    github: "#",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    school: "State University",
    period: "2019 — 2023",
    description:
      "Focused on software engineering, data structures and web technologies. Graduated with honors.",
    highlights: ["GPA 3.8 / 4.0", "Dean's List", "Final project: AI study planner"],
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    school: "Online Academy",
    period: "2022",
    description: "Intensive program covering the MERN stack, testing and deployment.",
    highlights: ["12 hands-on projects", "Capstone: e-commerce app"],
  },
  {
    degree: "Higher Secondary Education",
    school: "City High School",
    period: "2017 — 2019",
    description: "Science stream with Mathematics and Computer Science.",
    highlights: ["92% aggregate"],
  },
];

export const certifications = [
  { name: "Meta Front-End Developer", issuer: "Coursera", year: "2023" },
  { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2022" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024" },
];

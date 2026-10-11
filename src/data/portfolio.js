
export const profile = {
  name: "Ashen Nayanajith",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Backend Developer","Entrepreneur","ZOHO Consultant", "Problem Solver"],
  tagline:
    "Building practical software solutions with a mindset for both technology and business.",
  location: "Remote · Worldwide",
  email: "ashennayanajith06@gmail.com",
  phone: "0762690393",
  resumeUrl: "#",
  photo: "/profile-cutout.webp", // background-removed portrait in /public
  socials: {
    github: "https://github.com/Ashen200601",
    linkedin: "https://www.linkedin.com/in/ashen-nayanajith-783632342",
    
  },
};

export const about = {
  paragraphs: [
    "I am a Business Information Systems student and aspiring full-stack developer with a strong interest in technology, business, and entrepreneurship. My journey from Commerce and ICT into software development has helped me understand both business needs and technical solutions. I am continuously developing my skills in modern software technologies while strengthening my ability to identify real-world problems, explore opportunities, and turn ideas into practical solutions. I believe in learning by doing, taking on challenges, and continuously improving myself to become a developer with an entrepreneurial mindset who creates meaningful value through technology."
  ],
  stats: [
    { value: "2+", label: "Years experience" },
    { value: "4+", label: "Projects completed" },
    { value: "4+", label: "Happy clients" },
    { value: "∞", label: "Cups of coffee" },
  ],
};


export const experience = [
  {
    role: "Forward Deployment Engineer",
    company: "Delorean Lanka Solutions",
    start: "2026-07-01", // YYYY-MM-DD
    end: null, // current role
    description:
      "Working directly with clients to build, deploy and support industrial-grade applications, covering development, database operations, Zoho consulting and implementation.",
    areas: [
      "Industrial-Grade Development",
      "Database Operations",
      "Zoho Consulting & Implementation",
      "Problem Solving",
    ],
    highlights: [
      "Handle several major transporters and corporate customers as clients, adapting and deploying solutions to fit their operations.",
      "Deliver major developments on industrial-grade applications using Java and Spring Boot.",
      "Manage database operations on PostgreSQL for client production systems.",
      "Provide Zoho consulting and end-to-end implementations for client business processes.",
      "Solve technical and business problems for clients, from diagnosing root causes to delivering fixes.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "JasperReports", "JavaScript", "GitHub", "Zoho"],
  },
  {
    role: "Senior Implementation Engineer",
    company: "Asian Logistic Solutions",
    start: "2025-01-01", // YYYY-MM-DD
    end: "2026-07-03", // set to null for a current role ("Present")
    description:
      "Worked across implementation, Java backend development, database administration and data analytics for a Transport Management System (TMS), progressing to the role of Senior Implementation Engineer.",
    areas: [
      "Java Backend Development",
      "Database Administration",
      "TMS Development",
      "Data Analytics",
      "Zoho Consulting",
    ],
    highlights: [
      "Handled several major transporters and corporate customers as clients, delivering system implementations tailored to their operations.",
      "Developed Java backend services and business logic for the Transport Management System.",
      "Administered PostgreSQL databases powering the transport management platform.",
      "Developed and enhanced Transport Management System front-end features using JavaScript, HTML and CSS.",
      "Designed business and operational reports with JasperReports.",
      "Built data analytics dashboards in Metabase to give clients and management visibility into their operations.",
      "Worked as a Zoho consultant, configuring Zoho solutions to fit client business processes.",
    ],
    tags: ["Java", "PostgreSQL", "JasperReports", "Metabase", "JavaScript", "HTML", "CSS", "GitHub", "Zoho"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", level: 85 },
      { name: "Next.js", icon: "next", level: 75 },
      { name: "JavaScript", icon: "js", level: 85 },
      { name: "TypeScript", icon: "ts", level: 70 },
      { name: "Tailwind CSS", icon: "tailwind", level: 80 },
      { name: "HTML5", icon: "html", level: 90 },
      { name: "CSS3", icon: "css", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: "java", level: 85 },
      { name: "Spring Boot", icon: "spring", level: 80 },
      { name: "Spring Security", icon: "springsecurity", level: 70 },
      { name: "REST APIs", icon: "api", level: 80 },
      { name: "JWT Authentication", icon: "jwt", level: 75 },
      { name: "JPA / Hibernate", icon: "hibernate", level: 75 },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "PostgreSQL", icon: "postgres", level: 80 },
      { name: "Git", icon: "git", level: 85 },
      { name: "GitHub", icon: "github", level: 85 },
      { name: "Docker", icon: "docker", level: 65 },
      { name: "AWS", icon: "aws", level: 55 },
      { name: "VS Code", icon: "vscode", level: 90 },
    ],
  },
];

export const projects = [
  {
    title: "ExamFlow",
    description:
      "A full-stack examination and learning management platform with student, instructor, teacher, admin and payment management features.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    category: "Full-Stack",
    gradient: "from-indigo-500 to-violet-600",
    live: "#",
    github: "#",
    featured: true,
    status: "Ongoing",
  },
  {
    title: "JobPulse",
    description:
      "A full-stack job portal designed to connect job seekers and employers with authentication, job management and user-specific features.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    category: "Full-Stack",
    gradient: "from-cyan-500 to-blue-600",
    live: "#",
    github: "#",
    featured: true,
    status: "Completed",
  },
  {
    title: "BizBook365",
    description:
      "An e-commerce web application built with WordPress and WooCommerce, providing an online platform for products, customers and online sales.",
    tags: ["WordPress", "WooCommerce", "PHP", "E-Commerce"],
    category: "E-Commerce",
    gradient: "from-amber-500 to-orange-600",
    live: "#",
    github: "#",
    featured: false,
    status: "Completed",
  },
  {
    title: "Courier Management System",
    description:
      "An ongoing project focused on developing a digital solution for managing courier and delivery operations.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    category: "Full-Stack",
    gradient: "from-emerald-500 to-teal-600",
    live: "#",
    github: "#",
    featured: true,
    status: "Ongoing",
  },
];

export const education = [
  {
    degree: "B.Sc. in Business Information Systems",
    school: "University of Sri Jayewardenepura",
    period: "2026 — Present",
    description:
      "Currently pursuing a degree in Business Information Systems, developing knowledge across information technology, business management, software development and digital solutions.",
    highlights: [
      "Currently in 1st Year",
      "Business Information Systems",
      "Technology & Business",
    ],
  },
  {
    degree: "G.C.E. Advanced Level — Commerce Stream",
    school: "Bomiriya Central College",
    period: "2024",
    description:
      "Completed the G.C.E. Advanced Level examination in the Commerce stream, building a strong foundation in business, accounting and economics.",
    highlights: [
      "3 A Passes",
      "Z-Score: 1.94",
      "Commerce Stream",
    ],
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "Bomiriya Central College",
    period: "2021 (2022)",
    description:
      "Completed the G.C.E. Ordinary Level examination with strong academic results and developed an early interest in both business and technology.",
    highlights: [
      "8 A Passes",
      "1 B Pass",
      "Completed in 2021 (Exam held in 2022)",
    ],
  },
];

export const certifications = [
  { name: "Python for Beginners", issuer: "University Of Moratuwa", year: "2022" },
  { name: "Web Development for Beginners", issuer: "University Of Moratuwa", year: "2022" },
];

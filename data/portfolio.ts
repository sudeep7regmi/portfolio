export interface SkillGroup {
    title: string;
    description: string;
    skills: string[];
  }
  
  export interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    number: string;
    featured?: boolean;
    link?: string;
  }
  
  export interface Social {
    name: string;
    value: string;
    href: string;
  }
  
  export const skillGroups: SkillGroup[] = [
    {
      title: "Frontend",
      description: "Building responsive and interactive interfaces.",
      skills: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      description: "Developing APIs and scalable server-side systems.",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO"],
    },
    {
      title: "Database & Tools",
      description: "Working with data, ORM, validation, and development tools.",
      skills: ["MySQL", "Prisma ORM", "Zod", "Git", "GitHub", "Postman"],
    },
  ];
  
  export const projects: Project[] = [
    {
      title: "SATHI",
      category: "Final Year Project",
      description:
        "A real-time futsal coordination and management platform that helps players discover grounds, organize matches, manage bookings, and communicate.",
      tech: ["Next.js", "Node.js", "MySQL", "Prisma", "Socket.IO"],
      number: "01",
      featured: true,
    },
    {
      title: "HRM System",
      category: "Full Stack Application",
      description:
        "A human resource management system for managing employees, salaries, leave requests, and payroll operations through a centralized dashboard.",
      tech: ["Next.js", "MySQL", "Prisma", "TypeScript"],
      link: "https://hrm.growssence.com",
      number: "02",
    },
    {
      title: "Government Feedback & Notice System",
      category: "E-Governance",
      description:
        "A full-stack platform where citizens can submit complaints while administrators manage official notices and analytical reports.",
      tech: ["Node.js", "MySQL", "JWT"],
      link: "https://devbhujel.com.np",
      number: "03",
    },
    {
      title: "AI Assistant",
      category: "AI Application",
      description:
        "An AI-powered web assistant integrating specialized language models to deliver interactive multi-modal responses.",
      tech: ["React", "Node.js", "AI APIs"],
      link: "https://ai-chatbot-wb64.vercel.app/",
      number: "04",
    },
    {
      title: "JobConnect",
      category: "Web Application",
      description:
        "A recruitment portal concept designed to bridge candidate search and application tracking workflows.",
      tech: ["Next.js", "Express.js", "MySQL"],
      number: "05",
    },
  ];
  
  export const socials: Social[] = [
    {
      name: "GitHub",
      value: "github.com/sudeep7regmi",
      href: "https://github.com/sudeep7regmi",
    },
    {
      name: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/sudeep-regmi-94a6b2230",
    },
    {
      name: "Medium",
      value: "@sudeepregmi343",
      href: "https://medium.com/@sudeepregmi343",
    },
  ];
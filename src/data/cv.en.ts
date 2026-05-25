import type { CV } from "./types";

export const cvData: CV = {
  personalInfo: {
    name: "Fadi Suleiman",
    jobTitle: "Web Developer",
    tagline:
      "Frontend and full-stack development with a focus on quality, clarity, and sustainable architecture.",
    gender: "Male",
    maritalStatus: "Married",
    birthDate: "27.03.1991",
    birthPlace: "Damascus / Syria",
    nationality: "German",
    profileImage: "/favicon.ico",
  },
  contact: {
    email: "info@fadisuleiman.com",
    phone: "+49 1577 3594045",
    city: "Duisburg",
    country: "Germany",
  },
  intro:
    "Web developer with several years of experience in the agile development of modern web applications for the German market. Focus on Angular, React, TypeScript as well as .NET and Java back-ends. I value clean architecture, test coverage, and readable code.",
  skills: [
    {
      name: "Frontend",
      content: [
        "Angular",
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS",
        "SCSS",
        "LESS",
        "Node.js",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      name: "Backend",
      content: ["C#", "ASP.NET Core", "Java", "Jakarta EE (Java EE)", "Hibernate"],
    },
    {
      name: "Databases",
      content: ["Microsoft SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      name: "Testing",
      content: ["Karma", "Jest", "JUnit", "NUnit", "Cypress"],
    },
    {
      name: "Project Management",
      content: ["Agile (Scrum)", "Jira"],
    },
    {
      name: "Version Control",
      content: ["Git", "GitHub", "GitLab"],
    },
    {
      name: "DevOps",
      content: ["Azure DevOps", "Jenkins (CI/CD)", "Docker"],
    },
    {
      name: "IDEs",
      content: ["VS Code", "WebStorm", "IntelliJ IDEA", "Visual Studio"],
    },
  ],
  experiences: [
    {
      position: "Web Developer",
      company: "Camao GmbH",
      location: "Heilbronn",
      startDate: "04.2021",
      endDate: "05.2023",
      responsibilities: [
        "Development of agile web applications",
        "Implementation of responsive UI components, as well as design and UI/UX specifications",
        "Integration of RESTful APIs and collaboration with backend teams",
        "Quality assurance through code reviews and unit tests",
      ],
    },
    {
      position: "Software Quality Assurance",
      company: "Hays (SAB-Engineering)",
      location: "Heilbronn",
      startDate: "12.2019",
      endDate: "05.2020",
      responsibilities: [
        "Planning and execution of manual tests",
        "Creation and maintenance of test cases and test documentation",
      ],
    },
    {
      position: "Web Developer",
      company: "iteratec GmbH",
      location: "Stuttgart",
      startDate: "01.2018",
      endDate: "11.2019",
      responsibilities: [
        "Development of custom web applications in an agile environment",
        "Frontend development with modern frameworks",
      ],
    },
    {
      position: "Sales Assistant",
      company: "Bäckerei Büsch",
      location: "Duisburg",
      startDate: "11.2025",
      endDate: "01.2026",
      isSecondaryJob: true,
    },
  ],
  projects: [
    {
      name: "Portfolio Website",
      startDate: "02.2026",
      endDate: "present",
      description:
        "Personal portfolio website presenting my projects, technical skills, and professional experience as a web developer.",
      role: "Software developer (personal project)",
      technologies: ["React", "Docker"],
      link: "https://fadisuleiman.com",
      sourceCode: "https://github.com/fadisuleiman1991/portfolio-frontend",
    },
    {
      name: "Mobility Service Management System",
      startDate: "06.2025",
      endDate: "11.2025",
      description: "Android application for managing vehicles and mobility services.",
      role: "Technical product coordinator",
      technologies: ["Flutter", "NestJS"],
    },
    {
      name: "Travel Booking App (Schwarz Group / Lidl)",
      startDate: "12.2022",
      endDate: "05.2023",
      description: "Travel portal for package and individual trips.",
      role: "Collaboration with the designer and implementation of UI/UX specifications",
      technologies: ["Angular", "ASP.NET", "Sitecore", "Zeplin"],
    },
    {
      name: "Resource-Based Project Planning Tool",
      startDate: "10.2022",
      endDate: "11.2022",
      description:
        "Microsoft Teams app for managing employees, roles, and skills.",
      role: "Technical mentor for a trainee",
      technologies: ["React", "Fluent UI", "Go"],
    },
    {
      name: "Project Management Tool",
      startDate: "10.2021",
      endDate: "09.2022",
      description:
        "Web application for managing project tasks via a workflow dashboard and task forms.",
      role: "Implementation of frontend features and RESTful API integration",
      technologies: ["Angular", "ASP.NET", "Microsoft SQL Server"],
    },
  ],
  activities: [
    {
      name: "Technology Mapping & Tool Research",
      startDate: "06.2024",
      endDate: "02.2025",
      responsibilities: [
        "Created a structured overview of common web and software technologies in 4 main categories: development, operations, quality assurance, enterprise solutions",
        "Analysis of tools, frameworks, and methods to identify trends in the German software market",
      ],
    },
    {
      name: "TikTok Educational Project (German)",
      startDate: "08.2025",
      endDate: "11.2025",
      responsibilities: [
        "Creating educational content on software development and IT topics in German",
      ],
    },
    {
      name: "Java Training for Beginners",
      startDate: "11.2024",
      endDate: "02.2025",
      responsibilities: [
        "Designed and delivered Java fundamentals training",
      ],
    },
    {
      name: "Career Reorientation & Application Qualification",
      startDate: "03.2024",
      endDate: "05.2024",
    },
  ],
  onlineProfiles: [
    { name: "GitHub", link: "https://github.com/fadisuleiman1991" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/fadi-suleiman-811834131",
    },
    {
      name: "XING",
      link: "https://www.xing.com/profile/Fadi_Suleiman/web_profiles",
    },
    { name: "Portfolio", link: "https://www.fadisuleiman.com" },
  ],
  languages: [
    { name: "German", level: "Negotiation-level proficiency", proficiency: 80 },
    { name: "English", level: "Good knowledge", proficiency: 40 },
    { name: "Arabic", level: "Native", proficiency: 100 },
  ],
  trainings: [
    {
      name: "Security Awareness Training",
      institution: "VEGA",
      startDate: "06.2022",
      endDate: "06.2022",
    },
    {
      name: "DevOps Fundamentals",
      institution: "Alfatraining",
      startDate: "09.2020",
      endDate: "09.2020",
    },
    {
      name: "Microsoft Azure Cloud",
      institution: "Alfatraining",
      startDate: "08.2020",
      endDate: "08.2020",
    },
    {
      name: "Software Engineer",
      institution: "iteratec",
      startDate: "07.2019",
      endDate: "07.2019",
    },
    {
      name: "Docker Fundamentals",
      institution: "iteratec",
      startDate: "03.2019",
      endDate: "03.2019",
    },
  ],
  educations: [
    {
      name: "Computer Engineering",
      degree: "Bachelor",
      institution: "University of Damascus",
      startDate: "09.2009",
      endDate: "07.2014",
    },
    {
      name: "High School",
      degree: "Abitur",
      institution: "Al-Saade School",
      startDate: "09.2006",
      endDate: "06.2009",
    },
  ],
};

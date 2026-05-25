import type { CV } from "./types";

export const cvData: CV = {
  personalInfo: {
    name: "Fadi Suleiman",
    jobTitle: "Webentwickler",
    tagline:
      "Frontend- und Fullstack-Entwicklung mit Fokus auf Qualität, Klarheit und nachhaltige Architektur.",
    gender: "männlich",
    maritalStatus: "verheiratet",
    birthDate: "27.03.1991",
    birthPlace: "Damaskus / Syrien",
    nationality: "deutsch",
    profileImage: "/favicon.ico",
  },
  contact: {
    email: "info@fadisuleiman.com",
    phone: "+49 1577 3594045",
    city: "Duisburg",
    country: "Deutschland",
  },
  intro:
    "Webentwickler mit mehrjähriger Erfahrung in der agilen Entwicklung moderner Webanwendungen für den deutschen Markt. Schwerpunkte: Angular, React, TypeScript sowie .NET- und Java-Backends. Ich lege Wert auf saubere Architektur, Testabdeckung und nachvollziehbaren Code.",
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
      name: "Datenbanken",
      content: ["Microsoft SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      name: "Test",
      content: ["Karma", "Jest", "JUnit", "NUnit", "Cypress"],
    },
    {
      name: "Projektmanagement",
      content: ["Agile (Scrum)", "Jira"],
    },
    {
      name: "Versionskontrolle",
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
      position: "Web-Entwickler",
      company: "Camao GmbH",
      location: "Heilbronn",
      startDate: "04.2021",
      endDate: "05.2023",
      responsibilities: [
        "Entwicklung von agilen Webanwendungen",
        "Umsetzung responsiver UI-Komponenten sowie Design- und UI/UX-Vorgaben",
        "Anbindung von RESTful APIs und Zusammenarbeit mit Backend-Teams",
        "Qualitätssicherung durch Code-Reviews und Unit-Tests",
      ],
    },
    {
      position: "Softwarequalitätssicherung",
      company: "Hays (SAB-Engineering)",
      location: "Heilbronn",
      startDate: "12.2019",
      endDate: "05.2020",
      responsibilities: [
        "Planung und Durchführung von manuellen Tests",
        "Erstellung und Pflege von Testfällen und Testdokumentation",
      ],
    },
    {
      position: "Web-Entwickler",
      company: "iteratec GmbH",
      location: "Stuttgart",
      startDate: "01.2018",
      endDate: "11.2019",
      responsibilities: [
        "Entwicklung kundenindividueller Webanwendungen im agilen Umfeld",
        "Frontend-Entwicklung mit modernen Frameworks",
      ],
    },
    {
      position: "Verkäufer",
      company: "Bäckerei Büsch",
      location: "Duisburg",
      startDate: "11.2025",
      endDate: "01.2026",
      isSecondaryJob: true,
    },
  ],
  projects: [
    {
      name: "Portfolio-Website",
      startDate: "02.2026",
      endDate: "heute",
      description:
        "Persönliche Portfolio-Website zur Präsentation meiner Projekte, technischen Fähigkeiten und beruflichen Erfahrungen als Webentwickler.",
      role: "Softwareentwickler (Eigenprojekt)",
      technologies: ["React", "Docker"],
      link: "https://fadisuleiman.com",
      sourceCode: "https://github.com/fadisuleiman1991/portfolio-frontend",
    },
    {
      name: "Mobilitätsservice-Managementsystem",
      startDate: "06.2025",
      endDate: "11.2025",
      description:
        "Android-Anwendung zur Verwaltung von Fahrzeugen und Mobilitätsdiensten.",
      role: "Technischer Produktkoordinator",
      technologies: ["Flutter", "NestJS"],
    },
    {
      name: "Reisebuchungsanwendung (Schwarz-Gruppe / Lidl)",
      startDate: "12.2022",
      endDate: "05.2023",
      description: "Reiseportal für Pauschal- und Individualreisen.",
      role: "Zusammenarbeit mit dem Designer und Umsetzung der UI/UX-Vorgaben",
      technologies: ["Angular", "ASP.NET", "Sitecore", "Zeplin"],
    },
    {
      name: "Tool zur ressourcenbasierten Projektplanung",
      startDate: "10.2022",
      endDate: "11.2022",
      description:
        "Microsoft-Teams-App zur Erfassung von Mitarbeitenden, Rollen und Fähigkeiten.",
      role: "Technischer Mentor für einen Auszubildenden",
      technologies: ["React", "Fluent UI", "Go"],
    },
    {
      name: "Projektmanagement-Tool",
      startDate: "10.2021",
      endDate: "09.2022",
      description:
        "Webanwendung zur Verwaltung von Projektaufgaben über ein Workflow-Dashboard und Aufgabenformulare.",
      role: "Implementierung von Frontend-Funktionalitäten und Anbindung von RESTful APIs",
      technologies: ["Angular", "ASP.NET", "Microsoft SQL Server"],
    },
  ],
  activities: [
    {
      name: "Technologie-Mapping & Tool-Recherche",
      startDate: "06.2024",
      endDate: "02.2025",
      responsibilities: [
        "Erstellung einer strukturierten Übersicht gängiger Web- und Software-Technologien in 4 Hauptkategorien: Entwicklung, Betrieb, Qualitätssicherung, Unternehmenslösungen",
        "Analyse von Tools, Frameworks und Methoden, um Trends im deutschen Softwaremarkt zu identifizieren",
      ],
    },
    {
      name: "TikTok Bildungsprojekt Deutsch",
      startDate: "08.2025",
      endDate: "11.2025",
      responsibilities: [
        "Erstellung von Bildungsinhalten zu Softwareentwicklung und IT-Themen auf Deutsch",
      ],
    },
    {
      name: "Java-Trainings für Einsteiger",
      startDate: "11.2024",
      endDate: "02.2025",
      responsibilities: [
        "Konzeption und Durchführung von Java-Grundlagen-Schulungen",
      ],
    },
    {
      name: "Berufliche Neuorientierung & Bewerbungsqualifizierung",
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
    { name: "Deutsch", level: "Verhandlungssicher", proficiency: 80 },
    { name: "Englisch", level: "Gute Kenntnisse", proficiency: 40 },
    { name: "Arabisch", level: "Muttersprache", proficiency: 100 },
  ],
  trainings: [
    {
      name: "Awareness Schulungen (Sicherheit)",
      institution: "VEGA",
      startDate: "06.2022",
      endDate: "06.2022",
    },
    {
      name: "DevOps Grundlagen",
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
      name: "Software-Engineer",
      institution: "iteratec",
      startDate: "07.2019",
      endDate: "07.2019",
    },
    {
      name: "Docker Grundlagen",
      institution: "iteratec",
      startDate: "03.2019",
      endDate: "03.2019",
    },
  ],
  educations: [
    {
      name: "Informatik-Ingenieurwesen",
      degree: "Bachelor",
      institution: "Universität Damaskus",
      startDate: "09.2009",
      endDate: "07.2014",
    },
    {
      name: "Gymnasium",
      degree: "Abitur",
      institution: "Al-Saade Schule",
      startDate: "09.2006",
      endDate: "06.2009",
    },
  ],
};

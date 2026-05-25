import type { CV } from "./types";

export const cvData: CV = {
  personalInfo: {
    name: "فادي سليمان",
    jobTitle: "مطوّر ويب",
    tagline:
      "تطوير واجهات أمامية وحلول متكاملة بتركيز على الجودة والوضوح والهندسة المستدامة.",
    gender: "ذكر",
    maritalStatus: "متزوج",
    birthDate: "27.03.1991",
    birthPlace: "دمشق / سوريا",
    nationality: "ألماني",
    profileImage: "/favicon.ico",
  },
  contact: {
    email: "info@fadisuleiman.com",
    phone: "+49 1577 3594045",
    city: "دويسبورغ",
    country: "ألمانيا",
  },
  intro:
    "مطوّر ويب يمتلك سنوات من الخبرة في تطوير تطبيقات الويب الحديثة بمنهجية رشيقة للسوق الألماني. التركيز على Angular وReact وTypeScript بالإضافة إلى خلفيات .NET وJava. أهتمّ بالهندسة النظيفة وتغطية الاختبارات وكتابة شيفرة مقروءة.",
  skills: [
    {
      name: "الواجهة الأمامية",
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
      name: "الخلفية",
      content: ["C#", "ASP.NET Core", "Java", "Jakarta EE (Java EE)", "Hibernate"],
    },
    {
      name: "قواعد البيانات",
      content: ["Microsoft SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      name: "الاختبارات",
      content: ["Karma", "Jest", "JUnit", "NUnit", "Cypress"],
    },
    {
      name: "إدارة المشاريع",
      content: ["Agile (Scrum)", "Jira"],
    },
    {
      name: "التحكم في الإصدارات",
      content: ["Git", "GitHub", "GitLab"],
    },
    {
      name: "DevOps",
      content: ["Azure DevOps", "Jenkins (CI/CD)", "Docker"],
    },
    {
      name: "بيئات التطوير",
      content: ["VS Code", "WebStorm", "IntelliJ IDEA", "Visual Studio"],
    },
  ],
  experiences: [
    {
      position: "مطوّر ويب",
      company: "Camao GmbH",
      location: "هايلبرون",
      startDate: "04.2021",
      endDate: "05.2023",
      responsibilities: [
        "تطوير تطبيقات ويب بمنهجية رشيقة",
        "تنفيذ مكونات واجهة المستخدم المتجاوبة بالإضافة إلى مواصفات التصميم وواجهة المستخدم/تجربة المستخدم",
        "ربط واجهات RESTful والتعاون مع فرق الخلفية",
        "ضمان الجودة عبر مراجعات الشيفرة واختبارات الوحدة",
      ],
    },
    {
      position: "ضمان جودة البرمجيات",
      company: "Hays (SAB-Engineering)",
      location: "هايلبرون",
      startDate: "12.2019",
      endDate: "05.2020",
      responsibilities: [
        "التخطيط لاختبارات يدوية وتنفيذها",
        "إنشاء حالات اختبار وصيانة وثائق الاختبار",
      ],
    },
    {
      position: "مطوّر ويب",
      company: "iteratec GmbH",
      location: "شتوتغارت",
      startDate: "01.2018",
      endDate: "11.2019",
      responsibilities: [
        "تطوير تطبيقات ويب مخصّصة في بيئة رشيقة",
        "تطوير الواجهة الأمامية باستخدام أطر حديثة",
      ],
    },
    {
      position: "بائع",
      company: "Bäckerei Büsch",
      location: "دويسبورغ",
      startDate: "11.2025",
      endDate: "01.2026",
      isSecondaryJob: true,
    },
  ],
  projects: [
    {
      name: "موقع شخصي (Portfolio)",
      startDate: "02.2026",
      endDate: "حتى الآن",
      description:
        "موقع شخصي لعرض المشاريع والمهارات التقنية والخبرات المهنية كمطوّر ويب.",
      role: "مطوّر برمجيات (مشروع شخصي)",
      technologies: ["React", "Docker"],
      link: "https://fadisuleiman.com",
      sourceCode: "https://github.com/fadisuleiman1991/portfolio-frontend",
    },
    {
      name: "نظام إدارة خدمات التنقّل",
      startDate: "06.2025",
      endDate: "11.2025",
      description: "تطبيق أندرويد لإدارة المركبات وخدمات التنقّل.",
      role: "منسّق منتج تقني",
      technologies: ["Flutter", "NestJS"],
    },
    {
      name: "تطبيق حجز رحلات (Schwarz Group / Lidl)",
      startDate: "12.2022",
      endDate: "05.2023",
      description: "بوّابة سفر للرحلات المجمّعة والفردية.",
      role: "التعاون مع المصمّم وتنفيذ مواصفات تجربة المستخدم",
      technologies: ["Angular", "ASP.NET", "Sitecore", "Zeplin"],
    },
    {
      name: "أداة تخطيط مشاريع مبنيّة على الموارد",
      startDate: "10.2022",
      endDate: "11.2022",
      description:
        "تطبيق لـ Microsoft Teams لإدارة الموظفين والأدوار والمهارات.",
      role: "مرشد تقني لمتدرّب",
      technologies: ["React", "Fluent UI", "Go"],
    },
    {
      name: "أداة إدارة مشاريع",
      startDate: "10.2021",
      endDate: "09.2022",
      description:
        "تطبيق ويب لإدارة مهام المشاريع عبر لوحة سير عمل ونماذج مهام.",
      role: "تنفيذ وظائف الواجهة الأمامية وربط واجهات RESTful",
      technologies: ["Angular", "ASP.NET", "Microsoft SQL Server"],
    },
  ],
  activities: [
    {
      name: "خرائط التقنيات وبحث الأدوات",
      startDate: "06.2024",
      endDate: "02.2025",
      responsibilities: [
        "إعداد نظرة منظّمة لتقنيات الويب والبرمجيات الشائعة ضمن 4 فئات رئيسية: التطوير، التشغيل، ضمان الجودة، حلول المؤسسات",
        "تحليل الأدوات والأطر والمنهجيات لرصد التوجّهات في سوق البرمجيات الألماني",
      ],
    },
    {
      name: "مشروع تعليمي على TikTok (بالألمانية)",
      startDate: "08.2025",
      endDate: "11.2025",
      responsibilities: [
        "إنشاء محتوى تعليمي حول تطوير البرمجيات وتقنية المعلومات باللغة الألمانية",
      ],
    },
    {
      name: "تدريبات Java للمبتدئين",
      startDate: "11.2024",
      endDate: "02.2025",
      responsibilities: [
        "تصميم وتقديم تدريبات أساسيات Java",
      ],
    },
    {
      name: "إعادة توجيه مهني وتأهيل للتقدّم للوظائف",
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
    { name: "الألمانية", level: "احترافي جدا", proficiency: 80 },
    { name: "الإنجليزية", level: "معرفة جيدة", proficiency: 40 },
    { name: "العربية", level: "اللغة الأم", proficiency: 100 },
  ],
  trainings: [
    {
      name: "تدريبات التوعية الأمنية",
      institution: "VEGA",
      startDate: "06.2022",
      endDate: "06.2022",
    },
    {
      name: "أساسيات DevOps",
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
      name: "مهندس برمجيات",
      institution: "iteratec",
      startDate: "07.2019",
      endDate: "07.2019",
    },
    {
      name: "أساسيات Docker",
      institution: "iteratec",
      startDate: "03.2019",
      endDate: "03.2019",
    },
  ],
  educations: [
    {
      name: "هندسة المعلوماتية",
      degree: "بكالوريوس",
      institution: "جامعة دمشق",
      startDate: "09.2009",
      endDate: "07.2014",
    },
    {
      name: "الثانوية العامة",
      degree: "شهادة الثانوية (Abitur)",
      institution: "مدرسة السعادة",
      startDate: "09.2006",
      endDate: "06.2009",
    },
  ],
};

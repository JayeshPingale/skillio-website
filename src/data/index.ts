export interface Course {
  id: string;
  title: string;
  category: "testing" | "fullstack" | "data-ai" | "cloud";
  tagline: string;
  duration: string;
  mode: "Classroom + Online" | "Online Live";
  level: "Beginner to Advanced" | "Job Ready Track";
  avgSalary: string;
  tools: string[];
  features: string[];
  popular?: boolean;
}

export const COURSES_DATA: Course[] = [
  {
    id: "software-testing-ai",
    title: "AI-Powered Software Testing (Java + Selenium)",
    category: "testing",
    tagline: "Industry #1 QA course with manual, automation, API testing & GenAI test tools",
    duration: "4 Months",
    mode: "Classroom + Online",
    level: "Job Ready Track",
    avgSalary: "₹4.0L - ₹8.5L",
    popular: true,
    tools: ["Java", "Selenium 4", "TestNG", "Maven", "Postman", "RestAssured", "Git", "Jenkins", "ChatGPT for QA"],
    features: [
      "Live Framework Development from Scratch (POM + Hybrid)",
      "API Testing with Postman & RestAssured",
      "CI/CD Pipeline integration using Jenkins & GitHub Actions",
      "500+ Curated Automation Interview Questions & Daily Mocks"
    ]
  },
  {
    id: "playwright-automation",
    title: "Next-Gen Web Automation with Playwright & TypeScript",
    category: "testing",
    tagline: "Master the fastest growing end-to-end testing tool loved by modern startups",
    duration: "3.5 Months",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    avgSalary: "₹4.5L - ₹9.5L",
    tools: ["TypeScript", "Playwright", "Docker", "GitHub Actions", "Allure Reports", "GraphQL"],
    features: [
      "Cross-browser and mobile web testing emulation",
      "Trace Viewer, Video recording & Parallel test execution",
      "Integration with Jira, Slack & CI/CD",
      "Real-world E-Commerce and Banking app projects"
    ]
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Development (Spring Boot + React)",
    category: "fullstack",
    tagline: "Build enterprise-grade microservices and dynamic responsive web applications",
    duration: "5 Months",
    mode: "Classroom + Online",
    level: "Job Ready Track",
    avgSalary: "₹4.5L - ₹11.0L",
    popular: true,
    tools: ["Core Java", "Spring Boot", "Hibernate", "React.js", "MySQL", "Docker", "REST API", "Kafka"],
    features: [
      "Microservices Architecture with Spring Cloud",
      "Modern React 19 Frontend with State Management",
      "Database schema design, indexing & optimization",
      "3 Full-lifecycle enterprise projects deployed on AWS"
    ]
  },
  {
    id: "mern-stack",
    title: "MERN Full Stack Developer (Next.js + Node.js)",
    category: "fullstack",
    tagline: "Master JavaScript end-to-end from interactive UI to cloud-backed backend",
    duration: "4.5 Months",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    avgSalary: "₹4.2L - ₹10.0L",
    tools: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    features: [
      "Full Stack SaaS Application from architecture to launch",
      "JWT Authentication, Role-based Access Control & Payments",
      "Serverless Functions & Edge deployment on Vercel",
      "GitHub portfolio building with clean code practices"
    ]
  },
  {
    id: "data-analytics",
    title: "Applied Data Analytics & Business Intelligence",
    category: "data-ai",
    tagline: "Transform messy raw datasets into executive dashboards & business decisions",
    duration: "3.5 Months",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    avgSalary: "₹4.0L - ₹9.0L",
    tools: ["Python", "SQL (Advanced)", "Power BI", "Excel Advanced", "Tableau", "Pandas"],
    features: [
      "Interactive Power BI & Tableau dashboards with DAX queries",
      "Complex SQL joins, window functions & ETL pipelines",
      "Case studies from Retail, Healthcare, and FinTech domains",
      "Presentation skills for business stakeholder meetings"
    ]
  },
  {
    id: "data-science-ai",
    title: "Data Science, Machine Learning & Agentic AI",
    category: "data-ai",
    tagline: "Build predictive ML models and autonomous AI agents for modern enterprises",
    duration: "5.5 Months",
    mode: "Classroom + Online",
    level: "Job Ready Track",
    avgSalary: "₹5.0L - ₹13.0L",
    popular: true,
    tools: ["Python", "NumPy", "Scikit-Learn", "TensorFlow", "LangChain", "OpenAI API", "FastAPI"],
    features: [
      "Supervised & Unsupervised Machine Learning algorithms",
      "Generative AI & LLM integration with Prompt Engineering",
      "Deployment of ML models with FastAPI & Docker",
      "End-to-end Capstone Project with real-time inference"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps Engineering",
    category: "cloud",
    tagline: "Automate delivery pipelines, container orchestration, and multi-cloud infra",
    duration: "4 Months",
    mode: "Classroom + Online",
    level: "Job Ready Track",
    avgSalary: "₹5.5L - ₹12.5L",
    tools: ["AWS", "Linux", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    features: [
      "Infrastructure as Code (IaC) with Terraform",
      "Kubernetes cluster administration and Helm charts",
      "CI/CD zero-downtime deployment pipelines",
      "Cloud security, cost optimization & monitoring"
    ]
  }
];

export interface BatchItem {
  courseName: string;
  startDate: string;
  mode: string;
  timeSlot: string;
  duration: string;
  branch: "Pimple Saudagar" | "Erandwane" | "Online Live";
  seatsLeft: number;
}

export const UPCOMING_BATCHES: BatchItem[] = [
  {
    courseName: "Java Full Stack Development",
    startDate: "Starts Oct 16, 2026",
    mode: "Hybrid (Offline + Live)",
    timeSlot: "03:00 PM – 05:00 PM",
    duration: "5 Months",
    branch: "Pimple Saudagar",
    seatsLeft: 4,
  },
  {
    courseName: "AI-Powered Testing (Java + Selenium)",
    startDate: "Starts Oct 20, 2026",
    mode: "Hybrid (Offline + Live)",
    timeSlot: "11:00 AM – 01:00 PM",
    duration: "4 Months",
    branch: "Pimple Saudagar",
    seatsLeft: 3,
  },
  {
    courseName: "Playwright with TypeScript Automation",
    startDate: "Starts Oct 22, 2026",
    mode: "Hybrid (Offline + Live)",
    timeSlot: "05:30 PM – 07:30 PM",
    duration: "3.5 Months",
    branch: "Erandwane",
    seatsLeft: 5,
  },
  {
    courseName: "Data Analytics & Power BI Mastery",
    startDate: "Starts Oct 25, 2026",
    mode: "Hybrid (Offline + Live)",
    timeSlot: "08:00 PM – 09:30 PM",
    duration: "3.5 Months",
    branch: "Online Live",
    seatsLeft: 6,
  },
  {
    courseName: "Data Science & Agentic AI Track",
    startDate: "Starts Nov 02, 2026",
    mode: "Hybrid (Offline + Live)",
    timeSlot: "10:00 AM – 12:00 PM",
    duration: "5.5 Months",
    branch: "Erandwane",
    seatsLeft: 4,
  },
  {
    courseName: "Weekend Batch: Java Full Stack (Working Pros)",
    startDate: "Starts Oct 26, 2026",
    mode: "Weekend Special",
    timeSlot: "10:00 AM – 03:00 PM (Sat-Sun)",
    duration: "5.5 Months",
    branch: "Pimple Saudagar",
    seatsLeft: 2,
  }
];

export interface PlacementStudent {
  name: string;
  priorBg: string;
  course: string;
  company: string;
  package: string;
  role: string;
  reviewSnippet: string;
  verified: boolean;
}

export const PLACEMENTS_HALL_OF_FAME: PlacementStudent[] = [
  {
    name: "Akshata Jangam",
    priorBg: "Fresher (BSc Comp)",
    course: "Java Full Stack Development",
    company: "Persistent Systems",
    package: "₹4.8 LPA",
    role: "Full Stack Engineer",
    reviewSnippet: "Skillio's live Spring Boot microservices project was the exact topic asked in my technical interview rounds.",
    verified: true,
  },
  {
    name: "Saurabh Lakhan",
    priorBg: "BE Mechanical (Career Switch)",
    course: "AI-Powered Testing (Selenium)",
    company: "Capgemini",
    package: "₹4.5 LPA",
    role: "QA Automation Engineer",
    reviewSnippet: "Switching from Mechanical to IT felt impossible until Avinash Sir trained us on framework creation from scratch.",
    verified: true,
  },
  {
    name: "Pallavi Tawade",
    priorBg: "2 Years Career Gap",
    course: "Automation Testing & API",
    company: "Amdocs Pune",
    package: "₹5.2 LPA",
    role: "Software Development Engineer in Test (SDET)",
    reviewSnippet: "The mock interviews conducted every Saturday gave me the confidence to handle tough technical questions.",
    verified: true,
  },
  {
    name: "Deepinder Bhatia",
    priorBg: "BE IT (Tier-3 College)",
    course: "Java Full Stack Development",
    company: "Globant",
    package: "₹6.2 LPA",
    role: "Associate Software Engineer",
    reviewSnippet: "Got 3 interview calls within 3 weeks of completing my course through Skillio's dedicated placement cell.",
    verified: true,
  },
  {
    name: "Kajal Suryawanshi",
    priorBg: "BCA Graduate",
    course: "Data Analytics & SQL",
    company: "Tata Technologies",
    package: "₹4.2 LPA",
    role: "Business Data Analyst",
    reviewSnippet: "The SQL queries and real Power BI dashboards I built at Skillio were directly highlighted in my resume.",
    verified: true,
  },
  {
    name: "Prathmesh Bhagat",
    priorBg: "Fresh Graduate",
    course: "Playwright Automation",
    company: "FinTech Startup (Pune)",
    package: "₹5.5 LPA",
    role: "QA Automation Engineer",
    reviewSnippet: "Playwright is in high demand right now. Learning it with TypeScript gave me a huge edge over Selenium-only candidates.",
    verified: true,
  }
];

export const MENTORS = [
  {
    name: "Avinash Pingale",
    role: "Lead Technical Architect & Founder",
    experience: "12+ Years Industry Experience",
    exCompanies: "Ex-Tech Lead @ Enterprise MNCs",
    specialty: "Core & Advanced Java, Framework Architecture, System Design",
    description: "Mentored over 6,000+ engineers into top product and service MNCs across Pune and Bangalore."
  },
  {
    name: "Vikas Borse",
    role: "Senior QA Automation Specialist",
    experience: "10+ Years Industry Experience",
    exCompanies: "Ex-Lead SDET @ FinTech MNC",
    specialty: "Selenium 4, Playwright, RestAssured, CI/CD",
    description: "Specializes in enterprise test framework design and real-world banking domain automation."
  },
  {
    name: "Rohitkumar W.",
    role: "Full Stack & Cloud Lead",
    experience: "9+ Years Industry Experience",
    exCompanies: "Ex-Senior Engineer @ Cloud Solutions",
    specialty: "Spring Boot Microservices, React 19, Docker & AWS",
    description: "Passionate about clean architecture, test-driven development, and scalable cloud applications."
  },
  {
    name: "Dayanand Mhetre",
    role: "Data Engineering & Analytics Mentor",
    experience: "8+ Years Industry Experience",
    exCompanies: "Ex-Data Architect @ Global Analytics",
    specialty: "Python, Advanced SQL, Power BI, Machine Learning",
    description: "Hands-on mentor focusing on translating complex data into actionable business models."
  }
];

export const HIRING_PARTNERS = [
  "TCS", "Persistent", "Capgemini", "Amdocs", "Barclays", "Cognizant", 
  "Tech Mahindra", "Globant", "Infosys", "Wipro", "LTIMindtree", "Synechron"
];

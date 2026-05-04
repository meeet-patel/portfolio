import brandLogo from "../assets/svg/brand/logo-mark.svg";
import portraitImg from "../assets/images/about/bwTheme-boy.png";
import thinkwikLogo from "../assets/svg/experience/thinkwik-logo.svg";
import arsenaltechLogo from "../assets/svg/experience/arsenaltech-logo.svg";
import crestDataLogo from "../assets/svg/experience/crest-data-logo.svg";
import resumePdf from "../assets/pdf/Meet Patel Resume.pdf?url";
import imgAlleforge from "../assets/images/projects/alleforge.png";
import imgBeringHealth from "../assets/images/projects/bering-health.png";
import imgEliteNannies from "../assets/images/projects/elite-nannies.png";
import imgExchangeRobotics from "../assets/images/projects/exchange-robotics.png";
import imgGoodDeedIt from "../assets/images/projects/good-deed-it.png";
import imgHollaAppMe from "../assets/images/projects/holla-app-me.png";
import imgLoanbot from "../assets/images/projects/loanbot.png";
import imgMobileAdvantage from "../assets/images/projects/mobile-advantage.png";
import imgSmartFacilityLabs from "../assets/images/projects/smart-facility-labs.png";
import imgThisworks from "../assets/images/projects/thisworks.png";

export const site = {
  name: "Meet Patel",
  /** Navbar / footer wordmark (SVG URL from Vite). */
  brandLogo,
  title: "Senior Software Engineer",
  tagline:
    "Backend engineer building scalable APIs, cloud systems, and data-driven platforms.",

  heroLead: "Hello, I'm Meet",
  heroLine1: "I build reliable backends and",
  heroLine2Accent: "cloud-native systems.",

  heroBio:
    "Specializing in NodeJS, ReactJS, and MongoDB across AWS and Azure—delivering secure APIs, seamless integrations, and automated infrastructure with a focus on performance and uptime.",

  availabilityBadge: "Open to Opportunities",

  portraitSrc: portraitImg,
  portraitAlt: "Meet Patel",

  resumeUrl: resumePdf,
  resumeDownloadName: "Meet Patel Resume.pdf",

  aboutTitle: "About Me",
  aboutIntro:
    "I'm Meet Patel, a Senior Software Engineer based in Gujarat, India, currently building scalable systems at Thinkwik Private Limited.",

  aboutBody:
    "I specialize in designing and shipping backend systems, data platforms, and cloud-native applications. My work spans Express and NestJS architectures, healthcare integrations (Redox, OpenEMR), and multi-cloud deployments across AWS, Azure, and GCP. I build and manage infrastructure with CI/CD pipelines, Terraform, and modern DevOps practices, along with integrations ranging from payments to security and observability (Elastic Stack). I hold a Bachelor's degree in Computer Engineering from Charotar University of Science and Technology (CGPA 9.19).",

  stats: [
    { value: "4+", label: "Years building production systems" },
    { value: "10+", label: "End-to-end products shipped" },
    { value: "100%", label: "Focus on scalable architecture" },
  ],

  contacts: {
    email: "meettejaspatel@gmail.com",
    phone: "+91 9427809011",
    phoneTel: "+919427809011",
    address: "Ahmedabad, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/meet-patel-b705781a2",
  },
};

export const experience = [
  {
    id: 1,
    company: "Thinkwik Private Limited",
    location: "Ahmedabad, Gujarat, India",
    role: "Senior Software Engineer (Full-Time)",
    period: "May 2024 – Present",
    logo: thinkwikLogo,
  },
  {
    id: 2,
    company: "Arsenaltech Private Limited",
    location: "Ahmedabad, Gujarat, India",
    role: "Software Engineer (Full-Time)",
    period: "Jun 2023 – Apr 2024",
    logo: arsenaltechLogo,
  },
  {
    id: 3,
    company: "Crest Data",
    location: "Ahmedabad, Gujarat, India",
    role: "Software Engineer (Intern + Full-Time)",
    period: "Dec 2021 – May 2023",
    logo: crestDataLogo,
  },
];

/** AWS + supporting credentials (Credly / HackerRank URLs optional). */
export const cloudCredentials = {
  aws: {
    kicker: "Amazon Web Services",
    title: "AWS Certified",
    description:
      "Formal AWS certification alongside the same stack I run in production: EC2, S3, CloudFront, Lambda, and secure delivery patterns paired with Azure and GCP where projects need them.",
    verifyUrl: "",
  },
  secondary: {
    kicker: "Also on record",
    title: "HackerRank Problem Solving",
    description:
      "5★ ratings across Basic, Intermediate, and Advanced problem-solving tracks.",
    profileUrl: "",
  },
};

export const projects = [
  {
    id: "alleforge",
    title: "AlleForge",
    description:
      "Lean API client in the browser and on desktop. REST with live responses, collections and workspaces, auth and env vars. Docs, OpenAPI export, and pre/post scripts.",
    image: imgAlleforge,
    tag: "Developer tools",
    link: "https://alleforge.com",
  },
  {
    id: "bering-health",
    title: "Bering Health — Virtual Care (By Cleveland Clinic)",
    description:
      "NestJS virtual care: patient and doctor flows, Redox, OpenEMR, MongoDB. Lex on Lambda and Auth0 for HIPAA-minded access.",
    tag: "Healthcare APIs",
    image: imgBeringHealth,
    link: "",
  },
  {
    id: "elite-nannies",
    title: "Elite Nannies",
    description:
      "LA and NYC placement for career nannies with extra skills—education, nursing, languages, wellness, and more. Top 5% screening and matching on values and lifestyle. Support from shortlist through hire and beyond.",
    tag: "Web Application",
    image: imgEliteNannies,
    link: "https://www.elitenannies.com/",
  },
  {
    id: "scalata",
    title: "Exchange Robotics — Scalata.ai",
    description:
      "Agentic AI for credit and capital markets. Node.js APIs with OAuth, Bearer, and token flows. Drive, S3, Cosmos DB, quotas, App Service, VMs, Static Web Apps.",
    tag: "Agentic AI",
    image: imgExchangeRobotics,
    link: "https://scalata.ai/",
  },
  {
    id: "good-deed-it",
    title: "Good Deed It",
    description:
      "Volunteering and CSR matched in real time by skills, interests, and location. Charities post needs; neighbours and workplace volunteers respond nearby. Corporate dashboard for impact and ESG reporting.",
    tag: "Social impact",
    image: imgGoodDeedIt,
    link: "https://www.gooddeedit.com/",
  },
  {
    id: "holla",
    title: "Holla App Me",
    description:
      "Social platform on Node.js and MongoDB. Socket.io chat, signed URLs for media, GetStream voice and video, maps.",
    tag: "Mobile Application",
    image: imgHollaAppMe,
    link: "",
  },
  {
    id: "mobile-advantage",
    title: "Mobile Advantage",
    description:
      "Employee device benefits and recycling. Node.js e-commerce, trade-ins, PayPal Credit, Klarna, carrier SIM and insurance, CO₂ reporting, RBAC, MongoDB.",
    image: imgMobileAdvantage,
    tag: "Web Application",
    link: "https://mobileadvantage.co.uk/",
  },
  {
    id: "Loanbot",
    title: "Loanbot",
    description:
      "Mortgage education from a national program database tailored to your profile and property. Compare options and model down payment and terms. Vetted PROLenders and partners for pre-qual, purchase, or refinance.",
    tag: "Fintech",
    image: imgLoanbot,
    link: "https://apps.apple.com/in/app/loanbot/id6747381290",
  },
  {
    id: "smart-facility-labs",
    title: "Smart Facility Labs",
    description:
      "AI facility ops: meters, sensors, assets, and technicians in one stack. Seven agents and a natural-language Pilot for anomalies, work orders, field work, and compliance. Live energy and water views.",
    image: imgSmartFacilityLabs,
    tag: "AI & PropTech",
    link: "https://www.smartfacilitylabs.com/",
  },
  {
    id: "thisworks",
    title: "ThisWorks — EOR Platform",
    description:
      "Employer-of-record on Node.js: admin, client, and employee APIs with RBAC. MongoDB for records and payslips, document verification.",
    tag: "Web Application",
    image: imgThisworks,
    link: "https://www.thisworks.jobs/",
  },
];

export const whatIDoServices = [
  { title: "REST & NestJS APIs", key: "api" },
  { title: "MongoDB & data modeling", key: "data" },
  { title: "AWS, Azure & GCP", key: "cloud" },
  { title: "Healthcare integrations", key: "health" },
  { title: "Auth, RBAC & security", key: "auth" },
  { title: "CI/CD, Terraform & observability", key: "cicd" },
];

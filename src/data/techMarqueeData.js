import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiReact,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiTerraform,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiGithubactions,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiOpenai,
  SiClaude,
  SiJenkins,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbSparkles } from "react-icons/tb";
import { HiCommandLine } from "react-icons/hi2";
import awsSvg from "../assets/svg/skills/aws.svg";
import azureSvg from "../assets/svg/skills/azure.svg";
import gcpSvg from "../assets/svg/skills/gcp.svg";
import mysqlSvg from "../assets/svg/skills/mysql.svg";

/** Full list for the About section infinite marquee (right → left). */
export const TECH_MARQUEE_ITEMS = [
  { name: "JavaScript", Icon: SiJavascript, className: "text-[#F7DF1E]" },
  { name: "TypeScript", Icon: SiTypescript, className: "text-[#3178C6]" },
  { name: "Node.js", Icon: SiNodedotjs, className: "text-[#339933]" },
  { name: "Express.js", Icon: SiExpress, className: "text-foreground" },
  { name: "NestJS", Icon: SiNestjs, className: "text-[#E0234E]" },
  { name: "React", Icon: SiReact, className: "text-[#61DAFB]" },
  { name: "Socket.io", Icon: SiSocketdotio, className: "text-foreground" },
  { name: "MongoDB", Icon: SiMongodb, className: "text-[#47A248]" },
  { name: "PostgreSQL", Icon: SiPostgresql, className: "text-[#4169E1]" },
  { name: "MySQL", svg: mysqlSvg },
  { name: "Git", Icon: SiGit, className: "text-[#F05032]" },
  { name: "GitHub", Icon: SiGithub, className: "text-foreground" },
  { name: "Bitbucket", Icon: SiBitbucket, className: "text-[#0052CC]" },
  { name: "AWS", svg: awsSvg },
  { name: "Azure", svg: azureSvg },
  { name: "GCP", svg: gcpSvg },
  { name: "Docker", Icon: SiDocker, className: "text-[#2496ED]" },
  { name: "CI/CD", Icon: SiGithubactions, className: "text-[#2088FF]" },
  { name: "Terraform", Icon: SiTerraform, className: "text-[#7B42BC]" },
  { name: "Elasticsearch", Icon: SiElasticsearch, className: "text-[#FEC514]" },
  { name: "Logstash", Icon: SiLogstash, className: "text-[#00BFB3]" },
  { name: "Kibana", Icon: SiKibana, className: "text-[#E8478B]" },
  { name: "ChatGPT", Icon: SiOpenai, className: "text-[#74AA9C]" },
  { name: "Claude AI", Icon: SiClaude, className: "text-[#D97757]" },
  { name: "Lovable", Icon: TbSparkles, className: "text-accent" },
  { name: "Cursor", Icon: HiCommandLine, className: "text-accent" },
  { name: "VS Code", Icon: VscCode, className: "text-[#007ACC]" },
  { name: "Jenkins", Icon: SiJenkins, className: "text-[#D24939]" },
];

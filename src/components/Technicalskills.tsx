import { useTranslation } from "react-i18next";
import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPaintBrush,
  FaJava,
  FaTrello,
  FaNetworkWired
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBootstrap,
  SiPhpmyadmin,
  SiOracle,
  SiDocker,
  SiCanva,
  SiGithubactions,
  SiPostman,
  SiClaude,
  SiJira,
  SiApache,
  SiNginx,
  SiLinux,
} from "react-icons/si";
import type { ReactNode } from "react";
import { DiMongodb, DiScrum, DiVisualstudio } from "react-icons/di";
import { GoCopilot } from "react-icons/go";
import { RiNextjsFill } from "react-icons/ri";
import { BiCloudDownload } from "react-icons/bi";
import {BiRefresh } from "react-icons/bi";
import { ImLoop } from "react-icons/im";
import { BsKanban } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";

interface TechSkill {
  icon: ReactNode;
  name: string;
  color: string;
}

interface TechCategory {
  title: string;
  skills: TechSkill[];
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}

export default function TechnicalSkills() {
  const { t } = useTranslation();

  const techCategories: TechCategory[] = [
    {
      title: t('skills.categories.frontend'),
      gradientFrom: "from-blue-900/30",
      gradientTo: "to-cyan-900/30",
      borderColor: "border-blue-500/30",
      skills: [
        {
          icon: <FaReact className="text-5xl" />,
          name: "React",
          color: "text-cyan-400",
        },
        {
          icon: <RiNextjsFill className="text-5xl" />,
          name: "Next.js",
          color: "text-cyan-300",
        },
        {
          icon: <SiTypescript className="text-5xl" />,
          name: "TypeScript",
          color: "text-blue-400",
        },
        {
          icon: <FaJs className="text-5xl" />,
          name: "JavaScript",
          color: "text-yellow-400",
        },
        {
          icon: <FaHtml5 className="text-5xl" />,
          name: "HTML5",
          color: "text-orange-500",
        },
        {
          icon: <FaCss3Alt className="text-5xl" />,
          name: "CSS3",
          color: "text-blue-500",
        },
        {
          icon: <SiBootstrap className="text-5xl" />,
          name: "Bootstrap",
          color: "text-purple-500",
        },
        {
          icon: <SiTailwindcss className="text-5xl" />,
          name: "Tailwind",
          color: "text-cyan-400",
        },
        {
          icon: <SiVite className="text-5xl" />,
          name: "Vite",
          color: "text-purple-400",
        },
      ],
    },
    {
      title: t('skills.categories.backend'),
      gradientFrom: "from-green-900/30",
      gradientTo: "to-emerald-900/30",
      borderColor: "border-green-500/30",
      skills: [
        {
          icon: <FaNodeJs className="text-5xl" />,
          name: "Node.js",
          color: "text-green-500",
        },
        {
          icon: <FaPython className="text-5xl" />,
          name: "Python",
          color: "text-blue-400",
        },
        {
          icon: <FaPhp className="text-5xl" />,
          name: "PHP",
          color: "text-indigo-400",
        },
        {
          icon: <FaJava className="text-5xl" />,
          name: "Java",
          color: "text-red-400",
        },
      ],
    },
    {
      title: t('skills.categories.devops'),
      gradientFrom: "from-slate-900/30",
      gradientTo: "to-gray-900/30",
      borderColor: "border-slate-500/30",
      skills: [
        {
          icon: <FaDocker className="text-5xl" />,
          name: "Docker",
          color: "text-blue-400",
        },
        {
          icon: <SiDocker className="text-5xl" />,
          name: "Docker Compose",
          color: "text-blue-300",
        },
        {
          icon: <FaDocker className="text-5xl" />,
          name: "Dockerfile",
          color: "text-gray-200",
        },
        {
          icon: <SiLinux className="text-5xl" />,
          name: "Linux",
          color: "text-yellow-400",
        },
        {
          icon: <SiApache className="text-5xl" />,
          name: "Apache",
          color: "text-red-500",
        },
        {
          icon: <SiNginx className="text-5xl" />,
          name: "Nginx",
          color: "text-green-400",
        },
        {
          icon: <SiGithubactions className="text-5xl" />,
          name: "GitHub Actions",
          color: "text-gray-400",
        },
        {
          icon: <ImLoop className="text-5xl" />,
          name: "CI/CD",
          color: "text-gray-400",
        },
        { icon: <FaNetworkWired className="text-5xl" />, name: "Subnetting", color: "text-blue-400" },
      ],
    },
    {
      title: t('skills.categories.database'),
      gradientFrom: "from-purple-900/30",
      gradientTo: "to-pink-900/30",
      borderColor: "border-purple-500/30",
      skills: [
        {
          icon: <SiMysql className="text-5xl" />,
          name: "MySQL",
          color: "text-blue-500",
        },
        {
          icon: <SiPhpmyadmin className="text-5xl" />,
          name: "phpMyAdmin",
          color: "text-orange-400",
        },
        {
          icon: <SiOracle className="text-5xl" />,
          name: "Oracle",
          color: "text-red-500",
        },
        {
          icon: <DiMongodb className="text-5xl" />,
          name: "MongoDB",
          color: "text-green-400",
        },
        {
          icon: <FaDatabase className="text-5xl" />,
          name: "SQL",
          color: "text-gray-500",
        },
        {
          icon: <FaDatabase className="text-5xl" />,
          name: "NO SQL",
          color: "text-gray-400",
        },
        {
          icon: <FaDatabase className="text-5xl" />,
          name: "PL/SQL",
          color: "text-gray-300",
        },
        {
          icon: <FaDatabase className="text-5xl" />,
          name: "i18n",
          color: "text-gray-200",
        },
        {
          icon: <BiCloudDownload className="text-5xl" />,
          name: "Rest API",
          color: "text-blue-300",
        },
      ],
    },
    {
      title: t('skills.categories.tools'),
      gradientFrom: "from-amber-900/30",
      gradientTo: "to-yellow-900/30",
      borderColor: "border-amber-500/30",
      skills: [
        {
          icon: <FaGitAlt className="text-5xl" />,
          name: "Git",
          color: "text-orange-500",
        },
        {
          icon: <GoCopilot className="text-5xl" />,
          name: "GitHub Copilot",
          color: "text-green-400",
        },
        {
          icon: <DiVisualstudio className="text-5xl" />,
          name: "VS Code",
          color: "text-blue-400",
        },
        {
          icon: <SiPostman className="text-5xl" />,
          name: "Postman",
          color: "text-cyan-400",
        },
        {
          icon: <SiClaude className="text-5xl" />,
          name: "Claude AI and more AIs",
          color: "text-green-400",
        },
        {
          icon: <SiJira className="text-5xl" />,
          name: "Jira",
          color: "text-blue-400",
        },
        {
          icon: <FaTrello className="text-5xl" />,
          name: "Trello",
          color: "text-cyan-400",
        },
        {
          icon: <DiScrum className="text-5xl" />,
          name: "Scrum",
          color: "text-green-400",
        },
        {icon: <TbRefresh className="text-5xl" />, name: "Agile", color: "text-orange-400" },
        {icon: <BsKanban className="text-5xl" />, name: "Kanban", color: "text-blue-400" },
        {icon: <BiRefresh  className="text-5xl" />, name: "TDD", color: "text-gray-200" },
      ],
    },
    {
      title: t('skills.categories.design'),
      gradientFrom: "from-pink-900/30",
      gradientTo: "to-rose-900/30",
      borderColor: "border-pink-500/30",
      skills: [
        {
          icon: <SiFigma className="text-5xl" />,
          name: "Figma",
          color: "text-purple-400",
        },
        {
          icon: <SiAdobephotoshop className="text-5xl" />,
          name: "Photoshop",
          color: "text-blue-500",
        },
        {
          icon: <SiAdobeillustrator className="text-5xl" />,
          name: "Illustrator",
          color: "text-orange-600",
        },
        {
          icon: <FaPaintBrush className="text-5xl" />,
          name: "Paint Tool SAI",
          color: "text-pink-400",
        },
        {
          icon: <FaPaintBrush className="text-5xl" />,
          name: "Clip Studio",
          color: "text-cyan-400",
        },
        {
          icon: <FaPaintBrush className="text-5xl" />,
          name: "Procreate",
          color: "text-purple-500",
        },
        {
          icon: <SiCanva className="text-5xl" />,
          name: "Canva",
          color: "text-blue-300",
        },
      ],
    },
  ];

  return (
    <section className="relative bg-linear-to-tr from-slate-950 via-indigo-950 to-slate-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`tech-star-${i}`}
            className="absolute bg-white rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              opacity: 0.2 + Math.random() * 0.5,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-100 mb-4 title-glow">
            {t('skills.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-linear-to-r ${category.gradientFrom} ${category.gradientTo} backdrop-blur-md rounded-2xl p-8 border ${category.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center group"
                  >
                    <div className="mb-3 transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                      <div className={skill.color}>{skill.icon}</div>
                    </div>
                    <p className="text-slate-300 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
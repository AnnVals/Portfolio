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
  FaJava
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
  SiClaude
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { ReactNode } from "react";
import { DiVisualstudio } from "react-icons/di";
import { GoCopilot } from "react-icons/go";

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
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      gradientFrom: "from-blue-900/30",
      gradientTo: "to-cyan-900/30",
      borderColor: "border-blue-500/30",
      skills: [
        { icon: <FaReact className="text-5xl" />, name: "React", color: "text-cyan-400" },
        { icon: <TbBrandReactNative className="text-5xl" />, name: "React Native", color: "text-cyan-300" },
        { icon: <SiTypescript className="text-5xl" />, name: "TypeScript", color: "text-blue-400" },
        { icon: <FaJs className="text-5xl" />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <FaHtml5 className="text-5xl" />, name: "HTML5", color: "text-orange-500" },
        { icon: <FaCss3Alt className="text-5xl" />, name: "CSS3", color: "text-blue-500" },
        { icon: <SiBootstrap className="text-5xl" />, name: "Bootstrap", color: "text-purple-500" },
        { icon: <SiTailwindcss className="text-5xl" />, name: "Tailwind", color: "text-cyan-400" },
        { icon: <SiVite className="text-5xl" />, name: "Vite", color: "text-purple-400" },
      ]
    },
    {
      title: "Backend",
      gradientFrom: "from-green-900/30",
      gradientTo: "to-emerald-900/30",
      borderColor: "border-green-500/30",
      skills: [
        { icon: <FaNodeJs className="text-5xl" />, name: "Node.js", color: "text-green-500" },
        { icon: <FaPython className="text-5xl" />, name: "Python", color: "text-blue-400" },
        { icon: <FaPhp className="text-5xl" />, name: "PHP", color: "text-indigo-400" },
        { icon: <FaJava className="text-5xl" />, name: "Java", color: "text-red-400" },
      ]
    },
    {
      title: "Database",
      gradientFrom: "from-purple-900/30",
      gradientTo: "to-pink-900/30",
      borderColor: "border-purple-500/30",
      skills: [
        { icon: <SiMysql className="text-5xl" />, name: "MySQL", color: "text-blue-500" },
        { icon: <SiPhpmyadmin className="text-5xl" />, name: "phpMyAdmin", color: "text-orange-400" },
        { icon: <SiOracle className="text-5xl" />, name: "Oracle", color: "text-red-500" },
        { icon: <FaDatabase className="text-5xl" />, name: "SQL", color: "text-gray-400" },
      ]
    },
    {
      title: "Tools & Design",
      gradientFrom: "from-orange-900/30",
      gradientTo: "to-red-900/30",
      borderColor: "border-orange-500/30",
      skills: [
        { icon: <FaGitAlt className="text-5xl" />, name: "Git", color: "text-orange-500" },
        { icon: <SiGithubactions className="text-5xl" />, name: "GitHub Actions", color: "text-gray-400" },
        { icon: <GoCopilot className="text-5xl" />, name: "GitHub Copilot", color: "text-green-400" },
        { icon: <DiVisualstudio className="text-5xl" />, name: "VS Code", color: "text-blue-400" },
        { icon: <SiPostman className="text-5xl" />, name: "Postman", color: "text-cyan-400" },
        { icon: <SiClaude className="text-5xl" />, name: "Claude AI and more AIs", color: "text-green-400" },
        { icon: <FaDocker className="text-5xl" />, name: "Docker", color: "text-blue-400" },
        { icon: <SiDocker className="text-5xl" />, name: "Dockerfile", color: "text-blue-500" },
        { icon: <SiDocker className="text-5xl" />, name: "Docker Compose", color: "text-blue-300" },
        { icon: <SiFigma className="text-5xl" />, name: "Figma", color: "text-purple-400" },
        { icon: <SiAdobephotoshop className="text-5xl" />, name: "Photoshop", color: "text-blue-500" },
        { icon: <SiAdobeillustrator className="text-5xl" />, name: "Illustrator", color: "text-orange-600" },
        { icon: <FaPaintBrush className="text-5xl" />, name: "Paint Tool SAI", color: "text-pink-400" },
        { icon: <FaPaintBrush className="text-5xl" />, name: "Clip Studio", color: "text-cyan-400" },
        { icon: <FaPaintBrush className="text-5xl" />, name: "Procreate", color: "text-purple-500" },
        { icon: <SiCanva className="text-5xl" />, name: "Canva", color: "text-cyan-300" },

      ]
    }
  ];

  return (
    <section className="relative bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 py-20 overflow-hidden">

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
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
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
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
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
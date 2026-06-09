import { useTranslation } from "react-i18next";
import "./Timeline.css";
import { AiFillEye } from "react-icons/ai";
import { FaGraduationCap, FaRocket, FaStar, FaCode, FaSearch, FaServer } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import type { ReactNode } from "react";

interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
}

export default function Timeline() {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      id: 1,
      year: t("timeline.experiences.seeking.year"),
      title: t("timeline.experiences.seeking.title"),
      company: t("timeline.experiences.seeking.company"),
      description: t("timeline.experiences.seeking.description"),
      technologies: [],
      icon: <FaSearch className="text-3xl text-white" />,
    },
    {
      id: 2,
      year: t("timeline.experiences.mainframe.year"),
      title: t("timeline.experiences.mainframe.title"),
      company: t("timeline.experiences.mainframe.company"),
      description: t("timeline.experiences.mainframe.description"),
      technologies: [
        "COBOL",
        "COBOL/BATCH",
        "COBOL/DB2",
        "JCL",
        "z/OS",
        "TSO/ISPF",
        "DB2",
        "SQL (DB2)",
        "SPUFI",
        "QMF",
        "VSAM",
        "SORT",
        "IDCAMS",
        "SDSF",
        "Copilot para COBOL",
      ],
      icon: <FaServer className="text-3xl text-white" />,
    },
    {
      id: 3,
      year: t("timeline.experiences.current.year"),
      title: t("timeline.experiences.current.title"),
      company: t("timeline.experiences.current.company"),
      description: t("timeline.experiences.current.description"),
      technologies: [
        "Vue 3",
        "Pinia",
        "Angular 21",
        "React 18",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Ollama",
        "llama3.2",
        "Vite",
        "Vercel",
        "Render",
      ],
      icon: <FaCode className="text-3xl text-white" />,
    },
    {
      id: 4,
      year: t("timeline.experiences.intern.year"),
      title: t("timeline.experiences.intern.title"),
      company: t("timeline.experiences.intern.company"),
      description: t("timeline.experiences.intern.description"),
      technologies: ["Genexus", "Oracle", "Microsoft Office", "Excel", "Scrum", "IA"],
      icon: <MdWork className="text-3xl text-white" />,
    },
    {
      id: 5,
      year: t("timeline.experiences.graduate.year"),
      title: t("timeline.experiences.graduate.title"),
      company: t("timeline.experiences.graduate.company"),
      description: t("timeline.experiences.graduate.description"),
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Laravel",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Figma",
        "Vercel",
        "REST API",
        "i18n",
        "Bootstrap",
      ],
      icon: <FaGraduationCap className="text-3xl text-white" />,
    },
    {
      id: 6,
      year: t("timeline.experiences.junior.year"),
      title: t("timeline.experiences.junior.title"),
      company: t("timeline.experiences.junior.company"),
      description: t("timeline.experiences.junior.description"),
      technologies: [
        "Java",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "MySQL",
        "PL/SQL",
        "Git",
        "Linux",
        "Apache",
        "Nginx",
        "Docker",
        "Docker Compose",
      ],
      icon: <FaRocket className="text-3xl text-white" />,
    },
    {
      id: 7,
      year: t("timeline.experiences.arts.year"),
      title: t("timeline.experiences.arts.title"),
      company: t("timeline.experiences.arts.company"),
      description: t("timeline.experiences.arts.description"),
      technologies: [
        "Photoshop",
        "Illustrator",
        "Figma",
        "Clip Studio Paint",
        "Procreate",
        "Paint Tool SAI",
      ],
      icon: <AiFillEye className="text-3xl text-white" />,
    },
  ];

  return (
    <section className="timeline-section">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 150 }, (_, i) => (
          <div
            key={`timeline-star-${i}`}
            className="absolute bg-white rounded-full timeline-star-twinkle"
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

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-100 mb-4 title-glow">
            {t("timeline.title")}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("timeline.subtitle")}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="timeline-line"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item ${
                  index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
                }`}
              >
                <div className="timeline-portal">
                  <div className="portal-outer"></div>
                  <div className="portal-middle"></div>
                  <div className="portal-inner">{exp.icon}</div>
                  <div className="portal-glow"></div>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-inner">
                    <div className="year-badge">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {exp.year}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4 text-lg">
                      {exp.company}
                    </p>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <div className="end-portal">
              <div className="end-portal-ring ring-1"></div>
              <div className="end-portal-ring ring-2"></div>
              <div className="end-portal-ring ring-3"></div>
              <div className="end-portal-center">
                <FaStar className="text-4xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
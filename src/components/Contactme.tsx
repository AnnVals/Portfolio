import { useTranslation } from "react-i18next";
import "./Skills.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBriefcase, FaPaintBrush } from "react-icons/fa";
import type { ReactNode } from "react";

interface SocialLink {
  icon: ReactNode;
  name: string;
  username: string;
  url: string;
  color: string;
  hoverColor: string;
  description: string;
}

export default function ContactMe() {
  const { t } = useTranslation();

  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub className="text-5xl" />,
      name: t('contact.platforms.github.name'),
      username: t('contact.platforms.github.username'),
      url: "https://github.com/annvals",
      color: "text-gray-400",
      hoverColor: "hover:text-white",
      description: t('contact.platforms.github.description')
    },
    {
      icon: <FaLinkedin className="text-5xl" />,
      name: t('contact.platforms.linkedin.name'),
      username: t('contact.platforms.linkedin.username'),
      url: "https://www.linkedin.com/in/angelapci/",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      description: t('contact.platforms.linkedin.description')
    },
    {
      icon: <FaInstagram className="text-5xl" />,
      name: t('contact.platforms.instagram.name'),
      username: t('contact.platforms.instagram.username'),
      url: "https://instagram.com/valsart.jpg",
      color: "text-pink-400",
      hoverColor: "hover:text-pink-300",
      description: t('contact.platforms.instagram.description')
    },
    {
      icon: <FaPaintBrush className="text-5xl" />,
      name: t('contact.platforms.vgen.name'),
      username: t('contact.platforms.vgen.username'),
      url: "https://vgen.co/ValsArtJPG",
      color: "text-purple-400",
      hoverColor: "hover:text-purple-300",
      description: t('contact.platforms.vgen.description')
    },
    {
      icon: <FaBriefcase className="text-5xl" />,
      name: t('contact.platforms.infojobs.name'),
      username: t('contact.platforms.infojobs.username'),
      url: "https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=1230826503936152525",
      color: "text-cyan-400",
      hoverColor: "hover:text-cyan-300",
      description: t('contact.platforms.infojobs.description')
    },
    {
      icon: <FaEnvelope className="text-5xl" />,
      name: t('contact.platforms.email.name'),
      username: t('contact.platforms.email.username'),
      url: "mailto:anceninpil@gmail.com",
      color: "text-orange-400",
      hoverColor: "hover:text-orange-300",
      description: t('contact.platforms.email.description')
    }
  ];

  return (
    <section className="relative bg-linear-to-bl from-slate-900 via-indigo-950 to-slate-950 py-20 overflow-hidden"> 

      <div className="absolute inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`contact-star-${i}`}
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
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== t('contact.platforms.email.name') ? "_blank" : "_self"}
              rel={link.name !== t('contact.platforms.email.name') ? "noopener noreferrer" : undefined}
              className="group bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${link.color} ${link.hoverColor} transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {link.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  {link.username}
                </p>
                <p className="text-slate-500 text-xs">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              {t('contact.ready.title')}
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t('contact.ready.message')}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/30">
            <span className="text-slate-400 text-sm">{t('contact.footer.createdWith')}</span>
            <span className="text-cyan-400 font-semibold text-sm">React</span>
            <span className="text-slate-600">•</span>
            <span className="text-blue-400 font-semibold text-sm">TypeScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-purple-400 font-semibold text-sm">Vite</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-semibold text-sm">Tailwind CSS</span>
          </div>

          <div className="text-slate-400 text-sm">
            <p>{t('contact.footer.developedBy')} <span className="text-slate-200 font-semibold">Ángela P. Centelles Insa</span></p>
            <p className="mt-1">© {new Date().getFullYear()} {t('contact.footer.rights')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
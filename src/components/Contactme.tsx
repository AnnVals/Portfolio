import "./Skills.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBriefcase } from "react-icons/fa";
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
  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub className="text-5xl" />,
      name: "GitHub",
      username: "@annvals",
      url: "https://github.com/annvals",
      color: "text-gray-400",
      hoverColor: "hover:text-white",
      description: "Check out my code and projects"
    },
    {
      icon: <FaLinkedin className="text-5xl" />,
      name: "LinkedIn",
      username: "Ángela P. Centelles Insa",
      url: "https://www.linkedin.com/in/angelapci/",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      description: "Let's connect professionally"
    },
    {
      icon: <FaInstagram className="text-5xl" />,
      name: "Instagram",
      username: "@valsart.jpg",
      url: "https://instagram.com/valsart.jpg",
      color: "text-pink-400",
      hoverColor: "hover:text-pink-300",
      description: "Follow my creative journey"
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      name: "Gallifrex",
      username: "My Project",
      url: "https://gallifrex.com",
      color: "text-purple-400",
      hoverColor: "hover:text-purple-300",
      description: "Explore my project"
    },
    {
      icon: <FaBriefcase className="text-5xl" />,
      name: "InfoJobs",
      username: "Professional Profile",
      url: "https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=1230826503936152525",
      color: "text-cyan-400",
      hoverColor: "hover:text-cyan-300",
      description: "View my professional experience"
    },
    {
      icon: <FaEnvelope className="text-5xl" />,
      name: "Email",
      username: "anceninpil@gmail.com",
      url: "mailto:anceninpil@gmail.com",
      color: "text-orange-400",
      hoverColor: "hover:text-orange-300",
      description: "Send me a message"
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
            Let's Connect
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Find me on these platforms or reach out directly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : "_self"}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
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
              Ready to contact me?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hi, 
              I'd love to hear from you! Feel free to reach out through any of the platforms above. Hope to get to know you soon! :)
            </p>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/30">
            <span className="text-slate-400 text-sm">Portfolio created with</span>
            <span className="text-cyan-400 font-semibold text-sm">React</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300 font-semibold text-sm">React Native</span>
            <span className="text-slate-600">•</span>
            <span className="text-blue-400 font-semibold text-sm">TypeScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-purple-400 font-semibold text-sm">Vite</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-semibold text-sm">Tailwind CSS</span>
          </div>

          <div className="text-slate-400 text-sm">
            <p>Developed by <span className="text-slate-200 font-semibold">Ángela P. Centelles Insa</span></p>
            <p className="mt-1">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
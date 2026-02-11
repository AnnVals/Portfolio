import "./About.css";
import { FaPaintBrush, FaHeart, FaLightbulb, FaUsers, FaRocket, FaBookOpen, FaGamepad, FaCamera, FaMicrophone, FaMusic } from "react-icons/fa";
import { MdColorLens, MdMovie } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import type { ReactNode } from "react";

interface SkillCard {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Hobby {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function About() {
  const softSkills: SkillCard[] = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-400" />,
      title: "Creative Problem Solving",
      description: "I combine analytical thinking with creative approaches to find innovative solutions to complex challenges."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-400" />,
      title: "Team Collaboration",
      description: "I thrive in collaborative environments, valuing diverse perspectives and fostering positive team dynamics."
    },
    {
      icon: <FaRocket className="text-4xl text-purple-400" />,
      title: "Continuous Learning",
      description: "Passionate about staying current with new technologies and constantly expanding my skill set."
    },
    {
      icon: <FaHeart className="text-4xl text-pink-400" />,
      title: "Attention to Detail",
      description: "My artistic background gives me a keen eye for design details and user experience refinement."
    },
    {
      icon: <FaHeart className="text-4xl text-red-400" />,
      title: "Empathy",
      description: "I connect deeply with my team and environment, understanding different perspectives to build stronger relationships and collaborative solutions."
    },
    {
      icon: <FaRocket className="text-4xl text-green-400" />,
      title: "Perseverance",
      description: "I face challenges with determination, seeing obstacles as opportunities to grow and improve my skills."
    },
    {
      icon: <FaUsers className="text-4xl text-cyan-400" />,
      title: "Adaptability",
      description: "I embrace change and quickly adjust to new environments, technologies, and team dynamics with flexibility."
    },
    {
      icon: <FaLightbulb className="text-4xl text-orange-400" />,
      title: "Critical Thinking",
      description: "I analyze situations from multiple angles to make well-informed decisions and solve problems effectively."
    }
  ];

  const hobbies: Hobby[] = [
    {
      icon: <FaPaintBrush className="text-4xl text-orange-400" />,
      title: "Digital Illustration",
      description: "I work as a freelance illustrator, creating artwork for clients and personal projects."
    },
    {
      icon: <FaGamepad className="text-4xl text-purple-400" />,
      title: "Gaming",
      description: "Passionate gamer who loves exploring immersive worlds and experiencing interactive storytelling."
    },
    {
      icon: <FaMusic className="text-4xl text-pink-400" />,
      title: "Music Lover",
      description: "Music is my constant companion - I love discovering new artists and getting lost in different genres."
    },
    {
      icon: <FaMicrophone className="text-4xl text-blue-400" />,
      title: "Singing",
      description: "I enjoy singing as a way to express myself and unwind after a long day of coding."
    },
    {
      icon: <FaCamera className="text-4xl text-cyan-400" />,
      title: "Photography",
      description: "Capturing moments and playing with light, composition, and perspective through my lens."
    },
    {
      icon: <MdMovie className="text-4xl text-yellow-400" />,
      title: "Animation & Films",
      description: "Big fan of animated series and movies - they inspire my creativity and artistic work."
    },
    {
      icon: <GiPencilBrush className="text-4xl text-green-400" />,
      title: "Traditional Art",
      description: "I enjoy sketching, painting, and experimenting with different artistic mediums."
    },
    {
      icon: <FaBookOpen className="text-4xl text-indigo-400" />,
      title: "Reading & Learning",
      description: "Avid reader of tech blogs, design and concept books, and sci-fi/historical/drama novels that fuel my imagination."
    }
  ];

  return (
    <section className="about-section relative bg-linear-to-tl from-slate-900 via-indigo-950 to-slate-950 py-20 overflow-hidden">

      <div className="absolute inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`about-star-${i}`}
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
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A blend of technology and creativity
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="text-blue-400">✦</span>
              My Journey
            </h3>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                I'm a <span className="text-blue-400 font-semibold">full-stack developer</span> and <span className="text-purple-400 font-semibold">digital illustrator</span> based in Spain. 
                My journey into tech began with a fascination for how things work, and evolved into a passion for building them.
              </p>
              <p>
                What sets me apart is my unique combination of technical skills and artistic vision. As an illustrator, 
                I've developed a deep understanding of <span className="text-pink-400 font-semibold">visual design, user experience, and creative storytelling</span>; 
                skills that directly translate into creating beautiful, intuitive web applications.
              </p>
              <p>
                When I'm not coding or drawing, you'll find me exploring new design trends, playing video games, capturing moments through photography, 
                or singing along to my favorite songs. I'm a huge fan of animated series and films, and I believe music is the soundtrack to creativity. 
                I believe the future of web development lies in the intersection of <span className="text-cyan-400 font-semibold">functionality and aesthetics</span>, 
                and I strive to embody that balance in everything I create.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-100 mb-10 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3">
                    {skill.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-linear-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <MdColorLens className="text-5xl text-purple-400" />
              <div>
                <h3 className="text-3xl font-bold text-slate-100">
                  Digital Illustrator
                </h3>
                <p className="text-purple-300">My Creative Side</p>
              </div>
            </div>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                Beyond coding, I am a <span className="text-purple-400 font-semibold">freelance digital illustrator</span>.
                I create custom artwork for clients ranging from keychain designs to character designs and brand or personal illustrations.
              </p>
              <p>
                This dual career path enriches both my technical and creative work. My illustration experience helps me:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">▹</span>
                  <span>Design more visually appealing and user-friendly interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">▹</span>
                  <span>Understand color theory, composition, and visual hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">▹</span>
                  <span>Communicate complex ideas through visual storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">▹</span>
                  <span>Bring a unique artistic perspective to web development projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 mb-10 text-center">
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{hobby.icon}</div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3">
                    {hobby.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
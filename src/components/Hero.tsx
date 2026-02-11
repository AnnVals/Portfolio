import React from "react";
import "./Hero.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface Constellation {
  id: number;
  stars: Star[];
  x: number;
  y: number;
  rotation: number;
  lightUpDelay: number;
}

export default function Hero() {
  const [constellations, setConstellations] = React.useState<Constellation[]>(
    []
  );

  React.useEffect(() => {
    const constellationArray: Constellation[] = Array.from(
      { length: 12 },
      (_, i) => {
        const numStars = 4 + Math.floor(Math.random() * 3);
        const stars: Star[] = Array.from({ length: numStars }, (_, j) => ({
          id: j,
          x: Math.random() * 120 - 60,
          y: Math.random() * 120 - 60,
          size: 1.5 + Math.random() * 2,
          opacity: 0.5 + Math.random() * 0.5,
          twinkleDelay: Math.random() * 2,
        }));

        return {
          id: i,
          stars,
          x: 10 + Math.random() * 80,
          y: 10 + Math.random() * 80,
          rotation: Math.random() * 360,
          lightUpDelay: i * 2 + Math.random() * 4,
        };
      }
    );
    setConstellations(constellationArray);
  }, []);

  const renderConstellation = (constellation: Constellation) => {
    const { stars } = constellation;

    return (
      <svg
        width="150"
        height="150"
        viewBox="-75 -75 150 150"
        className="constellation-container"
        style={{
          overflow: "visible",
          animationDelay: `${constellation.lightUpDelay}s`,
        }}
      >
        <g className="constellation-lines">
          {stars.map((star, index) => {
            if (index < stars.length - 1) {
              return (
                <line
                  key={`line-${index}`}
                  x1={star.x}
                  y1={star.y}
                  x2={stars[index + 1].x}
                  y2={stars[index + 1].y}
                  stroke="rgba(200, 220, 255, 0.5)"
                  strokeWidth="0.8"
                  className="constellation-line"
                />
              );
            }
            if (index === stars.length - 1 && stars.length > 2) {
              return (
                <line
                  key={`line-${index}`}
                  x1={star.x}
                  y1={star.y}
                  x2={stars[0].x}
                  y2={stars[0].y}
                  stroke="rgba(200, 220, 255, 0.5)"
                  strokeWidth="0.8"
                  className="constellation-line"
                />
              );
            }
            return null;
          })}
        </g>

        {stars.map((star) => (
          <g key={star.id}>
            <circle
              cx={star.x}
              cy={star.y}
              r={star.size * 4}
              fill="rgba(96, 165, 250, 0.1)"
              className="constellation-star-glow"
            />
            <circle
              cx={star.x}
              cy={star.y}
              r={star.size}
              fill="#fff"
              opacity={star.opacity}
              className="constellation-star"
            />
            <g opacity={star.opacity * 0.6}>
              <line
                x1={star.x}
                y1={star.y - star.size * 5}
                x2={star.x}
                y2={star.y + star.size * 5}
                stroke="#fff"
                strokeWidth="0.3"
                className="constellation-star"
              />
              <line
                x1={star.x - star.size * 5}
                y1={star.y}
                x2={star.x + star.size * 5}
                y2={star.y}
                stroke="#fff"
                strokeWidth="0.3"
                className="constellation-star"
              />
            </g>
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="relative bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 200 }, (_, i) => (
          <div
            key={`bg-star-${i}`}
            className="absolute bg-white rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              opacity: 0.3 + Math.random() * 0.7,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {constellations.map((constellation) => (
        <div
          key={constellation.id}
          className="absolute"
          style={{
            left: `${constellation.x}%`,
            top: `${constellation.y}%`,
            transform: `rotate(${constellation.rotation}deg)`,
          }}
        >
          {renderConstellation(constellation)}
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="perspective-container">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-point">
            <div className="w-4 h-4 bg-blue-200 rounded-full opacity-60 time-vortex"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 time-rings">
            <div className="time-ring ring-1"></div>
            <div className="time-ring ring-2"></div>
            <div className="time-ring ring-3"></div>
          </div>

          <div className="card-wrapper-3d">
            <div className="card-emerge-capaldi">
              <div className="bg-slate-900/85 backdrop-blur-md rounded-2xl shadow-2xl shadow-slate-900/40 p-8 max-w-4xl border border-slate-700/50">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="shrink-0">
                    <div className="relative photo-rotate group">
                      <div className="w-80 h-80 rounded-2xl bg-linear-to-br from-slate-700 via-blue-600 to-indigo-700 p-0.75 shadow-2xl shadow-blue-600/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                        <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                          <img
                            src="/Yo.jpg"
                            alt="Ángela P. Centelles Insa"
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-lg" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg" />
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg" />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-3 text-slate-100">
                      Ángela P. Centelles Insa
                    </h1>
                    <p className="text-slate-400 font-medium mb-5 text-lg">
                      Full Stack Web Developer & Designer | Illustrator
                    </p>

                    <p className="text-slate-300 mb-8 leading-relaxed">
                      Passionate full-stack developer with artistic vision. My
                      focus is on combining frontend, backend, databases,
                      frameworks and AI to deliver robust and creative
                      solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <a
                        href="/cvAngelaCentelles.pdf"
                        download
                        className="bg-slate-700 hover:bg-slate-600 text-slate-100 px-6 py-3 rounded-md transform hover:scale-105 transition duration-300 font-medium flex items-center justify-center gap-2 border border-slate-600"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Download my CV
                      </a>
                      <a
                        href="mailto:anceninpil@gmail.com"
                        className="bg-slate-800 border border-slate-600 text-slate-300 px-6 py-3 rounded-md hover:bg-slate-700 transform hover:scale-105 transition duration-300 font-medium text-center"
                      >
                        Contact me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

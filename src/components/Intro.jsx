import { useEffect, useState } from "react";

function Intro() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duration = 4000;
    const intervalTime = 40;
    const increment = 100 / (duration / intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return next;
      });
    }, intervalTime);

    const finishTimer = setTimeout(() => {
      setFinished(true);
    }, 4700);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (finished) {
    return null;
  }

  return (
    <div className={`intro-screen ${progress === 100 ? "intro-finished" : ""}`}>

      {/* Background */}
      <div className="intro-grid"></div>

      <div className="intro-glow intro-glow-one"></div>
      <div className="intro-glow intro-glow-two"></div>

      {/* Top */}
      <div className="intro-header">
        <span>MF</span>

        <span className="intro-status">
          <i></i>
          INITIALIZING
        </span>
      </div>

      {/* Center */}
      <div className="intro-center">

        <div className="intro-welcome">
          {"WELCOME".split("").map((letter, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="intro-subtitle">
          <span className="intro-line"></span>

          <span className="intro-subtitle-text">
            TO MY PORTFOLIO
          </span>

          <span className="intro-line"></span>
        </div>

        <div className="intro-message">
          JAVA FULL STACK DEVELOPER
        </div>

      </div>

      {/* Bottom */}
      <div className="intro-footer">

        <div className="intro-loading-info">
          <span>LOADING EXPERIENCE</span>

          <span className="intro-percentage">
            {Math.floor(progress)}
            <small>%</small>
          </span>
        </div>

        <div className="intro-loading-track">
          <div
            className="intro-loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="intro-footer-bottom">
          <span>MOHAMMAD FEROZ</span>

          <span>2026</span>
        </div>

      </div>

    </div>
  );
}

export default Intro;
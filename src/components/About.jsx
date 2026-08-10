import { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = ["Java", "ReactJS", "JavaScript", "SQL", "MySQL"];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section relative bg-[#050505] text-white px-6 py-24 md:px-10 lg:px-16 overflow-hidden ${
        visible ? "about-visible" : ""
      }`}
    >
      {/* Ambient background */}
      <div className="about-orb about-orb-one" />
      <div className="about-orb about-orb-two" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================
            TITLE
        ========================== */}

        <div className="about-heading mb-14">

          <p className="about-eyebrow">
            WHO I AM
          </p>

          <h2 className="about-title">
            About{" "}
            <span>Me.</span>
          </h2>

          <div className="about-line">
            <div />
          </div>

        </div>


        {/* =========================
            MAIN GRID
        ========================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">


          {/* PROFILE */}

          <div className="about-card about-profile-card">

            <div className="about-card-shine" />

            <p className="about-label">
              PROFILE
            </p>

            <h3 className="about-card-title">
              Building things that are{" "}
              <span>useful.</span>
            </h3>

            <p className="about-text">
              I am Mohammad Feroz, a Java Full Stack Developer passionate
              about creating modern, responsive and user-friendly web
              applications.
            </p>

            <p className="about-text">
              I enjoy turning ideas into practical software solutions.
              I have knowledge of Core Java, Advanced Java, HTML, CSS,
              JavaScript, ReactJS, SQL and MySQL, and I am continuously
              learning new technologies to improve my development skills.
            </p>


            {/* Skills */}

            <div className="about-tags">

              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`about-tag about-tag-${index + 1}`}
                >
                  <span className="about-tag-dot" />
                  {skill}
                </span>
              ))}

            </div>

          </div>


          {/* QUICK INFO */}

          <div className="about-info about-info-card">

            <div className="about-card-shine" />

            <p className="about-label">
              QUICK INFO
            </p>

            <div className="about-info-list">

              <div className="about-info-item">
                <span>ROLE</span>
                <strong>Java Full Stack Developer</strong>
              </div>

              <div className="about-info-divider" />

              <div className="about-info-item">
                <span>EDUCATION</span>
                <strong>B.Tech in Computer Science</strong>
              </div>

              <div className="about-info-divider" />

              <div className="about-info-item">
                <span>LOCATION</span>
                <strong>Hyderabad, India</strong>
              </div>

              <div className="about-info-divider" />

              <div className="about-info-item">
                <span>AGE</span>
                <strong>23 Years Old</strong>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            MY APPROACH
        ========================== */}

        <div className="about-approach">

          <div className="about-approach-glow" />

          <div className="about-approach-content">

            <div>

              <p className="about-label">
                MY APPROACH
              </p>

              <h3>
                Learn continuously.
                <span>
                  {" "}Build practically.
                </span>
                <br />

                <strong>
                  Solve real-world problems.
                </strong>
              </h3>

            </div>

            <div className="about-number">
              01
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
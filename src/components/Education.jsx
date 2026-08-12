import { useEffect, useRef, useState } from "react";

function Education() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const education = [
    {
      number: "01",
      degree: "B.Tech – Computer Science Engineering",
      college: "Jyothishmathi Institute of Technology and Sciences",
      year: "2023 – 2026",
      score: "CGPA: 7.48",
    },
    {
      number: "02",
      degree: "Diploma – Mining Engineering",
      college: "Abdul Kalam Institute Of Technology and Sciences",
      year: "Completed: 2022",
      score: "CGPA: 5.82",
    },
    {
      number: "03",
      degree: "SSC",
      college: "St. Anthony's High School",
      year: "March 2018",
      score: "CGPA: 8.0",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`education-section relative bg-[#050505] text-white px-6 py-24 md:px-10 lg:px-16 overflow-hidden ${
        visible ? "education-visible" : ""
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="education-bg-orb education-bg-orb-one" />
      <div className="education-bg-orb education-bg-orb-two" />

      <div className="education-grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="education-heading mb-14">

          <p className="education-eyebrow">
            MY JOURNEY
          </p>

          <h2 className="education-title">
            Education{" "}
            <span>& Learning.</span>
          </h2>

          <div className="education-line">
            <div />
          </div>

        </div>


        {/* =========================================
            TIMELINE
        ========================================== */}

        <div className="relative">

          {/* Timeline */}

          <div className="education-timeline">
            <div />
          </div>


          <div className="space-y-8">

            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`education-card education-card-${index + 1} relative pl-16 md:pl-24`}
              >

                {/* Timeline Number */}

                <div className="education-number">

                  <span>
                    {item.number}
                  </span>

                </div>


                {/* Card */}

                <div className="education-inner">

                  {/* Shine */}

                  <div className="education-shine" />

                  {/* Glow */}

                  <div className="education-hover-glow" />


                  <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                    <div className="flex-1">

                      <p className="education-year">
                        {item.year}
                      </p>

                      <h3 className="education-degree">
                        {item.degree}
                      </h3>

                      <p className="education-college">
                        {item.college}
                      </p>

                    </div>


                    {/* Score */}

                    <div className="education-score-wrapper">

                      <div className="education-score">
                        <span>
                          {item.score}
                        </span>
                      </div>

                    </div>

                  </div>


                  {/* Bottom Accent */}

                  <div className="education-accent">
                    <div />
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}

        <div className="education-bottom">

          <div className="education-bottom-glow" />

          <div className="education-bottom-content">

            <div>

              <p className="education-bottom-label">
                ALWAYS LEARNING
              </p>

              <h3>
                Turning knowledge into{" "}
                <span>
                  real-world projects.
                </span>
              </h3>

            </div>

            <div className="education-big-number">
              03
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
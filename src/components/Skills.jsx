import { useEffect, useRef, useState } from "react";

function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const skills = [
    {
      number: "01",
      name: "Core Java",
      category: "Programming",
      description:
        "Strong foundation in Java fundamentals, OOP, collections, exception handling and problem solving.",
    },
    {
      number: "02",
      name: "Advanced Java",
      category: "Backend",
      description:
        "Knowledge of backend development concepts and Java technologies used to build web applications.",
    },
    {
      number: "03",
      name: "HTML & CSS3",
      category: "Frontend",
      description:
        "Creating structured, responsive and modern web interfaces with HTML and CSS.",
    },
    {
      number: "04",
      name: "JavaScript",
      category: "Frontend",
      description:
        "Building interactive web experiences using modern JavaScript concepts and browser APIs.",
    },
    {
      number: "05",
      name: "ReactJS",
      category: "Frontend",
      description:
        "Developing component-based user interfaces and responsive single-page applications.",
    },
    {
      number: "06",
      name: "SQL & MySQL",
      category: "Database",
      description:
        "Working with relational databases, SQL queries, tables, relationships and data management.",
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
      id="skills"
      className={`skills-section relative bg-[#050505] text-white px-6 py-24 md:px-10 lg:px-16 overflow-hidden ${
        visible ? "skills-visible" : ""
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="skills-bg-orb skills-bg-orb-one" />
      <div className="skills-bg-orb skills-bg-orb-two" />

      <div className="skills-grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================================
            HEADING
        ========================================== */}

        <div className="skills-heading mb-14">

          <p className="skills-eyebrow">
            WHAT I WORK WITH
          </p>

          <h2 className="skills-title">
            My{" "}
            <span>Skills.</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build modern, responsive
            and user-friendly applications.
          </p>

          <div className="skills-line">
            <div />
          </div>

        </div>


        {/* =========================================
            SKILLS GRID
        ========================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card skill-card-${index + 1}`}
            >

              <div className="skill-card-inner">

                {/* Moving shine */}

                <div className="skill-shine" />

                {/* Background glow */}

                <div className="skill-hover-glow" />


                {/* Top */}

                <div className="flex items-center justify-between mb-8 relative z-10">

                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <span className="skill-category">
                    {skill.category}
                  </span>

                </div>


                {/* Icon */}

                <div className="skill-icon">

                  <span>
                    {skill.name.charAt(0)}
                  </span>

                </div>


                {/* Name */}

                <h3 className="skill-name">
                  {skill.name}
                </h3>


                {/* Description */}

                <p className="skill-description">
                  {skill.description}
                </p>


                {/* Bottom */}

                <div className="skill-bottom">

                  <span>
                    DEVELOPMENT
                  </span>

                  <span className="skill-arrow">
                    ↗
                  </span>

                </div>


                {/* Progress */}

                <div className="skill-progress">
                  <div />
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =========================================
            CURRENT FOCUS
        ========================================== */}

        <div className="skills-bottom mt-10">

          <div className="skills-bottom-glow" />

          <div className="skills-bottom-content">

            <div>

              <p className="skills-bottom-label">
                CURRENT FOCUS
              </p>

              <h3>
                Becoming a better{" "}
                <span>
                  full stack developer.
                </span>
              </h3>

            </div>

            <div className="skills-big-number">
              06
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
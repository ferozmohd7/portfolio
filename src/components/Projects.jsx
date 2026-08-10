import { useEffect, useRef, useState } from "react";

function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const projects = [
    {
      number: "01",
      type: "MAJOR PROJECT",
      title: "Real-Time Quantum Secure Chat App",
      description:
        "A secure real-time chat application that simulates the BB84 Quantum Key Distribution protocol to establish session keys and uses AES-GCM for secure message encryption.",
      technologies: [
        "ReactJS",
        "JavaScript",
        "WebSocket",
        "BB84",
        "QKD",
        "AES-GCM",
      ],
      highlights: [
        "Simulated BB84 quantum key distribution",
        "Real-time communication using WebSocket",
        "AES-GCM based message encryption",
      ],
      link: "https://github.com/ferozmohd7/quantum-secure-chat-app",
      buttonText: "View on GitHub",
      available: true,
    },
    {
      number: "02",
      type: "MINI PROJECT",
      title: "Secure Image Retrieval Using Blockchain and IPFS",
      description:
        "A decentralized image storage and retrieval system that uses IPFS for distributed storage and blockchain to securely manage image hashes and metadata.",
      technologies: [
        "Blockchain",
        "IPFS",
        "Ethereum",
        "Smart Contracts",
      ],
      highlights: [
        "Decentralized image storage using IPFS",
        "Blockchain-based image hash management",
        "Secure metadata retrieval",
      ],
      link: null,
      buttonText: "Coming Soon",
      available: false,
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
      id="projects"
      className={`projects-section relative bg-[#050505] text-white px-6 py-24 md:px-10 lg:px-16 overflow-hidden ${
        visible ? "projects-visible" : ""
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="projects-bg-orb projects-bg-orb-one" />
      <div className="projects-bg-orb projects-bg-orb-two" />

      <div className="projects-grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="projects-heading mb-14">

          <p className="projects-eyebrow">
            SELECTED WORK
          </p>

          <h2 className="projects-title">
            My{" "}
            <span>Projects.</span>
          </h2>

          <p className="projects-description">
            A selection of projects where I apply programming,
            security and full-stack development concepts to solve
            real-world problems.
          </p>

          <div className="projects-line">
            <div />
          </div>

        </div>


        {/* =========================================
            PROJECT CARDS
        ========================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card project-card-${index + 1}`}
            >

              <div className="project-inner">

                {/* Moving Shine */}

                <div className="project-shine" />

                {/* Hover Glow */}

                <div className="project-hover-glow" />


                <div className="relative z-10">

                  {/* =================================
                      TOP
                  ================================= */}

                  <div className="flex items-start justify-between gap-5 mb-8">

                    <div>

                      <p className="project-type">
                        {project.type}
                      </p>

                      <span className="project-number">
                        {project.number}
                      </span>

                    </div>


                    {/* Status */}

                    <div className="project-status">

                      <span
                        className={
                          project.available
                            ? "project-status-available"
                            : "project-status-coming"
                        }
                      >

                        <span className="project-status-dot" />

                        {project.available
                          ? "AVAILABLE"
                          : "COMING SOON"}

                      </span>

                    </div>

                  </div>


                  {/* =================================
                      TITLE
                  ================================= */}

                  <h3 className="project-title">
                    {project.title}
                  </h3>


                  {/* =================================
                      DESCRIPTION
                  ================================= */}

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* =================================
                      HIGHLIGHTS
                  ================================= */}

                  <div className="project-highlights">

                    <p className="project-label">
                      KEY HIGHLIGHTS
                    </p>

                    <ul>

                      {project.highlights.map((highlight) => (
                        <li key={highlight}>

                          <span className="project-bullet">
                            ▹
                          </span>

                          <span>
                            {highlight}
                          </span>

                        </li>
                      ))}

                    </ul>

                  </div>


                  {/* =================================
                      TECHNOLOGIES
                  ================================= */}

                  <div className="project-technologies">

                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>


                  {/* =================================
                      BUTTON
                  ================================= */}

                  {project.available ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <span>
                        {project.buttonText}
                      </span>

                      <span className="project-button-arrow">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="project-button project-button-disabled"
                    >
                      <span>
                        {project.buttonText}
                      </span>
                    </button>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}

        <div className="projects-bottom">

          <div className="projects-bottom-glow" />

          <div className="projects-bottom-content">

            <div>

              <p className="projects-bottom-label">
                WHAT I BUILD
              </p>

              <h3>
                Practical ideas.
                <span>
                  {" "}Modern technology.
                </span>
                <br />

                <strong>
                  Real-world solutions.
                </strong>
              </h3>

            </div>

            <div className="projects-big-number">
              02
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;
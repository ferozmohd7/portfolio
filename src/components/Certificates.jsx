import { useEffect, useRef, useState } from "react";

function Certificates() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const certificates = [
    {
      number: "01",
      title: "Python Programming",
      issuer: "Codetantra",
      description:
        "Certificate demonstrating knowledge and practical understanding of Python programming.",
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
      id="certificates"
      className={`certificates-section relative bg-[#050505] text-white px-6 py-24 md:px-10 lg:px-16 overflow-hidden ${
        visible ? "certificates-visible" : ""
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="certificates-bg-orb certificates-bg-orb-one" />
      <div className="certificates-bg-orb certificates-bg-orb-two" />

      <div className="certificates-grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================================
            HEADING
        ========================================== */}

        <div className="certificates-heading mb-14">

          <p className="certificates-eyebrow">
            ACHIEVEMENTS
          </p>

          <h2 className="certificates-title">
            Certificates{" "}
            <span>& Learning.</span>
          </h2>

          <p className="certificates-description">
            Certifications that support my technical knowledge and
            demonstrate my commitment to continuous learning.
          </p>

          <div className="certificates-line">
            <div />
          </div>

        </div>


        {/* =========================================
            CERTIFICATE
        ========================================== */}

        <div className="max-w-4xl">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="certificate-card"
            >

              <div className="certificate-inner">

                {/* Shine */}

                <div className="certificate-shine" />

                {/* Glow */}

                <div className="certificate-hover-glow" />


                <div className="relative z-10">

                  {/* Top */}

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">

                    <div className="flex items-center gap-5">

                      {/* Icon */}

                      <div className="certificate-icon">

                        <span>
                          ✓
                        </span>

                      </div>


                      <div>

                        <p className="certificate-label">
                          CERTIFICATE {certificate.number}
                        </p>

                        <h3 className="certificate-title">
                          {certificate.title}
                        </h3>

                        <p className="certificate-issuer">
                          {certificate.issuer}
                        </p>

                      </div>

                    </div>


                    {/* Number */}

                    <span className="certificate-number">
                      {certificate.number}
                    </span>

                  </div>


                  {/* Description */}

                  <p className="certificate-description">
                    {certificate.description}
                  </p>


                  {/* Bottom */}

                  <div className="certificate-bottom-line">

                    <span />

                    <span>
                      Technical Certification
                    </span>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}

        <div className="certificate-bottom">

          <div className="certificate-bottom-glow" />

          <div className="certificate-bottom-content">

            <div>

              <p className="certificate-bottom-label">
                CONTINUOUS LEARNING
              </p>

              <h3>
                Always improving{" "}
                <span>
                  my technical skills.
                </span>
              </h3>

            </div>

            <div className="certificate-big-number">
              01
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certificates;
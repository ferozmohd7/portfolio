import { useEffect, useRef, useState } from "react";

function Contact() {
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact-section relative bg-[#050505] text-white px-6 py-24 md:px-10 lg:px-16 overflow-hidden ${
        visible ? "contact-visible" : ""
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="contact-bg-orb contact-bg-orb-one" />
      <div className="contact-bg-orb contact-bg-orb-two" />

      <div className="contact-grid-bg" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="contact-heading text-center mb-14">

          <p className="contact-eyebrow">
            LET'S CONNECT
          </p>

          <h2 className="contact-title">
            Get In{" "}
            <span>Touch.</span>
          </h2>

          <p className="contact-description">
            I'm currently looking for opportunities as a Java Full Stack
            Developer. Feel free to contact me for job opportunities,
            collaborations, or professional connections.
          </p>

          <div className="contact-line">
            <div />
          </div>

        </div>


        {/* =========================================
            CONTACT CARDS
        ========================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* EMAIL */}

          <div className="contact-card contact-card-1">

            <div className="contact-inner">

              <div className="contact-shine" />

              <div className="contact-hover-glow" />

              <div className="relative z-10">

                <div className="contact-icon">
                  <span>✉</span>
                </div>

                <h3 className="contact-card-title">
                  Email
                </h3>

                <p className="contact-email">
                  ferozmohd0507@gmail.com
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ferozmohd0507@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <span>
                    Send Me an Email
                  </span>

                  <span className="contact-button-arrow">
                    ↗
                  </span>
                </a>

              </div>

            </div>

          </div>


          {/* LOCATION */}

          <div className="contact-card contact-card-2">

            <div className="contact-inner">

              <div className="contact-shine" />

              <div className="contact-hover-glow" />

              <div className="relative z-10">

                <div className="contact-icon">
                  <span>⌖</span>
                </div>

                <h3 className="contact-card-title">
                  Location
                </h3>

                <p className="contact-email">
                  Hyderabad, India
                </p>

                <div className="contact-availability">
                  <span />
                  Available for opportunities
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            SOCIAL LINKS
        ========================================== */}

        <div className="contact-social">

          <a
            href="https://github.com/ferozmohd7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-button"
          >
            <span>💻</span>

            <span>
              GitHub
            </span>

            <span className="contact-social-arrow">
              ↗
            </span>
          </a>


          <a
            href="https://www.linkedin.com/in/mohammad-feroz-23645a31b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-button contact-linkedin"
          >
            <span>🔗</span>

            <span>
              LinkedIn
            </span>

            <span className="contact-social-arrow">
              ↗
            </span>
          </a>

        </div>


        {/* =========================================
            BOTTOM
        ========================================== */}

        <div className="contact-bottom">

          <div className="contact-bottom-line" />

          <p>
            Have an opportunity or an interesting project?
          </p>

          <strong>
            I'd love to hear from you.
          </strong>

          <div className="contact-bottom-number">
            04
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
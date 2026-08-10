import { useEffect, useRef, useState } from "react";

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = footerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${visible ? "footer-visible" : ""}`}
    >
      {/* ================= HERO CTA ================= */}
      <section className="footer-hero">

        <div className="footer-heading">
          <span>LET'S CREATE</span>
          <span className="footer-heading-muted">
            SOMETHING REAL.
          </span>
        </div>

        {/* Your photo on the right */}
        <div className="footer-portrait">
          <div className="footer-portrait-glow"></div>

          <img
            src="/profile.jpg"
            alt="Mohammad Feroz"
          />
        </div>

      </section>

      {/* ================= MAIN FOOTER CARD ================= */}
      <section className="footer-card">

        {/* Profile */}
        <div className="footer-profile">

          <div className="footer-profile-top">
            <div>
              <p className="footer-small-label">
                DEVELOPER
              </p>

              <h3>
                Mohammad Feroz
              </h3>

              <p>
                Java Full Stack Developer
              </p>
            </div>
          </div>

          <p className="footer-description">
            I build modern, responsive and meaningful digital
            experiences with clean code and creative ideas.
          </p>

        </div>

        {/* General */}
        <div className="footer-column">
          <h4>GENERAL</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        {/* About */}
        <div className="footer-column">
          <h4>ABOUT</h4>

          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Works */}
        <div className="footer-column">
          <h4>WORKS</h4>

          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Let's Work</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>CONTACT</h4>

          <a href="mailto:ferozmohd0507@gmail.com">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-feroz-23645a31b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ferozmohd7"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="footer-bottom">

          <p>
            © 2026 Mohammad Feroz. All rights reserved.
          </p>

          <p className="footer-built">
            Built with ReactJS
          </p>

          {/* Social icons */}
          <div className="footer-socials">

            {/* GitHub */}
            <a
              href="https://github.com/ferozmohd7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammad-feroz-23645a31b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05C21.68 8.59 22 11.08 22 14.32V21h-4v-5.92c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V21h-4V9Z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ferozesonu_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:ferozmohd0507@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="m4 7 8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </a>

          </div>
        </div>

      </section>
    </footer>
  );
}

export default Footer;
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const current = sections
        .slice()
        .reverse()
        .find((section) => {
          const element = document.getElementById(section.id);

          if (!element) return false;

          return window.scrollY >= element.offsetTop - 180;
        });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        scrolled ? "navbar-scrolled" : "navbar-top"
      }`}
    >
      <div className="navbar-container">

        {/* =========================================
            LOGO
        ========================================== */}

        <button
          onClick={() => handleClick("home")}
          className="navbar-logo"
        >
          <span>Mohammad</span>{" "}
          <strong>Feroz</strong>
        </button>


        {/* =========================================
            DESKTOP NAVIGATION
        ========================================== */}

        <div className="navbar-desktop">

          <ul className="navbar-links">

            {sections.map((section) => (
              <li key={section.id}>

                <button
                  onClick={() => handleClick(section.id)}
                  className={`navbar-link ${
                    activeSection === section.id
                      ? "navbar-link-active"
                      : ""
                  }`}
                >
                  {section.label}

                  <span className="navbar-link-line" />

                </button>

              </li>
            ))}

          </ul>


          {/* Resume */}

          <a
            href="/resume.pdf"
            download
            className="navbar-resume"
          >
            <span>Resume</span>
            <span>↓</span>
          </a>

        </div>


        {/* =========================================
            MOBILE MENU BUTTON
        ========================================== */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`navbar-menu-button ${
            mobileOpen ? "navbar-menu-open" : ""
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* =========================================
          MOBILE MENU
      ========================================== */}

      <div
        className={`navbar-mobile ${
          mobileOpen ? "navbar-mobile-open" : ""
        }`}
      >

        <div className="navbar-mobile-inner">

          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`navbar-mobile-link ${
                activeSection === section.id
                  ? "navbar-mobile-link-active"
                  : ""
              }`}
              style={{
                transitionDelay: mobileOpen
                  ? `${index * 60}ms`
                  : "0ms",
              }}
            >
              <span className="navbar-mobile-number">
                0{index + 1}
              </span>

              <span>
                {section.label}
              </span>

              <span className="navbar-mobile-arrow">
                ↗
              </span>
            </button>
          ))}


          {/* Mobile Resume */}

          <a
            href="/resume.pdf"
            download
            className="navbar-mobile-resume"
          >
            Download Resume
            <span>↓</span>
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
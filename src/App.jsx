import { useEffect, useState } from "react";
import Home from "./componentes/Sections/Home";
import About from "./componentes/Sections/About";
import Contact from "./componentes/Sections/Contact";
import Projects from "./componentes/Sections/Projects";
import LoadingScreen from "./componentes/LoadingScreen";
import "./App.css";

const sections = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {loading && <LoadingScreen />}

      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">R.</span>
            <span>Portfolio</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={closeMenu}
              >
                {section.label}
              </a>
            ))}

            <a
  className="linkedin-link"
  href="https://www.linkedin.com/in/rajveer-shekhawat-4678a932a/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my LinkedIn profile"
  title="LinkedIn"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
</a>
          </div>
        </nav>
      </header>

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio featuring a responsive layout, project showcases, smooth navigation, and a contact form.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    demo: "portfolio-website-nine-jade-93.vercel.app",
    github: "",
  },
  {
    number: "02",
    title: "Travel Planner",
    description:
      "A travel planning application concept for organizing trips, managing itineraries, and discovering new destinations.",
    technologies: ["React", "JavaScript", "CSS"],
    demo: "https://travel-website-ten-tau.vercel.app/",
    github: "",
  },
  {
    number: "03",
    title: "Weather Dashboard",
    description:
      "A weather dashboard concept for displaying current conditions and forecast information in an easy-to-read interface.",
    technologies: ["React", "API", "CSS"],
    demo: "",
    github: "",
  },
  {
    number: "04",
    title: "Landing Page",
    description:
      "A clean landing page concept with responsive sections, clear calls to action, and a consistent visual design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "",
    github: "",
  },
];

function ProjectPreview({ number }) {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="project-window">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="window-line window-line-short" />
        <div className="window-line" />
        <div className="window-line" style={{ width: "75%" }} />

        <div className="window-boxes">
          <span />
          <span />
          <span />
        </div>

        <div
          style={{
            marginTop: 16,
            color: "#a78bfa",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          PROJECT {number}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <span className="eyebrow">Selected work</span>

        <h2>
          Things I've <span className="accent-text">built.</span>
        </h2>

        <p>
          A collection of projects demonstrating my interest in
          development, design, and solving real-world problems.
          Replace these examples with your actual projects.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <ProjectPreview number={project.number} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code ↗
                  </a>
                )}

                {!project.demo && !project.github && (
                  <span className="muted-text">
                    Add your project links
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
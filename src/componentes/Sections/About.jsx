const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Vite",
  "Git",
  "Responsive Design",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <span className="eyebrow">Get to know me</span>
        <h2>
          A little about <span className="accent-text">me.</span>
        </h2>
        <p>
          I believe great websites combine thoughtful design, clean code,
          accessibility, and a smooth user experience.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <h3>Turning ideas into reality.</h3>

          <p>
            I'm a developer who loves learning new technologies and
            turning ideas into useful digital products. I focus on
            building interfaces that look great and work well across
            desktop, tablet, and mobile devices.
          </p>

          <p>
            My current toolkit includes React, JavaScript, modern CSS,
            and Tailwind CSS. I'm continually improving my skills by
            building projects and exploring better ways to write code.
          </p>

          <h3 style={{ marginTop: 30 }}>Technologies I use</h3>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="about-card">
          <h3>What I bring to the table</h3>

          <div className="stat-row">
            <strong>01</strong>
            <span>Clean, maintainable code</span>
          </div>

          <div className="stat-row">
            <strong>02</strong>
            <span>Responsive user interfaces</span>
          </div>

          <div className="stat-row">
            <strong>03</strong>
            <span>Creative problem solving</span>
          </div>

          <div className="stat-row">
            <strong>04</strong>
            <span>Continuous learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
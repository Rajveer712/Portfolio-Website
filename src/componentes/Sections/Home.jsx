export default function Home() {
  return (
    <section className="section hero" id="home">
      <div className="hero-content">

        <h1 className="hero-title">
         Hi, I'm Rajveer
          <br />
          Shekhawat
          <br />
        </h1>

        <p className="hero-description">
          I am a BCA student passionate about web development and modern technologies.  
I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and React.  
I am continuously improving my skills and aim to create innovative web solutions while growing as a software developer.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Explore my work ↗
          </a>

          <a className="secondary-button" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio monogram">
        <div className="hero-visual-inner">
          <span className="hero-initial">R.</span>
        </div>

        <span className="floating-label floating-label-one">
          React Developer
        </span>

        <span className="floating-label floating-label-two">
          Creative & Curious ✦
        </span>
      </div>
    </section>
  );
}
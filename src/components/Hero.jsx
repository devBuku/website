import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img src="/hero.jpg" alt="Shubhayan Bagchi - Backend Developer" />
      </div>

      <div className="hero-content">
        <h1>Backend-First Full-Stack Developer</h1>
        <p className="hero-sub">
          I design REST APIs, model databases, implement authentication, and
          build full-stack web applications. Final-year B.Tech CSE at MAKAUT,
          Kolkata.
        </p>
        <div className="hero-actions">
          <a href="/work" className="btn btn-primary">
            View Projects
          </a>
          <a href="/resume.pdf" download className="btn btn-secondary">
            Resume
          </a>
          <a href="/contact" className="btn btn-outline">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

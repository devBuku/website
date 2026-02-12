import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">
      {/* Hero Image */}
      <div className="hero-image-wrapper">
        <img src="/hero.jpg" alt="Shubhayan Bagchi - Full Stack Developer" />
      </div>

      {/* Hero Text */}
      <div className="hero-content">
        <h1>Full Stack Developer with a backend mindset.</h1>

        <p className="hero-sub">
          I design systems, build REST APIs, work with PostgreSQL and MongoDB,
          implement secure authentication, and ship production-ready web
          applications. Final-year BTech CSE student from Kolkata.
        </p>

        <a href="/work" className="hero-link">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;

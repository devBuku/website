import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">
      {/* Hero Image */}
      <div className="hero-image-wrapper">
        <img src="/hero.jpg" alt="Inner peace inspiration" />
      </div>

      {/* Hero Text */}
      <div className="hero-content">
        <h1>
          Frontend Developer focused on building clean, thoughtful web
          experiences.
        </h1>

        <p className="hero-sub">
          Final-year BTech CSE student from Kolkata, passionate about React,
          JavaScript, and problem-solving.
        </p>

        <a href="/work" className="hero-link">
          See My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;

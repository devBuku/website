import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import "../styles/home.css";

const featuredProjects = [
  {
    title: "QuickBite — MERN Food Ordering Platform",
    description:
      "Full e-commerce flow with Stripe payments, role-based admin dashboard, and RESTful APIs.",
    tech: "MongoDB · Express · React · Node.js · Stripe",
    link: "https://github.com/devBuku/QuickBite",
  },
  {
    title: "Uber — MERN Ride Booking Platform",
    description:
      "Real-time rider/driver workflows with JWT auth and mobile-first responsive design.",
    tech: "MongoDB · Express · React · Node.js · JWT",
    link: "https://github.com/devBuku/Uber",
  },
  {
    title: "VagDevi.ai — AI Chat Application",
    description:
      "Multilingual chatbot using Gemini API with Flask backend, React frontend, and JWT auth.",
    tech: "React · Flask · MongoDB · Gemini API · JWT",
    link: "https://github.com/devBuku/VagDevi.ai",
  },
];

function Home() {
  return (
    <main>
      <Hero />

      {/* What I Do */}
      <section className="section services-section">
        <h2 className="section-title">What I Do</h2>
        <div className="services">
          <ServiceCard
            image="/backend_engineering.png"
            title="Backend Engineering"
            text="REST APIs with Node.js and Express — JWT/cookie authentication, structured routing, and maintainable server architecture."
          />
          <ServiceCard
            image="/db.png"
            title="Database & System Design"
            text="PostgreSQL, MongoDB, and MySQL — schema design, query optimization, and reliable data flow across applications."
          />
          <ServiceCard
            image="/sysd.png"
            title="Full-Stack Applications"
            text="React frontends backed by REST APIs — complete web applications with clean separation of concerns."
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights-section">
        <h2 className="section-title">Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <span className="highlight-label">Achievement</span>
            <h3>SIH 2023 Finalist</h3>
            <p>Smart India Hackathon — national-level finalist</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-label">Leadership</span>
            <h3>Coding Club Lead</h3>
            <p>Group Leader — mentoring and project architecture guidance</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div className="featured-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="featured-tech">{project.tech}</span>
            </div>
          ))}
        </div>
        <div className="featured-cta">
          <a href="/work" className="btn btn-outline">
            View All Projects
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta-section">
        <div className="contact-cta">
          <h2>Let's Build Something</h2>
          <p>
            Open to internships and entry-level SDE roles — if you have an
            opportunity or a project in mind, reach out.
          </p>
          <a href="/contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;

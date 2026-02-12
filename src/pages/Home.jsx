import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import "../styles/home.css";

function Home() {
  return (
    <main>
      <Hero />

      {/* What I Do Section */}
      <section className="services-section">
        <h2 className="section-title">What I Do</h2>

        <div className="services">
          <ServiceCard
            image="/backend_engineering.png"
            title="Backend Engineering"
            text="Designing scalable server-side systems using Node.js and Express. Building REST APIs, handling authentication (JWT & cookies), and structuring maintainable backend architecture."
          />

          <ServiceCard
            image="/db.png"
            title="Database & System Design"
            text="Working with PostgreSQL, MongoDB, and MySQL. Designing efficient schemas, optimizing queries, and ensuring reliable data flow across applications."
          />

          <ServiceCard
            image="/sysd.png"
            title="Full Stack Applications"
            text="Developing end-to-end web applications using React and modern tooling. Comfortable building frontend logic while keeping the backend architecture clean and production-ready."
          />
        </div>
      </section>
    </main>
  );
}

export default Home;

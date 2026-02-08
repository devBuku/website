import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import "../styles/home.css";

function Home() {
  return (
    <main>
      <Hero />

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">What I Do</h2>

        <div className="services">
          <ServiceCard
            image="/hero.jpg"
            title="Web Development"
            text="I build responsive and modern web applications using React, JavaScript, and clean CSS."
          />

          <ServiceCard
            image="/hero.jpg"
            title="Frontend Engineering"
            text="I focus on clean UI, reusable components, and maintainable code following best practices."
          />

          <ServiceCard
            image="/hero.jpg"
            title="Problem Solving"
            text="I have a strong foundation in data structures, algorithms, OOPs, and core CS subjects."
          />
        </div>
      </section>

    </main>
  );
}

export default Home;

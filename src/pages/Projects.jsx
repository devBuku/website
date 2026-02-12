import "../styles/projects.css";

const projects = [
  {
    title: "Yoober — Cab Booking Platform",
    description:
      "A full-stack cab booking application inspired by Uber. Built complete user and driver flows with authentication, booking management, and RESTful backend architecture.",
    tech: "React, Express, MongoDB, JWT, REST APIs",
    link: "https://github.com/devBuku/Uber",
  },
  {
    title: "VagDevi.ai — AI Chat Application",
    description:
      "AI-powered multilingual chatbot with text-to-text and image-to-text generation using Gemini API. Implemented secure authentication and modular backend services.",
    tech: "React, Flask, MongoDB, Gemini API, JWT",
    link: "https://github.com/devBuku/VagDevi.ai",
  },
  {
    title: "QuickBite — Food Ordering System",
    description:
      "Full-stack food ordering platform featuring user authentication, cart management, and order workflows. Designed backend APIs and structured database models.",
    tech: "React, Node.js, Express, MongoDB",
    link: "https://github.com/devBuku/QuickBite",
  },
  {
    title: "Zoinsta — Social Media Backend",
    description:
      "Backend-focused social platform clone with authentication, post creation, and user interactions. Emphasis on database schema design and scalable API structure.",
    tech: "Node.js, Express, MongoDB, REST APIs",
    link: "https://github.com/devBuku/zoinsta",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Real-time messaging application implementing authentication and live communication features. Explored event-driven architecture and socket-based interactions.",
    tech: "Node.js, Express, Socket.io, MongoDB",
    link: "https://github.com/devBuku/chat-app-demo",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Selected Work</h2>

      <p className="projects-intro">
        These projects highlight my backend engineering focus, full-stack
        architecture experience, and ability to build production-oriented web
        applications.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">
              <strong>Tech:</strong> {project.tech}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

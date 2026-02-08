import "../styles/projects.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio built using React and Vite to showcase projects, skills, and contact details.",
    tech: "React, JavaScript, CSS",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Todo List Web App",
    description:
      "A simple todo application with add, delete, and mark-as-complete functionality using React hooks.",
    tech: "React, JavaScript",
    link: "https://github.com/yourusername/todo-app",
  },
  {
    title: "Weather Application",
    description:
      "A weather app that fetches real-time weather data using a public API and displays temperature and conditions.",
    tech: "JavaScript, API, HTML, CSS",
    link: "https://github.com/yourusername/weather-app",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Work</h2>
      <p className="projects-intro">
        Here are some of the projects I’ve worked on during my learning journey.
        Each project helped me strengthen my understanding of frontend
        development and problem-solving.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech"><strong>Tech:</strong> {project.tech}</p>
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

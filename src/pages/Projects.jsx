import "../styles/projects.css";

const projects = [
    {
        title: "Uber — MERN Ride Booking Platform (WIP)",
        description:
            "A mobile-first view Uber clone built with the MERN stack. Currently implementing complete rider and driver workflows including authentication, ride requests, booking lifecycle, and real-time status updates. Designed with a mobile UI experience on web (DevTools device view), with plans to extend into a Progressive Web App (PWA) or migrate to React Native. Backend follows REST architecture with secure JWT-based cookie authentication.",
        tech: "MongoDB, Express.js, React.js, Node.js (MERN), JWT, Cookie-based Auth, REST APIs",
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
        title: "QuickBite — MERN Food Ordering Platform",
        description:
            "A full-stack MERN food ordering application built to simulate real-world e-commerce workflows. Implemented secure JWT-based authentication, cart and order lifecycle management, Stripe payment integration, and a role-based admin dashboard for food and order control. Designed RESTful backend APIs with structured MongoDB models, image uploads using Multer, and complete order status tracking from placement to delivery.",
        tech: "MongoDB, Express.js, React.js, Node.js (MERN), JWT, Stripe API, Multer, Context API, REST APIs",
        link: "https://github.com/devBuku/QuickBite",
    },
];

function Projects() {
    return (
        <section className="projects">
            <h2>Selected Work</h2>

            <p className="projects-intro">
                These projects highlight my backend engineering focus,
                full-stack architecture experience, and ability to build
                production-oriented web applications.
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

import "../styles/projects.css";

const projects = [
    {
        title: "Uber — MERN Ride Booking Platform",
        image: "/hero.jpg",
        live: "#",
        highlights: [
            "Real-time ride booking system with rider/driver lifecycle management",
            "JWT cookie-based authentication and RESTful backend APIs",
            "Mobile-first responsive design — planned PWA / React Native port",
        ],
        tech: "MongoDB · Express.js · React · Node.js · JWT · REST",
        link: "https://github.com/devBuku/Uber",
    },
    {
        title: "QuickBite — MERN Food Ordering Platform",
        image: "/hero.jpg",
        live: "#",
        highlights: [
            "Full e-commerce flow: cart, checkout, Stripe payments, order tracking",
            "Role-based admin dashboard with Multer image uploads",
            "RESTful APIs with MongoDB models and JWT authentication",
        ],
        tech: "MongoDB · Express.js · React · Node.js · Stripe · JWT",
        link: "https://github.com/devBuku/QuickBite",
    },
    {
        title: "random-walk — SDL2 Visualization in C",
        image: "/output.gif",
        live: "#",
        highlights: [
            "Multi-threaded random-walk simulation with real-time SDL2 rendering",
            "Graphics pipeline and concurrency fundamentals in C",
            "Rainbow-colored agents demonstrating systems-level programming",
        ],
        tech: "C · SDL2",
        link: "https://github.com/devBuku/random-walk",
    },
    {
        title: "VagDevi.ai — AI Chat Application",
        image: "/hero.jpg",
        live: "#",
        highlights: [
            "Multilingual chatbot with text/image-to-text via Gemini API",
            "Modular Flask backend + React frontend with JWT auth",
            "MongoDB-backed conversation history and session management",
        ],
        tech: "React · Flask · MongoDB · Gemini API · JWT",
        link: "https://github.com/devBuku/VagDevi.ai",
    },
];

function Projects() {
    return (
        <section className="projects">
            <h2>Selected Work</h2>

            <p className="projects-intro">
                Full-stack applications and systems-level projects built with
                clean architecture, secure authentication, and production
                mindset.
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                width="800"
                                height="450"
                            />
                        </div>
                        <div className="project-body">
                            <h3>{project.title}</h3>
                            <ul className="project-highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                            <p className="tech">
                                <strong>Stack:</strong> {project.tech}
                            </p>
                            <div className="project-actions">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

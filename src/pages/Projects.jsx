import "../styles/projects.css";

const fullstack = [
    {
        title: "Uber — MERN Ride Booking Platform",
        image: "/hero.jpg",
        live: "#",
        highlights: [
            "Role-based authentication (Rider & Captain) with JWT cookie-based sessions",
            "Complete ride lifecycle: booking requests, acceptance, and status tracking",
            "Mobile-first responsive UI with React.js and Tailwind CSS",
        ],
        tech: "React · Tailwind CSS · Express.js · MongoDB · JWT · REST APIs",
        link: "https://github.com/devBuku/Uber",
    },
    {
        title: "QuickBite — MERN Food Ordering Platform",
        image: "/hero.jpg",
        live: "#",
        highlights: [
            "Full e-commerce flow: cart, checkout, Stripe payments, order tracking",
            "Role-based admin dashboard with Multer image uploads",
            "RESTful APIs with Express.js, MongoDB (Mongoose ODM), and JWT auth",
        ],
        tech: "MongoDB · Express.js · React · Node.js · Stripe · JWT · Multer · Context API",
        link: "https://github.com/devBuku/QuickBite",
    },
    {
        title: "VagDevi.ai — AI Chat Application",
        image: "/hero.jpg",
        live: "#",
        highlights: [
            "College tech fest winning project — text-to-text and image-to-text generation",
            "Multilingual response translation via Gemini API with JWT auth",
            "Modular React.js frontend, Flask backend, MongoDB storage",
        ],
        tech: "React · Flask · MongoDB · Gemini API · JWT",
        link: "https://github.com/devBuku/VagDevi.ai",
    },
];

const fun = [
    {
        title: "random-walk — SDL2 Visualization in C",
        image: "/output.gif",
        highlights: [
            "Multi-threaded random-walk simulation with real-time SDL2 rendering",
            "Graphics pipeline and concurrency fundamentals in C",
            "Rainbow-colored agents demonstrating systems-level programming",
        ],
        tech: "C · SDL2",
        link: "https://github.com/devBuku/random-walk",
    },
];

function ProjectCard({ project, showLive }) {
    return (
        <div className="project-card">
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
                    {showLive && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <section className="projects">
            <div className="projects-section">
                <h2 className="projects-subtitle">In Prod</h2>
                <div className="projects-grid">
                    {fullstack.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            showLive={true}
                        />
                    ))}
                </div>
            </div>

            <div className="projects-section">
                <h2 className="projects-subtitle">For Fun</h2>
                <div className="projects-grid">
                    {fun.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            showLive={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

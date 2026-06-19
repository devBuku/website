import "../styles/projects.css";

const fullstack = [
    {
        title: "Tomato — MERN Food Ordering Platform",
        image: "/tomato.gif",
        live: "#",
        highlights: [
            "Full e-commerce flow: cart, checkout, Stripe payments, order tracking",
            "Role-based admin dashboard with Multer image uploads",
            "RESTful APIs with Express.js, MongoDB (Mongoose ODM), and JWT auth",
        ],
        tech: "MongoDB · Express.js · React · Node.js · Stripe · JWT · Multer · Context API",
        link: "https://github.com/devBuku/Tomato",
    },
];

const ongoing = [
    {
        title: "Swarlipi — AI Video Dubbing Assistant",
        image: "/hero.jpg",
        highlights: [
            "Smart India Hackathon 2023 finalist — AI-powered video dubbing across languages",
            "Uses OpenAI Whisper for speech-to-text, gTTS for text-to-speech, OpenCV for video processing",
            "Built with React.js frontend and Flask backend translation pipeline",
        ],
        tech: "React · Flask · OpenAI Whisper · gTTS · OpenCV",
        link: "#",
    },
    {
        title: "VagDevi.ai — AI Chat Application",
        image: "/hero.jpg",
        highlights: [
            "College tech fest winning project — text-to-text and image-to-text generation",
            "Multilingual response translation via Gemini API with JWT auth",
            "Modular React.js frontend, Flask backend, MongoDB storage",
        ],
        tech: "React · Flask · MongoDB · Gemini API · JWT",
        link: "https://github.com/devBuku/VagDevi.ai",
    },
    {
        title: "Uber — MERN Ride Booking Platform",
        image: "/hero.jpg",
        highlights: [
            "Role-based authentication (Rider & Captain) with JWT cookie-based sessions",
            "Complete ride lifecycle: booking requests, acceptance, and status tracking",
            "Mobile-first responsive UI with React.js and Tailwind CSS",
        ],
        tech: "React · Tailwind CSS · Express.js · MongoDB · JWT · REST APIs",
        link: "https://github.com/devBuku/Uber",
    },
    {
        title: "Spotify MERN — Music Streaming Web App",
        image: "/hero.jpg",
        highlights: [
            "Full-stack music streaming platform with playlist management and search",
            "User authentication with personalized recommendations",
            "Built with the MERN stack following RESTful architecture",
        ],
        tech: "MongoDB · Express.js · React · Node.js · JWT",
        link: "#",
    },
    {
        title: "Real-Time Chat Application",
        image: "/hero.jpg",
        highlights: [
            "Real-time messaging with WebSocket-based instant communication",
            "User authentication, room creation, and message history",
            "Built with MERN stack and Socket.io for live updates",
        ],
        tech: "MongoDB · Express.js · React · Node.js · Socket.io · JWT",
        link: "#",
    },
    {
        title: "Ledger — Banking Transaction System",
        image: "/hero.jpg",
        highlights: [
            "Secure transaction ledger with balance tracking and history",
            "Role-based access with transaction logs and audit trails",
            "Built with MERN stack following financial data best practices",
        ],
        tech: "MongoDB · Express.js · React · Node.js · JWT",
        link: "#",
    },
    {
        title: "Real-Time Device Tracker",
        image: "/hero.jpg",
        highlights: [
            "Live device location tracking with real-time map updates",
            "WebSocket-based communication for continuous data streaming",
            "Built with MERN stack and mapping visualization",
        ],
        tech: "MongoDB · Express.js · React · Node.js · Socket.io",
        link: "#",
    },
    {
        title: "Instacart — E-Commerce Web App",
        image: "/hero.jpg",
        highlights: [
            "Full e-commerce flow: product catalog, cart, checkout, order tracking",
            "User authentication, admin dashboard, and payment integration",
            "Built with MERN stack following scalable architecture",
        ],
        tech: "MongoDB · Express.js · React · Node.js · JWT · Stripe",
        link: "#",
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

function ProjectCard({ project, showLive, ongoing }) {
    return (
        <div className={`project-card${ongoing ? ' ongoing' : ''}`}>
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
                <h2 className="projects-subtitle">Production</h2>
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
                <h2 className="projects-subtitle">In Development</h2>
                <div className="projects-grid">
                    {ongoing.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            showLive={false}
                            ongoing={true}
                        />
                    ))}
                </div>
            </div>

            <div className="projects-section">
                <h2 className="projects-subtitle">Experiments</h2>
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

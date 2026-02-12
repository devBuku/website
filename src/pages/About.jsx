import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h2>About</h2>

        <div className="about-image">
          <img src="/kediii.jpg" alt="Shubhayan Bagchi" />
        </div>

        <p>
          I’m a final-year B.Tech Computer Science student based in Kolkata,
          focused on backend engineering and full-stack development. I work
          primarily with REST APIs, authentication systems, and database-backed
          applications.
        </p>

        <p>
          Over the past few years, I’ve built multiple full-stack systems
          involving real-time features, AI integrations, and structured backend
          services. My work has helped me develop a strong understanding of API
          design, data modeling, and production-oriented architecture.
        </p>

        <p>
          I was a Smart India Hackathon 2023 Finalist and currently serve as
          Group Leader of the Coding Club, where I mentor juniors in full-stack
          development and guide project architecture decisions.
        </p>

        <p>
          I use{" "}
          <a href="https://www.debian.org/" target="_blank" rel="noreferrer">
            Debian
          </a>{" "}
          as my primary OS. Most of my development happens inside{" "}
          <a
            href="https://www.gnu.org/software/emacs/"
            target="_blank"
            rel="noreferrer"
          >
            GNU Emacs
          </a>{" "}
          (Doom), with tmux and Docker for isolated development environments.
        </p>

        <p className="seeking">
          Currently seeking backend or full-stack engineering roles.
        </p>
      </div>

      <div className="about-right">
        <h3>Technical Stack</h3>
        <ul>
          <li>
            <strong>Languages:</strong> JavaScript, TypeScript, Structured Query
            Language (SQL)
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, RESTful APIs
          </li>
          <li>
            <strong>Frontend:</strong> React.js
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL
          </li>
          <li>
            <strong>Authentication:</strong> JSON Web Tokens (JWT), Cookie-based
            Authentication
          </li>
          <li>
            <strong>ORM:</strong> Prisma, Mongoose
          </li>
          <li>
            <strong>Tools:</strong> Docker, Git, Linux
          </li>
        </ul>

        <h3>Experience</h3>

        <div className="experience-item">
          <p>
            <strong>Group Leader</strong>
            <br />
            Coding Club, Swami Vivekananda Institute of Science & Technology,
            Kolkata
            <br />
            2023 – Present
          </p>
        </div>

        <div className="experience-item">
          <p>
            <strong>Smart India Hackathon 2023 Finalist</strong>
            <br />
            December 19–20, 2023
          </p>
        </div>

        <h3>Education</h3>
        <p>
          <strong>Bachelor of Technology (B.Tech)</strong>
          <br />
          Computer Science & Engineering
          <br />
          Swami Vivekananda Institute of Science & Technology, Kolkata
          <br />
          MAKAUT | 2022 – Present
        </p>

        <h3>Core Subjects</h3>
        <p>
          Data Structures & Algorithms, Database Management Systems (DBMS),
          Operating Systems, Computer Networks, Design & Analysis of Algorithms
        </p>
      </div>
    </section>
  );
}

export default About;

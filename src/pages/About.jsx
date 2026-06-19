import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h2>About</h2>

        <div className="about-image">
          <img src="/me.jpg" alt="Shubhayan Bagchi" />
        </div>

        <p>
          I'm a final-year Computer Science student from Kolkata focused on
          backend engineering and full-stack development. I enjoy building
          scalable web applications, designing APIs, and working with
          database-driven systems.
        </p>

        <p>
          Over the past few years, I've built projects involving real-time
          features, AI integrations, authentication systems, and
          production-oriented backend services. I was a Smart India Hackathon
          2023 Finalist and currently serve as Group Leader of my institute's
          Coding Club, mentoring students and helping guide project development.
        </p>

        <p>
          Outside of coding, I'm a Linux enthusiast who daily-drives{" "}
          <a href="https://fedoraproject.org/" target="_blank" rel="noreferrer">
            Fedora
          </a>{" "}
          with GNOME. Most of my development happens inside{" "}
          <a
            href="https://www.gnu.org/software/emacs/"
            target="_blank"
            rel="noreferrer"
          >
            GNU Emacs
          </a>{" "}
          (Doom), alongside tmux and Docker. I enjoy optimizing workflows almost
          as much as building software.
        </p>

        <div className="setup-image">
          <img
            src="/setup.png"
            alt="Development setup — Fedora, GNOME, Doom Emacs"
            loading="lazy"
          />
          <span className="setup-caption">
            My daily dev environment —{" "}
            <a href="https://github.com/devBuku/.dotfiles" target="_blank" rel="noreferrer">
              dotfiles
            </a>
          </span>
        </div>

        <p className="seeking">
          Currently seeking backend or full-stack engineering opportunities.
        </p>
      </div>

      <div className="about-right">
        <h3>Tech Stack</h3>

        <ul>
          <li>
            <strong>Languages:</strong> JavaScript, TypeScript, Python, C, SQL
          </li>

          <li>
            <strong>Backend:</strong> Node.js, Express.js, Flask, FastAPI, REST
            APIs
          </li>

          <li>
            <strong>Frontend:</strong> React.js, Tailwind CSS, Shadcn UI, MUI,
            Bootstrap
          </li>

          <li>
            <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL
          </li>

          <li>
            <strong>Authentication:</strong> JWT, Cookie-based Authentication
          </li>

          <li>
            <strong>ORMs:</strong> Prisma, Mongoose
          </li>

          <li>
            <strong>Tools:</strong> Docker, Git, GitHub, Linux, Postman
          </li>
        </ul>

        <h3>Experience</h3>

        <div className="experience-item">
          <p>
            <strong>Group Leader</strong>
            <br />
            Coding Club
            <br />
            Swami Vivekananda Institute of Science & Technology
            <br />
            2023 – Present
          </p>
        </div>

        <div className="experience-item">
          <p>
            <strong>Smart India Hackathon 2023 Finalist</strong>
            <br />
            December 2023
          </p>
        </div>

        <h3>Education</h3>

        <p>
          <strong>B.Tech in Computer Science & Engineering</strong>
          <br />
          Swami Vivekananda Institute of Science & Technology
          <br />
          MAKAUT
          <br />
          2022 – Present
        </p>
      </div>
    </section>
  );
}

export default About;

import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h2>About Me</h2>

        {/* Profile Image */}
        <div className="about-image">
          <img src="/kediii.jpg" alt="Shubhayan Bagchi" />
        </div>

        <p>
          I’m a final-year B.Tech Computer Science & Engineering student from
          Kolkata, currently focused on backend engineering and full-stack
          application development. I enjoy designing systems, building REST
          APIs, working with databases, and understanding how scalable software
          is structured behind the scenes.
        </p>

        <p>
          I’ve built real-world projects including a full-stack cab booking
          platform, an AI-powered multilingual chatbot, and a video dubbing
          assistant using speech recognition and translation technologies. These
          projects strengthened my understanding of authentication, API design,
          database modeling, and production-ready architecture.
        </p>

        <p>
          I was a Smart India Hackathon 2023 Finalist and Tech Fest Winner, and
          I currently serve as a Group Leader in the Coding Club where I mentor
          juniors in full-stack development.
        </p>

        <p>
          I’m actively seeking backend or full-stack software engineering roles
          where I can contribute to meaningful systems and continue growing as a
          developer.
        </p>
      </div>

      <div className="about-right">
        <h3>Technical Skills</h3>
        <ul>
          <li>JavaScript, TypeScript, SQL</li>
          <li>Node.js & Express.js</li>
          <li>React.js</li>
          <li>PostgreSQL, MongoDB, MySQL</li>
          <li>JWT & Cookie-based Authentication</li>
          <li>REST API Design</li>
          <li>Prisma & Mongoose</li>
          <li>Git & Linux (Daily Driver)</li>
        </ul>

        <h3>Education</h3>
        <p>
          <strong>B.Tech in Computer Science & Engineering</strong>
          <br />
          Swami Vivekananda Institute of Science & Technology, Kolkata
          <br />
          MAKAUT | 2022 – Present
        </p>

        <h3>Relevant Coursework</h3>
        <p>
          Data Structures & Algorithms, DBMS, Operating Systems, Computer
          Networks, Design & Analysis of Algorithms
        </p>
      </div>
    </section>
  );
}

export default About;

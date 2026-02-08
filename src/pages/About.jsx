import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <div className="about-left">

        <h2>About Me</h2>
        {/* Profile Image */}
        <div className="about-image">
          <img src="/me.jpg" alt="Shubhayan Bagchi" />
        </div>


        <p>
          I’m a final-year BTech Computer Science & Engineering student based in
          Kolkata, India. I enjoy building clean, user-focused web applications
          and learning how modern software is designed and scaled.
        </p>

        <p>
          My primary focus is frontend development using React and JavaScript,
          but I also have a solid understanding of core computer science
          concepts such as Data Structures, Object-Oriented Programming, DBMS,
          and Operating Systems.
        </p>

        <p>
          I’m actively looking for internship and entry-level software
          engineering opportunities where I can learn from experienced
          developers and contribute meaningfully to real-world projects.
        </p>
      </div>

      <div className="about-right">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>Basic Node.js</li>
          <li>Data Structures & Algorithms</li>
        </ul>

        <h3>Education</h3>
        <p>
          <strong>B.Tech in Computer Science & Engineering</strong><br />
          4th Year Undergraduate<br />
          Kolkata, India
        </p>
      </div>
    </section>
  );
}

export default About;

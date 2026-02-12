import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>

      <p className="contact-intro">
        If you'd like to collaborate, discuss opportunities, or talk about
        backend systems and engineering — feel free to reach out.
      </p>

      <div className="contact-links">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:shubhayanbagchi30@gmail.com">
            shubhayanbagchi30@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/devBuku" target="_blank" rel="noreferrer">
            github.com/devBuku
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/shubhayan-bagchi-b83522275"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/shubhayan-bagchi
          </a>
        </p>

        <p>
          <strong>Twitter:</strong>{" "}
          <a href="https://x.com/devBuku" target="_blank" rel="noreferrer">
            @devBuku
          </a>
        </p>

        <p>
          <strong>Location:</strong> Kolkata, India
        </p>
      </div>
    </section>
  );
}

export default Contact;

import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>
          Reach out if you’d like to collaborate, discuss opportunities,
          or just say hello. I’m currently open to internships and
          entry-level roles.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> yourname@email.com</p>
          <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
          <p><strong>Location:</strong> Kolkata, India</p>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

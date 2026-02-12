import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p>
            <a href="mailto:shubhayanbagchi30@gmail.com">
              shubhayanbagchi30@gmail.com
            </a>
          </p>
          <p>Kolkata, India</p>
        </div>

        <div className="footer-right">
          <p>© {new Date().getFullYear()} Shubhayan Bagchi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

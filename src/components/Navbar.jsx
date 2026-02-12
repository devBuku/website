import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import {
  HiOutlineDocumentDownload,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Shubhayan Bagchi (devBuku)</div>

      {/* Mobile Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </div>

      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={() => setMenuOpen(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-icons">
          <a
            href="https://www.linkedin.com/in/shubhayan-bagchi-b83522275"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/devBuku" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/devBuku" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="/resume.pdf" download>
            <HiOutlineDocumentDownload />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

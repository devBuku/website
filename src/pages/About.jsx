import "../styles/about.css";

function About() {
    return (
        <section className="about">
            <h2>About</h2>

            <div className="about-image">
                <img src="/me.jpg" alt="Shubhayan Bagchi" />
            </div>

            <p>
                Final-year B.Tech CSE at MAKAUT, Kolkata. I build backend
                systems and full-stack applications — REST APIs, secure
                auth, database-backed services, and the occasional C
                visualisation for fun.
            </p>

            <ul className="about-bullets">
                <li>End-to-end ownership: schema → API → deployment</li>
                <li>REST APIs with JWT / cookie auth, built for maintainability</li>
                <li>Clean code with a production-first mindset</li>
            </ul>

            <p>My dev environment, finely tuned:</p>

            <ul className="about-bullets">
                <li>
                    <strong>OS:</strong>{" "}
                    <a
                        href="https://archlinux.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Arch Linux
                    </a>{" "}
                    ·{" "}
                    <a
                        href="https://i3wm.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        i3wm
                    </a>{" "}
                    — tiling WM, keyboard-driven, zero mouse
                </li>
                <li>
                    <strong>Dotfiles:</strong>{" "}
                    <a
                        href="https://github.com/devBuku/.dotfiles"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/devBuku/.dotfiles
                    </a>{" "}
                    — i3, Doom Emacs, tmux
                </li>
                <li>
                    <strong>Editor:</strong> Doom Emacs (evil + LSP +
                    org-mode) · tmux · Docker
                </li>
            </ul>
        </section>
    );
}

export default About;

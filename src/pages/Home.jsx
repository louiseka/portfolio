import Projects from "./Projects/Projects";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1> Hello, I'm Louise</h1>
          <p>
            I'm a frontend developer specialising in accessible, responsive web
            interfaces, working with
            <span className="bold-text"> React</span>,
            <span className="bold-text"> TypeScript</span>, and
            <span className="bold-text"> JavaScript</span>. I care about
            building things that are well-structured and usable by everyone -
            not as an afterthought, but as a core part of how I work.
          </p>
          <Link
            className="medium-cta-link"
            to="https://github.com/louiseka"
            target="_blank"
            title="Louise Aldridge's GitHub profile"
          >
            Visit my GitHub <FaArrowRight className="icon" />
          </Link>
        </div>
        <img
          className="profile-img"
          src="./assets/louise-profile.webp"
          alt="Profile image of Louise smiling"
        />
      </section>
      <Projects />
    </main>
  );
}

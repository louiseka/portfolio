import Projects from "./Projects/Projects";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header>
        <div className="hero-text">
          <h1> Hello, I'm Louise</h1>
          <p>
            I’m a frontend developer specialising in React, TypeScript, and
            JavaScript. I combine strong coding skills with a focus on digital
            accessibility, creating websites and applications that are both
            user-friendly and mission-focused.
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
          src="./assets/louise-profile.png"
          alt="Profile image of Louise smiling"
        />
      </header>
      <Projects />
    </>
  );
}

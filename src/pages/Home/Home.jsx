import Projects from "../Projects/Projects";
import styles from "./Home.module.css";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1> Hello, I'm Louise</h1>
          <p>
            I’m a frontend developer working with
            <span className="boldText"> React</span>,{" "}
            <span className="boldText">TypeScript</span>, and{" "}
            <span className="boldText">JavaScript</span>. I combine strong
            coding skills with a focus on
            <span className="boldText"> digital accessibility</span>, creating
            websites and applications that are both user-friendly and
            mission-focused.
          </p>
          <Link
            className="mediumCtaLink"
            to="https://github.com/louiseka"
            target="_blank"
            aria-label="Louise Aldridge's GitHub profile"
          >
            Visit my GitHub <FaArrowRight className="icon" />
          </Link>
        </div>
        <img
          className="profileImg"
          src="./assets/louise-profile.webp"
          alt="Profile image of Louise smiling"
        />
      </section>
      <Projects />
    </main>
  );
}

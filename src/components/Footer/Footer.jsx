import {
  FaTerminal,
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <p className={styles.footerLogo}>
          <FaTerminal /> louise.codes
        </p>
      </div>

      <div className={styles.footerContainer}>
        <section className={styles.footerAbout}>
          <h2 className={styles.footerTitle}> Hello, I'm Louise</h2>
          <p>
            I’m a frontend developer specialising in React, TypeScript, and
            JavaScript. I combine strong coding skills with a focus on digital
            accessibility, creating websites and applications that are both
            user-friendly and mission-focused.
          </p>
        </section>

        <section className={styles.footerSocials}>
          <h2 className={styles.footerTitle}> Follow my coding journey</h2>
          <p>
            I regularly share my latest projects and learning milestones on my
            social accounts. You can find me on LinkedIn and GitHub. If you'd
            like to get in touch, feel free to send me an email.
          </p>
          <div className="social-icons-container">
            <a
              href="https://www.linkedin.com/in/louiseka/"
              target="_blank"
              aria-label="Louise Aldridge's Linked Profile"
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a
              href="https://github.com/louiseka"
              target="_blank"
              aria-label="Louise Aldridge's GitHub Profile"
            >
              <FaGithubSquare className={styles.socialIcon} />
            </a>

            <a
              href="mailto:louisekaldr@gmail.com"
              target="_blank"
              aria-label="Louise Aldridge's email contact"
            >
              <FaEnvelope className={styles.socialIcon} />
            </a>
          </div>
        </section>
      </div>

      <div className={styles.rightsContainer}>
        <small>
          All rights reserved. © {new Date().getFullYear()} Louise Aldridge. 
        </small>
      </div>
    </footer>
  );
}

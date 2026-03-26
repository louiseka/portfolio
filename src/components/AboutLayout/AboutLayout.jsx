import { Outlet, NavLink } from "react-router";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";
import styles from "./AboutLayout.module.css";

export default function AboutLayout() {
  return (
    <>
      <title>About - Louise Aldridge</title>
      <main>
        <section className={styles.aboutSection}>
          <div className={styles.text}>
            <h1>Let me introduce myself</h1>

            <p>
              I’m a frontend developer specialising in React, TypeScript, and
              JavaScript. I combine strong coding skills with a focus on digital
              accessibility, creating websites and applications that are both
              user-friendly and mission-focused.
            </p>
            <p>
              Before transitioning into frontend development, I worked in
              marketing and eCommerce, where I collaborated with developers to
              troubleshoot web issues via Jira, translate wireframes into live
              pages, and lead a small team to improve workflows. My time at
              AbilityNet introduced me to digital accessibility and the
              importance of inclusive online spaces, inspiring me to earn my
              IAAP CPACC certification and to develop my frontend skills.
            </p>
            <a
              className="mediumCtaLink"
              href="/assets/Resume-Louise-Aldridge.pdf"
              target="_blank"
              aria-label="Download a PDF copy of Louise Aldridge's CV."
            >
              Download a copy of my CV <FaFileDownload className="icon" />
            </a>
          </div>

          <img
            className="profileImg"
            src="/assets/louise-profile.webp"
            alt="Profile image of Louise smiling"
          />
        </section>

        <nav className={styles.aboutNav}>
          <ul>
            <li>
              <NavLink
                to="."
                end
                title="Louise Aldridge's skills"
                className={({ isActive }) =>
                  isActive ? "nav-active active" : ""
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="experience"
                title="Louise Aldridge's job history"
                className={({ isActive }) =>
                  isActive ? "nav-active active" : ""
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="education"
                title="Louise Aldridge's education history"
                className={({ isActive }) =>
                  isActive ? "nav-active active" : ""
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="certifications"
                title="Certifications that Louise Aldridge has obtained"
                className={({ isActive }) =>
                  isActive ? "nav-active active" : ""
                }
              >
                Certifications
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </>
  );
}

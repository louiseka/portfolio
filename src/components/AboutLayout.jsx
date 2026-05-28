import { Outlet, NavLink } from "react-router";
import { FaFileDownload } from "react-icons/fa";

export default function AboutLayout() {
  return (
    <>
      <title>About - Louise Aldridge</title>
      <main>
        <section className="about-section">
          <div className="hero-text">
            <h1>Let me introduce myself</h1>

            <p>
              I’m a Frontend Developer working with React, TypeScript, and
              JavaScript, specialising in accessible, responsive web interfaces.
              I focus on building usable, well-structured applications with
              attention to accessibility and real-world frontend implementation.
            </p>
            <p>
              Before moving into frontend development, I worked in marketing and
              eCommerce, where I gained hands-on experience supporting web
              platforms, collaborating with developers through Jira, and
              translating wireframes into live web pages. This gave me a strong
              understanding of how frontend work fits into broader product and
              content workflows. My time at AbilityNet introduced me to digital
              accessibility and inclusive design practices, which led me to earn
              my IAAP CPACC certification and continue developing my frontend
              engineering skills.
              <a
                className="medium-cta-link"
                href="/assets/Resume-Louise-Aldridge.pdf"
                target="_blank"
                title="Download a PDF copy of Louise Aldridge's CV."
              >
                Download a copy of my CV{" "}
                <FaFileDownload className="icon" />{" "}
              </a>{" "}
            </p>
          </div>

          <img
            className="profile-img"
            src="/assets/louise-profile.webp"
            alt="Profile image of Louise smiling"
          />
        </section>

        <nav className="about-nav">
          <NavLink
            to="."
            end
            title="Louise Aldridge's skills"
            className={({ isActive }) => (isActive ? "nav-active active" : "")}
          >
            Skills
          </NavLink>
          <NavLink
            to="experience"
            title="Louise Aldridge's job history"
            className={({ isActive }) => (isActive ? "nav-active active" : "")}
          >
            Experience
          </NavLink>
          <NavLink
            to="education"
            title="Louise Aldridge's education history"
            className={({ isActive }) => (isActive ? "nav-active active" : "")}
          >
            Education
          </NavLink>
          <NavLink
            to="certifications"
            title="Certifications that Louise Aldridge has obtained"
            className={({ isActive }) => (isActive ? "nav-active active" : "")}
          >
            Certifications
          </NavLink>
        </nav>
        <Outlet />
      </main>
    </>
  );
}

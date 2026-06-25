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
              I'm a frontend developer specialising in accessible, responsive
              web interfaces, working with React, TypeScript, and JavaScript. I
              care about building things that are well-structured and usable by
              everyone - not as an afterthought, but as a core part of how I
              work.
            </p>
            <p>
              Before moving into development, I worked in marketing and
              eCommerce - collaborating with developers to troubleshoot web
              issues, translating wireframes into live pages, and leading
              workflow improvements under tight deadlines. My time at AbilityNet
              introduced me to digital accessibility and inspired me to earn my
              IAAP CPACC certification. I've carried that focus into my
              engineering work.
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
